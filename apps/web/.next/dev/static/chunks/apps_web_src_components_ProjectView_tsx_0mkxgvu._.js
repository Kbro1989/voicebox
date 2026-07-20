(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/ProjectView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectView",
    ()=>ProjectView,
    "buildQuestionFormKey",
    ()=>buildQuestionFormKey,
    "clearStreamingConversationMarker",
    ()=>clearStreamingConversationMarker,
    "computeProducedFiles",
    ()=>computeProducedFiles,
    "createBufferedTextUpdates",
    ()=>createBufferedTextUpdates,
    "finalizeActiveAssistantMessagesOnStop",
    ()=>finalizeActiveAssistantMessagesOnStop,
    "findExistingArtifactProjectFile",
    ()=>findExistingArtifactProjectFile,
    "findSameTurnHtmlWriteForRecoveredArtifact",
    ()=>findSameTurnHtmlWriteForRecoveredArtifact,
    "hasRecoverableArtifactMessage",
    ()=>hasRecoverableArtifactMessage,
    "mergeRecoveredArtifact",
    ()=>mergeRecoveredArtifact,
    "mergeSavedPreviewComment",
    ()=>mergeSavedPreviewComment,
    "mergeServerMessagesIntoConversation",
    ()=>mergeServerMessagesIntoConversation,
    "projectSplitClassName",
    ()=>projectSplitClassName,
    "projectSplitStyle",
    ()=>projectSplitStyle,
    "resolveRetryTarget",
    ()=>resolveRetryTarget,
    "resolveSucceededRunStatus",
    ()=>resolveSucceededRunStatus,
    "selectPrimaryProjectFile",
    ()=>selectPrimaryProjectFile,
    "shouldClearActiveRunRefs",
    ()=>shouldClearActiveRunRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$manifest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/manifest.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$pointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/pointer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/recover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/question-form.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/QuestionForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$anthropic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/providers/anthropic.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$elevenlabs$2d$voices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/elevenlabs-voices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$project$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/project-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/identity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCoalescedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useCoalescedCallback.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$byok$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/byok-run.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/onboarding-session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/agentLabels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/projectName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/apiProtocol.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/notifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$chat$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/chat-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/resume.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$system$2d$package$2d$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/design-system-package-audit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/design-system-auto-prompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2d$attachment$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api-attachment-context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/comments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$produced$2d$files$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/produced-files.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$build$2d$pptx$2d$export$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/build-pptx-export-prompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AvatarMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AvatarMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntrySettingsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/EntrySettingsMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HandoffButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/HandoffButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PluginDetailsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ChatPane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$CritiqueTheaterMount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/CritiqueTheaterMount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/hooks/useCritiqueTheaterEnabled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/IframeKeepAlivePool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/auto-open-file.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-system-github-evidence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$jsx$2d$module$2d$refs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/jsx-module-refs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FileWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$share$2d$to$2d$community$2f$shareToCommunityPrompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/share-to-community/shareToCommunityPrompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useDesignMdState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useDesignMdState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useFinalizeProject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useFinalizeProject.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useProjectDetail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useProjectDetail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useTerminalLaunch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useTerminalLaunch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$build$2d$continue$2d$in$2d$cli$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/build-continue-in-cli-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$build$2d$clipboard$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/build-clipboard-prompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/copy-to-clipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$agentModelSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/agentModelSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$execution$2d$policy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/execution-policy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/aihubmix-image-models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resolve$2d$finalize$2d$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/resolve-finalize-request.ts [app-client] (ecmascript)");
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
function mergeSavedPreviewComment(current, saved) {
    const existingIndex = current.findIndex((comment)=>comment.id === saved.id);
    if (existingIndex < 0) return [
        ...current,
        saved
    ];
    return current.map((comment, index)=>index === existingIndex ? saved : comment);
}
function mergeServerMessageWithLocal(server, local) {
    if (!local) return server;
    const merged = {
        ...server
    };
    if (local.role === 'assistant' && server.role === 'assistant') {
        if ((local.content?.length ?? 0) > (server.content?.length ?? 0)) {
            merged.content = local.content;
        }
        if ((local.events?.length ?? 0) > (server.events?.length ?? 0)) {
            merged.events = local.events;
        }
    }
    if (!server.producedFiles?.length && local.producedFiles?.length) {
        merged.producedFiles = local.producedFiles;
    }
    if (!server.preTurnFileNames?.length && local.preTurnFileNames?.length) {
        merged.preTurnFileNames = local.preTurnFileNames;
    }
    if (!server.lastRunEventId && local.lastRunEventId) {
        merged.lastRunEventId = local.lastRunEventId;
    }
    if (!server.startedAt && local.startedAt) {
        merged.startedAt = local.startedAt;
    }
    if (!server.endedAt && local.endedAt) {
        merged.endedAt = local.endedAt;
    }
    if (!server.runStatus && local.runStatus) {
        merged.runStatus = local.runStatus;
    }
    return merged;
}
function mergeServerMessagesIntoConversation(current, serverMessages) {
    const currentById = new Map(current.map((message)=>[
            message.id,
            message
        ]));
    const serverIds = new Set(serverMessages.map((message)=>message.id));
    const merged = serverMessages.map((message)=>mergeServerMessageWithLocal(message, currentById.get(message.id)));
    for (const message of current){
        if (!serverIds.has(message.id)) merged.push(message);
    }
    return merged;
}
let liveArtifactEventSequence = 0;
const CHAT_PANEL_WIDTH_STORAGE_KEY = 'open-design.project.chatPanelWidth';
const DEFAULT_CHAT_PANEL_WIDTH = 460;
const MIN_CHAT_PANEL_WIDTH = 345;
const MAX_CHAT_PANEL_WIDTH = 720;
const COMMENT_INSPECTOR_PANEL_WIDTH = 320;
const MIN_WORKSPACE_PANEL_WIDTH = 400;
const SPLIT_RESIZE_HANDLE_WIDTH = 8;
const CHAT_PANEL_KEYBOARD_STEP = 16;
const DESIGN_SYSTEM_AUDIT_AUTO_REPAIR_ATTEMPTS = 2;
// Trailing-debounce window for the canonical (daemon + SQLite) tab-state write.
// Embedded-browser navigation bursts settle well within this; the local cache
// is written immediately so nothing is lost if the daemon write is coalesced.
const TAB_PERSIST_DEBOUNCE_MS = 400;
const MIN_NORMAL_SPLIT_WIDTH = MIN_CHAT_PANEL_WIDTH + SPLIT_RESIZE_HANDLE_WIDTH + MIN_WORKSPACE_PANEL_WIDTH;
function workspacePanelMinWidthForSplit(splitWidth) {
    if (!Number.isFinite(splitWidth) || splitWidth <= 0) return MIN_WORKSPACE_PANEL_WIDTH;
    return splitWidth < MIN_NORMAL_SPLIT_WIDTH ? 0 : MIN_WORKSPACE_PANEL_WIDTH;
}
function maxChatPanelWidthForSplit(splitWidth) {
    if (!Number.isFinite(splitWidth) || splitWidth <= 0) return MAX_CHAT_PANEL_WIDTH;
    const workspaceMinWidth = workspacePanelMinWidthForSplit(splitWidth);
    const viewportAwareMax = splitWidth - SPLIT_RESIZE_HANDLE_WIDTH - workspaceMinWidth;
    return Math.max(0, Math.min(MAX_CHAT_PANEL_WIDTH, Math.floor(viewportAwareMax)));
}
function clampPreferredChatPanelWidth(width) {
    return Math.min(MAX_CHAT_PANEL_WIDTH, Math.max(MIN_CHAT_PANEL_WIDTH, Math.round(width)));
}
function clampChatPanelWidth(width, maxWidth = MAX_CHAT_PANEL_WIDTH) {
    const effectiveMax = Math.max(0, Math.min(MAX_CHAT_PANEL_WIDTH, Math.floor(maxWidth)));
    const effectiveMin = Math.min(MIN_CHAT_PANEL_WIDTH, effectiveMax);
    return Math.min(effectiveMax, Math.max(effectiveMin, Math.round(width)));
}
function designSystemFeedbackAttachments(projectFiles, sectionFiles) {
    const fileLookup = new Map(projectFiles.map((file)=>[
            file.name,
            file
        ]));
    return sectionFiles.map((name)=>fileLookup.get(name)).filter((file)=>Boolean(file)).slice(0, 8).map((file)=>({
            path: file.name,
            name: file.name,
            kind: file.kind === 'image' ? 'image' : 'file',
            size: file.size
        }));
}
function chatAttachmentsFromPreviewCommentImages(images) {
    if (!Array.isArray(images)) return [];
    const seen = new Set();
    const out = [];
    for (const image of images){
        const path = image.path.trim();
        if (!path || seen.has(path)) continue;
        seen.add(path);
        out.push({
            path,
            name: image.name.trim() || path.split('/').pop() || path,
            kind: 'image'
        });
    }
    return out;
}
function mergeChatAttachments(...groups) {
    const seen = new Set();
    const out = [];
    for (const group of groups){
        for (const attachment of group){
            const path = attachment.path.trim();
            if (!path || seen.has(path)) continue;
            seen.add(path);
            out.push({
                ...attachment,
                path
            });
        }
    }
    return out;
}
function historyWithWorkspaceContext(history, messageId, context) {
    const items = context?.workspaceItems ?? [];
    if (items.length === 0) return history;
    const block = [
        '',
        '',
        '<active-workspace-context>',
        'Open Design selected the currently focused workspace tab as the default context for this turn.',
        ...items.map((item, index)=>{
            const details = [
                item.path ? `path: ${item.path}` : null,
                item.absolutePath ? `absolute: ${item.absolutePath}` : null,
                item.url ? `url: ${item.url}` : null,
                item.title ? `title: ${item.title}` : null,
                item.tabId ? `tab: ${item.tabId}` : null
            ].filter(Boolean).join(' | ');
            return `${index + 1}. ${item.kind}: ${item.label}${details ? ` | ${details}` : ''}`;
        }),
        '</active-workspace-context>'
    ].join('\n');
    return history.map((message)=>message.id === messageId && message.role === 'user' ? {
            ...message,
            content: `${message.content}${block}`
        } : message);
}
function commentTaskQuery(attachment) {
    return (attachment.comment ?? '').trim();
}
function commentTaskContextAttachment(attachment) {
    return {
        ...attachment,
        comment: '',
        commentContext: 'query'
    };
}
function designSystemNeedsWorkPrompt(sectionTitle, feedback, sectionFiles) {
    const fileList = sectionFiles.length > 0 ? sectionFiles.map((name)=>`- @${name}`).join('\n') : '- No generated files are registered for this section yet.';
    return `Needs work on the design system section "${sectionTitle}".\n\n` + `User feedback:\n${feedback}\n\n` + `Relevant section files:\n${fileList}\n\n` + 'Revise the design-system project files directly. Keep DESIGN.md, tokens, previews, UI kit examples, and assets consistent with the feedback. ' + 'After editing, summarize what changed and which files should be reviewed again.';
}
function readSavedChatPanelWidth() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(CHAT_PANEL_WIDTH_STORAGE_KEY);
        const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN;
        return Number.isFinite(parsed) ? clampPreferredChatPanelWidth(parsed) : DEFAULT_CHAT_PANEL_WIDTH;
    } catch  {
        return DEFAULT_CHAT_PANEL_WIDTH;
    }
}
function saveChatPanelWidth(width) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(CHAT_PANEL_WIDTH_STORAGE_KEY, String(clampPreferredChatPanelWidth(width)));
    } catch  {
    // localStorage can be unavailable in hardened browser contexts.
    }
}
function autoSendFirstMessageKey(projectId) {
    return `od:auto-send-first:${projectId}`;
}
function autoSendAttachmentsKey(projectId) {
    return `od:auto-send-attachments:${projectId}`;
}
function designSystemAuditAutoRepairKey(projectId) {
    return `od:design-system-audit-auto-repair:${projectId}`;
}
function readAutoSendAttachments(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.sessionStorage.getItem(autoSendAttachmentsKey(projectId));
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(isStoredChatAttachment);
    } catch  {
        return [];
    }
}
function clearAutoSendSession(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.sessionStorage.removeItem(autoSendFirstMessageKey(projectId));
        window.sessionStorage.removeItem(autoSendAttachmentsKey(projectId));
    } catch  {
    /* ignore */ }
}
function markDesignSystemAuditAutoRepairEligible(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.sessionStorage.setItem(designSystemAuditAutoRepairKey(projectId), String(DESIGN_SYSTEM_AUDIT_AUTO_REPAIR_ATTEMPTS));
    } catch  {
    /* ignore */ }
}
function consumeDesignSystemAuditAutoRepair(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const key = designSystemAuditAutoRepairKey(projectId);
        const raw = window.sessionStorage.getItem(key);
        const attemptsRemaining = raw ? Number.parseInt(raw, 10) : 0;
        if (!Number.isFinite(attemptsRemaining) || attemptsRemaining <= 0) {
            window.sessionStorage.removeItem(key);
            return false;
        }
        const nextAttemptsRemaining = attemptsRemaining - 1;
        if (nextAttemptsRemaining > 0) {
            window.sessionStorage.setItem(key, String(nextAttemptsRemaining));
        } else {
            window.sessionStorage.removeItem(key);
        }
        return true;
    } catch  {
        return false;
    }
}
function clearDesignSystemAuditAutoRepair(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.sessionStorage.removeItem(designSystemAuditAutoRepairKey(projectId));
    } catch  {
    /* ignore */ }
}
function isDesignSystemWorkspaceMetadata(metadata) {
    return metadata?.importedFrom === 'design-system';
}
function isStoredChatAttachment(value) {
    if (value === null || typeof value !== 'object') return false;
    const record = value;
    return typeof record.path === 'string' && record.path.length > 0 && typeof record.name === 'string' && record.name.length > 0 && (record.kind === 'image' || record.kind === 'file') && (record.size === undefined || typeof record.size === 'number') && (record.order === undefined || typeof record.order === 'number');
}
function workspaceContextItemEqual(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    return a.id === b.id && a.kind === b.kind && a.label === b.label && (a.tabId ?? '') === (b.tabId ?? '') && (a.path ?? '') === (b.path ?? '') && (a.absolutePath ?? '') === (b.absolutePath ?? '') && (a.url ?? '') === (b.url ?? '') && (a.title ?? '') === (b.title ?? '');
}
function workspaceContextItemsEqual(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    return a.every((item, index)=>workspaceContextItemEqual(item, b[index] ?? null));
}
function appendLiveArtifactEventItem(prev, event) {
    liveArtifactEventSequence += 1;
    const next = [
        ...prev,
        {
            id: liveArtifactEventSequence,
            event
        }
    ];
    return next.length > 50 ? next.slice(next.length - 50) : next;
}
function projectSplitClassName(workspaceFocused) {
    return workspaceFocused ? 'split split-focus' : 'split';
}
function buildQuestionFormKey(conversationId, assistantMessageId, hasForm) {
    return conversationId && assistantMessageId && hasForm ? `${conversationId}:${assistantMessageId}` : null;
}
function projectSplitStyle(workspaceFocused, chatPanelWidth, workspacePanelTrack) {
    if (workspaceFocused) return undefined;
    return {
        '--project-chat-panel-width': `${chatPanelWidth}px`,
        '--project-workspace-panel-track': workspacePanelTrack,
        gridTemplateColumns: `${chatPanelWidth}px ${SPLIT_RESIZE_HANDLE_WIDTH}px ${workspacePanelTrack}`
    };
}
function applySplitChatPanelWidth(split, width, workspacePanelTrack) {
    if (!split) return;
    split.style.setProperty('--project-chat-panel-width', `${width}px`);
    split.style.gridTemplateColumns = `${width}px ${SPLIT_RESIZE_HANDLE_WIDTH}px ${workspacePanelTrack}`;
}
function shouldFetchElevenLabsVoiceOptions(project) {
    const metadata = project.metadata;
    return metadata?.kind === 'audio' && metadata.audioKind === 'speech' && metadata.audioModel === 'elevenlabs-v3' && !metadata.voice;
}
// The media model the user picked in the New Project → Media dialog, keyed by
// surface. For BYOK providers (AIHubMix) media is produced by the generate_*
// chat tools whose default model comes from the per-request byok*Model field —
// NOT the `od media generate` dispatcher — so without this seed the dialog pick
// is dropped and the conversation falls back to the Settings default. Returns
// undefined for non-media projects (and when the field is empty) so callers fall
// back to the Settings default exactly as before. The daemon re-validates the id
// against the active provider's registry, so a mismatched pick is safely ignored.
function projectMediaModelSeed(metadata, surface) {
    if (!metadata) return undefined;
    if (surface === 'image' && metadata.kind === 'image') {
        return metadata.imageModel?.trim() || undefined;
    }
    if (surface === 'video' && metadata.kind === 'video') {
        return metadata.videoModel?.trim() || undefined;
    }
    if (surface === 'speech' && metadata.kind === 'audio' && metadata.audioKind === 'speech') {
        return metadata.audioModel?.trim() || undefined;
    }
    return undefined;
}
function projectMediaVoiceSeed(metadata) {
    if (metadata?.kind === 'audio' && metadata.audioKind === 'speech') {
        return metadata.voice?.trim() || undefined;
    }
    return undefined;
}
// Carry the creation-time model pick into the conversation ONLY when it belongs
// to the active BYOK provider. Guards against clobbering a user's Settings
// default with a model from a different provider — e.g. a SenseAudio user whose
// image project was created with the dialog's default `gpt-image-2` keeps their
// configured SenseAudio model instead of being forced to the registry default.
// AIHubMix's live (`aihubmix-` prefixed) ids resolve via mediaModelProviderId
// without waiting on the async catalogue, so the AIHubMix path still seeds.
function byokModelSeedForProtocol(metadata, surface, protocol) {
    const picked = projectMediaModelSeed(metadata, surface);
    if (!picked) return undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mediaModelProviderId"])(picked) === protocol ? picked : undefined;
}
function projectEventToAgentEvent(evt) {
    if (evt.type === 'file-changed') return null;
    if (evt.type === 'conversation-created') return null;
    if (evt.type === 'live_artifact') {
        return {
            kind: 'live_artifact',
            action: evt.action,
            projectId: evt.projectId,
            artifactId: evt.artifactId,
            title: evt.title,
            refreshStatus: evt.refreshStatus
        };
    }
    return {
        kind: 'live_artifact_refresh',
        phase: evt.phase,
        projectId: evt.projectId,
        artifactId: evt.artifactId,
        refreshId: evt.refreshId,
        title: evt.title,
        refreshedSourceCount: evt.refreshedSourceCount,
        error: evt.error
    };
}
function artifactWithHtml(artifact, fallbackIdentifier, html) {
    return artifact ? {
        ...artifact,
        html
    } : {
        identifier: fallbackIdentifier,
        title: '',
        html
    };
}
function ProjectView({ project, routeFileName, routeConversationId = null, config, agents, skills, designTemplates, designSystems, daemonLive, onModeChange, onAgentChange, onAgentModelChange, onApiModelChange, onRefreshAgents, onThemeChange, onOpenSettings, onOpenAmrSettings, onOpenMcpSettings, onBrowsePlugins, onOpenConnectors, onAdoptPetInline, onTogglePet, onOpenPetSettings, onBack, onClearPendingPrompt, onTouchProject, onProjectChange, onProjectsRefresh, onChangeDefaultDesignSystem, onDesignSystemsRefresh }) {
    _s();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const iframeKeepAlivePool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframeKeepAlivePool"])();
    const handleThemeChange = onThemeChange ?? (()=>{});
    // P0 page_view page_name=chat_panel — fire once per project mount.
    // ProjectView outlives conversation switches (ChatPane is keyed by
    // activeConversationId so it remounts when the user switches chats,
    // but this component does not), so page_view stays a "chat-panel
    // entry" metric instead of becoming a "conversation switch" count.
    // Reviewer #2285 (mrcfps, 2026-05-20 04:08) flagged the previous
    // ChatComposer-level emit for skewing the funnel.
    const chatPanelPageViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const trackedTimeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            mountedRef.current = true;
            return ({
                "ProjectView.useEffect": ()=>{
                    mountedRef.current = false;
                    for (const timer of trackedTimeoutsRef.current)clearTimeout(timer);
                    trackedTimeoutsRef.current.clear();
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], []);
    const scheduleProjectTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[scheduleProjectTimeout]": (callback, delayMs)=>{
            if (!mountedRef.current) return null;
            const timer = setTimeout({
                "ProjectView.useCallback[scheduleProjectTimeout].timer": ()=>{
                    trackedTimeoutsRef.current.delete(timer);
                    if (!mountedRef.current) return;
                    callback();
                }
            }["ProjectView.useCallback[scheduleProjectTimeout].timer"], delayMs);
            trackedTimeoutsRef.current.add(timer);
            return timer;
        }
    }["ProjectView.useCallback[scheduleProjectTimeout]"], []);
    const clearProjectTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[clearProjectTimeout]": (timer)=>{
            if (timer == null) return;
            clearTimeout(timer);
            trackedTimeoutsRef.current.delete(timer);
        }
    }["ProjectView.useCallback[clearProjectTimeout]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (chatPanelPageViewFiredRef.current === project.id) return;
            chatPanelPageViewFiredRef.current = project.id;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'chat_panel'
            });
            // Onboarding's 4th step ("生成进度页") fires here, not in
            // `DesignSystemDetailView`: the Generate path navigates
            // straight to the project's chat_panel, not to the design
            // system detail surface. If an onboarding session id is still
            // in sessionStorage we stamp the funnel's last row here and
            // clear so any later DS visit doesn't inherit the attribution.
            // E2E (2026-05-21) confirmed this is the only path users
            // actually take — observed: page_view chat_panel fires, but
            // page_view design_system_project never did because that
            // route isn't visited from the embedded onboarding generate.
            const onboardingSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peekOnboardingSessionId"])();
            if (onboardingSessionId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                    page_name: 'onboarding',
                    area: 'generation_progress',
                    step_index: 'progress',
                    step_name: 'generation',
                    onboarding_session_id: onboardingSessionId
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$onboarding$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearOnboardingSessionId"])();
            }
        }
    }["ProjectView.useEffect"], [
        analytics.track,
        project.id
    ]);
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const conversationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            conversationsRef.current = conversations;
        }
    }["ProjectView.useEffect"], [
        conversations
    ]);
    const [activeConversationId, setActiveConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[activeConversation]": ()=>conversations.find({
                "ProjectView.useMemo[activeConversation]": (conversation)=>conversation.id === activeConversationId
            }["ProjectView.useMemo[activeConversation]"]) ?? null
    }["ProjectView.useMemo[activeConversation]"], [
        conversations,
        activeConversationId
    ]);
    const activeSessionMode = activeConversation?.sessionMode ?? 'design';
    const [messagesConversationId, setMessagesConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [failedMessagesConversationId, setFailedMessagesConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conversationLoadError, setConversationLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messageLoadRetryNonce, setMessageLoadRetryNonce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [forkingMessageId, setForkingMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activePluginActionPaths, setActivePluginActionPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>new Set()
    }["ProjectView.useState"]);
    const [hiddenAssistantPluginActionPaths, setHiddenAssistantPluginActionPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>new Set()
    }["ProjectView.useState"]);
    const [forceStreamingPluginMessageIds, setForceStreamingPluginMessageIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>new Set()
    }["ProjectView.useState"]);
    // Ephemeral, live-only accumulation of a tool call's streaming JSON input,
    // keyed by tool-use id (globally unique per run). Fed by `onToolInputDelta`
    // while the model is still emitting `input_json_delta`; dropped per-id once
    // the full `tool_use` lands and wiped when the run ends. Never persisted —
    // see daemon `daemonAgentPayloadToPersistedAgentEvent` (returns null).
    // `seq` records how many persisted events existed when the tool started
    // streaming, so the renderer can place the live card at the tool call's
    // position in the message (text before it = preamble, after it = hedging).
    const [liveToolInput, setLiveToolInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // True once the initial DB read for the active conversation has settled.
    // Auto-send gates on this so it can't fire before listMessages resolves and
    // race-clobber the freshly-pushed user + assistant placeholder. Without
    // this, the auto-send writes [user, assistant] into state, then the still
    // in-flight listMessages PUT response arrives, runs setMessages(list), and
    // wipes both — leaving the daemon's run with no client-side message to
    // attach the runId to.
    const [messagesInitialized, setMessagesInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewComments, setPreviewComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Mirror so the send-now interrupt path can read the current statuses
    // synchronously without re-creating its callback on every comment change.
    const previewCommentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            previewCommentsRef.current = previewComments;
        }
    }["ProjectView.useEffect"], [
        previewComments
    ]);
    const [attachedComments, setAttachedComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [streaming, setStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streamingConversationId, setStreamingConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Safety net: drop any live tool-input partials whose tool never produced a
    // full `tool_use` (run errored/canceled mid-call) once streaming settles.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!streaming) setLiveToolInput({
                "ProjectView.useEffect": (prev)=>Object.keys(prev).length ? {} : prev
            }["ProjectView.useEffect"]);
        }
    }["ProjectView.useEffect"], [
        streaming
    ]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [audioVoiceOptionsError, setAudioVoiceOptionsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [artifact, setArtifact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filesRefresh, setFilesRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // True while a working-dir replace is reindexing the new folder. Surfaced
    // to the Design Files panel so the file list shows a loading state instead
    // of silently sitting on the old tree for the few seconds the scan takes.
    const [projectFiles, setProjectFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const projectFilesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [liveArtifacts, setLiveArtifacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [liveArtifactEvents, setLiveArtifactEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workspaceFocused, setWorkspaceFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commentInspectorActive, setCommentInspectorActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const commentInspectorPortalId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const leftInspectorActive = commentInspectorActive;
    // Per-session override for the BYOK chat's generate_image tool. Seeded once
    // from the New Project → Media model pick (project.metadata.imageModel) — but
    // only when that pick belongs to the active BYOK provider (see
    // byokModelSeedForProtocol) — falling back to the Settings default
    // (config.byokImageModel) otherwise. Subsequent selections live only in this
    // component's state — page refresh / project switch resets to this seed.
    // Persistent defaults live in Settings → BYOK → Image generation model.
    const [byokImageModelOverride, setByokImageModelOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>byokModelSeedForProtocol(project.metadata, 'image', config.apiProtocol) ?? config.byokImageModel ?? ''
    }["ProjectView.useState"]);
    // Same per-session override for the BYOK chat's generate_video tool, seeded
    // from the project's videoModel pick (provider-gated), then Settings.
    const [byokVideoModelOverride, setByokVideoModelOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>byokModelSeedForProtocol(project.metadata, 'video', config.apiProtocol) ?? config.byokVideoModel ?? ''
    }["ProjectView.useState"]);
    // Same per-session overrides for the BYOK chat's generate_speech tool (model +
    // voice), seeded from the project's speech pick (provider-gated), then Settings.
    const [byokSpeechModelOverride, setByokSpeechModelOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>byokModelSeedForProtocol(project.metadata, 'speech', config.apiProtocol) ?? config.byokSpeechModel ?? ''
    }["ProjectView.useState"]);
    // Voice only carries when the speech model itself is carried (same provider),
    // so a cross-provider voice id never leaks into the request.
    const [byokSpeechVoiceOverride, setByokSpeechVoiceOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProjectView.useState": ()=>(byokModelSeedForProtocol(project.metadata, 'speech', config.apiProtocol) ? projectMediaVoiceSeed(project.metadata) : undefined) ?? config.byokSpeechVoice ?? ''
    }["ProjectView.useState"]);
    // Live model option lists (same hooks the composer/Settings pickers use) so
    // the chat "default" (no explicit pick) resolves to the FIRST catalogue model
    // shown in the dropdown — not a hardcoded id. The daemon keeps its own
    // fallback for when the catalogue hasn't loaded.
    const byokImageModelOptionsPV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokImageModelOptions"])(config.apiProtocol);
    const byokVideoModelOptionsPV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokVideoModelOptions"])(config.apiProtocol);
    const byokSpeechModelOptionsPV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokSpeechModelOptions"])(config.apiProtocol);
    // PR #974 round 7 (mrcfps @ useDesignMdState.ts:131): counter that
    // bumps on file-changed SSE events, live_artifact* events, and the
    // chat streaming-completion edge so the staleness chip stays in sync
    // with the underlying mtimes / conversation updatedAt as the user
    // keeps working post-finalize. The hook treats it as a dep and
    // recomputes whenever it changes.
    const [designMdRefreshKey, setDesignMdRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // ----- Continue in CLI / Finalize design package wiring (#451) -----
    // The toast surface is shared between Finalize errors and the
    // success/fallback toasts emitted from handleContinueInCli.
    const projectDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useProjectDetail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectDetail"])(project.id);
    const designMdState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useDesignMdState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignMdState"])(project.id, designMdRefreshKey);
    const finalize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useFinalizeProject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinalizeProject"])(project.id);
    const terminalLauncher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useTerminalLaunch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerminalLaunch"])();
    const [projectActionsToast, setProjectActionsToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatSeed, setChatSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoAuditRepairSeed, setAutoAuditRepairSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatPanelWidth, setChatPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(readSavedChatPanelWidth);
    const [chatPanelMaxWidth, setChatPanelMaxWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MAX_CHAT_PANEL_WIDTH);
    const [workspacePanelMinWidth, setWorkspacePanelMinWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MIN_WORKSPACE_PANEL_WIDTH);
    const [resizingChatPanel, setResizingChatPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const splitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatPanelWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chatPanelWidth);
    const preferredChatPanelWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chatPanelWidth);
    const resizeStartPreferredWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chatPanelWidth);
    const chatPanelMaxWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chatPanelMaxWidth);
    const resizeStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerCleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingPointerClientXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The persisted set of open tabs + active tab. Persisted via PUT on every
    // change; loaded once when the project mounts.
    const [openTabsState, setOpenTabsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tabs: [],
        active: null
    });
    // Artifact context for the header actions (settings gear, handoff) that live
    // in this workspace's header alongside FileViewer's present/share/download.
    // Mirrors the artifact_id / artifact_kind that FileViewer attaches, derived
    // from the currently-active file tab, so all artifact_header analytics carry
    // the same dimensions. Undefined on non-file tabs (e.g. the file list).
    const headerArtifact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[headerArtifact]": ()=>{
            const activeName = openTabsState.active;
            const file = activeName ? projectFiles.find({
                "ProjectView.useMemo[headerArtifact]": (entry)=>entry.name === activeName
            }["ProjectView.useMemo[headerArtifact]"]) ?? null : null;
            if (!file) return {};
            return {
                artifact_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anonymizeArtifactId"])({
                    projectId: project.id,
                    fileName: file.name
                }),
                artifact_kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["artifactKindToTracking"])({
                    fileKind: file.kind ?? null
                })
            };
        }
    }["ProjectView.useMemo[headerArtifact]"], [
        openTabsState.active,
        projectFiles,
        project.id
    ]);
    const routeFileNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(routeFileName);
    routeFileNameRef.current = routeFileName;
    const [activeWorkspaceContext, setActiveWorkspaceContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workspaceContexts, setWorkspaceContexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const tabsLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const tabsHydratedFromSavedStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasAppliedInitialPrimaryOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Routed to FileWorkspace — bumped whenever the user clicks "open" on a
    // tool card, an attachment chip, or a produced-file chip in chat. We
    // include a nonce so re-clicking the same name after the user closed the
    // tab still focuses it.
    const [openRequest, setOpenRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Like `openRequest`, but additionally asks the preview workspace to open the
    // file's Share/Export menu. Drives the "Share" next-step action: it reuses the
    // existing export/deploy surface rather than introducing a new share backend.
    const [shareRequest, setShareRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Parallel to shareRequest, but opens the workspace's Download/Export menu.
    const [downloadRequest, setDownloadRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // When a queued chat send starts processing, ask the workspace to flip the
    // deck preview to the slide its marked element lives on, so the user watches
    // the edit land in context instead of staying parked on slide 1. Mirrors the
    // `shareRequest` nonce signal: FileWorkspace matches `name` against the open
    // file and FileViewer consumes each nonce once.
    const [slideNavRequest, setSlideNavRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Runs explicitly superseded by a "send now" interrupt. Their abort
    // controller is recorded here synchronously — before handleStop() clears the
    // active refs — so the run's late terminal callbacks (which the daemon still
    // delivers for a canceled run) can be recognized as stale and skip every
    // current-run side effect, independent of abortRef churn. A WeakSet so a
    // finished run's controller is collected once nothing else references it.
    const supersededRunsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new WeakSet());
    const streamingConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [queuedChatSends, setQueuedChatSends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const queuedChatSendsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sendTextBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reattachTextBuffersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const reattachControllersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const reattachCancelControllersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const completedReattachRunsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const recoveredArtifactMessagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const startingQueuedChatSendIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [queuedAutoStartTick, setQueuedAutoStartTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const skillCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const designCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const templateCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // We auto-save the most recent artifact to the project folder. Track the
    // last name we persisted so re-renders during streaming don't spawn
    // duplicate writes.
    const savedArtifactRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Pending Write tool invocations: tool_use_id -> destination basename.
    // When the matching tool_result lands we refresh the file list and open
    // the file as a tab once. Keying off the tool_use_id (rather than
    // diffing the file list at end-of-turn) lets us auto-open the moment
    // the agent's Write actually completes, without the previous synthetic
    // "live" tab that was causing flicker against manual opens.
    const pendingWritesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Track which conversation the current messages belong to, so we can
    // correctly gate new-conversation creation even during async loads.
    const messagesConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const creatingConversationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Last conversation id this view pushed into the URL. Lets the
    // route -> active-conversation sync tell a genuine external navigation
    // apart from the URL merely lagging a local conversation switch.
    const lastSyncedConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Live mirror of the currently-viewed project id. Used to bail out of
    // the conversation-created async refresh (#1361) if the user switches
    // projects while the refetch is in flight — the existing project-load
    // effects use the same kind of cancellation guard.
    const projectIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(project.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            projectIdRef.current = project.id;
        }
    }["ProjectView.useEffect"], [
        project.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            messagesRef.current = messages;
        }
    }["ProjectView.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            setChatSeed(null);
            setAutoAuditRepairSeed(null);
            const restored = loadQueuedChatSends(project.id);
            queuedChatSendsRef.current = restored;
            setQueuedChatSends(restored);
        }
    }["ProjectView.useEffect"], [
        project.id
    ]);
    // Monotonic token bumped on every `conversation-created` refresh dispatch.
    // Two rapid events (e.g. concurrent routine runs against the same reused
    // project, #1502) can start overlapping `listConversations` calls; if the
    // later request resolves first with N+1 conversations and the earlier
    // request resolves afterwards with only N, an unconditional
    // `setConversations(list)` would drop the newest conversation. Each
    // dispatch captures the token at start; only the dispatch whose token
    // still equals `conversationsRefreshTokenRef.current` at await-return is
    // allowed to apply its result.
    const conversationsRefreshTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [creatingConversation, setCreatingConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentConversationHasActiveRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[currentConversationHasActiveRun]": ()=>messages.some({
                "ProjectView.useMemo[currentConversationHasActiveRun]": (m)=>m.role === 'assistant' && isActiveRunStatus(m.runStatus)
            }["ProjectView.useMemo[currentConversationHasActiveRun]"])
    }["ProjectView.useMemo[currentConversationHasActiveRun]"], [
        messages
    ]);
    const currentConversationHasRecoverableArtifact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[currentConversationHasRecoverableArtifact]": ()=>messages.some({
                "ProjectView.useMemo[currentConversationHasRecoverableArtifact]": (message)=>hasRecoverableArtifactMessage(message)
            }["ProjectView.useMemo[currentConversationHasRecoverableArtifact]"])
    }["ProjectView.useMemo[currentConversationHasRecoverableArtifact]"], [
        messages
    ]);
    const currentConversationLoading = Boolean(activeConversationId && messagesConversationId !== activeConversationId && failedMessagesConversationId !== activeConversationId);
    const currentConversationStreaming = streaming && streamingConversationId === activeConversationId;
    const currentConversationBusy = currentConversationLoading || currentConversationStreaming || currentConversationHasActiveRun;
    const currentConversationAwaitingActiveRunAttach = currentConversationHasActiveRun && !currentConversationStreaming;
    const currentConversationSendDisabled = currentConversationLoading || failedMessagesConversationId === activeConversationId || currentConversationAwaitingActiveRunAttach;
    const currentConversationActionDisabled = currentConversationBusy || currentConversationSendDisabled;
    const currentConversationQueueDisabled = currentConversationLoading || failedMessagesConversationId === activeConversationId;
    // The discovery question form lives in the right-hand Questions tab. We
    // derive it from the latest assistant message: if that message embeds a
    // <question-form> block, the panel renders it. The form is interactive
    // only while it's the most recent turn and the user hasn't answered yet
    // (an answer arrives as a following "[form answers …]" user message).
    const lastAssistantIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[lastAssistantIndex]": ()=>{
            for(let i = messages.length - 1; i >= 0; i--){
                if (messages[i]?.role === 'assistant') return i;
            }
            return -1;
        }
    }["ProjectView.useMemo[lastAssistantIndex]"], [
        messages
    ]);
    const lastAssistantContent = lastAssistantIndex >= 0 ? messages[lastAssistantIndex]?.content ?? '' : '';
    const lastAssistantMessageId = lastAssistantIndex >= 0 ? messages[lastAssistantIndex]?.id ?? null : null;
    const questionForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[questionForm]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFirstQuestionForm"])(lastAssistantContent)?.form ?? null
    }["ProjectView.useMemo[questionForm]"], [
        lastAssistantContent
    ]);
    const questionFormSubmittedAnswers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[questionFormSubmittedAnswers]": ()=>{
            if (!questionForm) return undefined;
            for(let i = lastAssistantIndex + 1; i < messages.length; i++){
                const m = messages[i];
                if (m?.role !== 'user') continue;
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSubmittedAnswers"])(questionForm, m.content ?? '');
                if (parsed) return parsed;
            }
            return undefined;
        }
    }["ProjectView.useMemo[questionFormSubmittedAnswers]"], [
        questionForm,
        lastAssistantIndex,
        messages
    ]);
    const questionsGenerating = currentConversationStreaming && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasUnterminatedQuestionForm"])(lastAssistantContent);
    // While the form is still streaming, parse it tolerantly so the Questions tab
    // can show a frame (title) immediately and fill questions in as they arrive.
    const questionFormPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[questionFormPreview]": ()=>questionsGenerating ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePartialQuestionForm"])(lastAssistantContent) : null
    }["ProjectView.useMemo[questionFormPreview]"], [
        questionsGenerating,
        lastAssistantContent
    ]);
    // The active (latest, unanswered) form stays editable the whole time it's on
    // screen — while it streams in AND while the turn is still busy — so it never
    // flickers between the locked (grey) and interactive (accent) styles.
    // Submission is gated separately by the panel via `submitDisabled`/generating.
    const questionFormActive = (!!questionForm || questionsGenerating) && questionFormSubmittedAnswers === undefined;
    // Mirror `questionFormActive`'s unanswered gate: once the user answers, the
    // Questions tab closes, so the auto-focus nonce must not treat an answered
    // form as a freshly appeared one.
    const hasQuestions = Boolean(questionForm || questionsGenerating) && questionFormSubmittedAnswers === undefined;
    // Stable identity for the current form occurrence, used to remember that its
    // one-by-one reveal already played. Keyed on the conversation + the hosting
    // assistant message id (not the message index, and NOT the parsed form id —
    // see buildQuestionFormKey). The assistant message id is allocated once and
    // kept in place across the streaming→persisted swap (same `assistantId`
    // throughout), so it survives the brief unmount/re-focus of the Questions tab
    // without replaying the animation, yet differs for every distinct form
    // occurrence (each lives in its own assistant message).
    const questionFormKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[questionFormKey]": ()=>buildQuestionFormKey(activeConversationId, lastAssistantMessageId, Boolean(questionForm ?? questionFormPreview))
    }["ProjectView.useMemo[questionFormKey]"], [
        activeConversationId,
        lastAssistantMessageId,
        questionForm,
        questionFormPreview
    ]);
    // Release #3661: let a past question form be manually re-opened in the
    // Questions panel. Layered on top of main's stable questionFormKey (#3644) —
    // the `displayed*` values fall back to the live form when nothing is manually
    // pinned, so both fixes coexist.
    const [manualQuestionFormRequest, setManualQuestionFormRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            setManualQuestionFormRequest(null);
        }
    }["ProjectView.useEffect"], [
        project.id,
        activeConversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (hasQuestions && questionFormKey) setManualQuestionFormRequest(null);
        }
    }["ProjectView.useEffect"], [
        hasQuestions,
        questionFormKey
    ]);
    const displayedQuestionForm = manualQuestionFormRequest?.form ?? questionForm;
    const displayedQuestionFormPreview = manualQuestionFormRequest ? null : questionFormPreview;
    const displayedQuestionFormSubmittedAnswers = manualQuestionFormRequest?.submittedAnswers ?? questionFormSubmittedAnswers;
    const displayedQuestionFormActive = manualQuestionFormRequest ? false : questionFormActive;
    const displayedQuestionsGenerating = manualQuestionFormRequest ? false : questionsGenerating;
    const displayedQuestionFormKey = manualQuestionFormRequest ? `${activeConversationId ?? 'conversation'}:${manualQuestionFormRequest.messageId}:${manualQuestionFormRequest.form.id}:manual` : questionFormKey;
    // Auto-switch the workspace to the Questions tab when a new discovery form
    // first appears, and let the chat banner re-focus it on click. The nonce
    // bump is what FileWorkspace listens to.
    const [questionsFocusNonce, setQuestionsFocusNonce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const prevHasQuestionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (hasQuestions && !prevHasQuestionsRef.current) {
                setQuestionsFocusNonce({
                    "ProjectView.useEffect": (n)=>n + 1
                }["ProjectView.useEffect"]);
            }
            prevHasQuestionsRef.current = hasQuestions;
        }
    }["ProjectView.useEffect"], [
        hasQuestions
    ]);
    const focusQuestionsRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[focusQuestionsRequest]": ()=>questionsFocusNonce > 0 ? {
                nonce: questionsFocusNonce
            } : null
    }["ProjectView.useMemo[focusQuestionsRequest]"], [
        questionsFocusNonce
    ]);
    const submittedAnswersForQuestionFormRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[submittedAnswersForQuestionFormRequest]": (request)=>{
            const assistantIndex = messages.findIndex({
                "ProjectView.useCallback[submittedAnswersForQuestionFormRequest].assistantIndex": (m)=>m.id === request.messageId
            }["ProjectView.useCallback[submittedAnswersForQuestionFormRequest].assistantIndex"]);
            if (assistantIndex < 0) return null;
            for(let i = assistantIndex + 1; i < messages.length; i++){
                const m = messages[i];
                if (!m) continue;
                if (m.role === 'assistant') break;
                if (m.role !== 'user') continue;
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSubmittedAnswers"])(request.form, m.content ?? '');
                if (parsed) return parsed;
            }
            return null;
        }
    }["ProjectView.useCallback[submittedAnswersForQuestionFormRequest]"], [
        messages
    ]);
    const openQuestionsTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[openQuestionsTab]": (request)=>{
            if (request) {
                const opensCurrentLiveForm = request.messageId === lastAssistantMessageId && questionForm?.id === request.form.id && questionFormSubmittedAnswers === undefined;
                if (opensCurrentLiveForm) {
                    setManualQuestionFormRequest(null);
                } else {
                    setManualQuestionFormRequest({
                        ...request,
                        submittedAnswers: request.submittedAnswers ?? submittedAnswersForQuestionFormRequest(request) ?? undefined
                    });
                }
            }
            setQuestionsFocusNonce({
                "ProjectView.useCallback[openQuestionsTab]": (n)=>n + 1
            }["ProjectView.useCallback[openQuestionsTab]"]);
        }
    }["ProjectView.useCallback[openQuestionsTab]"], [
        lastAssistantMessageId,
        questionForm,
        questionFormSubmittedAnswers,
        submittedAnswersForQuestionFormRequest
    ]);
    const currentConversationQueuedItems = activeConversationId ? queuedChatSends.filter((item)=>item.conversationId === activeConversationId).map((item)=>{
        const queuedItem = {
            id: item.id,
            prompt: item.prompt,
            attachments: item.attachments,
            commentAttachments: item.commentAttachments
        };
        if (item.meta === undefined) return queuedItem;
        return {
            ...queuedItem,
            meta: item.meta
        };
    }) : [];
    const newConversationDisabled = creatingConversation;
    const activeCompletionNotificationRunsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const completedNotificationRunsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Load conversations on project switch. If none exist (older projects
    // pre-conversations, or a freshly created one whose default seed got
    // dropped), create one on the fly.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            let cancelled = false;
            setConversations([]);
            setActiveConversationId(null);
            setMessagesConversationId(null);
            setFailedMessagesConversationId(null);
            setMessageLoadRetryNonce(0);
            setConversationLoadError(null);
            setMessages([]);
            setPreviewComments([]);
            setAttachedComments([]);
            setStreaming(false);
            streamingConversationIdRef.current = null;
            setStreamingConversationId(null);
            setError(null);
            setAudioVoiceOptionsError(null);
            setArtifact(null);
            savedArtifactRef.current = null;
            pendingWritesRef.current.clear();
            ({
                "ProjectView.useEffect": async ()=>{
                    try {
                        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listConversations"])(project.id);
                        if (cancelled) return;
                        if (list.length === 0) {
                            const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(project.id);
                            if (cancelled) return;
                            if (fresh) {
                                setConversations([
                                    fresh
                                ]);
                                setActiveConversationId(fresh.id);
                            } else {
                                throw new Error('Could not create a conversation for this project.');
                            }
                        } else {
                            setConversations(list);
                            // Issue #1505: when the URL deep-links to a specific
                            // conversation, prefer that one. Falls through to list[0]
                            // when the routed id is null or no longer present (the
                            // routine row may have been deleted between the route
                            // landing and the conversation list loading).
                            const routedMatch = routeConversationId ? list.find({
                                "ProjectView.useEffect": (c)=>c.id === routeConversationId
                            }["ProjectView.useEffect"]) ?? null : null;
                            setActiveConversationId(routedMatch ? routedMatch.id : list[0].id);
                        }
                    } catch (err) {
                        if (cancelled) return;
                        const message = err instanceof Error ? err.message : 'Could not load conversations for this project.';
                        setConversations([]);
                        setActiveConversationId(null);
                        setConversationLoadError(message);
                        setError(message);
                    }
                }
            })["ProjectView.useEffect"]();
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        project.id
    ]);
    // Issue #1505: when the URL changes the routed conversation id while
    // we are already inside the project (e.g. the user clicks "Open
    // project" on a different routine history row in the same project),
    // switch the active conversation without re-fetching the list.
    // Guards: only acts when the routed id is non-null AND present in
    // the already-loaded list, and only when it differs from the current
    // active id. Falls through to a no-op for stale / missing routes so
    // the default picker above keeps its result.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!routeConversationId) {
                lastSeenRouteConversationIdRef.current = null;
                return;
            }
            if (conversations.length === 0) return;
            if (routeConversationId === activeConversationId) return;
            // When the route still points at the conversation this view last
            // pushed to the URL, the mismatch means a local switch (new
            // conversation, history pick) moved activeConversationId ahead and
            // the URL sync below has not caught up yet. Following the stale
            // route here would fight that sync and remount ChatPane in a loop,
            // so only react to a genuinely external navigation.
            if (routeConversationId === lastSyncedConversationIdRef.current) return;
            if (lastSeenRouteConversationIdRef.current === routeConversationId) return;
            lastSeenRouteConversationIdRef.current = routeConversationId;
            const match = conversations.find({
                "ProjectView.useEffect.match": (c)=>c.id === routeConversationId
            }["ProjectView.useEffect.match"]);
            if (!match) return;
            setActiveConversationId(routeConversationId);
        }
    }["ProjectView.useEffect"], [
        routeConversationId,
        conversations,
        activeConversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            setWorkspaceFocused(false);
        }
    }["ProjectView.useEffect"], [
        project.id
    ]);
    // Load messages whenever the active conversation changes. This happens
    // on project mount (after conversations load) and on user-triggered
    // conversation switches.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!activeConversationId) {
                setMessages([]);
                setMessagesInitialized(false);
                setPreviewComments([]);
                setAttachedComments([]);
                setMessagesConversationId(null);
                setFailedMessagesConversationId(null);
                messagesConversationIdRef.current = null;
                setStreaming(false);
                streamingConversationIdRef.current = null;
                setStreamingConversationId(null);
                return;
            }
            // Reset the initialized flag so auto-send waits for the new
            // conversation's DB read to settle before checking messages.length.
            setMessagesInitialized(false);
            let cancelled = false;
            setMessages([]);
            setPreviewComments([]);
            setAttachedComments([]);
            setArtifact(null);
            setMessagesConversationId(null);
            setFailedMessagesConversationId(null);
            setStreaming(false);
            streamingConversationIdRef.current = null;
            setStreamingConversationId(null);
            savedArtifactRef.current = null;
            pendingWritesRef.current.clear();
            if (messagesConversationIdRef.current !== activeConversationId) {
                messagesConversationIdRef.current = null;
            }
            ({
                "ProjectView.useEffect": async ()=>{
                    try {
                        const [list, comments] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listMessages"])(project.id, activeConversationId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPreviewComments"])(project.id, activeConversationId)
                        ]);
                        if (cancelled) return;
                        setMessages(list);
                        setMessagesInitialized(true);
                        setPreviewComments(comments);
                        setAttachedComments([]);
                        setArtifact(null);
                        setError(null);
                        savedArtifactRef.current = null;
                        pendingWritesRef.current.clear();
                        messagesConversationIdRef.current = activeConversationId;
                        setMessagesConversationId(activeConversationId);
                        setFailedMessagesConversationId(null);
                    } catch (err) {
                        if (cancelled) return;
                        const message = err instanceof Error ? err.message : 'Could not load messages for this conversation.';
                        setMessages([]);
                        setPreviewComments([]);
                        setAttachedComments([]);
                        setArtifact(null);
                        setError(message);
                        savedArtifactRef.current = null;
                        pendingWritesRef.current.clear();
                        messagesConversationIdRef.current = null;
                        setMessagesConversationId(null);
                        setFailedMessagesConversationId(activeConversationId);
                    }
                }
            })["ProjectView.useEffect"]();
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        project.id,
        activeConversationId,
        messageLoadRetryNonce
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            return ({
                "ProjectView.useEffect": ()=>{
                    sendTextBufferRef.current?.cancel();
                    sendTextBufferRef.current = null;
                    // Unmounts / conversation switches should only detach local stream
                    // consumers. Aborting the daemon cancel controllers here turns routine
                    // cleanup into an explicit POST /api/runs/:id/cancel, which can mark a
                    // live run canceled even when the user never clicked Stop.
                    abortRef.current?.abort();
                    abortRef.current = null;
                    cancelRef.current = null;
                    for (const textBuffer of reattachTextBuffersRef.current)textBuffer.cancel();
                    reattachTextBuffersRef.current.clear();
                    for (const controller of reattachControllersRef.current.values()){
                        if (abortRef.current === controller) abortRef.current = null;
                        controller.abort();
                    }
                    for (const controller of reattachCancelControllersRef.current.values()){
                        // Route changes should only detach the browser-side SSE listener.
                        // Aborting this signal maps to POST /cancel, so leave the daemon run alive.
                        if (cancelRef.current === controller) cancelRef.current = null;
                    }
                    reattachControllersRef.current.clear();
                    reattachCancelControllersRef.current.clear();
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        project.id,
        activeConversationId
    ]);
    const cancelSendTextBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[cancelSendTextBuffer]": (flushPending = false)=>{
            if (flushPending) sendTextBufferRef.current?.flush();
            sendTextBufferRef.current?.cancel();
            sendTextBufferRef.current = null;
        }
    }["ProjectView.useCallback[cancelSendTextBuffer]"], []);
    const cancelReattachTextBuffers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[cancelReattachTextBuffers]": (flushPending = false)=>{
            for (const textBuffer of reattachTextBuffersRef.current){
                if (flushPending) textBuffer.flush();
                textBuffer.cancel();
            }
            reattachTextBuffersRef.current.clear();
        }
    }["ProjectView.useCallback[cancelReattachTextBuffers]"], []);
    const notifyCompletedRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[notifyCompletedRun]": (last)=>{
            // Round 7 (mrcfps @ useDesignMdState.ts:131): a chat turn just
            // settled — conversation updatedAt almost certainly moved, so
            // recompute DESIGN.md staleness even when the turn produced no
            // file mutations or live artifacts.
            setDesignMdRefreshKey({
                "ProjectView.useCallback[notifyCompletedRun]": (n)=>n + 1
            }["ProjectView.useCallback[notifyCompletedRun]"]);
            const status = last.runStatus;
            if (status !== 'succeeded' && status !== 'failed') return;
            const cfg = config.notifications ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_NOTIFICATIONS"];
            if (cfg.soundEnabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playSound"])(status === 'succeeded' ? cfg.successSoundId : cfg.failureSoundId);
            }
            if (cfg.desktopEnabled) {
                // Successes only interrupt when the user is on another tab/window.
                // Failures alert regardless — losing a long agent run silently is
                // worse than a small interruption when the page is in focus.
                const isHidden = typeof document !== 'undefined' && document.hidden;
                const isFocused = typeof document === 'undefined' ? true : document.hasFocus();
                if (status === 'failed' || isHidden || !isFocused) {
                    const title = status === 'succeeded' ? t('notify.successTitle') : t('notify.failureTitle');
                    const fallbackBody = status === 'succeeded' ? t('notify.successBody') : t('notify.failureBody');
                    const trimmed = (last.content ?? '').trim();
                    const body = trimmed ? trimmed.slice(0, 80) : fallbackBody;
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showCompletionNotification"])({
                        status,
                        title,
                        body,
                        onClick: {
                            "ProjectView.useCallback[notifyCompletedRun]": ()=>{
                                if ("TURBOPACK compile-time truthy", 1) window.focus();
                            }
                        }["ProjectView.useCallback[notifyCompletedRun]"]
                    });
                }
            }
        }
    }["ProjectView.useCallback[notifyCompletedRun]"], [
        config.notifications,
        t
    ]);
    // Fire completion feedback from assistant run-status transitions rather than
    // from the local SSE listener state. A run can finish while its conversation
    // is detached; when the user returns, the terminal status should still produce
    // the one completion notification for runs this view previously saw active.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            const completedMessages = [];
            for (const message of messages){
                if (message.role !== 'assistant') continue;
                const keys = message.runId ? [
                    message.runId,
                    message.id
                ] : [
                    message.id
                ];
                if (isActiveRunStatus(message.runStatus)) {
                    for (const key of keys)activeCompletionNotificationRunsRef.current.add(key);
                    continue;
                }
                if (message.runStatus !== 'succeeded' && message.runStatus !== 'failed') continue;
                if (!keys.some({
                    "ProjectView.useEffect": (key)=>activeCompletionNotificationRunsRef.current.has(key)
                }["ProjectView.useEffect"])) continue;
                if (keys.some({
                    "ProjectView.useEffect": (key)=>completedNotificationRunsRef.current.has(key)
                }["ProjectView.useEffect"])) continue;
                for (const key of keys)completedNotificationRunsRef.current.add(key);
                completedMessages.push(message);
            }
            for (const message of completedMessages)notifyCompletedRun(message);
        }
    }["ProjectView.useEffect"], [
        messages,
        notifyCompletedRun
    ]);
    // Hydrate the open-tabs state once per project. After this initial
    // load, every mutation flows through saveTabsState() which keeps DB +
    // local state coherent.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            let cancelled = false;
            tabsLoadedRef.current = false;
            tabsHydratedFromSavedStateRef.current = false;
            hasAppliedInitialPrimaryOpenRef.current = false;
            setOpenTabsState({
                tabs: [],
                active: null
            });
            ({
                "ProjectView.useEffect": async ()=>{
                    const state = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadTabs"])(project.id);
                    if (cancelled) return;
                    const routeActive = routeFileNameRef.current;
                    let nextState = routeActive ? {
                        ...state,
                        tabs: state.tabs.includes(routeActive) ? state.tabs : [
                            ...state.tabs,
                            routeActive
                        ],
                        active: routeActive
                    } : state;
                    if (routeActive) {
                        nextState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheTabsLocally"])(project.id, nextState);
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistTabsToDaemonNow"])(project.id, nextState);
                    }
                    tabsHydratedFromSavedStateRef.current = state.hasSavedState === true;
                    setOpenTabsState(nextState);
                    tabsLoadedRef.current = true;
                }
            })["ProjectView.useEffect"]();
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        project.id
    ]);
    // Debounce the canonical (daemon + SQLite) tab-state write. The embedded
    // browser fans out url/title/favicon updates in bursts on a single page load
    // (did-navigate, did-navigate-in-page, page-title-updated, favicon), and each
    // used to be a localStorage write + HTTP PUT + SQLite UPDATE + re-render.
    // We keep React state and the local cache IMMEDIATE (so the UI and a reload
    // are never stale) and coalesce only the daemon PUT.
    const tabsDaemonSaveTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingDaemonTabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flushTabsDaemonSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[flushTabsDaemonSave]": ()=>{
            if (tabsDaemonSaveTimerRef.current != null) {
                clearTimeout(tabsDaemonSaveTimerRef.current);
                tabsDaemonSaveTimerRef.current = null;
            }
            const pending = pendingDaemonTabsRef.current;
            pendingDaemonTabsRef.current = null;
            if (pending) void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistTabsToDaemonNow"])(project.id, pending);
        }
    }["ProjectView.useCallback[flushTabsDaemonSave]"], [
        project.id
    ]);
    const persistTabsState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[persistTabsState]": (next)=>{
            setOpenTabsState(next);
            if (!tabsLoadedRef.current) return;
            // Immediate, cheap, synchronous — keeps the cache canonical for reload.
            const stamped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheTabsLocally"])(project.id, next);
            pendingDaemonTabsRef.current = stamped;
            if (tabsDaemonSaveTimerRef.current != null) {
                clearTimeout(tabsDaemonSaveTimerRef.current);
            }
            tabsDaemonSaveTimerRef.current = setTimeout({
                "ProjectView.useCallback[persistTabsState]": ()=>{
                    tabsDaemonSaveTimerRef.current = null;
                    const pending = pendingDaemonTabsRef.current;
                    pendingDaemonTabsRef.current = null;
                    if (pending) void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistTabsToDaemonNow"])(project.id, pending);
                }
            }["ProjectView.useCallback[persistTabsState]"], TAB_PERSIST_DEBOUNCE_MS);
        }
    }["ProjectView.useCallback[persistTabsState]"], [
        project.id
    ]);
    // Flush any pending tab write when the project changes or the view unmounts,
    // so a fast project switch / close doesn't leave the daemon a debounce behind.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>flushTabsDaemonSave
    }["ProjectView.useEffect"], [
        flushTabsDaemonSave
    ]);
    const handleActiveWorkspaceContextChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleActiveWorkspaceContextChange]": (next)=>{
            setActiveWorkspaceContext({
                "ProjectView.useCallback[handleActiveWorkspaceContextChange]": (current)=>workspaceContextItemEqual(current, next) ? current : next
            }["ProjectView.useCallback[handleActiveWorkspaceContextChange]"]);
        }
    }["ProjectView.useCallback[handleActiveWorkspaceContextChange]"], []);
    const handleWorkspaceContextsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleWorkspaceContextsChange]": (next)=>{
            setWorkspaceContexts({
                "ProjectView.useCallback[handleWorkspaceContextsChange]": (current)=>workspaceContextItemsEqual(current, next) ? current : next
            }["ProjectView.useCallback[handleWorkspaceContextsChange]"]);
        }
    }["ProjectView.useCallback[handleWorkspaceContextsChange]"], []);
    const refreshProjectFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[refreshProjectFiles]": async ()=>{
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectFiles"])(project.id);
            projectFilesRef.current = next;
            setProjectFiles(next);
            return next;
        }
    }["ProjectView.useCallback[refreshProjectFiles]"], [
        project.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            projectFilesRef.current = projectFiles;
        }
    }["ProjectView.useEffect"], [
        projectFiles
    ]);
    // Cache HTML file contents so the auto-open module check (issue #2744) does
    // not re-fetch unchanged entries on every Write. Keyed by file name with the
    // mtime stored alongside, so a rewrite REPLACES the file's single entry
    // rather than accreting a new key. Bounded by the project's HTML file count.
    const htmlContentCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const readProjectHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[readProjectHtml]": async (name)=>{
            const file = projectFilesRef.current.find({
                "ProjectView.useCallback[readProjectHtml].file": (entry)=>entry.name === name
            }["ProjectView.useCallback[readProjectHtml].file"]);
            const mtime = file?.mtime ?? 0;
            const cached = htmlContentCacheRef.current.get(name);
            if (cached && cached.mtime === mtime) return cached.text;
            try {
                const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(project.id, name));
                const text = response.ok ? await response.text() : null;
                htmlContentCacheRef.current.set(name, {
                    mtime,
                    text
                });
                return text;
            } catch  {
                htmlContentCacheRef.current.set(name, {
                    mtime,
                    text: null
                });
                return null;
            }
        }
    }["ProjectView.useCallback[readProjectHtml]"], [
        project.id
    ]);
    const refreshLiveArtifacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[refreshLiveArtifacts]": async ()=>{
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLiveArtifacts"])(project.id);
            setLiveArtifacts(next);
            return next;
        }
    }["ProjectView.useCallback[refreshLiveArtifacts]"], [
        project.id
    ]);
    const refreshWorkspaceItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[refreshWorkspaceItems]": async ()=>{
            const [nextFiles] = await Promise.all([
                refreshProjectFiles(),
                refreshLiveArtifacts()
            ]);
            return nextFiles;
        }
    }["ProjectView.useCallback[refreshWorkspaceItems]"], [
        refreshLiveArtifacts,
        refreshProjectFiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!tabsLoadedRef.current) return;
            if (hasAppliedInitialPrimaryOpenRef.current) return;
            if (routeFileName) return;
            if (openTabsState.active || openTabsState.tabs.length > 0) {
                hasAppliedInitialPrimaryOpenRef.current = true;
                return;
            }
            if (tabsHydratedFromSavedStateRef.current) {
                hasAppliedInitialPrimaryOpenRef.current = true;
                return;
            }
            const primaryFile = selectPrimaryProjectFile(projectFiles);
            if (!primaryFile) return;
            hasAppliedInitialPrimaryOpenRef.current = true;
            persistTabsState({
                tabs: [
                    primaryFile.name
                ],
                active: primaryFile.name
            });
        }
    }["ProjectView.useEffect"], [
        openTabsState.active,
        openTabsState.tabs.length,
        persistTabsState,
        projectFiles,
        routeFileName
    ]);
    const requestOpenFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[requestOpenFile]": (name)=>{
            if (!name) return;
            setOpenRequest({
                name,
                nonce: Date.now()
            });
        }
    }["ProjectView.useCallback[requestOpenFile]"], []);
    const persistArtifact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[persistArtifact]": async (art, projectFilesSnapshot, sourceText, options = {})=>{
            const persistedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePersistedArtifactHtml"])({
                artifactHtml: art.html,
                identifier: art.identifier,
                sourceText
            });
            const artifactToPersist = persistedHtml === art.html ? art : {
                ...art,
                html: persistedHtml
            };
            const baseName = artifactBaseNameFor(art);
            const ext = artifactExtensionFor(art);
            // Pick a name that doesn't collide with an existing project file.
            // The first run uses `<base>.<ext>`; subsequent runs append `-2`, `-3`…
            // so prior artifacts aren't silently overwritten.
            const currentProjectFiles = projectFilesSnapshot ?? projectFilesRef.current;
            const existing = new Set(currentProjectFiles.map({
                "ProjectView.useCallback[persistArtifact]": (f)=>f.name
            }["ProjectView.useCallback[persistArtifact]"]));
            let fileName = `${baseName}${ext}`;
            let n = 2;
            while(existing.has(fileName) && savedArtifactRef.current !== fileName){
                fileName = `${baseName}-${n}${ext}`;
                n += 1;
            }
            if (ext === '.html') {
                const pointerProjectFiles = filterProjectFilesByMinMtime(currentProjectFiles, options.pointerMinMtime);
                const pointerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$pointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHtmlPointerArtifactTarget"])({
                    content: artifactToPersist.html,
                    candidateFileName: fileName,
                    projectFiles: pointerProjectFiles
                });
                if (pointerTarget) {
                    if (savedArtifactRef.current === pointerTarget) return;
                    savedArtifactRef.current = pointerTarget;
                    requestOpenFile(pointerTarget);
                    return;
                }
            }
            // Pre-write structural gate for HTML artifacts (#50, #1143). Reject
            // bodies that obviously aren't a complete document — usually a one-line
            // prose summary the model emitted inside `<artifact type="text/html">`
            // when only Edit-tool changes happened this turn. Without this guard,
            // such content lands as a phantom HTML file in the project panel.
            if (ext === '.html') {
                const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHtmlArtifact"])(artifactToPersist.html);
                if (!validation.ok) {
                    setError(`Refused to save artifact "${art.identifier || art.title || 'untitled'}": ${validation.reason}`);
                    return;
                }
            }
            if (savedArtifactRef.current === fileName) return;
            const title = art.title || art.identifier || fileName;
            const metadata = {
                identifier: art.identifier,
                artifactType: art.artifactType,
                inferred: false
            };
            const manifest = ext === '.html' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$manifest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHtmlArtifactManifest"])({
                entry: fileName,
                title,
                sourceSkillId: project.skillId ?? undefined,
                designSystemId: project.designSystemId,
                metadata
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$manifest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferLegacyManifest"])({
                entry: fileName,
                title,
                metadata: {
                    ...metadata,
                    sourceSkillId: project.skillId ?? undefined,
                    designSystemId: project.designSystemId
                }
            });
            const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(project.id, fileName, artifactToPersist.html, {
                artifactManifest: manifest ?? undefined
            });
            if (file) {
                savedArtifactRef.current = file.name;
                setFilesRefresh({
                    "ProjectView.useCallback[persistArtifact]": (n)=>n + 1
                }["ProjectView.useCallback[persistArtifact]"]);
                // Surface the daemon's stub-guard warning when it fires in `warn`
                // mode (the default). Without this the warning would land in the
                // file metadata silently and the user would never see that the
                // model shipped a placeholder.
                if (file.stubGuardWarning) {
                    setError(`Saved "${file.name}", but the model may have shipped a placeholder: ` + `${file.stubGuardWarning.message}`);
                }
                // Auto-open the freshly-persisted artifact as a tab so the user
                // sees it without an extra click. The Write-tool path already does
                // this for tool-emitted files; this handles the artifact-tag path.
                requestOpenFile(file.name);
            } else {
                // writeProjectTextFile collapses all failure paths (non-OK HTTP
                // responses, network errors, and stub-guard 422s) to null — the
                // helper's return contract would need to be widened to distinguish
                // them, which is out of scope here.  Show a generic banner so the
                // failure is observable rather than silent; the daemon logs carry
                // the structured details for any specific error type.
                // Clear the saved-artifact ref so the user can retry.
                savedArtifactRef.current = '';
                setError(`Couldn't save artifact "${fileName}". The write failed — ` + 'check the daemon logs for details.');
            }
        }
    }["ProjectView.useCallback[persistArtifact]"], [
        project.id,
        project.designSystemId,
        project.skillId,
        requestOpenFile
    ]);
    const artifactFromStandaloneHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[artifactFromStandaloneHtml]": (sourceText)=>artifactFromRecoverableSourceText(sourceText)
    }["ProjectView.useCallback[artifactFromStandaloneHtml]"], []);
    // Set of project file names that the chat surface uses to decide whether
    // a tool card's path is openable as a tab. Recomputed on every file-list
    // change; tool cards just read from the set.
    const projectFileNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[projectFileNames]": ()=>new Set(projectFiles.map({
                "ProjectView.useMemo[projectFileNames]": (f)=>f.name
            }["ProjectView.useMemo[projectFileNames]"]))
    }["ProjectView.useMemo[projectFileNames]"], [
        projectFiles
    ]);
    const activeProjectFileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[activeProjectFileName]": ()=>openTabsState.active && projectFileNames.has(openTabsState.active) ? openTabsState.active : null
    }["ProjectView.useMemo[activeProjectFileName]"], [
        openTabsState.active,
        projectFileNames
    ]);
    const agentsById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[agentsById]": ()=>new Map(agents.map({
                "ProjectView.useMemo[agentsById]": (agent)=>[
                        agent.id,
                        agent
                    ]
            }["ProjectView.useMemo[agentsById]"]))
    }["ProjectView.useMemo[agentsById]"], [
        agents
    ]);
    // Keep the @-picker's source of truth fresh: every refreshSignal bump
    // (artifact saved, sketch saved, image uploaded) refetches; on first
    // mount we also do an initial pull so attachments staged before the
    // agent has written anything still see the user's pasted images.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            void refreshWorkspaceItems().catch({
                "ProjectView.useEffect": ()=>{
                // The daemon probe can briefly lag behind a just-started local
                // runtime. Retry when daemonLive flips or the explicit refresh key
                // changes instead of leaving the project view in its empty shell.
                }
            }["ProjectView.useEffect"]);
        }
    }["ProjectView.useEffect"], [
        daemonLive,
        refreshWorkspaceItems,
        filesRefresh
    ]);
    // Live-reload: when the daemon's chokidar watcher reports a file change,
    // bump filesRefresh so the file list refetches with new mtimes — which
    // propagates through to FileViewer iframes via PR #384's ?v=${mtime}
    // cache-bust, triggering an automatic preview reload without a click.
    //
    // Coalesce the refresh: agent rewrites surface to chokidar as an
    // `unlink` + `add` (+ later `change`) burst within a single tick (#2195).
    // Refreshing the file list on the intermediate `unlink` makes the open
    // tab's active file vanish for one frame before the `add` restores it,
    // and FileWorkspace's "tab no longer on disk" path then drops the user
    // out of their preview. A short trailing wait absorbs the burst; the
    // maxWait cap stops a sustained edit storm from starving the UI.
    const refreshFilesAndDesignMd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[refreshFilesAndDesignMd]": ()=>{
            setFilesRefresh({
                "ProjectView.useCallback[refreshFilesAndDesignMd]": (n)=>n + 1
            }["ProjectView.useCallback[refreshFilesAndDesignMd]"]);
            // Round 7 (mrcfps): file mutations are the dominant staleness signal
            // post-finalize — bump the refresh key so DESIGN.md staleness
            // recomputes against the new mtimes.
            setDesignMdRefreshKey({
                "ProjectView.useCallback[refreshFilesAndDesignMd]": (n)=>n + 1
            }["ProjectView.useCallback[refreshFilesAndDesignMd]"]);
        }
    }["ProjectView.useCallback[refreshFilesAndDesignMd]"], []);
    const coalescedFileChangedRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCoalescedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCoalescedCallback"])(refreshFilesAndDesignMd, {
        wait: 80,
        maxWait: 250
    });
    const handleProjectEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleProjectEvent]": (evt)=>{
            if (evt.type === 'file-changed') {
                iframeKeepAlivePool.evictProject(project.id);
                coalescedFileChangedRefresh();
                return;
            }
            if (evt.type === 'conversation-created') {
                // A new conversation was inserted into this project by a path the
                // open project view can't observe through its own state (currently:
                // Routines "Run now" in reuse-an-existing-project mode, #1361).
                // Refetch the conversation list so the new entry becomes visible
                // without requiring the user to leave and re-enter the project.
                // Deliberately do NOT change the active conversation here — the
                // user keeps their current context. Auto-switch is a separate UX
                // decision tracked in #1361.
                if (evt.projectId !== project.id) return;
                const capturedProjectId = project.id;
                const myToken = ++conversationsRefreshTokenRef.current;
                void ({
                    "ProjectView.useCallback[handleProjectEvent]": async ()=>{
                        try {
                            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listConversations"])(capturedProjectId);
                            // Bail if the user switched projects while this request was in
                            // flight (#1361 review, Codex P1). The captured project id is the
                            // one we asked the daemon about; the live ref is the one the
                            // user is looking at right now. If they don't match, applying
                            // the list would overwrite the new project's sidebar with
                            // stale data from the old one.
                            if (projectIdRef.current !== capturedProjectId) return;
                            // Bail if a newer conversation-created event already dispatched
                            // its own refresh after us (#1361 review, lefarcen P2). With two
                            // rapid events the later request may resolve first; if this
                            // earlier request resolves afterwards it would drop the newer
                            // conversation. Only the latest dispatch is allowed to apply.
                            if (conversationsRefreshTokenRef.current !== myToken) return;
                            setConversations(list);
                        } catch  {
                        // Defensive: refresh failed (network blip, daemon gone). The
                        // next project mount or another conversation-created event
                        // will retry; no need to surface an error here.
                        }
                    }
                })["ProjectView.useCallback[handleProjectEvent]"]();
                return;
            }
            const agentEvent = projectEventToAgentEvent(evt);
            if (!agentEvent) return;
            setLiveArtifactEvents({
                "ProjectView.useCallback[handleProjectEvent]": (prev)=>appendLiveArtifactEventItem(prev, agentEvent)
            }["ProjectView.useCallback[handleProjectEvent]"]);
            void refreshLiveArtifacts();
            onProjectsRefresh();
            // Live artifact events come from chat-turn-emitted artifacts; they
            // also imply the conversation transcript changed.
            setDesignMdRefreshKey({
                "ProjectView.useCallback[handleProjectEvent]": (n)=>n + 1
            }["ProjectView.useCallback[handleProjectEvent]"]);
        }
    }["ProjectView.useCallback[handleProjectEvent]"], [
        coalescedFileChangedRefresh,
        iframeKeepAlivePool,
        onProjectsRefresh,
        refreshLiveArtifacts,
        project.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$project$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectFileEvents"])(project.id, daemonLive, handleProjectEvent);
    const activePromptContextSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[activePromptContextSignature]": ()=>{
            const skill = project.skillId ? skills.find({
                "ProjectView.useMemo[activePromptContextSignature]": (s)=>s.id === project.skillId
            }["ProjectView.useMemo[activePromptContextSignature]"]) ?? designTemplates.find({
                "ProjectView.useMemo[activePromptContextSignature]": (s)=>s.id === project.skillId
            }["ProjectView.useMemo[activePromptContextSignature]"]) : null;
            const designSystem = project.designSystemId ? designSystems.find({
                "ProjectView.useMemo[activePromptContextSignature]": (d)=>d.id === project.designSystemId
            }["ProjectView.useMemo[activePromptContextSignature]"]) : null;
            return JSON.stringify({
                designSystem: designSystem ? {
                    id: designSystem.id,
                    title: designSystem.title,
                    category: designSystem.category,
                    summary: designSystem.summary,
                    source: designSystem.source ?? null
                } : null,
                skill: skill ? {
                    id: skill.id,
                    name: skill.name,
                    description: skill.description,
                    mode: skill.mode,
                    source: skill.source ?? null,
                    upstream: skill.upstream
                } : null
            });
        }
    }["ProjectView.useMemo[activePromptContextSignature]"], [
        designSystems,
        designTemplates,
        project.designSystemId,
        project.skillId,
        skills
    ]);
    const previousPromptContextSignatureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activePromptContextSignature);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (previousPromptContextSignatureRef.current === activePromptContextSignature) return;
            previousPromptContextSignatureRef.current = activePromptContextSignature;
            iframeKeepAlivePool.evictProject(project.id, {
                includeActive: true
            });
        }
    }["ProjectView.useEffect"], [
        activePromptContextSignature,
        iframeKeepAlivePool,
        project.id
    ]);
    // When the URL points at a specific file, fire an open request so the
    // FileWorkspace promotes it to an active tab. We watch routeFileName
    // (the parsed segment) so back/forward navigation triggers the same path.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!routeFileName) return;
            requestOpenFile(routeFileName);
        }
    }["ProjectView.useEffect"], [
        routeFileName,
        requestOpenFile
    ]);
    // Sync the URL when the active tab changes, so reload + share-link both
    // land back on the same view. Replace (not push) on tab activation so the
    // history stack doesn't fill with every tab click.
    // Composite sync key: tracks BOTH the active file target AND the active
    // conversation id, so a conversation-only change (e.g. `listConversations`
    // resolves after `loadTabs` hydrated the active tab, or the user picks a
    // different conversation under the same tab) still triggers the navigate
    // and pushes `/conversations/:cid` into the URL. Keying only on the file
    // target lost that update because the early-return saw `target` unchanged
    // and skipped the navigate (lefarcen P1 on PR #1508).
    const lastSyncedRouteKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSeenRouteConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            const target = openTabsState.active && (openTabsState.tabs.includes(openTabsState.active) || projectFileNames.has(openTabsState.active) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLiveArtifactTabId"])(openTabsState.active)) ? openTabsState.active : null;
            const nextKey = `${activeConversationId ?? ''}:${target ?? ''}`;
            if (nextKey === lastSyncedRouteKeyRef.current) return;
            lastSyncedRouteKeyRef.current = nextKey;
            lastSyncedConversationIdRef.current = activeConversationId;
            // PerishCode + Codex P1 on PR #1508: the prior version of this
            // sync stripped any `/conversations/:cid` segment from the URL as
            // soon as a tab became active, which regressed the deep-link
            // behavior the parent commit was meant to add (reload / share
            // would fall back to `list[0]` instead of the routed run's
            // conversation). Thread the active conversation id so the URL
            // always reflects the conversation the project view is actually
            // showing, matching how `fileName` already tracks the active tab.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId: project.id,
                conversationId: activeConversationId,
                fileName: target
            }, {
                replace: true
            });
        }
    }["ProjectView.useEffect"], [
        openTabsState.active,
        projectFileNames,
        project.id,
        activeConversationId
    ]);
    const handleEnsureProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleEnsureProject]": async ()=>{
            return project.id;
        }
    }["ProjectView.useCallback[handleEnsureProject]"], [
        project.id
    ]);
    const composedSystemPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[composedSystemPrompt]": async (sessionModeOverride = activeSessionMode)=>{
            let skillBody;
            let skillName;
            let skillMode;
            let designSystemBody;
            let designSystemTitle;
            if (project.skillId) {
                // project.skillId can resolve to either root after the
                // skills/design-templates split; check both lists so a template-backed
                // project keeps composing its template body when running in API mode.
                const summary = skills.find({
                    "ProjectView.useCallback[composedSystemPrompt]": (s)=>s.id === project.skillId
                }["ProjectView.useCallback[composedSystemPrompt]"]) ?? designTemplates.find({
                    "ProjectView.useCallback[composedSystemPrompt]": (s)=>s.id === project.skillId
                }["ProjectView.useCallback[composedSystemPrompt]"]);
                skillName = summary?.name;
                skillMode = summary?.mode;
                const cached = skillCache.current.get(project.skillId);
                if (cached !== undefined) {
                    skillBody = cached;
                } else {
                    const detail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSkill"])(project.skillId) ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignTemplate"])(project.skillId);
                    if (detail) {
                        skillBody = detail.body;
                        skillCache.current.set(project.skillId, detail.body);
                    }
                }
            }
            if (project.designSystemId) {
                const summary = designSystems.find({
                    "ProjectView.useCallback[composedSystemPrompt].summary": (d)=>d.id === project.designSystemId
                }["ProjectView.useCallback[composedSystemPrompt].summary"]);
                designSystemTitle = summary?.title;
                const cached = designCache.current.get(project.designSystemId);
                if (cached !== undefined) {
                    designSystemBody = cached;
                } else {
                    const detail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignSystem"])(project.designSystemId);
                    if (detail) {
                        designSystemBody = detail.body;
                        designCache.current.set(project.designSystemId, detail.body);
                    }
                }
            }
            let template;
            const tplId = project.metadata?.templateId;
            if (project.metadata?.kind === 'template' && tplId) {
                const cached = templateCache.current.get(tplId);
                if (cached) {
                    template = cached;
                } else {
                    const fetched = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplate"])(tplId);
                    if (fetched) {
                        templateCache.current.set(tplId, fetched);
                        template = fetched;
                    }
                }
            }
            // Fold in the auto-memory block so BYOK / API-mode chats see the
            // same Personal-memory section a daemon-side CLI chat would. The
            // daemon does this by calling `composeMemoryBody()` directly; the
            // web side hits the equivalent HTTP surface so it can stay
            // ignorant of daemon internals. Failures are swallowed — memory is
            // best-effort, never a blocker for the chat round-trip.
            let memoryBody;
            try {
                const resp = await fetch('/api/memory/system-prompt');
                if (resp.ok) {
                    const json = await resp.json();
                    if (typeof json.body === 'string' && json.body.trim().length > 0) {
                        memoryBody = json.body;
                    }
                }
            } catch  {
            // Ignore; memory injection is best-effort.
            }
            let audioVoiceOptions;
            let audioVoiceOptionsLookupError;
            if (shouldFetchElevenLabsVoiceOptions(project)) {
                try {
                    audioVoiceOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$elevenlabs$2d$voices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchElevenLabsVoiceOptions"])();
                    setAudioVoiceOptionsError(null);
                } catch (err) {
                    const message = err instanceof Error ? err.message : 'ElevenLabs voice list could not be loaded.';
                    audioVoiceOptionsLookupError = message;
                    setAudioVoiceOptionsError(message);
                }
            } else {
                setAudioVoiceOptionsError(null);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeSystemPrompt"])({
                skillBody,
                skillName,
                skillMode,
                designSystemBody,
                designSystemTitle,
                memoryBody,
                metadata: project.metadata,
                template,
                audioVoiceOptions,
                audioVoiceOptionsError: audioVoiceOptionsLookupError,
                streamFormat: config.mode === 'api' ? 'plain' : undefined,
                sessionMode: sessionModeOverride,
                locale,
                userInstructions: config.customInstructions
            });
        }
    }["ProjectView.useCallback[composedSystemPrompt]"], [
        project.skillId,
        project.designSystemId,
        project.metadata,
        skills,
        designTemplates,
        designSystems,
        config.mode,
        config.customInstructions,
        activeSessionMode,
        locale
    ]);
    const persistMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[persistMessage]": (m, options)=>{
            if (!activeConversationId) return;
            // Source-level guard against the "Working 24m+ / Waiting for first
            // output" UI: never write a daemon assistant row that is still
            // queued/running but has no runId. Until POST /api/runs returns the
            // runId, the message is purely in-flight on the client; persisting it
            // here creates a row that nothing can ever reattach to (daemon never
            // saw the runId, client lost the response). Once onRunCreated assigns
            // a runId — or the run finishes terminally — this guard lets the row
            // through normally.
            if (isPhantomDaemonRunMessage(m)) return;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(project.id, activeConversationId, m, options);
        }
    }["ProjectView.useCallback[persistMessage]"], [
        project.id,
        activeConversationId
    ]);
    const persistMessageById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[persistMessageById]": (messageId, options)=>{
            if (!activeConversationId) return;
            setMessages({
                "ProjectView.useCallback[persistMessageById]": (curr)=>{
                    const found = curr.find({
                        "ProjectView.useCallback[persistMessageById].found": (m)=>m.id === messageId
                    }["ProjectView.useCallback[persistMessageById].found"]);
                    if (found && !isPhantomDaemonRunMessage(found)) {
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(project.id, activeConversationId, found, options);
                    }
                    return curr;
                }
            }["ProjectView.useCallback[persistMessageById]"]);
        }
    }["ProjectView.useCallback[persistMessageById]"], [
        project.id,
        activeConversationId
    ]);
    const updateMessageById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[updateMessageById]": (messageId, updater, persist = false, persistOptions)=>{
            setMessages({
                "ProjectView.useCallback[updateMessageById]": (curr)=>{
                    let saved = null;
                    const next = curr.map({
                        "ProjectView.useCallback[updateMessageById].next": (m)=>{
                            if (m.id !== messageId) return m;
                            const updated = updater(m);
                            saved = updated;
                            return updated;
                        }
                    }["ProjectView.useCallback[updateMessageById].next"]);
                    // Same phantom guard as persistMessage: skip writes for a daemon
                    // assistant row that is still in-flight (active runStatus, no runId).
                    // The runId-arriving update from onRunCreated passes through because
                    // the updater sets runId before this check runs.
                    if (persist && saved && activeConversationId && !isPhantomDaemonRunMessage(saved)) {
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(project.id, activeConversationId, saved, persistOptions);
                    }
                    return next;
                }
            }["ProjectView.useCallback[updateMessageById]"]);
        }
    }["ProjectView.useCallback[updateMessageById]"], [
        project.id,
        activeConversationId
    ]);
    const appendConversationMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[appendConversationMessage]": (conversationId, message, options, persist = true)=>{
            if (activeConversationId === conversationId || messagesConversationIdRef.current === conversationId) {
                setMessages({
                    "ProjectView.useCallback[appendConversationMessage]": (curr)=>[
                            ...curr,
                            message
                        ]
                }["ProjectView.useCallback[appendConversationMessage]"]);
            }
            if (persist) void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(project.id, conversationId, message, options);
        }
    }["ProjectView.useCallback[appendConversationMessage]"], [
        activeConversationId,
        project.id
    ]);
    const replaceConversationMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[replaceConversationMessage]": (conversationId, message, options, persist = true)=>{
            if (activeConversationId === conversationId || messagesConversationIdRef.current === conversationId) {
                setMessages({
                    "ProjectView.useCallback[replaceConversationMessage]": (curr)=>curr.map({
                            "ProjectView.useCallback[replaceConversationMessage]": (item)=>item.id === message.id ? message : item
                        }["ProjectView.useCallback[replaceConversationMessage]"])
                }["ProjectView.useCallback[replaceConversationMessage]"]);
            }
            if (persist) void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(project.id, conversationId, message, options);
        }
    }["ProjectView.useCallback[replaceConversationMessage]"], [
        activeConversationId,
        project.id
    ]);
    const refreshConversationMessagesFromServer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[refreshConversationMessagesFromServer]": async (conversationId)=>{
            if (messagesConversationIdRef.current !== conversationId) return;
            try {
                const serverMessages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listMessages"])(project.id, conversationId);
                if (messagesConversationIdRef.current !== conversationId) return;
                setMessages({
                    "ProjectView.useCallback[refreshConversationMessagesFromServer]": (current)=>mergeServerMessagesIntoConversation(current, serverMessages)
                }["ProjectView.useCallback[refreshConversationMessagesFromServer]"]);
                setMessagesInitialized(true);
                setMessagesConversationId(conversationId);
                setFailedMessagesConversationId(null);
            } catch (err) {
                console.warn('Failed to refresh conversation messages after run completion', err);
            }
        }
    }["ProjectView.useCallback[refreshConversationMessagesFromServer]"], [
        project.id
    ]);
    const scheduleConversationMessageRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[scheduleConversationMessageRefresh]": (conversationId)=>{
            scheduleProjectTimeout({
                "ProjectView.useCallback[scheduleConversationMessageRefresh]": ()=>{
                    void refreshConversationMessagesFromServer(conversationId);
                }
            }["ProjectView.useCallback[scheduleConversationMessageRefresh]"], 150);
        }
    }["ProjectView.useCallback[scheduleConversationMessageRefresh]"], [
        refreshConversationMessagesFromServer,
        scheduleProjectTimeout
    ]);
    const markStreamingConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[markStreamingConversation]": (conversationId)=>{
            streamingConversationIdRef.current = conversationId;
            setStreaming(true);
            setStreamingConversationId(conversationId);
        }
    }["ProjectView.useCallback[markStreamingConversation]"], []);
    const clearStreamingMarker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[clearStreamingMarker]": (conversationId)=>{
            const next = clearStreamingConversationMarker(streamingConversationIdRef.current, conversationId);
            if (next === streamingConversationIdRef.current) return;
            streamingConversationIdRef.current = next;
            setStreamingConversationId(next);
            setStreaming(next !== null);
        }
    }["ProjectView.useCallback[clearStreamingMarker]"], []);
    const clearActiveRunRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[clearActiveRunRefs]": (conversationId, controller, cancelController)=>{
            if (!shouldClearActiveRunRefs(streamingConversationIdRef.current, conversationId)) {
                return false;
            }
            if (abortRef.current !== controller || cancelRef.current !== cancelController) {
                return false;
            }
            abortRef.current = null;
            cancelRef.current = null;
            return true;
        }
    }["ProjectView.useCallback[clearActiveRunRefs]"], []);
    const clearCurrentRunStreamingMarker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[clearCurrentRunStreamingMarker]": (conversationId, controller, cancelController)=>{
            if (!clearActiveRunRefs(conversationId, controller, cancelController)) return false;
            clearStreamingMarker(conversationId);
            return true;
        }
    }["ProjectView.useCallback[clearCurrentRunStreamingMarker]"], [
        clearActiveRunRefs,
        clearStreamingMarker
    ]);
    const handleAssistantFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleAssistantFeedback]": (assistantMessage, change)=>{
            const now = Date.now();
            updateMessageById(assistantMessage.id, {
                "ProjectView.useCallback[handleAssistantFeedback]": (prev)=>change ? {
                        ...prev,
                        feedback: {
                            rating: change.rating,
                            reasonCodes: change.reasonCodes,
                            customReason: change.customReason,
                            reasonsSubmittedAt: change.reasonsSubmittedAt,
                            createdAt: prev.feedback?.rating === change.rating ? prev.feedback.createdAt : now,
                            updatedAt: now
                        }
                    } : {
                        ...prev,
                        feedback: undefined
                    }
            }["ProjectView.useCallback[handleAssistantFeedback]"], true);
            // Forward affirmative ratings to the daemon → Langfuse `score-create`.
            // Clears (change=null) are skipped — Langfuse scores are append-only,
            // and the rating is also captured by the PostHog event so a clear is
            // recoverable downstream if we ever need it.
            const runId = assistantMessage.runId;
            if (change && runId && activeConversationId) {
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportChatRunFeedback"])({
                    runId,
                    projectId: project.id,
                    conversationId: activeConversationId,
                    assistantMessageId: assistantMessage.id,
                    rating: change.rating,
                    reasonCodes: change.reasonCodes ?? [],
                    hasCustomReason: !!change.customReason,
                    customReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCustomReason"])(change.customReason)
                });
            }
        }
    }["ProjectView.useCallback[handleAssistantFeedback]"], [
        updateMessageById,
        activeConversationId,
        project.id
    ]);
    // `code` is the structured API error code (e.g. AGENT_AUTH_REQUIRED); it
    // rides along on the error status event so AssistantMessage can render the
    // hosted-AMR nudge for model/auth/quota failures on non-AMR agents.
    const appendAssistantErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[appendAssistantErrorEvent]": (messageId, message, code)=>{
            if (!message) return;
            updateMessageById(messageId, {
                "ProjectView.useCallback[appendAssistantErrorEvent]": (prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$chat$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrorStatusEvent"])(prev, message, code)
            }["ProjectView.useCallback[appendAssistantErrorEvent]"], true);
        }
    }["ProjectView.useCallback[appendAssistantErrorEvent]"], [
        updateMessageById
    ]);
    const auditDesignSystemWorkspaceAfterRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[auditDesignSystemWorkspaceAfterRun]": async (assistantMessageId)=>{
            if (!isDesignSystemWorkspaceMetadata(project.metadata)) return;
            try {
                const audit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectDesignSystemPackageAudit"])(project.id);
                if (!audit) return;
                const auditSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$system$2d$package$2d$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeDesignSystemPackageAudit"])(audit);
                updateMessageById(assistantMessageId, {
                    "ProjectView.useCallback[auditDesignSystemWorkspaceAfterRun]": (prev)=>({
                            ...prev,
                            events: [
                                ...prev.events ?? [],
                                {
                                    kind: 'status',
                                    label: 'audit',
                                    detail: auditSummary
                                }
                            ]
                        })
                }["ProjectView.useCallback[auditDesignSystemWorkspaceAfterRun]"], true, {
                    telemetryFinalized: true
                });
                const repairPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$system$2d$package$2d$audit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDesignSystemPackageAuditRepairPrompt"])(audit);
                if (repairPrompt) {
                    if (consumeDesignSystemAuditAutoRepair(project.id)) {
                        const seed = {
                            id: `audit-${Date.now()}`,
                            value: repairPrompt
                        };
                        setChatSeed(seed);
                        setAutoAuditRepairSeed(seed);
                    }
                } else {
                    clearDesignSystemAuditAutoRepair(project.id);
                }
            } catch (err) {
                const detail = err instanceof Error ? err.message : String(err);
                updateMessageById(assistantMessageId, {
                    "ProjectView.useCallback[auditDesignSystemWorkspaceAfterRun]": (prev)=>({
                            ...prev,
                            events: [
                                ...prev.events ?? [],
                                {
                                    kind: 'status',
                                    label: 'audit',
                                    detail: `Package audit could not run: ${detail}`
                                }
                            ]
                        })
                }["ProjectView.useCallback[auditDesignSystemWorkspaceAfterRun]"], true, {
                    telemetryFinalized: true
                });
            }
        }
    }["ProjectView.useCallback[auditDesignSystemWorkspaceAfterRun]"], [
        project.id,
        project.metadata,
        updateMessageById
    ]);
    const refreshPreviewComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[refreshPreviewComments]": async ()=>{
            if (!activeConversationId) return;
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPreviewComments"])(project.id, activeConversationId);
            setPreviewComments(next);
            setAttachedComments({
                "ProjectView.useCallback[refreshPreviewComments]": (current)=>current.map({
                        "ProjectView.useCallback[refreshPreviewComments]": (attached)=>next.find({
                                "ProjectView.useCallback[refreshPreviewComments]": (comment)=>comment.id === attached.id
                            }["ProjectView.useCallback[refreshPreviewComments]"])
                    }["ProjectView.useCallback[refreshPreviewComments]"]).filter({
                        "ProjectView.useCallback[refreshPreviewComments]": (comment)=>Boolean(comment)
                    }["ProjectView.useCallback[refreshPreviewComments]"])
            }["ProjectView.useCallback[refreshPreviewComments]"]);
        }
    }["ProjectView.useCallback[refreshPreviewComments]"], [
        project.id,
        activeConversationId
    ]);
    const savePreviewComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[savePreviewComment]": async (target, note, attachAfterSave, images = [])=>{
            if (!activeConversationId) return null;
            // Upload any attached images first so the saved comment carries durable
            // file paths — this is what lets the comment list / re-opened popover
            // re-display the images instead of losing them on echo.
            let uploadedAttachments;
            if (images.length > 0) {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFiles"])(project.id, images);
                if (result.uploaded.length !== images.length) return null;
                uploadedAttachments = result.uploaded.map({
                    "ProjectView.useCallback[savePreviewComment]": (file)=>({
                            path: file.path,
                            name: file.name
                        })
                }["ProjectView.useCallback[savePreviewComment]"]);
            }
            const existing = previewComments.find({
                "ProjectView.useCallback[savePreviewComment].existing": (comment)=>comment.filePath === target.filePath && comment.elementId === target.elementId
            }["ProjectView.useCallback[savePreviewComment].existing"]);
            const attachments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergePreviewCommentAttachments"])(existing?.attachments, uploadedAttachments);
            const saved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPreviewComment"])(project.id, activeConversationId, {
                target,
                note,
                ...attachments.length > 0 ? {
                    attachments
                } : {}
            });
            if (!saved) return null;
            setPreviewComments({
                "ProjectView.useCallback[savePreviewComment]": (current)=>mergeSavedPreviewComment(current, saved)
            }["ProjectView.useCallback[savePreviewComment]"]);
            setAttachedComments({
                "ProjectView.useCallback[savePreviewComment]": (current)=>attachAfterSave ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttachedComments"])(current, saved) : current.map({
                        "ProjectView.useCallback[savePreviewComment]": (comment)=>comment.id === saved.id ? saved : comment
                    }["ProjectView.useCallback[savePreviewComment]"])
            }["ProjectView.useCallback[savePreviewComment]"]);
            return saved;
        }
    }["ProjectView.useCallback[savePreviewComment]"], [
        project.id,
        activeConversationId,
        previewComments
    ]);
    const removePreviewComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[removePreviewComment]": async (commentId)=>{
            if (!activeConversationId) return;
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePreviewComment"])(project.id, activeConversationId, commentId);
            if (!ok) return;
            setPreviewComments({
                "ProjectView.useCallback[removePreviewComment]": (current)=>current.filter({
                        "ProjectView.useCallback[removePreviewComment]": (comment)=>comment.id !== commentId
                    }["ProjectView.useCallback[removePreviewComment]"])
            }["ProjectView.useCallback[removePreviewComment]"]);
            setAttachedComments({
                "ProjectView.useCallback[removePreviewComment]": (current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAttachedComment"])(current, commentId)
            }["ProjectView.useCallback[removePreviewComment]"]);
        }
    }["ProjectView.useCallback[removePreviewComment]"], [
        project.id,
        activeConversationId
    ]);
    const attachPreviewComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[attachPreviewComment]": (comment)=>{
            setAttachedComments({
                "ProjectView.useCallback[attachPreviewComment]": (current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttachedComments"])(current, comment)
            }["ProjectView.useCallback[attachPreviewComment]"]);
        }
    }["ProjectView.useCallback[attachPreviewComment]"], []);
    const detachPreviewComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[detachPreviewComment]": (commentId)=>{
            setAttachedComments({
                "ProjectView.useCallback[detachPreviewComment]": (current)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAttachedComment"])(current, commentId)
            }["ProjectView.useCallback[detachPreviewComment]"]);
        }
    }["ProjectView.useCallback[detachPreviewComment]"], []);
    const patchAttachedStatuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[patchAttachedStatuses]": async (attachments, status)=>{
            if (!activeConversationId || attachments.length === 0) return;
            const persistedAttachments = attachments.filter({
                "ProjectView.useCallback[patchAttachedStatuses].persistedAttachments": (attachment)=>attachment.source !== 'board-batch'
            }["ProjectView.useCallback[patchAttachedStatuses].persistedAttachments"]);
            if (persistedAttachments.length === 0) return;
            setPreviewComments({
                "ProjectView.useCallback[patchAttachedStatuses]": (current)=>current.map({
                        "ProjectView.useCallback[patchAttachedStatuses]": (comment)=>persistedAttachments.some({
                                "ProjectView.useCallback[patchAttachedStatuses]": (attachment)=>attachment.id === comment.id
                            }["ProjectView.useCallback[patchAttachedStatuses]"]) ? {
                                ...comment,
                                status
                            } : comment
                    }["ProjectView.useCallback[patchAttachedStatuses]"])
            }["ProjectView.useCallback[patchAttachedStatuses]"]);
            await Promise.all(persistedAttachments.map({
                "ProjectView.useCallback[patchAttachedStatuses]": (attachment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchPreviewCommentStatus"])(project.id, activeConversationId, attachment.id, status)
            }["ProjectView.useCallback[patchAttachedStatuses]"]));
            void refreshPreviewComments();
        }
    }["ProjectView.useCallback[patchAttachedStatuses]"], [
        project.id,
        activeConversationId,
        refreshPreviewComments
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (config.mode !== 'daemon' || !daemonLive || !activeConversationId || streaming) return;
            let cancelled = false;
            const reattachConversationId = activeConversationId;
            const attachRecoverableRuns = {
                "ProjectView.useEffect.attachRecoverableRuns": async ()=>{
                    const missingRunIdMessages = messages.filter({
                        "ProjectView.useEffect.attachRecoverableRuns.missingRunIdMessages": (m)=>{
                            if (m.role !== 'assistant' || m.runId) return false;
                            return isActiveRunStatus(m.runStatus);
                        }
                    }["ProjectView.useEffect.attachRecoverableRuns.missingRunIdMessages"]);
                    const activeRuns = missingRunIdMessages.length > 0 ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listActiveChatRuns"])(project.id, reattachConversationId) : [];
                    const historicalRuns = missingRunIdMessages.length > 0 ? (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listProjectRuns"])()).filter({
                        "ProjectView.useEffect.attachRecoverableRuns": (run)=>run.projectId === project.id && run.conversationId === reattachConversationId
                    }["ProjectView.useEffect.attachRecoverableRuns"]) : [];
                    if (cancelled) return;
                    const activeByMessage = new Map(activeRuns.filter({
                        "ProjectView.useEffect.attachRecoverableRuns": (run)=>run.assistantMessageId
                    }["ProjectView.useEffect.attachRecoverableRuns"]).map({
                        "ProjectView.useEffect.attachRecoverableRuns": (run)=>[
                                run.assistantMessageId,
                                run
                            ]
                    }["ProjectView.useEffect.attachRecoverableRuns"]));
                    const historicalByMessage = new Map(historicalRuns.filter({
                        "ProjectView.useEffect.attachRecoverableRuns": (run)=>run.assistantMessageId
                    }["ProjectView.useEffect.attachRecoverableRuns"]).map({
                        "ProjectView.useEffect.attachRecoverableRuns": (run)=>[
                                run.assistantMessageId,
                                run
                            ]
                    }["ProjectView.useEffect.attachRecoverableRuns"]));
                    for (const message of messages){
                        if (cancelled) return;
                        if (message.role !== 'assistant') continue;
                        const needsFullReplay = isActiveRunStatus(message.runStatus) || shouldReplayTerminalRunMessage(message);
                        if (!needsFullReplay) continue;
                        const fallbackRun = !message.runId ? activeByMessage.get(message.id) ?? historicalByMessage.get(message.id) ?? null : null;
                        const runId = message.runId ?? fallbackRun?.id;
                        // Self-heal phantom 'running' rows: when the message has no runId
                        // and the daemon has no active run mapped to it, the original send
                        // POST was lost (daemon restart mid-flight, the user navigated
                        // away before /api/runs returned, or a network blip). Leaving the
                        // message as 'running' is what produces the "Waiting for first
                        // output — Working 24m+" UI the user reported. Mark it failed so
                        // the composer is interactive again and the user can re-send.
                        if (!runId) {
                            updateMessageById(message.id, {
                                "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                        ...prev,
                                        runStatus: 'failed',
                                        endedAt: prev.endedAt ?? Date.now()
                                    })
                            }["ProjectView.useEffect.attachRecoverableRuns"], true);
                            continue;
                        }
                        if (reattachControllersRef.current.has(runId)) continue;
                        if (completedReattachRunsRef.current.has(runId)) continue;
                        if (fallbackRun && !message.runId) {
                            updateMessageById(message.id, {
                                "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                        ...prev,
                                        runId,
                                        runStatus: fallbackRun.status
                                    })
                            }["ProjectView.useEffect.attachRecoverableRuns"], true);
                        }
                        const status = fallbackRun ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchChatRunStatus"])(runId);
                        if (cancelled) return;
                        if (!status) {
                            updateMessageById(message.id, {
                                "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                        ...prev,
                                        runStatus: 'failed',
                                        endedAt: prev.endedAt ?? Date.now()
                                    })
                            }["ProjectView.useEffect.attachRecoverableRuns"], true);
                            completedReattachRunsRef.current.add(runId);
                            continue;
                        }
                        updateMessageById(message.id, {
                            "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                    ...prev,
                                    runStatus: status.status,
                                    ...status.resumable !== undefined ? {
                                        resumable: status.resumable
                                    } : {}
                                })
                        }["ProjectView.useEffect.attachRecoverableRuns"], true);
                        if (shouldReplayTerminalRunMessage(message)) {
                            const replayedContent = textContentFromAgentEvents(message.events);
                            if (replayedContent.trim().length > 0) {
                                const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArtifactParser"])();
                                let parsedArtifact = null;
                                let liveHtml = '';
                                for (const ev of [
                                    ...parser.feed(replayedContent),
                                    ...parser.flush()
                                ]){
                                    if (ev.type === 'artifact:start') {
                                        liveHtml = '';
                                        parsedArtifact = {
                                            identifier: ev.identifier,
                                            artifactType: ev.artifactType,
                                            title: ev.title,
                                            html: ''
                                        };
                                        setArtifact(parsedArtifact);
                                    } else if (ev.type === 'artifact:chunk') {
                                        liveHtml += ev.delta;
                                        parsedArtifact = artifactWithHtml(parsedArtifact, ev.identifier, liveHtml);
                                        setArtifact({
                                            "ProjectView.useEffect.attachRecoverableRuns": (prev)=>artifactWithHtml(prev, ev.identifier, liveHtml)
                                        }["ProjectView.useEffect.attachRecoverableRuns"]);
                                    } else if (ev.type === 'artifact:end') {
                                        parsedArtifact = artifactWithHtml(parsedArtifact, ev.identifier, ev.fullContent);
                                        setArtifact({
                                            "ProjectView.useEffect.attachRecoverableRuns": (prev)=>prev ? artifactWithHtml(prev, ev.identifier, ev.fullContent) : null
                                        }["ProjectView.useEffect.attachRecoverableRuns"]);
                                    }
                                }
                                updateMessageById(message.id, {
                                    "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                            ...prev,
                                            content: replayedContent,
                                            runStatus: resolveSucceededRunStatus(prev.runStatus),
                                            endedAt: prev.endedAt ?? Date.now()
                                        })
                                }["ProjectView.useEffect.attachRecoverableRuns"], true, {
                                    telemetryFinalized: true
                                });
                                let nextFiles = await refreshProjectFiles();
                                const beforeFileNames = new Set(message.preTurnFileNames ?? nextFiles.map({
                                    "ProjectView.useEffect.attachRecoverableRuns": (f)=>f.name
                                }["ProjectView.useEffect.attachRecoverableRuns"]));
                                const artifactToPersist = parsedArtifact?.html ? parsedArtifact : artifactFromStandaloneHtml(replayedContent);
                                let recoveredExistingArtifact = null;
                                if (artifactToPersist?.html) {
                                    const runStartedAt = status.createdAt || message.startedAt || message.createdAt;
                                    recoveredExistingArtifact = findExistingArtifactProjectFile(artifactToPersist, nextFiles, {
                                        minMtime: runStartedAt
                                    });
                                    if (recoveredExistingArtifact) {
                                        savedArtifactRef.current = recoveredExistingArtifact.name;
                                        requestOpenFile(recoveredExistingArtifact.name);
                                    } else {
                                        savedArtifactRef.current = null;
                                        await persistArtifact(artifactToPersist, nextFiles, replayedContent, {
                                            pointerMinMtime: runStartedAt
                                        });
                                        nextFiles = await refreshProjectFiles();
                                    }
                                }
                                const diff = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                                const produced = mergeRecoveredArtifact(diff, recoveredExistingArtifact);
                                const producedHtmlToOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAutoOpenProducedHtml"])(produced);
                                if (producedHtmlToOpen) requestOpenFile(producedHtmlToOpen);
                                if (produced.length > 0) {
                                    updateMessageById(message.id, {
                                        "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                ...prev,
                                                producedFiles: produced
                                            })
                                    }["ProjectView.useEffect.attachRecoverableRuns"], true, {
                                        telemetryFinalized: true
                                    });
                                }
                                await auditDesignSystemWorkspaceAfterRun(message.id);
                                completedReattachRunsRef.current.add(runId);
                                onProjectsRefresh();
                                continue;
                            }
                        }
                        const controller = new AbortController();
                        const cancelController = new AbortController();
                        reattachControllersRef.current.set(runId, controller);
                        reattachCancelControllersRef.current.set(runId, cancelController);
                        if (!isTerminalRunStatus(status.status)) {
                            abortRef.current = controller;
                            cancelRef.current = cancelController;
                            markStreamingConversation(reattachConversationId);
                        }
                        if (needsFullReplay) {
                            updateMessageById(message.id, {
                                "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                        ...prev,
                                        content: '',
                                        events: [],
                                        producedFiles: undefined
                                    })
                            }["ProjectView.useEffect.attachRecoverableRuns"]);
                        }
                        let persistTimer = null;
                        const persistSoon = {
                            "ProjectView.useEffect.attachRecoverableRuns.persistSoon": ()=>{
                                if (persistTimer) return;
                                persistTimer = scheduleProjectTimeout({
                                    "ProjectView.useEffect.attachRecoverableRuns.persistSoon": ()=>{
                                        persistTimer = null;
                                        persistMessageById(message.id);
                                    }
                                }["ProjectView.useEffect.attachRecoverableRuns.persistSoon"], 500);
                            }
                        }["ProjectView.useEffect.attachRecoverableRuns.persistSoon"];
                        const persistNow = {
                            "ProjectView.useEffect.attachRecoverableRuns.persistNow": (options)=>{
                                if (persistTimer) {
                                    clearProjectTimeout(persistTimer);
                                    persistTimer = null;
                                }
                                textBuffer.flush();
                                persistMessageById(message.id, options);
                            }
                        }["ProjectView.useEffect.attachRecoverableRuns.persistNow"];
                        const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArtifactParser"])();
                        let parsedArtifact = null;
                        let liveHtml = '';
                        let replayedContent = needsFullReplay ? '' : message.content;
                        let replayedEvents = needsFullReplay ? [] : [
                            ...message.events ?? []
                        ];
                        const applyContentDelta = {
                            "ProjectView.useEffect.attachRecoverableRuns.applyContentDelta": (delta)=>{
                                for (const ev of parser.feed(delta)){
                                    if (ev.type === 'artifact:start') {
                                        liveHtml = '';
                                        parsedArtifact = {
                                            identifier: ev.identifier,
                                            artifactType: ev.artifactType,
                                            title: ev.title,
                                            html: ''
                                        };
                                        setArtifact(parsedArtifact);
                                    } else if (ev.type === 'artifact:chunk') {
                                        liveHtml += ev.delta;
                                        parsedArtifact = parsedArtifact ? {
                                            ...parsedArtifact,
                                            html: liveHtml
                                        } : {
                                            identifier: ev.identifier,
                                            title: '',
                                            html: liveHtml
                                        };
                                        setArtifact({
                                            "ProjectView.useEffect.attachRecoverableRuns.applyContentDelta": (prev)=>prev ? {
                                                    ...prev,
                                                    html: liveHtml
                                                } : {
                                                    identifier: ev.identifier,
                                                    title: '',
                                                    html: liveHtml
                                                }
                                        }["ProjectView.useEffect.attachRecoverableRuns.applyContentDelta"]);
                                    } else if (ev.type === 'artifact:end') {
                                        parsedArtifact = parsedArtifact ? {
                                            ...parsedArtifact,
                                            html: ev.fullContent
                                        } : {
                                            identifier: ev.identifier,
                                            title: '',
                                            html: ev.fullContent
                                        };
                                        setArtifact({
                                            "ProjectView.useEffect.attachRecoverableRuns.applyContentDelta": (prev)=>prev ? {
                                                    ...prev,
                                                    html: ev.fullContent
                                                } : null
                                        }["ProjectView.useEffect.attachRecoverableRuns.applyContentDelta"]);
                                    }
                                }
                            }
                        }["ProjectView.useEffect.attachRecoverableRuns.applyContentDelta"];
                        if (!needsFullReplay && message.content) {
                            applyContentDelta(message.content);
                        }
                        const textBuffer = createBufferedTextUpdates({
                            updateMessage: {
                                "ProjectView.useEffect.attachRecoverableRuns.textBuffer": (updater)=>updateMessageById(message.id, updater)
                            }["ProjectView.useEffect.attachRecoverableRuns.textBuffer"],
                            persistSoon,
                            flushAndPersistNow: {
                                "ProjectView.useEffect.attachRecoverableRuns.textBuffer": ()=>persistNow({
                                        keepalive: true
                                    })
                            }["ProjectView.useEffect.attachRecoverableRuns.textBuffer"],
                            onContentDelta: applyContentDelta
                        });
                        reattachTextBuffersRef.current.add(textBuffer);
                        const unregisterTextBuffer = {
                            "ProjectView.useEffect.attachRecoverableRuns.unregisterTextBuffer": ()=>{
                                reattachTextBuffersRef.current.delete(textBuffer);
                            }
                        }["ProjectView.useEffect.attachRecoverableRuns.unregisterTextBuffer"];
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reattachDaemonRun"])({
                            runId,
                            signal: controller.signal,
                            cancelSignal: cancelController.signal,
                            initialLastEventId: needsFullReplay ? null : message.lastRunEventId ?? null,
                            handlers: {
                                onDelta: {
                                    "ProjectView.useEffect.attachRecoverableRuns": (delta)=>{
                                        replayedContent += delta;
                                        textBuffer.appendContent(delta);
                                    }
                                }["ProjectView.useEffect.attachRecoverableRuns"],
                                onAgentEvent: {
                                    "ProjectView.useEffect.attachRecoverableRuns": (ev)=>{
                                        replayedEvents = [
                                            ...replayedEvents,
                                            ev
                                        ];
                                        textBuffer.appendEvent(ev);
                                    }
                                }["ProjectView.useEffect.attachRecoverableRuns"],
                                onDone: {
                                    "ProjectView.useEffect.attachRecoverableRuns": ()=>{
                                        // A reattached run interrupted by a "send now" still receives a
                                        // late onDone from the daemon. Decide ownership first, then bail
                                        // BEFORE any current-run side effect (committing buffered text,
                                        // repainting the artifact preview via setArtifact, re-finalizing
                                        // the message) — only release this run's bookkeeping. See the
                                        // streamViaDaemon onDone for the ownership rationale.
                                        const runMayFinalize = !supersededRunsRef.current.has(controller);
                                        if (runMayFinalize) textBuffer.flush();
                                        textBuffer.cancel();
                                        unregisterTextBuffer();
                                        completedReattachRunsRef.current.add(runId);
                                        reattachControllersRef.current.delete(runId);
                                        reattachCancelControllersRef.current.delete(runId);
                                        clearCurrentRunStreamingMarker(reattachConversationId, controller, cancelController);
                                        if (!runMayFinalize) return;
                                        for (const ev of parser.flush()){
                                            if (ev.type === 'artifact:end') {
                                                parsedArtifact = parsedArtifact ? {
                                                    ...parsedArtifact,
                                                    html: ev.fullContent
                                                } : {
                                                    identifier: ev.identifier,
                                                    title: '',
                                                    html: ev.fullContent
                                                };
                                                setArtifact({
                                                    "ProjectView.useEffect.attachRecoverableRuns": (prev)=>prev ? {
                                                            ...prev,
                                                            html: ev.fullContent
                                                        } : null
                                                }["ProjectView.useEffect.attachRecoverableRuns"]);
                                            }
                                        }
                                        updateMessageById(message.id, {
                                            "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                    ...prev,
                                                    content: needsFullReplay ? replayedContent : prev.content,
                                                    events: needsFullReplay ? replayedEvents : prev.events,
                                                    runStatus: resolveSucceededRunStatus(prev.runStatus),
                                                    endedAt: prev.endedAt ?? Date.now()
                                                })
                                        }["ProjectView.useEffect.attachRecoverableRuns"], true, {
                                            telemetryFinalized: true
                                        });
                                        void ({
                                            "ProjectView.useEffect.attachRecoverableRuns": async ()=>{
                                                const preTurn = message.preTurnFileNames;
                                                let nextFiles = await refreshProjectFiles();
                                                // Use the turn-start snapshot when available so reload
                                                // recovers files produced before the artifact write too;
                                                // fall back to the current list for legacy messages.
                                                const beforeFileNames = new Set(preTurn ?? nextFiles.map({
                                                    "ProjectView.useEffect.attachRecoverableRuns": (f)=>f.name
                                                }["ProjectView.useEffect.attachRecoverableRuns"]));
                                                let recoveredExistingArtifact = null;
                                                const artifactToPersist = parsedArtifact?.html ? parsedArtifact : artifactFromStandaloneHtml(replayedContent);
                                                if (artifactToPersist?.html) {
                                                    const producedBeforeFallback = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                                                    const runStartedAt = status.createdAt || message.startedAt || message.createdAt;
                                                    recoveredExistingArtifact = findExistingArtifactProjectFile(artifactToPersist, nextFiles, {
                                                        minMtime: runStartedAt
                                                    }) ?? await findSameTurnHtmlWriteForRecoveredArtifact({
                                                        artifactHtml: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePersistedArtifactHtml"])({
                                                            artifactHtml: artifactToPersist.html,
                                                            identifier: artifactToPersist.identifier,
                                                            sourceText: replayedContent
                                                        }),
                                                        producedFiles: producedBeforeFallback,
                                                        readProjectHtml
                                                    });
                                                    if (recoveredExistingArtifact) {
                                                        savedArtifactRef.current = recoveredExistingArtifact.name;
                                                        requestOpenFile(recoveredExistingArtifact.name);
                                                    } else {
                                                        savedArtifactRef.current = null;
                                                        await persistArtifact(artifactToPersist, nextFiles, replayedContent, {
                                                            pointerMinMtime: runStartedAt
                                                        });
                                                        nextFiles = await refreshProjectFiles();
                                                    }
                                                }
                                                const diff = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                                                const produced = mergeRecoveredArtifact(diff, recoveredExistingArtifact);
                                                const producedHtmlToOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAutoOpenProducedHtml"])(produced);
                                                if (producedHtmlToOpen) requestOpenFile(producedHtmlToOpen);
                                                if (produced.length > 0) {
                                                    updateMessageById(message.id, {
                                                        "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                                ...prev,
                                                                producedFiles: produced
                                                            })
                                                    }["ProjectView.useEffect.attachRecoverableRuns"], true, {
                                                        telemetryFinalized: true
                                                    });
                                                }
                                                await auditDesignSystemWorkspaceAfterRun(message.id);
                                            }
                                        })["ProjectView.useEffect.attachRecoverableRuns"]();
                                        onProjectsRefresh();
                                    }
                                }["ProjectView.useEffect.attachRecoverableRuns"],
                                onError: {
                                    "ProjectView.useEffect.attachRecoverableRuns": (err)=>{
                                        const errorCode = err.code;
                                        const resumable = err.resumable === true;
                                        // A superseded reattached run must not paint a global failure
                                        // banner or re-finalize its message over the replacement run.
                                        const runMayFinalize = !supersededRunsRef.current.has(controller);
                                        textBuffer.flush();
                                        textBuffer.cancel();
                                        unregisterTextBuffer();
                                        if (runMayFinalize) {
                                            setError(err.message);
                                            appendAssistantErrorEvent(message.id, err.message, errorCode);
                                            updateMessageById(message.id, {
                                                "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                        ...prev,
                                                        runStatus: 'failed',
                                                        endedAt: prev.endedAt ?? Date.now(),
                                                        resumable
                                                    })
                                            }["ProjectView.useEffect.attachRecoverableRuns"], true);
                                            if (artifactFromRecoverableSourceText(replayedContent)) {
                                                void ({
                                                    "ProjectView.useEffect.attachRecoverableRuns": async ()=>{
                                                        if (recoveredArtifactMessagesRef.current.has(message.id)) return;
                                                        const latestRunStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchChatRunStatus"])(runId).catch({
                                                            "ProjectView.useEffect.attachRecoverableRuns": ()=>null
                                                        }["ProjectView.useEffect.attachRecoverableRuns"]);
                                                        const artifactToPersist = parsedArtifact?.html ? parsedArtifact : artifactFromStandaloneHtml(replayedContent);
                                                        if (!artifactToPersist?.html) return;
                                                        let nextFiles = await refreshProjectFiles();
                                                        const beforeFileNames = new Set(message.preTurnFileNames ?? nextFiles.map({
                                                            "ProjectView.useEffect.attachRecoverableRuns": (f)=>f.name
                                                        }["ProjectView.useEffect.attachRecoverableRuns"]));
                                                        const runStartedAt = latestRunStatus?.createdAt || message.startedAt || message.createdAt;
                                                        let recoveredExistingArtifact = findExistingArtifactProjectFile(artifactToPersist, nextFiles, {
                                                            minMtime: runStartedAt
                                                        });
                                                        if (recoveredExistingArtifact) {
                                                            savedArtifactRef.current = recoveredExistingArtifact.name;
                                                            requestOpenFile(recoveredExistingArtifact.name);
                                                        } else {
                                                            savedArtifactRef.current = null;
                                                            await persistArtifact(artifactToPersist, nextFiles, replayedContent, {
                                                                pointerMinMtime: runStartedAt
                                                            });
                                                            nextFiles = await refreshProjectFiles();
                                                            recoveredExistingArtifact = findExistingArtifactProjectFile(artifactToPersist, nextFiles, {
                                                                minMtime: runStartedAt
                                                            });
                                                        }
                                                        const diff = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                                                        const produced = mergeRecoveredArtifact(diff, recoveredExistingArtifact);
                                                        if (produced.length > 0) {
                                                            recoveredArtifactMessagesRef.current.add(message.id);
                                                        }
                                                        const producedHtmlToOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAutoOpenProducedHtml"])(produced);
                                                        if (producedHtmlToOpen) requestOpenFile(producedHtmlToOpen);
                                                        if (latestRunStatus?.status === 'succeeded') setError(null);
                                                        updateMessageById(message.id, {
                                                            "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                                    ...prev,
                                                                    content: replayedContent,
                                                                    producedFiles: produced.length > 0 ? produced : prev.producedFiles,
                                                                    runStatus: latestRunStatus?.status === 'succeeded' ? resolveSucceededRunStatus(prev.runStatus) : prev.runStatus,
                                                                    endedAt: prev.endedAt ?? Date.now()
                                                                })
                                                        }["ProjectView.useEffect.attachRecoverableRuns"], true, {
                                                            telemetryFinalized: true
                                                        });
                                                        await auditDesignSystemWorkspaceAfterRun(message.id);
                                                        onProjectsRefresh();
                                                    }
                                                })["ProjectView.useEffect.attachRecoverableRuns"]();
                                            }
                                        }
                                        completedReattachRunsRef.current.add(runId);
                                        reattachControllersRef.current.delete(runId);
                                        reattachCancelControllersRef.current.delete(runId);
                                        clearCurrentRunStreamingMarker(reattachConversationId, controller, cancelController);
                                        persistNow({
                                            telemetryFinalized: true
                                        });
                                        scheduleConversationMessageRefresh(reattachConversationId);
                                    }
                                }["ProjectView.useEffect.attachRecoverableRuns"]
                            },
                            onRunStatus: {
                                "ProjectView.useEffect.attachRecoverableRuns": (runStatus)=>{
                                    textBuffer.flush();
                                    updateMessageById(message.id, {
                                        "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                ...prev,
                                                runStatus,
                                                endedAt: isTerminalRunStatus(runStatus) ? prev.endedAt ?? Date.now() : prev.endedAt
                                            })
                                    }["ProjectView.useEffect.attachRecoverableRuns"], true);
                                    if (runStatus === 'canceled') {
                                        textBuffer.cancel();
                                        unregisterTextBuffer();
                                        completedReattachRunsRef.current.add(runId);
                                        reattachControllersRef.current.delete(runId);
                                        reattachCancelControllersRef.current.delete(runId);
                                        clearCurrentRunStreamingMarker(reattachConversationId, controller, cancelController);
                                        persistNow({
                                            telemetryFinalized: true
                                        });
                                    }
                                    if (isTerminalRunStatus(runStatus)) {
                                        scheduleConversationMessageRefresh(reattachConversationId);
                                    }
                                }
                            }["ProjectView.useEffect.attachRecoverableRuns"],
                            onRunEventId: {
                                "ProjectView.useEffect.attachRecoverableRuns": (lastRunEventId)=>{
                                    textBuffer.flush();
                                    updateMessageById(message.id, {
                                        "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                ...prev,
                                                lastRunEventId
                                            })
                                    }["ProjectView.useEffect.attachRecoverableRuns"]);
                                    persistSoon();
                                }
                            }["ProjectView.useEffect.attachRecoverableRuns"]
                        }).catch({
                            "ProjectView.useEffect.attachRecoverableRuns": (err)=>{
                                // Skip AbortError (expected on interrupt) and any error from a run
                                // that was tagged superseded by a send-now interrupt — it must not
                                // surface a global failure over the replacement.
                                const runMayFinalize = !supersededRunsRef.current.has(controller);
                                if (err.name !== 'AbortError' && runMayFinalize) {
                                    const msg = err instanceof Error ? err.message : String(err);
                                    setError(msg);
                                    appendAssistantErrorEvent(message.id, msg);
                                    updateMessageById(message.id, {
                                        "ProjectView.useEffect.attachRecoverableRuns": (prev)=>({
                                                ...prev,
                                                runStatus: 'failed',
                                                endedAt: prev.endedAt ?? Date.now()
                                            })
                                    }["ProjectView.useEffect.attachRecoverableRuns"], true, {
                                        telemetryFinalized: true
                                    });
                                }
                            }
                        }["ProjectView.useEffect.attachRecoverableRuns"]).finally({
                            "ProjectView.useEffect.attachRecoverableRuns": ()=>{
                                textBuffer.flush();
                                textBuffer.cancel();
                                unregisterTextBuffer();
                                if (persistTimer) clearProjectTimeout(persistTimer);
                                reattachControllersRef.current.delete(runId);
                                reattachCancelControllersRef.current.delete(runId);
                                clearActiveRunRefs(reattachConversationId, controller, cancelController);
                            }
                        }["ProjectView.useEffect.attachRecoverableRuns"]);
                    }
                }
            }["ProjectView.useEffect.attachRecoverableRuns"];
            void attachRecoverableRuns();
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        daemonLive,
        config.mode,
        activeConversationId,
        streaming,
        messages,
        project.id,
        updateMessageById,
        persistMessageById,
        auditDesignSystemWorkspaceAfterRun,
        markStreamingConversation,
        clearStreamingMarker,
        clearActiveRunRefs,
        clearCurrentRunStreamingMarker,
        clearProjectTimeout,
        refreshProjectFiles,
        readProjectHtml,
        persistArtifact,
        requestOpenFile,
        onProjectsRefresh,
        scheduleProjectTimeout,
        scheduleConversationMessageRefresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (config.mode !== 'daemon' || !daemonLive || !activeConversationId) return;
            if (!currentConversationHasRecoverableArtifact) return;
            let cancelled = false;
            let recovering = false;
            const recoverArtifacts = {
                "ProjectView.useEffect.recoverArtifacts": async ()=>{
                    if (recovering) return;
                    recovering = true;
                    try {
                        const serverMessages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listMessages"])(project.id, activeConversationId).catch({
                            "ProjectView.useEffect.recoverArtifacts": ()=>[]
                        }["ProjectView.useEffect.recoverArtifacts"]);
                        if (cancelled) return;
                        const recoveryMessages = serverMessages.length > 0 ? serverMessages : messagesRef.current;
                        for (const message of recoveryMessages){
                            if (cancelled) return;
                            if (!hasRecoverableArtifactMessage(message)) continue;
                            if (recoveredArtifactMessagesRef.current.has(message.id)) continue;
                            const runId = message.runId;
                            if (!runId) continue;
                            const sourceText = message.content.trim().length > 0 ? message.content : textContentFromAgentEvents(message.events);
                            const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArtifactParser"])();
                            let parsedArtifact = null;
                            let liveHtml = '';
                            for (const ev of [
                                ...parser.feed(sourceText),
                                ...parser.flush()
                            ]){
                                if (ev.type === 'artifact:start') {
                                    liveHtml = '';
                                    parsedArtifact = {
                                        identifier: ev.identifier,
                                        artifactType: ev.artifactType,
                                        title: ev.title,
                                        html: ''
                                    };
                                    setArtifact(parsedArtifact);
                                } else if (ev.type === 'artifact:chunk') {
                                    liveHtml += ev.delta;
                                    parsedArtifact = artifactWithHtml(parsedArtifact, ev.identifier, liveHtml);
                                    setArtifact({
                                        "ProjectView.useEffect.recoverArtifacts": (prev)=>artifactWithHtml(prev, ev.identifier, liveHtml)
                                    }["ProjectView.useEffect.recoverArtifacts"]);
                                } else if (ev.type === 'artifact:end') {
                                    parsedArtifact = artifactWithHtml(parsedArtifact, ev.identifier, ev.fullContent);
                                    setArtifact({
                                        "ProjectView.useEffect.recoverArtifacts": (prev)=>prev ? artifactWithHtml(prev, ev.identifier, ev.fullContent) : null
                                    }["ProjectView.useEffect.recoverArtifacts"]);
                                }
                            }
                            const artifactToPersist = parsedArtifact?.html ? parsedArtifact : artifactFromStandaloneHtml(sourceText);
                            if (!artifactToPersist?.html) continue;
                            const latestRunStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchChatRunStatus"])(runId).catch({
                                "ProjectView.useEffect.recoverArtifacts": ()=>null
                            }["ProjectView.useEffect.recoverArtifacts"]);
                            let nextFiles = await refreshProjectFiles();
                            if (cancelled) return;
                            const beforeFileNames = new Set(message.preTurnFileNames ?? nextFiles.map({
                                "ProjectView.useEffect.recoverArtifacts": (f)=>f.name
                            }["ProjectView.useEffect.recoverArtifacts"]));
                            const runStartedAt = latestRunStatus?.createdAt || message.startedAt || message.createdAt;
                            let recoveredExistingArtifact = findExistingArtifactProjectFile(artifactToPersist, nextFiles, {
                                minMtime: runStartedAt
                            });
                            if (recoveredExistingArtifact) {
                                savedArtifactRef.current = recoveredExistingArtifact.name;
                                requestOpenFile(recoveredExistingArtifact.name);
                            } else {
                                savedArtifactRef.current = null;
                                await persistArtifact(artifactToPersist, nextFiles, sourceText, {
                                    pointerMinMtime: runStartedAt
                                });
                                nextFiles = await refreshProjectFiles();
                                recoveredExistingArtifact = findExistingArtifactProjectFile(artifactToPersist, nextFiles, {
                                    minMtime: runStartedAt
                                });
                            }
                            if (cancelled) return;
                            const diff = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                            const produced = mergeRecoveredArtifact(diff, recoveredExistingArtifact);
                            if (produced.length === 0) {
                                continue;
                            }
                            recoveredArtifactMessagesRef.current.add(message.id);
                            const producedHtmlToOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAutoOpenProducedHtml"])(produced);
                            if (producedHtmlToOpen) requestOpenFile(producedHtmlToOpen);
                            updateMessageById(message.id, {
                                "ProjectView.useEffect.recoverArtifacts": (prev)=>({
                                        ...prev,
                                        content: sourceText,
                                        producedFiles: produced,
                                        runStatus: latestRunStatus?.status === 'succeeded' ? 'succeeded' : prev.runStatus,
                                        endedAt: prev.endedAt ?? Date.now()
                                    })
                            }["ProjectView.useEffect.recoverArtifacts"], true, {
                                telemetryFinalized: true
                            });
                            await auditDesignSystemWorkspaceAfterRun(message.id);
                            scheduleConversationMessageRefresh(activeConversationId);
                            onProjectsRefresh();
                        }
                    } finally{
                        recovering = false;
                    }
                }
            }["ProjectView.useEffect.recoverArtifacts"];
            void recoverArtifacts();
            const interval = window.setInterval({
                "ProjectView.useEffect.interval": ()=>{
                    void recoverArtifacts();
                }
            }["ProjectView.useEffect.interval"], 1000);
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                    window.clearInterval(interval);
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        daemonLive,
        config.mode,
        activeConversationId,
        project.id,
        currentConversationHasRecoverableArtifact,
        artifactFromStandaloneHtml,
        refreshProjectFiles,
        persistArtifact,
        requestOpenFile,
        updateMessageById,
        auditDesignSystemWorkspaceAfterRun,
        scheduleConversationMessageRefresh,
        onProjectsRefresh
    ]);
    const commitQueuedChatSends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[commitQueuedChatSends]": (next)=>{
            queuedChatSendsRef.current = next;
            setQueuedChatSends(next);
            saveQueuedChatSends(project.id, next);
        }
    }["ProjectView.useCallback[commitQueuedChatSends]"], [
        project.id
    ]);
    const enqueueChatSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[enqueueChatSend]": (item)=>{
            const next = [
                ...queuedChatSendsRef.current,
                item
            ];
            commitQueuedChatSends(next);
        }
    }["ProjectView.useCallback[enqueueChatSend]"], [
        commitQueuedChatSends
    ]);
    const removeQueuedChatSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[removeQueuedChatSend]": (id)=>{
            const next = queuedChatSendsRef.current.filter({
                "ProjectView.useCallback[removeQueuedChatSend].next": (item)=>item.id !== id
            }["ProjectView.useCallback[removeQueuedChatSend].next"]);
            commitQueuedChatSends(next);
        }
    }["ProjectView.useCallback[removeQueuedChatSend]"], [
        commitQueuedChatSends
    ]);
    const updateQueuedChatSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[updateQueuedChatSend]": (id, update)=>{
            const next = queuedChatSendsRef.current.map({
                "ProjectView.useCallback[updateQueuedChatSend].next": (item)=>{
                    if (item.id !== id) return item;
                    const meta = stripQueueOnlyFromMeta(update.meta);
                    const updated = {
                        ...item,
                        prompt: update.prompt,
                        attachments: update.attachments,
                        commentAttachments: update.commentAttachments
                    };
                    if (meta === undefined) delete updated.meta;
                    else updated.meta = meta;
                    return updated;
                }
            }["ProjectView.useCallback[updateQueuedChatSend].next"]);
            commitQueuedChatSends(next);
        }
    }["ProjectView.useCallback[updateQueuedChatSend]"], [
        commitQueuedChatSends
    ]);
    const prioritizeQueuedChatSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[prioritizeQueuedChatSend]": (id)=>{
            const item = queuedChatSendsRef.current.find({
                "ProjectView.useCallback[prioritizeQueuedChatSend].item": (candidate)=>candidate.id === id
            }["ProjectView.useCallback[prioritizeQueuedChatSend].item"]);
            if (!item) return;
            const next = [
                item,
                ...queuedChatSendsRef.current.filter({
                    "ProjectView.useCallback[prioritizeQueuedChatSend]": (candidate)=>candidate.id !== id
                }["ProjectView.useCallback[prioritizeQueuedChatSend]"])
            ];
            commitQueuedChatSends(next);
        }
    }["ProjectView.useCallback[prioritizeQueuedChatSend]"], [
        commitQueuedChatSends
    ]);
    const reorderCurrentConversationQueuedChatSends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[reorderCurrentConversationQueuedChatSends]": (orderedIds)=>{
            if (!activeConversationId || orderedIds.length === 0) return;
            const order = new Map(orderedIds.map({
                "ProjectView.useCallback[reorderCurrentConversationQueuedChatSends]": (id, index)=>[
                        id,
                        index
                    ]
            }["ProjectView.useCallback[reorderCurrentConversationQueuedChatSends]"]));
            const current = queuedChatSendsRef.current;
            const originalConversationItems = current.filter({
                "ProjectView.useCallback[reorderCurrentConversationQueuedChatSends].originalConversationItems": (item)=>item.conversationId === activeConversationId
            }["ProjectView.useCallback[reorderCurrentConversationQueuedChatSends].originalConversationItems"]);
            const sortedConversationItems = [
                ...originalConversationItems
            ].sort({
                "ProjectView.useCallback[reorderCurrentConversationQueuedChatSends].sortedConversationItems": (a, b)=>{
                    const aOrder = order.get(a.id) ?? Number.MAX_SAFE_INTEGER;
                    const bOrder = order.get(b.id) ?? Number.MAX_SAFE_INTEGER;
                    return aOrder - bOrder;
                }
            }["ProjectView.useCallback[reorderCurrentConversationQueuedChatSends].sortedConversationItems"]);
            if (sortedConversationItems.every({
                "ProjectView.useCallback[reorderCurrentConversationQueuedChatSends]": (item, index)=>item.id === originalConversationItems[index]?.id
            }["ProjectView.useCallback[reorderCurrentConversationQueuedChatSends]"])) {
                return;
            }
            let cursor = 0;
            const next = current.map({
                "ProjectView.useCallback[reorderCurrentConversationQueuedChatSends].next": (item)=>{
                    if (item.conversationId !== activeConversationId) return item;
                    return sortedConversationItems[cursor++] ?? item;
                }
            }["ProjectView.useCallback[reorderCurrentConversationQueuedChatSends].next"]);
            commitQueuedChatSends(next);
        }
    }["ProjectView.useCallback[reorderCurrentConversationQueuedChatSends]"], [
        activeConversationId,
        commitQueuedChatSends
    ]);
    const queueChatSendForCurrentConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[queueChatSendForCurrentConversation]": (input)=>{
            const queuedMeta = stripQueueOnlyFromMeta(input.meta);
            enqueueChatSend({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                conversationId: input.conversationId,
                prompt: input.prompt,
                attachments: input.attachments,
                commentAttachments: input.commentAttachments,
                ...queuedMeta === undefined ? {} : {
                    meta: queuedMeta
                },
                createdAt: Date.now()
            });
            if (input.commentAttachments.length > 0) {
                const reservedCommentIds = new Set(input.commentAttachments.filter({
                    "ProjectView.useCallback[queueChatSendForCurrentConversation]": (attachment)=>attachment.source !== 'board-batch'
                }["ProjectView.useCallback[queueChatSendForCurrentConversation]"]).map({
                    "ProjectView.useCallback[queueChatSendForCurrentConversation]": (attachment)=>attachment.id
                }["ProjectView.useCallback[queueChatSendForCurrentConversation]"]));
                setAttachedComments({
                    "ProjectView.useCallback[queueChatSendForCurrentConversation]": (current)=>current.filter({
                            "ProjectView.useCallback[queueChatSendForCurrentConversation]": (comment)=>!reservedCommentIds.has(comment.id)
                        }["ProjectView.useCallback[queueChatSendForCurrentConversation]"])
                }["ProjectView.useCallback[queueChatSendForCurrentConversation]"]);
                if (reservedCommentIds.size > 0) {
                    setPreviewComments({
                        "ProjectView.useCallback[queueChatSendForCurrentConversation]": (current)=>current.map({
                                "ProjectView.useCallback[queueChatSendForCurrentConversation]": (comment)=>reservedCommentIds.has(comment.id) ? {
                                        ...comment,
                                        status: 'applying'
                                    } : comment
                            }["ProjectView.useCallback[queueChatSendForCurrentConversation]"])
                    }["ProjectView.useCallback[queueChatSendForCurrentConversation]"]);
                    void Promise.all(Array.from(reservedCommentIds, {
                        "ProjectView.useCallback[queueChatSendForCurrentConversation]": (commentId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchPreviewCommentStatus"])(project.id, input.conversationId, commentId, 'applying')
                    }["ProjectView.useCallback[queueChatSendForCurrentConversation]"])).catch({
                        "ProjectView.useCallback[queueChatSendForCurrentConversation]": ()=>{}
                    }["ProjectView.useCallback[queueChatSendForCurrentConversation]"]);
                }
            }
        }
    }["ProjectView.useCallback[queueChatSendForCurrentConversation]"], [
        enqueueChatSend,
        project.id
    ]);
    const handleSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleSend]": async (prompt, attachments, commentAttachments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentsToAttachments"])(attachedComments), meta, baseMessages)=>{
            if (!activeConversationId) return false;
            if (messagesConversationIdRef.current !== activeConversationId) return false;
            const runSessionMode = meta?.sessionMode ?? activeSessionMode;
            const retryTarget = meta?.retryOfAssistantId ? resolveRetryTarget(messages, meta.retryOfAssistantId) : null;
            if (meta?.retryOfAssistantId && !retryTarget) return false;
            const runContext = meta?.context ?? retryTarget?.userMsg.runContext;
            const historyBase = retryTarget ? retryTarget.priorMessages : baseMessages ?? messages;
            if (!retryTarget && !prompt.trim() && attachments.length === 0 && commentAttachments.length === 0) return false;
            const effectiveAttachments = mergeChatAttachments(attachments, ...commentAttachments.map({
                "ProjectView.useCallback[handleSend].effectiveAttachments": (attachment)=>chatAttachmentsFromPreviewCommentImages(attachment.imageAttachments)
            }["ProjectView.useCallback[handleSend].effectiveAttachments"]));
            if (!retryTarget && meta?.queueOnly) {
                queueChatSendForCurrentConversation({
                    conversationId: activeConversationId,
                    prompt,
                    attachments: effectiveAttachments,
                    commentAttachments,
                    meta: {
                        ...meta ?? {},
                        sessionMode: runSessionMode
                    }
                });
                return false;
            }
            if (currentConversationBusy) {
                queueChatSendForCurrentConversation({
                    conversationId: activeConversationId,
                    prompt,
                    attachments: effectiveAttachments,
                    commentAttachments,
                    meta: {
                        ...meta ?? {},
                        sessionMode: runSessionMode
                    }
                });
                return false;
            }
            setChatSeed(null);
            const runConversationId = activeConversationId;
            setError(null);
            const startedAt = Date.now();
            const userMsg = retryTarget?.userMsg ?? {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                role: 'user',
                content: prompt,
                createdAt: startedAt,
                sessionMode: runSessionMode,
                ...meta?.appliedPluginSnapshot ? {
                    appliedPluginSnapshot: meta.appliedPluginSnapshot
                } : {},
                ...runContext ? {
                    runContext
                } : {},
                attachments: effectiveAttachments.length > 0 ? effectiveAttachments : undefined,
                commentAttachments: commentAttachments.length > 0 ? commentAttachments : undefined
            };
            const runCommentAttachments = userMsg.commentAttachments ?? [];
            const runAttachments = mergeChatAttachments(userMsg.attachments ?? [], ...runCommentAttachments.map({
                "ProjectView.useCallback[handleSend].runAttachments": (attachment)=>chatAttachmentsFromPreviewCommentImages(attachment.imageAttachments)
            }["ProjectView.useCallback[handleSend].runAttachments"]));
            const selectedAgent = config.mode === 'daemon' && config.agentId ? agentsById.get(config.agentId) : null;
            const selectedAgentChoice = config.mode === 'daemon' && config.agentId ? config.agentModels?.[config.agentId] : undefined;
            const effectiveSelectedAgentChoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$agentModelSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveAgentModelChoice"])(selectedAgent, selectedAgentChoice);
            const assistantAgentId = config.mode === 'daemon' ? config.agentId ?? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiProtocolAgentId"])(config.apiProtocol);
            const assistantAgentName = config.mode === 'daemon' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentModelDisplayName"])(config.agentId, selectedAgent?.name, effectiveSelectedAgentChoice?.model) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiProtocolModelLabel"])(config.apiProtocol, config.model);
            const preTurnFileNames = projectFiles.map({
                "ProjectView.useCallback[handleSend].preTurnFileNames": (f)=>f.name
            }["ProjectView.useCallback[handleSend].preTurnFileNames"]);
            const assistantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
            const assistantMsg = {
                id: assistantId,
                role: 'assistant',
                content: '',
                agentId: assistantAgentId,
                agentName: assistantAgentName,
                events: [],
                createdAt: startedAt,
                runStatus: config.mode === 'daemon' ? 'running' : undefined,
                startedAt,
                preTurnFileNames
            };
            let latestAssistantMsg = assistantMsg;
            const updateConversationLatestRun = {
                "ProjectView.useCallback[handleSend].updateConversationLatestRun": (status, endedAt)=>{
                    setConversations({
                        "ProjectView.useCallback[handleSend].updateConversationLatestRun": (curr)=>curr.map({
                                "ProjectView.useCallback[handleSend].updateConversationLatestRun": (conversation)=>conversation.id === runConversationId ? {
                                        ...conversation,
                                        updatedAt: endedAt ?? startedAt,
                                        latestRun: {
                                            status,
                                            startedAt,
                                            ...endedAt === undefined ? {} : {
                                                endedAt,
                                                durationMs: Math.max(0, endedAt - startedAt)
                                            }
                                        }
                                    } : conversation
                            }["ProjectView.useCallback[handleSend].updateConversationLatestRun"])
                    }["ProjectView.useCallback[handleSend].updateConversationLatestRun"]);
                }
            }["ProjectView.useCallback[handleSend].updateConversationLatestRun"];
            activeCompletionNotificationRunsRef.current.add(assistantId);
            const nextHistory = retryTarget ? [
                ...retryTarget.priorMessages,
                userMsg
            ] : [
                ...historyBase,
                userMsg
            ];
            const nextVisibleMessages = retryTarget ? [
                ...nextHistory,
                ...retryTarget.preservedAttempts,
                assistantMsg
            ] : [
                ...nextHistory,
                assistantMsg
            ];
            setMessages(nextVisibleMessages);
            markStreamingConversation(runConversationId);
            updateConversationLatestRun(config.mode === 'daemon' ? 'running' : 'queued');
            setArtifact(null);
            savedArtifactRef.current = null;
            onTouchProject();
            if (!retryTarget) persistMessage(userMsg);
            // Intentionally do NOT persist `assistantMsg` here. In daemon mode it
            // starts as runStatus='running' with no runId, which the source-level
            // guard treats as a phantom — the first DB write happens inside
            // `onRunCreated` (below) once POST /api/runs returns a runId. In API
            // mode there is no runStatus, and the buffered text path will persist
            // as soon as the first delta lands.
            persistMessage(assistantMsg);
            if (runCommentAttachments.length > 0) {
                void patchAttachedStatuses(runCommentAttachments, 'applying');
                const consumedCommentIds = new Set(runCommentAttachments.map({
                    "ProjectView.useCallback[handleSend]": (attachment)=>attachment.id
                }["ProjectView.useCallback[handleSend]"]));
                setAttachedComments({
                    "ProjectView.useCallback[handleSend]": (current)=>current.filter({
                            "ProjectView.useCallback[handleSend]": (comment)=>!consumedCommentIds.has(comment.id)
                        }["ProjectView.useCallback[handleSend]"])
                }["ProjectView.useCallback[handleSend]"]);
            }
            const isFirstTurn = !retryTarget && historyBase.length === 0;
            const fallbackFirstTurnTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignSystemWorkspacePrompt"])(prompt) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_SYSTEM_WORKSPACE_DISPLAY_TITLE"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeProjectNameFromPrompt"])(prompt) || prompt.slice(0, 60).trim();
            const fallbackProjectName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeProjectNameFromPrompt"])(prompt);
            // If this is the first turn, derive a working title from the prompt
            // so the conversation is identifiable in the dropdown without a
            // round-trip through the agent.
            if (isFirstTurn) {
                const title = fallbackFirstTurnTitle;
                if (title) {
                    setConversations({
                        "ProjectView.useCallback[handleSend]": (curr)=>curr.map({
                                "ProjectView.useCallback[handleSend]": (c)=>c.id === runConversationId ? {
                                        ...c,
                                        title
                                    } : c
                            }["ProjectView.useCallback[handleSend]"])
                    }["ProjectView.useCallback[handleSend]"]);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchConversation"])(project.id, runConversationId, {
                        title
                    });
                }
                const projectName = fallbackProjectName;
                if (projectName && projectName !== project.name && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAutoRenameProjectFromPrompt"])(project, prompt)) {
                    const metadata = project.metadata ? {
                        ...project.metadata,
                        nameSource: 'prompt'
                    } : undefined;
                    const updated = {
                        ...project,
                        name: projectName,
                        ...metadata ? {
                            metadata
                        } : {},
                        updatedAt: Date.now()
                    };
                    onProjectChange(updated);
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(project.id, {
                        name: projectName,
                        ...metadata ? {
                            metadata
                        } : {}
                    });
                }
            }
            const canReplaceConversationTitle = {
                "ProjectView.useCallback[handleSend].canReplaceConversationTitle": (title)=>{
                    const trimmed = (title ?? '').trim();
                    return !trimmed || trimmed === fallbackFirstTurnTitle || trimmed === prompt.slice(0, 60).trim();
                }
            }["ProjectView.useCallback[handleSend].canReplaceConversationTitle"];
            const applyAgentGeneratedTitle = {
                "ProjectView.useCallback[handleSend].applyAgentGeneratedTitle": (rawTitle)=>{
                    if (!isFirstTurn) return;
                    const agentTitle = rawTitle.trim();
                    if (!agentTitle || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignSystemWorkspacePrompt"])(prompt)) return;
                    const currentConversationTitle = conversationsRef.current.find({
                        "ProjectView.useCallback[handleSend].applyAgentGeneratedTitle": (conversation)=>conversation.id === runConversationId
                    }["ProjectView.useCallback[handleSend].applyAgentGeneratedTitle"])?.title;
                    const shouldPatchConversation = canReplaceConversationTitle(currentConversationTitle);
                    setConversations({
                        "ProjectView.useCallback[handleSend].applyAgentGeneratedTitle": (curr)=>curr.map({
                                "ProjectView.useCallback[handleSend].applyAgentGeneratedTitle": (conversation)=>{
                                    if (conversation.id !== runConversationId) return conversation;
                                    if (!canReplaceConversationTitle(conversation.title)) return conversation;
                                    return {
                                        ...conversation,
                                        title: agentTitle
                                    };
                                }
                            }["ProjectView.useCallback[handleSend].applyAgentGeneratedTitle"])
                    }["ProjectView.useCallback[handleSend].applyAgentGeneratedTitle"]);
                    if (shouldPatchConversation) {
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchConversation"])(project.id, runConversationId, {
                            title: agentTitle
                        });
                    }
                    if (agentTitle !== project.name && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$projectName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAutoRenameProjectFromPrompt"])(project, prompt)) {
                        const metadata = project.metadata ? {
                            ...project.metadata,
                            nameSource: 'agent'
                        } : undefined;
                        const updated = {
                            ...project,
                            name: agentTitle,
                            ...metadata ? {
                                metadata
                            } : {},
                            updatedAt: Date.now()
                        };
                        onProjectChange(updated);
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(project.id, {
                            name: agentTitle,
                            ...metadata ? {
                                metadata
                            } : {}
                        });
                    }
                }
            }["ProjectView.useCallback[handleSend].applyAgentGeneratedTitle"];
            // Snapshot the file list at turn-start so we can diff after the
            // agent finishes and surface anything new (e.g. a generated .pptx)
            // as download chips on the assistant message.
            const beforeFileNames = new Set(preTurnFileNames);
            const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArtifactParser"])();
            let parsedArtifact = null;
            let liveHtml = '';
            let streamedText = '';
            const updateAssistant = {
                "ProjectView.useCallback[handleSend].updateAssistant": (updater)=>{
                    setMessages({
                        "ProjectView.useCallback[handleSend].updateAssistant": (curr)=>curr.map({
                                "ProjectView.useCallback[handleSend].updateAssistant": (m)=>{
                                    if (m.id !== assistantId) return m;
                                    const updated = updater(m);
                                    latestAssistantMsg = updated;
                                    return updated;
                                }
                            }["ProjectView.useCallback[handleSend].updateAssistant"])
                    }["ProjectView.useCallback[handleSend].updateAssistant"]);
                }
            }["ProjectView.useCallback[handleSend].updateAssistant"];
            let persistTimer = null;
            const persistAssistantSoon = {
                "ProjectView.useCallback[handleSend].persistAssistantSoon": ()=>{
                    if (persistTimer) return;
                    persistTimer = scheduleProjectTimeout({
                        "ProjectView.useCallback[handleSend].persistAssistantSoon": ()=>{
                            persistTimer = null;
                            persistMessageById(assistantId);
                        }
                    }["ProjectView.useCallback[handleSend].persistAssistantSoon"], 500);
                }
            }["ProjectView.useCallback[handleSend].persistAssistantSoon"];
            const persistAssistantNowKeepalive = {
                "ProjectView.useCallback[handleSend].persistAssistantNowKeepalive": ()=>{
                    if (persistTimer) {
                        clearProjectTimeout(persistTimer);
                        persistTimer = null;
                    }
                    persistMessageById(assistantId, {
                        keepalive: true
                    });
                }
            }["ProjectView.useCallback[handleSend].persistAssistantNowKeepalive"];
            const pushEvent = {
                "ProjectView.useCallback[handleSend].pushEvent": (ev)=>{
                    textBuffer.flush();
                    updateAssistant({
                        "ProjectView.useCallback[handleSend].pushEvent": (prev)=>({
                                ...prev,
                                events: [
                                    ...prev.events ?? [],
                                    ev
                                ]
                            })
                    }["ProjectView.useCallback[handleSend].pushEvent"]);
                    if (ev.kind === 'live_artifact') {
                        setLiveArtifactEvents({
                            "ProjectView.useCallback[handleSend].pushEvent": (prev)=>appendLiveArtifactEventItem(prev, ev)
                        }["ProjectView.useCallback[handleSend].pushEvent"]);
                        void refreshLiveArtifacts().then({
                            "ProjectView.useCallback[handleSend].pushEvent": ()=>{
                                if (ev.action !== 'deleted') requestOpenFile((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveArtifactTabId"])(ev.artifactId));
                            }
                        }["ProjectView.useCallback[handleSend].pushEvent"]);
                        onProjectsRefresh();
                        return;
                    }
                    if (ev.kind === 'live_artifact_refresh') {
                        setLiveArtifactEvents({
                            "ProjectView.useCallback[handleSend].pushEvent": (prev)=>appendLiveArtifactEventItem(prev, ev)
                        }["ProjectView.useCallback[handleSend].pushEvent"]);
                        void refreshLiveArtifacts();
                        onProjectsRefresh();
                        return;
                    }
                    persistAssistantSoon();
                    persistAssistantSoon();
                    // Track Write tool invocations so we can auto-open the destination
                    // file the moment the agent finishes writing it. The file-creating
                    // tools we care about: Write (new file), Edit (existing file —
                    // surfacing the freshly-modified file is also useful).
                    if (ev.kind === 'tool_use') {
                        // The authoritative input has landed; drop the live partial so the
                        // card renders from the parsed `tool_use.input` instead of the
                        // mid-token JSON fragment.
                        setLiveToolInput({
                            "ProjectView.useCallback[handleSend].pushEvent": (prev)=>{
                                if (!(ev.id in prev)) return prev;
                                const next = {
                                    ...prev
                                };
                                delete next[ev.id];
                                return next;
                            }
                        }["ProjectView.useCallback[handleSend].pushEvent"]);
                    }
                    if (ev.kind === 'tool_use' && (ev.name === 'Write' || ev.name === 'write' || ev.name === 'Edit')) {
                        const input = ev.input;
                        const filePath = input?.file_path ?? input?.filePath;
                        if (typeof filePath === 'string' && filePath.length > 0) {
                            // Preserve the full path so decideAutoOpenAfterWrite can do a
                            // path-suffix match against the project's relative file paths.
                            // Reducing to a basename here would lose the segment alignment
                            // we need to disambiguate same-basename collisions across the
                            // project tree and outside it.
                            pendingWritesRef.current.set(ev.id, filePath);
                        }
                    }
                    if (ev.kind === 'tool_result') {
                        const filePath = pendingWritesRef.current.get(ev.toolUseId);
                        if (filePath) {
                            pendingWritesRef.current.delete(ev.toolUseId);
                            if (!ev.isError) {
                                // Refresh first so FileWorkspace's file list (and the tab
                                // body) sees the new content before we ask it to focus.
                                // Only auto-open if the file actually landed in the project's
                                // file list — otherwise an out-of-project Write (e.g. an
                                // upstream repo edit) would spawn a permanent placeholder tab.
                                void refreshProjectFiles().then({
                                    "ProjectView.useCallback[handleSend].pushEvent": async (nextFiles)=>{
                                        // A .jsx/.tsx loaded by a sibling HTML entry is a module of a
                                        // multi-file React prototype, not a standalone page — don't
                                        // strand the user on a dead-end preview tab. Issue #2744.
                                        const moduleFileNames = /\.(jsx|tsx)$/i.test(filePath) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$jsx$2d$module$2d$refs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectReferencedJsxNames"])(nextFiles, readProjectHtml) : undefined;
                                        const decision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decideAutoOpenAfterWrite"])(filePath, nextFiles, {
                                            moduleFileNames
                                        });
                                        if (decision.shouldOpen && decision.fileName) {
                                            requestOpenFile(decision.fileName);
                                        }
                                    }
                                }["ProjectView.useCallback[handleSend].pushEvent"]);
                            }
                        }
                    }
                }
            }["ProjectView.useCallback[handleSend].pushEvent"];
            const applyContentDelta = {
                "ProjectView.useCallback[handleSend].applyContentDelta": (delta)=>{
                    for (const ev of parser.feed(delta)){
                        if (ev.type === 'artifact:start') {
                            liveHtml = '';
                            parsedArtifact = {
                                identifier: ev.identifier,
                                artifactType: ev.artifactType,
                                title: ev.title,
                                html: ''
                            };
                            setArtifact(parsedArtifact);
                        } else if (ev.type === 'artifact:chunk') {
                            liveHtml += ev.delta;
                            parsedArtifact = parsedArtifact ? {
                                ...parsedArtifact,
                                html: liveHtml
                            } : {
                                identifier: ev.identifier,
                                title: '',
                                html: liveHtml
                            };
                            setArtifact({
                                "ProjectView.useCallback[handleSend].applyContentDelta": (prev)=>prev ? {
                                        ...prev,
                                        html: liveHtml
                                    } : {
                                        identifier: ev.identifier,
                                        title: '',
                                        html: liveHtml
                                    }
                            }["ProjectView.useCallback[handleSend].applyContentDelta"]);
                        } else if (ev.type === 'artifact:end') {
                            parsedArtifact = parsedArtifact ? {
                                ...parsedArtifact,
                                html: ev.fullContent
                            } : {
                                identifier: ev.identifier,
                                title: '',
                                html: ev.fullContent
                            };
                            setArtifact({
                                "ProjectView.useCallback[handleSend].applyContentDelta": (prev)=>prev ? {
                                        ...prev,
                                        html: ev.fullContent
                                    } : null
                            }["ProjectView.useCallback[handleSend].applyContentDelta"]);
                        }
                    }
                }
            }["ProjectView.useCallback[handleSend].applyContentDelta"];
            const textBuffer = createBufferedTextUpdates({
                updateMessage: updateAssistant,
                persistSoon: persistAssistantSoon,
                flushAndPersistNow: persistAssistantNowKeepalive,
                onContentDelta: applyContentDelta
            });
            sendTextBufferRef.current = textBuffer;
            const controller = new AbortController();
            const cancelController = new AbortController();
            abortRef.current = controller;
            cancelRef.current = cancelController;
            const handlers = {
                onDelta: {
                    "ProjectView.useCallback[handleSend]": (delta)=>{
                        streamedText += delta;
                        textBuffer.appendContent(delta);
                    }
                }["ProjectView.useCallback[handleSend]"],
                onAgentEvent: {
                    "ProjectView.useCallback[handleSend]": (ev)=>{
                        if (ev.kind === 'conversation_title') {
                            applyAgentGeneratedTitle(ev.title);
                            return;
                        }
                        if (ev.kind === 'text') textBuffer.appendTextEvent(ev.text);
                        else pushEvent(ev);
                    }
                }["ProjectView.useCallback[handleSend]"],
                onToolInputDelta: {
                    "ProjectView.useCallback[handleSend]": (id, name, delta)=>{
                        setLiveToolInput({
                            "ProjectView.useCallback[handleSend]": (prev)=>({
                                    ...prev,
                                    [id]: {
                                        name,
                                        text: (prev[id]?.text ?? '') + delta,
                                        // Pin the tool's stream position the first time we see it: the
                                        // count of events already on the message is everything the model
                                        // emitted before the tool call (its preamble). Buffered text
                                        // (appendTextEvent) isn't flushed into `events` until the next
                                        // frame, so add 1 for any still-pending preamble chunk — it will
                                        // commit as one text event just before this tool's position.
                                        seq: prev[id]?.seq ?? (latestAssistantMsg.events?.length ?? 0) + (textBuffer.hasPendingText() ? 1 : 0)
                                    }
                                })
                        }["ProjectView.useCallback[handleSend]"]);
                    }
                }["ProjectView.useCallback[handleSend]"],
                onDone: {
                    "ProjectView.useCallback[handleSend]": (fullText = '')=>{
                        // The daemon delivers onDone even for a canceled run, so a run
                        // superseded by a "send now" interrupt can still land here and must
                        // not apply its completion side effects over the replacement. A run
                        // may finalize unless it was tagged superseded at interrupt time
                        // (recorded before handleStop cleared the refs), which is reliable
                        // even before the replacement send attaches — unlike abortRef, whose
                        // terminal onRunStatus / handleStop churn make it ambiguous here.
                        const runMayFinalize = !supersededRunsRef.current.has(controller);
                        if (!runMayFinalize) {
                            textBuffer.cancel();
                            cancelSendTextBuffer();
                            return;
                        }
                        textBuffer.flush();
                        textBuffer.cancel();
                        cancelSendTextBuffer();
                        for (const ev of parser.flush()){
                            if (ev.type === 'artifact:end') {
                                parsedArtifact = parsedArtifact ? {
                                    ...parsedArtifact,
                                    html: ev.fullContent
                                } : {
                                    identifier: ev.identifier,
                                    title: '',
                                    html: ev.fullContent
                                };
                                setArtifact({
                                    "ProjectView.useCallback[handleSend]": (prev)=>prev ? {
                                            ...prev,
                                            html: ev.fullContent
                                        } : null
                                }["ProjectView.useCallback[handleSend]"]);
                            }
                        }
                        const emptyApiResponse = config.mode === 'api' && !fullText.trim() && !streamedText.trim() && !liveHtml.trim();
                        if (emptyApiResponse) {
                            const endedAt = Date.now();
                            const diagnostic = t('assistant.emptyResponseMessage');
                            updateMessageById(assistantId, {
                                "ProjectView.useCallback[handleSend]": (prev)=>({
                                        ...prev,
                                        endedAt,
                                        runStatus: 'failed',
                                        events: [
                                            ...prev.events ?? [],
                                            {
                                                kind: 'status',
                                                label: 'empty_response',
                                                detail: config.model
                                            },
                                            {
                                                kind: 'text',
                                                text: diagnostic
                                            }
                                        ]
                                    })
                            }["ProjectView.useCallback[handleSend]"], true, {
                                telemetryFinalized: true
                            });
                            if (runCommentAttachments.length > 0) {
                                void patchAttachedStatuses(runCommentAttachments, 'failed');
                            }
                            const ownsCurrentRun = clearCurrentRunStreamingMarker(runConversationId, controller, cancelController);
                            if (ownsCurrentRun) updateConversationLatestRun('failed', endedAt);
                            void refreshProjectFiles();
                            onProjectsRefresh();
                            return;
                        }
                        const endedAt = Date.now();
                        let finalRunStatus = 'succeeded';
                        updateAssistant({
                            "ProjectView.useCallback[handleSend]": (prev)=>{
                                finalRunStatus = resolveSucceededRunStatus(prev.runStatus);
                                return {
                                    ...prev,
                                    endedAt,
                                    runStatus: finalRunStatus
                                };
                            }
                        }["ProjectView.useCallback[handleSend]"]);
                        if (runCommentAttachments.length > 0) {
                            void patchAttachedStatuses(runCommentAttachments, 'needs_review');
                        }
                        const ownsCurrentRun = clearCurrentRunStreamingMarker(runConversationId, controller, cancelController);
                        if (ownsCurrentRun) updateConversationLatestRun(finalRunStatus ?? 'succeeded', endedAt);
                        // Refetch the file list directly (rather than just bumping the
                        // refresh signal) so we can diff against the pre-turn snapshot
                        // and attach the new files to the assistant message as download
                        // chips.
                        void ({
                            "ProjectView.useCallback[handleSend]": async ()=>{
                                let nextFiles = await refreshProjectFiles();
                                const finalText = streamedText || fullText;
                                const artifactToPersist = parsedArtifact?.html ? parsedArtifact : artifactFromStandaloneHtml(finalText);
                                if (artifactToPersist?.html) {
                                    const producedBeforeFallback = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                                    const sameTurnHtmlWrite = await findSameTurnHtmlWriteForRecoveredArtifact({
                                        artifactHtml: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePersistedArtifactHtml"])({
                                            artifactHtml: artifactToPersist.html,
                                            identifier: artifactToPersist.identifier,
                                            sourceText: finalText
                                        }),
                                        producedFiles: producedBeforeFallback,
                                        readProjectHtml
                                    });
                                    if (sameTurnHtmlWrite) {
                                        savedArtifactRef.current = sameTurnHtmlWrite.name;
                                        requestOpenFile(sameTurnHtmlWrite.name);
                                    } else {
                                        await persistArtifact(artifactToPersist, nextFiles, finalText);
                                        nextFiles = await refreshProjectFiles();
                                    }
                                }
                                const produced = computeProducedFiles(beforeFileNames, nextFiles) ?? [];
                                const producedHtmlToOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$auto$2d$open$2d$file$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAutoOpenProducedHtml"])(produced);
                                if (producedHtmlToOpen) requestOpenFile(producedHtmlToOpen);
                                setMessages({
                                    "ProjectView.useCallback[handleSend]": (curr)=>{
                                        const updated = curr.map({
                                            "ProjectView.useCallback[handleSend].updated": (m)=>m.id === assistantId ? {
                                                    ...m,
                                                    producedFiles: produced
                                                } : m
                                        }["ProjectView.useCallback[handleSend].updated"]);
                                        const finalized = updated.find({
                                            "ProjectView.useCallback[handleSend].finalized": (m)=>m.id === assistantId
                                        }["ProjectView.useCallback[handleSend].finalized"]);
                                        if (finalized) persistMessage(finalized, {
                                            telemetryFinalized: true
                                        });
                                        return updated;
                                    }
                                }["ProjectView.useCallback[handleSend]"]);
                                await auditDesignSystemWorkspaceAfterRun(assistantId);
                            }
                        })["ProjectView.useCallback[handleSend]"]();
                        onProjectsRefresh();
                    }
                }["ProjectView.useCallback[handleSend]"],
                onError: {
                    "ProjectView.useCallback[handleSend]": (err)=>{
                        const endedAt = Date.now();
                        const errorCode = err.code;
                        const resumable = err.resumable === true;
                        // A run superseded by a "send now" interrupt can still surface a
                        // late disconnect error (e.g. a canceled stream that lost its
                        // terminal SSE). It must not paint a global failure banner or
                        // re-finalize its already-canceled assistant message once it was
                        // tagged superseded. See the onDone above for the ownership rationale.
                        const runMayFinalize = !supersededRunsRef.current.has(controller);
                        textBuffer.flush();
                        textBuffer.cancel();
                        cancelSendTextBuffer();
                        if (runMayFinalize) {
                            setError(err.message);
                            appendAssistantErrorEvent(assistantId, err.message, errorCode);
                            updateAssistant({
                                "ProjectView.useCallback[handleSend]": (prev)=>({
                                        ...prev,
                                        endedAt,
                                        runStatus: config.mode === 'api' || prev.runId || isActiveRunStatus(prev.runStatus) ? 'failed' : prev.runStatus,
                                        resumable
                                    })
                            }["ProjectView.useCallback[handleSend]"]);
                            if (runCommentAttachments.length > 0) {
                                void patchAttachedStatuses(runCommentAttachments, 'failed');
                            }
                        }
                        const ownsCurrentRun = clearCurrentRunStreamingMarker(runConversationId, controller, cancelController);
                        if (ownsCurrentRun) updateConversationLatestRun('failed', endedAt);
                        setMessages({
                            "ProjectView.useCallback[handleSend]": (curr)=>{
                                const finalized = curr.find({
                                    "ProjectView.useCallback[handleSend].finalized": (m)=>m.id === assistantId
                                }["ProjectView.useCallback[handleSend].finalized"]);
                                if (finalized) persistMessage(finalized, {
                                    telemetryFinalized: true
                                });
                                return curr;
                            }
                        }["ProjectView.useCallback[handleSend]"]);
                        void refreshProjectFiles();
                    }
                }["ProjectView.useCallback[handleSend]"]
            };
            if (config.mode === 'daemon') {
                if (!config.agentId) {
                    handlers.onError(new Error('Pick a local agent first (top bar).'));
                    return true;
                }
                const choice = effectiveSelectedAgentChoice;
                // v2 analytics: when the active project is a DS workspace
                // (created by `prepareCreatedDesignSystemProject`, identifiable
                // by `metadata.importedFrom === 'design-system'`), every run
                // started from this composer is a DS-variant run. Pass
                // analyticsHints so the daemon emits run_created /
                // run_finished under `page_name=design_system_project`,
                // `area=design_system_generation`, `project_kind=design_system`.
                // The first-ever message into a DS workspace is the auto-sent
                // generation kickoff (entry_from=`onboarding_design_system` is
                // the doc's name for "DS create flow handed off to the agent");
                // subsequent messages are review-driven regenerations
                // (`regenerate_from_review`). Use `messages.length === 0` —
                // truer than autoSendFirstMessageRef which races StrictMode
                // remounts + sessionStorage clears.
                const isDesignSystemWorkspaceProject = project.metadata?.importedFrom === 'design-system';
                const dsEntryFrom = messages.length === 0 ? 'onboarding_design_system' : 'regenerate_from_review';
                const dsAnalyticsHints = isDesignSystemWorkspaceProject ? {
                    entryFrom: dsEntryFrom,
                    projectKind: 'design_system',
                    designSystemRunContext: {
                        origin: 'manual_create'
                    }
                } : undefined;
                // A caller-supplied entry_from (e.g. 'resume_continue' from the
                // resumable-failure Continue action) overrides the DS default so the
                // run is attributed to the affordance that started it.
                //
                // Session-dimension hints are stamped on every real run creation (this
                // path only runs for non-queued sends): claim the next 0-based turn
                // index for this browser session, and flag whether the project already
                // had a generated artifact (project-scoped) so the run reads as an edit
                // rather than a first creation.
                const sessionTurn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claimRunTurnIndex"])();
                const hasExistingArtifact = projectFilesRef.current.some({
                    "ProjectView.useCallback[handleSend].hasExistingArtifact": (file)=>Boolean(file.artifactManifest)
                }["ProjectView.useCallback[handleSend].hasExistingArtifact"]);
                const runAnalyticsHints = {
                    ...dsAnalyticsHints ?? {},
                    ...meta?.entryFrom ? {
                        entryFrom: meta.entryFrom
                    } : {},
                    ...sessionTurn ? {
                        turnIndex: sessionTurn.turnIndex,
                        isFirstRun: sessionTurn.isFirstRun
                    } : {},
                    hasExistingArtifact,
                    // This branch only runs in daemon (local-execution) mode, so the
                    // runtime is the bundled AMR cloud agent or a local coding CLI —
                    // never BYOK (that path streams client-side, below). Hand the daemon
                    // the authoritative value so run_created/run_finished split AMR vs
                    // CLI without relying on its agent-id re-derivation.
                    runtimeType: config.agentId === 'amr' ? 'amr_cloud' : 'local_cli'
                };
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamViaDaemon"])({
                    agentId: config.agentId,
                    history: nextHistory,
                    signal: controller.signal,
                    cancelSignal: cancelController.signal,
                    handlers,
                    projectId: project.id,
                    conversationId: runConversationId,
                    assistantMessageId: assistantId,
                    clientRequestId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                    skillId: project.skillId ?? null,
                    skillIds: Array.isArray(meta?.skillIds) ? meta.skillIds : [],
                    context: runContext,
                    designSystemId: project.designSystemId ?? null,
                    attachments: runAttachments.map({
                        "ProjectView.useCallback[handleSend]": (a)=>a.path
                    }["ProjectView.useCallback[handleSend]"]),
                    commentAttachments: runCommentAttachments,
                    sessionMode: runSessionMode,
                    appliedPluginSnapshotId: meta?.appliedPluginSnapshotId ?? meta?.appliedPluginSnapshot?.snapshotId ?? null,
                    research: meta?.research,
                    mediaExecution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$execution$2d$policy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mediaExecutionPolicyForProjectMetadata"])(project.metadata),
                    model: choice?.model ?? null,
                    reasoning: choice?.reasoning ?? null,
                    titleGeneration: isFirstTurn ? {
                        enabled: true
                    } : undefined,
                    locale,
                    ...("TURBOPACK compile-time truthy", 1) ? {
                        analyticsHints: runAnalyticsHints
                    } : "TURBOPACK unreachable",
                    onRunCreated: {
                        "ProjectView.useCallback[handleSend]": (runId)=>{
                            const pinnedAssistant = {
                                ...latestAssistantMsg,
                                runId,
                                runStatus: 'queued'
                            };
                            latestAssistantMsg = pinnedAssistant;
                            // The view may already be on a different project/conversation;
                            // pin the daemon run to the original row so returning can reattach.
                            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(project.id, runConversationId, pinnedAssistant);
                            updateMessageById(assistantId, {
                                "ProjectView.useCallback[handleSend]": (prev)=>({
                                        ...prev,
                                        runId,
                                        runStatus: 'queued'
                                    })
                            }["ProjectView.useCallback[handleSend]"]);
                        }
                    }["ProjectView.useCallback[handleSend]"],
                    onRunStatus: {
                        "ProjectView.useCallback[handleSend]": (runStatus)=>{
                            const endedAt = isTerminalRunStatus(runStatus) ? Date.now() : undefined;
                            const runMayFinalize = !supersededRunsRef.current.has(controller);
                            updateMessageById(assistantId, {
                                "ProjectView.useCallback[handleSend]": (prev)=>({
                                        ...prev,
                                        runStatus,
                                        endedAt: endedAt === undefined ? prev.endedAt : prev.endedAt ?? endedAt
                                    })
                            }["ProjectView.useCallback[handleSend]"], true, runStatus === 'canceled' ? {
                                telemetryFinalized: true
                            } : undefined);
                            if (!runMayFinalize) return;
                            updateConversationLatestRun(runStatus, endedAt);
                            if (isTerminalRunStatus(runStatus)) {
                                clearCurrentRunStreamingMarker(runConversationId, controller, cancelController);
                                scheduleConversationMessageRefresh(runConversationId);
                            }
                        }
                    }["ProjectView.useCallback[handleSend]"],
                    onRunEventId: {
                        "ProjectView.useCallback[handleSend]": (lastRunEventId)=>{
                            updateMessageById(assistantId, {
                                "ProjectView.useCallback[handleSend]": (prev)=>({
                                        ...prev,
                                        lastRunEventId
                                    })
                            }["ProjectView.useCallback[handleSend]"]);
                            persistAssistantSoon();
                        }
                    }["ProjectView.useCallback[handleSend]"]
                });
                return true;
            } else {
                // Mirror the daemon chat-route memory hook for BYOK chats. The
                // CLI path runs `extractFromMessage` BEFORE composing the prompt
                // (so an explicit "remember: X" / "我是 X" marker in this turn's
                // user message lands in memory in time for this turn's system
                // prompt), then queues `extractWithLLM` on child close (so the
                // small-model pass picks up implicit facts from the full
                // user+assistant exchange). BYOK chats never hit that route, so
                // we replicate both phases here against `/api/memory/extract`.
                // Without this, the Memory tab / model picker is a no-op for
                // BYOK users even though the UI saves model + index + entries
                // for that mode.
                const userText = (userMsg.content ?? '').trim();
                // Snapshot the live BYOK chat config so the daemon can run
                // "Same as chat" memory extraction against the same vendor /
                // key / baseUrl / apiVersion the user is chatting with. The
                // daemon never persists BYOK creds itself, so this per-call
                // signal is the only way `pickProvider()` can avoid falling
                // through to env / media-config (which is wrong for BYOK)
                // when no explicit memory model override is set. The picker
                // re-syncs an *explicit* override when chat config drifts;
                // this snapshot covers the implicit "Same as chat" default.
                const byokChatProvider = config.apiProtocol && config.apiKey ? {
                    provider: config.apiProtocol,
                    apiKey: config.apiKey,
                    baseUrl: config.baseUrl,
                    apiVersion: config.apiProtocol === 'azure' ? config.apiVersion ?? '' : ''
                } : undefined;
                if (userText.length > 0) {
                    try {
                        await fetch('/api/memory/extract', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userMessage: userText,
                                projectId: project.id,
                                conversationId: runConversationId,
                                chatProvider: byokChatProvider
                            })
                        });
                    } catch  {
                    // Best-effort: memory extraction must never block the
                    // chat. The daemon's SSE bus will catch up the Memory tab
                    // on the next event.
                    }
                }
                const systemPrompt = await composedSystemPrompt(runSessionMode);
                const apiHistory = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2d$attachment$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["historyWithApiAttachmentContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["historyWithCommentAttachmentContext"])(historyWithWorkspaceContext(nextHistory, userMsg.id, runContext), userMsg.id), userMsg.id, project.id, projectFiles, {
                    omitNativeImageAttachments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usesAnthropicProxy"])(config)
                });
                pushEvent({
                    kind: 'status',
                    label: 'requesting',
                    detail: config.model
                });
                // BYOK runs stream client-side and never reach the daemon, so the
                // daemon's authoritative run_created/run_finished are never emitted for
                // them. Emit them here so BYOK runs are counted in the run funnel; the
                // `runtime_type='byok'` rides on these events from the registered
                // super-property. The run id is client-generated (there is no daemon
                // run record). See analytics/byok-run.ts.
                const byokRunId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
                const byokRunBase = {
                    projectId: project.id,
                    conversationId: runConversationId,
                    runId: byokRunId,
                    projectKind: null,
                    hasAttachment: runAttachments.length > 0,
                    userQueryTokens: userText.length > 0 ? Math.ceil(userText.length / 4) : 0,
                    model: config.model,
                    apiProtocol: config.apiProtocol,
                    skillId: project.skillId ?? null,
                    sessionMode: runSessionMode === 'design' ? 'design' : 'ask'
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunCreated"])(analytics.track, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$byok$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildByokRunCreatedProps"])(byokRunBase));
                const byokRunStartedAt = startedAt;
                let accumulatedAssistantText = '';
                const emitByokRunFinished = {
                    "ProjectView.useCallback[handleSend].emitByokRunFinished": (result, artifactCount)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunFinished"])(analytics.track, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$byok$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildByokRunFinishedProps"])({
                            ...byokRunBase,
                            result,
                            artifactCount,
                            askedUserQuestion: accumulatedAssistantText.includes('<question-form'),
                            totalDurationMs: Math.max(0, Date.now() - byokRunStartedAt)
                        }));
                    }
                }["ProjectView.useCallback[handleSend].emitByokRunFinished"];
                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$anthropic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamMessage"])(config, systemPrompt, apiHistory, controller.signal, {
                    onDelta: {
                        "ProjectView.useCallback[handleSend]": (delta)=>{
                            accumulatedAssistantText += delta;
                            handlers.onDelta(delta);
                            handlers.onAgentEvent({
                                kind: 'text',
                                text: delta
                            });
                        }
                    }["ProjectView.useCallback[handleSend]"],
                    onDone: {
                        "ProjectView.useCallback[handleSend]": ()=>{
                            handlers.onDone();
                            // Count artifacts produced this turn from the project file diff,
                            // mirroring the daemon's run_finished artifact_count. The
                            // artifact-count refresh is best-effort: a rejected refetch must
                            // NOT swallow run_finished, or a successful BYOK turn leaves the
                            // funnel hanging at run_created — the exact gap this path closes.
                            void ({
                                "ProjectView.useCallback[handleSend]": async ()=>{
                                    let artifactCount = 0;
                                    try {
                                        const files = await refreshProjectFiles();
                                        artifactCount = (computeProducedFiles(beforeFileNames, files) ?? []).filter({
                                            "ProjectView.useCallback[handleSend]": (f)=>Boolean(f.artifactManifest)
                                        }["ProjectView.useCallback[handleSend]"]).length;
                                    } catch  {
                                    // Refresh failed — still emit run_finished with a 0 count.
                                    }
                                    emitByokRunFinished('success', artifactCount);
                                }
                            })["ProjectView.useCallback[handleSend]"]();
                            const assistantText = accumulatedAssistantText.trim();
                            if (userText.length === 0 || assistantText.length === 0) return;
                            void fetch('/api/memory/extract', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    userMessage: userText,
                                    assistantMessage: accumulatedAssistantText,
                                    projectId: project.id,
                                    conversationId: runConversationId,
                                    chatProvider: byokChatProvider
                                })
                            }).catch({
                                "ProjectView.useCallback[handleSend]": ()=>{
                                // Best-effort: see comment above on the pre-turn call.
                                }
                            }["ProjectView.useCallback[handleSend]"]);
                        }
                    }["ProjectView.useCallback[handleSend]"],
                    onError: {
                        "ProjectView.useCallback[handleSend]": (err)=>{
                            handlers.onError(err);
                            emitByokRunFinished(controller.signal.aborted ? 'cancelled' : 'failed', 0);
                        }
                    }["ProjectView.useCallback[handleSend]"]
                }, {
                    projectId: project.id,
                    // SenseAudio BYOK chat reads this to pre-fill the tool param's
                    // default model. Prefer the live composer override; fall back
                    // to the Settings default when the composer dropdown is on
                    // "use default". Other protocols ignore unknown body fields.
                    byokImageModel: byokImageModelOverride || config.byokImageModel || byokImageModelOptionsPV[0]?.id,
                    byokVideoModel: byokVideoModelOverride || config.byokVideoModel || byokVideoModelOptionsPV[0]?.id,
                    byokSpeechModel: byokSpeechModelOverride || config.byokSpeechModel || byokSpeechModelOptionsPV[0]?.id,
                    byokSpeechVoice: byokSpeechVoiceOverride || config.byokSpeechVoice
                });
                return true;
            }
        }
    }["ProjectView.useCallback[handleSend]"], [
        attachedComments,
        activeConversationId,
        activeSessionMode,
        currentConversationBusy,
        queueChatSendForCurrentConversation,
        messages,
        config,
        locale,
        agentsById,
        // Per-session BYOK image/video model overrides are read inside this
        // callback (see the streamMessage context below). Without them in the
        // deps, the dropdown updates its state + display but handleSend keeps a
        // stale closure and sends the previously selected model.
        byokImageModelOverride,
        byokVideoModelOverride,
        byokSpeechModelOverride,
        byokSpeechVoiceOverride,
        byokImageModelOptionsPV,
        byokVideoModelOptionsPV,
        byokSpeechModelOptionsPV,
        composedSystemPrompt,
        onTouchProject,
        project.id,
        project.name,
        projectFiles,
        refreshProjectFiles,
        refreshLiveArtifacts,
        readProjectHtml,
        requestOpenFile,
        persistMessage,
        persistMessageById,
        auditDesignSystemWorkspaceAfterRun,
        patchAttachedStatuses,
        updateMessageById,
        markStreamingConversation,
        clearStreamingMarker,
        clearCurrentRunStreamingMarker,
        clearProjectTimeout,
        scheduleConversationMessageRefresh,
        scheduleProjectTimeout,
        onProjectsRefresh,
        onProjectChange
    ]);
    // Cancel every in-flight run for the current conversation (the user's own
    // streaming turn plus any reattached runs), mark their assistant messages
    // canceled, and drop the streaming state. Defined here — ahead of the
    // queued-send handlers — because "send now" interrupts the active run to
    // make room for the prioritized send.
    const handleStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleStop]": ()=>{
            const stoppedAt = Date.now();
            cancelSendTextBuffer(true);
            cancelReattachTextBuffers(true);
            cancelRef.current?.abort();
            cancelRef.current = null;
            for (const controller of reattachCancelControllersRef.current.values()){
                controller.abort();
            }
            reattachCancelControllersRef.current.clear();
            abortRef.current?.abort();
            abortRef.current = null;
            for (const controller of reattachControllersRef.current.values()){
                controller.abort();
            }
            reattachControllersRef.current.clear();
            setStreaming(false);
            streamingConversationIdRef.current = null;
            setStreamingConversationId(null);
            setMessages({
                "ProjectView.useCallback[handleStop]": (curr)=>{
                    const { messages: next, finalized } = finalizeActiveAssistantMessagesOnStop(curr, stoppedAt);
                    for (const message of finalized)persistMessage(message, {
                        telemetryFinalized: true
                    });
                    return next;
                }
            }["ProjectView.useCallback[handleStop]"]);
        }
    }["ProjectView.useCallback[handleStop]"], [
        cancelSendTextBuffer,
        cancelReattachTextBuffers,
        persistMessage
    ]);
    // Flip the deck preview to the slide a queued send's marked element lives on
    // the moment that send starts processing. No-op for plain prompts or marks
    // without a slide index; FileWorkspace/FileViewer ignore it unless the named
    // file is the open deck.
    const armSlideNavForQueuedSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[armSlideNavForQueuedSend]": (item)=>{
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queuedSlideNavTarget"])(item.commentAttachments);
            if (!target) return;
            setSlideNavRequest({
                name: target.filePath,
                slideIndex: target.slideIndex,
                nonce: Date.now()
            });
        }
    }["ProjectView.useCallback[armSlideNavForQueuedSend]"], []);
    const sendQueuedChatSendNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[sendQueuedChatSendNow]": (id)=>{
            const item = queuedChatSendsRef.current.find({
                "ProjectView.useCallback[sendQueuedChatSendNow].item": (candidate)=>candidate.id === id
            }["ProjectView.useCallback[sendQueuedChatSendNow].item"]);
            if (!item) return;
            if (currentConversationBusy) {
                // "Send now" while the agent is still working: the user has explicitly
                // chosen this turn over the in-flight one, so interrupt the running run
                // and move this item to the front. Stopping flips the conversation out
                // of its busy state, and the auto-start effect below then flushes the
                // now-first queued send — reusing the same path as a natural completion,
                // so runs never overlap.
                //
                // Record the runs we're superseding BEFORE handleStop() clears the active
                // refs. The daemon still delivers a late terminal callback for the
                // canceled run; tagging its controller here lets those callbacks be
                // recognized as stale and skip every current-run side effect, even if the
                // replacement send hasn't attached yet.
                if (abortRef.current) supersededRunsRef.current.add(abortRef.current);
                for (const controller of reattachControllersRef.current.values()){
                    supersededRunsRef.current.add(controller);
                }
                // The interrupted turn moved its preview-comment attachments to
                // 'applying' when it started; since we now suppress its terminal
                // callbacks, reset them to 'open' so they don't stay stuck mid-apply.
                // Reset ONLY the in-flight run's comments: queued sends (including the
                // one being prioritized) also hold their attachments in 'applying', and
                // those must stay reserved — the replacement run re-applies them. The
                // in-flight run's comments are exactly the 'applying' ones not owned by
                // any queued send.
                const queuedCommentIds = new Set(queuedChatSendsRef.current.flatMap({
                    "ProjectView.useCallback[sendQueuedChatSendNow]": (send)=>send.commentAttachments.map({
                            "ProjectView.useCallback[sendQueuedChatSendNow]": (attachment)=>attachment.id
                        }["ProjectView.useCallback[sendQueuedChatSendNow]"])
                }["ProjectView.useCallback[sendQueuedChatSendNow]"]));
                const stuckApplying = previewCommentsRef.current.filter({
                    "ProjectView.useCallback[sendQueuedChatSendNow].stuckApplying": (comment)=>comment.status === 'applying' && !queuedCommentIds.has(comment.id)
                }["ProjectView.useCallback[sendQueuedChatSendNow].stuckApplying"]);
                if (stuckApplying.length > 0) {
                    const resetIds = new Set(stuckApplying.map({
                        "ProjectView.useCallback[sendQueuedChatSendNow]": (comment)=>comment.id
                    }["ProjectView.useCallback[sendQueuedChatSendNow]"]));
                    setPreviewComments({
                        "ProjectView.useCallback[sendQueuedChatSendNow]": (current)=>current.map({
                                "ProjectView.useCallback[sendQueuedChatSendNow]": (comment)=>resetIds.has(comment.id) ? {
                                        ...comment,
                                        status: 'open'
                                    } : comment
                            }["ProjectView.useCallback[sendQueuedChatSendNow]"])
                    }["ProjectView.useCallback[sendQueuedChatSendNow]"]);
                    void Promise.all(stuckApplying.map({
                        "ProjectView.useCallback[sendQueuedChatSendNow]": (comment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchPreviewCommentStatus"])(project.id, comment.conversationId, comment.id, 'open')
                    }["ProjectView.useCallback[sendQueuedChatSendNow]"])).catch({
                        "ProjectView.useCallback[sendQueuedChatSendNow]": ()=>{}
                    }["ProjectView.useCallback[sendQueuedChatSendNow]"]);
                }
                prioritizeQueuedChatSend(id);
                handleStop();
                return;
            }
            void ({
                "ProjectView.useCallback[sendQueuedChatSendNow]": async ()=>{
                    armSlideNavForQueuedSend(item);
                    const started = await handleSend(item.prompt, item.attachments, item.commentAttachments, item.meta);
                    if (started) removeQueuedChatSend(id);
                }
            })["ProjectView.useCallback[sendQueuedChatSendNow]"]();
        }
    }["ProjectView.useCallback[sendQueuedChatSendNow]"], [
        armSlideNavForQueuedSend,
        currentConversationBusy,
        handleSend,
        handleStop,
        prioritizeQueuedChatSend,
        project.id,
        removeQueuedChatSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (currentConversationBusy) {
                startingQueuedChatSendIdRef.current = null;
                return;
            }
            if (startingQueuedChatSendIdRef.current) return;
            if (!activeConversationId) return;
            if (messagesConversationIdRef.current !== activeConversationId) return;
            const next = queuedChatSendsRef.current.find({
                "ProjectView.useEffect.next": (item)=>item.conversationId === activeConversationId
            }["ProjectView.useEffect.next"]);
            if (!next) return;
            startingQueuedChatSendIdRef.current = next.id;
            armSlideNavForQueuedSend(next);
            void ({
                "ProjectView.useEffect": async ()=>{
                    const started = await handleSend(next.prompt, next.attachments, next.commentAttachments, next.meta);
                    if (!started) {
                        if (startingQueuedChatSendIdRef.current === next.id) {
                            startingQueuedChatSendIdRef.current = null;
                        }
                        return;
                    }
                    removeQueuedChatSend(next.id);
                    scheduleProjectTimeout({
                        "ProjectView.useEffect": ()=>{
                            if (startingQueuedChatSendIdRef.current !== next.id) return;
                            startingQueuedChatSendIdRef.current = null;
                            setQueuedAutoStartTick({
                                "ProjectView.useEffect": (tick)=>tick + 1
                            }["ProjectView.useEffect"]);
                        }
                    }["ProjectView.useEffect"], 0);
                }
            })["ProjectView.useEffect"]();
        }
    }["ProjectView.useEffect"], [
        activeConversationId,
        armSlideNavForQueuedSend,
        currentConversationBusy,
        queuedAutoStartTick,
        queuedChatSends,
        handleSend,
        removeQueuedChatSend,
        scheduleProjectTimeout
    ]);
    const handleRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleRetry]": (assistantMessage)=>{
            if (currentConversationActionDisabled) return;
            void handleSend('', [], [], {
                retryOfAssistantId: assistantMessage.id
            });
        }
    }["ProjectView.useCallback[handleRetry]"], [
        currentConversationActionDisabled,
        handleSend
    ]);
    // "Continue" on a resumable failed run: send a fresh turn in the same
    // conversation. For a session-resuming runtime (Claude) the daemon persisted
    // the failed run's CLI session, so this turn resumes it (`--resume`) and the
    // agent continues from its committed work instead of restarting. Mirrors the
    // "Continue remaining tasks" affordance; unlike Retry it does not replay the
    // prior turn from scratch. Tagged `entryFrom: 'resume_continue'` so
    // run_created / run_finished can quantify how often resume fires and whether
    // it recovers (the whole point is to show the mechanism lowers failure rate).
    const handleResumeRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleResumeRun]": (_assistantMessage)=>{
            if (currentConversationActionDisabled) return;
            void handleSend(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESUME_CONTINUE_PROMPT"], [], [], {
                entryFrom: 'resume_continue'
            });
        }
    }["ProjectView.useCallback[handleResumeRun]"], [
        currentConversationActionDisabled,
        handleSend
    ]);
    // "Switch to AMR & retry" from the failed-run card: switch the run to AMR,
    // open Settings on the AMR controls so the user can sign in / authorize /
    // top up, and arm an auto-retry that fires once AMR is selected AND signed
    // in (see the effect below).
    const [pendingAmrRetry, setPendingAmrRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSwitchToAmrAndRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleSwitchToAmrAndRetry]": (failedAssistant)=>{
            if (currentConversationActionDisabled) return;
            onModeChange('daemon');
            onAgentChange('amr');
            onOpenAmrSettings?.();
            setPendingAmrRetry(failedAssistant);
        }
    }["ProjectView.useCallback[handleSwitchToAmrAndRetry]"], [
        currentConversationActionDisabled,
        onModeChange,
        onAgentChange,
        onOpenAmrSettings
    ]);
    // PR #3157: Antigravity's `agy -p` cannot complete OAuth on its own,
    // so the auth banner offers a one-click "Sign in via terminal"
    // button that POSTs to the daemon. The daemon opens a system
    // Terminal running `agy` (osascript / x-terminal-emulator /
    // `cmd /c start`); the user finishes Google sign-in there and then
    // clicks Retry to redo the chat run. We don't auto-retry because
    // the OAuth completion happens externally with no reliable signal
    // back to the chat — the secondary Retry button on the same banner
    // covers the manual case.
    const handleLaunchAntigravityOauth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleLaunchAntigravityOauth]": async ()=>{
            try {
                const { launchAntigravityOauth } = await __turbopack_context__.A("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript, async loader)");
                const result = await launchAntigravityOauth();
                if (!result.ok) {
                    // Surface the daemon-side reason so the user knows whether
                    // the spawn failed because of missing osascript / unsupported
                    // platform / etc. instead of silently swallowing it.
                    console.warn('[antigravity] oauth-launch failed:', result.error);
                }
            } catch (err) {
                console.warn('[antigravity] oauth-launch threw:', err);
            }
        }
    }["ProjectView.useCallback[handleLaunchAntigravityOauth]"], []);
    // Poll the AMR login status while a retry is armed, rather than only reacting
    // to the AmrLoginPill's status event — the user may close Settings (which
    // unmounts the pill and stops its polling) before finishing sign-in in the
    // browser. Polling here keeps working regardless of the pill's lifecycle.
    // Fires once AMR is the selected agent AND the account is signed in.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!pendingAmrRetry) return;
            let cancelled = false;
            const tryRetry = {
                "ProjectView.useEffect.tryRetry": async ()=>{
                    if (cancelled) return;
                    if (!(config.mode === 'daemon' && config.agentId === 'amr')) return;
                    const status = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])().catch({
                        "ProjectView.useEffect.tryRetry": ()=>null
                    }["ProjectView.useEffect.tryRetry"]);
                    if (cancelled || status?.loggedIn !== true) return;
                    setPendingAmrRetry(null);
                    handleRetry(pendingAmrRetry);
                }
            }["ProjectView.useEffect.tryRetry"];
            void tryRetry();
            const interval = setInterval({
                "ProjectView.useEffect.interval": ()=>void tryRetry()
            }["ProjectView.useEffect.interval"], 2000);
            // Give up after a few minutes so we never poll forever.
            const stop = setTimeout({
                "ProjectView.useEffect.stop": ()=>{
                    if (!cancelled) setPendingAmrRetry(null);
                }
            }["ProjectView.useEffect.stop"], 5 * 60 * 1000);
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                    clearInterval(interval);
                    clearTimeout(stop);
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        pendingAmrRetry,
        config.mode,
        config.agentId,
        handleRetry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!autoAuditRepairSeed) return;
            if (!activeConversationId) return;
            if (!messagesInitialized) return;
            if (currentConversationBusy) return;
            const repairText = autoAuditRepairSeed.value.trim();
            setAutoAuditRepairSeed(null);
            if (!repairText) return;
            void handleSend(repairText, [], []);
        }
    }["ProjectView.useEffect"], [
        activeConversationId,
        autoAuditRepairSeed,
        currentConversationBusy,
        handleSend,
        messagesInitialized
    ]);
    const handleSendBoardCommentAttachments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleSendBoardCommentAttachments]": async (commentAttachments, images = [])=>{
            if (currentConversationQueueDisabled) return false;
            if (commentAttachments.length === 0 && images.length === 0) return false;
            setWorkspaceFocused(false);
            setCommentInspectorActive(false);
            // Upload any attached images once, then queue. Each comment becomes its
            // own task (so multiple notes => multiple queued tasks); the images ride
            // along the first task rather than being duplicated across every note.
            let uploaded = [];
            if (images.length > 0) {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadProjectFiles"])(project.id, images);
                uploaded = result.uploaded;
            }
            if (commentAttachments.length === 0) {
                if (uploaded.length > 0) await handleSend('', uploaded, [], {
                    queueOnly: true,
                    entryFrom: 'comment'
                });
                return true;
            }
            for(let i = 0; i < commentAttachments.length; i++){
                const commentAttachment = commentAttachments[i];
                const savedImages = chatAttachmentsFromPreviewCommentImages(commentAttachment.imageAttachments);
                const prompt = commentTaskQuery(commentAttachment);
                // Comment/board pin → run: tag entry_from='comment' so the dashboard
                // separates annotation-driven runs from plain composer sends.
                await handleSend(prompt, mergeChatAttachments(i === 0 ? uploaded : [], savedImages), [
                    commentTaskContextAttachment(commentAttachment)
                ], {
                    queueOnly: true,
                    entryFrom: 'comment'
                });
            }
            return true;
        }
    }["ProjectView.useCallback[handleSendBoardCommentAttachments]"], [
        handleSend,
        project.id,
        currentConversationQueueDisabled
    ]);
    const commentQueueOnSend = currentConversationBusy && !currentConversationQueueDisabled;
    const handleContinueRemainingTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleContinueRemainingTasks]": (_assistantMessage, todos)=>{
            if (currentConversationActionDisabled || todos.length === 0) return;
            const remainingList = todos.map({
                "ProjectView.useCallback[handleContinueRemainingTasks].remainingList": (todo, i)=>{
                    const label = todo.status === 'in_progress' && todo.activeForm ? todo.activeForm : todo.content;
                    return `${i + 1}. [${todo.status}] ${label}`;
                }
            }["ProjectView.useCallback[handleContinueRemainingTasks].remainingList"]).join('\n');
            const prompt = 'Continue the remaining unfinished tasks from the previous run. ' + 'Do not redo completed work. Focus only on these unfinished todos:\n\n' + `${remainingList}\n\n` + 'Before making changes, inspect the current project files as needed. ' + 'Update TodoWrite as you complete each remaining task.';
            void handleSend(prompt, [], []);
        }
    }["ProjectView.useCallback[handleContinueRemainingTasks]"], [
        currentConversationActionDisabled,
        handleSend
    ]);
    const selectedPluginActionAgent = config.mode === 'daemon' && config.agentId ? agentsById.get(config.agentId) : null;
    const selectedPluginActionChoice = config.mode === 'daemon' && config.agentId ? config.agentModels?.[config.agentId] : undefined;
    const effectiveSelectedPluginActionChoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$agentModelSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveAgentModelChoice"])(selectedPluginActionAgent, selectedPluginActionChoice);
    const pluginWorkflowAgentName = config.mode === 'daemon' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentModelDisplayName"])(config.agentId, selectedPluginActionAgent?.name, effectiveSelectedPluginActionChoice?.model) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiProtocolModelLabel"])(config.apiProtocol, config.model);
    const handlePluginFolderAgentAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handlePluginFolderAgentAction]": async (relativePath, action)=>{
            if (currentConversationActionDisabled || !activeConversationId) return;
            setHiddenAssistantPluginActionPaths({
                "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>new Set(prev).add(relativePath)
            }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
            if (action === 'install') {
                setActivePluginActionPaths({
                    "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>new Set(prev).add(relativePath)
                }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                let outcome;
                try {
                    outcome = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installGeneratedPluginFolder"])(project.id, relativePath);
                } finally{
                    setActivePluginActionPaths({
                        "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                            const next = new Set(prev);
                            next.delete(relativePath);
                            return next;
                        }
                    }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                    setHiddenAssistantPluginActionPaths({
                        "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                            const next = new Set(prev);
                            next.delete(relativePath);
                            return next;
                        }
                    }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                }
                if (!outcome.ok) throw new Error(outcome.message);
                return {
                    message: outcome.message
                };
            }
            const conversationId = activeConversationId;
            const shareAction = action === 'publish' ? 'publish-github' : 'contribute-open-design';
            setActivePluginActionPaths({
                "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>new Set(prev).add(relativePath)
            }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
            let taskStart;
            try {
                taskStart = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startGeneratedPluginShareTask"])(project.id, relativePath, shareAction);
            } catch (error) {
                setActivePluginActionPaths({
                    "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                        const next = new Set(prev);
                        next.delete(relativePath);
                        return next;
                    }
                }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                setHiddenAssistantPluginActionPaths({
                    "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                        const next = new Set(prev);
                        next.delete(relativePath);
                        return next;
                    }
                }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                throw error;
            }
            const startedAt = taskStart.startedAt;
            const messageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
            const updateConversationLatestRun = {
                "ProjectView.useCallback[handlePluginFolderAgentAction].updateConversationLatestRun": (status, endedAt)=>{
                    setConversations({
                        "ProjectView.useCallback[handlePluginFolderAgentAction].updateConversationLatestRun": (curr)=>curr.map({
                                "ProjectView.useCallback[handlePluginFolderAgentAction].updateConversationLatestRun": (conversation)=>conversation.id === conversationId ? {
                                        ...conversation,
                                        updatedAt: endedAt ?? startedAt,
                                        latestRun: {
                                            status,
                                            startedAt,
                                            ...endedAt === undefined ? {} : {
                                                endedAt,
                                                durationMs: Math.max(0, endedAt - startedAt)
                                            }
                                        }
                                    } : conversation
                            }["ProjectView.useCallback[handlePluginFolderAgentAction].updateConversationLatestRun"])
                    }["ProjectView.useCallback[handlePluginFolderAgentAction].updateConversationLatestRun"]);
                }
            }["ProjectView.useCallback[handlePluginFolderAgentAction].updateConversationLatestRun"];
            const progressMessage = {
                id: messageId,
                role: 'assistant',
                content: pluginWorkflowStartContent(action, relativePath),
                agentName: pluginWorkflowAgentName,
                events: pluginWorkflowPlannedEvents(action, relativePath),
                createdAt: startedAt,
                startedAt,
                runStatus: 'running'
            };
            setForceStreamingPluginMessageIds({
                "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>new Set(prev).add(messageId)
            }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
            appendConversationMessage(conversationId, progressMessage, undefined, false);
            updateConversationLatestRun('running');
            void ({
                "ProjectView.useCallback[handlePluginFolderAgentAction]": async ()=>{
                    let since = 0;
                    let liveEvents = [
                        ...pluginWorkflowPlannedEvents(action, relativePath)
                    ];
                    let liveContent = pluginWorkflowStartContent(action, relativePath);
                    while(true){
                        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitGeneratedPluginShareTask"])(taskStart.taskId, since, 25_000);
                        since = snapshot.nextSince;
                        if (snapshot.progress.length > 0) {
                            const newTextEvents = snapshot.progress.map({
                                "ProjectView.useCallback[handlePluginFolderAgentAction].newTextEvents": (line)=>line.trim()
                            }["ProjectView.useCallback[handlePluginFolderAgentAction].newTextEvents"]).filter(Boolean).map({
                                "ProjectView.useCallback[handlePluginFolderAgentAction].newTextEvents": (line)=>({
                                        kind: 'text',
                                        text: `${line}\n`
                                    })
                            }["ProjectView.useCallback[handlePluginFolderAgentAction].newTextEvents"]);
                            liveEvents = [
                                ...liveEvents.filter({
                                    "ProjectView.useCallback[handlePluginFolderAgentAction]": (event, index)=>!(index === liveEvents.length - 1 && event.kind === 'status' && event.label === 'working')
                                }["ProjectView.useCallback[handlePluginFolderAgentAction]"]),
                                ...newTextEvents,
                                {
                                    kind: 'status',
                                    label: 'working',
                                    detail: pluginWorkflowTitle(action)
                                }
                            ];
                            liveContent = `${liveContent}\n\n${snapshot.progress.map({
                                "ProjectView.useCallback[handlePluginFolderAgentAction]": (line)=>line.trim()
                            }["ProjectView.useCallback[handlePluginFolderAgentAction]"]).filter(Boolean).join('\n')}`.trim();
                            replaceConversationMessage(conversationId, {
                                ...progressMessage,
                                content: liveContent,
                                events: liveEvents,
                                runStatus: 'running'
                            }, undefined, false);
                        }
                        if (snapshot.status === 'running' || snapshot.status === 'queued') continue;
                        const endedAt = snapshot.endedAt ?? Date.now();
                        setActivePluginActionPaths({
                            "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                                const next = new Set(prev);
                                next.delete(relativePath);
                                return next;
                            }
                        }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                        setHiddenAssistantPluginActionPaths({
                            "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                                const next = new Set(prev);
                                next.delete(relativePath);
                                return next;
                            }
                        }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                        if (snapshot.status === 'done' && snapshot.result) {
                            setForceStreamingPluginMessageIds({
                                "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                                    const next = new Set(prev);
                                    next.delete(messageId);
                                    return next;
                                }
                            }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                            replaceConversationMessage(conversationId, {
                                ...progressMessage,
                                content: pluginWorkflowSuccessContent(action, relativePath, snapshot.result.message, snapshot.result.url, snapshot.result.log),
                                events: pluginWorkflowResultEvents(action, relativePath, snapshot.result.message, snapshot.result.url, snapshot.result.log, true, liveEvents),
                                endedAt,
                                runStatus: 'succeeded'
                            }, {
                                telemetryFinalized: true
                            });
                            updateConversationLatestRun('succeeded', endedAt);
                            return;
                        }
                        const errorMessage = snapshot.error?.message || `${pluginWorkflowTitle(action)} failed.`;
                        setForceStreamingPluginMessageIds({
                            "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                                const next = new Set(prev);
                                next.delete(messageId);
                                return next;
                            }
                        }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                        replaceConversationMessage(conversationId, {
                            ...progressMessage,
                            content: pluginWorkflowFailureContent(action, relativePath, errorMessage, snapshot.error?.log),
                            events: pluginWorkflowResultEvents(action, relativePath, errorMessage, undefined, snapshot.error?.log, false, liveEvents),
                            endedAt,
                            runStatus: 'failed'
                        }, {
                            telemetryFinalized: true
                        });
                        updateConversationLatestRun('failed', endedAt);
                        return;
                    }
                }
            })["ProjectView.useCallback[handlePluginFolderAgentAction]"]().catch({
                "ProjectView.useCallback[handlePluginFolderAgentAction]": (err)=>{
                    const endedAt = Date.now();
                    setForceStreamingPluginMessageIds({
                        "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                            const next = new Set(prev);
                            next.delete(messageId);
                            return next;
                        }
                    }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                    setActivePluginActionPaths({
                        "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                            const next = new Set(prev);
                            next.delete(relativePath);
                            return next;
                        }
                    }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                    setHiddenAssistantPluginActionPaths({
                        "ProjectView.useCallback[handlePluginFolderAgentAction]": (prev)=>{
                            const next = new Set(prev);
                            next.delete(relativePath);
                            return next;
                        }
                    }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
                    replaceConversationMessage(conversationId, {
                        ...progressMessage,
                        content: pluginWorkflowFailureContent(action, relativePath, err instanceof Error ? err.message : String(err)),
                        events: pluginWorkflowResultEvents(action, relativePath, err instanceof Error ? err.message : String(err), undefined, [], false),
                        endedAt,
                        runStatus: 'failed'
                    }, {
                        telemetryFinalized: true
                    });
                    updateConversationLatestRun('failed', endedAt);
                }
            }["ProjectView.useCallback[handlePluginFolderAgentAction]"]);
            return;
        }
    }["ProjectView.useCallback[handlePluginFolderAgentAction]"], [
        activeConversationId,
        appendConversationMessage,
        currentConversationActionDisabled,
        pluginWorkflowAgentName,
        project.id,
        replaceConversationMessage
    ]);
    // "Share to Open Design" — kicks off the bundled `od-share-to-community`
    // scenario in the active conversation. We just inject the trigger prompt
    // through the standard chat-send path; the agent then loads SKILL.md and
    // drives the rest. Keep this preparing state alive for the resulting chat
    // run so the action reads as async packaging instead of instant sharing.
    const [shareToOpenDesignBusyMessageId, setShareToOpenDesignBusyMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const shareToOpenDesignBusyMessageIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!shareToOpenDesignBusyMessageIdRef.current || currentConversationBusy) return;
            shareToOpenDesignBusyMessageIdRef.current = null;
            setShareToOpenDesignBusyMessageId(null);
        }
    }["ProjectView.useEffect"], [
        currentConversationBusy
    ]);
    const handleShareToOpenDesign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleShareToOpenDesign]": (assistantMessageId)=>{
            if (currentConversationActionDisabled || shareToOpenDesignBusyMessageIdRef.current) return;
            shareToOpenDesignBusyMessageIdRef.current = assistantMessageId;
            setShareToOpenDesignBusyMessageId(assistantMessageId);
            void Promise.resolve(handleSend(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$share$2d$to$2d$community$2f$shareToCommunityPrompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHARE_TO_COMMUNITY_PROMPT"], [], [])).then({
                "ProjectView.useCallback[handleShareToOpenDesign]": (started)=>{
                    if (started) return;
                    shareToOpenDesignBusyMessageIdRef.current = null;
                    setShareToOpenDesignBusyMessageId(null);
                }
            }["ProjectView.useCallback[handleShareToOpenDesign]"]).catch({
                "ProjectView.useCallback[handleShareToOpenDesign]": ()=>{
                    shareToOpenDesignBusyMessageIdRef.current = null;
                    setShareToOpenDesignBusyMessageId(null);
                }
            }["ProjectView.useCallback[handleShareToOpenDesign]"]);
        }
    }["ProjectView.useCallback[handleShareToOpenDesign]"], [
        currentConversationActionDisabled,
        handleSend
    ]);
    const sentDesignSystemReviewTaskKeysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const persistDesignSystemReviewEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[persistDesignSystemReviewEntry]": (sectionTitle, entry)=>{
            const baseMetadata = {
                kind: project.metadata?.kind ?? 'other',
                ...project.metadata
            };
            const metadata = {
                ...baseMetadata,
                designSystemReview: {
                    ...baseMetadata.designSystemReview ?? {},
                    [sectionTitle]: entry
                }
            };
            onProjectChange({
                ...project,
                metadata
            });
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(project.id, {
                metadata
            });
        }
    }["ProjectView.useCallback[persistDesignSystemReviewEntry]"], [
        onProjectChange,
        project
    ]);
    const sendDesignSystemFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[sendDesignSystemFeedback]": (sectionTitle, feedback, sectionFiles)=>{
            const cleanFeedback = feedback.trim();
            if (!cleanFeedback) return;
            const prompt = designSystemNeedsWorkPrompt(sectionTitle, cleanFeedback, sectionFiles);
            const queuedAt = new Date().toISOString();
            if (!activeConversationId || !messagesInitialized || currentConversationActionDisabled) {
                return {
                    status: 'queued',
                    prompt,
                    queuedAt
                };
            }
            const task = {
                status: 'sent',
                prompt,
                queuedAt,
                sentAt: queuedAt
            };
            sentDesignSystemReviewTaskKeysRef.current.add(`${sectionTitle}:${queuedAt}`);
            void handleSend(prompt, designSystemFeedbackAttachments(projectFiles, sectionFiles), []);
            return task;
        }
    }["ProjectView.useCallback[sendDesignSystemFeedback]"], [
        activeConversationId,
        currentConversationActionDisabled,
        handleSend,
        messagesInitialized,
        projectFiles
    ]);
    const persistDesignSystemReviewDecision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[persistDesignSystemReviewDecision]": (sectionTitle, decision, details)=>{
            const entry = {
                decision,
                updatedAt: new Date().toISOString()
            };
            if (details?.feedback) entry.feedback = details.feedback;
            if (details?.files) entry.files = details.files;
            if (details?.agentTask) entry.agentTask = details.agentTask;
            persistDesignSystemReviewEntry(sectionTitle, entry);
        }
    }["ProjectView.useCallback[persistDesignSystemReviewDecision]"], [
        persistDesignSystemReviewEntry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!activeConversationId || !messagesInitialized || currentConversationActionDisabled) return;
            const queued = Object.entries(project.metadata?.designSystemReview ?? {}).find({
                "ProjectView.useEffect.queued": ([, entry])=>entry.decision === 'needs-work' && Boolean(entry.feedback?.trim()) && entry.agentTask?.status === 'queued'
            }["ProjectView.useEffect.queued"]);
            if (!queued) return;
            const [sectionTitle, entry] = queued;
            const task = entry.agentTask;
            if (!task) return;
            const taskKey = `${sectionTitle}:${task.queuedAt}`;
            if (sentDesignSystemReviewTaskKeysRef.current.has(taskKey)) return;
            sentDesignSystemReviewTaskKeysRef.current.add(taskKey);
            const sectionFiles = entry.files ?? [];
            const prompt = task.prompt || designSystemNeedsWorkPrompt(sectionTitle, entry.feedback ?? '', sectionFiles);
            const sentAt = new Date().toISOString();
            persistDesignSystemReviewEntry(sectionTitle, {
                ...entry,
                agentTask: {
                    ...task,
                    status: 'sent',
                    prompt,
                    sentAt
                }
            });
            void handleSend(prompt, designSystemFeedbackAttachments(projectFiles, sectionFiles), []);
        }
    }["ProjectView.useEffect"], [
        activeConversationId,
        currentConversationActionDisabled,
        handleSend,
        messagesInitialized,
        persistDesignSystemReviewEntry,
        project.metadata?.designSystemReview,
        projectFiles
    ]);
    const handleExportAsPptx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleExportAsPptx]": (fileName)=>{
            if (currentConversationActionDisabled) return;
            const prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$build$2d$pptx$2d$export$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPptxExportPrompt"])(fileName);
            const attachment = {
                path: fileName,
                name: fileName,
                kind: 'file'
            };
            void handleSend(prompt, [
                attachment
            ], []);
        }
    }["ProjectView.useCallback[handleExportAsPptx]"], [
        currentConversationActionDisabled,
        handleSend
    ]);
    const handleNewConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleNewConversation]": async ()=>{
            if (creatingConversationRef.current) return;
            // Only block if we're sure the current conversation is empty:
            // messages must be loaded AND match the active conversation.
            if (messagesConversationIdRef.current === activeConversationId && messages.length === 0) {
                return;
            }
            creatingConversationRef.current = true;
            setCreatingConversation(true);
            setConversationLoadError(null);
            try {
                const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(project.id);
                if (!fresh) throw new Error('Could not create a conversation for this project.');
                // Eagerly clear messages and update ref so rapid clicks don't create
                // duplicate empty conversations before the effect resolves.
                setMessages([]);
                setStreaming(false);
                streamingConversationIdRef.current = null;
                setStreamingConversationId(null);
                setMessagesConversationId(null);
                messagesConversationIdRef.current = fresh.id;
                setConversations({
                    "ProjectView.useCallback[handleNewConversation]": (curr)=>[
                            fresh,
                            ...curr
                        ]
                }["ProjectView.useCallback[handleNewConversation]"]);
                setActiveConversationId(fresh.id);
                // Push the new conversation id into the URL synchronously so the
                // route-sync effect sees a matching `routeConversationId` before
                // it can revert `activeConversationId`. Without this, the route-sync
                // effect can fight the conversation switch, preventing users from
                // switching back to older conversations after creating a new one.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId: project.id,
                    conversationId: fresh.id,
                    fileName: openTabsState.active ?? null
                }, {
                    replace: true
                });
                setError(null);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Could not create a conversation for this project.';
                setConversationLoadError(message);
                setError(message);
            } finally{
                creatingConversationRef.current = false;
                setCreatingConversation(false);
            }
        }
    }["ProjectView.useCallback[handleNewConversation]"], [
        project.id,
        activeConversationId,
        messages.length,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"],
        openTabsState.active
    ]);
    const handleSelectConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleSelectConversation]": (id)=>{
            if (id === activeConversationId && failedMessagesConversationId !== id) return;
            setMessages([]);
            setPreviewComments([]);
            setAttachedComments([]);
            setArtifact(null);
            setStreaming(false);
            streamingConversationIdRef.current = null;
            setStreamingConversationId(null);
            setMessagesConversationId(null);
            setFailedMessagesConversationId(null);
            setConversationLoadError(null);
            messagesConversationIdRef.current = null;
            setActiveConversationId(id);
            // Push the new conversation id into the URL synchronously so the
            // route-sync effect at L512 sees a matching `routeConversationId`
            // before it can find the previous conversation in the list and
            // revert `activeConversationId` to it. Without this, the same
            // effect that fights handleNewConversation also fights chat
            // switching, ping-ponging until React's nested-update guard fires.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'project',
                projectId: project.id,
                conversationId: id,
                fileName: openTabsState.active ?? null
            }, {
                replace: true
            });
            setMessageLoadRetryNonce({
                "ProjectView.useCallback[handleSelectConversation]": (nonce)=>nonce + 1
            }["ProjectView.useCallback[handleSelectConversation]"]);
        }
    }["ProjectView.useCallback[handleSelectConversation]"], [
        activeConversationId,
        failedMessagesConversationId,
        project.id,
        openTabsState.active
    ]);
    const handleDeleteConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleDeleteConversation]": async (id)=>{
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteConversation"])(project.id, id);
            if (!ok) return;
            // The deleted conversation may have owned an unanswered
            // `<question-form>`, which the daemon counts toward the project's
            // `needsInput` flag in `/api/projects`. Home cards render that
            // flag from the cached projects payload, so without refreshing
            // it here the `Needs input` badge survives the deletion until
            // the next manual reload.
            onProjectsRefresh();
            setConversations({
                "ProjectView.useCallback[handleDeleteConversation]": (curr)=>{
                    const next = curr.filter({
                        "ProjectView.useCallback[handleDeleteConversation].next": (c)=>c.id !== id
                    }["ProjectView.useCallback[handleDeleteConversation].next"]);
                    if (next.length === 0) {
                        // Re-seed so the project always has at least one conversation
                        // to write into.
                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(project.id).then({
                            "ProjectView.useCallback[handleDeleteConversation]": (fresh)=>{
                                if (fresh) {
                                    setConversations([
                                        fresh
                                    ]);
                                    setActiveConversationId(fresh.id);
                                }
                            }
                        }["ProjectView.useCallback[handleDeleteConversation]"]);
                    } else if (id === activeConversationId) {
                        setActiveConversationId(next[0].id);
                    }
                    return next;
                }
            }["ProjectView.useCallback[handleDeleteConversation]"]);
        }
    }["ProjectView.useCallback[handleDeleteConversation]"], [
        project.id,
        activeConversationId,
        onProjectsRefresh
    ]);
    const handleRenameConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleRenameConversation]": async (id, title)=>{
            const trimmed = title.trim() || null;
            setConversations({
                "ProjectView.useCallback[handleRenameConversation]": (curr)=>curr.map({
                        "ProjectView.useCallback[handleRenameConversation]": (c)=>c.id === id ? {
                                ...c,
                                title: trimmed
                            } : c
                    }["ProjectView.useCallback[handleRenameConversation]"])
            }["ProjectView.useCallback[handleRenameConversation]"]);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchConversation"])(project.id, id, {
                title: trimmed
            });
        }
    }["ProjectView.useCallback[handleRenameConversation]"], [
        project.id
    ]);
    const handleConversationSessionModeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleConversationSessionModeChange]": async (id, sessionMode)=>{
            setConversations({
                "ProjectView.useCallback[handleConversationSessionModeChange]": (curr)=>curr.map({
                        "ProjectView.useCallback[handleConversationSessionModeChange]": (conversation)=>conversation.id === id ? {
                                ...conversation,
                                sessionMode
                            } : conversation
                    }["ProjectView.useCallback[handleConversationSessionModeChange]"])
            }["ProjectView.useCallback[handleConversationSessionModeChange]"]);
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchConversation"])(project.id, id, {
                sessionMode
            });
            if (updated) {
                setConversations({
                    "ProjectView.useCallback[handleConversationSessionModeChange]": (curr)=>curr.map({
                            "ProjectView.useCallback[handleConversationSessionModeChange]": (conversation)=>conversation.id === id ? {
                                    ...conversation,
                                    ...updated
                                } : conversation
                        }["ProjectView.useCallback[handleConversationSessionModeChange]"])
                }["ProjectView.useCallback[handleConversationSessionModeChange]"]);
            }
        }
    }["ProjectView.useCallback[handleConversationSessionModeChange]"], [
        project.id
    ]);
    const handleActiveConversationSessionModeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleActiveConversationSessionModeChange]": (sessionMode)=>{
            if (!activeConversationId) return;
            void handleConversationSessionModeChange(activeConversationId, sessionMode);
        }
    }["ProjectView.useCallback[handleActiveConversationSessionModeChange]"], [
        activeConversationId,
        handleConversationSessionModeChange
    ]);
    const handleForkFromMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleForkFromMessage]": async (assistantMessage)=>{
            if (!activeConversationId || forkingMessageId) return;
            setForkingMessageId(assistantMessage.id);
            setConversationLoadError(null);
            try {
                const sourceTitle = activeConversation?.title?.trim();
                const forkTitle = sourceTitle ? t('chat.forkedConversationTitle', {
                    title: sourceTitle
                }) : undefined;
                // Seed the fork from the messages the user is actually looking at,
                // up to and including the fork point. A run that errored or had its
                // connection reset before its assistant message was persisted leaves
                // that message in memory only; copying from the database by id would
                // 404 and silently drop the fork. Sending the in-memory snapshot makes
                // the fork resilient to that gap.
                const forkIndex = messages.findIndex({
                    "ProjectView.useCallback[handleForkFromMessage].forkIndex": (m)=>m.id === assistantMessage.id
                }["ProjectView.useCallback[handleForkFromMessage].forkIndex"]);
                const seedMessages = forkIndex >= 0 ? messages.slice(0, forkIndex + 1) : [
                    ...messages,
                    assistantMessage
                ];
                const fresh = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConversation"])(project.id, forkTitle, {
                    seedFromConversationId: activeConversationId,
                    forkAfterMessageId: assistantMessage.id,
                    sessionMode: activeSessionMode,
                    seedMessages
                });
                if (!fresh) throw new Error(t('chat.forkConversationFailed'));
                setMessages([]);
                setPreviewComments([]);
                setAttachedComments([]);
                setArtifact(null);
                setStreaming(false);
                streamingConversationIdRef.current = null;
                setStreamingConversationId(null);
                setMessagesConversationId(null);
                messagesConversationIdRef.current = null;
                setFailedMessagesConversationId(null);
                setConversations({
                    "ProjectView.useCallback[handleForkFromMessage]": (curr)=>[
                            fresh,
                            ...curr.filter({
                                "ProjectView.useCallback[handleForkFromMessage]": (c)=>c.id !== fresh.id
                            }["ProjectView.useCallback[handleForkFromMessage]"])
                        ]
                }["ProjectView.useCallback[handleForkFromMessage]"]);
                setActiveConversationId(fresh.id);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId: project.id,
                    conversationId: fresh.id,
                    fileName: openTabsState.active ?? null
                }, {
                    replace: true
                });
                onProjectsRefresh();
                setError(null);
            } catch (err) {
                const message = err instanceof Error ? err.message : t('chat.forkConversationFailed');
                setConversationLoadError(message);
                setError(message);
            } finally{
                setForkingMessageId(null);
            }
        }
    }["ProjectView.useCallback[handleForkFromMessage]"], [
        activeConversationId,
        activeConversation?.title,
        activeSessionMode,
        forkingMessageId,
        messages,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"],
        onProjectsRefresh,
        openTabsState.active,
        project.id,
        t
    ]);
    const handleProjectRename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleProjectRename]": (newName)=>{
            const trimmed = newName.trim();
            if (!trimmed || trimmed === project.name) return;
            const metadata = project.metadata ? {
                ...project.metadata,
                nameSource: 'user'
            } : undefined;
            const updated = {
                ...project,
                name: trimmed,
                ...metadata ? {
                    metadata
                } : {},
                updatedAt: Date.now()
            };
            onProjectChange(updated);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(project.id, {
                name: trimmed,
                ...metadata ? {
                    metadata
                } : {}
            });
        }
    }["ProjectView.useCallback[handleProjectRename]"], [
        project,
        onProjectChange
    ]);
    const activeConversationChatState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[activeConversationChatState]": ()=>activeConversationId ? {
                conversationId: activeConversationId,
                messages,
                streaming: currentConversationStreaming,
                loading: currentConversationLoading,
                sendDisabled: currentConversationSendDisabled,
                queuedItems: currentConversationQueuedItems,
                error: conversationLoadError ?? error ?? audioVoiceOptionsError,
                onSend: handleSend,
                onRetry: handleRetry,
                onStop: handleStop,
                onRemoveQueuedSend: removeQueuedChatSend,
                onUpdateQueuedSend: updateQueuedChatSend,
                onReorderQueuedSends: reorderCurrentConversationQueuedChatSends,
                onSendQueuedNow: sendQueuedChatSendNow,
                onAssistantFeedback: handleAssistantFeedback
            } : undefined
    }["ProjectView.useMemo[activeConversationChatState]"], [
        activeConversationId,
        audioVoiceOptionsError,
        conversationLoadError,
        currentConversationActionDisabled,
        currentConversationQueuedItems,
        currentConversationSendDisabled,
        currentConversationLoading,
        currentConversationStreaming,
        error,
        handleAssistantFeedback,
        handleRetry,
        handleSend,
        handleStop,
        messages,
        removeQueuedChatSend,
        reorderCurrentConversationQueuedChatSends,
        sendQueuedChatSendNow,
        updateQueuedChatSend
    ]);
    const handleChangeDesignSystemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleChangeDesignSystemId]": (nextId)=>{
            if ((project.designSystemId ?? null) === nextId) return;
            // `design_system_apply_result` studio variant. The existing
            // NewProjectPanel picker fires the same event under
            // `page_name=home`; this in-project header picker fires under
            // `page_name=studio` so the funnel sees applies from both
            // surfaces. `target_project_kind` derives from
            // `project.metadata.kind`.
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(project.metadata?.kind ?? null, project.metadata?.videoModel) ?? 'unknown';
            const picked = nextId ? designSystems.find({
                "ProjectView.useCallback[handleChangeDesignSystemId]": (d)=>d.id === nextId
            }["ProjectView.useCallback[handleChangeDesignSystemId]"]) : null;
            const origin = picked ? picked.source === 'user' ? 'manual_create' : picked.source === 'built-in' ? 'official_preset' : picked.source === 'installed' ? 'template' : 'unknown' : undefined;
            const status = picked ? picked.status === 'draft' || picked.status === 'published' ? picked.status : 'unknown' : undefined;
            if (nextId === null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemApplyResult"])(analytics.track, {
                    page_name: 'studio',
                    area: 'design_system_picker',
                    action: 'clear_selection',
                    result: 'success',
                    target_project_kind: target,
                    design_system_applied: false,
                    design_system_selection_mode: 'none',
                    is_default: false,
                    is_auto_selected: false,
                    available_design_system_count: designSystems.length,
                    duration_ms: 0
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemApplyResult"])(analytics.track, {
                    page_name: 'studio',
                    area: 'design_system_picker',
                    action: 'select_design_system',
                    result: 'success',
                    target_project_kind: target,
                    design_system_id: nextId,
                    design_system_source: origin,
                    design_system_status: status,
                    design_system_applied: true,
                    design_system_selection_mode: 'manual',
                    is_default: false,
                    is_auto_selected: false,
                    available_design_system_count: designSystems.length,
                    duration_ms: 0
                });
            }
            const updated = {
                ...project,
                designSystemId: nextId,
                updatedAt: Date.now()
            };
            onProjectChange(updated);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProject"])(project.id, {
                designSystemId: nextId
            });
        }
    }["ProjectView.useCallback[handleChangeDesignSystemId]"], [
        project,
        onProjectChange,
        designSystems,
        analytics.track
    ]);
    const projectMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[projectMeta]": ()=>{
            // Design system is rendered by the adjacent picker chip — keep the
            // bare meta string focused on skill / mode so the two surfaces
            // don't show the same label twice.
            const summary = skills.find({
                "ProjectView.useMemo[projectMeta]": (s)=>s.id === project.skillId
            }["ProjectView.useMemo[projectMeta]"]) ?? designTemplates.find({
                "ProjectView.useMemo[projectMeta]": (s)=>s.id === project.skillId
            }["ProjectView.useMemo[projectMeta]"]);
            const skill = summary?.name;
            return skill ?? t('project.metaFreeform');
        }
    }["ProjectView.useMemo[projectMeta]"], [
        skills,
        designTemplates,
        project.skillId,
        t
    ]);
    const activeDesignSystemSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[activeDesignSystemSummary]": ()=>{
            if (!project.designSystemId) return null;
            return designSystems.find({
                "ProjectView.useMemo[activeDesignSystemSummary]": (d)=>d.id === project.designSystemId
            }["ProjectView.useMemo[activeDesignSystemSummary]"]) ?? null;
        }
    }["ProjectView.useMemo[activeDesignSystemSummary]"], [
        designSystems,
        project.designSystemId
    ]);
    const designSystemProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[designSystemProject]": ()=>{
            if (project.metadata?.importedFrom !== 'design-system') return null;
            if (!project.designSystemId) return null;
            return designSystems.find({
                "ProjectView.useMemo[designSystemProject]": (d)=>d.id === project.designSystemId
            }["ProjectView.useMemo[designSystemProject]"]) ?? null;
        }
    }["ProjectView.useMemo[designSystemProject]"], [
        designSystems,
        project.designSystemId,
        project.metadata?.importedFrom
    ]);
    const designSystemActivityEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[designSystemActivityEvents]": ()=>designSystemProject ? latestDesignSystemActivityEvents(messages) : []
    }["ProjectView.useMemo[designSystemActivityEvents]"], [
        designSystemProject,
        messages
    ]);
    const connectRepoNeeded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[connectRepoNeeded]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designSystemNeedsRepoConnect"])(designSystemProject, projectFiles.map({
                "ProjectView.useMemo[connectRepoNeeded]": (file)=>file.name
            }["ProjectView.useMemo[connectRepoNeeded]"]))
    }["ProjectView.useMemo[connectRepoNeeded]"], [
        designSystemProject,
        projectFiles
    ]);
    // Only the connect-repo CTA copy depends on this (connect vs re-import), so
    // resolve it lazily and only while the CTA is actually showing. Tri-state:
    // `undefined` means the status fetch has not resolved yet, which keeps the
    // CTA neutral and disabled so a fast click can't fire the wrong action.
    const [githubConnected, setGithubConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (!connectRepoNeeded) {
                setGithubConnected(undefined);
                return;
            }
            let aborted = false;
            const controller = new AbortController();
            const refresh = {
                "ProjectView.useEffect.refresh": ()=>{
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectorStatuses"])({
                        signal: controller.signal
                    }).then({
                        "ProjectView.useEffect.refresh": (statuses)=>{
                            if (!aborted) setGithubConnected(statuses.github?.status === 'connected');
                        }
                    }["ProjectView.useEffect.refresh"]);
                }
            }["ProjectView.useEffect.refresh"];
            refresh();
            // Connecting GitHub happens in the Connectors dialog or an external OAuth
            // window, neither of which changes connectRepoNeeded. Re-check on focus so
            // the CTA flips from "Connect GitHub" to "Import repo" when the user returns.
            const onFocus = {
                "ProjectView.useEffect.onFocus": ()=>refresh()
            }["ProjectView.useEffect.onFocus"];
            window.addEventListener('focus', onFocus);
            document.addEventListener('visibilitychange', onFocus);
            return ({
                "ProjectView.useEffect": ()=>{
                    aborted = true;
                    controller.abort();
                    window.removeEventListener('focus', onFocus);
                    document.removeEventListener('visibilitychange', onFocus);
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        connectRepoNeeded
    ]);
    // Signal that pushes a draft into the chat composer (the "Import repo" CTA).
    const [composerDraftSignal, setComposerDraftSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    // One handler for both the review banner and the chat CTA. When GitHub is
    // not connected it opens Connectors; once connected it prefills the composer
    // with the import instruction so the user can review and send it.
    const handleConnectRepo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleConnectRepo]": ()=>{
            // Status not resolved yet; the CTA is disabled in this window, but guard
            // anyway so a stray call can't route a connected account to Connectors.
            if (githubConnected === undefined) return;
            if (githubConnected) {
                setComposerDraftSignal({
                    text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRepoImportPrompt"])(designSystemProject, projectFiles.map({
                        "ProjectView.useCallback[handleConnectRepo]": (file)=>file.name
                    }["ProjectView.useCallback[handleConnectRepo]"])),
                    nonce: Date.now()
                });
            } else {
                onOpenSettings('composio');
            }
        }
    }["ProjectView.useCallback[handleConnectRepo]"], [
        githubConnected,
        onOpenSettings,
        designSystemProject,
        projectFiles
    ]);
    // "Next step" affordance handlers (shown under the last assistant message
    // once it produced a previewable HTML artifact). Share reuses the preview
    // workspace's existing Share/Export menu. The featured design-toolbox rows are
    // driven by ChatPane's composer ref, so ProjectView no longer wires them here.
    const handleArtifactShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleArtifactShare]": (fileName)=>{
            requestOpenFile(fileName);
            setShareRequest({
                name: fileName,
                nonce: Date.now()
            });
        }
    }["ProjectView.useCallback[handleArtifactShare]"], [
        requestOpenFile
    ]);
    // Mirrors share, but opens the workspace's Download/Export menu (PDF / image /
    // zip / standalone HTML / save-as-template) instead of a bare file download.
    const handleArtifactDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleArtifactDownload]": (fileName)=>{
            requestOpenFile(fileName);
            setDownloadRequest({
                name: fileName,
                nonce: Date.now()
            });
        }
    }["ProjectView.useCallback[handleArtifactDownload]"], [
        requestOpenFile
    ]);
    const handleBrowserUsePrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleBrowserUsePrompt]": (text)=>{
            setWorkspaceFocused(false);
            setComposerDraftSignal({
                text,
                nonce: Date.now()
            });
        }
    }["ProjectView.useCallback[handleBrowserUsePrompt]"], []);
    const isDeck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[isDeck]": ()=>(skills.find({
                "ProjectView.useMemo[isDeck]": (s)=>s.id === project.skillId
            }["ProjectView.useMemo[isDeck]"]) ?? designTemplates.find({
                "ProjectView.useMemo[isDeck]": (s)=>s.id === project.skillId
            }["ProjectView.useMemo[isDeck]"]))?.mode === 'deck'
    }["ProjectView.useMemo[isDeck]"], [
        skills,
        designTemplates,
        project.skillId
    ]);
    const chatResizeLabel = t('project.resizeChatPanel');
    const workspacePanelTrack = workspacePanelMinWidth === 0 ? 'minmax(0, 1fr)' : `minmax(${workspacePanelMinWidth}px, 1fr)`;
    const splitLeftPanelWidth = leftInspectorActive ? COMMENT_INSPECTOR_PANEL_WIDTH : chatPanelWidthRef.current;
    const chatPanelAriaMinWidth = Math.min(MIN_CHAT_PANEL_WIDTH, chatPanelMaxWidth);
    const renderPreferredChatPanelWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[renderPreferredChatPanelWidth]": (preferredWidth, maxWidth = chatPanelMaxWidthRef.current, options = {})=>{
            const next = clampChatPanelWidth(preferredWidth, maxWidth);
            chatPanelWidthRef.current = next;
            applySplitChatPanelWidth(splitRef.current, next, workspacePanelTrack);
            if (options.commitState !== false) setChatPanelWidth(next);
            return next;
        }
    }["ProjectView.useCallback[renderPreferredChatPanelWidth]"], [
        workspacePanelTrack
    ]);
    const applyChatPanelWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[applyChatPanelWidth]": (width, options = {})=>{
            const nextPreferred = clampPreferredChatPanelWidth(clampChatPanelWidth(width, chatPanelMaxWidthRef.current));
            preferredChatPanelWidthRef.current = nextPreferred;
            return renderPreferredChatPanelWidth(nextPreferred, chatPanelMaxWidthRef.current, options);
        }
    }["ProjectView.useCallback[applyChatPanelWidth]"], [
        renderPreferredChatPanelWidth
    ]);
    const finishChatPanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[finishChatPanelResize]": (saveFinalWidth = true)=>{
            pointerCleanupRef.current?.();
            pointerCleanupRef.current = null;
            if (pointerFrameRef.current !== null) {
                cancelAnimationFrame(pointerFrameRef.current);
                pointerFrameRef.current = null;
            }
            pendingPointerClientXRef.current = null;
            resizeStateRef.current = null;
            setResizingChatPanel(false);
            if (saveFinalWidth) {
                const finalWidth = renderPreferredChatPanelWidth(preferredChatPanelWidthRef.current);
                saveChatPanelWidth(finalWidth);
            }
        }
    }["ProjectView.useCallback[finishChatPanelResize]"], [
        renderPreferredChatPanelWidth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            chatPanelWidthRef.current = chatPanelWidth;
            applySplitChatPanelWidth(splitRef.current, chatPanelWidth, workspacePanelTrack);
        }
    }["ProjectView.useEffect"], [
        chatPanelWidth,
        workspacePanelTrack
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            chatPanelMaxWidthRef.current = chatPanelMaxWidth;
        }
    }["ProjectView.useEffect"], [
        chatPanelMaxWidth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ProjectView.useLayoutEffect": ()=>{
            const split = splitRef.current;
            if (!split) return undefined;
            const updateAllowedWidth = {
                "ProjectView.useLayoutEffect.updateAllowedWidth": ()=>{
                    const splitWidth = split.clientWidth;
                    const nextWorkspaceMin = workspacePanelMinWidthForSplit(splitWidth);
                    const nextMax = maxChatPanelWidthForSplit(splitWidth);
                    chatPanelMaxWidthRef.current = nextMax;
                    setWorkspacePanelMinWidth(nextWorkspaceMin);
                    setChatPanelMaxWidth(nextMax);
                    renderPreferredChatPanelWidth(preferredChatPanelWidthRef.current, nextMax);
                }
            }["ProjectView.useLayoutEffect.updateAllowedWidth"];
            updateAllowedWidth();
            if (typeof ResizeObserver !== 'undefined') {
                const observer = new ResizeObserver(updateAllowedWidth);
                observer.observe(split);
                return ({
                    "ProjectView.useLayoutEffect": ()=>observer.disconnect()
                })["ProjectView.useLayoutEffect"];
            }
            window.addEventListener('resize', updateAllowedWidth);
            return ({
                "ProjectView.useLayoutEffect": ()=>window.removeEventListener('resize', updateAllowedWidth)
            })["ProjectView.useLayoutEffect"];
        }
    }["ProjectView.useLayoutEffect"], [
        renderPreferredChatPanelWidth
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>({
                "ProjectView.useEffect": ()=>finishChatPanelResize(false)
            })["ProjectView.useEffect"]
    }["ProjectView.useEffect"], [
        finishChatPanelResize
    ]);
    const handleChatResizePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleChatResizePointerDown]": (event)=>{
            if (event.button !== 0) return;
            const split = splitRef.current;
            if (!split) return;
            event.preventDefault();
            event.currentTarget.focus();
            event.currentTarget.setPointerCapture(event.pointerId);
            pointerCleanupRef.current?.();
            setResizingChatPanel(true);
            resizeStartPreferredWidthRef.current = preferredChatPanelWidthRef.current;
            const updateWidthFromClientX = {
                "ProjectView.useCallback[handleChatResizePointerDown].updateWidthFromClientX": (clientX)=>{
                    const state = resizeStateRef.current;
                    if (!state) return;
                    const delta = clientX - state.startClientX;
                    if (delta === 0 && !state.hasMoved) return;
                    state.hasMoved = true;
                    const rawWidth = state.startWidth + (state.isRtl ? -delta : delta);
                    applyChatPanelWidth(rawWidth, {
                        commitState: false
                    });
                }
            }["ProjectView.useCallback[handleChatResizePointerDown].updateWidthFromClientX"];
            const flushPendingPointerMove = {
                "ProjectView.useCallback[handleChatResizePointerDown].flushPendingPointerMove": ()=>{
                    if (pointerFrameRef.current !== null) {
                        cancelAnimationFrame(pointerFrameRef.current);
                        pointerFrameRef.current = null;
                    }
                    const clientX = pendingPointerClientXRef.current;
                    pendingPointerClientXRef.current = null;
                    if (clientX !== null) updateWidthFromClientX(clientX);
                }
            }["ProjectView.useCallback[handleChatResizePointerDown].flushPendingPointerMove"];
            resizeStateRef.current = {
                startClientX: event.clientX,
                startWidth: chatPanelWidthRef.current,
                isRtl: window.getComputedStyle(split).direction === 'rtl',
                hasMoved: false
            };
            const handlePointerMove = {
                "ProjectView.useCallback[handleChatResizePointerDown].handlePointerMove": (moveEvent)=>{
                    pendingPointerClientXRef.current = moveEvent.clientX;
                    if (pointerFrameRef.current !== null) return;
                    pointerFrameRef.current = requestAnimationFrame({
                        "ProjectView.useCallback[handleChatResizePointerDown].handlePointerMove": ()=>{
                            pointerFrameRef.current = null;
                            flushPendingPointerMove();
                        }
                    }["ProjectView.useCallback[handleChatResizePointerDown].handlePointerMove"]);
                }
            }["ProjectView.useCallback[handleChatResizePointerDown].handlePointerMove"];
            const handlePointerEnd = {
                "ProjectView.useCallback[handleChatResizePointerDown].handlePointerEnd": ()=>{
                    flushPendingPointerMove();
                    finishChatPanelResize(true);
                }
            }["ProjectView.useCallback[handleChatResizePointerDown].handlePointerEnd"];
            const handlePointerCancel = {
                "ProjectView.useCallback[handleChatResizePointerDown].handlePointerCancel": ()=>{
                    flushPendingPointerMove();
                    preferredChatPanelWidthRef.current = resizeStartPreferredWidthRef.current;
                    renderPreferredChatPanelWidth(resizeStartPreferredWidthRef.current);
                    finishChatPanelResize(false);
                }
            }["ProjectView.useCallback[handleChatResizePointerDown].handlePointerCancel"];
            const cleanup = {
                "ProjectView.useCallback[handleChatResizePointerDown].cleanup": ()=>{
                    window.removeEventListener('pointermove', handlePointerMove);
                    window.removeEventListener('pointerup', handlePointerEnd);
                    window.removeEventListener('pointercancel', handlePointerCancel);
                    window.removeEventListener('blur', handlePointerCancel);
                }
            }["ProjectView.useCallback[handleChatResizePointerDown].cleanup"];
            pointerCleanupRef.current = cleanup;
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerEnd);
            window.addEventListener('pointercancel', handlePointerCancel);
            window.addEventListener('blur', handlePointerCancel);
        }
    }["ProjectView.useCallback[handleChatResizePointerDown]"], [
        applyChatPanelWidth,
        finishChatPanelResize,
        renderPreferredChatPanelWidth
    ]);
    const handleChatResizeBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleChatResizeBlur]": ()=>{
            if (!pointerCleanupRef.current) return;
            preferredChatPanelWidthRef.current = resizeStartPreferredWidthRef.current;
            renderPreferredChatPanelWidth(resizeStartPreferredWidthRef.current);
            finishChatPanelResize(false);
        }
    }["ProjectView.useCallback[handleChatResizeBlur]"], [
        finishChatPanelResize,
        renderPreferredChatPanelWidth
    ]);
    const handleChatResizeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleChatResizeKeyDown]": (event)=>{
            let nextWidth = null;
            const split = splitRef.current;
            const isRtl = split ? window.getComputedStyle(split).direction === 'rtl' : false;
            if (event.key === 'ArrowLeft') {
                nextWidth = chatPanelWidthRef.current + (isRtl ? 1 : -1) * CHAT_PANEL_KEYBOARD_STEP;
            } else if (event.key === 'ArrowRight') {
                nextWidth = chatPanelWidthRef.current + (isRtl ? -1 : 1) * CHAT_PANEL_KEYBOARD_STEP;
            } else if (event.key === 'Home') {
                nextWidth = MIN_CHAT_PANEL_WIDTH;
            } else if (event.key === 'End') {
                nextWidth = chatPanelMaxWidthRef.current;
            }
            if (nextWidth === null) return;
            event.preventDefault();
            const next = applyChatPanelWidth(nextWidth);
            saveChatPanelWidth(next);
        }
    }["ProjectView.useCallback[handleChatResizeKeyDown]"], [
        applyChatPanelWidth
    ]);
    // Hand the pending prompt to ChatPane exactly once per project. The local
    // project-scoped snapshot survives the conversation-id remount, while the
    // persisted pendingPrompt is cleared so refreshes and later entries do not
    // re-seed the composer.
    //
    // PluginLoopHome auto-send case: when the project was created with
    // `autoSendFirstMessage`, app.tsx left a sessionStorage flag telling us
    // to fire the prompt as a real user message immediately. We must NOT
    // seed initialDraft in that case — otherwise the textarea echoes the
    // prompt while it is also streaming as the first user message. The ref
    // captures the prompt independently so downstream effects can still
    // dispatch the auto-send without going through initialDraft.
    const autoSendSeedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoSendAttachmentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoSendFirstMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    if (autoSendSeedRef.current === null) {
        let isAutoSend = false;
        try {
            isAutoSend = Boolean(window.sessionStorage.getItem(autoSendFirstMessageKey(project.id)));
        } catch  {
        /* sessionStorage may be unavailable; treat as manual flow. */ }
        autoSendFirstMessageRef.current = isAutoSend;
        autoSendSeedRef.current = isAutoSend ? project.pendingPrompt ?? '' : '';
        autoSendAttachmentsRef.current = isAutoSend ? readAutoSendAttachments(project.id) : [];
    }
    const [initialDraft, setInitialDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoSendSeedRef.current || !project.pendingPrompt ? undefined : {
        projectId: project.id,
        value: project.pendingPrompt
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            const pendingPrompt = project.pendingPrompt;
            if (!pendingPrompt) return;
            if (autoSendFirstMessageRef.current) {
                autoSendSeedRef.current = pendingPrompt;
                onClearPendingPrompt();
                return;
            }
            setInitialDraft({
                "ProjectView.useEffect": (current)=>current?.projectId === project.id ? current : {
                        projectId: project.id,
                        value: pendingPrompt
                    }
            }["ProjectView.useEffect"]);
            onClearPendingPrompt();
        }
    }["ProjectView.useEffect"], [
        project.id,
        project.pendingPrompt,
        onClearPendingPrompt
    ]);
    const chatInitialDraft = chatSeed?.value ?? (initialDraft?.projectId === project.id ? initialDraft.value : undefined);
    // Continue in CLI / Finalize design package handlers + keyboard
    // shortcut wiring. Close to the JSX so the data flow is easy to
    // trace from the toolbar back to its sources.
    const handleFinalize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleFinalize]": ()=>{
            const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resolve$2d$finalize$2d$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFinalizeRequest"])(config);
            if (!request) {
                setProjectActionsToast((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$resolve$2d$finalize$2d$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFinalizeCredentialsMissingToast"])(config));
                return;
            }
            void finalize.trigger(request).then({
                "ProjectView.useCallback[handleFinalize]": (result)=>{
                    if (result) void designMdState.refresh();
                }
            }["ProjectView.useCallback[handleFinalize]"]);
        }
    }["ProjectView.useCallback[handleFinalize]"], [
        finalize,
        config,
        designMdState
    ]);
    const handleCancelFinalize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleCancelFinalize]": ()=>{
            finalize.cancel();
        }
    }["ProjectView.useCallback[handleCancelFinalize]"], [
        finalize
    ]);
    const handleContinueInCli = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleContinueInCli]": async ()=>{
            const projectDir = projectDetail.resolvedDir;
            if (!projectDir) {
                setProjectActionsToast({
                    message: 'Working directory unavailable. Update the daemon to enable Continue in CLI.',
                    details: null
                });
                return;
            }
            const prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$build$2d$clipboard$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildClipboardPrompt"])({
                project: {
                    id: project.id,
                    name: project.name
                },
                designMdState: {
                    generatedAt: designMdState.generatedAt,
                    transcriptMessageCount: designMdState.transcriptMessageCount,
                    designSystemId: designMdState.designSystemId,
                    currentArtifact: designMdState.currentArtifact
                },
                projectDir
            });
            const copied = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(prompt);
            if (!copied) {
                // Clipboard write failed in both the canonical and execCommand
                // fallback paths (locked clipboard / insecure context). Surface
                // the prompt body in the toast so the user can manually
                // select-and-copy. Do not open the folder — the user has nothing
                // to paste yet.
                setProjectActionsToast({
                    message: 'Clipboard unavailable. Copy this prompt manually, then run `claude` at the working directory.',
                    details: `Working directory: ${projectDir}`,
                    code: prompt
                });
                return;
            }
            const launched = await terminalLauncher.open(project.id);
            setProjectActionsToast((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$build$2d$continue$2d$in$2d$cli$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildContinueInCliToast"])(projectDir, launched));
        }
    }["ProjectView.useCallback[handleContinueInCli]"], [
        project.id,
        project.name,
        projectDetail.resolvedDir,
        designMdState.generatedAt,
        designMdState.transcriptMessageCount,
        designMdState.designSystemId,
        designMdState.currentArtifact,
        terminalLauncher
    ]);
    // Defensive: if the conversation already has messages once they
    // hydrate, the pendingPrompt that seeded the composer is stale (the
    // user sent it earlier but onClearPendingPrompt did not get a chance
    // to patch the server before the page reloaded). Drop the seed so the
    // textarea does not echo a prompt the user already submitted.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (initialDraft && messages.length > 0) {
                setInitialDraft(undefined);
            }
        }
    }["ProjectView.useEffect"], [
        initialDraft,
        messages.length
    ]);
    // §8.4 — when the project was created with a plugin pinned (the
    // PluginLoopHome → POST /api/projects path), fetch the immutable
    // snapshot once so ChatPane can render the active plugin as a
    // context chip on user messages instead of re-rendering the inline
    // plugin rail. Re-fetches when the pinned id changes; cancelled if
    // the project switches away mid-flight to avoid setState-on-unmount.
    const [activePluginSnapshot, setActivePluginSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextPluginDetails, setContextPluginDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextDesignSystemDetails, setContextDesignSystemDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            const snapshotId = project.appliedPluginSnapshotId;
            if (!snapshotId) {
                setActivePluginSnapshot(null);
                return;
            }
            let cancelled = false;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAppliedPluginSnapshot"])(snapshotId).then({
                "ProjectView.useEffect": (snap)=>{
                    if (cancelled) return;
                    setActivePluginSnapshot(snap);
                }
            }["ProjectView.useEffect"]);
            return ({
                "ProjectView.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        project.appliedPluginSnapshotId
    ]);
    const handleOpenContextPluginDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectView.useCallback[handleOpenContextPluginDetails]": async (pluginId)=>{
            const normalizedId = pluginId.trim();
            if (!normalizedId) return;
            const plugins = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPlugins"])({
                includeHidden: true
            });
            const record = plugins.find({
                "ProjectView.useCallback[handleOpenContextPluginDetails].record": (plugin)=>plugin.id === normalizedId
            }["ProjectView.useCallback[handleOpenContextPluginDetails].record"]);
            if (record) setContextPluginDetails(record);
        }
    }["ProjectView.useCallback[handleOpenContextPluginDetails]"], []);
    const chatDesignSystemSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectView.useMemo[chatDesignSystemSummary]": ()=>{
            if (activeDesignSystemSummary) return activeDesignSystemSummary;
            const designSystemName = activePluginSnapshot?.inputs?.designSystem;
            if (typeof designSystemName !== 'string') return null;
            const normalized = designSystemName.trim();
            if (!normalized || normalized === 'the active project design system') return null;
            return designSystems.find({
                "ProjectView.useMemo[chatDesignSystemSummary]": (d)=>d.title === normalized
            }["ProjectView.useMemo[chatDesignSystemSummary]"]) ?? null;
        }
    }["ProjectView.useMemo[chatDesignSystemSummary]"], [
        activeDesignSystemSummary,
        activePluginSnapshot?.inputs,
        designSystems
    ]);
    // Lift finalize errors into the shared project-actions toast so the
    // user sees both the daemon's category message and any upstream
    // detail (per #450 verification commitment).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (finalize.error) {
                setProjectActionsToast({
                    message: finalize.error.message,
                    details: finalize.error.details
                });
            }
        }
    }["ProjectView.useEffect"], [
        finalize.error
    ]);
    // ⌘+Shift+K (mac) / Ctrl+Shift+K (others) → Continue in CLI. Mirrors
    // the capture-phase, platform-gated pattern from FileWorkspace's
    // Quick Switcher shortcut. ⌘+Shift+K is free (⌘+P is the only
    // existing primary-modifier shortcut on this surface).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            const onKeyDown = {
                "ProjectView.useEffect.onKeyDown": (e)=>{
                    const primary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacPlatform"])() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
                    if (primary && e.shiftKey && !e.altKey && e.key.toLowerCase() === 'k') {
                        if (e.isComposing) return;
                        if (!designMdState.exists) return;
                        e.preventDefault();
                        void handleContinueInCli();
                    }
                }
            }["ProjectView.useEffect.onKeyDown"];
            window.addEventListener('keydown', onKeyDown, {
                capture: true
            });
            return ({
                "ProjectView.useEffect": ()=>window.removeEventListener('keydown', onKeyDown, {
                        capture: true
                    })
            })["ProjectView.useEffect"];
        }
    }["ProjectView.useEffect"], [
        designMdState.exists,
        handleContinueInCli
    ]);
    // PluginLoopHome auto-send: when the user submits on Home, app.tsx
    // sets `sessionStorage['od:auto-send-first:<projectId>']` and routes
    // through createProject. Once the conversation id resolves and the
    // composer is mounted, fire handleSend(pendingPrompt) exactly once so
    // the user lands inside a running pipeline without an extra click.
    // We gate on `messages.length === 0` so a refresh after the run is
    // mid-flight never double-fires; the sessionStorage flag is cleared
    // immediately after the first dispatch.
    const autoSentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectView.useEffect": ()=>{
            if (autoSentRef.current) return;
            if (!activeConversationId) return;
            // Wait for the initial listMessages DB read to land. Without this gate
            // the auto-send fires before the in-flight DB response, which then
            // arrives with `setMessages([])` and wipes the freshly-pushed user +
            // assistant placeholder out of React state — leaving the daemon's run
            // with no in-memory message to attach the runId to.
            if (!messagesInitialized) return;
            if (streaming) return;
            if (messages.length > 0) return;
            let flag = null;
            try {
                flag = window.sessionStorage.getItem(autoSendFirstMessageKey(project.id));
            } catch  {
                flag = null;
            }
            if (!flag) return;
            // Prefer the seed captured at mount (autoSendSeedRef) — it survives
            // even after onClearPendingPrompt wipes project.pendingPrompt on the
            // server. Fall back to the live values for any edge case where the
            // ref was not populated (e.g. sessionStorage error path).
            const seed = (autoSendSeedRef.current || (initialDraft?.projectId === project.id ? initialDraft.value : '') || project.pendingPrompt || '').trim();
            const attachments = autoSendAttachmentsRef.current ?? [];
            if (!seed && attachments.length === 0) {
                return;
            }
            autoSentRef.current = true;
            if (isDesignSystemWorkspaceMetadata(project.metadata)) {
                markDesignSystemAuditAutoRepairEligible(project.id);
            }
            clearAutoSendSession(project.id);
            autoSendAttachmentsRef.current = [];
            void handleSend(seed, attachments, []);
        }
    }["ProjectView.useEffect"], [
        activeConversationId,
        messagesInitialized,
        streaming,
        messages.length,
        project.id,
        project.metadata,
        initialDraft,
        project.pendingPrompt,
        handleSend
    ]);
    // Wire the Critique Theater drop-in mount into the project workspace.
    // The hook reads the M1 Settings toggle out of the existing
    // `open-design:config` localStorage blob and stays in sync with the
    // platform `storage` event (cross-tab) plus the same-tab
    // `open-design:critique-theater-toggle` CustomEvent. The mount itself
    // returns `null` until the daemon emits a `critique.run_started` for
    // the active project, so the visual surface is unchanged for users
    // who have not opted in. The daemon-side gate
    // (`isCritiqueEnabled(...)` in `apps/daemon/src/server.ts`) is the
    // authority for whether a run is actually wired through the critique
    // pipeline; this hook only governs whether the web layer renders the
    // resulting SSE stream.
    const critiqueTheaterEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCritiqueTheaterEnabled"])();
    // CLI / agent selector lives below the chat conversation (composer footer),
    // not in the top-right header.
    const executionControls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AvatarMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarMenu"], {
        config: config,
        agents: agents,
        daemonLive: daemonLive,
        onModeChange: onModeChange,
        onOpen: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackComposerBarClick"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_composer',
                element: 'agent_selector_open',
                ...project?.id ? {
                    project_id: project.id
                } : {}
            });
        },
        onAgentChange: (id)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackComposerBarClick"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_composer',
                element: 'agent_select',
                agent_id: id,
                ...project?.id ? {
                    project_id: project.id
                } : {}
            });
            onAgentChange(id);
        },
        onAgentModelChange: (agentId, choice)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackComposerBarClick"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_composer',
                element: 'agent_model_select',
                agent_id: agentId,
                ...choice?.model ? {
                    model_id: choice.model
                } : {},
                ...project?.id ? {
                    project_id: project.id
                } : {}
            });
            onAgentModelChange(agentId, choice);
        },
        onApiModelChange: (model)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackComposerBarClick"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_composer',
                element: 'agent_model_select',
                model_id: model,
                ...project?.id ? {
                    project_id: project.id
                } : {}
            });
            onApiModelChange?.(model);
        },
        onOpenSettings: onOpenSettings,
        onRefreshAgents: onRefreshAgents,
        placement: "up"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
        lineNumber: 6061,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$CritiqueTheaterMount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CritiqueTheaterMount"], {
                projectId: project.id,
                enabled: critiqueTheaterEnabled
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                lineNumber: 6113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: splitRef,
                className: [
                    projectSplitClassName(workspaceFocused),
                    leftInspectorActive && !workspaceFocused ? 'split-manual-edit' : '',
                    resizingChatPanel && !workspaceFocused ? 'is-resizing-chat' : ''
                ].filter(Boolean).join(' '),
                style: projectSplitStyle(workspaceFocused, splitLeftPanelWidth, workspacePanelTrack),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "split-chat-slot",
                        hidden: workspaceFocused,
                        children: commentInspectorActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: commentInspectorPortalId,
                            className: "comment-left-host",
                            "aria-label": "Comments"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                            lineNumber: 6131,
                            columnNumber: 13
                        }, this) : activeConversationId || conversationLoadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPane"], {
                            messages: messages,
                            streaming: currentConversationStreaming,
                            liveToolInput: liveToolInput,
                            loading: currentConversationLoading,
                            sendDisabled: currentConversationSendDisabled,
                            queuedItems: currentConversationQueuedItems,
                            error: conversationLoadError ?? error ?? audioVoiceOptionsError,
                            projectId: project.id,
                            sessionMode: activeSessionMode,
                            onSessionModeChange: handleActiveConversationSessionModeChange,
                            projectKindForTracking: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(project.metadata?.kind, project.metadata?.videoModel),
                            projectFiles: projectFiles,
                            activeProjectFileName: activeProjectFileName,
                            hasActiveDesignSystem: !!project.designSystemId,
                            activeDesignSystem: chatDesignSystemSummary,
                            projectFileNames: projectFileNames,
                            skills: skills,
                            onEnsureProject: handleEnsureProject,
                            previewComments: previewComments,
                            attachedComments: attachedComments,
                            onAttachComment: attachPreviewComment,
                            onDetachComment: detachPreviewComment,
                            onDeleteComment: (commentId)=>void removePreviewComment(commentId),
                            onSend: handleSend,
                            onRetry: handleRetry,
                            onResumeRun: handleResumeRun,
                            onStop: handleStop,
                            onRemoveQueuedSend: removeQueuedChatSend,
                            onUpdateQueuedSend: updateQueuedChatSend,
                            onReorderQueuedSends: reorderCurrentConversationQueuedChatSends,
                            onSendQueuedNow: sendQueuedChatSendNow,
                            onRequestOpenFile: requestOpenFile,
                            onRequestPluginDetails: handleOpenContextPluginDetails,
                            onRequestDesignSystemDetails: setContextDesignSystemDetails,
                            onRequestPluginFolderAgentAction: handlePluginFolderAgentAction,
                            activePluginActionPaths: activePluginActionPaths,
                            hiddenPluginActionPaths: hiddenAssistantPluginActionPaths,
                            onShareToOpenDesign: handleShareToOpenDesign,
                            shareToOpenDesignBusyMessageId: shareToOpenDesignBusyMessageId,
                            forceStreamingMessageIds: forceStreamingPluginMessageIds,
                            initialDraft: chatInitialDraft,
                            onOpenQuestions: openQuestionsTab,
                            onContinueRemainingTasks: handleContinueRemainingTasks,
                            onAssistantFeedback: handleAssistantFeedback,
                            onArtifactShare: handleArtifactShare,
                            onArtifactDownload: handleArtifactDownload,
                            onForkFromMessage: handleForkFromMessage,
                            forkingMessageId: forkingMessageId,
                            onNewConversation: handleNewConversation,
                            newConversationDisabled: newConversationDisabled,
                            conversations: conversations,
                            activeConversationId: activeConversationId,
                            messagesConversationId: messagesConversationId,
                            onSelectConversation: handleSelectConversation,
                            onDeleteConversation: handleDeleteConversation,
                            config: config,
                            onOpenSettings: onOpenSettings,
                            showByokRecoveryAction: config.mode === 'api' && daemonLive && (!config.apiKey.trim() || !config.baseUrl.trim() || !config.model.trim()),
                            onSwitchToLocalCli: ()=>{
                                setError(null);
                                onModeChange('daemon');
                            },
                            onOpenAmrSettings: onOpenAmrSettings,
                            onSwitchToAmrAndRetry: handleSwitchToAmrAndRetry,
                            onLaunchAntigravityOauth: handleLaunchAntigravityOauth,
                            onOpenMcpSettings: onOpenMcpSettings,
                            onBrowsePlugins: onBrowsePlugins,
                            onOpenConnectors: onOpenConnectors,
                            connectRepoNeeded: connectRepoNeeded,
                            githubConnected: githubConnected,
                            onConnectRepo: handleConnectRepo,
                            composerDraftSignal: composerDraftSignal,
                            petConfig: config.pet,
                            onAdoptPet: onAdoptPetInline,
                            onTogglePet: onTogglePet,
                            onOpenPetSettings: onOpenPetSettings,
                            researchAvailable: config.mode === 'daemon',
                            byokApiProtocol: config.apiProtocol,
                            byokImageModel: byokImageModelOverride,
                            onChangeByokImageModel: setByokImageModelOverride,
                            byokVideoModel: byokVideoModelOverride,
                            onChangeByokVideoModel: setByokVideoModelOverride,
                            byokSpeechModel: byokSpeechModelOverride,
                            onChangeByokSpeechModel: setByokSpeechModelOverride,
                            byokSpeechVoice: byokSpeechVoiceOverride,
                            onChangeByokSpeechVoice: setByokSpeechVoiceOverride,
                            projectMetadata: project.metadata,
                            onProjectMetadataChange: (metadata)=>{
                                onProjectChange({
                                    ...project,
                                    metadata
                                });
                            },
                            activeWorkspaceContext: activeWorkspaceContext,
                            workspaceContexts: workspaceContexts,
                            currentSkillId: project.skillId,
                            onProjectSkillChange: (skillId)=>{
                                onProjectChange({
                                    ...project,
                                    skillId
                                });
                            },
                            activePluginSnapshot: activePluginSnapshot,
                            currentDesignSystemId: project.designSystemId,
                            onActiveDesignSystemChange: (updatedProject)=>{
                                onProjectChange(updatedProject);
                            },
                            onShowToast: (message)=>{
                                setProjectActionsToast({
                                    message,
                                    details: null
                                });
                            },
                            onBack: onBack,
                            backLabel: t('project.backToProjects'),
                            composerFooterAccessory: executionControls,
                            projectHeader: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chat-project-title-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "title editable",
                                        "data-testid": "project-title",
                                        title: project.name,
                                        tabIndex: 0,
                                        role: "textbox",
                                        suppressContentEditableWarning: true,
                                        contentEditable: true,
                                        onBlur: (e)=>handleProjectRename(e.currentTarget.textContent ?? ''),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                e.currentTarget.blur();
                                            }
                                        },
                                        children: project.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                        lineNumber: 6258,
                                        columnNumber: 19
                                    }, this),
                                    projectMeta !== t('project.metaFreeform') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "meta",
                                        "data-testid": "project-meta",
                                        children: projectMeta
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                        lineNumber: 6277,
                                        columnNumber: 21
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                lineNumber: 6257,
                                columnNumber: 17
                            }, this),
                            designSystemPicker: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemPicker"], {
                                designSystems: designSystems,
                                selectedId: project.designSystemId ?? null,
                                onChange: handleChangeDesignSystemId
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                lineNumber: 6282,
                                columnNumber: 17
                            }, this)
                        }, `${project.id}:${activeConversationId ?? 'conversation-unavailable'}:${chatSeed?.id ?? 'ready'}`, false, {
                            fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                            lineNumber: 6137,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pane",
                            "data-testid": "chat-pane-loading",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenteredLoader"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                lineNumber: 6291,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                            lineNumber: 6290,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                        lineNumber: 6129,
                        columnNumber: 9
                    }, this),
                    !workspaceFocused ? leftInspectorActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "split-edit-divider",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                        lineNumber: 6297,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "split-resize-handle",
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": chatResizeLabel,
                        "aria-valuemin": chatPanelAriaMinWidth,
                        "aria-valuemax": chatPanelMaxWidth,
                        "aria-valuenow": chatPanelWidth,
                        tabIndex: 0,
                        title: chatResizeLabel,
                        onPointerDown: handleChatResizePointerDown,
                        onKeyDown: handleChatResizeKeyDown,
                        onBlur: handleChatResizeBlur
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                        lineNumber: 6299,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileWorkspace"], {
                        projectId: project.id,
                        projectKind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectKindToTracking"])(project.metadata?.kind, project.metadata?.videoModel) ?? 'prototype',
                        rootDirName: (()=>{
                            const baseDir = projectDetail.project?.metadata?.baseDir ?? project.metadata?.baseDir;
                            return typeof baseDir === 'string' ? baseDir.split(/[/\\]/).filter(Boolean).pop() : undefined;
                        })(),
                        reloading: false,
                        resolvedDir: projectDetail.resolvedDir,
                        files: projectFiles,
                        liveArtifacts: liveArtifacts,
                        filesRefreshKey: filesRefresh,
                        onRefreshFiles: ()=>{
                            void refreshWorkspaceItems();
                        },
                        isDeck: isDeck,
                        onExportAsPptx: handleExportAsPptx,
                        streaming: currentConversationActionDisabled,
                        commentQueueOnSend: commentQueueOnSend,
                        commentSendDisabled: currentConversationQueueDisabled,
                        openRequest: openRequest,
                        shareRequest: shareRequest,
                        downloadRequest: downloadRequest,
                        slideNavRequest: slideNavRequest,
                        liveArtifactEvents: liveArtifactEvents,
                        designSystemActivityEvents: designSystemActivityEvents,
                        tabsState: openTabsState,
                        onTabsStateChange: persistTabsState,
                        previewComments: previewComments,
                        onSavePreviewComment: savePreviewComment,
                        onRemovePreviewComment: removePreviewComment,
                        onSendBoardCommentAttachments: handleSendBoardCommentAttachments,
                        onRequestBrowserUsePrompt: handleBrowserUsePrompt,
                        onPluginFolderAgentAction: handlePluginFolderAgentAction,
                        activePluginActionPaths: activePluginActionPaths,
                        preferredPreviewFile: project.metadata?.entryFile ?? null,
                        autoPreviewDesignArtifacts: project.metadata?.importedFrom === 'folder',
                        focusMode: workspaceFocused,
                        onFocusModeChange: setWorkspaceFocused,
                        designSystemProject: designSystemProject,
                        defaultDesignSystemId: config.designSystemId,
                        onSetDefaultDesignSystem: onChangeDefaultDesignSystem,
                        onDesignSystemsRefresh: onDesignSystemsRefresh,
                        onDesignSystemNeedsWork: sendDesignSystemFeedback,
                        designSystemReview: project.metadata?.designSystemReview,
                        onDesignSystemReviewDecision: persistDesignSystemReviewDecision,
                        onConnectRepo: handleConnectRepo,
                        githubConnected: githubConnected,
                        commentPortalId: commentInspectorPortalId,
                        onCommentModeChange: setCommentInspectorActive,
                        chatConfig: config,
                        chatAgentsById: agentsById,
                        chatLocale: locale,
                        conversations: conversations,
                        activeConversationId: activeConversationId,
                        onSelectConversation: handleSelectConversation,
                        onDeleteConversation: handleDeleteConversation,
                        onRenameConversation: handleRenameConversation,
                        onConversationSessionModeChange: handleConversationSessionModeChange,
                        onNewConversation: handleNewConversation,
                        activeConversationChat: activeConversationChatState,
                        onActiveContextChange: handleActiveWorkspaceContextChange,
                        onWorkspaceContextsChange: handleWorkspaceContextsChange,
                        messages: messages,
                        artifactHtml: artifact?.html,
                        conversationError: error,
                        onRetry: handleRetry,
                        onAuthorizeAndRetry: handleSwitchToAmrAndRetry,
                        onLaunchTerminalAuth: handleLaunchAntigravityOauth,
                        conversationId: activeConversationId,
                        headerActions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$HandoffButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandoffButton"], {
                                    projectId: project.id,
                                    projectName: project.name,
                                    projectDir: projectDetail.resolvedDir,
                                    agents: agents,
                                    artifactId: headerArtifact.artifact_id,
                                    artifactKind: headerArtifact.artifact_kind,
                                    metricsConsent: config.telemetry?.metrics === true,
                                    installationId: config.installationId
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                    lineNumber: 6390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$EntrySettingsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntrySettingsMenu"], {
                                    config: config,
                                    onThemeChange: handleThemeChange,
                                    onOpenSettings: onOpenSettings,
                                    trackingPageName: "artifact",
                                    onTrackTriggerClick: ()=>{
                                        // Spec row 52: the settings gear in the artifact header.
                                        // Carry the active artifact so settings slices line up with
                                        // the rest of the artifact_header funnel.
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackArtifactHeaderClick"])(analytics.track, {
                                            page_name: 'artifact',
                                            area: 'artifact_header',
                                            element: 'settings',
                                            ...headerArtifact
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                                    lineNumber: 6400,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        questionForm: displayedQuestionForm,
                        questionFormPreview: displayedQuestionFormPreview,
                        questionFormKey: displayedQuestionFormKey,
                        questionFormInteractive: displayedQuestionFormActive,
                        questionFormSubmitDisabled: currentConversationActionDisabled,
                        questionFormSubmittedAnswers: displayedQuestionFormSubmittedAnswers,
                        questionsGenerating: displayedQuestionsGenerating,
                        focusQuestionsRequest: focusQuestionsRequest,
                        onSubmitQuestionForm: (text)=>{
                            if (currentConversationActionDisabled) return;
                            // Submitting question-form answers is a clarification turn, not a
                            // fresh create/edit — tag entry_from so the dashboard can separate it.
                            void handleSend(text, [], [], {
                                entryFrom: 'question_answer'
                            });
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                        lineNumber: 6315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                lineNumber: 6120,
                columnNumber: 7
            }, this),
            contextPluginDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PluginDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginDetailsModal"], {
                record: contextPluginDetails,
                onClose: ()=>setContextPluginDetails(null),
                onUse: ()=>setContextPluginDetails(null),
                isApplying: false,
                hideUseAction: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                lineNumber: 6436,
                columnNumber: 9
            }, this) : null,
            contextDesignSystemDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemPreviewModal"], {
                system: contextDesignSystemDetails,
                onClose: ()=>setContextDesignSystemDetails(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                lineNumber: 6445,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: projectActionsToast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    message: projectActionsToast.message,
                    details: projectActionsToast.details,
                    code: projectActionsToast.code,
                    onDismiss: ()=>setProjectActionsToast(null)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                    lineNumber: 6452,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ProjectView.tsx",
                lineNumber: 6450,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ProjectView.tsx",
        lineNumber: 6112,
        columnNumber: 5
    }, this);
}
_s(ProjectView, "+/GU2ndNHyttFX54/goMNQTnOGU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$IframeKeepAlivePool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIframeKeepAlivePool"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokImageModelOptions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokVideoModelOptions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokSpeechModelOptions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useProjectDetail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectDetail"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useDesignMdState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignMdState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useFinalizeProject$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinalizeProject"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useTerminalLaunch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerminalLaunch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCoalescedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCoalescedCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$project$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectFileEvents"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCritiqueTheaterEnabled"]
    ];
});
_c = ProjectView;
function artifactExtensionFor(art) {
    const type = (art.artifactType || '').toLowerCase();
    const identifier = (art.identifier || '').toLowerCase();
    if (type.includes('tsx') || identifier.endsWith('.tsx')) return '.tsx';
    if (type.includes('jsx') || type.includes('react') || identifier.endsWith('.jsx')) {
        return '.jsx';
    }
    return '.html';
}
function artifactBaseNameFor(art) {
    return (art.identifier || art.title || 'artifact').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'artifact';
}
function findExistingArtifactProjectFile(art, projectFiles, options = {}) {
    const ext = artifactExtensionFor(art);
    const baseName = artifactBaseNameFor(art);
    const candidateFileName = `${baseName}${ext}`;
    const currentRunFiles = filterProjectFilesByMinMtime(projectFiles, options.minMtime);
    if (ext === '.html') {
        const pointerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$pointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveHtmlPointerArtifactTarget"])({
            content: art.html,
            candidateFileName,
            projectFiles: currentRunFiles
        });
        const pointerFile = pointerTarget ? currentRunFiles.find((file)=>file.name === pointerTarget || file.path === pointerTarget) : null;
        if (pointerFile) return pointerFile;
    }
    const identifier = art.identifier || '';
    if (identifier) {
        const manifestMatches = currentRunFiles.filter((file)=>file.artifactManifest?.metadata?.identifier === identifier).sort((a, b)=>b.mtime - a.mtime);
        if (manifestMatches[0]) return manifestMatches[0];
    }
    return currentRunFiles.find((file)=>file.name === candidateFileName) ?? null;
}
function filterProjectFilesByMinMtime(projectFiles, minMtime) {
    return typeof minMtime === 'number' && Number.isFinite(minMtime) ? projectFiles.filter((file)=>file.mtime >= minMtime) : [
        ...projectFiles
    ];
}
function selectPrimaryProjectFile(files) {
    const candidates = files.filter((file)=>!isProcessArtifactFile(file.name)).map((file)=>({
            file,
            rank: primaryProjectFileRank(file)
        })).filter((candidate)=>Number.isFinite(candidate.rank));
    if (candidates.length === 0) return null;
    candidates.sort((a, b)=>a.rank - b.rank || b.file.mtime - a.file.mtime);
    return candidates[0]?.file ?? null;
}
function isProcessArtifactFile(name) {
    const base = name.split('/').pop()?.toLowerCase() ?? name.toLowerCase();
    return base === 'critique.json' || base.endsWith('.log') || base.endsWith('.meta.json') || base.endsWith('.artifact.json') || base.endsWith('.map');
}
function primaryProjectFileRank(file) {
    if (manifestDeclaresPrimary(file)) return 0;
    if (file.artifactManifest && file.artifactManifest.metadata?.inferred !== true) return 1;
    if (file.kind === 'html') return 2;
    if (file.kind === 'image') return 3;
    if (file.kind === 'video') return 4;
    if (file.kind === 'sketch') return 5;
    if (file.kind === 'pdf') return 6;
    if (file.kind === 'presentation') return 7;
    if (file.kind === 'document') return 8;
    if (file.kind === 'spreadsheet') return 9;
    return Number.POSITIVE_INFINITY;
}
function manifestDeclaresPrimary(file) {
    const manifest = file.artifactManifest;
    if (!manifest) return false;
    if (primaryValueTargetsFile(manifest.primary, file.name)) return true;
    const metadata = manifest.metadata;
    if (!metadata || typeof metadata !== 'object') return false;
    if (primaryValueTargetsFile(metadata.primary, file.name)) return true;
    const outputs = metadata.outputs;
    if (outputs && typeof outputs === 'object' && !Array.isArray(outputs)) {
        return primaryValueTargetsFile(outputs.primary, file.name);
    }
    return false;
}
function primaryValueTargetsFile(value, fileName) {
    if (value === true) return true;
    if (typeof value !== 'string') return false;
    return normalizeProjectFileName(value) === normalizeProjectFileName(fileName);
}
function normalizeProjectFileName(value) {
    return value.replace(/\\/g, '/').replace(/^\.?\//, '').toLowerCase();
}
function assistantAgentDisplayName(agentId, fallbackName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentDisplayName"])(agentId, fallbackName) ?? undefined;
}
function isTerminalRunStatus(status) {
    return status === 'succeeded' || status === 'failed' || status === 'canceled';
}
function isActiveRunStatus(status) {
    return status === 'queued' || status === 'running';
}
function hasRecoverableArtifactMessage(message) {
    if (message.role !== 'assistant') return false;
    if (!message.runId) return false;
    if (!isTerminalRunStatus(message.runStatus)) return false;
    if (message.producedFiles?.length) return false;
    const sourceText = message.content.trim().length > 0 ? message.content : textContentFromAgentEvents(message.events);
    return artifactFromRecoverableSourceText(sourceText) !== null;
}
function artifactFromRecoverableSourceText(sourceText) {
    const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArtifactParser"])();
    let parsedArtifact = null;
    let liveHtml = '';
    for (const ev of [
        ...parser.feed(sourceText),
        ...parser.flush()
    ]){
        if (ev.type === 'artifact:start') {
            liveHtml = '';
            parsedArtifact = {
                identifier: ev.identifier,
                artifactType: ev.artifactType,
                title: ev.title,
                html: ''
            };
        } else if (ev.type === 'artifact:chunk') {
            liveHtml += ev.delta;
            parsedArtifact = artifactWithHtml(parsedArtifact, ev.identifier, liveHtml);
        } else if (ev.type === 'artifact:end') {
            parsedArtifact = artifactWithHtml(parsedArtifact, ev.identifier, ev.fullContent);
        }
    }
    if (parsedArtifact?.html) return parsedArtifact;
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverStandaloneHtmlDocument"])(sourceText) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverHtmlDocumentFromMarkdownFence"])(sourceText);
    if (!html) return null;
    return {
        identifier: 'response',
        artifactType: 'text/html',
        title: 'Response',
        html
    };
}
function shouldReplayTerminalRunMessage(message) {
    if (message.role !== 'assistant') return false;
    if (!message.runId) return false;
    if (message.runStatus !== 'succeeded') return false;
    if (message.content.trim().length > 0) return false;
    if (message.startedAt == null && !message.preTurnFileNames?.length && textContentFromAgentEvents(message.events).trim().length === 0) {
        return false;
    }
    return !message.producedFiles?.length;
}
function textContentFromAgentEvents(events) {
    return (events ?? []).filter((event)=>event.kind === 'text').map((event)=>event.text).join('');
}
const QUEUED_CHAT_SENDS_STORAGE_VERSION = 1;
function queuedChatSendsStorageKey(projectId) {
    return `od:chat-queued-sends:${projectId}:v${QUEUED_CHAT_SENDS_STORAGE_VERSION}`;
}
function loadQueuedChatSends(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(queuedChatSendsStorageKey(projectId));
        const parsed = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(isQueuedChatSend).slice(0, 100);
    } catch  {
        return [];
    }
}
function saveQueuedChatSends(projectId, items) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const key = queuedChatSendsStorageKey(projectId);
        if (items.length === 0) {
            window.localStorage.removeItem(key);
            return;
        }
        window.localStorage.setItem(key, JSON.stringify(items.slice(0, 100)));
    } catch  {
    // Ignore private-mode/quota failures. The in-memory queue still works.
    }
}
function isQueuedChatSend(value) {
    if (typeof value !== 'object' || value == null || Array.isArray(value)) return false;
    const record = value;
    return typeof record.id === 'string' && typeof record.conversationId === 'string' && typeof record.prompt === 'string' && Array.isArray(record.attachments) && Array.isArray(record.commentAttachments) && typeof record.createdAt === 'number';
}
function stripQueueOnlyFromMeta(meta) {
    if (!meta) return undefined;
    const { queueOnly: _queueOnly, ...rest } = meta;
    return Object.keys(rest).length > 0 ? rest : undefined;
}
function resolveRetryTarget(messages, failedAssistantId) {
    const failedIndex = messages.findIndex((message)=>message.id === failedAssistantId && message.role === 'assistant' && message.runStatus === 'failed');
    if (failedIndex <= 0 || failedIndex !== messages.length - 1) return null;
    let userIndex = failedIndex - 1;
    while(userIndex >= 0 && messages[userIndex]?.role === 'assistant' && messages[userIndex]?.runStatus === 'failed'){
        userIndex -= 1;
    }
    const userMsg = messages[userIndex];
    const failedAssistant = messages[failedIndex];
    if (!userMsg || userMsg.role !== 'user' || !failedAssistant) return null;
    return {
        failedAssistant,
        userMsg,
        priorMessages: messages.slice(0, userIndex),
        preservedAttempts: messages.slice(userIndex + 1, failedIndex + 1)
    };
}
function latestDesignSystemActivityEvents(messages) {
    for(let index = messages.length - 1; index >= 0; index -= 1){
        const message = messages[index];
        if (!message || message.role !== 'assistant') continue;
        if ((message.events?.length ?? 0) > 0) return message.events ?? [];
        if (isActiveRunStatus(message.runStatus)) return [];
    }
    return [];
}
function pluginWorkflowTitle(action) {
    return action === 'publish' ? 'Publish repo' : 'Open Design PR';
}
function pluginWorkflowCliCommand(action, relativePath) {
    return action === 'publish' ? `od plugin publish-repo ${relativePath}` : `od plugin open-design-pr ${relativePath}`;
}
function pluginWorkflowPlannedSteps(action) {
    if (action === 'publish') {
        return [
            'Resolve GitHub owner and validate plugin metadata',
            'Create or update the GitHub repository',
            'Push plugin files and tags',
            'Return the repository URL'
        ];
    }
    return [
        'Ensure the Open Design fork exists',
        'Clone the fork and prepare a branch',
        'Copy the plugin into plugins/community',
        'Push the branch and open the PR form'
    ];
}
function pluginWorkflowPlannedEvents(action, relativePath) {
    return [
        {
            kind: 'text',
            text: `${pluginWorkflowStartContent(action, relativePath)}\n\n`
        },
        {
            kind: 'status',
            label: 'working',
            detail: pluginWorkflowTitle(action)
        }
    ];
}
function pluginWorkflowResultEvents(action, relativePath, message, url, log, ok, existingEvents) {
    const summary = ok ? pluginWorkflowSuccessContent(action, relativePath, message, url, log) : pluginWorkflowFailureContent(action, relativePath, message, log);
    const baseEvents = (existingEvents ?? []).filter((event)=>!(event.kind === 'status' && event.label === 'working'));
    return [
        ...baseEvents,
        {
            kind: 'text',
            text: `${summary}\n\n`
        },
        {
            kind: 'status',
            label: ok ? 'done' : 'failed',
            detail: ok ? 'CLI command finished' : 'CLI command failed'
        }
    ];
}
function pluginWorkflowStartContent(action, relativePath) {
    const title = pluginWorkflowTitle(action);
    const command = pluginWorkflowCliCommand(action, relativePath);
    const steps = pluginWorkflowPlannedSteps(action).map((step)=>`- ${step}`).join('\n');
    return `${title} started.\n\n\`\`\`bash\n${command}\n\`\`\`\n\nPlanned steps:\n${steps}`;
}
function pluginWorkflowSuccessContent(action, relativePath, message, url, log) {
    const summary = stripTrailingUrl(message, url) || `${pluginWorkflowTitle(action)} completed for \`${relativePath}\`.`;
    const lines = (log ?? []).map((line)=>line.trim()).filter(Boolean).slice(0, 5);
    const command = pluginWorkflowCliCommand(action, relativePath);
    const details = lines.length > 0 ? `\n\nCLI output:\n${lines.map((line)=>`- \`${truncatePluginWorkflowLine(line)}\``).join('\n')}` : '';
    const link = url ? `\n\nLink: [${url}](${url})` : '';
    return `${summary}\n\n\`\`\`bash\n${command}\n\`\`\`${link}${details}`;
}
function pluginWorkflowFailureContent(action, relativePath, message, log) {
    const lines = (log ?? []).map((line)=>line.trim()).filter(Boolean).slice(0, 5);
    const command = pluginWorkflowCliCommand(action, relativePath);
    const details = lines.length > 0 ? `\n\nCLI output:\n${lines.map((line)=>`- \`${truncatePluginWorkflowLine(line)}\``).join('\n')}` : '';
    return `${pluginWorkflowTitle(action)} failed.\n\n\`\`\`bash\n${command}\n\`\`\`\n\n${message}${details}`;
}
function truncatePluginWorkflowLine(line) {
    return line.length > 160 ? `${line.slice(0, 157)}...` : line;
}
function stripTrailingUrl(message, url) {
    const text = message.trim();
    const link = url?.trim();
    if (!link) return text;
    return text.replace(new RegExp(`\\s*${escapeRegExp(link)}\\s*$`), '').trim();
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// A daemon assistant message that is "queued/running" but has no runId yet
// is in-flight on the client: POST /api/runs has not returned. Persisting it
// in this state creates a phantom DB row that the reattach loop can never
// recover (the daemon either never saw the request or the response was lost),
// which is what produced the "Working 24m+" stuck UI. Treat the in-flight
// window as ephemeral and only write to DB once a runId pins the row to a
// real daemon run — or once the run reaches a terminal state.
function isPhantomDaemonRunMessage(m) {
    return m.role === 'assistant' && isActiveRunStatus(m.runStatus) && !m.runId;
}
function isStoppableAssistantMessage(message) {
    if (message.role !== 'assistant') return false;
    if (isActiveRunStatus(message.runStatus)) return true;
    return message.runStatus === undefined && message.endedAt === undefined && message.startedAt !== undefined;
}
function resolveSucceededRunStatus(status) {
    return status === 'failed' || status === 'canceled' ? status : 'succeeded';
}
function computeProducedFiles(beforeNames, next) {
    if (!beforeNames) return undefined;
    const set = beforeNames instanceof Set ? beforeNames : new Set(beforeNames);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$produced$2d$files$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterImplicitProducedFiles"])(next.filter((f)=>!set.has(f.name)));
}
function mergeRecoveredArtifact(diff, recovered) {
    if (!recovered) return [
        ...diff
    ];
    if (diff.some((f)=>f.name === recovered.name)) return [
        ...diff
    ];
    return [
        ...diff,
        recovered
    ];
}
async function findSameTurnHtmlWriteForRecoveredArtifact({ artifactHtml, producedFiles, readProjectHtml }) {
    const recovered = normalizeHtmlForRecoveredArtifactComparison(artifactHtml);
    if (!recovered) return null;
    const candidates = producedFiles.filter(isHtmlProjectFile);
    if (candidates.length === 0) return null;
    const contents = await Promise.all(candidates.map((file)=>readProjectHtml(file.name)));
    const normalized = contents.map(normalizeHtmlForRecoveredArtifactComparison);
    // Bind only on an exact normalized-content match. This is inherently
    // agent-agnostic (#4308): whenever a filesystem-backed CLI writes an HTML
    // file and echoes the same document as an artifact, the normalized contents
    // are equal and we suppress the duplicate — no Claude-specific gate needed.
    //
    // We deliberately do NOT bind on a content *mismatch*. A differing same-turn
    // HTML file is a genuinely different document and must persist on its own.
    // A blind single-file bind also mis-fired across queued runs: the pre-turn
    // file snapshot for a queued run can predate the previous run's persist, so
    // computeProducedFiles() reports that earlier artifact as "produced this
    // turn" and we'd bind the echo to the wrong, unrelated file.
    const exact = candidates.find((_file, i)=>normalized[i] === recovered);
    return exact ?? null;
}
function isHtmlProjectFile(file) {
    const name = (file.path || file.name).toLowerCase();
    return file.kind === 'html' || /\.(?:html?|xhtml)$/u.test(name);
}
function normalizeHtmlForRecoveredArtifactComparison(value) {
    return String(value || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trim();
}
function clearStreamingConversationMarker(currentConversationId, completedConversationId) {
    if (completedConversationId !== undefined && completedConversationId !== null && currentConversationId !== completedConversationId) {
        return currentConversationId;
    }
    return null;
}
function shouldClearActiveRunRefs(currentConversationId, completedConversationId) {
    return currentConversationId === completedConversationId;
}
function finalizeActiveAssistantMessagesOnStop(messages, stoppedAt) {
    const finalized = [];
    const next = messages.map((message)=>{
        if (!isStoppableAssistantMessage(message)) {
            return message;
        }
        const updated = {
            ...message,
            runStatus: 'canceled',
            endedAt: message.endedAt ?? stoppedAt
        };
        finalized.push(updated);
        return updated;
    });
    return {
        messages: next,
        finalized
    };
}
function createBufferedTextUpdates({ updateMessage, persistSoon, flushAndPersistNow, onContentDelta }) {
    let pendingContentDelta = '';
    let pendingTextEventDelta = '';
    let flushFrame = null;
    let flushTimer = null;
    let disposed = false;
    let flushing = false;
    let needsFlush = false;
    const hasDocument = typeof document !== 'undefined';
    const hasWindow = ("TURBOPACK compile-time value", "object") !== 'undefined';
    const cancelScheduledFlush = ()=>{
        if (flushFrame !== null) {
            cancelAnimationFrame(flushFrame);
            flushFrame = null;
        }
        if (flushTimer !== null) {
            clearTimeout(flushTimer);
            flushTimer = null;
        }
    };
    const flush = ()=>{
        if (disposed) return;
        if (flushing) {
            needsFlush = true;
            return;
        }
        cancelScheduledFlush();
        if (!pendingContentDelta && !pendingTextEventDelta && !needsFlush) return;
        flushing = true;
        needsFlush = false;
        const contentDelta = pendingContentDelta;
        const textEventDelta = pendingTextEventDelta;
        pendingContentDelta = '';
        pendingTextEventDelta = '';
        try {
            updateMessage((prev)=>({
                    ...prev,
                    content: prev.content + contentDelta,
                    events: textEventDelta ? [
                        ...prev.events ?? [],
                        {
                            kind: 'text',
                            text: textEventDelta
                        }
                    ] : prev.events
                }));
            persistSoon();
            if (contentDelta) onContentDelta?.(contentDelta);
        } finally{
            flushing = false;
        }
        if (pendingContentDelta || pendingTextEventDelta || needsFlush) {
            needsFlush = false;
            scheduleFlush();
        }
    };
    const scheduleFlush = ()=>{
        if (disposed || flushFrame !== null || flushTimer !== null) return;
        flushFrame = requestAnimationFrame(()=>{
            flushFrame = null;
            flush();
        });
        flushTimer = setTimeout(()=>{
            flushTimer = null;
            flush();
        }, 250);
    };
    const appendContent = (delta)=>{
        if (disposed) return;
        pendingContentDelta += delta;
        needsFlush = true;
        scheduleFlush();
    };
    const appendTextEvent = (delta)=>{
        if (disposed) return;
        pendingTextEventDelta += delta;
        needsFlush = true;
        scheduleFlush();
    };
    const appendEvent = (ev)=>{
        if (disposed) return;
        if (ev.kind === 'text') {
            appendTextEvent(ev.text);
            return;
        }
        flush();
        updateMessage((prev)=>({
                ...prev,
                events: [
                    ...prev.events ?? [],
                    ev
                ]
            }));
        persistSoon();
    };
    const cancel = ()=>{
        disposed = true;
        cancelScheduledFlush();
        pendingContentDelta = '';
        pendingTextEventDelta = '';
        needsFlush = false;
        if (hasDocument) {
            document.removeEventListener('visibilitychange', onVisibilityChange);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            window.removeEventListener('pagehide', onPageHide);
        }
    };
    function onVisibilityChange() {
        if (document.visibilityState === 'hidden') {
            flush();
        }
    }
    function onPageHide() {
        flush();
        // persistSoon's 500ms debounce never fires once the document tears
        // down, so synchronously PUT with keepalive instead.
        flushAndPersistNow?.();
    }
    if (hasDocument) {
        document.addEventListener('visibilitychange', onVisibilityChange);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        window.addEventListener('pagehide', onPageHide);
    }
    // True when text has been appended but not yet flushed into a `text` event.
    // Callers that need the soon-to-be-committed event count (e.g. pinning a live
    // tool's stream position) add 1 for this still-buffered preamble.
    const hasPendingText = ()=>pendingTextEventDelta.length > 0;
    return {
        appendContent,
        appendTextEvent,
        appendEvent,
        flush,
        cancel,
        hasPendingText
    };
}
var _c;
__turbopack_context__.k.register(_c, "ProjectView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_ProjectView_tsx_0mkxgvu._.js.map