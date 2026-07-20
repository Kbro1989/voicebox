(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/SettingsDialog.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectorSection",
    ()=>ConnectorSection,
    "SettingsDialog",
    ()=>SettingsDialog,
    "agentRefreshOptionsForConfig",
    ()=>agentRefreshOptionsForConfig,
    "canFetchProviderModels",
    ()=>canFetchProviderModels,
    "canRunProviderConnectionTest",
    ()=>canRunProviderConnectionTest,
    "configForManualOrbitRun",
    ()=>configForManualOrbitRun,
    "deriveComposioCredentialState",
    ()=>deriveComposioCredentialState,
    "isOrbitRunDisabled",
    ()=>isOrbitRunDisabled,
    "isValidApiBaseUrl",
    ()=>isValidApiBaseUrl,
    "persistConfigAndRunOrbit",
    ()=>persistConfigAndRunOrbit,
    "reconcileAmrModelChoice",
    ()=>reconcileAmrModelChoice,
    "reconcileAmrProfileEnv",
    ()=>reconcileAmrProfileEnv,
    "sanitizeSettingsSavePayload",
    ()=>sanitizeSettingsSavePayload,
    "shouldEnableSettingsSave",
    ()=>shouldEnableSettingsSave,
    "shouldShowCustomModelInput",
    ()=>shouldShowCustomModelInput,
    "switchApiProtocolConfig",
    ()=>switchApiProtocolConfig,
    "testStatusVariant",
    ()=>testStatusVariant,
    "updateAgentCliEnvValue",
    ()=>updateAgentCliEnvValue,
    "updateCurrentApiProtocolConfig",
    ()=>updateCurrentApiProtocolConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$visually$2d$hidden$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/visually-hidden.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$api$2f$connectionTest$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/api/connectionTest.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/amr-attribution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AgentIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentDiagnosticRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AgentDiagnosticRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AmrLoginPill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/amrLoginPolling.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$amr$2d$guidance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/amr-guidance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ExportDiagnosticsButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ExportDiagnosticsButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$modelOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/modelOptions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/apiProtocols.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/providerModelsCache.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/maxTokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$connection$2d$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/connection-test.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$provider$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/provider-models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/aihubmix-image-models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/visualStability.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$XaiOAuthControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/XaiOAuthControl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/PetSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$McpClientSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/McpClientSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SkillsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/DesignSystemsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PrivacySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PrivacySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectLocationsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ProjectLocationsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RoutinesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/RoutinesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorsBrowser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ConnectorsBrowser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryModelInline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MemoryModelInline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/MemorySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokConnectionTestControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/byok/ByokConnectionTestControl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokKeyField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/byok/ByokKeyField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokModelField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/byok/ByokModelField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokProviderBaseUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/byok/ByokProviderBaseUrl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokProviderPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/byok/ByokProviderPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/byok/validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Theater/hooks/useCritiqueTheaterEnabled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/appearance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/App.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/notifications.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
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
// When AMR sign-in completes, vela's live `models` catalog can lag the
// credential write by a beat (the link backend has to register the freshly
// authorized device). Re-detect a few times so a momentarily-empty catalog
// doesn't leave the model picker hidden — the symptom that previously needed
// an app restart / reinstall to clear.
const AMR_SIGN_IN_RESCAN_ATTEMPTS = 4;
const AMR_SIGN_IN_RESCAN_RETRY_MS = 1500;
function codexPathStrings(locale) {
    if (locale === 'zh-CN') {
        return {
            repairHint: '当前保存的 Codex 路径不适合继续使用。',
            useDetected: '使用检测到的 Codex',
            clearCustom: '清空自定义路径',
            configuredSuccess: (path)=>`本次测试使用的是已配置的 Codex 路径：${path}。`,
            invalidFallback: (configuredPath, detectedPath)=>`已配置的 Codex 路径无效或不可执行：${configuredPath}。本次测试改用 PATH 中的 Codex CLI：${detectedPath}。建议更新 CODEX_BIN 或清空自定义路径。`,
            failedFallback: (configuredPath, detectedPath)=>`已配置的 Codex 路径启动失败：${configuredPath}。本次测试改用 PATH 中的 Codex CLI：${detectedPath}。建议更新 CODEX_BIN 或清空自定义路径。`
        };
    }
    if (locale === 'zh-TW') {
        return {
            repairHint: '目前儲存的 Codex 路徑不適合繼續使用。',
            useDetected: '使用偵測到的 Codex',
            clearCustom: '清除自訂路徑',
            configuredSuccess: (path)=>`本次測試使用的是已設定的 Codex 路徑：${path}。`,
            invalidFallback: (configuredPath, detectedPath)=>`已設定的 Codex 路徑無效或不可執行：${configuredPath}。本次測試改用 PATH 中的 Codex CLI：${detectedPath}。建議更新 CODEX_BIN 或清除自訂路徑。`,
            failedFallback: (configuredPath, detectedPath)=>`已設定的 Codex 路徑啟動失敗：${configuredPath}。本次測試改用 PATH 中的 Codex CLI：${detectedPath}。建議更新 CODEX_BIN 或清除自訂路徑。`
        };
    }
    if (locale === 'ja') {
        return {
            repairHint: '保存されている Codex のパスは、このテストで使用すべきバイナリではありません。',
            useDetected: '検出された Codex を使用',
            clearCustom: 'カスタムパスをクリア',
            configuredSuccess: (path)=>`このテストでは設定済みの Codex パスを使用しました：${path}。`,
            invalidFallback: (configuredPath, detectedPath)=>`設定された Codex パスが無効か実行できません：${configuredPath}。このテストでは PATH 上の Codex CLI（${detectedPath}）を使用しました。CODEX_BIN を更新するか、カスタムパスをクリアしてください。`,
            failedFallback: (configuredPath, detectedPath)=>`設定された Codex パスの起動に失敗しました：${configuredPath}。このテストは PATH 上の Codex CLI（${detectedPath}）で成功しました。CODEX_BIN を更新するか、カスタムパスをクリアしてください。`
        };
    }
    return {
        repairHint: 'The saved Codex path is not the binary this test should keep using.',
        useDetected: 'Use detected Codex',
        clearCustom: 'Clear custom path',
        configuredSuccess: (path)=>`This test used the configured Codex path: ${path}.`,
        invalidFallback: (configuredPath, detectedPath)=>`Configured Codex path is invalid or not executable: ${configuredPath}. This test used the PATH Codex CLI at ${detectedPath}. Update CODEX_BIN or clear the custom path to use the detected binary.`,
        failedFallback: (configuredPath, detectedPath)=>`Configured Codex path failed: ${configuredPath}. This test succeeded with the PATH Codex CLI at ${detectedPath}. Update CODEX_BIN or clear the custom path to use the detected binary.`
    };
}
function sanitizeHttpsUrl(url) {
    if (!url) return undefined;
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'https:' ? parsed.toString() : undefined;
    } catch  {
        return undefined;
    }
}
const GATEWAY_API_PROTOCOLS = new Set([
    'ollama',
    'senseaudio',
    'aihubmix'
]);
// Providers whose live model fetch IS their full account catalogue, so the
// per-option "from your account" badge and the "Loaded N from your account"
// hint are noise — every option carries the same badge and distinguishes
// nothing. For these we drop the source label and show a plain count instead.
// Add a protocol here when the same applies to another provider.
const ACCOUNT_MODEL_SOURCE_LABEL_HIDDEN = new Set([
    'aihubmix'
]);
function hidesAccountModelSourceLabel(protocol) {
    return ACCOUNT_MODEL_SOURCE_LABEL_HIDDEN.has(protocol);
}
function byokFieldMissingFromIssues(issues) {
    const missingFields = new Set();
    for (const issue of issues){
        if (issue.code === 'api_key_required' || issue.code === 'base_url_required' || issue.code === 'model_required') {
            missingFields.add(issue.field);
        }
    }
    if (missingFields.size === 0) return 'none';
    if (missingFields.size > 1) return 'multiple';
    return Array.from(missingFields)[0] ?? 'none';
}
function byokErrorKindFromIssues(issues) {
    return issues[0]?.code;
}
function byokTrackingTestResult(result) {
    if (result.ok) return 'success';
    return result.kind === 'timeout' ? 'timeout' : 'failed';
}
function testStatusVariant(result) {
    if (result.ok) return 'success';
    if (result.kind === 'rate_limited') return 'warn';
    return 'error';
}
function shouldShowCustomModelInput(modelValue, knownModelIds, explicitCustomMode) {
    return explicitCustomMode || !modelValue || !knownModelIds.includes(modelValue);
}
function canRunProviderConnectionTest(config, options = {}) {
    const requiresApiKey = options.requiresApiKey ?? true;
    return (!requiresApiKey || Boolean(config.apiKey.trim())) && Boolean(config.baseUrl.trim()) && Boolean(config.model.trim());
}
function canFetchProviderModels(config, protocol) {
    return protocol !== 'azure' && protocol !== 'ollama' && Boolean(config.apiKey.trim()) && Boolean(config.baseUrl.trim()) && isValidApiBaseUrl(config.baseUrl);
}
function missingByokConnectionFields(config, options = {}) {
    const requiresApiKey = options.requiresApiKey ?? true;
    const missing = [];
    if (requiresApiKey && !config.apiKey.trim()) missing.push('api_key');
    if (!config.baseUrl.trim()) missing.push('base_url');
    if (!config.model.trim()) missing.push('model');
    return missing;
}
function missingByokModelFetchFields(config, protocol) {
    const missing = [];
    // AIHubMix publishes its catalogue on a public endpoint, so its model list
    // loads without a key (the user shouldn't need to paste a key just to browse
    // models). Every other protocol fetches /v1/models behind the key.
    if (protocol !== 'aihubmix' && !config.apiKey.trim()) missing.push('api_key');
    if (!config.baseUrl.trim()) missing.push('base_url');
    return missing;
}
function providerConnectionTestKey(protocol, config) {
    return [
        protocol,
        config.baseUrl.trim().replace(/\/+$/, ''),
        config.apiKey.trim(),
        config.model.trim(),
        protocol === 'azure' ? config.apiVersion?.trim() ?? '' : ''
    ].join('\n');
}
function isLocalOllamaBaseUrl(baseUrl) {
    try {
        const parsed = new URL(baseUrl);
        const hostname = parsed.hostname.toLowerCase();
        return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
    } catch  {
        return false;
    }
}
function byokProviderRequiresApiKey(protocol, provider, baseUrl) {
    if (provider?.requiresApiKey === false) return false;
    if (protocol === 'ollama' && isLocalOllamaBaseUrl(baseUrl)) return false;
    return true;
}
function byokFirstPartyBaseUrlHint(protocol, baseUrl, protocolProviders) {
    if (protocol !== 'anthropic' && protocol !== 'openai' && protocol !== 'google') {
        return undefined;
    }
    const firstPartyBaseUrl = protocolProviders.find((provider)=>provider.baseUrl.trim())?.baseUrl;
    if (!firstPartyBaseUrl) return undefined;
    const firstPartyHost = byokDraftBaseUrlHost(firstPartyBaseUrl);
    const draftHost = byokDraftBaseUrlHost(baseUrl);
    if (!firstPartyHost || !draftHost) return undefined;
    if (draftHost === firstPartyHost) {
        return {
            baseUrl: firstPartyBaseUrl,
            hostTypo: false
        };
    }
    if (!draftHost.startsWith(firstPartyHost)) return undefined;
    const suffix = draftHost.slice(firstPartyHost.length);
    return suffix && !suffix.startsWith('.') ? {
        baseUrl: firstPartyBaseUrl,
        hostTypo: true
    } : undefined;
}
function byokDraftBaseUrlHost(value) {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    try {
        return new URL(withProtocol).hostname.toLowerCase();
    } catch  {
        return undefined;
    }
}
const API_KEY_CONSOLE_LINKS = {
    anthropic: {
        host: 'console.anthropic.com',
        url: 'https://console.anthropic.com/settings/keys'
    },
    openai: {
        host: 'platform.openai.com',
        url: 'https://platform.openai.com/api-keys'
    },
    azure: {
        host: 'portal.azure.com',
        url: 'https://portal.azure.com/'
    },
    google: {
        host: 'aistudio.google.com',
        url: 'https://aistudio.google.com/apikey'
    },
    ollama: {
        host: 'ollama.com',
        url: 'https://ollama.com/settings/keys'
    },
    senseaudio: {
        host: 'docs.senseaudio.cn',
        url: 'https://docs.senseaudio.cn'
    },
    aihubmix: {
        host: 'aihubmix.com',
        url: 'https://aihubmix.com/?aff=JA1e'
    }
};
const AGENT_SHORT_DESCRIPTIONS = {
    claude: 'Anthropic official CLI',
    codex: 'OpenAI official CLI',
    'cursor-agent': 'Cursor command line',
    gemini: 'Google official CLI',
    opencode: 'Open-source agent CLI',
    qwen: 'Qwen coding CLI',
    copilot: 'GitHub coding CLI',
    devin: 'Cognition terminal CLI',
    kimi: 'Moonshot Kimi CLI',
    qoder: 'Alibaba coding CLI',
    pi: 'Inflection chat CLI',
    kiro: 'Kiro agent CLI',
    kilo: 'Kilo Code CLI',
    vibe: 'Mistral open-source CLI',
    deepseek: 'DeepSeek terminal UI',
    hermes: 'ACP agent CLI',
    'grok-build': 'xAI coding CLI',
    reasonix: 'DeepSeek native coding CLI'
};
function cleanAgentVersionLabel(name, version) {
    if (!version) return '';
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return version.replace(new RegExp(`\\s*\\(${escapedName}\\)\\s*$`, 'i'), '').replace(new RegExp(`\\s+${escapedName}\\s*$`, 'i'), '').trim();
}
function displayAgentName(agent) {
    return agent.id === 'amr' ? 'Open Design AMR' : agent.name;
}
const AGENT_CLI_ENV_FIELDS = [
    {
        agentId: 'claude',
        envKey: 'CLAUDE_CONFIG_DIR',
        labelKey: 'settings.cliEnvClaudeConfigDir',
        placeholder: '~/.claude-2'
    },
    {
        agentId: 'claude',
        envKey: 'ANTHROPIC_BASE_URL',
        labelKey: 'settings.cliEnvClaudeBaseUrl',
        placeholder: 'https://your-proxy.example.com'
    },
    {
        agentId: 'claude',
        envKey: 'ANTHROPIC_API_KEY',
        labelKey: 'settings.cliEnvClaudeApiKey',
        placeholder: 'Paste CLI API key',
        secret: true
    },
    {
        agentId: 'codex',
        envKey: 'CODEX_HOME',
        labelKey: 'settings.cliEnvCodexHome',
        placeholder: '~/.codex-alt'
    },
    {
        agentId: 'codex',
        envKey: 'CODEX_BIN',
        labelKey: 'settings.cliEnvCodexBin',
        placeholder: '/absolute/path/to/codex'
    },
    {
        agentId: 'codex',
        envKey: 'OPENAI_BASE_URL',
        labelKey: 'settings.cliEnvCodexBaseUrl',
        placeholder: 'https://your-proxy.example.com/v1'
    },
    {
        agentId: 'codex',
        envKey: 'CODEX_API_KEY',
        labelKey: 'settings.cliEnvCodexApiKey',
        labelSuffix: 'CODEX_API_KEY',
        placeholder: 'Paste CODEX_API_KEY',
        secret: true
    },
    {
        agentId: 'codex',
        envKey: 'OPENAI_API_KEY',
        labelKey: 'settings.cliEnvCodexApiKey',
        labelSuffix: 'OPENAI_API_KEY',
        placeholder: 'Paste OPENAI_API_KEY',
        secret: true
    }
];
function defaultApiProtocolConfig(protocol) {
    const provider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].find((p)=>p.protocol === protocol);
    return {
        apiKey: '',
        baseUrl: provider?.baseUrl ?? '',
        model: provider?.model ?? '',
        apiVersion: '',
        apiProviderBaseUrl: provider ? provider.baseUrl : null
    };
}
function providerFamilyLabel(provider) {
    return provider.label.replace(/\s+—\s+(Anthropic|OpenAI)$/u, '');
}
function siblingProviderForProtocol(providerBaseUrl, protocol) {
    if (!providerBaseUrl) return null;
    const currentProvider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].find((p)=>p.baseUrl === providerBaseUrl);
    if (!currentProvider) return null;
    const currentFamily = providerFamilyLabel(currentProvider);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].find((p)=>p.protocol === protocol && providerFamilyLabel(p) === currentFamily) ?? null;
}
function nextApiProtocolConfig(config, protocol) {
    const savedConfig = config.apiProtocolConfigs?.[protocol];
    if (savedConfig) return savedConfig;
    const currentConfig = currentApiProtocolConfig(config);
    const siblingProvider = siblingProviderForProtocol(currentConfig.apiProviderBaseUrl, protocol);
    if (siblingProvider) {
        return {
            ...defaultApiProtocolConfig(protocol),
            baseUrl: siblingProvider.baseUrl,
            model: siblingProvider.model,
            apiProviderBaseUrl: siblingProvider.baseUrl
        };
    }
    if (currentConfig.apiProviderBaseUrl === null) {
        return {
            ...currentConfig,
            apiKey: '',
            apiVersion: protocol === 'azure' ? currentConfig.apiVersion : '',
            apiProviderBaseUrl: null
        };
    }
    return {
        ...defaultApiProtocolConfig(protocol)
    };
}
function currentApiProtocolConfig(config) {
    return {
        apiKey: config.apiKey,
        baseUrl: config.baseUrl,
        model: config.model,
        apiVersion: config.apiVersion ?? '',
        apiProviderBaseUrl: config.apiProviderBaseUrl ?? null,
        byokImageModel: config.byokImageModel ?? '',
        byokVideoModel: config.byokVideoModel ?? '',
        byokSpeechModel: config.byokSpeechModel ?? '',
        byokSpeechVoice: config.byokSpeechVoice ?? ''
    };
}
function applyApiProtocolConfig(config, protocol, apiConfig) {
    return {
        ...config,
        apiProtocol: protocol,
        apiKey: apiConfig.apiKey,
        baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFixedOriginBaseUrl"])(protocol, apiConfig.baseUrl),
        model: apiConfig.model,
        apiProviderBaseUrl: apiConfig.apiProviderBaseUrl ?? null,
        apiVersion: protocol === 'azure' ? apiConfig.apiVersion ?? '' : '',
        // byokImageModel applies to the protocols that inject the daemon-side
        // generate_image tool (SenseAudio, AIHubMix) — flipping to another BYOK
        // tab shouldn't carry an image-model choice into, say, the OpenAI form.
        // Mirrors the apiVersion guarding above.
        byokImageModel: protocol === 'senseaudio' || protocol === 'aihubmix' ? apiConfig.byokImageModel ?? '' : '',
        // byokVideoModel only applies to AIHubMix today (the only BYOK chat with a
        // video-model picker; SenseAudio's video tool uses a fixed model).
        byokVideoModel: protocol === 'aihubmix' ? apiConfig.byokVideoModel ?? '' : '',
        // Speech model + voice also AIHubMix-only today.
        byokSpeechModel: protocol === 'aihubmix' ? apiConfig.byokSpeechModel ?? '' : '',
        byokSpeechVoice: protocol === 'aihubmix' ? apiConfig.byokSpeechVoice ?? '' : ''
    };
}
function isValidApiBaseUrl(value) {
    const trimmed = value.trim();
    if (!/^https?:\/\//i.test(trimmed)) return false;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$api$2f$connectionTest$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBaseUrl"])(trimmed);
    return Boolean(result.parsed && !result.error);
}
const AGENT_CLI_AUTH_ENV_KEYS = new Set([
    'ANTHROPIC_API_KEY',
    'ANTHROPIC_AUTH_TOKEN',
    'CODEX_API_KEY',
    'OPENAI_API_KEY'
]);
const AGENT_CLI_BASE_URL_ENV_KEYS = new Set([
    'ANTHROPIC_BASE_URL',
    'OPENAI_BASE_URL'
]);
function updateCurrentApiProtocolConfig(config, patch) {
    const protocol = config.apiProtocol ?? 'anthropic';
    const clearedApiKey = patch.apiKey !== undefined && !patch.apiKey.trim() && Boolean(currentApiProtocolConfig(config).apiKey.trim());
    const defaultModel = defaultApiProtocolConfig(protocol).model;
    const nextApiConfig = {
        ...currentApiProtocolConfig(config),
        ...patch,
        ...clearedApiKey && defaultModel ? {
            model: defaultModel
        } : {}
    };
    return applyApiProtocolConfig({
        ...config,
        apiProtocolConfigs: {
            ...config.apiProtocolConfigs ?? {},
            [protocol]: nextApiConfig
        }
    }, protocol, nextApiConfig);
}
function updateAgentCliEnvValue(config, agentId, envKey, rawValue) {
    const value = rawValue.trim();
    const agentCliEnv = {
        ...config.agentCliEnv ?? {}
    };
    const agentCliEnvIntent = {
        ...config.agentCliEnvIntent ?? {}
    };
    const nextAgentEnv = {
        ...agentCliEnv[agentId] ?? {}
    };
    const nextAgentIntent = {
        ...agentCliEnvIntent[agentId] ?? {}
    };
    if (value) {
        nextAgentEnv[envKey] = value;
    } else {
        delete nextAgentEnv[envKey];
    }
    const hasAuthKey = Object.keys(nextAgentEnv).some((key)=>AGENT_CLI_AUTH_ENV_KEYS.has(key));
    if (AGENT_CLI_AUTH_ENV_KEYS.has(envKey) && value || AGENT_CLI_BASE_URL_ENV_KEYS.has(envKey) && hasAuthKey) {
        nextAgentIntent.apiKeyOverride = true;
    } else if (AGENT_CLI_AUTH_ENV_KEYS.has(envKey) && !hasAuthKey) {
        delete nextAgentIntent.apiKeyOverride;
    }
    if (Object.keys(nextAgentEnv).length > 0) {
        agentCliEnv[agentId] = nextAgentEnv;
    } else {
        delete agentCliEnv[agentId];
    }
    if (Object.keys(nextAgentEnv).length > 0 && Object.keys(nextAgentIntent).length > 0) {
        agentCliEnvIntent[agentId] = nextAgentIntent;
    } else {
        delete agentCliEnvIntent[agentId];
    }
    return {
        ...config,
        agentCliEnv: Object.keys(agentCliEnv).length > 0 ? agentCliEnv : {},
        agentCliEnvIntent: Object.keys(agentCliEnvIntent).length > 0 ? agentCliEnvIntent : {}
    };
}
const AMR_PROFILE_AGENT_ID = 'amr';
const AMR_PROFILE_ENV_KEY = 'OPEN_DESIGN_AMR_PROFILE';
function sameAgentModelChoice(left, right) {
    return (left?.model ?? null) === (right?.model ?? null) && (left?.reasoning ?? null) === (right?.reasoning ?? null);
}
function reconcileAmrProfileEnv(currentAgentCliEnv, nextInitialAgentCliEnv) {
    const nextAmrProfile = nextInitialAgentCliEnv?.[AMR_PROFILE_AGENT_ID]?.[AMR_PROFILE_ENV_KEY];
    const currentAmrProfile = currentAgentCliEnv?.[AMR_PROFILE_AGENT_ID]?.[AMR_PROFILE_ENV_KEY];
    if (currentAmrProfile === nextAmrProfile) {
        return currentAgentCliEnv;
    }
    const nextAgentCliEnv = {
        ...currentAgentCliEnv ?? {}
    };
    const nextAmrEnv = {
        ...nextAgentCliEnv[AMR_PROFILE_AGENT_ID] ?? {}
    };
    if (typeof nextAmrProfile === 'string' && nextAmrProfile.length > 0) {
        nextAmrEnv[AMR_PROFILE_ENV_KEY] = nextAmrProfile;
    } else {
        delete nextAmrEnv[AMR_PROFILE_ENV_KEY];
    }
    if (Object.keys(nextAmrEnv).length > 0) {
        nextAgentCliEnv[AMR_PROFILE_AGENT_ID] = nextAmrEnv;
    } else {
        delete nextAgentCliEnv[AMR_PROFILE_AGENT_ID];
    }
    return Object.keys(nextAgentCliEnv).length > 0 ? nextAgentCliEnv : {};
}
function reconcileAmrModelChoice(currentAgentModels, previousInitial, nextInitial) {
    const previousAmrProfile = previousInitial.agentCliEnv?.[AMR_PROFILE_AGENT_ID]?.[AMR_PROFILE_ENV_KEY];
    const nextAmrProfile = nextInitial.agentCliEnv?.[AMR_PROFILE_AGENT_ID]?.[AMR_PROFILE_ENV_KEY];
    if (previousAmrProfile === nextAmrProfile) return currentAgentModels;
    const previousChoice = previousInitial.agentModels?.[AMR_PROFILE_AGENT_ID];
    const currentChoice = currentAgentModels?.[AMR_PROFILE_AGENT_ID];
    if (!sameAgentModelChoice(currentChoice, previousChoice)) {
        return currentAgentModels;
    }
    const nextChoice = nextInitial.agentModels?.[AMR_PROFILE_AGENT_ID];
    const nextAgentModels = {
        ...currentAgentModels ?? {}
    };
    if (nextChoice) {
        nextAgentModels[AMR_PROFILE_AGENT_ID] = nextChoice;
    } else {
        delete nextAgentModels[AMR_PROFILE_AGENT_ID];
    }
    return Object.keys(nextAgentModels).length > 0 ? nextAgentModels : {};
}
function agentRefreshOptionsForConfig(cfg) {
    return {
        throwOnError: true,
        agentCliEnv: cfg.agentCliEnv ?? {}
    };
}
function apiModelOptionLabel(model, sourceLabel) {
    const baseLabel = model.label && model.label !== model.id ? `${model.label} (${model.id})` : model.id;
    return sourceLabel ? `${baseLabel} · ${sourceLabel}` : baseLabel;
}
function codexPathRepairState(result) {
    if (!result.ok) return null;
    if (result.usedExecutableSource !== 'fallback_invalid' && result.usedExecutableSource !== 'fallback_failed') {
        return null;
    }
    const detectedPath = result.detectedExecutablePath?.trim() || '';
    if (!detectedPath) return null;
    return {
        detectedPath,
        canUseDetected: true
    };
}
function shouldEnableSettingsSave(cfg, activeSection, agents, isBaseUrlValid) {
    if (activeSection !== 'execution') return true;
    if (cfg.mode === 'daemon') {
        return Boolean(cfg.agentId && agents.find((a)=>a.id === cfg.agentId)?.available);
    }
    return Boolean(cfg.apiKey.trim() && cfg.model.trim() && isBaseUrlValid);
}
function sanitizeSettingsSavePayload(cfg, initial, activeSection, agents, isBaseUrlValid) {
    if (activeSection === 'execution') return cfg;
    // Reuse the existing execution-section validity gate so the two helpers
    // share one source of truth for "execution config is complete enough."
    const executionValid = shouldEnableSettingsSave(cfg, 'execution', agents, isBaseUrlValid);
    if (executionValid) return cfg;
    return {
        ...cfg,
        mode: initial.mode,
        apiKey: initial.apiKey,
        apiProtocol: initial.apiProtocol,
        apiVersion: initial.apiVersion,
        apiProtocolConfigs: initial.apiProtocolConfigs,
        apiProviderBaseUrl: initial.apiProviderBaseUrl,
        baseUrl: initial.baseUrl,
        model: initial.model,
        agentId: initial.agentId,
        agentCliEnv: initial.agentCliEnv,
        maxTokens: initial.maxTokens
    };
}
function switchApiProtocolConfig(config, protocol) {
    const currentProtocol = config.apiProtocol ?? 'anthropic';
    const apiProtocolConfigs = {
        ...config.apiProtocolConfigs ?? {},
        [currentProtocol]: currentApiProtocolConfig(config)
    };
    const nextApiConfig = nextApiProtocolConfig({
        ...config,
        apiProtocolConfigs
    }, protocol);
    return applyApiProtocolConfig({
        ...config,
        mode: 'api',
        apiProtocolConfigs
    }, protocol, nextApiConfig);
}
function SettingsDialog({ initial, agents, agentsLoading = false, daemonLive, appVersionInfo, welcome, initialSection = 'execution', initialHighlight = null, onPersist, onPersistComposioKey, composioConfigLoading = false, onClose, onRefreshAgents, onAmrLoginStatusChange, onSkillsRefresh, daemonMediaProviders, daemonMediaProvidersFetchState = 'idle', mediaProvidersNotice, onReloadMediaProviders, onProjectsRefresh, onSkillsChanged, onDesignSystemsChanged, onDesignSystemImportRebuildJob, providerModelsCache: sharedProviderModelsCache, onProviderModelsCacheChange }) {
    _s();
    const { t, locale, setLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // Backfill the fixed-origin base URL on mount too, so a config persisted with
    // an empty baseUrl (e.g. selected AIHubMix before this resolution existed)
    // isn't stuck blocking the live model fetch until the user re-selects the tab.
    const [cfg, setCfg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsDialog.useState": ()=>({
                ...initial,
                baseUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFixedOriginBaseUrl"])(initial.apiProtocol ?? 'anthropic', initial.baseUrl)
            })
    }["SettingsDialog.useState"]);
    const [maxTokensInput, setMaxTokensInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial.maxTokens == null ? '' : String(initial.maxTokens));
    const [pendingMediaProviderEditIds, setPendingMediaProviderEditIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsDialog.useState": ()=>new Set()
    }["SettingsDialog.useState"]);
    const previousInitialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initial);
    const lastSavedAppearanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        theme: initial.theme ?? 'system',
        accentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAccentColor"])(initial.accentColor)
    });
    // settings_view — fire on dialog open and on every section switch so the
    // configuration funnel can see which section the user spent time in.
    // The fire is keyed on section so a section bounce (open → switch →
    // close) emits one event per surface.
    const lastViewSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            lastSavedAppearanceRef.current = {
                theme: initial.theme ?? 'system',
                accentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAccentColor"])(initial.accentColor)
            };
        }
    }["SettingsDialog.useEffect"], [
        initial.theme,
        initial.accentColor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            const previousInitial = previousInitialRef.current;
            setCfg({
                "SettingsDialog.useEffect": (current)=>{
                    const nextAgentCliEnv = reconcileAmrProfileEnv(current.agentCliEnv, initial.agentCliEnv);
                    const nextAgentModels = reconcileAmrModelChoice(current.agentModels, previousInitial, initial);
                    if (nextAgentCliEnv === current.agentCliEnv && nextAgentModels === current.agentModels) {
                        return current;
                    }
                    return {
                        ...current,
                        agentCliEnv: nextAgentCliEnv,
                        agentModels: nextAgentModels
                    };
                }
            }["SettingsDialog.useEffect"]);
            autosaveLastSavedRef.current = {
                ...autosaveLastSavedRef.current,
                agentCliEnv: reconcileAmrProfileEnv(autosaveLastSavedRef.current.agentCliEnv, initial.agentCliEnv),
                agentModels: reconcileAmrModelChoice(autosaveLastSavedRef.current.agentModels, previousInitial, initial)
            };
            previousInitialRef.current = initial;
        }
    }["SettingsDialog.useEffect"], [
        initial
    ]);
    // Revert the live theme preview to the most recently persisted appearance.
    // That is the initial appearance until autosave succeeds; after autosave,
    // closing Settings must not roll the document back to stale colors.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SettingsDialog.useLayoutEffect": ()=>{
            return ({
                "SettingsDialog.useLayoutEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAppearanceToDocument"])(lastSavedAppearanceRef.current);
                }
            })["SettingsDialog.useLayoutEffect"];
        }
    }["SettingsDialog.useLayoutEffect"], []);
    const [showApiKey, setShowApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSection);
    const [settingsSidebarCollapsed, setSettingsSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsFullscreen, setSettingsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Scroll the right-hand content pane back to the top whenever the user
    // picks a different settings section. Without this, switching from a
    // long section the user had scrolled (e.g. Library) into a short one
    // (About) keeps the previous scrollTop, so the new section's header
    // can land out of view and the panel reads as half-loaded. Issue #634.
    const settingsContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // AMR-card focus, driven by the failed-run nudge (`initialHighlight==='amr'`).
    const amrCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Card pulse: a brief attention flash that auto-clears after a few seconds.
    const [amrHighlightActive, setAmrHighlightActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Coachmark: persists (unlike the card pulse) until the real pointer reaches
    // the authorize button — so it won't vanish while the user is still moving
    // toward it.
    const [amrCoachmarkArmed, setAmrCoachmarkArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // The fake-cursor coachmark dismisses as soon as the real pointer reaches the
    // authorize button — once the user has found it, the hint has done its job.
    const [amrCoachmarkDismissed, setAmrCoachmarkDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agentRescanRunning, setAgentRescanRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agentRescanNotice, setAgentRescanNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [agentTestState, setAgentTestState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    const [amrCardStatus, setAmrCardStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [amrCardStatusReady, setAmrCardStatusReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredAgentCardId, setHoveredAgentCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [providerTestState, setProviderTestState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            onAmrLoginStatusChange?.(amrCardStatus);
        }
    }["SettingsDialog.useEffect"], [
        amrCardStatus,
        onAmrLoginStatusChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            const hasAmrAgent = agents.some({
                "SettingsDialog.useEffect.hasAmrAgent": (agent)=>agent.id === 'amr' && agent.available
            }["SettingsDialog.useEffect.hasAmrAgent"]);
            if (!hasAmrAgent) {
                setAmrCardStatus(null);
                setAmrCardStatusReady(false);
                setHoveredAgentCardId(null);
                return;
            }
            let cancelled = false;
            // Refetch in place on every agents refresh, but do NOT flip
            // `amrCardStatusReady` back to false here. The post-sign-in model-catalog
            // rescan loop hands down a fresh `agents` array on each retry; tearing the
            // pill down to the hidden `--placeholder` between the reset and the async
            // status read made the Sign out action blink out and back on every tick.
            // Readiness latches true after the first read and only resets when AMR
            // becomes unavailable (handled above).
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])().then({
                "SettingsDialog.useEffect": (next)=>{
                    if (!cancelled) {
                        setAmrCardStatus(next);
                        setAmrCardStatusReady(true);
                    }
                }
            }["SettingsDialog.useEffect"]);
            return ({
                "SettingsDialog.useEffect": ()=>{
                    cancelled = true;
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        agents
    ]);
    // Reconcile AMR sign-in state whenever the user returns to the window. The
    // vela device-login flow completes in an external browser / AMR console; if
    // the in-pill poll has already timed out (or the login finished fully
    // out-of-band), the card would otherwise keep showing the stale signed-out
    // state until Settings is closed and reopened. Refetching on focus /
    // visibility keeps the signed-in state, email, and Sign out action live.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            const hasAmrAgent = agents.some({
                "SettingsDialog.useEffect.hasAmrAgent": (agent)=>agent.id === 'amr' && agent.available
            }["SettingsDialog.useEffect.hasAmrAgent"]);
            if (!hasAmrAgent) return;
            let cancelled = false;
            // Passive read only. Push the daemon's current status down into the card;
            // the pill mirrors it via `initialStatus` (and clears any stale login error
            // when it sees a signed-in status). Do NOT republish the login-state-change
            // event here — that restarts the pill's poll/pending machine on every focus
            // and, while the external browser is stealing and returning focus during a
            // login, ping-pongs the action between "Signing in…" and "Authorize".
            const resyncAmrStatus = {
                "SettingsDialog.useEffect.resyncAmrStatus": ()=>{
                    if (document.visibilityState === 'hidden') return;
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])().then({
                        "SettingsDialog.useEffect.resyncAmrStatus": (next)=>{
                            if (cancelled || !next) return;
                            setAmrCardStatus(next);
                        }
                    }["SettingsDialog.useEffect.resyncAmrStatus"]);
                }
            }["SettingsDialog.useEffect.resyncAmrStatus"];
            window.addEventListener('focus', resyncAmrStatus);
            document.addEventListener('visibilitychange', resyncAmrStatus);
            return ({
                "SettingsDialog.useEffect": ()=>{
                    cancelled = true;
                    window.removeEventListener('focus', resyncAmrStatus);
                    document.removeEventListener('visibilitychange', resyncAmrStatus);
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        agents
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            const hasAmrAgent = agents.some({
                "SettingsDialog.useEffect.hasAmrAgent": (agent)=>agent.id === 'amr' && agent.available
            }["SettingsDialog.useEffect.hasAmrAgent"]);
            if (!hasAmrAgent) return;
            let cancelled = false;
            const resyncAmrStatus = {
                "SettingsDialog.useEffect.resyncAmrStatus": (event)=>{
                    const reason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrLoginStatusEventReason"])(event);
                    if (reason === 'login-canceled') return;
                    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])().then({
                        "SettingsDialog.useEffect.resyncAmrStatus": (next)=>{
                            if (cancelled || !next) return;
                            setAmrCardStatus(next);
                            setAmrCardStatusReady(true);
                        }
                    }["SettingsDialog.useEffect.resyncAmrStatus"]);
                }
            }["SettingsDialog.useEffect.resyncAmrStatus"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_STATUS_EVENT"], resyncAmrStatus);
            return ({
                "SettingsDialog.useEffect": ()=>{
                    cancelled = true;
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_STATUS_EVENT"], resyncAmrStatus);
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        agents
    ]);
    const [byokPreconditionNotice, setByokPreconditionNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [providerModelsState, setProviderModelsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    const [localProviderModelsCache, setLocalProviderModelsCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const hasSharedProviderModelsCache = Boolean(sharedProviderModelsCache) && Boolean(onProviderModelsCacheChange);
    const activeProviderModelsCache = hasSharedProviderModelsCache ? sharedProviderModelsCache : localProviderModelsCache;
    const activeSetProviderModelsCache = hasSharedProviderModelsCache ? onProviderModelsCacheChange : setLocalProviderModelsCache;
    const [providerModelsCommittedKey, setProviderModelsCommittedKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsDialog.useState": ()=>{
            const protocol = initial.apiProtocol ?? 'anthropic';
            if (initial.mode !== 'api' || protocol === 'azure' || protocol === 'ollama' || missingByokModelFetchFields(initial, protocol).length > 0 || !isValidApiBaseUrl(initial.baseUrl)) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerModelsCacheKey"])(protocol, initial.baseUrl, initial.apiKey, initial.apiVersion ?? '');
        }
    }["SettingsDialog.useState"]);
    const agentTestAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const providerTestAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const providerModelsAbortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingAgentInstallRescanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Guards the AMR catalog-chase loop so concurrent renders can't start it
    // twice (see the re-detect effect below).
    const amrRescanInFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const agentTestRevisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const providerTestRevisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const providerModelsRevisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const providerTestFirstResetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const providerModelsFirstResetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const deferAfterKeyCleanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const providerAutoTestKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const byokLastUnsuccessfulTestKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const apiKeyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const baseUrlInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const customModelInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const focusByokRequiredFieldAfterProtocolSwitchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const visualStabilityMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])();
    // Tracks whether the current BYOK model value came from an explicit user
    // pick (combobox selection or custom entry) rather than an auto-populated
    // provider preset. The account-model auto-switch must never overwrite a
    // deliberate choice, even when that choice equals the provider preset id.
    const apiModelUserSelectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [apiModelCustomEditing, setApiModelCustomEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agentCustomModelIds, setAgentCustomModelIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsDialog.useState": ()=>new Set()
    }["SettingsDialog.useState"]);
    const [versionChecking, setVersionChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aboutToast, setAboutToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleInstallLatest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SettingsDialog.useCallback[handleInstallLatest]": async ()=>{
            if (versionChecking || !appVersionInfo) return;
            setVersionChecking(true);
            try {
                const release = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLatestGithubReleaseInfo"])();
                const latestTag = (release?.tagName ?? '').replace(/^v/, '');
                if (release?.stale !== true && latestTag && latestTag === appVersionInfo.version) {
                    setAboutToast(t('settings.alreadyLatest'));
                    return;
                }
            } catch  {
            // network error — fall through to open releases page
            } finally{
                setVersionChecking(false);
            }
            window.open('https://github.com/nexu-io/open-design/releases', '_blank', 'noopener,noreferrer');
        }
    }["SettingsDialog.useCallback[handleInstallLatest]"], [
        versionChecking,
        appVersionInfo,
        t
    ]);
    // Precise inverse of App.handleCompleteOnboarding: flip
    // onboardingCompleted back to false, mirror it to localStorage and the
    // daemon through the same config-persist path, then route the user into
    // the first-run flow so they can replay setup (including brand extraction).
    const handleResetOnboarding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SettingsDialog.useCallback[handleResetOnboarding]": ()=>{
            const next = {
                ...cfg,
                onboardingCompleted: false
            };
            setCfg(next);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveConfig"])(next);
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(next);
            onClose();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                kind: 'home',
                view: 'onboarding'
            });
        }
    }["SettingsDialog.useCallback[handleResetOnboarding]"], [
        cfg,
        onClose
    ]);
    // Imperative handle for the External MCP section. The dialog footer Save
    // routes through this when the MCP tab is active so the user can press the
    // single Save button at the bottom instead of hunting for the inner one.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            setActiveSection(initialSection);
        }
    }["SettingsDialog.useEffect"], [
        initialSection
    ]);
    // settings_view — fires whenever the active section changes (and once on
    // mount). Keying the fire on a section+section-string lets us dedupe
    // accidental double-renders while still capturing genuine tab switches.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (lastViewSectionRef.current === activeSection) return;
            lastViewSectionRef.current = activeSection;
            // v2 settings_view collapses to `{ page=settings, area }`; the
            // execution_mode / has_available_cli / selected_cli_id signal that v1
            // tagged onto every view now lives in the configure-state global
            // properties (registered once and inherited by every event).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsView"])(analytics.track, {
                page_name: 'settings',
                area: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsSectionToTracking"])(activeSection)
            });
        }
    }["SettingsDialog.useEffect"], [
        activeSection,
        analytics.track
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            const el = settingsContentRef.current;
            if (el) el.scrollTop = 0;
        }
    }["SettingsDialog.useEffect"], [
        activeSection
    ]);
    // One-shot AMR-card focus from the failed-run nudge: scroll the card into
    // view (on the next frame, so it wins over the section's scrollTop reset
    // above) and play a brief highlight + arm the sign-in coachmark. The
    // coachmark only actually shows when the AMR card reports a signed-out state
    // (`amrCardStatus?.loggedIn === false`). If the execution pane is in API mode
    // the AMR card is absent and this no-ops.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (initialHighlight !== 'amr' || activeSection !== 'execution') return;
            let cancelled = false;
            const raf = requestAnimationFrame({
                "SettingsDialog.useEffect.raf": ()=>{
                    if (cancelled) return;
                    amrCardRef.current?.scrollIntoView({
                        block: 'center',
                        behavior: 'smooth'
                    });
                    setAmrCoachmarkDismissed(false);
                    setAmrHighlightActive(true);
                    setAmrCoachmarkArmed(true);
                }
            }["SettingsDialog.useEffect.raf"]);
            // Only the card pulse auto-clears; the coachmark persists until the pointer
            // reaches the authorize button (or the user signs in).
            const clear = setTimeout({
                "SettingsDialog.useEffect.clear": ()=>{
                    if (!cancelled) setAmrHighlightActive(false);
                }
            }["SettingsDialog.useEffect.clear"], 3200);
            return ({
                "SettingsDialog.useEffect": ()=>{
                    cancelled = true;
                    cancelAnimationFrame(raf);
                    clearTimeout(clear);
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        initialHighlight,
        activeSection
    ]);
    const selectedMemoryChatAgent = cfg.mode === 'daemon' && cfg.agentId ? agents.find((agent)=>agent.id === cfg.agentId) ?? null : null;
    const selectedMemoryChatModel = cfg.mode === 'daemon' && cfg.agentId ? cfg.agentModels?.[cfg.agentId]?.model ?? selectedMemoryChatAgent?.models?.[0]?.id ?? null : null;
    const agentChoiceForTest = cfg.mode === 'daemon' && cfg.agentId ? cfg.agentModels?.[cfg.agentId] : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            agentTestRevisionRef.current += 1;
            setAgentTestState({
                "SettingsDialog.useEffect": (state)=>state.status === 'running' ? state : {
                        status: 'idle'
                    }
            }["SettingsDialog.useEffect"]);
        }
    }["SettingsDialog.useEffect"], [
        cfg.agentId,
        agentChoiceForTest?.model,
        agentChoiceForTest?.reasoning,
        cfg.agentCliEnv
    ]);
    // Rescan notices are list-level feedback for a one-shot action and
    // shouldn't linger in the content stream. After 6s, fade them out so
    // repeated Rescan clicks don't pile up; the next click resets the
    // notice immediately, so this only affects "user moved on" cases.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (!agentRescanNotice) return;
            const id = window.setTimeout({
                "SettingsDialog.useEffect.id": ()=>setAgentRescanNotice(null)
            }["SettingsDialog.useEffect.id"], 6000);
            return ({
                "SettingsDialog.useEffect": ()=>window.clearTimeout(id)
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        agentRescanNotice
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (providerTestFirstResetRef.current) {
                providerTestFirstResetRef.current = false;
                return;
            }
            providerTestRevisionRef.current += 1;
            providerAutoTestKeyRef.current = null;
            setByokPreconditionNotice(null);
            setProviderTestState({
                "SettingsDialog.useEffect": (state)=>state.status === 'running' ? state : {
                        status: 'idle'
                    }
            }["SettingsDialog.useEffect"]);
        }
    }["SettingsDialog.useEffect"], [
        cfg.apiProtocol,
        cfg.apiKey,
        cfg.baseUrl,
        cfg.model,
        cfg.apiVersion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (providerModelsFirstResetRef.current) {
                providerModelsFirstResetRef.current = false;
                return;
            }
            providerModelsRevisionRef.current += 1;
            providerModelsAbortRef.current?.abort();
            providerModelsAbortRef.current = null;
            setProviderModelsCommittedKey(null);
            setByokPreconditionNotice(null);
            setProviderModelsState({
                status: 'idle'
            });
        }
    }["SettingsDialog.useEffect"], [
        cfg.apiProtocol,
        cfg.apiKey,
        cfg.baseUrl,
        cfg.apiVersion
    ]);
    // Releasing the abort controllers on unmount avoids the "setState after
    // unmount" warning if the dialog closes while a test is still running.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            return ({
                "SettingsDialog.useEffect": ()=>{
                    agentTestAbortRef.current?.abort();
                    providerTestAbortRef.current?.abort();
                    providerModelsAbortRef.current?.abort();
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], []);
    const installedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[installedCount]": ()=>agents.filter({
                "SettingsDialog.useMemo[installedCount]": (a)=>a.available
            }["SettingsDialog.useMemo[installedCount]"]).length
    }["SettingsDialog.useMemo[installedCount]"], [
        agents
    ]);
    const setMode = (mode)=>{
        setCfg((c)=>{
            const modeBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executionModeToTracking"])(c.mode);
            const modeAfter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executionModeToTracking"])(mode);
            if (modeBefore !== modeAfter) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsExecutionModeTabClick"])(analytics.track, {
                    page_name: 'settings',
                    area: 'configure_execution_mode',
                    element: 'execution_mode_tab',
                    action: 'switch_execution_mode',
                    mode_before: modeBefore,
                    mode_after: modeAfter
                });
            }
            return {
                ...c,
                mode
            };
        });
    };
    const setApiProtocol = (protocol)=>{
        setApiModelCustomEditing(false);
        apiModelUserSelectedRef.current = false;
        focusByokRequiredFieldAfterProtocolSwitchRef.current = true;
        setCfg((c)=>switchApiProtocolConfig(c, protocol));
    };
    const updateApiConfig = (patch)=>setCfg((c)=>updateCurrentApiProtocolConfig(c, patch));
    const updateMaxTokensInput = (raw)=>{
        setMaxTokensInput(raw);
        const trimmed = raw.trim();
        if (trimmed === '') {
            setCfg((c)=>({
                    ...c,
                    maxTokens: undefined
                }));
            return;
        }
        const value = Number(trimmed);
        const nextMaxTokens = Number.isInteger(value) && value >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_MAX_TOKENS"] && value <= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_MAX_TOKENS"] ? value : undefined;
        setCfg((c)=>({
                ...c,
                maxTokens: nextMaxTokens
            }));
    };
    const markAgentInstallIntent = ()=>{
        pendingAgentInstallRescanRef.current = true;
    };
    const handleRefreshAgents = async ()=>{
        if (agentRescanRunning) return;
        setAgentRescanRunning(true);
        setAgentRescanNotice(null);
        try {
            const refreshed = await onRefreshAgents(agentRefreshOptionsForConfig(cfg));
            const nextAgents = Array.isArray(refreshed) ? refreshed : agents;
            setAgentRescanNotice({
                kind: 'success',
                count: nextAgents.filter((a)=>a.available).length
            });
        } catch  {
            setAgentRescanNotice({
                kind: 'error'
            });
        } finally{
            setAgentRescanRunning(false);
        }
    };
    const attributedAmrSettingsUrl = (url, sourceDetail)=>{
        const attribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, sourceDetail, new Date(), {
            metricsConsent: cfg.telemetry?.metrics === true
        });
        const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrHandoffDeviceId"])({
            metricsConsent: cfg.telemetry?.metrics === true,
            resolvedDeviceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedDeviceId"])(),
            installationId: cfg.installationId
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributedAmrUrl"])(url, attribution, deviceId);
    };
    const openAgentFixUrl = (url, amrEntrySourceDetail)=>{
        const href = sanitizeHttpsUrl(url);
        if (!href) return;
        markAgentInstallIntent();
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openExternalUrl"])(amrEntrySourceDetail ? attributedAmrSettingsUrl(href, amrEntrySourceDetail) : href);
    };
    const diagnosticHandlersForAgent = (agent)=>{
        const docsUrl = sanitizeHttpsUrl(agent.docsUrl);
        const installUrl = sanitizeHttpsUrl(agent.installUrl);
        return {
            onRescan: ()=>void handleRefreshAgents(),
            ...docsUrl ? {
                onOpenDocs: ()=>openAgentFixUrl(docsUrl)
            } : {},
            ...installUrl ? {
                onOpenInstall: ()=>openAgentFixUrl(installUrl, agent.id === 'amr' ? 'settings_amr_install' : undefined)
            } : {}
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            const handleReturnToSettings = {
                "SettingsDialog.useEffect.handleReturnToSettings": ()=>{
                    if (!pendingAgentInstallRescanRef.current || agentRescanRunning || document.visibilityState === 'hidden') {
                        return;
                    }
                    pendingAgentInstallRescanRef.current = false;
                    void handleRefreshAgents();
                }
            }["SettingsDialog.useEffect.handleReturnToSettings"];
            document.addEventListener('visibilitychange', handleReturnToSettings);
            window.addEventListener('focus', handleReturnToSettings);
            return ({
                "SettingsDialog.useEffect": ()=>{
                    document.removeEventListener('visibilitychange', handleReturnToSettings);
                    window.removeEventListener('focus', handleReturnToSettings);
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        agentRescanRunning,
        handleRefreshAgents
    ]);
    // Chase AMR's live model catalog whenever the user is signed in but the
    // model list hasn't arrived yet. AMR is detected at app start (often while
    // signed out, so it comes back with an empty, fail-closed list), and the
    // live `vela models` catalog only becomes fetchable once the credential
    // lands — and can lag the credential write by a beat. We must cover every
    // way Settings ends up "signed in + empty", not just an in-Settings
    // sign-in edge: onboarding signs in and re-detects exactly once, so if that
    // single call lands during the propagation window Settings later mounts
    // already signed in with an empty list. Keying on `loggedIn === true` +
    // "AMR has no models" handles both; the picker shows its loading state
    // (see renderAgentModelConfig) until the catalog fills in.
    //
    // `onRefreshAgents` / `agents` are read through refs so re-detecting (which
    // changes their identity) can't tear the retry loop down mid-flight — that
    // is what made the loading row flash and vanish before the catalog arrived.
    // The in-flight ref keeps a single loop running across renders.
    const onRefreshAgentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onRefreshAgents);
    onRefreshAgentsRef.current = onRefreshAgents;
    const agentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(agents);
    agentsRef.current = agents;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (amrCardStatus?.loggedIn !== true) return;
            const amr = agentsRef.current.find({
                "SettingsDialog.useEffect.amr": (agent)=>agent.id === 'amr'
            }["SettingsDialog.useEffect.amr"]);
            if (!amr || (amr.models?.length ?? 0) > 0) return;
            if (amrRescanInFlightRef.current) return;
            amrRescanInFlightRef.current = true;
            let cancelled = false;
            void ({
                "SettingsDialog.useEffect": async ()=>{
                    try {
                        for(let attempt = 0; attempt < AMR_SIGN_IN_RESCAN_ATTEMPTS && !cancelled; attempt += 1){
                            let next;
                            try {
                                next = await onRefreshAgentsRef.current();
                            } catch  {
                                return;
                            }
                            if (cancelled) return;
                            const detected = Array.isArray(next) ? next : [];
                            const refreshed = detected.find({
                                "SettingsDialog.useEffect.refreshed": (agent)=>agent.id === 'amr'
                            }["SettingsDialog.useEffect.refreshed"]);
                            // Stop once the live catalog has caught up (or AMR vanished); a
                            // still-empty list means vela hasn't published the catalog yet, so
                            // retry.
                            if (!refreshed || (refreshed.models?.length ?? 0) > 0) return;
                            await new Promise({
                                "SettingsDialog.useEffect": (resolve)=>{
                                    setTimeout(resolve, AMR_SIGN_IN_RESCAN_RETRY_MS);
                                }
                            }["SettingsDialog.useEffect"]);
                        }
                    } finally{
                        amrRescanInFlightRef.current = false;
                    }
                }
            })["SettingsDialog.useEffect"]();
            return ({
                "SettingsDialog.useEffect": ()=>{
                    cancelled = true;
                    amrRescanInFlightRef.current = false;
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        amrCardStatus?.loggedIn
    ]);
    const handleTestAgent = async ()=>{
        if (agentTestState.status === 'running') {
            return;
        }
        const selected = agents.find((a)=>a.id === cfg.agentId && a.available);
        if (!selected) return;
        const choice = cfg.agentModels?.[selected.id] ?? {};
        const controller = new AbortController();
        const revision = agentTestRevisionRef.current;
        agentTestAbortRef.current = controller;
        setAgentTestState({
            status: 'running'
        });
        const startedAt = performance.now();
        const cliProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentIdToTracking"])(selected.id);
        const clearIfStale = ()=>{
            if (agentTestAbortRef.current === controller) {
                setAgentTestState({
                    status: 'idle'
                });
            }
        };
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$connection$2d$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testAgent"])({
                agentId: selected.id,
                model: choice.model || undefined,
                reasoning: choice.reasoning || undefined,
                agentCliEnv: cfg.agentCliEnv ?? {}
            }, controller.signal);
            if (controller.signal.aborted) return;
            if (agentTestRevisionRef.current !== revision) {
                clearIfStale();
                return;
            }
            setAgentTestState({
                status: 'done',
                result
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsCliTestResult"])(analytics.track, {
                page_name: 'settings',
                area: 'configure_execution_mode',
                cli_provider_id: cliProviderId,
                result: result.ok ? 'success' : 'failed',
                ...result.ok ? {} : {
                    error_code: result.kind || 'UNKNOWN'
                },
                duration_ms: Math.round(performance.now() - startedAt)
            });
        } catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError') return;
            if (agentTestRevisionRef.current !== revision) {
                clearIfStale();
                return;
            }
            setAgentTestState({
                status: 'done',
                result: {
                    ok: false,
                    kind: 'unknown',
                    latencyMs: 0,
                    model: choice.model || 'default',
                    detail: err instanceof Error ? err.message : 'Test request failed'
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsCliTestResult"])(analytics.track, {
                page_name: 'settings',
                area: 'configure_execution_mode',
                cli_provider_id: cliProviderId,
                result: 'failed',
                error_code: err instanceof Error ? err.name : 'UNKNOWN',
                duration_ms: Math.round(performance.now() - startedAt)
            });
        } finally{
            if (agentTestAbortRef.current === controller) {
                agentTestAbortRef.current = null;
            }
        }
    };
    const handleTestProvider = async (options = {})=>{
        if (providerTestState.status === 'running') {
            return;
        }
        const blockingIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokDraftValidation);
        const hasFirstPartyHostTypo = Boolean(byokFirstPartyBaseUrl?.hostTypo);
        const currentConfigKey = providerConnectionTestKey(apiProtocol, cfg);
        const lastUnsuccessfulConfigKey = byokLastUnsuccessfulTestKeyRef.current;
        const configKeyChanged = lastUnsuccessfulConfigKey !== null && lastUnsuccessfulConfigKey !== currentConfigKey;
        if (hasFirstPartyHostTypo) {
            if (!options.silentPreconditions) {
                setByokPreconditionNotice({
                    action: 'test',
                    field: 'base_url',
                    message: t('settings.testInvalidBaseUrl')
                });
                focusByokRequiredField('base_url');
            }
            byokLastUnsuccessfulTestKeyRef.current = currentConfigKey;
            return;
        }
        if (blockingIssues.length > 0) {
            if (options.silentPreconditions) {
                return;
            }
            showByokDraftValidationNotice('test', byokDraftValidation);
            const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
            if (byokProviderId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokTestResult"])(analytics.track, {
                    page_name: 'settings',
                    area: 'execution_model',
                    provider_id: byokProviderId,
                    result: 'failed',
                    error_code: byokErrorKindFromIssues(blockingIssues),
                    error_kind: byokErrorKindFromIssues(blockingIssues),
                    field_missing: byokFieldMissingFromIssues(blockingIssues),
                    config_key_changed: configKeyChanged,
                    success_after_action: false,
                    duration_ms: 0
                });
            }
            byokLastUnsuccessfulTestKeyRef.current = currentConfigKey;
            return;
        }
        const controller = new AbortController();
        const revision = providerTestRevisionRef.current;
        providerTestAbortRef.current = controller;
        setProviderTestState({
            status: 'running'
        });
        const startedAt = performance.now();
        const clearIfStale = ()=>{
            if (providerTestAbortRef.current === controller) {
                setProviderTestState({
                    status: 'idle'
                });
            }
        };
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$connection$2d$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testApiProvider"])({
                protocol: apiProtocol,
                baseUrl: cfg.baseUrl,
                apiKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanByokApiKey"])(cfg.apiKey),
                model: cfg.model,
                apiVersion: apiProtocol === 'azure' ? cfg.apiVersion?.trim() || undefined : undefined
            }, controller.signal);
            if (controller.signal.aborted) return;
            if (providerTestRevisionRef.current !== revision) {
                clearIfStale();
                return;
            }
            setProviderTestState({
                status: 'done',
                result
            });
            if (!result.ok && result.kind === 'not_found_model') {
                focusByokRequiredField('model');
            }
            const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
            if (byokProviderId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokTestResult"])(analytics.track, {
                    page_name: 'settings',
                    area: 'execution_model',
                    provider_id: byokProviderId,
                    result: byokTrackingTestResult(result),
                    ...result.ok ? {} : {
                        error_code: result.kind || 'UNKNOWN'
                    },
                    ...result.ok ? {} : {
                        error_kind: result.kind || 'UNKNOWN'
                    },
                    field_missing: 'none',
                    config_key_changed: configKeyChanged,
                    success_after_action: result.ok && configKeyChanged,
                    duration_ms: Math.round(performance.now() - startedAt)
                });
            }
            byokLastUnsuccessfulTestKeyRef.current = result.ok ? null : currentConfigKey;
        } catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError') return;
            if (providerTestRevisionRef.current !== revision) {
                clearIfStale();
                return;
            }
            setProviderTestState({
                status: 'done',
                result: {
                    ok: false,
                    kind: 'unknown',
                    latencyMs: 0,
                    model: cfg.model,
                    detail: err instanceof Error ? err.message : 'Test request failed'
                }
            });
            const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
            if (byokProviderId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokTestResult"])(analytics.track, {
                    page_name: 'settings',
                    area: 'execution_model',
                    provider_id: byokProviderId,
                    result: 'failed',
                    error_code: err instanceof Error ? err.name : 'UNKNOWN',
                    error_kind: err instanceof Error ? err.name : 'UNKNOWN',
                    field_missing: 'none',
                    config_key_changed: configKeyChanged,
                    success_after_action: false,
                    duration_ms: Math.round(performance.now() - startedAt)
                });
            }
            byokLastUnsuccessfulTestKeyRef.current = currentConfigKey;
        } finally{
            if (providerTestAbortRef.current === controller) {
                providerTestAbortRef.current = null;
            }
        }
    };
    const handleAutoTestProvider = ()=>{
        if (providerTestState.status === 'running') {
            return;
        }
        if (byokFirstPartyBaseUrl?.hostTypo) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokDraftValidation).length > 0) {
            return;
        }
        const key = providerConnectionTestKey(apiProtocol, cfg);
        if (providerAutoTestKeyRef.current === key) {
            return;
        }
        providerAutoTestKeyRef.current = key;
        void handleTestProvider({
            silentPreconditions: true
        });
    };
    const handleFetchProviderModels = async (options = {})=>{
        const trigger = options.trigger ?? (options.silent ? 'auto' : 'manual');
        const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
        const trackModelsFetchResult = (props, source = 'network')=>{
            if (!byokProviderId) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokModelsFetchResult"])(analytics.track, {
                page_name: 'settings',
                area: 'configure_execution_mode_byok',
                provider_id: byokProviderId,
                trigger,
                source,
                ...props
            });
        };
        if (providerModelsState.status === 'running') {
            return;
        }
        if (apiProtocol === 'azure') {
            trackModelsFetchResult({
                result: 'failed',
                error_code: 'unsupported_azure',
                error_kind: 'unsupported_azure',
                duration_ms: 0
            });
            if (!options.silent) {
                setByokPreconditionNotice({
                    action: 'test',
                    message: t('settings.fetchModelsUnsupportedAzure')
                });
            }
            return;
        }
        if (apiProtocol === 'ollama') {
            trackModelsFetchResult({
                result: 'failed',
                error_code: 'unsupported_ollama',
                error_kind: 'unsupported_ollama',
                duration_ms: 0
            });
            if (!options.silent) {
                setByokPreconditionNotice({
                    action: 'test',
                    message: t('settings.fetchModelsUnsupportedOllama')
                });
            }
            return;
        }
        const modelFetchBlockingIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokModelFetchDraftValidation);
        if (byokFirstPartyBaseUrl?.hostTypo) {
            if (!options.silent) {
                setByokPreconditionNotice({
                    action: 'test',
                    field: 'base_url',
                    message: t('settings.testInvalidBaseUrl')
                });
                focusByokRequiredField('base_url');
            }
            return;
        }
        if (modelFetchBlockingIssues.length > 0) {
            trackModelsFetchResult({
                result: 'failed',
                error_code: byokErrorKindFromIssues(modelFetchBlockingIssues),
                error_kind: byokErrorKindFromIssues(modelFetchBlockingIssues),
                field_missing: byokFieldMissingFromIssues(modelFetchBlockingIssues),
                duration_ms: 0
            });
            if (!options.silent) {
                showByokDraftValidationNotice('test', byokModelFetchDraftValidation);
            }
            return;
        }
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerModelsCacheKey"])(apiProtocol, cfg.baseUrl, cfg.apiKey, cfg.apiVersion ?? '');
        const cachedModels = activeProviderModelsCache[cacheKey];
        if (cachedModels) {
            trackModelsFetchResult({
                result: 'success',
                model_count: cachedModels.length,
                duration_ms: 0
            }, 'cache');
            setProviderModelsState({
                status: 'done',
                cacheKey,
                result: {
                    ok: true,
                    kind: 'success',
                    latencyMs: 0,
                    models: cachedModels
                }
            });
            return;
        }
        const controller = new AbortController();
        const revision = providerModelsRevisionRef.current;
        providerModelsAbortRef.current = controller;
        setProviderModelsState({
            status: 'running',
            cacheKey
        });
        const startedAt = performance.now();
        const clearIfStale = ()=>{
            if (providerModelsAbortRef.current === controller) {
                setProviderModelsState({
                    status: 'idle'
                });
            }
        };
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$provider$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProviderModels"])({
                protocol: apiProtocol,
                baseUrl: cfg.baseUrl,
                apiKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanByokApiKey"])(cfg.apiKey)
            }, controller.signal);
            if (controller.signal.aborted) return;
            if (providerModelsRevisionRef.current !== revision) {
                clearIfStale();
                return;
            }
            if (result.ok && result.models?.length) {
                activeSetProviderModelsCache((prev)=>({
                        ...prev,
                        [cacheKey]: result.models ?? []
                    }));
            }
            trackModelsFetchResult({
                result: result.ok ? 'success' : 'failed',
                ...result.ok ? {} : {
                    error_code: result.kind || 'UNKNOWN'
                },
                ...result.ok ? {} : {
                    error_kind: result.kind || 'UNKNOWN'
                },
                model_count: result.ok ? result.models?.length ?? 0 : 0,
                duration_ms: Math.round(performance.now() - startedAt)
            });
            setProviderModelsState({
                status: 'done',
                cacheKey,
                result
            });
        } catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError') return;
            if (providerModelsRevisionRef.current !== revision) {
                clearIfStale();
                return;
            }
            setProviderModelsState({
                status: 'done',
                cacheKey,
                result: {
                    ok: false,
                    kind: 'unknown',
                    latencyMs: 0,
                    detail: err instanceof Error ? err.message : 'Model list request failed'
                }
            });
            trackModelsFetchResult({
                result: 'failed',
                error_code: err instanceof Error ? err.name : 'UNKNOWN',
                error_kind: err instanceof Error ? err.name : 'UNKNOWN',
                model_count: 0,
                duration_ms: Math.round(performance.now() - startedAt)
            });
        } finally{
            if (providerModelsAbortRef.current === controller) {
                providerModelsAbortRef.current = null;
            }
        }
    };
    const renderTestMessage = (result, kindForSuccess)=>{
        const ms = Math.max(0, Math.round(result.latencyMs));
        const sample = result.sample ?? '';
        const agentName = result.agentName ?? '';
        const testedModel = result.model ?? cfg.model;
        if (result.ok) {
            const baseMessage = kindForSuccess === 'api' ? t('settings.testSuccessApi', {
                ms,
                sample
            }) : t('settings.testSuccessCli', {
                agentName,
                ms,
                sample
            });
            if (kindForSuccess === 'cli' && cfg.agentId === 'codex') {
                const codexStrings = codexPathStrings(locale);
                if (result.usedExecutableSource === 'configured' && result.configuredExecutablePath) {
                    return `${baseMessage} ${codexStrings.configuredSuccess(result.configuredExecutablePath)}`;
                }
                if (result.usedExecutableSource === 'fallback_invalid' && result.configuredExecutablePath && result.detectedExecutablePath) {
                    return `${baseMessage} ${codexStrings.invalidFallback(result.configuredExecutablePath, result.detectedExecutablePath)}`;
                }
                if (result.usedExecutableSource === 'fallback_failed' && result.configuredExecutablePath && result.detectedExecutablePath) {
                    return `${baseMessage} ${codexStrings.failedFallback(result.configuredExecutablePath, result.detectedExecutablePath)}`;
                }
            }
            return result.detail ? `${baseMessage} ${result.detail}` : baseMessage;
        }
        switch(result.kind){
            case 'auth_failed':
                return t('settings.testAuthFailed');
            case 'forbidden':
                return t('settings.testForbidden');
            case 'not_found_model':
                return t('settings.testNotFoundModel', {
                    model: testedModel
                });
            case 'invalid_model_id':
                return t('settings.testInvalidModelId', {
                    model: testedModel
                });
            case 'invalid_base_url':
                return t('settings.testInvalidBaseUrl');
            case 'rate_limited':
                return t('settings.testRateLimited');
            case 'upstream_unavailable':
                return t('settings.testUpstream', {
                    status: result.status ?? 0
                });
            case 'timeout':
                return t('settings.testTimeout', {
                    ms
                });
            case 'agent_not_installed':
                return t('settings.testAgentMissing', {
                    agentName
                });
            case 'agent_auth_required':
                return result.detail || 'Agent authentication is required.';
            case 'agent_spawn_failed':
                return t('settings.testAgentSpawn', {
                    agentName,
                    detail: result.detail ?? ''
                });
            default:
                return t('settings.testUnknown', {
                    detail: result.detail ?? ''
                });
        }
    };
    const applyCodexDetectedPath = (detectedPath)=>{
        setCfg((c)=>updateAgentCliEnvValue(c, 'codex', 'CODEX_BIN', detectedPath));
        setAgentTestState({
            status: 'idle'
        });
    };
    const clearCodexCustomPath = ()=>{
        setCfg((c)=>updateAgentCliEnvValue(c, 'codex', 'CODEX_BIN', ''));
        setAgentTestState({
            status: 'idle'
        });
    };
    const apiProtocol = cfg.apiProtocol ?? 'anthropic';
    const apiKeyConsoleLink = API_KEY_CONSOLE_LINKS[apiProtocol];
    const apiProtocolTabGroups = [
        {
            id: 'protocols',
            label: t('settings.protocolGroupProtocols'),
            tabs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_PROTOCOL_TABS"].filter((tab)=>!GATEWAY_API_PROTOCOLS.has(tab.id))
        },
        {
            id: 'gateways',
            label: t('settings.protocolGroupGateways'),
            tabs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_PROTOCOL_TABS"].filter((tab)=>GATEWAY_API_PROTOCOLS.has(tab.id))
        }
    ];
    const baseUrlValid = isValidApiBaseUrl(cfg.baseUrl);
    const baseUrlInvalid = Boolean(cfg.baseUrl.trim() && !baseUrlValid);
    const byokRequiredLabel = (field)=>{
        switch(field){
            case 'api_key':
                return t('settings.apiKey');
            case 'base_url':
                return t('settings.baseUrl');
            case 'model':
                return apiProtocol === 'azure' ? t('settings.azureDeploymentModel') : t('settings.model');
            default:
                {
                    const exhaustive = field;
                    return exhaustive;
                }
        }
    };
    const formatByokMissingFields = (fields)=>fields.map(byokRequiredLabel).join(', ');
    const focusByokRequiredField = (field)=>{
        if (!field) return;
        window.setTimeout(()=>{
            if (field === 'api_key') {
                apiKeyInputRef.current?.focus();
                return;
            }
            if (field === 'base_url') {
                baseUrlInputRef.current?.focus();
                return;
            }
            if (customModelInputRef.current) {
                customModelInputRef.current.focus();
                return;
            }
            modelSelectRef.current?.focus();
        }, 0);
    };
    const showByokPreconditionNotice = (action, fields)=>{
        setByokPreconditionNotice({
            action,
            message: t('settings.testMissingFields', {
                fields: formatByokMissingFields(fields)
            })
        });
        focusByokRequiredField(fields[0]);
    };
    const byokDraftIssueMessage = (issue)=>{
        switch(issue.code){
            case 'api_key_required':
            case 'base_url_required':
            case 'model_required':
                return t('settings.testMissingFields', {
                    fields: byokRequiredLabel(issue.field)
                });
            case 'api_key_extra_whitespace':
            case 'api_key_malformed':
            case 'api_key_wrong_protocol':
                return t('settings.apiKeyInvalid');
            case 'base_url_invalid':
                return t('settings.baseUrlInvalid');
            default:
                {
                    const exhaustive = issue.code;
                    return exhaustive;
                }
        }
    };
    const showByokDraftValidationNotice = (action, validation)=>{
        const blockingFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftFields"])(validation);
        if (blockingFields.length === 0) return;
        const blockingIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(validation);
        const missingFields = blockingIssues.filter((issue)=>issue.code === 'api_key_required' || issue.code === 'base_url_required' || issue.code === 'model_required').map((issue)=>issue.field);
        if (missingFields.length > 0) {
            showByokPreconditionNotice(action, missingFields);
            return;
        }
        const firstIssue = blockingIssues[0];
        if (!firstIssue) return;
        setByokPreconditionNotice({
            action,
            field: firstIssue.field,
            message: byokDraftIssueMessage(firstIssue)
        });
        focusByokRequiredField(firstIssue.field);
    };
    // Autosave loop. Every committed edit to `cfg` schedules a debounced
    // sync to localStorage + the daemon. We keep a 400ms debounce so rapid
    // typing in text fields doesn't flood the daemon with PUTs while still
    // feeling near-instant for toggles/selects (which fire once and settle).
    // The Composio API key field is intentionally excluded from this loop —
    // see ConnectorSection for the explicit "Save key" gesture.
    // The status here drives the footer indicator: 'idle' = no draft to
    // flush, 'pending' = scheduled, 'saving' = request in flight, 'saved'
    // = recent successful sync, 'error' = recent failure.
    const [autosaveStatus, setAutosaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    // Skip the very first effect tick so just opening the dialog doesn't
    // appear to "save" anything before the user has touched a field.
    const autosaveSkipFirstRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const autosaveTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autosaveSavedTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autosaveRetryTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autosavePendingFlushRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const autosaveLatestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cfg);
    // Baseline used by the draft-only detector: the snapshot at the most
    // recent successful autosave (or the initial cfg on mount). Compared
    // against the current snapshot to decide whether the only edits
    // since last save are intentionally-stripped fields like the
    // Composio API key — in which case we must NOT flash "All changes
    // saved", because the draft has not actually been persisted.
    const autosaveLastSavedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cfg);
    const mediaProvidersChangeVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastSyncedMediaProvidersVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [autosaveRetryTick, setAutosaveRetryTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    autosaveLatestRef.current = cfg;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (autosaveSkipFirstRef.current) {
                autosaveSkipFirstRef.current = false;
                autosaveLastSavedRef.current = cfg;
                return;
            }
            setAutosaveStatus('pending');
            if (autosaveSavedTimerRef.current != null) {
                window.clearTimeout(autosaveSavedTimerRef.current);
                autosaveSavedTimerRef.current = null;
            }
            if (autosaveRetryTimerRef.current != null) {
                window.clearTimeout(autosaveRetryTimerRef.current);
                autosaveRetryTimerRef.current = null;
            }
            if (autosaveTimerRef.current != null) {
                window.clearTimeout(autosaveTimerRef.current);
            }
            autosavePendingFlushRef.current = true;
            autosaveTimerRef.current = window.setTimeout({
                "SettingsDialog.useEffect": ()=>{
                    autosavePendingFlushRef.current = false;
                    autosaveTimerRef.current = null;
                    const snapshot = autosaveLatestRef.current;
                    const mediaProvidersVersion = mediaProvidersChangeVersionRef.current;
                    const persistOptions = {
                        forceMediaProviderSync: mediaProvidersVersion > lastSyncedMediaProvidersVersionRef.current
                    };
                    // Draft-only edit (e.g. the user is mid-typing the Composio API
                    // key, which only commits via the explicit "Save key" gesture):
                    // the persisted shape would be identical to what is already on
                    // disk, so a save would be a no-op that mis-reports "Saved" and
                    // makes users trust that a sensitive key was persisted when it
                    // was not. Skip the persist and settle the indicator to idle.
                    // The forced media-provider sync path still runs because that
                    // is a real outbound effect even when the persisted shape
                    // hasn't changed.
                    if (!persistOptions.forceMediaProviderSync && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAutosaveDraftOnlyChange"])(snapshot, autosaveLastSavedRef.current)) {
                        setAutosaveStatus('idle');
                        return;
                    }
                    setAutosaveStatus('saving');
                    void ({
                        "SettingsDialog.useEffect": async ()=>{
                            try {
                                await onPersist(snapshot, persistOptions);
                                autosaveLastSavedRef.current = snapshot;
                                lastSavedAppearanceRef.current = {
                                    theme: snapshot.theme ?? 'system',
                                    accentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAccentColor"])(snapshot.accentColor)
                                };
                                // If a newer edit landed while the request was in flight,
                                // leave the status as 'pending' so the next debounce tick
                                // owns the indicator instead of flashing "Saved".
                                if (autosaveLatestRef.current !== snapshot) {
                                    setAutosaveStatus('pending');
                                    return;
                                }
                                if (persistOptions.forceMediaProviderSync) {
                                    lastSyncedMediaProvidersVersionRef.current = mediaProvidersVersion;
                                    setPendingMediaProviderEditIds(new Set());
                                }
                                setAutosaveStatus('saved');
                                autosaveSavedTimerRef.current = window.setTimeout({
                                    "SettingsDialog.useEffect": ()=>{
                                        autosaveSavedTimerRef.current = null;
                                        // Settle to idle after a moment so the indicator doesn't
                                        // stay on "Saved" forever and become noise.
                                        setAutosaveStatus({
                                            "SettingsDialog.useEffect": (curr)=>curr === 'saved' ? 'idle' : curr
                                        }["SettingsDialog.useEffect"]);
                                    }
                                }["SettingsDialog.useEffect"], 1800);
                            } catch  {
                                if (persistOptions.forceMediaProviderSync && autosaveLatestRef.current === snapshot && mediaProvidersChangeVersionRef.current === mediaProvidersVersion && lastSyncedMediaProvidersVersionRef.current < mediaProvidersVersion) {
                                    setAutosaveStatus('pending');
                                    autosaveRetryTimerRef.current = window.setTimeout({
                                        "SettingsDialog.useEffect": ()=>{
                                            autosaveRetryTimerRef.current = null;
                                            if (autosaveLatestRef.current !== snapshot || mediaProvidersChangeVersionRef.current !== mediaProvidersVersion || lastSyncedMediaProvidersVersionRef.current >= mediaProvidersVersion) {
                                                return;
                                            }
                                            setAutosaveRetryTick({
                                                "SettingsDialog.useEffect": (tick)=>tick + 1
                                            }["SettingsDialog.useEffect"]);
                                        }
                                    }["SettingsDialog.useEffect"], 1500);
                                    return;
                                }
                                setAutosaveStatus('error');
                            }
                        }
                    })["SettingsDialog.useEffect"]();
                }
            }["SettingsDialog.useEffect"], 400);
            return ({
                "SettingsDialog.useEffect": ()=>{
                    if (autosaveTimerRef.current != null) {
                        window.clearTimeout(autosaveTimerRef.current);
                        autosaveTimerRef.current = null;
                    }
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        cfg,
        onPersist,
        autosaveRetryTick
    ]);
    // Flush any pending autosave on unmount so a fast-closing dialog
    // never strands an in-flight edit. We also clear the "Saved" toast
    // timer to avoid setState after unmount.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            return ({
                "SettingsDialog.useEffect": ()=>{
                    if (autosavePendingFlushRef.current) {
                        const mediaProvidersVersion = mediaProvidersChangeVersionRef.current;
                        // Best-effort flush; if it rejects, localStorage already has
                        // the latest copy from the synchronous saveConfig call inside
                        // onPersist.
                        autosavePendingFlushRef.current = false;
                        void Promise.resolve(onPersist(autosaveLatestRef.current, {
                            forceMediaProviderSync: mediaProvidersVersion > lastSyncedMediaProvidersVersionRef.current
                        })).catch({
                            "SettingsDialog.useEffect": ()=>undefined
                        }["SettingsDialog.useEffect"]);
                    }
                    if (autosaveSavedTimerRef.current != null) {
                        window.clearTimeout(autosaveSavedTimerRef.current);
                        autosaveSavedTimerRef.current = null;
                    }
                    if (autosaveRetryTimerRef.current != null) {
                        window.clearTimeout(autosaveRetryTimerRef.current);
                        autosaveRetryTimerRef.current = null;
                    }
                }
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        onPersist
    ]);
    // Global Escape closes the dialog. With no footer button anymore the
    // close affordances are: top-right X · backdrop click · Escape.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            function onKey(e) {
                if (e.key !== 'Escape') return;
                onClose();
            }
            document.addEventListener('keydown', onKey);
            return ({
                "SettingsDialog.useEffect": ()=>document.removeEventListener('keydown', onKey)
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        onClose
    ]);
    const protocolProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[protocolProviders]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWN_PROVIDERS"].filter({
                "SettingsDialog.useMemo[protocolProviders]": (p)=>p.protocol === apiProtocol
            }["SettingsDialog.useMemo[protocolProviders]"])
    }["SettingsDialog.useMemo[protocolProviders]"], [
        apiProtocol
    ]);
    const selectedProviderIndex = cfg.apiProviderBaseUrl == null ? -1 : protocolProviders.findIndex((p)=>p.baseUrl === cfg.apiProviderBaseUrl && p.baseUrl === cfg.baseUrl);
    const selectedProvider = selectedProviderIndex >= 0 ? protocolProviders[selectedProviderIndex] : undefined;
    const showProviderPreset = protocolProviders.length > 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedOriginGateway"])(apiProtocol);
    // Fixed-origin gateways resolve their Base URL automatically; nothing for the
    // user to edit, so hide the field entirely.
    const showBaseUrlField = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedOriginGateway"])(apiProtocol);
    const byokRequiresApiKey = byokProviderRequiresApiKey(apiProtocol, selectedProvider, cfg.baseUrl);
    const byokFirstPartyBaseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[byokFirstPartyBaseUrl]": ()=>byokFirstPartyBaseUrlHint(apiProtocol, cfg.baseUrl, protocolProviders)
    }["SettingsDialog.useMemo[byokFirstPartyBaseUrl]"], [
        apiProtocol,
        cfg.baseUrl,
        protocolProviders
    ]);
    const byokKeyValidationBaseUrl = byokFirstPartyBaseUrl?.baseUrl;
    const byokDraftValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[byokDraftValidation]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateByokDraft"])(apiProtocol, {
                apiKey: cfg.apiKey,
                baseUrl: cfg.baseUrl,
                model: cfg.model
            }, {
                requiresApiKey: byokRequiresApiKey,
                keyValidationBaseUrl: byokKeyValidationBaseUrl
            })
    }["SettingsDialog.useMemo[byokDraftValidation]"], [
        apiProtocol,
        byokKeyValidationBaseUrl,
        byokRequiresApiKey,
        cfg.apiKey,
        cfg.baseUrl,
        cfg.model
    ]);
    const byokBlockingDraftIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[byokBlockingDraftIssues]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokDraftValidation)
    }["SettingsDialog.useMemo[byokBlockingDraftIssues]"], [
        byokDraftValidation
    ]);
    const apiKeyDraftInvalid = byokBlockingDraftIssues.some((issue)=>issue.field === 'api_key' && issue.code !== 'api_key_required');
    const byokModelFetchDraftValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[byokModelFetchDraftValidation]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateByokDraft"])(apiProtocol, {
                apiKey: cfg.apiKey,
                baseUrl: cfg.baseUrl,
                model: cfg.model
            }, {
                requiresApiKey: byokRequiresApiKey,
                requireModel: false,
                keyValidationBaseUrl: byokKeyValidationBaseUrl
            })
    }["SettingsDialog.useMemo[byokModelFetchDraftValidation]"], [
        apiProtocol,
        byokKeyValidationBaseUrl,
        byokRequiresApiKey,
        cfg.apiKey,
        cfg.baseUrl,
        cfg.model
    ]);
    const providerModelsKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[providerModelsKey]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerModelsCacheKey"])(apiProtocol, cfg.baseUrl, cfg.apiKey, cfg.apiVersion ?? '')
    }["SettingsDialog.useMemo[providerModelsKey]"], [
        apiProtocol,
        cfg.baseUrl,
        cfg.apiKey,
        cfg.apiVersion
    ]);
    const fetchedApiModelOptions = activeProviderModelsCache[providerModelsKey] ?? [];
    const commitProviderModelsInputs = ()=>{
        if (byokFirstPartyBaseUrl?.hostTypo || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokModelFetchDraftValidation).length > 0) {
            setProviderModelsCommittedKey(null);
            return;
        }
        setProviderModelsCommittedKey(providerModelsKey);
    };
    const onByokKeyCommit = ()=>{
        // Normalize the stored key on blur so the value that flows into the
        // connection-test / model-fetch requests below (and back to the daemon
        // via autosave) is already free of pasted whitespace / zero-width
        // characters — otherwise a key like "sk-ant-...\n" would only raise a
        // non-blocking warning yet still go out malformed over the wire.
        const cleanedApiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanByokApiKey"])(cfg.apiKey);
        if (cleanedApiKey !== cfg.apiKey) {
            // Writing the cleaned key changes cfg.apiKey, which re-runs the reset
            // effects above: one nulls providerModelsCommittedKey, the other bumps
            // providerTestRevisionRef / clears providerAutoTestKeyRef. So committing
            // the model key or starting the auto-test here would be clobbered — the
            // model commit before the auto-fetch effect reads it, and the auto-test
            // result dropped by the stale-revision guard. Defer both until the
            // cleaned value has landed (effect below), otherwise account models
            // never auto-load and the auto-test success/error never reaches the UI
            // for the exact dirty-paste case this handles.
            deferAfterKeyCleanRef.current = true;
            updateApiConfig({
                apiKey: cleanedApiKey
            });
            return;
        }
        commitProviderModelsInputs();
        handleAutoTestProvider();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (!deferAfterKeyCleanRef.current) return;
            deferAfterKeyCleanRef.current = false;
            if (byokFirstPartyBaseUrl?.hostTypo || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokModelFetchDraftValidation).length > 0) {
                setProviderModelsCommittedKey(null);
            } else {
                setProviderModelsCommittedKey(providerModelsKey);
            }
            // Runs after the provider-test reset effect (declaration order) bumped the
            // revision for the cleaned key, so this auto-test is not flagged stale.
            handleAutoTestProvider();
        }
    }["SettingsDialog.useEffect"], [
        byokFirstPartyBaseUrl?.hostTypo,
        byokModelFetchDraftValidation,
        cfg.apiKey,
        providerModelsKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (cfg.mode !== 'api') return;
            if (visualStabilityMode) return;
            if (providerTestState.status === 'running') return;
            if (byokFirstPartyBaseUrl?.hostTypo) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokDraftValidation).length > 0) return;
            const key = providerConnectionTestKey(apiProtocol, cfg);
            if (providerAutoTestKeyRef.current === key) return;
            const timer = window.setTimeout({
                "SettingsDialog.useEffect.timer": ()=>{
                    handleAutoTestProvider();
                }
            }["SettingsDialog.useEffect.timer"], 500);
            return ({
                "SettingsDialog.useEffect": ()=>window.clearTimeout(timer)
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        apiProtocol,
        byokFirstPartyBaseUrl?.hostTypo,
        byokDraftValidation,
        cfg.apiKey,
        cfg.apiVersion,
        cfg.baseUrl,
        cfg.mode,
        cfg.model,
        providerTestState.status,
        visualStabilityMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (cfg.mode !== 'api') return;
            if (visualStabilityMode) return;
            if (apiProtocol === 'azure' || apiProtocol === 'ollama') return;
            if (byokFirstPartyBaseUrl?.hostTypo) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockingByokDraftIssues"])(byokModelFetchDraftValidation).length > 0) return;
            // AIHubMix needs no key and prefills its base URL, so there's nothing to
            // debounce-commit — fetch as soon as the tab is selected. Every other
            // protocol waits until the key/baseUrl inputs are committed (on blur) so we
            // don't fire on each keystroke.
            if (apiProtocol !== 'aihubmix' && providerModelsCommittedKey !== providerModelsKey) return;
            const timer = window.setTimeout({
                "SettingsDialog.useEffect.timer": ()=>{
                    void handleFetchProviderModels({
                        silent: true
                    });
                }
            }["SettingsDialog.useEffect.timer"], 300);
            return ({
                "SettingsDialog.useEffect": ()=>window.clearTimeout(timer)
            })["SettingsDialog.useEffect"];
        }
    }["SettingsDialog.useEffect"], [
        apiProtocol,
        byokFirstPartyBaseUrl?.hostTypo,
        cfg.apiKey,
        cfg.baseUrl,
        cfg.mode,
        cfg.apiVersion,
        byokModelFetchDraftValidation,
        providerModelsCommittedKey,
        providerModelsKey,
        visualStabilityMode
    ]);
    const currentProviderModelsResult = providerModelsState.status === 'done' && providerModelsState.cacheKey === providerModelsKey ? providerModelsState.result : null;
    const loadedAccountModelCount = currentProviderModelsResult?.ok && currentProviderModelsResult.models?.length ? currentProviderModelsResult.models.length : 0;
    const apiKeyAuthFailed = currentProviderModelsResult?.ok === false && currentProviderModelsResult.kind === 'auth_failed';
    const providerModelsFailureMessage = currentProviderModelsResult?.ok === false && !apiKeyAuthFailed ? t('settings.fetchModelsFailed', {
        detail: currentProviderModelsResult.detail || currentProviderModelsResult.kind
    }) : null;
    const providerTestBaseUrlInvalid = providerTestState.status === 'done' && !providerTestState.result.ok && providerTestState.result.kind === 'invalid_base_url';
    const providerTestApiKeyAuthFailed = providerTestState.status === 'done' && !providerTestState.result.ok && providerTestState.result.kind === 'auth_failed';
    const apiKeyFieldAuthFailed = providerTestApiKeyAuthFailed || apiKeyAuthFailed && providerTestState.status === 'idle';
    const baseUrlErrorMessage = baseUrlInvalid ? t('settings.baseUrlInvalid') : providerTestBaseUrlInvalid || byokFirstPartyBaseUrl?.hostTypo ? providerTestState.status === 'done' && providerTestState.result.detail?.trim() ? providerTestState.result.detail.trim() : t('settings.testInvalidBaseUrl') : null;
    const suggestedApiModelIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[suggestedApiModelIds]": ()=>Array.from(new Set(selectedProvider?.models?.length ? selectedProvider.models : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_MODELS_BY_PROTOCOL"][apiProtocol]))
    }["SettingsDialog.useMemo[suggestedApiModelIds]"], [
        apiProtocol,
        selectedProvider
    ]);
    const apiModelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[apiModelOptions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providerModelsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProviderModelOptions"])(fetchedApiModelOptions, suggestedApiModelIds)
    }["SettingsDialog.useMemo[apiModelOptions]"], [
        fetchedApiModelOptions,
        suggestedApiModelIds
    ]);
    // Shared hook: live AIHubMix catalogue for aihubmix, static registry for
    // other providers (same list the chat composer's image picker uses).
    const byokImageModelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokImageModelOptions"])(apiProtocol);
    const byokVideoModelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokVideoModelOptions"])(apiProtocol);
    const byokSpeechModelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokSpeechModelOptions"])(apiProtocol);
    const fetchedApiModelIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[fetchedApiModelIds]": ()=>new Set(fetchedApiModelOptions.map({
                "SettingsDialog.useMemo[fetchedApiModelIds]": (model)=>model.id.trim()
            }["SettingsDialog.useMemo[fetchedApiModelIds]"]))
    }["SettingsDialog.useMemo[fetchedApiModelIds]"], [
        fetchedApiModelOptions
    ]);
    const apiModelIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsDialog.useMemo[apiModelIds]": ()=>apiModelOptions.map({
                "SettingsDialog.useMemo[apiModelIds]": (m)=>m.id
            }["SettingsDialog.useMemo[apiModelIds]"])
    }["SettingsDialog.useMemo[apiModelIds]"], [
        apiModelOptions
    ]);
    const providerDefaultModel = selectedProvider?.model.trim() || suggestedApiModelIds[0] || '';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (cfg.mode !== 'api') return;
            if (apiModelCustomEditing) return;
            // Respect an explicit user pick — even when it equals the provider preset
            // id, the user deliberately chose it and discovery must not rewrite it.
            if (apiModelUserSelectedRef.current) return;
            if (fetchedApiModelOptions.length === 0) return;
            const currentModel = cfg.model.trim();
            if (currentModel && fetchedApiModelIds.has(currentModel)) return;
            if (currentModel && currentModel !== providerDefaultModel) return;
            const preference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveByokModelPreference"])({
                currentModel: '',
                accountModels: fetchedApiModelOptions,
                providerDefaultModel
            });
            if (preference.source !== 'account') return;
            if (preference.model === currentModel) return;
            updateApiConfig({
                model: preference.model
            });
        }
    }["SettingsDialog.useEffect"], [
        apiModelCustomEditing,
        cfg.mode,
        cfg.model,
        fetchedApiModelIds,
        fetchedApiModelOptions,
        providerDefaultModel
    ]);
    const apiModelCustomActive = shouldShowCustomModelInput(cfg.model, apiModelIds, apiModelCustomEditing);
    const baseUrlReadOnly = (apiProtocol === 'anthropic' || apiProtocol === 'google') && cfg.apiProviderBaseUrl !== null && Boolean(cfg.baseUrl.trim()) && !baseUrlInvalid;
    const baseUrlPlaceholder = apiProtocol === 'azure' ? t('settings.azureBaseUrlPlaceholder') : apiProtocol === 'ollama' ? 'http://localhost:11434' : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsDialog.useEffect": ()=>{
            if (!focusByokRequiredFieldAfterProtocolSwitchRef.current) return;
            focusByokRequiredFieldAfterProtocolSwitchRef.current = false;
            focusByokRequiredField(missingByokConnectionFields(cfg, {
                requiresApiKey: byokRequiresApiKey
            })[0]);
        }
    }["SettingsDialog.useEffect"], [
        apiModelCustomActive,
        cfg,
        apiProtocol,
        byokRequiresApiKey
    ]);
    // Header title/subtitle follow the active sidebar section so the dialog
    // header always reflects what the user is looking at, instead of being
    // pinned to one section's copy. The execution section's header doubles
    // as the section heading — there is no inner h3 inside the Local CLI /
    // BYOK content so "Local CLI" only renders once (in the seg-control tab),
    // not twice (heading + tab).
    const sectionHeader = {
        execution: {
            title: t('settings.title'),
            subtitle: t('settings.subtitle')
        },
        instructions: {
            title: t('settings.instructionsTitle'),
            subtitle: t('settings.instructionsSubtitle')
        },
        media: {
            title: t('settings.mediaProviders'),
            subtitle: t('settings.mediaProvidersHint')
        },
        composio: {
            title: t('connectors.title'),
            subtitle: t('connectors.subtitle')
        },
        orbit: {
            title: t('settings.orbit.title'),
            subtitle: t('settings.orbit.lede')
        },
        routines: {
            title: t('routines.title'),
            subtitle: t('routines.subtitle')
        },
        integrations: {
            title: t('settings.mcpServerTitle'),
            subtitle: t('settings.mcpServerHint')
        },
        mcpClient: {
            title: t('settings.externalMcpTitle'),
            subtitle: t('settings.externalMcpHint')
        },
        language: {
            title: t('settings.language'),
            subtitle: t('settings.languageHint')
        },
        appearance: {
            title: t('settings.appearance'),
            subtitle: t('settings.appearanceHint')
        },
        critiqueTheater: {
            title: t('critiqueTheater.settingsNav'),
            subtitle: t('critiqueTheater.settingsNavHint')
        },
        notifications: {
            title: t('settings.notifications'),
            subtitle: t('settings.notificationsHint')
        },
        privacy: {
            title: t('settings.privacy'),
            subtitle: t('settings.privacyHint')
        },
        pet: {
            title: t('pet.title'),
            subtitle: t('pet.subtitle')
        },
        skills: {
            title: t('settings.skills'),
            subtitle: t('settings.skillsHint')
        },
        designSystems: {
            title: t('settings.designSystems'),
            subtitle: t('settings.designSystemsHint')
        },
        projectLocations: {
            title: t('settings.projectLocations'),
            subtitle: t('settings.projectLocationsHint')
        },
        memory: {
            title: t('settings.memory'),
            subtitle: t('settings.memoryHint')
        },
        // 'library' is opened via EntryShell route — SettingsDialog doesn't
        // render it but SettingsSection must accept the token (see type def).
        library: {
            title: '',
            subtitle: ''
        },
        about: {
            title: t('settings.about'),
            subtitle: t('settings.aboutHint')
        }
    };
    const activeHeader = sectionHeader[activeSection];
    const installedAgents = agents.filter((a)=>a.available);
    const unavailableAgents = agents.filter((a)=>!a.available);
    const initialAgentScanRunning = agentsLoading && agents.length === 0;
    const agentModelOptionLabel = (model, fallback)=>{
        if (!model) return fallback;
        const label = model.label?.trim();
        const id = model.id.trim();
        if (label && label !== id) {
            return label.toLowerCase().includes(id.toLowerCase()) ? label : `${label} (${id})`;
        }
        return label || id;
    };
    const agentModelSummary = (agent)=>{
        if (!Array.isArray(agent.models) || agent.models.length === 0) return null;
        const choice = cfg.agentModels?.[agent.id] ?? {};
        const modelValue = choice.model ?? agent.models[0]?.id ?? '';
        if (!modelValue) return t('settings.modelCustom');
        return agentModelOptionLabel(agent.models.find((m)=>m.id === modelValue), modelValue);
    };
    const renderAgentModelConfig = (selected)=>{
        const hasModels = Array.isArray(selected.models) && selected.models.length > 0;
        const hasReasoning = Array.isArray(selected.reasoningOptions) && selected.reasoningOptions.length > 0;
        // AMR's live catalog only lands a beat after sign-in. While the user is
        // signed in but the model list hasn't arrived yet, show the picker in a
        // loading state instead of hiding it — so the dropdown appears at sign-in
        // and simply fills in, rather than popping in seconds later.
        if (selected.id === 'amr' && !hasModels && (amrCardStatus?.loggedIn ?? false)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "agent-card-config",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-label",
                                children: [
                                    t('settings.modelPicker'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "agent-model-source-badge live",
                                        "aria-hidden": "true",
                                        children: t('settings.modelSourceLive')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 2906,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 2904,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "agent-model-select-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "settings-model-select agent-model-select-loading",
                                    role: "status",
                                    "aria-busy": "true",
                                    "data-testid": `settings-agent-model-loading-${selected.id}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "spinner",
                                            size: 13,
                                            className: "icon-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 2920,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('common.loading')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 2921,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 2914,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 2913,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 2903,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint agent-model-row-hint",
                        children: t('settings.modelPickerLiveHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 2925,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 2902,
                columnNumber: 9
            }, this);
        }
        if (!hasModels && !hasReasoning) return null;
        const choice = cfg.agentModels?.[selected.id] ?? {};
        const knownModelIds = selected.models?.map((m)=>m.id) ?? [];
        // Adapters opt out via `supportsCustomModel: false` on their
        // RuntimeAgentDef when their CLI has no `--model` flag (Antigravity,
        // upstream issue #35) or when free-text ids silently fail at spawn
        // (AMR routes through ACP `session/set_model` and validates against
        // a live catalog). Undefined === allow, matching today's UX.
        const allowCustomModel = selected.supportsCustomModel !== false;
        const configuredModel = typeof choice.model === 'string' && choice.model ? choice.model : null;
        const setChoice = (next)=>{
            setCfg((c)=>{
                const prev = c.agentModels?.[selected.id] ?? {};
                return {
                    ...c,
                    agentModels: {
                        ...c.agentModels ?? {},
                        [selected.id]: {
                            ...prev,
                            ...next
                        }
                    }
                };
            });
        };
        const modelValue = selected.id === 'amr' && configuredModel && !knownModelIds.includes(configuredModel) ? selected.models?.[0]?.id ?? '' : configuredModel ?? selected.models?.[0]?.id ?? '';
        const reasoningValue = choice.reasoning ?? selected.reasoningOptions?.[0]?.id ?? '';
        const customActive = allowCustomModel && hasModels && shouldShowCustomModelInput(modelValue, knownModelIds, agentCustomModelIds.has(selected.id));
        const selectValue = customActive ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$modelOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_MODEL_SENTINEL"] : modelValue;
        const modelSource = selected.modelsSource ?? 'fallback';
        const modelSourceLabel = modelSource === 'live' ? t('settings.modelSourceLive') : t('settings.modelSourceFallback');
        const modelSourceHint = modelSource === 'live' ? selected.supportsCustomModel === false ? t('settings.modelPickerLiveCatalogOnlyHint') : t('settings.modelPickerLiveHint') : t('settings.modelPickerFallbackHint');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "agent-card-config",
            children: [
                hasModels ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "field-label",
                                    children: [
                                        t('settings.modelPicker'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `agent-model-source-badge ${modelSource}`,
                                            "aria-hidden": "true",
                                            children: modelSourceLabel
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 2996,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 2994,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "agent-model-select-wrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$modelOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableModelSelect"], {
                                        className: "inline-switcher__select settings-model-select",
                                        value: selectValue,
                                        "aria-label": t('settings.modelPicker'),
                                        searchPlaceholder: t('designs.searchPlaceholder'),
                                        searchInputTestId: `settings-agent-model-search-${selected.id}`,
                                        popoverTestId: `settings-agent-model-popover-${selected.id}`,
                                        minSearchableOptions: 5,
                                        popoverMinWidth: 340,
                                        models: selected.models,
                                        onChange: (nextValue)=>{
                                            if (nextValue === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$modelOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_MODEL_SENTINEL"]) {
                                                setAgentCustomModelIds((prev)=>{
                                                    const next = new Set(prev);
                                                    next.add(selected.id);
                                                    return next;
                                                });
                                                setChoice({
                                                    model: ''
                                                });
                                            } else {
                                                setAgentCustomModelIds((prev)=>{
                                                    if (!prev.has(selected.id)) return prev;
                                                    const next = new Set(prev);
                                                    next.delete(selected.id);
                                                    return next;
                                                });
                                                setChoice({
                                                    model: nextValue
                                                });
                                            }
                                        },
                                        additionalOptions: allowCustomModel ? [
                                            {
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$modelOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_MODEL_SENTINEL"],
                                                label: t('settings.modelCustom')
                                            }
                                        ] : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3004,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3003,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 2993,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hint agent-model-row-hint",
                            children: modelSourceHint
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3045,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : null,
                customActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "field",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "field-label",
                            children: t('settings.modelCustomLabel')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3052,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: modelValue,
                            placeholder: t('settings.modelCustomPlaceholder'),
                            onChange: (e)=>setChoice({
                                    model: e.target.value.trim()
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3055,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 3051,
                    columnNumber: 11
                }, this) : null,
                hasReasoning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "field",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "field-label",
                            children: t('settings.reasoningPicker')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3067,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "agent-model-select-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: reasoningValue,
                                    onChange: (e)=>setChoice({
                                            reasoning: e.target.value
                                        }),
                                    children: selected.reasoningOptions.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: r.id,
                                            children: r.label
                                        }, r.id, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3078,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3071,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-down",
                                    size: 12,
                                    className: "agent-model-select-chevron"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3083,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3070,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 3066,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
            lineNumber: 2990,
            columnNumber: 7
        }, this);
    };
    const settingsSidebarToggleLabel = settingsSidebarCollapsed ? 'Expand settings sidebar' : 'Collapse settings sidebar';
    const settingsFullscreenLabel = settingsFullscreen ? t('common.exitFullscreen') : t('common.fullscreen');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: 'modal modal-settings' + (settingsSidebarCollapsed ? ' settings-sidebar-collapsed' : '') + (settingsFullscreen ? ' settings-fullscreen' : ''),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "settings-dialog-title",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "settings-chrome",
                    "aria-hidden": false,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `settings-autosave is-${autosaveStatus}`,
                            role: "status",
                            "aria-live": "polite",
                            children: autosaveStatus === 'saving' || autosaveStatus === 'pending' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "spinner",
                                        size: 12,
                                        className: "icon-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.autosaveSaving')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : autosaveStatus === 'saved' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.autosaveSaved')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3144,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : autosaveStatus === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3148,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.autosaveError')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3149,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "settings-chrome-btn settings-fullscreen-toggle",
                            onClick: ()=>setSettingsFullscreen((current)=>!current),
                            "aria-label": settingsFullscreenLabel,
                            "aria-pressed": settingsFullscreen,
                            title: settingsFullscreenLabel,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: settingsFullscreen ? 'minimize' : 'maximize',
                                size: 15,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3161,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "settings-chrome-btn settings-close",
                            onClick: onClose,
                            "aria-label": t('common.close'),
                            title: t('common.close'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 16,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3174,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 3124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "modal-head",
                    id: "settings-dialog-title",
                    children: welcome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "kicker",
                                children: t('settings.welcomeKicker')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3180,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: t('settings.welcomeTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3181,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle",
                                children: t('settings.welcomeSubtitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3182,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "kicker",
                                children: t('settings.kicker')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-head-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: activeHeader.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "subtitle",
                                        children: activeHeader.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 3189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3187,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 3177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "settings-sidebar-toggle",
                            onClick: ()=>setSettingsSidebarCollapsed((current)=>!current),
                            "aria-label": settingsSidebarToggleLabel,
                            "aria-pressed": settingsSidebarCollapsed,
                            "aria-controls": "settings-sidebar",
                            title: settingsSidebarToggleLabel,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: settingsSidebarCollapsed ? 'chevron-right' : 'chevron-left',
                                size: 15,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 3205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            id: "settings-sidebar",
                            className: "settings-sidebar",
                            "aria-label": "Settings sections",
                            "aria-hidden": settingsSidebarCollapsed ? true : undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'execution' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('execution'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sliders",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.envConfigure')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: `${t('settings.localCli')} / ${t('settings.modeApiMeta')}`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3223,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'instructions' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('instructions'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "edit",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.instructionsTitle')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.instructionsNavSub')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3236,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3234,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'memory' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('memory'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "history",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.memory')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3246,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.memoryHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3247,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'media' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('media'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "image",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.mediaProviders')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3257,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Image / video / audio"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3258,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'skills' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('skills'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "grid",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.skills')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3268,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.skillsHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3269,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3267,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'mcpClient' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('mcpClient'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sparkles",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.externalMcpTitle')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.externalMcpHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3280,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'composio' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('composio'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sliders",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3288,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('connectors.title')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3290,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.connectorsNavHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3291,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'integrations' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('integrations'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "link",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.mcpServerTitle')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3301,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.mcpServerHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3302,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'language' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('language'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "languages",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.language')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.languageHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3311,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3305,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'appearance' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('appearance'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sun-moon",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3321,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.appearance')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.appearanceHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3322,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'critiqueTheater' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('critiqueTheater'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "comment",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('critiqueTheater.settingsNav')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3334,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('critiqueTheater.settingsNavHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3335,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3333,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'notifications' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('notifications'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "bell",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.notifications')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3345,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.notificationsHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3346,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'pet' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('pet'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sparkles",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('pet.navTitle')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3356,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('pet.navHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3357,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'designSystems' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('designSystems'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "draw",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.designSystems')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3367,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.designSystemsHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3368,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3366,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3360,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'projectLocations' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('projectLocations'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "folder",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.projectLocations')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3378,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.projectLocationsHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3379,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3377,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'privacy' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('privacy'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "eye",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.privacy')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.privacyHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3390,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3388,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `settings-nav-item${activeSection === 'about' ? ' active' : ''}`,
                                    onClick: ()=>setActiveSection('about'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "settings",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t('settings.about')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3400,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t('settings.aboutHint')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3401,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3399,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 3393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "settings-content",
                            ref: settingsContentRef,
                            children: [
                                activeSection === 'execution' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "seg-control",
                                            role: "tablist",
                                            "aria-label": t('settings.modeAria'),
                                            style: {
                                                ['--seg-cols']: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-selected": cfg.mode === 'daemon',
                                                    className: 'seg-btn seg-btn--inline' + (cfg.mode === 'daemon' ? ' active' : ''),
                                                    disabled: !daemonLive,
                                                    onClick: ()=>setMode('daemon'),
                                                    title: daemonLive ? t('settings.modeDaemonHelp') : t('settings.modeDaemonOffline'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "seg-title",
                                                            children: t('settings.localCli')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3430,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "seg-meta",
                                                            children: daemonLive ? t('settings.modeDaemonInstalledMeta', {
                                                                count: installedCount
                                                            }) : t('settings.modeDaemonOfflineMeta')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3431,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3414,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-selected": cfg.mode === 'api',
                                                    className: 'seg-btn seg-btn--inline' + (cfg.mode === 'api' ? ' active' : ''),
                                                    onClick: ()=>setMode('api'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "seg-title",
                                                            children: t('settings.modeApiMeta')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3447,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "seg-meta",
                                                            children: t('settings.modeApi')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3448,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3437,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3408,
                                            columnNumber: 15
                                        }, this),
                                        cfg.mode === 'api' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "protocol-chips",
                                            role: "tablist",
                                            "aria-label": t('settings.protocolAria'),
                                            children: apiProtocolTabGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "protocol-chip-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "protocol-chip-group-label",
                                                            children: group.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3459,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "protocol-chip-group-options",
                                                            children: group.tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    role: "tab",
                                                                    "aria-selected": apiProtocol === tab.id,
                                                                    className: 'protocol-chip' + (apiProtocol === tab.id ? ' active' : ''),
                                                                    onClick: ()=>{
                                                                        const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(tab.id);
                                                                        if (byokProviderId) {
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokProviderOptionClick"])(analytics.track, {
                                                                                page_name: 'settings',
                                                                                area: 'configure_execution_mode_byok',
                                                                                element: 'byok_provider_option',
                                                                                action: 'select_byok_provider',
                                                                                provider_id: byokProviderId,
                                                                                is_selected: apiProtocol === tab.id
                                                                            });
                                                                        }
                                                                        setApiProtocol(tab.id);
                                                                    },
                                                                    children: tab.title
                                                                }, tab.id, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3464,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3462,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, group.id, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3458,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3452,
                                            columnNumber: 17
                                        }, this) : null,
                                        cfg.mode === 'daemon' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "settings-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "section-head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: t('settings.codeAgentHint')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3497,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 3496,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3495,
                                                    columnNumber: 15
                                                }, this),
                                                initialAgentScanRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "agent-scan-card",
                                                    role: "status",
                                                    "aria-live": "polite",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "agent-scan-card__stage",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "agent-scan-card__ring",
                                                                    "aria-hidden": true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3503,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: t('settings.rescanRunning')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3504,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: t('settings.codeAgentHint')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3505,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "agent-scan-card__progress",
                                                                    "aria-hidden": true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 3507,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3506,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3502,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "agent-scan-card__rows",
                                                            "aria-hidden": true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3511,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3511,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3511,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3511,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3512,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3512,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3512,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3512,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3513,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3513,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {}, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3513,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3513,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3510,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3501,
                                                    columnNumber: 17
                                                }, this) : agents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "empty-card",
                                                    children: t('settings.noAgentsDetected')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 3517,
                                                    columnNumber: 17
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "agent-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "agent-group-head",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            children: t('settings.agentInstalledGroup', {
                                                                                count: installedAgents.length
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3524,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "agent-group-head-actions",
                                                                            children: [
                                                                                agentRescanNotice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: 'settings-rescan-status settings-rescan-status-inline ' + agentRescanNotice.kind,
                                                                                    role: agentRescanNotice.kind === 'error' ? 'alert' : 'status',
                                                                                    children: agentRescanNotice.kind === 'success' ? t('settings.rescanSuccess', {
                                                                                        count: agentRescanNotice.count
                                                                                    }) : t('settings.rescanFailed')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                    lineNumber: 3531,
                                                                                    columnNumber: 27
                                                                                }, this) : null,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: 'ghost icon-btn settings-rescan-btn agent-group-rescan-btn' + (agentRescanRunning ? ' loading' : ''),
                                                                                    onClick: ()=>void handleRefreshAgents(),
                                                                                    disabled: agentRescanRunning,
                                                                                    title: t('settings.rescanTitle'),
                                                                                    children: agentRescanRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                                name: "spinner",
                                                                                                size: 13,
                                                                                                className: "icon-spin"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                lineNumber: 3561,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: t('settings.rescanRunning')
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                lineNumber: 3566,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true) : t('settings.rescan')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                    lineNumber: 3549,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3529,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3523,
                                                                    columnNumber: 21
                                                                }, this),
                                                                installedAgents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "agent-grid agent-grid-installed",
                                                                    children: installedAgents.map((a)=>{
                                                                        const active = cfg.agentId === a.id;
                                                                        const running = active && agentTestState.status === 'running';
                                                                        const isAmrAgent = a.id === 'amr';
                                                                        const description = AGENT_SHORT_DESCRIPTIONS[a.id];
                                                                        const agentName = displayAgentName(a);
                                                                        const diagnosticHandlers = diagnosticHandlersForAgent(a);
                                                                        const modelSummary = agentModelSummary(a);
                                                                        const amrBenefits = [
                                                                            t('settings.amrBenefitOfficial'),
                                                                            t('settings.amrBenefitLowerPrice'),
                                                                            t('settings.amrBenefitManyModels')
                                                                        ];
                                                                        const versionLabel = isAmrAgent ? '' : cleanAgentVersionLabel(a.name, a.version);
                                                                        const metaLabel = a.authStatus === 'missing' ? t('settings.agentAuthRequired') : a.authStatus === 'unknown' ? t('settings.agentAuthUnknown') : versionLabel ? versionLabel : a.id === 'amr' ? '' : t('common.installed');
                                                                        const metaTitle = a.authStatus === 'missing' || a.authStatus === 'unknown' ? a.authMessage ?? a.path ?? '' : a.path ?? '';
                                                                        const amrHighlighted = isAmrAgent && amrHighlightActive;
                                                                        const amrCardEmail = isAmrAgent && active && amrCardStatus?.loggedIn ? amrCardStatus.user?.email || t('settings.amrSignedIn') : '';
                                                                        const amrCardProfileBadge = isAmrAgent && active && amrCardStatus?.loggedIn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$amr$2d$guidance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrProfileBadgeLabel"])(amrCardStatus.profile) : null;
                                                                        const amrRevealPendingCancelAction = isAmrAgent && active && hoveredAgentCardId === a.id && amrCardStatus?.loggedIn !== true && amrCardStatus?.loginInFlight === true;
                                                                        const cardEl = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            ref: isAmrAgent ? amrCardRef : undefined,
                                                                            "data-testid": `settings-agent-card-${a.id}`,
                                                                            className: 'agent-card agent-card-installed' + (active ? ' active' : '') + (amrHighlighted ? ' agent-card--amr-highlight' : ''),
                                                                            onMouseEnter: ()=>{
                                                                                if (!isAmrAgent || !active) return;
                                                                                setHoveredAgentCardId(a.id);
                                                                            },
                                                                            onMouseLeave: ()=>{
                                                                                if (hoveredAgentCardId !== a.id) return;
                                                                                setHoveredAgentCardId(null);
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "agent-card-main",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "agent-card-select",
                                                                                            "data-testid": `settings-agent-select-${a.id}`,
                                                                                            onClick: ()=>{
                                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsLocalCliClick"])(analytics.track, {
                                                                                                    page_name: 'settings',
                                                                                                    area: 'configure_execution_mode_local_cli',
                                                                                                    element: 'cli_provider',
                                                                                                    cli_provider_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentIdToTracking"])(a.id),
                                                                                                    install_status: 'installed'
                                                                                                });
                                                                                                if (isAmrAgent) {
                                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'settings_amr_agent_card', new Date(), {
                                                                                                        metricsConsent: cfg.telemetry?.metrics === true
                                                                                                    });
                                                                                                }
                                                                                                setCfg((c)=>({
                                                                                                        ...c,
                                                                                                        agentId: a.id
                                                                                                    }));
                                                                                            },
                                                                                            "aria-pressed": active,
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentIcon"], {
                                                                                                    id: a.id,
                                                                                                    size: 32
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3671,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "agent-card-body",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: 'agent-card-name' + (isAmrAgent ? ' agent-card-name--amr' : ''),
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "agent-card-title",
                                                                                                                    children: agentName
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                    lineNumber: 3681,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                isAmrAgent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "agent-card-benefits",
                                                                                                                    "aria-hidden": "true",
                                                                                                                    children: amrBenefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                            className: "agent-card-benefit",
                                                                                                                            children: benefit
                                                                                                                        }, benefit, false, {
                                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                            lineNumber: 3690,
                                                                                                                            columnNumber: 47
                                                                                                                        }, this))
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                    lineNumber: 3685,
                                                                                                                    columnNumber: 43
                                                                                                                }, this) : description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                            className: "agent-card-name-divider",
                                                                                                                            "aria-hidden": "true",
                                                                                                                            children: "·"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                            lineNumber: 3700,
                                                                                                                            columnNumber: 45
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                            className: "agent-card-tagline",
                                                                                                                            children: description
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                            lineNumber: 3706,
                                                                                                                            columnNumber: 45
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true) : null
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3673,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        metaLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "agent-card-meta",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                title: metaTitle,
                                                                                                                children: metaLabel
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                lineNumber: 3714,
                                                                                                                columnNumber: 43
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3713,
                                                                                                            columnNumber: 41
                                                                                                        }, this) : null,
                                                                                                        amrCardEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "agent-card-amr-email",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "agent-card-amr-email-text",
                                                                                                                    title: amrCardEmail,
                                                                                                                    children: amrCardEmail
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                    lineNumber: 3721,
                                                                                                                    columnNumber: 43
                                                                                                                }, this),
                                                                                                                amrCardProfileBadge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "agent-card-amr-profile-badge",
                                                                                                                    children: amrCardProfileBadge
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                    lineNumber: 3725,
                                                                                                                    columnNumber: 45
                                                                                                                }, this) : null
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3720,
                                                                                                            columnNumber: 41
                                                                                                        }, this) : null,
                                                                                                        !active && modelSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "agent-card-model-summary",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: t('settings.modelPicker')
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                    lineNumber: 3733,
                                                                                                                    columnNumber: 43
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                                    children: modelSummary
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                    lineNumber: 3734,
                                                                                                                    columnNumber: 43
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3732,
                                                                                                            columnNumber: 41
                                                                                                        }, this) : null
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3672,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3644,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        isAmrAgent ? active && amrCardStatusReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "amr-auth-anchor",
                                                                                            onMouseEnter: ()=>setAmrCoachmarkDismissed(true),
                                                                                            children: [
                                                                                                amrCoachmarkArmed && amrCardStatus?.loggedIn === false && !amrCoachmarkDismissed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "amr-coachmark",
                                                                                                    "aria-hidden": "true",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "amr-coachmark__ring"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3749,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                            className: "amr-coachmark__cursor",
                                                                                                            width: "22",
                                                                                                            height: "22",
                                                                                                            viewBox: "0 0 24 24",
                                                                                                            fill: "none",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                d: "M9.4 13V8a1.8 1.8 0 0 1 3.6 0v4.6c.35-.55 1-.95 1.75-.95.65 0 1.25.32 1.6.85.32-.5.9-.8 1.55-.8.8 0 1.5.5 1.78 1.2.35-.3.8-.5 1.3-.5 1.1 0 2 .9 2 2v3.05a5.6 5.6 0 0 1-5.6 5.6h-2.5a5 5 0 0 1-3.75-1.7l-4.2-4.75a1.85 1.85 0 0 1 2.65-2.6L9.4 16Z",
                                                                                                                fill: "#fff",
                                                                                                                stroke: "#1a1a1a",
                                                                                                                strokeWidth: "1.1",
                                                                                                                strokeLinejoin: "round"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                lineNumber: 3757,
                                                                                                                columnNumber: 45
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3750,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3748,
                                                                                                    columnNumber: 41
                                                                                                }, this) : null,
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmrLoginPill"], {
                                                                                                    className: "agent-card-amr-auth",
                                                                                                    hideSignedOutStatus: true,
                                                                                                    hideSignedInStatus: true,
                                                                                                    initialStatus: amrCardStatus,
                                                                                                    skipInitialRefresh: true,
                                                                                                    signInLabel: t('settings.amrAuthorize'),
                                                                                                    showConsoleAction: amrCardStatus?.loggedIn === true,
                                                                                                    iconOnlySignOut: true,
                                                                                                    amrEntrySourceDetail: "settings_amr_authorize",
                                                                                                    metricsConsent: cfg.telemetry?.metrics === true,
                                                                                                    installationId: cfg.installationId,
                                                                                                    revealPendingCancelAction: amrRevealPendingCancelAction,
                                                                                                    onStatusChange: setAmrCardStatus
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3767,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3741,
                                                                                            columnNumber: 37
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "agent-card-amr-auth agent-card-amr-auth--placeholder",
                                                                                            "aria-hidden": "true"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3784,
                                                                                            columnNumber: 37
                                                                                        }, this) : null,
                                                                                        active && !isAmrAgent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: 'ghost icon-btn settings-test-btn agent-card-test-btn' + (running ? ' loading' : ''),
                                                                                            onClick: ()=>void handleTestAgent(),
                                                                                            disabled: running,
                                                                                            title: t('settings.testTitle'),
                                                                                            children: running ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                                        name: "spinner",
                                                                                                        size: 13,
                                                                                                        className: "icon-spin"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                        lineNumber: 3803,
                                                                                                        columnNumber: 41
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: t('settings.test')
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                        lineNumber: 3808,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true) : t('settings.test')
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3791,
                                                                                            columnNumber: 35
                                                                                        }, this) : null
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                    lineNumber: 3643,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                (a.diagnostics ?? []).map((diagnostic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentDiagnosticRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentDiagnosticRow"], {
                                                                                        diagnostic: diagnostic,
                                                                                        handlers: diagnosticHandlers
                                                                                    }, `${diagnostic.reason}-${i}`, false, {
                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                        lineNumber: 3817,
                                                                                        columnNumber: 33
                                                                                    }, this)),
                                                                                active ? renderAgentModelConfig(a) : null
                                                                            ]
                                                                        }, a.id, true, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3625,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                        if (active && agentTestState.status !== 'idle') {
                                                                            const resultRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "agent-test-result-row",
                                                                                children: agentTestState.status === 'running' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "settings-test-status running",
                                                                                    role: "status",
                                                                                    "aria-live": "polite",
                                                                                    children: t('settings.testRunning')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                    lineNumber: 3833,
                                                                                    columnNumber: 35
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: 'settings-test-status ' + testStatusVariant(agentTestState.result),
                                                                                            role: agentTestState.result.ok ? 'status' : 'alert',
                                                                                            children: renderTestMessage(agentTestState.result, 'cli')
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3842,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        !agentTestState.result.ok ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "settings-test-actions",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "settings-test-actions-row",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    type: "button",
                                                                                                    className: "ghost icon-btn settings-test-btn",
                                                                                                    onClick: ()=>void handleTestAgent(),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                                            name: "reload",
                                                                                                            size: 13
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3866,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            children: t('settings.testRetry')
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                            lineNumber: 3867,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3861,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                lineNumber: 3860,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3859,
                                                                                            columnNumber: 39
                                                                                        }, this) : null,
                                                                                        cfg.agentId === 'codex' && (()=>{
                                                                                            const repair = codexPathRepairState(agentTestState.result);
                                                                                            if (!repair) return null;
                                                                                            const codexStrings = codexPathStrings(locale);
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "settings-test-actions",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "settings-test-actions-hint",
                                                                                                        children: codexStrings.repairHint
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                        lineNumber: 3880,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "settings-test-actions-row",
                                                                                                        children: [
                                                                                                            repair.canUseDetected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                type: "button",
                                                                                                                className: "settings-test-btn",
                                                                                                                onClick: ()=>applyCodexDetectedPath(repair.detectedPath),
                                                                                                                children: codexStrings.useDetected
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                lineNumber: 3885,
                                                                                                                columnNumber: 47
                                                                                                            }, this) : null,
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                type: "button",
                                                                                                                className: "ghost icon-btn settings-rescan-btn",
                                                                                                                onClick: clearCodexCustomPath,
                                                                                                                children: codexStrings.clearCustom
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                                lineNumber: 3897,
                                                                                                                columnNumber: 45
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                        lineNumber: 3883,
                                                                                                        columnNumber: 43
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                lineNumber: 3879,
                                                                                                columnNumber: 41
                                                                                            }, this);
                                                                                        })()
                                                                                    ]
                                                                                }, void 0, true)
                                                                            }, `${a.id}__test-result`, false, {
                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                lineNumber: 3828,
                                                                                columnNumber: 31
                                                                            }, this);
                                                                            return [
                                                                                cardEl,
                                                                                resultRow
                                                                            ];
                                                                        }
                                                                        return [
                                                                            cardEl
                                                                        ];
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3575,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "empty-card",
                                                                    children: t('settings.noAgentsDetected')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3918,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3522,
                                                            columnNumber: 19
                                                        }, this),
                                                        unavailableAgents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                            className: "agent-install-collapse",
                                                            open: installedAgents.length > 0 ? undefined : true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                    className: "agent-install-collapse-summary",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: t('settings.agentInstallGroup', {
                                                                            count: unavailableAgents.length
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 3929,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3928,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "agent-grid agent-grid-unavailable",
                                                                    children: unavailableAgents.map((a)=>{
                                                                        const installUrl = sanitizeHttpsUrl(a.installUrl);
                                                                        const docsUrl = sanitizeHttpsUrl(a.docsUrl);
                                                                        const hasLinks = Boolean(installUrl || docsUrl);
                                                                        const description = AGENT_SHORT_DESCRIPTIONS[a.id];
                                                                        const agentName = displayAgentName(a);
                                                                        const diagnosticHandlers = diagnosticHandlersForAgent(a);
                                                                        const cardLabel = `${agentName} · ${t('common.notInstalled')}`;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "agent-card disabled agent-card-unavailable",
                                                                            role: "group",
                                                                            "aria-label": cardLabel,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "agent-card-unavailable-row",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentIcon"], {
                                                                                            id: a.id,
                                                                                            size: 30
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3952,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "agent-card-body",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "agent-card-name",
                                                                                                    children: agentName
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3954,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "agent-card-description",
                                                                                                    children: description
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3958,
                                                                                                    columnNumber: 37
                                                                                                }, this) : null
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3953,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        hasLinks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "agent-card-actions agent-card-actions--inline",
                                                                                            children: [
                                                                                                docsUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    href: docsUrl,
                                                                                                    target: "_blank",
                                                                                                    rel: "noopener noreferrer",
                                                                                                    className: "agent-card-link agent-card-link--muted agent-card-link--icon",
                                                                                                    onClick: markAgentInstallIntent,
                                                                                                    title: t('settings.agentInstall.docs'),
                                                                                                    "aria-label": t('settings.agentInstall.docs'),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                                        name: "file",
                                                                                                        size: 15
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                        lineNumber: 3975,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3966,
                                                                                                    columnNumber: 39
                                                                                                }, this) : null,
                                                                                                installUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    href: installUrl,
                                                                                                    target: "_blank",
                                                                                                    rel: "noopener noreferrer",
                                                                                                    className: "agent-card-link agent-card-link--ghost",
                                                                                                    onClick: (event)=>{
                                                                                                        markAgentInstallIntent();
                                                                                                        if (a.id === 'amr') {
                                                                                                            event.currentTarget.href = attributedAmrSettingsUrl(installUrl, 'settings_amr_install');
                                                                                                        }
                                                                                                    },
                                                                                                    children: t('settings.agentInstall.install')
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                                    lineNumber: 3979,
                                                                                                    columnNumber: 39
                                                                                                }, this) : null
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                            lineNumber: 3964,
                                                                                            columnNumber: 35
                                                                                        }, this) : null
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                    lineNumber: 3951,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                (a.diagnostics ?? []).map((diagnostic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentDiagnosticRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentDiagnosticRow"], {
                                                                                        diagnostic: diagnostic,
                                                                                        handlers: diagnosticHandlers
                                                                                    }, `${diagnostic.reason}-${i}`, false, {
                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                        lineNumber: 4007,
                                                                                        columnNumber: 33
                                                                                    }, this))
                                                                            ]
                                                                        }, a.id, true, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 3945,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 3935,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 3924,
                                                            columnNumber: 21
                                                        }, this) : null,
                                                        !agents.find((a)=>a.id === cfg.agentId && a.available) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "agent-install-guide",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "hint agent-install-path-hint",
                                                                    children: t('settings.agentInstall.pathHint')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4035,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                    className: "agent-install-steps",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('settings.agentInstall.stepOpenLinks')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 4039,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('settings.agentInstall.stepAuth')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 4040,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('settings.agentInstall.stepRescan')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 4041,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('settings.agentInstall.stepSelect')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                            lineNumber: 4042,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4038,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4034,
                                                            columnNumber: 21
                                                        }, this) : null
                                                    ]
                                                }, void 0, true),
                                                (()=>{
                                                    const selected = agents.find((a)=>a.id === cfg.agentId && a.available);
                                                    if (!selected) return null;
                                                    const hasModels = Array.isArray(selected.models) && selected.models.length > 0;
                                                    const choice = cfg.agentModels?.[selected.id] ?? {};
                                                    const knownModelIds = selected.models?.map((m)=>m.id) ?? [];
                                                    const configuredModel = typeof choice.model === 'string' && choice.model ? choice.model : null;
                                                    const modelValue = selected.id === 'amr' && configuredModel && !knownModelIds.includes(configuredModel) ? selected.models?.[0]?.id ?? '' : configuredModel ?? selected.models?.[0]?.id ?? '';
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        className: "agent-cli-env settings-memory-advanced",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                className: "agent-cli-env-summary",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "agent-cli-env-summary-title",
                                                                    children: t('settings.memoryModelInlineLabel')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4070,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4069,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "agent-cli-env-body",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryModelInline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryModelInline"], {
                                                                    mode: "daemon",
                                                                    apiProtocol: apiProtocol,
                                                                    chatApiKey: cfg.apiKey,
                                                                    chatBaseUrl: cfg.baseUrl,
                                                                    chatApiVersion: cfg.apiVersion ?? '',
                                                                    chatModel: modelValue,
                                                                    cliAgentId: selected.id,
                                                                    cliModelOptions: hasModels ? selected.models.map((m)=>m.id) : []
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4075,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4074,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 4068,
                                                        columnNumber: 19
                                                    }, this);
                                                })(),
                                                (()=>{
                                                    /*
                  Per-agent CLI environment overrides — proxy URLs, custom
                  config dirs, and a binary path override. The previous
                  layout listed every supported agent's variables in one
                  long always-expanded block; for users on Claude Code
                  the Codex fields were just visual filler (and vice
                  versa), and the section hijacked Settings real estate
                  on every open even though nine in ten users never
                  touch it. Now: filtered to the *currently selected*
                  agent only, and folded into a collapsed disclosure
                  that opens to "Advanced: proxy & custom paths" — power
                  users who route through LiteLLM or installed the
                  binary out-of-PATH still have one click access; new
                  users no longer wonder "are these fields I forgot to
                  fill in?".
                */ const cliEnvFields = AGENT_CLI_ENV_FIELDS.filter((field)=>field.agentId === cfg.agentId);
                                                    if (cliEnvFields.length === 0) return null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        className: "agent-cli-env",
                                                        "data-testid": "settings-cli-env",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                className: "agent-cli-env-summary",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "agent-cli-env-summary-title",
                                                                    children: t('settings.cliEnvTitle')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4118,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4117,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "agent-cli-env-body",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "hint",
                                                                        children: t('settings.cliEnvHint')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4123,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "agent-cli-env-grid",
                                                                        children: cliEnvFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "field",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "field-label",
                                                                                        children: [
                                                                                            t(field.labelKey),
                                                                                            'labelSuffix' in field ? ` (${field.labelSuffix})` : ''
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                        lineNumber: 4130,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: 'secret' in field && field.secret ? 'password' : 'text',
                                                                                        value: cfg.agentCliEnv?.[field.agentId]?.[field.envKey] ?? '',
                                                                                        placeholder: field.placeholder,
                                                                                        spellCheck: false,
                                                                                        autoComplete: "off",
                                                                                        onChange: (e)=>setCfg((c)=>updateAgentCliEnvValue(c, field.agentId, field.envKey, e.target.value))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                        lineNumber: 4136,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, `${field.agentId}:${field.envKey}`, true, {
                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                lineNumber: 4126,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4124,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4122,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 4113,
                                                        columnNumber: 19
                                                    }, this);
                                                })()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 3494,
                                            columnNumber: 13
                                        }, this) : /*
              BYOK panel — wrap the per-protocol form in a bordered card so
              the chips above (Anthropic / OpenAI / Azure / Gemini / Ollama)
              visually own the content below. Without the card, the chip
              row and the form looked like two unrelated stripes; users
              had no anchor for "this is what I configured for the active
              tab", and switching tabs felt like the whole right column
              just reshuffled. The card lives on the same white-with-soft-
              border pattern as `.agent-model-row` so the two BYOK / CLI
              panels feel like the same family.
            */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "settings-section settings-section-card settings-section-byok",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "section-head",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "settings-byok-title",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$apiProtocols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_PROTOCOL_LABELS"][apiProtocol]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4185,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "settings-byok-info-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: "settings-byok-info-button",
                                                                                "aria-label": t('settings.byokNoFileToolsNotice'),
                                                                                "aria-describedby": "settings-byok-no-file-tools-tooltip",
                                                                                "data-testid": "settings-byok-no-file-tools-trigger",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                                    name: "info",
                                                                                    size: 13
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                    lineNumber: 4194,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                lineNumber: 4187,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                id: "settings-byok-no-file-tools-tooltip",
                                                                                className: "settings-byok-info-tooltip",
                                                                                role: "tooltip",
                                                                                "data-testid": "settings-byok-no-file-tools-notice",
                                                                                children: t('settings.byokNoFileToolsNotice')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                                lineNumber: 4196,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4186,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4184,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4183,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokConnectionTestControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByokConnectionTestControl"], {
                                                            baseUrlValid: baseUrlValid,
                                                            canRunConnectionTest: !byokFirstPartyBaseUrl?.hostTypo && canRunProviderConnectionTest(cfg, {
                                                                requiresApiKey: byokRequiresApiKey
                                                            }),
                                                            labels: {
                                                                readyToTest: t('settings.byokReadyToTest'),
                                                                test: t('settings.test'),
                                                                testRetry: t('settings.testRetry'),
                                                                testRunning: t('settings.testRunning'),
                                                                testTitle: t('settings.testTitle')
                                                            },
                                                            providerTestState: providerTestState,
                                                            renderTestMessage: (result)=>renderTestMessage(result, 'api'),
                                                            suppressResultStatus: providerTestBaseUrlInvalid || providerTestApiKeyAuthFailed,
                                                            suppressReadyState: Boolean(byokPreconditionNotice || apiKeyFieldAuthFailed || providerTestBaseUrlInvalid || byokBlockingDraftIssues.length > 0),
                                                            onTestProvider: ()=>handleTestProvider()
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4207,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4182,
                                                    columnNumber: 15
                                                }, this),
                                                byokPreconditionNotice && !byokPreconditionNotice.field ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "settings-test-status error",
                                                    role: "alert",
                                                    "aria-live": "polite",
                                                    "data-action": byokPreconditionNotice.action,
                                                    children: byokPreconditionNotice.message
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4237,
                                                    columnNumber: 17
                                                }, this) : null,
                                                showProviderPreset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokProviderPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByokProviderPicker"], {
                                                    label: t('settings.providerPreset'),
                                                    customProviderLabel: t('settings.customProvider'),
                                                    providers: protocolProviders,
                                                    selectedProviderIndex: selectedProviderIndex,
                                                    onCustomProviderSelect: ()=>{
                                                        setApiModelCustomEditing(false);
                                                        updateApiConfig({
                                                            baseUrl: '',
                                                            model: '',
                                                            apiProviderBaseUrl: null
                                                        });
                                                    },
                                                    onProviderSelect: (p)=>{
                                                        setApiModelCustomEditing(false);
                                                        updateApiConfig({
                                                            baseUrl: p.baseUrl,
                                                            model: p.model,
                                                            apiProviderBaseUrl: p.baseUrl
                                                        });
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4247,
                                                    columnNumber: 17
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokKeyField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByokKeyField"], {
                                                    apiKey: cfg.apiKey,
                                                    apiKeyConsoleLink: apiKeyConsoleLink,
                                                    apiProtocol: apiProtocol,
                                                    inputRef: apiKeyInputRef,
                                                    labels: {
                                                        apiHint: t('settings.apiHint'),
                                                        apiKey: t('settings.apiKey'),
                                                        apiKeyCleaned: t('settings.apiKeyCleaned'),
                                                        apiKeyGetLink: t('settings.apiKeyGetLink', {
                                                            host: apiKeyConsoleLink.host
                                                        }),
                                                        apiKeyInvalid: t('settings.apiKeyInvalid'),
                                                        hide: t('settings.hide'),
                                                        hideKey: t('settings.hideKey'),
                                                        required: t('settings.required'),
                                                        show: t('settings.show'),
                                                        showKey: t('settings.showKey')
                                                    },
                                                    requiresApiKey: byokRequiresApiKey,
                                                    showApiKeyInvalid: Boolean(apiKeyFieldAuthFailed || byokPreconditionNotice?.field === 'api_key' || apiKeyDraftInvalid),
                                                    showApiKey: showApiKey,
                                                    onBlur: onByokKeyCommit,
                                                    onChange: (value)=>updateApiConfig({
                                                            apiKey: value
                                                        }),
                                                    onFocus: ()=>{
                                                        const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
                                                        if (byokProviderId) {
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokFieldClick"])(analytics.track, {
                                                                page_name: 'settings',
                                                                area: 'configure_execution_mode_byok',
                                                                element: 'api_key',
                                                                provider_id: byokProviderId,
                                                                has_value: Boolean(cfg.apiKey?.trim())
                                                            });
                                                        }
                                                    },
                                                    onToggleShowApiKey: ()=>setShowApiKey((v)=>!v)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4270,
                                                    columnNumber: 15
                                                }, this),
                                                showBaseUrlField ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokProviderBaseUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByokProviderBaseUrl"], {
                                                    apiProtocol: apiProtocol,
                                                    inputRef: baseUrlInputRef,
                                                    baseUrl: cfg.baseUrl,
                                                    baseUrlError: baseUrlErrorMessage,
                                                    baseUrlInvalid: Boolean(baseUrlErrorMessage),
                                                    baseUrlPlaceholder: baseUrlPlaceholder,
                                                    baseUrlReadOnly: baseUrlReadOnly,
                                                    labels: {
                                                        baseUrl: t('settings.baseUrl'),
                                                        required: t('settings.required'),
                                                        customize: t('settings.baseUrlCustomize'),
                                                        invalid: t('settings.baseUrlInvalid'),
                                                        defaultHint: t('settings.baseUrlDefaultHint'),
                                                        azureHint: t('settings.azureBaseUrlHint')
                                                    },
                                                    onBlur: commitProviderModelsInputs,
                                                    onChange: (value)=>updateApiConfig({
                                                            baseUrl: value,
                                                            apiProviderBaseUrl: null
                                                        }),
                                                    onCustomize: ()=>{
                                                        updateApiConfig({
                                                            apiProviderBaseUrl: null
                                                        });
                                                        window.setTimeout(()=>baseUrlInputRef.current?.focus(), 0);
                                                    },
                                                    onFocus: ()=>{
                                                        const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
                                                        if (byokProviderId) {
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokFieldClick"])(analytics.track, {
                                                                page_name: 'settings',
                                                                area: 'configure_execution_mode_byok',
                                                                element: 'base_url',
                                                                provider_id: byokProviderId,
                                                                has_value: Boolean(cfg.baseUrl?.trim())
                                                            });
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4313,
                                                    columnNumber: 17
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "field-label",
                                                            children: t('settings.maxTokens')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4350,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_MAX_TOKENS"],
                                                            max: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_MAX_TOKENS"],
                                                            step: 1,
                                                            placeholder: String((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelMaxTokensDefault"])(cfg.model)),
                                                            value: maxTokensInput,
                                                            onChange: (e)=>updateMaxTokensInput(e.target.value),
                                                            onBlur: ()=>setMaxTokensInput(cfg.maxTokens == null ? '' : String(cfg.maxTokens))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4351,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: t('settings.maxTokensHint')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4361,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4349,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$byok$2f$ByokModelField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByokModelField"], {
                                                    customActive: apiModelCustomActive,
                                                    customInputRef: customModelInputRef,
                                                    labels: {
                                                        customModel: t('settings.modelCustom'),
                                                        customModelLabel: apiProtocol === 'azure' ? t('settings.azureCustomDeploymentName') : t('settings.modelCustomLabel'),
                                                        customModelPlaceholder: apiProtocol === 'azure' ? 'e.g. gpt-4o-production' : t('settings.modelCustomPlaceholder'),
                                                        fetchModelsUnsupported: t('settings.fetchModelsUnsupported'),
                                                        model: apiProtocol === 'azure' ? t('settings.azureDeploymentModel') : t('settings.model'),
                                                        required: t('settings.required'),
                                                        searchPlaceholder: t('designs.searchPlaceholder'),
                                                        suggestedModelsHint: t('settings.suggestedModelsHint')
                                                    },
                                                    model: cfg.model,
                                                    modelSelectRef: modelSelectRef,
                                                    models: apiModelOptions.map((m)=>({
                                                            id: m.id,
                                                            label: apiModelOptionLabel(m, !hidesAccountModelSourceLabel(apiProtocol) && loadedAccountModelCount > 0 ? fetchedApiModelIds.has(m.id) ? t('settings.modelSourceAccount') : t('settings.modelSourceSuggested') : undefined)
                                                        })),
                                                    modelsLoadedFromAccountMessage: loadedAccountModelCount > 0 ? t(hidesAccountModelSourceLabel(apiProtocol) ? 'settings.modelsLoadedCount' : 'settings.modelsLoadedFromAccount', {
                                                        count: loadedAccountModelCount
                                                    }) : null,
                                                    providerModelsFailureMessage: providerModelsFailureMessage,
                                                    showAzureModelFetchHint: apiProtocol === 'azure',
                                                    showFetchModelsUnsupportedHint: apiProtocol === 'ollama',
                                                    showSuggestedModelsHint: apiProtocol !== 'azure' && !selectedProvider,
                                                    azureModelFetchHint: t('settings.azureModelFetchHint'),
                                                    onCustomModelChange: (value)=>updateApiConfig({
                                                            model: value
                                                        }),
                                                    onCustomModelSelect: ()=>{
                                                        apiModelUserSelectedRef.current = true;
                                                        setApiModelCustomEditing(true);
                                                        updateApiConfig({
                                                            model: ''
                                                        });
                                                    },
                                                    onFocus: ()=>{
                                                        const byokProviderId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byokProtocolToTracking"])(apiProtocol);
                                                        if (byokProviderId) {
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsByokFieldClick"])(analytics.track, {
                                                                page_name: 'settings',
                                                                area: 'configure_execution_mode_byok',
                                                                element: 'model',
                                                                provider_id: byokProviderId,
                                                                has_value: Boolean(cfg.model?.trim())
                                                            });
                                                        }
                                                    },
                                                    onModelSelect: (nextValue)=>{
                                                        apiModelUserSelectedRef.current = true;
                                                        setApiModelCustomEditing(false);
                                                        updateApiConfig({
                                                            model: nextValue
                                                        });
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4363,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: "agent-cli-env settings-memory-advanced",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            className: "agent-cli-env-summary",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "agent-cli-env-summary-title",
                                                                    children: t('settings.memoryModelInlineLabel')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4437,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "settings-memory-summary-value",
                                                                    children: cfg.model.trim() ? t('settings.memoryModelInlineSameAsChatWithModel', {
                                                                        model: cfg.model.trim()
                                                                    }) : t('settings.memoryModelInlineSameAsChat')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4440,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4436,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "agent-cli-env-body",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemoryModelInline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryModelInline"], {
                                                                mode: "api",
                                                                apiProtocol: apiProtocol,
                                                                chatApiKey: cfg.apiKey,
                                                                chatBaseUrl: cfg.baseUrl,
                                                                chatApiVersion: cfg.apiVersion ?? '',
                                                                chatModel: cfg.model,
                                                                apiModelOptions: apiModelOptions
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4449,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4448,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4435,
                                                    columnNumber: 15
                                                }, this),
                                                apiProtocol === 'azure' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "field-label",
                                                            children: t('settings.apiVersion')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4462,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: cfg.apiVersion ?? '',
                                                            placeholder: "2024-10-21",
                                                            onBlur: commitProviderModelsInputs,
                                                            onChange: (e)=>updateApiConfig({
                                                                    apiVersion: e.target.value.trim()
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4463,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4461,
                                                    columnNumber: 17
                                                }, this) : null,
                                                apiProtocol === 'senseaudio' || apiProtocol === 'aihubmix' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "field-label",
                                                            children: t('settings.byokImageModel')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4474,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$modelOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableModelSelect"], {
                                                            className: "inline-switcher__select settings-model-select settings-model-select--byok",
                                                            "aria-label": t('settings.byokImageModel'),
                                                            searchPlaceholder: t('designs.searchPlaceholder'),
                                                            popoverClassName: "settings-byok-select-popover",
                                                            minSearchableOptions: Number.POSITIVE_INFINITY,
                                                            // Live catalogue from the shared hook: AIHubMix's image
                                                            // models for aihubmix, the static SenseAudio registry
                                                            // otherwise. The default-empty option (first entry) resolves
                                                            // to the registry default on the daemon side.
                                                            models: [
                                                                {
                                                                    id: '',
                                                                    label: byokImageModelOptions[0]?.label ? `${byokImageModelOptions[0].label} (${t('settings.byokModelDefaultOption')})` : t('settings.byokModelDefaultOption')
                                                                },
                                                                ...byokImageModelOptions.map((m)=>({
                                                                        id: m.id,
                                                                        label: m.label
                                                                    }))
                                                            ],
                                                            value: cfg.byokImageModel ?? '',
                                                            onChange: (value)=>updateApiConfig({
                                                                    byokImageModel: value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4475,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4473,
                                                    columnNumber: 17
                                                }, this) : null,
                                                apiProtocol === 'aihubmix' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "field-label",
                                                            children: t('settings.byokVideoModel')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4503,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: cfg.byokVideoModel ?? '',
                                                            onChange: (e)=>updateApiConfig({
                                                                    byokVideoModel: e.target.value
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: byokVideoModelOptions[0]?.label ? `${byokVideoModelOptions[0].label} (${t('settings.byokModelDefaultOption')})` : t('settings.byokModelDefaultOption')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4513,
                                                                    columnNumber: 21
                                                                }, this),
                                                                byokVideoModelOptions.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: m.id,
                                                                        children: m.label
                                                                    }, m.id, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4519,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4504,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4502,
                                                    columnNumber: 17
                                                }, this) : null,
                                                apiProtocol === 'aihubmix' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "field-label",
                                                            children: t('settings.byokSpeechModel')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4528,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: cfg.byokSpeechModel ?? '',
                                                            onChange: (e)=>updateApiConfig({
                                                                    byokSpeechModel: e.target.value
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: byokSpeechModelOptions[0]?.label ? `${byokSpeechModelOptions[0].label} (${t('settings.byokModelDefaultOption')})` : t('settings.byokModelDefaultOption')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4533,
                                                                    columnNumber: 21
                                                                }, this),
                                                                byokSpeechModelOptions.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: m.id,
                                                                        children: m.label
                                                                    }, m.id, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4539,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4529,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4527,
                                                    columnNumber: 17
                                                }, this) : null,
                                                apiProtocol === 'aihubmix' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "field-label",
                                                            children: t('settings.byokSpeechVoice')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4548,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: cfg.byokSpeechVoice ?? '',
                                                            onChange: (e)=>updateApiConfig({
                                                                    byokSpeechVoice: e.target.value
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "alloy (default)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4553,
                                                                    columnNumber: 21
                                                                }, this),
                                                                [
                                                                    'alloy',
                                                                    'echo',
                                                                    'fable',
                                                                    'onyx',
                                                                    'nova',
                                                                    'shimmer'
                                                                ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: v,
                                                                        children: v
                                                                    }, v, false, {
                                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                        lineNumber: 4555,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4549,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4547,
                                                    columnNumber: 17
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 4181,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true) : null,
                                activeSection === 'media' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaProvidersSection, {
                                    cfg: cfg,
                                    setCfg: setCfg,
                                    mediaProvidersNotice: mediaProvidersNotice,
                                    onReloadMediaProviders: onReloadMediaProviders,
                                    pendingLocalProviderIds: pendingMediaProviderEditIds,
                                    onChange: (providerId)=>{
                                        mediaProvidersChangeVersionRef.current += 1;
                                        setPendingMediaProviderEditIds((current)=>{
                                            if (current.has(providerId)) return current;
                                            const next = new Set(current);
                                            next.add(providerId);
                                            return next;
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4568,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'integrations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IntegrationsSection, {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4585,
                                    columnNumber: 47
                                }, this) : null,
                                activeSection === 'mcpClient' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$McpClientSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["McpClientSection"], {
                                    surface: "settings"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4587,
                                    columnNumber: 44
                                }, this) : null,
                                activeSection === 'composio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorSection, {
                                    cfg: cfg,
                                    setCfg: setCfg,
                                    composioConfigLoading: composioConfigLoading,
                                    onPersistComposioKey: onPersistComposioKey,
                                    onConnectorAuthResult: ({ connectorId, action, result, errorCode })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsConnectorAuthResult"])(analytics.track, {
                                            page_name: 'settings',
                                            area: 'connectors',
                                            connector_id: connectorId,
                                            action,
                                            result,
                                            ...errorCode ? {
                                                error_code: errorCode
                                            } : {}
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4590,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'routines' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RoutinesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutinesSection"], {
                                    onClose: onClose
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4608,
                                    columnNumber: 43
                                }, this) : null,
                                activeSection === 'orbit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbitSection, {
                                    cfg: cfg,
                                    setCfg: setCfg,
                                    composioApiKeyConfigured: Boolean(cfg.composio?.apiKeyConfigured),
                                    daemonMediaProviders: daemonMediaProviders,
                                    daemonMediaProvidersFetchState: daemonMediaProvidersFetchState,
                                    onOpenComposioSection: ()=>setActiveSection('composio'),
                                    onLeaveForOrbitProject: (runConfig)=>{
                                        // Persist any in-flight Orbit edits (toggle / time) before
                                        // navigating away so they aren't silently lost. The autosave
                                        // loop is best-effort; this synchronous flush guarantees the
                                        // run-config landed on the daemon before we tear the dialog
                                        // down. Closing the dialog drops the user on the
                                        // /projects/orbit view where the agent run streams in.
                                        void onPersist(runConfig);
                                        onClose();
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4611,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'language' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "settings-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "settings-language-grid",
                                        role: "radiogroup",
                                        "aria-label": t('settings.language'),
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALES"].map((code)=>{
                                            const active = locale === code;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "radio",
                                                "aria-checked": active,
                                                className: `settings-language-tile${active ? ' active' : ''}`,
                                                onClick: ()=>{
                                                    // P1 ui_click area=language — record the locale id
                                                    // that was picked, regardless of whether it differs
                                                    // from the current one (user clicked = signal).
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsLanguageClick"])(analytics.track, {
                                                        page_name: 'settings',
                                                        area: 'language',
                                                        element: code
                                                    });
                                                    setLocale(code);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "settings-language-tile-text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "settings-language-tile-title",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALE_LABEL"][code]
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4656,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "settings-language-tile-code",
                                                                children: code
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 4659,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 4655,
                                                        columnNumber: 21
                                                    }, this),
                                                    active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "check",
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 4663,
                                                        columnNumber: 31
                                                    }, this) : null
                                                ]
                                            }, code, true, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 4637,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 4633,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4632,
                                    columnNumber: 11
                                }, this) : null,
                                activeSection === 'appearance' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearanceSection, {
                                    cfg: cfg,
                                    setCfg: setCfg
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4672,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'critiqueTheater' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CritiqueTheaterSection, {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4676,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'notifications' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationsSection, {
                                    cfg: cfg,
                                    setCfg: setCfg
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4680,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'pet' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PetSettings"], {
                                    cfg: cfg,
                                    setCfg: setCfg
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4684,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'skills' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsSection"], {
                                    cfg: cfg,
                                    setCfg: setCfg,
                                    onSkillsRefresh: onSkillsRefresh,
                                    onSkillsChanged: onSkillsChanged
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4688,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'designSystems' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$DesignSystemsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemsSection"], {
                                    cfg: cfg,
                                    setCfg: setCfg,
                                    onDesignSystemsChanged: onDesignSystemsChanged,
                                    onDesignSystemImportRebuildJob: onDesignSystemImportRebuildJob
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4697,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'projectLocations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectLocationsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectLocationsSection"], {
                                    cfg: cfg,
                                    setCfg: setCfg,
                                    onProjectsRefresh: onProjectsRefresh
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4706,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'instructions' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "settings-section settings-section-card instructions-rules-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "memory-field-block instructions-rules-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "memory-block-head",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: t('settings.customInstructionsTitle')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4714,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: t('settings.customInstructionsDesc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4715,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4713,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 4712,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "custom-instructions-input memory-global-rules-input instructions-rules-input",
                                                rows: 5,
                                                maxLength: 5000,
                                                placeholder: t('settings.customInstructionsPlaceholder'),
                                                value: cfg.customInstructions ?? '',
                                                onChange: (event)=>setCfg({
                                                        ...cfg,
                                                        customInstructions: event.target.value || undefined
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 4720,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 4711,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4710,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'memory' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$MemorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemorySection"], {
                                    onOpenConnectors: ()=>setActiveSection('composio'),
                                    chatAgentId: cfg.mode === 'daemon' ? cfg.agentId ?? null : null,
                                    chatModel: selectedMemoryChatModel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4738,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'privacy' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PrivacySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivacySection"], {
                                    cfg: cfg,
                                    setCfg: setCfg
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4746,
                                    columnNumber: 13
                                }, this) : null,
                                activeSection === 'about' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "settings-section",
                                    children: [
                                        appVersionInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: "settings-about-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "settings-about-version-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "settings-about-version-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    children: t('settings.appVersion')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4755,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "settings-about-version-num",
                                                                    children: appVersionInfo.version
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                    lineNumber: 4756,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4754,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "settings-about-download-link",
                                                            disabled: versionChecking,
                                                            onClick: handleInstallLatest,
                                                            children: versionChecking ? t('common.loading') : t('settings.installLatest')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4758,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4753,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: t('settings.appChannel')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4768,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: appVersionInfo.channel
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4769,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4767,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: t('settings.appRuntime')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4772,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: appVersionInfo.packaged ? t('settings.runtimePackaged') : t('settings.runtimeDevelopment')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4773,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4771,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: t('settings.appPlatform')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4780,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: appVersionInfo.platform
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4781,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4779,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: t('settings.appArchitecture')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4784,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: appVersionInfo.arch
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4785,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4783,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 4752,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "empty-card",
                                            children: t('settings.versionUnavailable')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 4789,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "settings-about-diagnostics",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "settings-about-diagnostics-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: t('diagnostics.exportTitle')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4793,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: t('diagnostics.exportHint')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4794,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4792,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ExportDiagnosticsButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportDiagnosticsRow"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4796,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 4791,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "settings-about-diagnostics",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "settings-about-diagnostics-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: t('settings.resetOnboarding')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4800,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: t('settings.resetOnboardingDesc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 4801,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4799,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: handleResetOnboarding,
                                                    children: t('settings.resetOnboardingButton')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 4803,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 4798,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4750,
                                    columnNumber: 13
                                }, this) : null,
                                aboutToast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                                    message: aboutToast,
                                    onDismiss: ()=>setAboutToast(null)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 4810,
                                    columnNumber: 13
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 3405,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 3195,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
            lineNumber: 3104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 3103,
        columnNumber: 5
    }, this);
}
_s(SettingsDialog, "1hZm5jr4glYjYdElMfJlxzAZtDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokImageModelOptions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokVideoModelOptions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByokSpeechModelOptions"]
    ];
});
_c = SettingsDialog;
function deriveComposioCredentialState(composio) {
    const hasPendingEdit = Boolean(composio?.apiKey?.trim());
    const hasSavedKey = Boolean(composio?.apiKeyConfigured);
    if (hasSavedKey && hasPendingEdit) return 'saved-pending';
    if (hasSavedKey) return 'saved';
    if (hasPendingEdit) return 'pending-new';
    return 'empty';
}
function ConnectorSection({ cfg, setCfg, composioConfigLoading = false, onPersistComposioKey, onConnectorsTabClick, onConnectorAuthResult }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const composio = cfg.composio ?? {};
    const updateComposio = (patch)=>{
        setCfg((curr)=>({
                ...curr,
                composio: {
                    ...curr.composio ?? {},
                    ...patch
                }
            }));
    };
    const credentialState = deriveComposioCredentialState(composio);
    const hasSavedKey = credentialState === 'saved' || credentialState === 'saved-pending';
    const hasPendingEdit = credentialState === 'pending-new' || credentialState === 'saved-pending';
    const apiKeyConfigured = credentialState !== 'empty';
    const savedApiKeyConfigured = Boolean(composio.apiKeyConfigured || hasSavedKey);
    const tail = composio.apiKeyTail?.trim();
    // Section-local save state. The Composio key bypasses the dialog's
    // global autosave loop because it is a secret — we don't want
    // partial-typed keys leaving the browser on every keystroke. The
    // user explicitly clicks "Save key" when they're ready, the request
    // completes, the daemon returns a tail-only echo, and we land in
    // the saved state with the same UI as a key loaded from disk.
    const [keySaveStatus, setKeySaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [catalogRefreshNonce, setCatalogRefreshNonce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const keySavedTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Clear the saved-state timer on unmount to avoid setState after unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorSection.useEffect": ()=>{
            return ({
                "ConnectorSection.useEffect": ()=>{
                    if (keySavedTimerRef.current != null) {
                        window.clearTimeout(keySavedTimerRef.current);
                    }
                }
            })["ConnectorSection.useEffect"];
        }
    }["ConnectorSection.useEffect"], []);
    const handleSaveKey = async ()=>{
        if (keySaveStatus === 'saving') return;
        if (!hasPendingEdit) return;
        if (composioConfigLoading) return;
        // Clear any stale timer before transitioning to 'saving' to prevent
        // it from firing during the await and flipping the button back to idle.
        if (keySavedTimerRef.current != null) {
            window.clearTimeout(keySavedTimerRef.current);
            keySavedTimerRef.current = null;
        }
        const pendingKey = composio.apiKey ?? '';
        setKeySaveStatus('saving');
        try {
            await onPersistComposioKey(cfg.composio);
            // Mirror the parent's normalization so the local draft moves
            // into the saved state immediately: drop the secret from the
            // input, mark configured, and store the last-4 tail for the
            // status badge. The parent's setConfig won't propagate back to
            // the dialog because `initial` is read once at mount.
            updateComposio({
                apiKey: '',
                apiKeyConfigured: true,
                apiKeyTail: pendingKey.trim().slice(-4)
            });
            setCatalogRefreshNonce((nonce)=>nonce + 1);
            // Clear any existing timer before starting a new one to avoid
            // a stale timeout flipping status back to 'idle' after a
            // subsequent save or clear.
            if (keySavedTimerRef.current != null) {
                window.clearTimeout(keySavedTimerRef.current);
            }
            setKeySaveStatus('saved');
            keySavedTimerRef.current = window.setTimeout(()=>{
                setKeySaveStatus('idle');
            }, 2000);
        } catch  {
            if (keySavedTimerRef.current != null) {
                window.clearTimeout(keySavedTimerRef.current);
            }
            setKeySaveStatus('error');
            keySavedTimerRef.current = null;
        }
    };
    // Action gating during hydration. Both Save and Clear are dangerous
    // before the daemon's response lands: Save would push whatever the
    // user typed (or didn't type) over the saved key, and Clear would
    // unconditionally wipe it. The skeleton state below makes this
    // visually obvious; the disabled flags here are the safety net.
    const actionsLocked = composioConfigLoading || keySaveStatus === 'saving';
    const saveDisabled = actionsLocked || !hasPendingEdit;
    const clearDisabled = actionsLocked || !apiKeyConfigured;
    // Two-stage destructive confirmation for "Clear". Clearing the saved
    // Composio API key cascades into disconnecting every connector that
    // depends on it, which is irreversible from the UI's standpoint —
    // accounts, OAuth grants, and tool access all unwind. To stop that
    // from happening on a stray click we gate the existing wipe behind
    //   1. an inline warning panel (must click "Continue"), then
    //   2. a final destructive confirmation panel with a brief arming
    //      window so the destructive button cannot be hit by reflex
    //      double-click, then
    //   3. the original clear behavior fires.
    // The panel collapses on Cancel, when the saved key disappears for
    // any other reason, or when the user navigates away from the section.
    const [clearStage, setClearStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [clearArmed, setClearArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const finalConfirmButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset the flow if the underlying state stops being clearable
    // (e.g. the daemon reloaded and there's nothing saved anymore, or
    // hydration started). This avoids a stale confirmation panel sitting
    // open over a key that no longer exists.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorSection.useEffect": ()=>{
            if (!apiKeyConfigured || composioConfigLoading) {
                setClearStage('idle');
                setClearArmed(false);
            }
        }
    }["ConnectorSection.useEffect"], [
        apiKeyConfigured,
        composioConfigLoading
    ]);
    // Arm the destructive button after a short delay once the user
    // reaches the final stage. Until then the button is visually hot
    // but inert — this is the "hold on a sec" moment that keeps a
    // reflex Enter / double-click from blowing through both stages.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectorSection.useEffect": ()=>{
            if (clearStage !== 'final') {
                setClearArmed(false);
                return;
            }
            setClearArmed(false);
            const timer = window.setTimeout({
                "ConnectorSection.useEffect.timer": ()=>setClearArmed(true)
            }["ConnectorSection.useEffect.timer"], 700);
            // Pull focus to the final confirm button so keyboard users can
            // see the arming animation finish and choose deliberately rather
            // than tabbing through stale focus state.
            const focusTimer = window.setTimeout({
                "ConnectorSection.useEffect.focusTimer": ()=>{
                    finalConfirmButtonRef.current?.focus({
                        preventScroll: true
                    });
                }
            }["ConnectorSection.useEffect.focusTimer"], 720);
            return ({
                "ConnectorSection.useEffect": ()=>{
                    window.clearTimeout(timer);
                    window.clearTimeout(focusTimer);
                }
            })["ConnectorSection.useEffect"];
        }
    }["ConnectorSection.useEffect"], [
        clearStage
    ]);
    const handleClearRequest = ()=>{
        if (clearDisabled) return;
        setClearStage('confirm');
    };
    const handleClearAbort = ()=>{
        setClearStage('idle');
        setClearArmed(false);
    };
    const handleClearContinue = ()=>{
        setClearStage('final');
    };
    const handleClearCommit = async ()=>{
        if (keySaveStatus === 'saving') return;
        if (!clearArmed) return;
        // Clear any stale timer before transitioning to 'saving', matching
        // handleSaveKey's pattern for consistency.
        if (keySavedTimerRef.current != null) {
            window.clearTimeout(keySavedTimerRef.current);
            keySavedTimerRef.current = null;
        }
        setKeySaveStatus('saving');
        try {
            const cleared = {
                apiKey: '',
                apiKeyConfigured: false,
                apiKeyTail: ''
            };
            await onPersistComposioKey(cleared);
            updateComposio(cleared);
            setCatalogRefreshNonce((nonce)=>nonce + 1);
            setClearStage('idle');
            setClearArmed(false);
            setKeySaveStatus('idle');
        } catch  {
            if (keySavedTimerRef.current != null) {
                window.clearTimeout(keySavedTimerRef.current);
            }
            setKeySaveStatus('error');
            keySavedTimerRef.current = null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section settings-section-connectors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: `field settings-section-connectors-credentials${composioConfigLoading ? ' is-loading' : ''}`,
                "aria-busy": composioConfigLoading || undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field-label-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-label-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-label",
                                        children: t('settings.connectorsComposioApiKey')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5076,
                                        columnNumber: 13
                                    }, this),
                                    composioConfigLoading ? // Skeleton chip stands in for the "Saved · ••••XXXX" badge
                                    // while we wait for the daemon. Same footprint as the real
                                    // chip so the row geometry doesn't jump on resolve.
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-status-badge field-status-badge-skeleton",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5081,
                                        columnNumber: 15
                                    }, this) : hasSavedKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-status-badge",
                                        title: t('settings.connectorsSavedTitle'),
                                        children: tail ? t('settings.connectorsSavedWithTail', {
                                            tail
                                        }) : t('settings.connectorsSaved')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5086,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5075,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "field-label-link",
                                href: "https://app.composio.dev",
                                target: "_blank",
                                rel: "noreferrer",
                                onClick: ()=>onConnectorsTabClick?.('get_api_key'),
                                children: [
                                    t('settings.connectorsGetApiKey'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "external-link",
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5096,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5074,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "field-input-skeleton-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        value: composio.apiKey ?? '',
                                        placeholder: composioConfigLoading ? t('settings.connectorsLoadingSavedKey') : hasSavedKey ? t('settings.connectorsReplaceKeyPlaceholder') : t('settings.connectorsApiKeyPlaceholder'),
                                        onFocus: ()=>onConnectorsTabClick?.('api_key_input'),
                                        onChange: (e)=>updateComposio({
                                                apiKey: e.target.value
                                            }),
                                        onKeyDown: (e)=>{
                                            // Enter from the password field commits the key — the
                                            // most common save gesture for credential fields, and
                                            // it removes the need to mouse over to the button.
                                            if (e.key === 'Enter' && hasPendingEdit && keySaveStatus !== 'saving' && !composioConfigLoading) {
                                                e.preventDefault();
                                                void handleSaveKey();
                                            }
                                        },
                                        disabled: composioConfigLoading,
                                        "aria-describedby": "composio-api-key-help"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5114,
                                        columnNumber: 13
                                    }, this),
                                    composioConfigLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-input-skeleton-shimmer",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5144,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: 'primary settings-connectors-save' + (keySaveStatus === 'saving' ? ' is-busy' : ''),
                                disabled: saveDisabled,
                                onClick: ()=>{
                                    onConnectorsTabClick?.('save_key');
                                    void handleSaveKey();
                                },
                                title: composioConfigLoading ? t('settings.connectorsLoadingSavedKey') : t('settings.connectorsSaveKeyTitle'),
                                children: keySaveStatus === 'saving' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "spinner",
                                            size: 12,
                                            className: "icon-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.connectorsKeySaving')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : keySaveStatus === 'saved' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.connectorsKeySaved')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : t('settings.connectorsSaveKey')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: 'ghost settings-connectors-clear' + (clearStage !== 'idle' ? ' is-arming' : ''),
                                disabled: clearDisabled,
                                title: composioConfigLoading ? t('settings.connectorsLoadingSavedKey') : undefined,
                                "aria-expanded": clearStage !== 'idle',
                                "aria-controls": "composio-clear-confirm",
                                onClick: ()=>{
                                    onConnectorsTabClick?.('clear');
                                    handleClearRequest();
                                },
                                children: t('settings.connectorsClear')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5107,
                        columnNumber: 9
                    }, this),
                    clearStage !== 'idle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "composio-clear-confirm",
                        className: 'settings-connectors-clear-confirm is-' + clearStage + (clearStage === 'final' && clearArmed ? ' is-armed' : ''),
                        role: "alertdialog",
                        "aria-modal": "false",
                        "aria-labelledby": "composio-clear-confirm-title",
                        "aria-describedby": "composio-clear-confirm-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-connectors-clear-confirm-icon",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "settings-connectors-clear-confirm-glyph",
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5216,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-connectors-clear-confirm-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        id: "composio-clear-confirm-title",
                                        children: clearStage === 'final' ? t('settings.connectorsClearFinalTitle') : t('settings.connectorsClearConfirmTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        id: "composio-clear-confirm-body",
                                        children: clearStage === 'final' ? t('settings.connectorsClearFinalBody') : t('settings.connectorsClearConfirmBody')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5224,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-connectors-clear-confirm-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ghost",
                                        onClick: handleClearAbort,
                                        children: t('settings.connectorsClearCancel')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5231,
                                        columnNumber: 15
                                    }, this),
                                    clearStage === 'confirm' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "settings-connectors-clear-step",
                                        onClick: handleClearContinue,
                                        children: [
                                            t('settings.connectorsClearConfirmContinue'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "chevron-right",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5245,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5239,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: finalConfirmButtonRef,
                                        type: "button",
                                        className: 'settings-connectors-clear-commit' + (clearArmed ? ' is-armed' : ''),
                                        onClick: handleClearCommit,
                                        disabled: !clearArmed,
                                        "aria-disabled": !clearArmed,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "settings-connectors-clear-commit-arm",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5259,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "settings-connectors-clear-commit-label",
                                                children: clearArmed ? t('settings.connectorsClearFinalConfirm') : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "spinner",
                                                            size: 12,
                                                            className: "icon-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 5265,
                                                            columnNumber: 25
                                                        }, this),
                                                        t('settings.connectorsClearArming')
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5260,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5204,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "composio-api-key-help",
                        className: `hint${composioConfigLoading ? ' field-hint-loading' : ''}`,
                        role: composioConfigLoading ? 'status' : undefined,
                        "aria-live": composioConfigLoading ? 'polite' : undefined,
                        children: composioConfigLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "spinner",
                                    size: 11,
                                    className: "icon-spin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5283,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t('settings.connectorsLoadingSavedKey')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5284,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : keySaveStatus === 'error' ? t('settings.connectorsKeyError') : hasSavedKey ? t('settings.connectorsHelpSaved') : apiKeyConfigured ? t('settings.connectorsHelpUnsaved') : t('settings.connectorsHelpEmpty')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 5070,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ConnectorsBrowser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorsBrowser"], {
                composioConfigured: savedApiKeyConfigured,
                catalogRefreshKey: `${savedApiKeyConfigured ? 'configured' : 'empty'}:${tail ?? ''}:${catalogRefreshNonce}`,
                ...onConnectorsTabClick ? {
                    onConnectorsTabClick
                } : {},
                ...onConnectorAuthResult ? {
                    onConnectorAuthResult
                } : {}
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 5296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 5068,
        columnNumber: 5
    }, this);
}
_s1(ConnectorSection, "J9GJwStpGQ25+jrEcVtG2xEnqF8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c1 = ConnectorSection;
async function persistConfigAndRunOrbit(config, options) {
    if (options?.syncMediaProviders !== false) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncMediaProvidersToDaemon"])(config.mediaProviders, {
            daemonProviders: options?.daemonProviders
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncConfigToDaemon"])(config, {
        throwOnError: true
    });
    const response = await fetch('/api/orbit/run', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            locale: options?.locale ?? null
        })
    });
    if (!response.ok) throw new Error('Orbit run failed');
    return await response.json();
}
function configForManualOrbitRun(config) {
    const effectiveTemplateSkillId = config.orbit?.templateSkillId || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].templateSkillId || '';
    if (!effectiveTemplateSkillId) return config;
    return {
        ...config,
        orbit: {
            ...config.orbit ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"],
            templateSkillId: effectiveTemplateSkillId
        }
    };
}
function isOrbitRunDisabled(isBusy, connectedCount) {
    return isBusy || connectedCount === null || connectedCount === 0;
}
function formatRelative(iso, t) {
    if (!iso) return null;
    const then = new Date(iso).getTime();
    if (Number.isNaN(then)) return null;
    const diffMs = Date.now() - then;
    const absMin = Math.round(Math.abs(diffMs) / 60_000);
    if (absMin < 1) return t('common.justNow');
    if (absMin < 60) return t('common.minutesAgo', {
        n: absMin
    });
    const absHr = Math.round(absMin / 60);
    if (absHr < 24) return t('common.hoursAgo', {
        n: absHr
    });
    const absDay = Math.round(absHr / 24);
    return t('common.daysAgo', {
        n: absDay
    });
}
function OrbitSection({ cfg, setCfg, composioApiKeyConfigured, daemonMediaProviders, daemonMediaProvidersFetchState, onOpenComposioSection, onLeaveForOrbitProject }) {
    _s2();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const orbit = cfg.orbit ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"];
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [running, setRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [legacyLastRunTemplateSkillId, setLegacyLastRunTemplateSkillId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const legacyLastRunIdentity = status?.lastRun?.id ?? `${status?.lastRun?.completedAt ?? ''}:${status?.lastRun?.agentRunId ?? ''}:${status?.lastRun?.markdown ?? ''}`;
    // Orbit templates ship under the renderable design-templates registry after
    // the skills/design-templates split. We fetch on mount and keep three states
    // for graceful UX: `null` = still loading, `[]` = loaded with no Orbit
    // templates available, `SkillSummary[]` = ready. If the daemon is offline
    // the call resolves with [] (see fetchDesignTemplates) so the section never
    // throws — the rest of the Orbit controls keep working.
    const [orbitTemplates, setOrbitTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Connector presence drives the configuration gate at the top of the Orbit
    // tab. We track three states: `null` = still loading (skip rendering the
    // gate so it doesn't flash before data arrives), `0` = no connectors
    // present (gate is shown), `>0` = at least one connected integration
    // (gate is hidden). We only count connectors with `status === 'connected'`
    // because the catalog itself ships hundreds of available rows — what
    // matters for Orbit is whether anything has actually been wired up.
    const [connectedCount, setConnectedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Once the user clicks Generate we close Settings and navigate away. The ref
    // lets late-arriving handlers no-op without React warnings.
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            // React Strict Mode replays mount effects in development. Reset the ref on
            // each setup so the synthetic cleanup from the first pass does not leave
            // async Orbit status / connector refreshes permanently thinking the panel
            // has unmounted.
            isMountedRef.current = true;
            return ({
                "OrbitSection.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["OrbitSection.useEffect"];
        }
    }["OrbitSection.useEffect"], []);
    const updateOrbit = (patch)=>{
        setCfg((curr)=>({
                ...curr,
                orbit: {
                    ...curr.orbit ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"],
                    ...patch
                }
            }));
    };
    const refreshStatus = async ()=>{
        try {
            const response = await fetch('/api/orbit/status');
            if (!response.ok) return;
            if (!isMountedRef.current) return;
            setStatus(await response.json());
        } catch  {
        // Daemon may be offline in API-only development; keep local controls usable.
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            void refreshStatus();
        }
    }["OrbitSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            if (!status?.running) return undefined;
            const interval = window.setInterval({
                "OrbitSection.useEffect.interval": ()=>{
                    void refreshStatus();
                }
            }["OrbitSection.useEffect.interval"], 3000);
            return ({
                "OrbitSection.useEffect": ()=>window.clearInterval(interval)
            })["OrbitSection.useEffect"];
        }
    }["OrbitSection.useEffect"], [
        status?.running
    ]);
    // Fetch the design-template registry once on mount and filter to
    // scenario === 'orbit'. We tolerate fetch failure:
    // fetchDesignTemplates already swallows errors and returns []. The
    // component then transitions from "loading" → "empty" and the rest of the
    // Orbit panel stays fully functional.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            let alive = true;
            void ({
                "OrbitSection.useEffect": async ()=>{
                    const all = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDesignTemplates"])();
                    if (!alive) return;
                    const filtered = all.filter({
                        "OrbitSection.useEffect.filtered": (s)=>s.scenario === 'orbit'
                    }["OrbitSection.useEffect.filtered"]);
                    // Stable order: featured first (higher number = more featured), then by name.
                    filtered.sort({
                        "OrbitSection.useEffect": (a, b)=>{
                            const af = a.featured ?? 0;
                            const bf = b.featured ?? 0;
                            if (af !== bf) return bf - af;
                            return a.name.localeCompare(b.name);
                        }
                    }["OrbitSection.useEffect"]);
                    setOrbitTemplates(filtered);
                }
            })["OrbitSection.useEffect"]();
            return ({
                "OrbitSection.useEffect": ()=>{
                    alive = false;
                }
            })["OrbitSection.useEffect"];
        }
    }["OrbitSection.useEffect"], []);
    const refreshConnectedCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrbitSection.useCallback[refreshConnectedCount]": async ()=>{
            const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchConnectors"])();
            if (!isMountedRef.current) return;
            const connected = list.filter({
                "OrbitSection.useCallback[refreshConnectedCount]": (c)=>c.status === 'connected'
            }["OrbitSection.useCallback[refreshConnectedCount]"]).length;
            setConnectedCount(connected);
        }
    }["OrbitSection.useCallback[refreshConnectedCount]"], []);
    // Fetch the connector catalog on mount to determine whether the Orbit
    // configuration gate should render. fetchConnectors swallows errors and
    // returns []; if the daemon is offline we treat that as "0 connected" and
    // surface the gate so the user has a clear path forward instead of being
    // dropped into a broken Orbit configuration.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            void refreshConnectedCount();
        }
    }["OrbitSection.useEffect"], [
        refreshConnectedCount
    ]);
    // Connector auth often completes in another window. Re-check when focus
    // returns so the Orbit gate reflects newly connected accounts without
    // requiring the user to close and reopen Settings.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            const onFocus = {
                "OrbitSection.useEffect.onFocus": ()=>{
                    void refreshConnectedCount();
                }
            }["OrbitSection.useEffect.onFocus"];
            window.addEventListener('focus', onFocus);
            return ({
                "OrbitSection.useEffect": ()=>window.removeEventListener('focus', onFocus)
            })["OrbitSection.useEffect"];
        }
    }["OrbitSection.useEffect"], [
        refreshConnectedCount
    ]);
    // The id used to drive the prompt template — coalesces a null/empty
    // saved value to the built-in default (DEFAULT_ORBIT.templateSkillId,
    // currently 'orbit-general'). The select no longer offers a "no template"
    // option, so legacy configs that stored null are presented as if they
    // were on the default. Manual runs persist this effective value before
    // launching so the daemon uses the same template the UI displays.
    const effectiveTemplateSkillId = orbit.templateSkillId || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].templateSkillId || '';
    const supportsTemplateScopedHistory = status?.lastRunsByTemplate !== undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitSection.useEffect": ()=>{
            const hasTemplateScopedHistory = Object.keys(status?.lastRunsByTemplate ?? {}).length > 0;
            const hasLegacyUnscopedLastRun = Boolean(status?.lastRun && !status.lastRun.templateSkillId);
            if (!hasLegacyUnscopedLastRun || hasTemplateScopedHistory) {
                setLegacyLastRunTemplateSkillId(null);
                return;
            }
            setLegacyLastRunTemplateSkillId({
                "OrbitSection.useEffect": (current)=>current ?? (effectiveTemplateSkillId || null)
            }["OrbitSection.useEffect"]);
        }
    }["OrbitSection.useEffect"], [
        effectiveTemplateSkillId,
        legacyLastRunIdentity,
        status
    ]);
    const selectedTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrbitSection.useMemo[selectedTemplate]": ()=>{
            if (!effectiveTemplateSkillId || !orbitTemplates) return null;
            return orbitTemplates.find({
                "OrbitSection.useMemo[selectedTemplate]": (s)=>s.id === effectiveTemplateSkillId
            }["OrbitSection.useMemo[selectedTemplate]"]) ?? null;
        }
    }["OrbitSection.useMemo[selectedTemplate]"], [
        effectiveTemplateSkillId,
        orbitTemplates
    ]);
    const triggerNow = ()=>{
        if (running) return;
        setRunning(true);
        setNotice(null);
        void (async ()=>{
            try {
                const runConfig = configForManualOrbitRun(cfg);
                const payload = await persistConfigAndRunOrbit(runConfig, {
                    daemonProviders: daemonMediaProviders,
                    syncMediaProviders: daemonMediaProvidersFetchState === 'ok',
                    locale
                });
                if (!payload.projectId) throw new Error('Orbit run did not return a project');
                onLeaveForOrbitProject(runConfig);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId: payload.projectId,
                    conversationId: null,
                    fileName: null
                });
            } catch  {
                if (!isMountedRef.current) return;
                setNotice({
                    kind: 'error',
                    message: t('settings.orbit.runError')
                });
            } finally{
                if (!isMountedRef.current) return;
                setRunning(false);
                void refreshStatus();
            }
        })();
    };
    const templateScopedLastRun = effectiveTemplateSkillId ? status?.lastRunsByTemplate?.[effectiveTemplateSkillId] ?? null : null;
    const hasLegacyUnscopedLastRun = Boolean(status?.lastRun && !status.lastRun.templateSkillId && legacyLastRunTemplateSkillId && legacyLastRunTemplateSkillId === effectiveTemplateSkillId);
    const lastRun = supportsTemplateScopedHistory ? templateScopedLastRun ?? (hasLegacyUnscopedLastRun ? status?.lastRun ?? null : null) : status?.lastRun ?? null;
    const nextRunLabel = status?.nextRunAt ? new Date(status.nextRunAt).toLocaleString() : null;
    const lastRunAbs = lastRun ? new Date(lastRun.completedAt).toLocaleString() : null;
    const lastRunRel = formatRelative(lastRun?.completedAt, t);
    const liveArtifactHref = lastRun?.artifactId && lastRun?.artifactProjectId ? `/api/live-artifacts/${encodeURIComponent(lastRun.artifactId)}/preview?projectId=${encodeURIComponent(lastRun.artifactProjectId)}` : null;
    const isBusy = running || Boolean(status?.running);
    const copyMarkdown = async ()=>{
        if (!lastRun?.markdown) return;
        try {
            await navigator.clipboard.writeText(lastRun.markdown);
            setCopied(true);
            window.setTimeout(()=>setCopied(false), 1600);
        } catch  {
        // Clipboard access may be denied in some browsing contexts; silently skip.
        }
    };
    // Proportional widths for the run-result meter. We avoid showing 0-width
    // segments by falling back to a tiny sliver when a category has hits but
    // rounds to 0% — the visual "something happened here" cue matters more
    // than exact proportion at low counts.
    const total = lastRun ? Math.max(lastRun.connectorsSucceeded + lastRun.connectorsSkipped + lastRun.connectorsFailed, 1) : 1;
    const segPct = (n)=>{
        if (!lastRun || n <= 0) return 0;
        const pct = n / total * 100;
        return pct < 3 ? 3 : pct;
    };
    const meterSucceeded = lastRun ? segPct(lastRun.connectorsSucceeded) : 0;
    const meterSkipped = lastRun ? segPct(lastRun.connectorsSkipped) : 0;
    const meterFailed = lastRun ? segPct(lastRun.connectorsFailed) : 0;
    const automationState = orbit.enabled ? 'active' : 'off';
    const triggerLabel = lastRun?.trigger === 'manual' ? t('settings.orbit.triggerManual') : t('settings.orbit.triggerScheduled');
    // Surface the configuration gate when we know for sure that the user has
    // no connected integrations. While `connectedCount === null` we are still
    // loading and intentionally hide the gate so the panel doesn't flash an
    // empty-state warning before data arrives. Once resolved, `0` triggers
    // the gate. The gate's copy + CTA branch on whether a Composio API key
    // has been saved: missing key → push toward configuring Composio first;
    // key present, no connections → push toward picking an integration.
    const showConfigGate = connectedCount === 0;
    const gateBodyKey = composioApiKeyConfigured ? 'settings.orbit.gateBody' : 'settings.orbit.gateBodyNoKey';
    const gateActionKey = composioApiKeyConfigured ? 'settings.orbit.gateAction' : 'settings.orbit.gateActionNoKey';
    // Disable the hero's "Run it now" CTA while the gate is visible: running
    // without any connector wired up surfaces a cryptic backend error. We
    // keep the button mounted so layout stays stable; a tooltip and the
    // adjacent gate make the disabled reason obvious.
    const runDisabled = isOrbitRunDisabled(isBusy, connectedCount);
    const runDisabledTitle = showConfigGate ? t('settings.orbit.gateTitle') : t('settings.orbit.runTitle');
    // When the configuration gate is visible (no connector available) we
    // also lock down every secondary control on the panel — schedule
    // toggle, time input, prompt template select, and the missing-template
    // Reset button. Touching any of them before a connector exists either
    // produces a no-op or persists state the user can't actually exercise.
    // Locking them keeps the panel honest, prevents "ghost configuration",
    // and reinforces the gate's CTA as the only meaningful next step.
    const controlsLocked = showConfigGate;
    const controlsLockedHint = controlsLocked ? t('settings.orbit.controlsLockedHint') : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section orbit-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "orbit-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-hero-mark",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "refresh",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 5668,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5667,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-hero-eyebrow",
                                children: t('settings.orbit.eyebrow')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5671,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "orbit-hero-title",
                                children: t('settings.orbit.title')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5672,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "orbit-hero-lede",
                                children: t('settings.orbit.lede')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5673,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-hero-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `orbit-state-pill orbit-state-${automationState}`,
                                title: orbit.enabled ? t('settings.orbit.statusOnTitle') : t('settings.orbit.statusOffTitle'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-state-dot",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5686,
                                        columnNumber: 13
                                    }, this),
                                    orbit.enabled ? t('settings.orbit.statusActive') : t('settings.orbit.statusOff')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: 'orbit-run-cta' + (isBusy ? ' is-busy' : ''),
                                onClick: ()=>void triggerNow(),
                                disabled: runDisabled,
                                title: runDisabledTitle,
                                children: isBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "spinner",
                                            size: 14,
                                            className: "icon-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5700,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.orbit.running')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5701,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "play",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5705,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.orbit.runOpen')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5706,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5677,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 5666,
                columnNumber: 7
            }, this),
            showConfigGate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orbit-config-gate",
                role: "region",
                "aria-label": t('settings.orbit.gateAriaLabel'),
                "data-testid": "orbit-config-gate",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-config-gate-glyph",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-config-gate-ring orbit-config-gate-ring-outer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5732,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-config-gate-ring orbit-config-gate-ring-inner"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5733,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-config-gate-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "link",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5735,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5734,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5731,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-config-gate-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-config-gate-eyebrow",
                                children: t('settings.orbit.gateEyebrow')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5739,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "orbit-config-gate-title",
                                children: t('settings.orbit.gateTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5742,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "orbit-config-gate-body",
                                children: t(gateBodyKey)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5745,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5738,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-config-gate-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "orbit-config-gate-action",
                            onClick: onOpenComposioSection,
                            "data-testid": "orbit-config-gate-action",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t(gateActionKey)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5756,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-right",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5757,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 5750,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5749,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 5725,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `orbit-automation${orbit.enabled ? ' is-on' : ''}${selectedTemplate ? ' has-template' : ''}${controlsLocked ? ' is-locked' : ''}`,
                "aria-busy": orbitTemplates === null || undefined,
                "aria-disabled": controlsLocked || undefined,
                "data-testid": "orbit-automation-card",
                children: [
                    controlsLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-automation-lock-banner",
                        role: "note",
                        "aria-label": t('settings.orbit.controlsLockedHint'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "link",
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5782,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-automation-lock-badge",
                                children: t('settings.orbit.controlsLockedBadge')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5783,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-automation-lock-text",
                                children: t('settings.orbit.controlsLockedHint')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5786,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5777,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-automation-row orbit-automation-switch-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-automation-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-title",
                                        children: t('settings.orbit.dailySummaryTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5793,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-sub",
                                        children: t('settings.orbit.dailySummarySub')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5794,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5792,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "switch",
                                "aria-checked": orbit.enabled,
                                "aria-disabled": controlsLocked || undefined,
                                className: `orbit-switch${orbit.enabled ? ' is-on' : ''}${controlsLocked ? ' is-locked' : ''}`,
                                disabled: controlsLocked,
                                title: controlsLockedHint,
                                onClick: ()=>updateOrbit({
                                        enabled: !orbit.enabled
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-switch-track",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "orbit-switch-thumb"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 5809,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5808,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-switch-text",
                                        children: orbit.enabled ? t('settings.orbit.on') : t('settings.orbit.off')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5811,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5798,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5791,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-automation-divider",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5817,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-automation-row orbit-automation-schedule-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-automation-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-title",
                                        children: t('settings.orbit.runTimeTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5821,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-sub",
                                        children: t('settings.orbit.runTimeSub')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5822,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5820,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-automation-schedule-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        className: "orbit-time-input",
                                        value: orbit.time,
                                        onChange: (e)=>updateOrbit({
                                                time: e.target.value || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].time
                                            }),
                                        "aria-label": t('settings.orbit.runTimeAria'),
                                        "aria-disabled": controlsLocked || undefined,
                                        disabled: controlsLocked,
                                        title: controlsLockedHint
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5827,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "orbit-next-run",
                                        "aria-live": "polite",
                                        children: orbit.enabled ? nextRunLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "orbit-next-run-label",
                                                    children: t('settings.orbit.nextRun')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 5841,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "orbit-next-run-value",
                                                    children: nextRunLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 5842,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "orbit-next-run-label",
                                                    children: t('settings.orbit.nextRun')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 5846,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "orbit-next-run-value muted",
                                                    children: t('settings.orbit.nextRunScheduledAfterSave')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 5847,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "orbit-next-run-label",
                                                    children: t('settings.orbit.schedule')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 5852,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "orbit-next-run-value muted",
                                                    children: t('settings.orbit.pausedManualOnly')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 5853,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5837,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5826,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5819,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-automation-divider",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5860,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-automation-row orbit-automation-template-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-automation-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-title",
                                        children: t('settings.orbit.templateTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5877,
                                        columnNumber: 13
                                    }, this),
                                    orbitTemplates && effectiveTemplateSkillId && !orbitTemplates.some((s)=>s.id === effectiveTemplateSkillId) ? // The saved skill id is no longer installed — surface a
                                    // soft warning right under the title, with an inline Reset
                                    // action that pushes back to DEFAULT_ORBIT (currently
                                    // `orbit-general`). Reset is hidden when the missing id
                                    // already equals the default, so the control never loops
                                    // on itself.
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-sub orbit-automation-sub-warning",
                                        role: "status",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "history",
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5891,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    t('settings.orbit.templateMissing', {
                                                        id: effectiveTemplateSkillId
                                                    }),
                                                    ' ',
                                                    orbitTemplates.length === 0 ? t('settings.orbit.templateMissingInstall') : t('settings.orbit.templateMissingPickAnother')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5892,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].templateSkillId && effectiveTemplateSkillId !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].templateSkillId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "orbit-automation-sub-action",
                                                disabled: controlsLocked,
                                                "aria-disabled": controlsLocked || undefined,
                                                onClick: ()=>updateOrbit({
                                                        templateSkillId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].templateSkillId
                                                    }),
                                                title: controlsLocked ? t('settings.orbit.controlsLockedHint') : t('settings.orbit.templateResetTitle', {
                                                    id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ORBIT"].templateSkillId
                                                }),
                                                children: t('settings.orbit.templateReset')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5900,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5887,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-automation-sub",
                                        children: t('settings.orbit.templateHelp')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5921,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5874,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-automation-template-controls",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "orbit-template-select",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "orbit-template-select-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "orbit-template-select",
                                                className: "orbit-template-select-input",
                                                "aria-label": t('settings.orbit.templateAria'),
                                                "aria-disabled": controlsLocked || undefined,
                                                value: effectiveTemplateSkillId,
                                                disabled: orbitTemplates === null || controlsLocked,
                                                title: controlsLockedHint,
                                                onChange: (e)=>{
                                                    const next = e.target.value;
                                                    // Guard against the loading placeholder making it
                                                    // through onChange — only persist real skill ids.
                                                    if (!next) return;
                                                    updateOrbit({
                                                        templateSkillId: next
                                                    });
                                                },
                                                children: [
                                                    orbitTemplates === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: t('settings.orbit.templatesLoading')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 5952,
                                                        columnNumber: 21
                                                    }, this) : null,
                                                    orbitTemplates && effectiveTemplateSkillId && !orbitTemplates.some((s)=>s.id === effectiveTemplateSkillId) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: effectiveTemplateSkillId,
                                                        hidden: true,
                                                        children: t('settings.orbit.templateMissingOption', {
                                                            id: effectiveTemplateSkillId
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 5963,
                                                        columnNumber: 21
                                                    }, this) : null,
                                                    orbitTemplates && orbitTemplates.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                        label: t('settings.orbit.templatesOptgroup'),
                                                        children: orbitTemplates.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s.id,
                                                                // Browser-native tooltip — surfaces the skill
                                                                // description on hover without needing a
                                                                // dedicated preview panel.
                                                                title: s.description ?? undefined,
                                                                children: s.name
                                                            }, s.id, false, {
                                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                                lineNumber: 5972,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                        lineNumber: 5970,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5929,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "chevron-down",
                                                size: 12,
                                                className: "orbit-template-select-chevron"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 5986,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 5928,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 5927,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 5926,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 5873,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 5770,
                columnNumber: 7
            }, this),
            lastRun ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orbit-receipt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-receipt-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-receipt-head-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-receipt-eyebrow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "history",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 6008,
                                                columnNumber: 17
                                            }, this),
                                            t('settings.orbit.lastRun')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6007,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "orbit-receipt-timestamp",
                                        title: lastRunAbs ?? undefined,
                                        children: lastRunRel ?? lastRunAbs
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6011,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6006,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `orbit-trigger-pill orbit-trigger-${lastRun.trigger ?? 'scheduled'}`,
                                children: triggerLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6018,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6005,
                        columnNumber: 11
                    }, this),
                    notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `orbit-inline-notice is-${notice.kind}`,
                        role: notice.kind === 'error' ? 'alert' : 'status',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: notice.kind === 'error' ? 'close' : 'check',
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6030,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: notice.message
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6031,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6026,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-meter",
                        role: "img",
                        "aria-label": t('settings.orbit.meterAria', {
                            succeeded: lastRun.connectorsSucceeded,
                            skipped: lastRun.connectorsSkipped,
                            failed: lastRun.connectorsFailed,
                            checked: lastRun.connectorsChecked
                        }),
                        children: [
                            meterSucceeded > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-meter-seg is-succeeded",
                                style: {
                                    width: `${meterSucceeded}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6046,
                                columnNumber: 15
                            }, this) : null,
                            meterSkipped > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-meter-seg is-skipped",
                                style: {
                                    width: `${meterSkipped}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6052,
                                columnNumber: 15
                            }, this) : null,
                            meterFailed > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-meter-seg is-failed",
                                style: {
                                    width: `${meterFailed}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6058,
                                columnNumber: 15
                            }, this) : null,
                            meterSucceeded + meterSkipped + meterFailed === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-meter-seg is-empty"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6064,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6035,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "orbit-counts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-count",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: t('settings.orbit.countChecked')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6069,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: lastRun.connectorsChecked
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6070,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6068,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-count is-succeeded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: t('settings.orbit.countSucceeded')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6073,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: lastRun.connectorsSucceeded
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6074,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6072,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-count is-skipped",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: t('settings.orbit.countSkipped')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6077,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: lastRun.connectorsSkipped
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6078,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6076,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "orbit-count is-failed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: t('settings.orbit.countFailed')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6081,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: lastRun.connectorsFailed
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6082,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6080,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6067,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6004,
                columnNumber: 9
            }, this) : notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `orbit-inline-notice is-${notice.kind}`,
                role: notice.kind === 'error' ? 'alert' : 'status',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: notice.kind === 'error' ? 'close' : 'check',
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6091,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: notice.message
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6092,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6087,
                columnNumber: 9
            }, this) : null,
            lastRun ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `orbit-artifact-strip${liveArtifactHref ? '' : ' is-legacy'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-artifact-strip-icon",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "file-code",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 6102,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-artifact-strip-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-artifact-strip-kicker",
                                children: liveArtifactHref ? t('settings.orbit.artifactKickerLive') : t('settings.orbit.artifactKickerLegacy')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-artifact-strip-title",
                                children: t('settings.orbit.artifactTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "orbit-artifact-strip-meta",
                                children: liveArtifactHref ? t('settings.orbit.artifactMetaLive') : t('settings.orbit.artifactMetaLegacy')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orbit-artifact-strip-actions",
                        children: [
                            lastRun.markdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "orbit-artifact-ghost",
                                onClick: ()=>void copyMarkdown(),
                                title: t('settings.orbit.copyMarkdownTitle'),
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 6129,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.orbit.copied')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 6130,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "copy",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 6134,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('settings.orbit.copy')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 6135,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6121,
                                columnNumber: 15
                            }, this) : null,
                            liveArtifactHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "orbit-artifact-open",
                                href: liveArtifactHref,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.orbit.openArtifact')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "external-link",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6141,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6119,
                        columnNumber: 11
                    }, this),
                    lastRun.markdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "orbit-artifact-peek",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.orbit.sourceMarkdown')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6156,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                children: lastRun.markdown
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6153,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6098,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 5664,
        columnNumber: 5
    }, this);
}
_s2(OrbitSection, "c/aWb+UsCNrnHEC0K/HX8pyfMAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c2 = OrbitSection;
function MediaProvidersSection({ cfg, setCfg, mediaProvidersNotice, onReloadMediaProviders, providerModelsCache: sharedProviderModelsCache, onProviderModelsCacheChange, pendingLocalProviderIds, onChange }) {
    _s3();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const [reloadRunning, setReloadRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reloadNotice, setReloadNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleApiKeys, setVisibleApiKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MediaProvidersSection.useState": ()=>new Set()
    }["MediaProvidersSection.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaProvidersSection.useEffect": ()=>{
            setVisibleApiKeys({
                "MediaProvidersSection.useEffect": (current)=>{
                    const next = new Set();
                    for (const providerId of current){
                        const apiKey = cfg.mediaProviders?.[providerId]?.apiKey ?? '';
                        if (apiKey.trim()) next.add(providerId);
                    }
                    return next.size === current.size ? current : next;
                }
            }["MediaProvidersSection.useEffect"]);
        }
    }["MediaProvidersSection.useEffect"], [
        cfg.mediaProviders
    ]);
    const visibleProviders = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_PROVIDERS"].filter((p)=>p.settingsVisible !== false);
    // Split the catalog into two surfaces:
    //   - "Available" — daemon ships a real client, user can paste a key
    //     and it works. Rendered as full editable cards.
    //   - "Coming soon" — listed for transparency / roadmap signaling but
    //     the daemon has no client yet, so the form fields would be
    //     disabled placeholders. Hiding them behind a <details> keeps the
    //     primary list focused (was 16 cards, now 8) without dropping the
    //     informational value.
    const availableProviders = visibleProviders.filter((p)=>p.integrated).slice().sort((a, b)=>{
        const aEntry = cfg.mediaProviders?.[a.id];
        const bEntry = cfg.mediaProviders?.[b.id];
        const aConfigured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStoredMediaProviderEntryPresent"])(aEntry);
        const bConfigured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStoredMediaProviderEntryPresent"])(bEntry);
        if (aConfigured !== bConfigured) return aConfigured ? -1 : 1;
        return a.label.localeCompare(b.label);
    });
    const comingSoonProviders = visibleProviders.filter((p)=>!p.integrated).slice().sort((a, b)=>a.label.localeCompare(b.label));
    const updateProvider = (provider, patch)=>{
        onChange(provider.id);
        setCfg((curr)=>{
            const prev = curr.mediaProviders?.[provider.id] ?? {
                apiKey: '',
                baseUrl: '',
                model: ''
            };
            const next = {
                ...prev,
                ...patch
            };
            const map = {
                ...curr.mediaProviders ?? {}
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStoredMediaProviderEntryEmpty"])(next)) {
                delete map[provider.id];
            } else {
                map[provider.id] = next;
            }
            return {
                ...curr,
                mediaProviders: map
            };
        });
    };
    const handleReload = async ()=>{
        if (!onReloadMediaProviders || reloadRunning) return;
        setReloadRunning(true);
        setReloadNotice(null);
        try {
            const next = await onReloadMediaProviders();
            if (!next) {
                setReloadNotice({
                    kind: 'error',
                    message: t('settings.mediaProviderReloadError')
                });
                return;
            }
            setCfg((curr)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDaemonMediaProviders"])(curr, next, {
                    preserveLocalProviderIds: pendingLocalProviderIds
                }));
            setReloadNotice({
                kind: 'success',
                message: t('settings.mediaProviderReloadSuccess')
            });
        } finally{
            setReloadRunning(false);
        }
    };
    // Successful reload acknowledgement lives on the button (✓ Reloaded)
    // for ~2s then disappears. Keeping it as a permanent paragraph under
    // the section header was noise — the user just clicked a button and
    // got a visible state change, an extra "we did the thing" line is
    // redundant. Errors stay sticky because they actually require user
    // attention.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaProvidersSection.useEffect": ()=>{
            if (reloadNotice?.kind !== 'success') return;
            const handle = window.setTimeout({
                "MediaProvidersSection.useEffect.handle": ()=>setReloadNotice(null)
            }["MediaProvidersSection.useEffect.handle"], 2000);
            return ({
                "MediaProvidersSection.useEffect": ()=>window.clearTimeout(handle)
            })["MediaProvidersSection.useEffect"];
        }
    }["MediaProvidersSection.useEffect"], [
        reloadNotice
    ]);
    const toggleApiKeyVisibility = (providerId)=>{
        setVisibleApiKeys((current)=>{
            const next = new Set(current);
            if (next.has(providerId)) {
                next.delete(providerId);
            } else {
                next.add(providerId);
            }
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: [
            mediaProvidersNotice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hint",
                role: "alert",
                children: mediaProvidersNotice
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6297,
                columnNumber: 9
            }, this) : null,
            reloadNotice && reloadNotice.kind === 'error' ? // Errors only — successful reload feedback now rides on the
            // button (see is-success-flash above) and clears itself after
            // 2s, so the section header doesn't get colonised by a
            // permanent "yes I did the thing" paragraph.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hint",
                role: "alert",
                children: reloadNotice.message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6304,
                columnNumber: 9
            }, this) : null,
            reloadNotice && reloadNotice.kind === 'success' ? // Off-screen announcement so assistive tech still hears the
            // success state even though the visible feedback collapses
            // into a transient button label change.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$visually$2d$hidden$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                role: "status",
                children: reloadNotice.message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6310,
                columnNumber: 9
            }, this) : null,
            onReloadMediaProviders ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-provider-reload-row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `ghost media-provider-reload-btn${reloadNotice?.kind === 'success' ? ' is-success-flash' : ''}`,
                    onClick: ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsMediaProvidersClick"])(analytics.track, {
                            page_name: 'settings',
                            area: 'media_providers',
                            element: 'reload'
                        });
                        void handleReload();
                    },
                    disabled: reloadRunning,
                    "aria-live": "polite",
                    children: reloadRunning ? t('common.loading') : reloadNotice?.kind === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6336,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: 4
                                },
                                children: "Reloaded"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6337,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "refresh",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6341,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: 4
                                },
                                children: t('settings.mediaProviderReload')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6342,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 6316,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6315,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-provider-list",
                children: availableProviders.map((provider)=>{
                    const entry = cfg.mediaProviders?.[provider.id] ?? {
                        apiKey: '',
                        baseUrl: '',
                        model: ''
                    };
                    const hasPendingEdit = Boolean(entry.apiKey.trim());
                    const isSavedState = Boolean((hasPendingEdit || entry.apiKeyConfigured) && !hasPendingEdit);
                    const tail = entry.apiKeyTail?.trim();
                    // Every provider rendered in the main list is integrated by
                    // construction (see availableProviders filter), so the inputs
                    // are always editable here. Non-integrated entries live in
                    // the "Coming soon" <details> below.
                    const disabled = false;
                    const supportsCustomModel = provider.supportsCustomModel === true;
                    const requiresCredentials = provider.credentialsRequired !== false;
                    const clearable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStoredMediaProviderEntryPresent"])(entry);
                    const apiKeyVisible = visibleApiKeys.has(provider.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "media-provider-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "media-provider-head",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "media-provider-meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "media-provider-name-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "media-provider-name",
                                                    children: provider.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 6379,
                                                    columnNumber: 21
                                                }, this),
                                                isSavedState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "field-status-badge field-status-badge--inline",
                                                    title: t('settings.connectorsSavedTitle'),
                                                    children: tail ? t('settings.connectorsSavedWithTail', {
                                                        tail
                                                    }) : t('settings.connectorsSaved')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 6381,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 6378,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "media-provider-hint",
                                            children: provider.hint
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 6391,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 6366,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6365,
                                columnNumber: 15
                            }, this),
                            provider.id === 'grok' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$XaiOAuthControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XaiOAuthControl"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6401,
                                columnNumber: 41
                            }, this) : null,
                            requiresCredentials ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "media-provider-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "media-provider-secret-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: apiKeyVisible ? 'text' : 'password',
                                                value: entry.apiKey,
                                                placeholder: isSavedState ? t('settings.connectorsReplaceKeyPlaceholder') : t('settings.mediaProviderPlaceholder'),
                                                "aria-label": `${provider.label} ${t('settings.mediaProviderApiKey')}`,
                                                disabled: disabled,
                                                onFocus: ()=>{
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsMediaProvidersClick"])(analytics.track, {
                                                        page_name: 'settings',
                                                        area: 'media_providers',
                                                        element: 'key_input',
                                                        providers_id: provider.id,
                                                        is_configured: clearable
                                                    });
                                                },
                                                onChange: (e)=>updateProvider(provider, {
                                                        apiKey: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 6405,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "secret-visibility-button",
                                                disabled: disabled,
                                                "aria-label": apiKeyVisible ? `${provider.label} ${t('settings.hideKey')}` : `${provider.label} ${t('settings.showKey')}`,
                                                "aria-pressed": apiKeyVisible,
                                                onClick: ()=>toggleApiKeyVisibility(provider.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: apiKeyVisible ? 'eye' : 'eye-off',
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 6434,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 6422,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6404,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: entry.baseUrl,
                                        placeholder: provider.defaultBaseUrl || t('settings.mediaProviderBaseUrlPlaceholder'),
                                        "aria-label": `${provider.label} ${t('settings.mediaProviderBaseUrl')}`,
                                        disabled: disabled,
                                        onFocus: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsMediaProvidersClick"])(analytics.track, {
                                                page_name: 'settings',
                                                area: 'media_providers',
                                                element: 'url_input',
                                                providers_id: provider.id,
                                                is_configured: clearable
                                            });
                                        },
                                        onChange: (e)=>updateProvider(provider, {
                                                baseUrl: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6437,
                                        columnNumber: 19
                                    }, this),
                                    supportsCustomModel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: entry.model ?? '',
                                        placeholder: "gemini-3.1-flash-image-preview",
                                        "aria-label": `${provider.label} model`,
                                        disabled: disabled,
                                        onChange: (e)=>updateProvider(provider, {
                                                model: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6454,
                                        columnNumber: 21
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ghost",
                                        disabled: !clearable,
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsMediaProvidersClick"])(analytics.track, {
                                                page_name: 'settings',
                                                area: 'media_providers',
                                                element: 'clear',
                                                providers_id: provider.id,
                                                // The click reports the state at the moment the
                                                // user pressed Clear; the actual clear only lands
                                                // after they confirm the dialog below, but the
                                                // dashboard cares about the intent signal.
                                                is_configured: clearable
                                            });
                                            // Match the existing window.confirm guard the rest of
                                            // the app uses for destructive actions (conversation
                                            // delete, design delete, file delete in FileWorkspace).
                                            // Without this a stray click on the row's Clear button
                                            // wipes the saved key with no recovery. Issue #737.
                                            if (!confirm(t('settings.mediaProviderClearConfirm', {
                                                name: provider.label
                                            }))) {
                                                return;
                                            }
                                            updateProvider(provider, {
                                                apiKey: '',
                                                baseUrl: '',
                                                model: '',
                                                apiKeyConfigured: false,
                                                apiKeyTail: ''
                                            });
                                        },
                                        children: t('settings.mediaProviderClear')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6462,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6403,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, provider.id, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6364,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6348,
                columnNumber: 7
            }, this),
            comingSoonProviders.length > 0 ? // Roadmap drawer. We still want to advertise that we know
            // these providers exist (so users don't ask "where is Fal?"),
            // but disabled placeholder cards in the main list were noise.
            // Closed by default — opens to a compact name + hint + docs
            // link list, no inputs because there's nothing to wire up yet.
            // TODO(i18n): inline English placeholders; promote to locale
            // keys when we touch this section again.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "library-group media-provider-coming-soon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "memory-details-summary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "memory-details-title",
                                children: t('tasks.comingSoon')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6519,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filter-pill-count",
                                children: comingSoonProviders.length
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6522,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6518,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        style: {
                            marginTop: 4,
                            marginBottom: 8
                        },
                        children: t('settings.mediaProviderComingSoonHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6526,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "media-provider-coming-soon-list",
                        children: comingSoonProviders.map((provider)=>{
                            const docsHref = sanitizeHttpsUrl(provider.docsUrl);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "media-provider-coming-soon-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "media-provider-coming-soon-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "media-provider-name",
                                                children: provider.label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 6538,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "media-provider-hint",
                                                children: provider.hint
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 6541,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6537,
                                        columnNumber: 19
                                    }, this),
                                    docsHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: docsHref,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "ghost-link",
                                        children: [
                                            t('settings.agentInstall.docs'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "external-link",
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 6553,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 6546,
                                        columnNumber: 21
                                    }, this) : null
                                ]
                            }, provider.id, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 6533,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 6529,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6517,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 6295,
        columnNumber: 5
    }, this);
}
_s3(MediaProvidersSection, "KAyTb8A7cX+GJuc3rN+93xJDBX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c3 = MediaProvidersSection;
// Path hint per OS. Localizes the "where to paste" copy so a
// Windows user does not see ~/.cursor/mcp.json (which their shell
// will not expand) or a Linux user does not see %APPDATA% paths.
function homeConfigPath(platform, posix, windows) {
    return platform === 'win32' ? windows : posix;
}
function commandPaletteShortcut(platform) {
    return platform === 'darwin' ? '⌘⇧P' : 'Ctrl+Shift+P';
}
function settingsShortcut(platform) {
    return platform === 'darwin' ? '⌘,' : 'Ctrl+,';
}
// btoa() requires every input character be representable in Latin-1
// (codepoints 0-255). A Mac/Linux home directory like
// "/Users/Émile/.fnm/.../node" trips that and throws
// InvalidCharacterError. UTF-8-encode the string into bytes first,
// then map each byte back to a Latin-1 char before base64'ing.
function utf8Btoa(s) {
    const bytes = new TextEncoder().encode(s);
    let bin = '';
    for(let i = 0; i < bytes.length; i++)bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
}
function buildMcpStdioServerConfig(info) {
    const env = info.env && Object.keys(info.env).length > 0 ? info.env : undefined;
    return {
        command: info.command,
        args: info.args,
        ...env ? {
            env
        } : {}
    };
}
function buildCodexEnvToml(info) {
    const entries = Object.entries(info.env ?? {});
    if (entries.length === 0) return '';
    return `

[mcp_servers.open-design.env]
${entries.map(([key, value])=>`${key} = ${JSON.stringify(value)}`).join('\n')}`;
}
function buildSharedMcpJson(info) {
    const inner = buildMcpStdioServerConfig(info);
    const innerJson = JSON.stringify(inner, null, 2).split('\n').map((line, i)=>i === 0 ? line : `    ${line}`).join('\n');
    return `{
  "mcpServers": {
    "open-design": ${innerJson}
  }
}`;
}
// One-click install toggle for Codex: queries the daemon for whether
// `codex mcp get open-design` succeeds, and POSTs/DELETEs the install
// endpoint to call `codex mcp add/remove` on the user's behalf. The
// copy-snippet path still works for users who prefer to paste manually
// or whose Codex CLI is not on PATH (button shows a disabled hint in
// that case).
function CodexInstallToggle() {
    _s4();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [installed, setInstalled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodexInstallToggle.useCallback[refresh]": async ()=>{
            try {
                const res = await fetch('/api/mcp/install/codex/status');
                if (!res.ok) throw new Error(`status ${res.status}`);
                const data = await res.json();
                setAvailable(Boolean(data.available));
                setInstalled(Boolean(data.installed));
            } catch  {
                // Daemon unreachable or endpoint missing — hide the toggle
                // entirely rather than spook the user with a permanent error.
                setAvailable(false);
                setInstalled(false);
            }
        }
    }["CodexInstallToggle.useCallback[refresh]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodexInstallToggle.useEffect": ()=>{
            refresh();
        }
    }["CodexInstallToggle.useEffect"], [
        refresh
    ]);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodexInstallToggle.useCallback[run]": async (method, successKey)=>{
            setBusy(true);
            setMessage(null);
            try {
                const res = await fetch('/api/mcp/install/codex', {
                    method
                });
                if (!res.ok) {
                    const body = await res.json().catch({
                        "CodexInstallToggle.useCallback[run]": ()=>({})
                    }["CodexInstallToggle.useCallback[run]"]);
                    throw new Error(body?.error?.message || `HTTP ${res.status}`);
                }
                setMessage({
                    kind: 'success',
                    text: t(successKey)
                });
                await refresh();
            } catch (err) {
                setMessage({
                    kind: 'error',
                    text: t('settings.mcpCodexInstallError', {
                        error: err instanceof Error ? err.message : String(err)
                    })
                });
            } finally{
                setBusy(false);
            }
        }
    }["CodexInstallToggle.useCallback[run]"], [
        refresh,
        t
    ]);
    if (available === null) return null;
    if (!available) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: 12
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    disabled: true,
                    style: {
                        padding: '6px 14px',
                        fontSize: 13,
                        opacity: 0.6
                    },
                    children: t('settings.mcpCodexOneClickInstall')
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 6752,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        marginLeft: 10,
                        fontSize: 12,
                        color: 'var(--fg-2, #9aa0a6)'
                    },
                    children: t('settings.mcpCodexOneClickUnavailable')
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 6759,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
            lineNumber: 6751,
            columnNumber: 7
        }, this);
    }
    const label = installed ? t('settings.mcpCodexOneClickUninstall') : t('settings.mcpCodexOneClickInstall');
    const onClick = ()=>{
        if (installed) {
            void run('DELETE', 'settings.mcpCodexUninstallSuccess');
        } else {
            void run('POST', 'settings.mcpCodexInstallSuccess');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: installed ? '' : 'primary',
                disabled: busy,
                onClick: onClick,
                style: {
                    padding: '6px 14px',
                    fontSize: 13
                },
                children: busy ? t('settings.mcpCodexBusy') : label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6779,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    marginLeft: 10,
                    fontSize: 12,
                    color: message.kind === 'error' ? 'var(--danger, #ff6b6b)' : 'var(--fg-2, #9aa0a6)'
                },
                children: message.text
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 6789,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 6778,
        columnNumber: 5
    }, this);
}
_s4(CodexInstallToggle, "/9jwVVPdYx7pU7l8q7dhAYGQQAA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c4 = CodexInstallToggle;
function IntegrationsSection() {
    _s5();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const MCP_CLIENTS = [
        {
            id: 'claude',
            label: 'Claude Code',
            buildMethod: ()=>t('settings.mcpMethodCli'),
            buildInstruction: ()=>t('settings.mcpInstructionCli'),
            buildSnippet: (info)=>{
                const inner = JSON.stringify(buildMcpStdioServerConfig(info));
                return `claude mcp add-json --scope user open-design '${inner}'`;
            },
            buildSnippetLang: ()=>'bash'
        },
        {
            id: 'codex',
            label: 'Codex',
            buildMethod: ()=>t('settings.mcpMethodToml'),
            buildInstruction: (info)=>{
                const path = homeConfigPath(info.platform, '~/.codex/config.toml', '%USERPROFILE%\\.codex\\config.toml');
                return t('settings.mcpInstructionCodex', {
                    path
                });
            },
            buildSnippet: (info)=>`[mcp_servers.open-design]\ncommand = ${JSON.stringify(info.command)}\nargs = ${JSON.stringify(info.args)}${buildCodexEnvToml(info)}`,
            buildSnippetLang: ()=>'toml'
        },
        {
            id: 'cursor',
            label: 'Cursor',
            buildMethod: ()=>t('settings.mcpMethodOneClick'),
            buildInstruction: (info)=>t('settings.mcpInstructionCursor', {
                    path: homeConfigPath(info.platform, '~/.cursor/mcp.json', '%USERPROFILE%\\.cursor\\mcp.json')
                }),
            buildSnippet: buildSharedMcpJson,
            buildSnippetLang: ()=>'json',
            buildDeeplink: (info)=>{
                const inner = buildMcpStdioServerConfig(info);
                const encoded = utf8Btoa(JSON.stringify(inner));
                return `cursor://anysphere.cursor-deeplink/mcp/install?name=open-design&config=${encoded}`;
            },
            deeplinkLabel: ()=>t('settings.mcpDeeplinkInstallCursor')
        },
        {
            id: 'vscode',
            label: 'VS Code',
            buildMethod: ()=>t('settings.mcpMethodJson'),
            buildInstruction: (info)=>t('settings.mcpInstructionCopilot', {
                    shortcut: commandPaletteShortcut(info.platform)
                }),
            buildSnippet: (info)=>`{\n  "servers": {\n    "open-design": {\n      "type": "stdio",\n      "command": ${JSON.stringify(info.command)},\n      "args": ${JSON.stringify(info.args)}${info.env && Object.keys(info.env).length > 0 ? `,\n      "env": ${JSON.stringify(info.env)}` : ''}\n    }\n  }\n}`,
            buildSnippetLang: ()=>'json'
        },
        {
            id: 'antigravity',
            label: 'Antigravity',
            buildMethod: ()=>t('settings.mcpMethodJson'),
            buildInstruction: ()=>t('settings.mcpInstructionAntigravity'),
            buildSnippet: buildSharedMcpJson,
            buildSnippetLang: ()=>'json'
        },
        {
            id: 'zed',
            label: 'Zed',
            buildMethod: ()=>t('settings.mcpMethodJson'),
            buildInstruction: (info)=>t('settings.mcpInstructionZed', {
                    shortcut: settingsShortcut(info.platform)
                }),
            buildSnippet: (info)=>`{\n  "context_servers": {\n    "open-design": {\n      "source": "custom",\n      "command": ${JSON.stringify(info.command)},\n      "args": ${JSON.stringify(info.args)}${info.env && Object.keys(info.env).length > 0 ? `,\n      "env": ${JSON.stringify(info.env)}` : ''}\n    }\n  }\n}`,
            buildSnippetLang: ()=>'json'
        },
        {
            id: 'windsurf',
            label: 'Windsurf',
            buildMethod: ()=>t('settings.mcpMethodJson'),
            buildInstruction: (info)=>t('settings.mcpInstructionWindsurf', {
                    path: homeConfigPath(info.platform, '~/.codeium/windsurf/mcp_config.json', '%USERPROFILE%\\.codeium\\windsurf\\mcp_config.json')
                }),
            buildSnippet: buildSharedMcpJson,
            buildSnippetLang: ()=>'json'
        }
    ];
    const [clientId, setClientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('claude');
    const [pickerOpen, setPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [infoError, setInfoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The reset is wired through a ref-driven timer rather than effect
    // cleanup so re-clicks during the 2s window restart the countdown.
    const copyTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntegrationsSection.useEffect": ()=>{
            return ({
                "IntegrationsSection.useEffect": ()=>{
                    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
                }
            })["IntegrationsSection.useEffect"];
        }
    }["IntegrationsSection.useEffect"], []);
    // Close the dropdown on outside click or Escape.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntegrationsSection.useEffect": ()=>{
            if (!pickerOpen) return;
            const onDoc = {
                "IntegrationsSection.useEffect.onDoc": (e)=>{
                    if (!pickerRef.current) return;
                    if (!pickerRef.current.contains(e.target)) setPickerOpen(false);
                }
            }["IntegrationsSection.useEffect.onDoc"];
            const onKey = {
                "IntegrationsSection.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') setPickerOpen(false);
                }
            }["IntegrationsSection.useEffect.onKey"];
            document.addEventListener('mousedown', onDoc);
            document.addEventListener('keydown', onKey);
            return ({
                "IntegrationsSection.useEffect": ()=>{
                    document.removeEventListener('mousedown', onDoc);
                    document.removeEventListener('keydown', onKey);
                }
            })["IntegrationsSection.useEffect"];
        }
    }["IntegrationsSection.useEffect"], [
        pickerOpen
    ]);
    // Pull the absolute paths to node + cli.js from the running daemon
    // so snippets work even when `od` isn't on PATH (the realistic
    // case for source clones, plus macOS/Linux ship a /usr/bin/od that
    // shadows any global install). Fetched on mount; if the daemon is
    // unreachable we surface a clear error instead of a half-built
    // snippet that would silently fail when pasted.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntegrationsSection.useEffect": ()=>{
            let cancelled = false;
            fetch('/api/mcp/install-info').then({
                "IntegrationsSection.useEffect": async (res)=>{
                    if (!res.ok) throw new Error(`daemon ${res.status}`);
                    return await res.json();
                }
            }["IntegrationsSection.useEffect"]).then({
                "IntegrationsSection.useEffect": (data)=>{
                    if (cancelled) return;
                    setInfo(data);
                    setInfoError(null);
                }
            }["IntegrationsSection.useEffect"]).catch({
                "IntegrationsSection.useEffect": (err)=>{
                    if (cancelled) return;
                    setInfoError(String(err && err.message ? err.message : err));
                }
            }["IntegrationsSection.useEffect"]);
            return ({
                "IntegrationsSection.useEffect": ()=>{
                    cancelled = true;
                }
            })["IntegrationsSection.useEffect"];
        }
    }["IntegrationsSection.useEffect"], []);
    const client = MCP_CLIENTS.find((c)=>c.id === clientId) ?? MCP_CLIENTS[0];
    const snippet = info ? client.buildSnippet(info) : '';
    const snippetLang = info ? client.buildSnippetLang(info) : 'json';
    // Reset the "Copied" badge when the user flips to a different
    // client; otherwise the green check sits there next to a snippet
    // they haven't actually copied.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntegrationsSection.useEffect": ()=>{
            setCopied(false);
            if (copyTimerRef.current) {
                clearTimeout(copyTimerRef.current);
                copyTimerRef.current = null;
            }
        }
    }["IntegrationsSection.useEffect"], [
        clientId
    ]);
    const onCopy = async ()=>{
        if (!snippet) return;
        try {
            await navigator.clipboard.writeText(snippet);
            setCopied(true);
            if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
            copyTimerRef.current = setTimeout(()=>setCopied(false), 2000);
        } catch  {
            // Clipboard API can fail under non-secure contexts; the snippet
            // is selectable so the user can still copy manually.
            setCopied(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mcp-client-body",
            children: [
                infoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "empty-card",
                    style: {
                        marginBottom: 14,
                        color: 'var(--danger-fg, #f88)'
                    },
                    children: t('settings.mcpDaemonError', {
                        error: infoError
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 6988,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mcp-capabilities-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mcp-capabilities-label",
                            children: t('settings.mcpCapabilitiesTitle')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 6998,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mcp-capabilities-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: t('settings.mcpCapabilityRead')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7002,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: t('settings.mcpCapabilityPull')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7003,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: t('settings.mcpCapabilityDefault')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7004,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7001,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 6997,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mcp-setup-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-picker",
                            ref: pickerRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `ds-picker-trigger${pickerOpen ? ' open' : ''}`,
                                    onClick: ()=>setPickerOpen((v)=>!v),
                                    "aria-haspopup": "listbox",
                                    "aria-expanded": pickerOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ds-picker-meta",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ds-picker-title",
                                                    children: client.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7022,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ds-picker-sub",
                                                    children: info ? client.buildMethod(info) : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7023,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7021,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "chevron-down",
                                            size: 14,
                                            className: "ds-picker-chevron",
                                            style: {
                                                transform: pickerOpen ? 'rotate(180deg)' : undefined
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7027,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7014,
                                    columnNumber: 11
                                }, this),
                                pickerOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ds-picker-popover",
                                    role: "listbox",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ds-picker-list",
                                        children: MCP_CLIENTS.map((c)=>{
                                            const active = c.id === clientId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "option",
                                                "aria-selected": active,
                                                className: `ds-picker-item${active ? ' active' : ''}`,
                                                onClick: ()=>{
                                                    setClientId(c.id);
                                                    setPickerOpen(false);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ds-picker-item-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ds-picker-item-title",
                                                            children: c.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 7052,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: 'var(--text-muted)'
                                                            },
                                                            children: info ? c.buildMethod(info) : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                            lineNumber: 7053,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7051,
                                                    columnNumber: 23
                                                }, this)
                                            }, c.id, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 7040,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7036,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7035,
                                    columnNumber: 13
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7010,
                            columnNumber: 11
                        }, this),
                        info ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: 0
                            },
                            children: client.buildInstruction(info)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7071,
                            columnNumber: 11
                        }, this) : null,
                        client.id === 'codex' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodexInstallToggle, {}, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7074,
                            columnNumber: 34
                        }, this) : null,
                        client.buildDeeplink && info ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "primary",
                                    onClick: ()=>{
                                        // Use a hidden anchor so the cursor:// scheme is
                                        // handled the same way as a normal link click; some
                                        // browsers block window.location assignments to
                                        // unknown schemes from button handlers.
                                        const url = client.buildDeeplink(info);
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.rel = 'noopener noreferrer';
                                        a.click();
                                    },
                                    disabled: !info.cliExists || !info.nodeExists,
                                    style: {
                                        padding: '6px 14px',
                                        fontSize: 13
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "link",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7095,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 6
                                            },
                                            children: client.deeplinkLabel ? client.deeplinkLabel() : ''
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7096,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7078,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: 10,
                                        fontSize: 12,
                                        color: 'var(--fg-2, #9aa0a6)'
                                    },
                                    children: t('settings.mcpCursorApproval')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7098,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7077,
                            columnNumber: 11
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    style: {
                                        background: 'var(--surface-2, #11141a)',
                                        color: 'var(--fg-1, #e6e6e6)',
                                        // Reserve top clearance for the absolutely-positioned
                                        // Copy button so the first line of the snippet does not
                                        // sit underneath it, and reserve right clearance so a
                                        // wrapped bash one-liner stops short of the button rather
                                        // than scrolling behind it. The right padding is sized
                                        // for the wider "Copied" post-click state (icon + text +
                                        // button padding + the 8px right offset) with a few px
                                        // of buffer for elevated font sizes / zoom. Issue #632.
                                        padding: '40px 104px 12px 14px',
                                        borderRadius: 8,
                                        overflowX: 'auto',
                                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                                        fontSize: 12,
                                        lineHeight: 1.55,
                                        margin: 0,
                                        userSelect: 'text',
                                        whiteSpace: snippetLang === 'bash' ? 'pre-wrap' : 'pre',
                                        wordBreak: snippetLang === 'bash' ? 'break-all' : 'normal',
                                        minHeight: 60
                                    },
                                    "data-lang": snippetLang,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: snippet || (infoError ? t('settings.mcpResolvingFailed') : t('settings.mcpLoadingPaths'))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7138,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7111,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "ghost mcp-copy-btn",
                                    onClick: onCopy,
                                    disabled: !snippet,
                                    style: {
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        padding: '4px 10px',
                                        fontSize: 12
                                    },
                                    "aria-label": t('settings.mcpCopyAria'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: copied ? 'check' : 'copy',
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7159,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 6
                                            },
                                            children: copied ? t('settings.mcpCopied') : t('settings.mcpCopy')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7160,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7145,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7110,
                            columnNumber: 9
                        }, this),
                        info && (!info.cliExists || !info.nodeExists) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-card",
                            style: {
                                borderLeft: '3px solid var(--warning-fg, #fbbf24)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: !info.cliExists ? t('settings.mcpBuildDaemon') : t('settings.mcpNodeMissing')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7174,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                info.buildHint ?? t('settings.mcpBuildHint')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7170,
                            columnNumber: 11
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '10px 12px',
                                background: 'var(--bg-subtle)',
                                border: '1px solid var(--border)',
                                borderLeft: '3px solid var(--border-strong)',
                                borderRadius: 6,
                                fontSize: 13,
                                lineHeight: 1.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: t('settings.mcpRestartNote')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7196,
                                    columnNumber: 11
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: t('settings.mcpRestartDetail')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7197,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7185,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mcp-running-note",
                            children: t('settings.mcpRunningNote')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 7009,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
            lineNumber: 6986,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 6985,
        columnNumber: 5
    }, this);
}
_s5(IntegrationsSection, "XjKbpOCfJzcQ99y+dRHryXVaMGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c5 = IntegrationsSection;
const THEMES = [
    {
        value: 'system',
        labelKey: 'settings.themeSystem'
    },
    {
        value: 'light',
        labelKey: 'settings.themeLight',
        icon: 'sun'
    },
    {
        value: 'dark',
        labelKey: 'settings.themeDark',
        icon: 'moon'
    }
];
function AppearanceSection({ cfg, setCfg }) {
    _s6();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const current = cfg.theme ?? 'system';
    const currentAccent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAccentColor"])(cfg.accentColor) ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACCENT_COLOR"];
    const accentLabel = t('pet.fieldAccent');
    const defaultAccentLabel = t('pet.fieldAccentDefault');
    const customAccentLabel = t('pet.fieldAccentCustom');
    // Apply the draft theme immediately so the user sees a live preview
    // before hitting Save. SettingsDialog's cleanup reverts this on cancel.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "AppearanceSection.useLayoutEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAppearanceToDocument"])({
                theme: current,
                accentColor: currentAccent
            });
        }
    }["AppearanceSection.useLayoutEffect"], [
        current,
        currentAccent
    ]);
    const setAccentColor = (color)=>{
        setCfg((c)=>({
                ...c,
                accentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAccentColor"])(color) ?? c.accentColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACCENT_COLOR"]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "seg-control",
                role: "group",
                "aria-label": t('settings.appearance'),
                style: {
                    '--seg-cols': THEMES.length
                },
                children: THEMES.map(({ value, labelKey, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: 'seg-btn' + (current === value ? ' active' : ''),
                        "aria-pressed": current === value,
                        onClick: ()=>{
                            // P1 ui_click area=appearance — `system|light|dark` only
                            // emits from the segmented control; accent swatch picks
                            // use `accent_color` with the swatch hex below.
                            if (value === 'system' || value === 'light' || value === 'dark') {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsAppearanceClick"])(analytics.track, {
                                    page_name: 'settings',
                                    area: 'appearance',
                                    element: value
                                });
                            }
                            setCfg((c)=>({
                                    ...c,
                                    theme: value
                                }));
                        },
                        children: [
                            icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: icon,
                                size: 14,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7268,
                                columnNumber: 21
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "seg-title",
                                children: t(labelKey)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, value, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7249,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 7247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field-label",
                        children: accentLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-swatches",
                        role: "radiogroup",
                        "aria-label": accentLabel,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCENT_SWATCHES"].map((color)=>{
                                const active = currentAccent === color;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `pet-swatch${active ? ' active' : ''}`,
                                    style: {
                                        background: color
                                    },
                                    "aria-label": color === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACCENT_COLOR"] ? defaultAccentLabel : color,
                                    "aria-checked": active,
                                    role: "radio",
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsAppearanceClick"])(analytics.track, {
                                            page_name: 'settings',
                                            area: 'appearance',
                                            element: 'accent_color',
                                            color
                                        });
                                        setAccentColor(color);
                                    }
                                }, color, false, {
                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                    lineNumber: 7279,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                "aria-label": customAccentLabel,
                                className: "pet-swatch-picker",
                                value: currentAccent,
                                onChange: (e)=>setAccentColor(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 7273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 7246,
        columnNumber: 5
    }, this);
}
_s6(AppearanceSection, "T1wvKGH+1Caw8SBc4yCXlf0JGXk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c6 = AppearanceSection;
/**
 * Settings surface for the M1 Critique Theater rollout toggle.
 *
 * The toggle has two halves on opposite sides of the HTTP boundary:
 *
 *   * Browser-side: `useCritiqueTheaterEnabled` reads / writes the
 *     `open-design:config` localStorage blob; this is what gates
 *     whether `<CritiqueTheaterMount>` actually renders.
 *   * Daemon-side: the rollout resolver in `server.ts` reads
 *     `project.metadata.critiqueTheaterEnabled`, so the daemon only
 *     routes runs through the critique pipeline when the active
 *     project's metadata row says yes (or env / phase / skill policy
 *     overrides it).
 *
 * If we only wrote localStorage, the user would see the mount but
 * every generation would still skip the critique pipeline server-side
 * (Codex + lefarcen P1 on PR #1484). To keep the two halves in
 * lockstep, the setter takes an optional `{ projectId }` and, when
 * provided, does the read-merge-write PATCH on the project's metadata
 * (already shipped by Phase 15 and exercised by the wireup PR).
 *
 * This section threads the currently-open project id when the dialog
 * is opened from `/projects/:id`. When opened from the entry gallery
 * (`/`), the toggle is localStorage-only, and a contextual hint tells
 * the user that per-project persistence requires opening a project
 * first. That matches the actual scope of the wire-up.
 */ function CritiqueTheaterSection() {
    _s7();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCritiqueTheaterEnabled"])();
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoute"])();
    const activeProjectId = route.kind === 'project' ? route.projectId : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-head",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: t('critiqueTheater.settingsNav')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hint",
                            children: t('critiqueTheater.settingsNavHint')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                            lineNumber: 7350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                    lineNumber: 7348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 7347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: enabled,
                                onChange: (e)=>{
                                    const next = e.target.checked;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsDesignReviewClick"])(analytics.track, {
                                        page_name: 'settings',
                                        area: 'design_review',
                                        element: 'enable_toggle',
                                        status_before: enabled ? 'on' : 'off',
                                        status_after: next ? 'on' : 'off',
                                        has_active_project: activeProjectId !== null
                                    });
                                    if (activeProjectId !== null) {
                                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCritiqueTheaterEnabled"])(next, {
                                            projectId: activeProjectId
                                        });
                                    } else {
                                        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCritiqueTheaterEnabled"])(next);
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7355,
                                columnNumber: 11
                            }, this),
                            ' ',
                            t('critiqueTheater.settingsEnabledLabel')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "hint",
                        children: t('critiqueTheater.settingsEnabledDescription')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7378,
                        columnNumber: 9
                    }, this),
                    activeProjectId !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "hint",
                        children: t('critiqueTheater.settingsEnabledProjectHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7382,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "hint",
                        children: t('critiqueTheater.settingsEnabledNoProjectHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7386,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 7353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 7346,
        columnNumber: 5
    }, this);
}
_s7(CritiqueTheaterSection, "ldnx3Ub4zHfki6Yx7OgBb8HJWu4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Theater$2f$hooks$2f$useCritiqueTheaterEnabled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCritiqueTheaterEnabled"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoute"]
    ];
});
_c7 = CritiqueTheaterSection;
// Map the runtime SoundId (hyphenated, used by utils/notifications.ts) onto
// the contract's underscored enum. Sounds that don't have a tracking entry
// drop to undefined so we never emit an off-enum value.
function soundIdToTracking(id) {
    switch(id){
        case 'ding':
            return 'ding';
        case 'chime':
            return 'chime';
        case 'two-tone-up':
            return 'two_tone_up';
        case 'pluck':
            return 'pluck';
        case 'buzz':
            return 'buzz';
        case 'two-tone-down':
            return 'two_tone_down';
        case 'thud':
            return 'thud';
        default:
            return undefined;
    }
}
function NotificationsSection({ cfg, setCfg }) {
    _s8();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const notif = cfg.notifications ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_NOTIFICATIONS"];
    const [permission, setPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NotificationsSection.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationPermission"])()
    }["NotificationsSection.useState"]);
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const updateNotif = (patch)=>{
        setCfg((c)=>({
                ...c,
                notifications: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_NOTIFICATIONS"],
                    ...c.notifications ?? {},
                    ...patch
                }
            }));
    };
    const toggleSound = ()=>{
        const next = !notif.soundEnabled;
        // P1 ui_click area=notifications element=completion_sound — the toggle
        // emits the post-click state on `completion_sound_status` so a single
        // event captures intent + outcome.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
            page_name: 'settings',
            area: 'notifications',
            element: 'completion_sound',
            completion_sound_status: next ? 'on' : 'off'
        });
        updateNotif({
            soundEnabled: next
        });
        // Give the user immediate audible feedback when turning the master
        // switch on so they know which sound they're signing up for. Resuming
        // the AudioContext also bakes in their gesture for later auto-plays.
        if (next) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playSound"])(notif.successSoundId);
    };
    const toggleDesktop = async ()=>{
        if (notif.desktopEnabled) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
                page_name: 'settings',
                area: 'notifications',
                element: 'desktop_notification',
                desktop_notification_status: 'off'
            });
            updateNotif({
                desktopEnabled: false
            });
            return;
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestNotificationPermission"])();
        setPermission(result);
        if (result === 'granted') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
                page_name: 'settings',
                area: 'notifications',
                element: 'desktop_notification',
                desktop_notification_status: 'on'
            });
            updateNotif({
                desktopEnabled: true
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
                page_name: 'settings',
                area: 'notifications',
                element: 'desktop_notification',
                desktop_notification_status: 'off'
            });
            updateNotif({
                desktopEnabled: false
            });
        }
    };
    const sendTestNotification = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showCompletionNotification"])({
            status: 'succeeded',
            title: t('notify.successTitle'),
            body: t('notify.successBody')
        });
        setPermission((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationPermission"])());
        setTestStatus(testNotificationStatusText(result));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-subsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "settings-notify-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-notify-card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: t('settings.notifyCompletionSound')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-head-actions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "seg-control",
                                            role: "group",
                                            "aria-label": t('settings.notifyCompletionSound'),
                                            style: {
                                                '--seg-cols': 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: 'seg-btn' + (notif.soundEnabled ? ' active' : ''),
                                                "aria-pressed": notif.soundEnabled,
                                                onClick: toggleSound,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seg-title",
                                                    children: notif.soundEnabled ? t('common.active') : t('common.offline')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7527,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 7521,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7520,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7519,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint settings-notify-card-hint",
                                children: t('settings.notifyCompletionSoundHint')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7532,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7516,
                        columnNumber: 9
                    }, this),
                    notif.soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: t('settings.notifySuccessSound')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "seg-control",
                                        role: "group",
                                        "aria-label": t('settings.notifySuccessSound'),
                                        style: {
                                            '--seg-cols': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUCCESS_SOUNDS"].length
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUCCESS_SOUNDS"].map((sound)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: 'seg-btn' + (notif.successSoundId === sound.id ? ' active' : ''),
                                                "aria-pressed": notif.successSoundId === sound.id,
                                                onClick: ()=>{
                                                    const trackingSoundId = soundIdToTracking(sound.id);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
                                                        page_name: 'settings',
                                                        area: 'notifications',
                                                        element: 'success_sound',
                                                        ...trackingSoundId ? {
                                                            sound_id: trackingSoundId
                                                        } : {}
                                                    });
                                                    updateNotif({
                                                        successSoundId: sound.id
                                                    });
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playSound"])(sound.id);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seg-title",
                                                    children: t(sound.labelKey)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7558,
                                                    columnNumber: 21
                                                }, this)
                                            }, sound.id, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 7541,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7539,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: t('settings.notifyFailureSound')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "seg-control",
                                        role: "group",
                                        "aria-label": t('settings.notifyFailureSound'),
                                        style: {
                                            '--seg-cols': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAILURE_SOUNDS"].length
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAILURE_SOUNDS"].map((sound)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: 'seg-btn' + (notif.failureSoundId === sound.id ? ' active' : ''),
                                                "aria-pressed": notif.failureSoundId === sound.id,
                                                onClick: ()=>{
                                                    const trackingSoundId = soundIdToTracking(sound.id);
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
                                                        page_name: 'settings',
                                                        area: 'notifications',
                                                        element: 'failure_sound',
                                                        ...trackingSoundId ? {
                                                            sound_id: trackingSoundId
                                                        } : {}
                                                    });
                                                    updateNotif({
                                                        failureSoundId: sound.id
                                                    });
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playSound"])(sound.id);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seg-title",
                                                    children: t(sound.labelKey)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7585,
                                                    columnNumber: 21
                                                }, this)
                                            }, sound.id, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 7568,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7566,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7564,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 7515,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-subsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "settings-notify-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-notify-card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: t('settings.notifyDesktop')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7597,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-head-actions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "seg-control",
                                            role: "group",
                                            "aria-label": t('settings.notifyDesktop'),
                                            style: {
                                                '--seg-cols': 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: 'seg-btn' + (notif.desktopEnabled ? ' active' : ''),
                                                "aria-pressed": notif.desktopEnabled,
                                                disabled: permission === 'unsupported',
                                                onClick: ()=>{
                                                    void toggleDesktop();
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seg-title",
                                                    children: notif.desktopEnabled ? t('common.active') : t('common.offline')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                    lineNumber: 7607,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                                lineNumber: 7600,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                            lineNumber: 7599,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                        lineNumber: 7598,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7596,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint settings-notify-card-hint",
                                children: t('settings.notifyDesktopHint')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7612,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7595,
                        columnNumber: 9
                    }, this),
                    permission === 'unsupported' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: t('settings.notifyDesktopUnsupported')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7615,
                        columnNumber: 11
                    }, this) : null,
                    permission === 'denied' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: t('settings.notifyDesktopBlocked')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                        lineNumber: 7618,
                        columnNumber: 11
                    }, this) : null,
                    notif.desktopEnabled && permission === 'granted' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsNotificationsClick"])(analytics.track, {
                                        page_name: 'settings',
                                        area: 'notifications',
                                        element: 'send_test'
                                    });
                                    void sendTestNotification();
                                },
                                children: t('settings.notifyTest')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7622,
                                columnNumber: 13
                            }, this),
                            testStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint",
                                role: "status",
                                children: t(testStatus)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                                lineNumber: 7632,
                                columnNumber: 27
                            }, this) : null
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
                lineNumber: 7594,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/SettingsDialog.tsx",
        lineNumber: 7514,
        columnNumber: 5
    }, this);
}
_s8(NotificationsSection, "ETCSSrV+iEfG26JM1XaWQFid2t0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c8 = NotificationsSection;
function testNotificationStatusText(result) {
    if (result === 'shown') return 'settings.notifyTestSent';
    if (result === 'permission-denied') return 'settings.notifyDesktopBlocked';
    if (result === 'unsupported') return 'settings.notifyDesktopUnsupported';
    return 'settings.notifyTestFailed';
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SettingsDialog");
__turbopack_context__.k.register(_c1, "ConnectorSection");
__turbopack_context__.k.register(_c2, "OrbitSection");
__turbopack_context__.k.register(_c3, "MediaProvidersSection");
__turbopack_context__.k.register(_c4, "CodexInstallToggle");
__turbopack_context__.k.register(_c5, "IntegrationsSection");
__turbopack_context__.k.register(_c6, "AppearanceSection");
__turbopack_context__.k.register(_c7, "CritiqueTheaterSection");
__turbopack_context__.k.register(_c8, "NotificationsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_SettingsDialog_tsx_069glam._.js.map