(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/AssistantMessage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantMessage",
    ()=>AssistantMessage,
    "assistantRoleLabel",
    ()=>assistantRoleLabel,
    "assistantRoleName",
    ()=>assistantRoleName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ToolCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ToolCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileOpsSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FileOpsSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/markdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$in$2d$project$2d$link$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/in-project-link.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/question-form.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$OdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/OdCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/QuestionForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$strip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/strip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$pluginFolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-files/pluginFolders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NextStepActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/NextStepActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/copy-to-clipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$file$2d$ops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/file-ops.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$tool$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/tool-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/todos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/agentLabels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AgentIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$produced$2d$files$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/produced-files.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature();
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
const DISCORD_INVITE_URL = "https://discord.gg/9ptkbbqRu";
function buildActionNotice(message, url) {
    const trimmedMessage = message.trim();
    const trimmedUrl = url?.trim();
    if (!trimmedUrl) return {
        message: trimmedMessage
    };
    const normalizedMessage = trimmedMessage.replace(new RegExp(`\\s*${escapeRegExp(trimmedUrl)}\\s*$`), "");
    return {
        message: normalizedMessage.trim() || trimmedUrl,
        url: trimmedUrl
    };
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ActionNoticeView({ notice }) {
    if (!notice) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: notice.message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            notice.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: notice.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: notice.url
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true);
}
_c = ActionNoticeView;
function SkillPluginCandidateCard({ block, projectId, onRequestOpenFile }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const disabled = !projectId || busy !== null;
    const description = block.description === "Reusable skill material detected from a repository link." || block.description === "This repo looks like it could work as a plugin." ? t("skillPluginCandidate.repoDescription") : block.description || t("skillPluginCandidate.repoDescription");
    async function post(path, body = {}) {
        const resp = await fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await resp.json().catch(()=>null);
        if (!resp.ok) {
            const message = data?.message ?? (typeof data?.error === "string" ? data.error : data?.error?.message) ?? resp.statusText;
            throw new Error(message || "Plugin candidate action failed.");
        }
        return data;
    }
    async function createDraft() {
        if (!projectId) return;
        setBusy("draft");
        setNotice(null);
        try {
            const data = await post(`/api/projects/${encodeURIComponent(projectId)}/plugin-candidates/${encodeURIComponent(block.candidateId)}/draft`);
            const draftPath = String(data?.draftPath ?? "");
            if (data?.validation?.ok === false) {
                setNotice({
                    message: "Draft created with validation issues."
                });
            } else if (draftPath) {
                const install = await post(`/api/projects/${encodeURIComponent(projectId)}/plugins/install-folder`, {
                    path: draftPath
                });
                if (install?.ok === false) {
                    setNotice({
                        message: install?.message ?? "Plugin draft created, but install failed."
                    });
                } else {
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent("open-design:plugins-changed"));
                    }
                    setNotice({
                        message: install?.message ?? "Plugin draft created and added to My plugins."
                    });
                }
            } else {
                setNotice({
                    message: "Plugin draft created."
                });
            }
            if (draftPath && onRequestOpenFile) onRequestOpenFile(`${draftPath}/open-design.json`);
        } catch (err) {
            setNotice({
                message: err instanceof Error ? err.message : String(err)
            });
        } finally{
            setBusy(null);
        }
    }
    async function share(action) {
        if (!projectId) return;
        setBusy("contribute");
        setNotice(null);
        try {
            const data = await post(`/api/projects/${encodeURIComponent(projectId)}/plugin-candidates/${encodeURIComponent(block.candidateId)}/share-tasks`, {
                action
            });
            setNotice({
                message: `Open Design contribution task started for ${data?.path ?? "the draft"}.`
            });
        } catch (err) {
            setNotice({
                message: err instanceof Error ? err.message : String(err)
            });
        } finally{
            setBusy(null);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-action-panel",
        "data-testid": `skill-plugin-candidate-${block.candidateId}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plugin-action-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-action-card__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-action-card__title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "sparkles",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: block.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "plugin-action-card__description",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-action-card__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugin-action-button plugin-action-button--primary",
                                disabled: disabled,
                                onClick: ()=>void share("contribute-open-design"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: busy === "contribute" ? "spinner" : "share",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: busy === "contribute" ? "Starting..." : t("skillPluginCandidate.contributeToMain")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "plugin-action-button",
                                disabled: disabled,
                                onClick: ()=>void createDraft(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: busy === "draft" ? "spinner" : "plus",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: busy === "draft" ? "Creating..." : t("skillPluginCandidate.createForMe")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    notice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-action-card__notice",
                        role: "status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionNoticeView, {
                            notice: notice
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 248,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s(SkillPluginCandidateCard, "rrVIOVdiS7caAqMvkHR8kXGsvu4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c1 = SkillPluginCandidateCard;
// Props compared by reference to decide whether a memoized AssistantMessage can
// skip re-rendering. The interaction callbacks (onContinueRemainingTasks,
// onForkFromMessage, onFeedback, and next-step actions) are DELIBERATELY
// excluded: ChatPane re-creates them per render, but routes them through a ref
// so their behavior is reference-stable — comparing them would defeat the memo
// on every streamed frame. `isLast` is compared, which captures the only state
// transition those callbacks' presence depends on. The remaining context props
// (projectFiles, the Set props, handlers) come from ProjectView as stable
// useState/useMemo/useCallback values, so reference comparison is correct and
// cheap.
const ASSISTANT_MESSAGE_COMPARED_PROPS = [
    'message',
    'streaming',
    'showConversationTodoCard',
    'conversationTodoInput',
    'projectId',
    'projectKind',
    'conversationId',
    'projectFiles',
    'projectFileNames',
    'onRequestOpenFile',
    'onRequestPluginFolderAgentAction',
    'activePluginActionPaths',
    'hiddenPluginActionPaths',
    'isLast',
    'errorCardOwnerId',
    'nextUserContent',
    'forking',
    'shareToOpenDesignBusy',
    'suppressDirectionForms',
    'hasDesignSystemContext',
    // Memoized + stable from ChatPane; compared so a late skill-list load
    // refreshes the featured next-step rows' `@skill` hover detail and the
    // More → Design toolbox global resources.
    'toolboxSkillNames',
    'nextStepSkills',
    // Live streaming tool input changes identity on every `tool_input_delta`.
    // ChatPane passes it only to the streaming row (undefined elsewhere), so
    // comparing it re-renders just that row as the card grows — without it the
    // memo swallows the deltas and the card only updates on the final tool_use.
    'liveToolInput'
];
function areAssistantMessagePropsEqual(prev, next) {
    for (const key of ASSISTANT_MESSAGE_COMPARED_PROPS){
        if (!Object.is(prev[key], next[key])) return false;
    }
    return true;
}
const AssistantMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(AssistantMessageImpl, areAssistantMessagePropsEqual);
_c2 = AssistantMessage;
/**
 * Renders an assistant message as an interleaved flow of:
 *   - prose blocks (consecutive `text` events merged)
 *   - thinking blocks (collapsible)
 *   - grouped tool action cards — runs of consecutive same-name tools
 *     collapse into a single pill ("Editing ×3, Done") that expands to show
 *     the individual tool cards. Mirrors the chat surface in screenshot 9.
 *   - status pills
 */ function AssistantMessageImpl({ message, streaming, liveToolInput, showConversationTodoCard = false, conversationTodoInput = null, projectId, projectKind = null, conversationId = null, projectFiles = [], projectFileNames, onRequestOpenFile, onRequestPluginFolderAgentAction, activePluginActionPaths = new Set(), hiddenPluginActionPaths = new Set(), onShareToOpenDesign, shareToOpenDesignBusy = false, isLast, errorCardOwnerId = null, nextUserContent, onOpenQuestions, onContinueRemainingTasks, onForkFromMessage, forking = false, onFeedback, suppressDirectionForms = false, hasDesignSystemContext = false, onArtifactShare, onToolboxAction, onPickSkill, onArtifactDownload, nextStepSkills, toolboxSkillNames }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const events = message.events ?? [];
    const displayEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[displayEvents]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$tool$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dedupeToolUsesById"])(events)
    }["AssistantMessageImpl.useMemo[displayEvents]"], [
        events
    ]);
    // ChatPane renders the canonical TodoWrite card as a standalone chat row, so
    // we strip TodoWrite tool-groups out of the per-message flow to avoid the
    // same task list rendering twice.
    const settledUseIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[settledUseIds]": ()=>new Set(displayEvents.filter({
                "AssistantMessageImpl.useMemo[settledUseIds]": (e)=>e.kind === "tool_use"
            }["AssistantMessageImpl.useMemo[settledUseIds]"]).map({
                "AssistantMessageImpl.useMemo[settledUseIds]": (e)=>e.id
            }["AssistantMessageImpl.useMemo[settledUseIds]"]))
    }["AssistantMessageImpl.useMemo[settledUseIds]"], [
        displayEvents
    ]);
    // Live code boxes (Write/Edit streaming) append after everything else.
    const liveCodeBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[liveCodeBlocks]": ()=>{
            if (!streaming || !liveToolInput) return [];
            const out = [];
            for (const [id, entry] of Object.entries(liveToolInput)){
                if (settledUseIds.has(id)) continue;
                if (!isLiveCodeToolName(entry.name)) continue;
                out.push({
                    kind: "live-tool",
                    id,
                    name: entry.name,
                    raw: entry.text
                });
            }
            return out;
        }
    }["AssistantMessageImpl.useMemo[liveCodeBlocks]"], [
        streaming,
        liveToolInput,
        settledUseIds
    ]);
    // Compose the block list, then run the strip/suppress pipeline once.
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[blocks]": ()=>{
            const rawBlocks = [
                ...buildBlocks(displayEvents),
                ...liveCodeBlocks
            ];
            return placeConversationTodoCard(stripEmptyThinkingBlocks(suppressDuplicateQuestionForms(rawBlocks)), {
                show: showConversationTodoCard,
                input: conversationTodoInput
            });
        }
    }["AssistantMessageImpl.useMemo[blocks]"], [
        displayEvents,
        liveCodeBlocks,
        showConversationTodoCard,
        conversationTodoInput
    ]);
    const fileOps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[fileOps]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$file$2d$ops$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveFileOps"])(displayEvents)
    }["AssistantMessageImpl.useMemo[fileOps]"], [
        displayEvents
    ]);
    const produced = message.producedFiles ?? [];
    const displayedProduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[displayedProduced]": ()=>produced.length > 0 ? produced : inferProducedFilesFromTurn({
                message,
                projectFiles,
                blocks,
                fileOps,
                streaming
            })
    }["AssistantMessageImpl.useMemo[displayedProduced]"], [
        blocks,
        fileOps,
        message,
        produced,
        projectFiles,
        streaming
    ]);
    // The single artifact the "next step" affordance anchors to: prefer the HTML
    // produced by THIS turn; if the final turn emitted none (a summary / continue
    // message) fall back to the most recently modified HTML in the project so
    // Share / Download still target the deliverable the user just made.
    const nextStepArtifactName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[nextStepArtifactName]": ()=>pickPreviewableArtifact(displayedProduced) ?? pickLatestPreviewableArtifact(projectFiles)
    }["AssistantMessageImpl.useMemo[nextStepArtifactName]"], [
        displayedProduced,
        projectFiles
    ]);
    const pluginActionFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantMessageImpl.useMemo[pluginActionFolders]": ()=>!streaming && isLast && projectId ? pluginFoldersTouchedThisTurn(projectFiles, fileOps, displayedProduced, message.content).filter({
                "AssistantMessageImpl.useMemo[pluginActionFolders]": (folder)=>!hiddenPluginActionPaths.has(folder.path)
            }["AssistantMessageImpl.useMemo[pluginActionFolders]"]) : []
    }["AssistantMessageImpl.useMemo[pluginActionFolders]"], [
        displayedProduced,
        fileOps,
        hiddenPluginActionPaths,
        isLast,
        message.content,
        projectFiles,
        projectId,
        streaming
    ]);
    // Plugin action state lives at the AssistantMessage level (not inside
    // PluginActionPanel) so the success notice survives the unmount/remount
    // cycle ProjectView triggers via `hiddenPluginActionPaths` during install
    // (issue #2876). If state lived inside the panel the setNoticeByFolder
    // call after `await onRequestPluginFolderAgentAction(...)` would land on
    // a dead fiber and the user would see nothing change after "Sending...".
    const [pluginBusyKey, setPluginBusyKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pluginNoticeByFolder, setPluginNoticeByFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const runPluginAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantMessageImpl.useCallback[runPluginAction]": async (folder, action)=>{
            if (pluginBusyKey || !onRequestPluginFolderAgentAction) return;
            const key = `${action}:${folder.path}`;
            setPluginBusyKey(key);
            setPluginNoticeByFolder({
                "AssistantMessageImpl.useCallback[runPluginAction]": (prev)=>{
                    if (!(folder.path in prev)) return prev;
                    const next = {
                        ...prev
                    };
                    delete next[folder.path];
                    return next;
                }
            }["AssistantMessageImpl.useCallback[runPluginAction]"]);
            try {
                const outcome = await onRequestPluginFolderAgentAction(folder.path, action);
                const url = outcome && typeof outcome === "object" && typeof outcome.url === "string" ? outcome.url : "";
                const message = outcome && typeof outcome === "object" && typeof outcome.message === "string" ? outcome.message : "";
                // The install endpoint's PluginInstallOutcome contract leaves
                // `message` optional. When both message and url are absent we still
                // need to confirm success — the bug report explicitly describes
                // "the plugin was in fact added successfully, but the original
                // screen did not communicate that outcome." Default to a short
                // success label keyed off the action.
                const notice = message || url ? buildActionNotice(message || url, url) : action === "install" ? {
                    message: "Added to My plugins."
                } : null;
                if (notice) {
                    setPluginNoticeByFolder({
                        "AssistantMessageImpl.useCallback[runPluginAction]": (prev)=>({
                                ...prev,
                                [folder.path]: notice
                            })
                    }["AssistantMessageImpl.useCallback[runPluginAction]"]);
                }
            } catch (err) {
                setPluginNoticeByFolder({
                    "AssistantMessageImpl.useCallback[runPluginAction]": (prev)=>({
                            ...prev,
                            [folder.path]: {
                                message: err instanceof Error ? err.message : String(err)
                            }
                        })
                }["AssistantMessageImpl.useCallback[runPluginAction]"]);
            } finally{
                setPluginBusyKey(null);
            }
        }
    }["AssistantMessageImpl.useCallback[runPluginAction]"], [
        pluginBusyKey,
        onRequestPluginFolderAgentAction
    ]);
    const usage = events.find((e)=>e.kind === "usage");
    const roleName = assistantRoleName(message, t);
    const roleIconId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentIconId"])(message.agentId, message.agentName);
    const hasEmptyResponse = events.some((e)=>e.kind === "status" && e.label === "empty_response");
    const unfinishedTodos = streaming ? [] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unfinishedTodosFromEvents"])(events);
    const runSucceeded = !streaming && (message.runStatus === "succeeded" || !message.runStatus && !!message.endedAt);
    const canContinueTodos = !streaming && !!isLast && unfinishedTodos.length > 0 && !!onContinueRemainingTasks;
    const canFork = !streaming && !!onForkFromMessage;
    const copyMarkdown = message.content.trim().length > 0 ? message.content : undefined;
    const showFeedback = !!onFeedback && isFeedbackEligible({
        streaming,
        message,
        hasEmptyResponse,
        hasUnfinishedTodos: unfinishedTodos.length > 0
    });
    const showCompletionRow = showFeedback || streaming || !!message.startedAt || !!message.endedAt || !!usage || unfinishedTodos.length > 0 || hasEmptyResponse || !!copyMarkdown || canFork;
    const canShowOpenDesignSubmission = !!onShareToOpenDesign && showFeedback && runSucceeded;
    const showOpenDesignSubmission = canShowOpenDesignSubmission && (!!isLast || shareToOpenDesignBusy);
    // "Next step" only makes sense once there is a deliverable to act on. Anchor
    // the whole card (toolbox cascade + Share + Contribute) on a previewable HTML
    // artifact — produced this turn or earlier in the project. A pure
    // clarifying-questions / summary turn that emitted no HTML must not surface
    // the card (issue: card appeared after a question-only turn with no artifact).
    const showNextStepActions = !streaming && !!projectId && runSucceeded && !!nextStepArtifactName && (!!isLast && !!onToolboxAction || showOpenDesignSubmission);
    // Pre-output vs working: before any real content (text / thinking / tools /
    // files) the footer shimmers "Preparing…"; the moment content lands it
    // flips to "Working". The elapsed clock stays anchored to the persisted run
    // start so switching project tabs or remounting the message cannot restart it.
    const hasContent = blocks.some((b)=>b.kind !== "status") || fileOps.length > 0;
    const preparing = streaming && !hasContent;
    const preparingStatus = preparing && events.some((e)=>e.kind === "status" && e.label === "thinking") ? "thinking" : "preparing";
    // Index of the trailing text block — the streaming caret rides the end of
    // the last prose block so it tracks the final character as tokens arrive.
    let lastTextBlockIndex = -1;
    for(let i = blocks.length - 1; i >= 0; i--){
        if (blocks[i]?.kind === "text") {
            lastTextBlockIndex = i;
            break;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "msg assistant",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "role",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AgentIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentIcon"], {
                        id: roleIconId,
                        size: 20,
                        className: "role-agent-icon"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "role-name",
                        children: roleName
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "assistant-flow",
                children: [
                    fileOps.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FileOpsSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileOpsSummary"], {
                        entries: fileOps,
                        streaming: streaming,
                        projectFileNames: projectFileNames,
                        onRequestOpenFile: onRequestOpenFile
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this) : null,
                    blocks.map((b, i)=>{
                        if (b.kind === "text") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProseBlock, {
                            text: b.text,
                            hideRecoveredHtmlFallback: (message.agentId === "grok-build" || message.agentId === "claude") && !streaming,
                            assistantMessageId: message.id,
                            isLastAssistant: !!isLast,
                            streaming: streaming,
                            showStreamCursor: streaming && i === lastTextBlockIndex,
                            nextUserContent: nextUserContent,
                            suppressDirectionForms: suppressDirectionForms,
                            onOpenQuestions: onOpenQuestions,
                            projectId: projectId,
                            conversationId: conversationId,
                            runId: message.runId ?? null,
                            projectFileNames: projectFileNames,
                            onRequestOpenFile: onRequestOpenFile
                        }, i, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 635,
                            columnNumber: 15
                        }, this);
                        if (b.kind === "thinking") // Thinking is only "in progress" while this is the trailing block.
                        // Once any block (prose / tools) lands after it, the model has
                        // moved past thinking, so the block flips to its finished state.
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThinkingBlock, {
                            text: b.text,
                            streaming: streaming && i === blocks.length - 1
                        }, i, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 658,
                            columnNumber: 15
                        }, this);
                        if (b.kind === "tool-group") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolGroupCard, {
                                items: b.items,
                                runStreaming: streaming,
                                runSucceeded: runSucceeded,
                                projectFileNames: projectFileNames,
                                onRequestOpenFile: onRequestOpenFile
                            }, i, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 666,
                                columnNumber: 15
                            }, this);
                        }
                        if (b.kind === "live-tool") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveCodeBox, {
                                name: b.name,
                                raw: b.raw
                            }, b.id, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 677,
                                columnNumber: 20
                            }, this);
                        }
                        if (b.kind === "plugin-candidate") {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillPluginCandidateCard, {
                                block: b,
                                projectId: projectId,
                                onRequestOpenFile: onRequestOpenFile
                            }, i, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 681,
                                columnNumber: 15
                            }, this);
                        }
                        if (b.kind === "status") {
                            // Suppress this message's gray error pill ONLY when ChatPane is
                            // rendering the top-level error card for it (the last failed run).
                            // Other failed turns — older history, or once a follow-up makes
                            // this no longer the last assistant message — keep their pill so
                            // the error detail still survives reload / history review.
                            if (b.label === "error" && message.id === errorCardOwnerId) return null;
                            // The pre-output "initializing" status is surfaced by the footer's
                            // shimmering "Preparing…" label instead of its own pill.
                            if (b.label === "initializing") return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                label: b.label,
                                detail: b.detail
                            }, i, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 699,
                                columnNumber: 20
                            }, this);
                        }
                        return null;
                    }),
                    !streaming && displayedProduced.length > 0 && projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProducedFiles, {
                        files: displayedProduced,
                        projectId: projectId,
                        onRequestOpenFile: onRequestOpenFile
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 704,
                        columnNumber: 11
                    }, this) : null,
                    !streaming && projectId && pluginActionFolders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PluginActionPanel, {
                        folders: pluginActionFolders,
                        notices: pluginNoticeByFolder,
                        busyKey: pluginBusyKey,
                        onRunAction: runPluginAction,
                        onRequestOpenFile: onRequestOpenFile,
                        onRequestPluginFolderAgentAction: onRequestPluginFolderAgentAction,
                        activePluginActionPaths: activePluginActionPaths
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 711,
                        columnNumber: 11
                    }, this) : null,
                    !streaming && projectId ? Object.entries(pluginNoticeByFolder).filter(([path])=>!pluginActionFolders.some((folder)=>folder.path === path)).map(([path, notice])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plugin-action-orphan-notice",
                            role: "status",
                            "data-testid": `plugin-folder-notice-${path}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionNoticeView, {
                                notice: notice
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 739,
                                columnNumber: 19
                            }, this)
                        }, `plugin-orphan-notice-${path}`, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 733,
                            columnNumber: 17
                        }, this)) : null,
                    !streaming && unfinishedTodos.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UnfinishedTodosPanel, {
                        todos: unfinishedTodos,
                        canContinue: canContinueTodos,
                        onContinue: ()=>onContinueRemainingTasks?.(unfinishedTodos)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 744,
                        columnNumber: 11
                    }, this) : null,
                    showCompletionRow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "assistant-completion-row",
                        children: showFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantFeedback, {
                            feedback: message.feedback,
                            onFeedback: onFeedback,
                            projectId: projectId,
                            projectKind: projectKind,
                            conversationId: conversationId,
                            runId: message.runId ?? null,
                            assistantMessageId: message.id,
                            modelId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modelIdForTracking"])(assistantFeedbackModelId(message)),
                            agentProviderId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackAgentProviderIdToTracking"])(message.agentId),
                            producedFileCount: displayedProduced.length,
                            hasDesignSystemContext: hasDesignSystemContext,
                            footerProps: {
                                streaming,
                                startedAt: message.startedAt,
                                endedAt: message.endedAt,
                                usage,
                                hasUnfinishedTodos: unfinishedTodos.length > 0,
                                hasEmptyResponse,
                                preparing,
                                preparingStatus,
                                copyMarkdown,
                                onFork: canFork ? onForkFromMessage : undefined,
                                forking,
                                forceVisible: true,
                                isLast: !!isLast
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 753,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantFooter, {
                            streaming: streaming,
                            startedAt: message.startedAt,
                            endedAt: message.endedAt,
                            usage: usage,
                            hasUnfinishedTodos: unfinishedTodos.length > 0,
                            hasEmptyResponse: hasEmptyResponse,
                            preparing: preparing,
                            preparingStatus: preparingStatus,
                            copyMarkdown: copyMarkdown,
                            onFork: canFork ? onForkFromMessage : undefined,
                            forking: forking,
                            isLast: !!isLast
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 782,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 751,
                        columnNumber: 11
                    }, this) : null,
                    showNextStepActions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NextStepActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextStepActions"], {
                        fileName: isLast ? nextStepArtifactName : null,
                        onShare: isLast && nextStepArtifactName ? onArtifactShare : undefined,
                        onToolboxAction: isLast ? onToolboxAction : undefined,
                        onPickSkill: isLast ? onPickSkill : undefined,
                        onDownload: isLast && nextStepArtifactName ? onArtifactDownload : undefined,
                        skills: isLast ? nextStepSkills : undefined,
                        toolboxSkillNames: isLast ? toolboxSkillNames : undefined,
                        onShareToOpenDesign: showOpenDesignSubmission ? onShareToOpenDesign : undefined,
                        shareToOpenDesignBusy: shareToOpenDesignBusy
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 800,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 618,
        columnNumber: 5
    }, this);
}
_s1(AssistantMessageImpl, "LoTRGKPZjR6jUfsE+x2kmh4T4xY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c3 = AssistantMessageImpl;
// Return the name of the first previewable HTML artifact among the produced
// files, or null if this turn produced no shareable/polishable preview. Only
// HTML files drive the preview workspace's Share/Export menu and the
// visual-polish loop, so the "next step" affordance keys off them.
function isPreviewableHtml(f) {
    return f.kind === "html" || /\.html?$/i.test(f.name);
}
function pickPreviewableArtifact(files) {
    const html = files.find(isPreviewableHtml);
    return html ? html.name : null;
}
// Fallback for when the card-bearing turn produced no HTML itself: pick the
// most recently modified HTML in the project (the deliverable the user just
// made / is looking at) rather than whichever HTML happens to be first, which
// would attach Share/Download to an arbitrary file in a multi-artifact project.
function pickLatestPreviewableArtifact(files) {
    let latest = null;
    for (const f of files){
        if (!isPreviewableHtml(f)) continue;
        if (!latest || (f.mtime ?? 0) > (latest.mtime ?? 0)) latest = f;
    }
    return latest ? latest.name : null;
}
function inferProducedFilesFromTurn({ message, projectFiles, blocks, fileOps, streaming }) {
    if (streaming || message.role !== "assistant") return [];
    if (message.runStatus !== "succeeded") return [];
    if (!message.startedAt || !message.endedAt) return [];
    if (blocks.some((block)=>block.kind === "text" || block.kind === "tool-group")) return [];
    if (fileOps.length > 0) return [];
    const start = message.startedAt - 1_000;
    const end = message.endedAt + 60_000;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$produced$2d$files$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterImplicitProducedFiles"])(projectFiles.filter((file)=>{
        if (file.type === "dir") return false;
        if (!file.name || file.name.startsWith(".")) return false;
        if (file.name.includes("/.")) return false;
        return file.mtime >= start && file.mtime <= end;
    })).sort((a, b)=>b.mtime - a.mtime);
}
// A run that reached a terminal state — succeeded, failed, or canceled — has a
// settled assistant turn worth rating. Only queued/running turns are still in
// flight, so they have no outcome to give feedback on yet. Feedback used to be
// gated on success alone, which silently dropped the thumbs row on failed and
// canceled turns even though those are exactly the outcomes a user most wants
// to thumbs-down.
function isTerminalRunStatus(status) {
    return status === "succeeded" || status === "failed" || status === "canceled";
}
function isFeedbackEligible({ streaming, message, hasEmptyResponse, hasUnfinishedTodos }) {
    if (streaming || hasEmptyResponse || hasUnfinishedTodos) return false;
    if (message.runStatus) return isTerminalRunStatus(message.runStatus);
    return !!message.endedAt;
}
function assistantRoleName(message, t) {
    const fromName = message.agentName?.trim();
    if (fromName) {
        const base = fromName.split(" · ")[0]?.trim() || fromName;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exactAgentDisplayName"])(base) ?? base;
    }
    const fromId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentDisplayName"])(message.agentId);
    if (fromId) return fromId;
    const starting = message.events?.find((e)=>e.kind === "status" && e.label === "starting" && e.detail);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentDisplayName"])(starting?.detail) ?? t("assistant.role");
}
function assistantRoleLabel(message, t) {
    const model = assistantModelDetail(message);
    const fromName = message.agentName?.trim();
    if (fromName) return appendRoleModel((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exactAgentDisplayName"])(fromName) ?? fromName, model);
    const fromId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentDisplayName"])(message.agentId);
    if (fromId) return appendRoleModel(fromId, model);
    const starting = message.events?.find((e)=>e.kind === "status" && e.label === "starting" && e.detail);
    return appendRoleModel((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentDisplayName"])(starting?.detail) ?? t("assistant.role"), model);
}
function assistantModelDetail(message) {
    const initializing = message.events?.find((e)=>e.kind === "status" && e.label === "initializing" && e.detail);
    const detail = initializing?.detail?.trim();
    if (!detail || detail === "default") return null;
    return detail;
}
function assistantFeedbackModelId(message) {
    const detail = assistantModelDetail(message);
    if (detail) return detail;
    const displayName = message.agentName?.trim();
    if (!displayName) return null;
    const parts = displayName.split(" · ");
    const model = parts.length > 1 ? parts[parts.length - 1]?.trim() : "";
    return model || null;
}
function appendRoleModel(label, model) {
    if (!model || label.includes(" · ")) return label;
    return `${label} · ${model}`;
}
function AssistantFooter({ streaming, startedAt, endedAt, usage, hasUnfinishedTodos, hasEmptyResponse, preparing = false, preparingStatus = "preparing", copyMarkdown, onFork, forking = false, feedbackControls, forceVisible = false, isLast = false }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const elapsed = useLiveElapsed(streaming, startedAt, endedAt, usage?.durationMs);
    const formattedCost = typeof usage?.costUsd === "number" && Number.isFinite(usage.costUsd) && usage.costUsd > 0 ? usage.costUsd.toFixed(4) : "";
    const costLabel = formattedCost && formattedCost !== "0.0000" ? ` · $${formattedCost}` : "";
    if (!forceVisible && !streaming && !elapsed && !usage && !hasUnfinishedTodos && !hasEmptyResponse && !copyMarkdown && !onFork) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "assistant-footer",
        "data-unfinished": hasUnfinishedTodos ? "true" : "false",
        "data-streaming": streaming ? "true" : "false",
        "data-last": isLast ? "true" : "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "dot",
                "data-active": streaming ? "true" : "false"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1027,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `assistant-label${streaming && preparing ? " shimmer-text shimmer-prepare" : ""}`,
                children: streaming ? preparing ? preparingStatus === "thinking" ? t("assistant.statusThinking") : t("assistant.statusPreparing") : t("assistant.workingLabel") : hasEmptyResponse ? t("assistant.emptyResponseLabel") : hasUnfinishedTodos ? t("assistant.unfinishedLabel") : t("assistant.doneLabel")
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1028,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "assistant-stats",
                children: [
                    elapsed,
                    usage?.outputTokens != null ? ` · ${t("assistant.outTokens", {
                        n: usage.outputTokens
                    })}` : "",
                    costLabel
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1041,
                columnNumber: 7
            }, this),
            copyMarkdown || onFork || feedbackControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "assistant-footer-controls",
                children: [
                    copyMarkdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantMarkdownCopyButton, {
                        markdown: copyMarkdown
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1050,
                        columnNumber: 27
                    }, this) : null,
                    onFork ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantForkButton, {
                        disabled: forking,
                        onFork: onFork
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1052,
                        columnNumber: 13
                    }, this) : null,
                    feedbackControls
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1049,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1021,
        columnNumber: 5
    }, this);
}
_s2(AssistantFooter, "NOF9VyAFzlFiSQahgg+Mck5bKxM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        useLiveElapsed
    ];
});
_c4 = AssistantFooter;
function AssistantForkButton({ disabled, onFork }) {
    _s3();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const label = disabled ? t("assistant.forkingConversation") : t("assistant.forkConversation");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "assistant-copy-button od-tooltip",
        disabled: disabled,
        "data-testid": "assistant-fork-button",
        "data-tooltip": label,
        "data-tooltip-placement": "top",
        onClick: onFork,
        "aria-label": label,
        title: label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: disabled ? "spinner" : "fork",
            size: 13
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
            lineNumber: 1087,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1076,
        columnNumber: 5
    }, this);
}
_s3(AssistantForkButton, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c5 = AssistantForkButton;
function AssistantMarkdownCopyButton({ markdown }) {
    _s4();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantMarkdownCopyButton.useEffect": ()=>{
            return ({
                "AssistantMarkdownCopyButton.useEffect": ()=>{
                    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
                }
            })["AssistantMarkdownCopyButton.useEffect"];
        }
    }["AssistantMarkdownCopyButton.useEffect"], []);
    async function handleCopy() {
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(markdown);
        if (!ok) return;
        setCopied(true);
        copyTimerRef.current = setTimeout(()=>{
            setCopied(false);
            copyTimerRef.current = undefined;
        }, 2000);
    }
    const label = copied ? t("chat.copyDone") : t("assistant.copyMarkdown");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "assistant-copy-button od-tooltip",
        "data-testid": "assistant-copy-markdown",
        "data-copied": copied ? "true" : "false",
        "data-tooltip": label,
        "data-tooltip-placement": "top",
        onClick: ()=>{
            void handleCopy();
        },
        "aria-label": label,
        title: label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: copied ? "check" : "copy",
            size: 13
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
            lineNumber: 1129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1116,
        columnNumber: 5
    }, this);
}
_s4(AssistantMarkdownCopyButton, "eh+YyZFW6tttUDPo9lbbJFSdzz0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c6 = AssistantMarkdownCopyButton;
function AssistantFeedback({ feedback, onFeedback, hasDesignSystemContext, footerProps, projectId, projectKind, conversationId, runId, assistantMessageId, modelId, agentProviderId, producedFileCount }) {
    _s5();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // Analytics context the feedback events need. The four ids are either
    // user-anchored (projectId / assistantMessageId) or run-anchored (runId),
    // so we pass them down with a stable identity. `producedFileCount` feeds
    // `has_produced_files` on assistant_feedback_button click.
    const [burstKey, setBurstKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reasonRating, setReasonRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const reasonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [draftReasonCodes, setDraftReasonCodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AssistantFeedback.useState": ()=>new Set()
    }["AssistantFeedback.useState"]);
    const [customReason, setCustomReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const selected = feedback?.rating;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantFeedback.useEffect": ()=>{
            if (selected) return;
            setReasonRating(null);
        }
    }["AssistantFeedback.useEffect"], [
        selected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantFeedback.useEffect": ()=>{
            if (!reasonRating) return;
            reasonsRef.current?.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
            // P0 surface_view assistant_feedback_reason_panel — fires when the
            // reason panel actually appears (reasonRating flips from null to
            // truthy), not when the buttons render.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackReasonPanelSurfaceView"])(analytics.track, {
                page_name: "chat_panel",
                area: "chat_panel",
                element: "assistant_feedback_reason_panel",
                view_type: "panel",
                project_id: projectId ?? "",
                project_kind: projectKind,
                conversation_id: conversationId,
                assistant_message_id: assistantMessageId,
                run_id: runId ?? "",
                rating: reasonRating
            });
            // Dedicated assistant_feedback_reason_view event paired with the
            // umbrella surface_view above. Requires the full project + conversation
            // identity (its props type is stricter than the umbrella variant);
            // skipped on test renders that mount AssistantMessage without those.
            if (projectId && projectKind && conversationId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackReasonView"])(analytics.track, {
                    page: "studio",
                    area: "chat_panel",
                    element: "assistant_feedback_reason_panel",
                    view_type: "panel",
                    project_id: projectId,
                    project_kind: projectKind,
                    conversation_id: conversationId,
                    assistant_message_id: assistantMessageId,
                    run_id: runId ?? null,
                    agent_provider_id: agentProviderId,
                    model_id: modelId,
                    rating: reasonRating
                });
            }
        }
    }["AssistantFeedback.useEffect"], [
        reasonRating,
        analytics.track,
        projectId,
        projectKind,
        conversationId,
        assistantMessageId,
        runId,
        agentProviderId,
        modelId
    ]);
    const toggleFeedback = (rating)=>{
        const nextRating = selected === rating ? null : rating;
        if (nextRating === "positive") setBurstKey((key)=>key + 1);
        setDraftReasonCodes(new Set());
        setCustomReason("");
        setReasonRating(nextRating);
        // P0 ui_click assistant_feedback_button. v1 emitted `rating: null` on
        // the clear path, which lost the signal "user un-thumbed positive vs
        // un-thumbed negative". v2 fixes this: when clearing, `rating` carries
        // the rating that was cleared (the user's most recent gesture target),
        // and `rating_before` records the previous selection state.
        const ratingBefore = selected ?? "none";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackButtonClick"])(analytics.track, {
            page_name: "chat_panel",
            area: "chat_panel",
            element: "assistant_feedback_button",
            action: nextRating ? "submit_feedback_rating" : "clear_feedback_rating",
            project_id: projectId ?? "",
            project_kind: projectKind,
            conversation_id: conversationId,
            assistant_message_id: assistantMessageId,
            run_id: runId ?? "",
            agent_provider_id: agentProviderId,
            model_id: modelId,
            rating,
            rating_before: ratingBefore,
            has_produced_files: producedFileCount > 0
        });
        // Dedicated assistant_feedback_click paired with the umbrella ui_click
        // above. Carries the post-action rating in the widened union (allows
        // 'none' for the clear path).
        if (projectId && projectKind && conversationId) {
            const ratingAfter = nextRating ?? "none";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackClick"])(analytics.track, {
                page: "studio",
                area: "chat_panel",
                element: "assistant_feedback_button",
                action: nextRating ? "submit_feedback_rating" : "clear_feedback_rating",
                project_id: projectId,
                project_kind: projectKind,
                conversation_id: conversationId,
                assistant_message_id: assistantMessageId,
                run_id: runId ?? null,
                agent_provider_id: agentProviderId,
                model_id: modelId,
                rating: ratingAfter,
                rating_before: ratingBefore,
                has_produced_files: producedFileCount > 0
            });
        }
        onFeedback(nextRating ? {
            rating: nextRating
        } : null);
    };
    const toggleReasonCode = (code)=>{
        const next = new Set(draftReasonCodes);
        if (next.has(code)) {
            next.delete(code);
            if (code === "other") setCustomReason("");
        } else {
            next.add(code);
        }
        setDraftReasonCodes(next);
    };
    const submitReasons = ()=>{
        if (!reasonRating) return;
        const trimmedCustomReason = customReason.trim();
        const reasonCodes = [
            ...draftReasonCodes
        ];
        const reasonJoined = reasonCodes.length > 0 ? reasonCodes.join(",") : undefined;
        const hasCustomReason = draftReasonCodes.has("other") && trimmedCustomReason.length > 0;
        const requestId = analytics.newRequestId();
        // P0 ui_click element=assistant_feedback_reason_submit_button — fires
        // synchronously on the user gesture so the click count never depends on
        // the host's onFeedback persistence resolving.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackReasonSubmitClick"])(analytics.track, {
            page_name: "chat_panel",
            area: "chat_panel",
            element: "assistant_feedback_reason_submit_button",
            action: "click_submit_feedback_reason",
            project_id: projectId ?? "",
            project_kind: projectKind,
            conversation_id: conversationId,
            assistant_message_id: assistantMessageId,
            run_id: runId ?? "",
            agent_provider_id: agentProviderId,
            model_id: modelId,
            rating: reasonRating,
            ...reasonJoined ? {
                reason: reasonJoined
            } : {},
            reason_count: reasonCodes.length,
            has_custom_reason: hasCustomReason,
            ...hasCustomReason ? {
                custom_reason: trimmedCustomReason
            } : {}
        }, {
            requestId
        });
        // P0 feedback_submit_result — paired with the click via requestId so
        // PostHog dashboards can correlate intent → persistence. onFeedback in
        // our app currently completes synchronously, so we emit `success`
        // optimistically; a future error-aware host can flip this to `failed`.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFeedbackSubmitResult"])(analytics.track, {
            page_name: "chat_panel",
            area: "chat_panel",
            element: "assistant_feedback_reason_submit",
            action: "submit_feedback_reason",
            project_id: projectId ?? "",
            project_kind: projectKind,
            conversation_id: conversationId,
            assistant_message_id: assistantMessageId,
            run_id: runId ?? "",
            agent_provider_id: agentProviderId,
            model_id: modelId,
            rating: reasonRating,
            ...reasonJoined ? {
                reason: reasonJoined
            } : {},
            reason_count: reasonCodes.length,
            has_custom_reason: hasCustomReason,
            ...hasCustomReason ? {
                custom_reason: trimmedCustomReason
            } : {},
            result: "success"
        }, {
            requestId
        });
        // Dedicated assistant_feedback_reason_click + reason_submit paired with
        // the umbrella ui_click + feedback_submit_result above. Both fire under
        // the same `requestId` so PostHog can stitch click → result per the
        // tracking spec.
        if (projectId && projectKind && conversationId) {
            const reasons = reasonCodes;
            const sharedPayload = {
                page: "studio",
                area: "chat_panel",
                project_id: projectId,
                project_kind: projectKind,
                conversation_id: conversationId,
                assistant_message_id: assistantMessageId,
                run_id: runId ?? null,
                agent_provider_id: agentProviderId,
                model_id: modelId,
                rating: reasonRating,
                reason: reasons,
                reason_count: reasons.length,
                has_custom_reason: hasCustomReason,
                custom_reason: hasCustomReason ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCustomReason"])(trimmedCustomReason) : ""
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackReasonClick"])(analytics.track, {
                ...sharedPayload,
                element: "assistant_feedback_reason_submit_button",
                action: "click_submit_feedback_reason"
            }, {
                requestId
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAssistantFeedbackReasonSubmit"])(analytics.track, {
                ...sharedPayload,
                element: "assistant_feedback_reason_submit",
                action: "submit_feedback_reason"
            }, {
                requestId
            });
        }
        onFeedback({
            rating: reasonRating,
            reasonCodes,
            customReason: draftReasonCodes.has("other") && trimmedCustomReason ? trimmedCustomReason : undefined,
            reasonsSubmittedAt: Date.now()
        });
        setReasonRating(null);
    };
    const reasonOptions = reasonRating ? feedbackReasonOptions(reasonRating, t, hasDesignSystemContext) : [];
    const reasonEmoji = reasonRating === "positive" ? "😊" : "😔";
    const showOtherInput = draftReasonCodes.has("other");
    const canSubmit = draftReasonCodes.size > 0 || showOtherInput && customReason.trim().length > 0;
    const controls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "assistant-feedback",
        role: "group",
        "aria-label": t("assistant.feedbackPrompt"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "assistant-feedback-button od-tooltip",
                "data-testid": "assistant-feedback-positive",
                "data-selected": selected === "positive" ? "true" : "false",
                "data-tooltip": t("assistant.feedbackPositive"),
                "data-tooltip-placement": "top",
                "aria-pressed": selected === "positive",
                "aria-label": t("assistant.feedbackPositive"),
                title: t("assistant.feedbackPositive"),
                onClick: ()=>toggleFeedback("positive"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "thumbs-up",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1429,
                        columnNumber: 9
                    }, this),
                    burstKey > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "assistant-feedback-burst",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1436,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1441,
                                columnNumber: 13
                            }, this)
                        ]
                    }, burstKey, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1431,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "assistant-feedback-button od-tooltip",
                "data-testid": "assistant-feedback-negative",
                "data-selected": selected === "negative" ? "true" : "false",
                "data-tooltip": t("assistant.feedbackNegative"),
                "data-tooltip-placement": "top",
                "aria-pressed": selected === "negative",
                "aria-label": t("assistant.feedbackNegative"),
                title: t("assistant.feedbackNegative"),
                onClick: ()=>toggleFeedback("negative"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "thumbs-down",
                    size: 13
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 1457,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1445,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1412,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "assistant-feedback-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantFooter, {
                ...footerProps,
                feedbackControls: controls
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1463,
                columnNumber: 7
            }, this),
            reasonRating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "assistant-feedback-reasons",
                ref: reasonsRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "assistant-feedback-reason-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("assistant.feedbackReasonTitle")
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1467,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "assistant-feedback-reason-emoji",
                                "aria-hidden": "true",
                                children: reasonEmoji
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1468,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1466,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "assistant-feedback-reason-options",
                        children: reasonOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "assistant-feedback-reason-option",
                                "data-selected": draftReasonCodes.has(option.code) ? "true" : "false",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: draftReasonCodes.has(option.code),
                                        onChange: ()=>toggleReasonCode(option.code)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1479,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1484,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, option.code, true, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1474,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1472,
                        columnNumber: 11
                    }, this),
                    showOtherInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "assistant-feedback-custom",
                        value: customReason,
                        placeholder: t("assistant.feedbackReasonPlaceholder"),
                        rows: 2,
                        onChange: (event)=>setCustomReason(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1489,
                        columnNumber: 13
                    }, this) : null,
                    reasonRating === "positive" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "assistant-feedback-discord-note",
                        children: [
                            "Share what you made with the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: DISCORD_INVITE_URL,
                                "data-testid": "assistant-feedback-discord-positive",
                                children: "Discord"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1500,
                                columnNumber: 15
                            }, this),
                            " ",
                            "community, or drop a screenshot and tell us what worked well."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1498,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "assistant-feedback-discord-note",
                        children: [
                            "Share more context in",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: DISCORD_INVITE_URL,
                                "data-testid": "assistant-feedback-discord-negative",
                                children: "Discord"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1511,
                                columnNumber: 15
                            }, this),
                            " ",
                            "so the team can understand what went wrong and follow up directly."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1509,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "assistant-feedback-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "assistant-feedback-submit",
                            disabled: !canSubmit,
                            onClick: submitReasons,
                            children: t("assistant.feedbackReasonSubmit")
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 1521,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1520,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1465,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1462,
        columnNumber: 5
    }, this);
}
_s5(AssistantFeedback, "jL5zmbgjj+4mgfovFV+BvgtkjJw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c7 = AssistantFeedback;
function feedbackReasonOptions(rating, t, hasDesignSystemContext) {
    const codes = rating === "positive" ? [
        "matched_request",
        "strong_visual",
        "useful_structure",
        "easy_to_continue",
        ...hasDesignSystemContext ? [
            "followed_design_system"
        ] : [],
        "other"
    ] : [
        "missed_request",
        "weak_visual",
        "incomplete_output",
        "hard_to_use",
        ...hasDesignSystemContext ? [
            "missed_design_system"
        ] : [],
        "other"
    ];
    return codes.map((code)=>({
            code,
            label: feedbackReasonLabel(code, t)
        }));
}
function feedbackReasonLabel(code, t) {
    switch(code){
        case "matched_request":
            return t("assistant.feedbackReasonPositiveMatched");
        case "strong_visual":
            return t("assistant.feedbackReasonPositiveVisual");
        case "useful_structure":
            return t("assistant.feedbackReasonPositiveUseful");
        case "easy_to_continue":
            return t("assistant.feedbackReasonPositiveEasy");
        case "followed_design_system":
            return t("assistant.feedbackReasonPositiveDesignSystem");
        case "missed_request":
            return t("assistant.feedbackReasonNegativeMissed");
        case "weak_visual":
            return t("assistant.feedbackReasonNegativeVisual");
        case "incomplete_output":
            return t("assistant.feedbackReasonNegativeIncomplete");
        case "hard_to_use":
            return t("assistant.feedbackReasonNegativeHard");
        case "missed_design_system":
            return t("assistant.feedbackReasonNegativeDesignSystem");
        case "other":
            return t("assistant.feedbackReasonOther");
    }
    return code;
}
function UnfinishedTodosPanel({ todos, canContinue, onContinue }) {
    _s6();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const visible = todos.slice(0, 3);
    const hiddenCount = todos.length - visible.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "unfinished-todos",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "unfinished-todos-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "unfinished-todos-title",
                        children: t("assistant.unfinishedSummary", {
                            n: todos.length
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1608,
                        columnNumber: 9
                    }, this),
                    canContinue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "unfinished-todos-continue",
                        onClick: onContinue,
                        children: t("assistant.continueRemaining")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1612,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "unfinished-todos-list",
                children: visible.map((todo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: todo.status === "in_progress" && todo.activeForm ? todo.activeForm : todo.content
                    }, `${todo.status}-${todo.content}-${i}`, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1623,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1621,
                columnNumber: 7
            }, this),
            hiddenCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "unfinished-todos-more",
                children: t("assistant.unfinishedMore", {
                    n: hiddenCount
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1631,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1606,
        columnNumber: 5
    }, this);
}
_s6(UnfinishedTodosPanel, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c8 = UnfinishedTodosPanel;
function ProducedFiles({ files, projectId, onRequestOpenFile }) {
    _s7();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "produced-files",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "produced-files-label",
                children: t("assistant.producedFiles")
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "produced-files-list",
                children: files.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "produced-file",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "produced-file-icon",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: kindIconName(f.kind),
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                    lineNumber: 1656,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1655,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "produced-file-name",
                                title: f.name,
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1658,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "produced-file-size",
                                children: humanBytes(f.size)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1661,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "produced-file-actions",
                                children: [
                                    onRequestOpenFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ghost",
                                        onClick: ()=>onRequestOpenFile(f.name),
                                        children: t("assistant.openFile")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1664,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "ghost-link",
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(projectId, f.name),
                                        download: f.name,
                                        children: t("assistant.downloadFile")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1672,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1662,
                                columnNumber: 13
                            }, this)
                        ]
                    }, f.name, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1654,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1652,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1650,
        columnNumber: 5
    }, this);
}
_s7(ProducedFiles, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c9 = ProducedFiles;
// Pure renderer. State (busyKey, notices) and the action runner live in the
// AssistantMessage parent so they survive the panel's unmount/remount cycle
// during install (issue #2876).
function PluginActionPanel({ folders, notices, busyKey, onRunAction, onRequestOpenFile, onRequestPluginFolderAgentAction, activePluginActionPaths = new Set() }) {
    const noticeByFolder = notices;
    const runAction = onRunAction;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugin-action-panel",
        "aria-label": "Plugin next actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-action-panel__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugin-action-panel__icon",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "sparkles",
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 1720,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1719,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-action-panel__title",
                                children: "Plugin ready"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1723,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-action-panel__subtitle",
                                children: "Send the next step to the agent so it can run the od CLI."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1724,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1722,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugin-action-panel__list",
                children: folders.map((folder)=>{
                    const actionBusy = activePluginActionPaths.has(folder.path);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugin-action-card",
                        "data-testid": `assistant-plugin-actions-${folder.path}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-action-card__main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "plugin-action-card__folder-icon",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "folder",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                            lineNumber: 1740,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plugin-action-card__copy",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "plugin-action-card__path",
                                                children: folder.path
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1743,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    folder.fileCount,
                                                    " files ready for My plugins"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1744,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1742,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1738,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-action-card__actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugin-action-button plugin-action-button--primary",
                                        "data-testid": `assistant-plugin-install-${folder.path}`,
                                        disabled: actionBusy || busyKey !== null || !onRequestPluginFolderAgentAction,
                                        onClick: ()=>void runAction(folder, "install"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: actionBusy && busyKey === `install:${folder.path}` ? "spinner" : "plus",
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1755,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: actionBusy && busyKey === `install:${folder.path}` ? "Sending..." : "Add to My plugins"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1759,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1748,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugin-action-button",
                                        "data-testid": `assistant-plugin-publish-${folder.path}`,
                                        disabled: actionBusy || busyKey !== null || !onRequestPluginFolderAgentAction,
                                        onClick: ()=>void runAction(folder, "publish"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: actionBusy && busyKey === `publish:${folder.path}` ? "spinner" : "github",
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1770,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: actionBusy && busyKey === `publish:${folder.path}` ? "Sending..." : "Publish repo"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1774,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1763,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugin-action-button",
                                        "data-testid": `assistant-plugin-contribute-${folder.path}`,
                                        disabled: actionBusy || busyKey !== null || !onRequestPluginFolderAgentAction,
                                        onClick: ()=>void runAction(folder, "contribute"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: actionBusy && busyKey === `contribute:${folder.path}` ? "spinner" : "share",
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1785,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: actionBusy && busyKey === `contribute:${folder.path}` ? "Sending..." : "Open Design PR"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1789,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1778,
                                        columnNumber: 17
                                    }, this),
                                    onRequestOpenFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugin-action-button",
                                        "data-testid": `assistant-plugin-open-manifest-${folder.path}`,
                                        onClick: ()=>onRequestOpenFile(folder.manifestPath),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "file-code",
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1802,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Open manifest"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                                lineNumber: 1803,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                        lineNumber: 1796,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1747,
                                columnNumber: 15
                            }, this),
                            noticeByFolder[folder.path] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugin-action-card__notice",
                                role: "status",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionNoticeView, {
                                    notice: noticeByFolder[folder.path] ?? null
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                    lineNumber: 1809,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 1808,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, folder.path, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 1733,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 1729,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1717,
        columnNumber: 5
    }, this);
}
_c10 = PluginActionPanel;
function kindIconName(kind) {
    if (kind === "html") return "file-code";
    if (kind === "image") return "image";
    if (kind === "sketch") return "pencil";
    if (kind === "code") return "file-code";
    return "file";
}
function humanBytes(n) {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
function pluginFoldersTouchedThisTurn(projectFiles, fileOps, produced, messageContent) {
    const candidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$pluginFolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPluginFolderCandidates"])(projectFiles);
    if (candidates.length === 0) return [];
    const directTouchedPaths = [
        ...fileOps.flatMap((entry)=>[
                entry.path,
                entry.fullPath
            ]),
        ...produced.flatMap((file)=>[
                file.name,
                file.path
            ])
    ].filter((path)=>typeof path === "string" && path.length > 0);
    const touchedPaths = [
        ...directTouchedPaths,
        messageContent
    ].filter((path)=>typeof path === "string" && path.length > 0);
    const explicitFolders = candidates.filter((folder)=>touchedPaths.some((path)=>pathTouchesFolder(path, folder.path)));
    if (explicitFolders.length > 0) return explicitFolders;
    if (candidates.length !== 1) return [];
    const candidate = candidates[0];
    if (!candidate) return [];
    if (directTouchedPaths.some((path)=>pathMatchesFolderFileBasename(path, candidate, projectFiles))) {
        return [
            candidate
        ];
    }
    return hasPluginFinalActionHint(messageContent) ? [
        candidate
    ] : [];
}
function pathTouchesFolder(path, folderPath) {
    const normalized = path.replace(/\\/g, "/").replace(/^\.\//, "");
    if (normalized === folderPath || normalized.startsWith(`${folderPath}/`)) {
        return true;
    }
    return normalized.includes(`/${folderPath}/`) || normalized.includes(`${folderPath}/`);
}
function pathMatchesFolderFileBasename(path, folder, projectFiles) {
    const basename = path.replace(/\\/g, "/").split("/").filter(Boolean).pop();
    if (!basename) return false;
    return projectFiles.some((file)=>file.name.startsWith(`${folder.path}/`) && file.name.endsWith(`/${basename}`));
}
function hasPluginFinalActionHint(content) {
    return /\b(Add to My plugins|Open Design PR|Publish repo|plugin publish|ready to publish|ready to add)\b/i.test(content);
}
function ProseBlock({ text, hideRecoveredHtmlFallback, assistantMessageId, isLastAssistant, streaming, showStreamCursor, nextUserContent, suppressDirectionForms, onOpenQuestions, projectId, conversationId, runId, projectFileNames, onRequestOpenFile }) {
    _s8();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const cleaned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProseBlock.useMemo[cleaned]": ()=>{
            const stripped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$strip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripArtifact"])(text);
            return hideRecoveredHtmlFallback ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$strip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripRecoveredHtmlFallbackForDisplay"])(stripped, text) : stripped;
        }
    }["ProseBlock.useMemo[cleaned]"], [
        hideRecoveredHtmlFallback,
        text
    ]);
    // While the latest turn is still streaming a not-yet-closed question-form,
    // drop the partial `<question-form>{…` markup from the prose so the chat
    // doesn't flash raw JSON; we surface a banner for it instead. The actual
    // form streams into the right-hand Questions tab. A not-yet-closed
    // `<od-card>{…` block is stripped the same way so its raw JSON doesn't flash
    // before the close tag arrives (the card renders inline once complete).
    const { text: visibleText, hadOpenForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProseBlock.useMemo": ()=>{
            if (!(isLastAssistant && streaming)) return {
                text: cleaned,
                hadOpenForm: false
            };
            const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTrailingOpenQuestionForm"])(cleaned);
            const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripTrailingOpenOdCard"])(form.text);
            return {
                text: card.text,
                hadOpenForm: form.hadOpenForm
            };
        }
    }["ProseBlock.useMemo"], [
        cleaned,
        isLastAssistant,
        streaming
    ]);
    // While an `<artifact type="text/html">` is still streaming (no closing tag
    // yet), surface its body in a live code panel instead of leaking the raw
    // tag + half-written HTML as Markdown text. Once it closes, stripArtifact
    // removes it and the file/preview panel takes over — so this only fires
    // mid-stream.
    const { head, live } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProseBlock.useMemo": ()=>streaming ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$strip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitStreamingArtifact"])(visibleText) : {
                head: visibleText,
                live: null
            }
    }["ProseBlock.useMemo"], [
        visibleText,
        streaming
    ]);
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProseBlock.useMemo[segments]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitOnQuestionForms"])(head)
    }["ProseBlock.useMemo[segments]"], [
        head
    ]);
    // Route relative file-link clicks (`template.html`, `subdir/hero.html`)
    // through the workspace tab opener. Without this, Electron's window-open
    // handler creates a new app window whose relative href can't resolve, and
    // the user lands on the home screen — the file is never previewed.
    const onLinkClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProseBlock.useMemo[onLinkClick]": ()=>{
            if (!onRequestOpenFile) return undefined;
            return ({
                "ProseBlock.useMemo[onLinkClick]": (href, event)=>{
                    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$in$2d$project$2d$link$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asInProjectFilePath"])(href, projectFileNames, projectId);
                    if (!path) return;
                    event.preventDefault();
                    onRequestOpenFile(path);
                }
            })["ProseBlock.useMemo[onLinkClick]"];
        }
    }["ProseBlock.useMemo[onLinkClick]"], [
        onRequestOpenFile,
        projectFileNames,
        projectId
    ]);
    const renderable = segments.flatMap((seg, idx)=>{
        if (seg.kind === "form") {
            if (suppressDirectionForms && isDirectionForm(seg.form)) {
                return [
                    {
                        key: `f-${idx}`,
                        kind: "suppressed-direction"
                    }
                ];
            }
            return [
                {
                    key: `f-${idx}`,
                    kind: "form",
                    form: seg.form
                }
            ];
        }
        if (seg.text.trim().length === 0) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitOnOdCards"])(seg.text).flatMap((cardSeg, c)=>{
            if (cardSeg.kind === "card") {
                return [
                    {
                        key: `c-${idx}-${c}`,
                        kind: "od-card",
                        card: cardSeg.card
                    }
                ];
            }
            if (cardSeg.text.trim().length === 0) return [];
            return splitSystemReminders(cardSeg.text).map((s, j)=>({
                    key: `t-${idx}-${c}-${j}`,
                    kind: s.kind,
                    text: s.text
                }));
        });
    });
    if (renderable.length === 0 && !live) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prose-block",
        "data-stream-cursor": showStreamCursor && !live ? "true" : undefined,
        children: [
            renderable.map((seg)=>{
                if (seg.kind === "reminder") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SystemReminderBlock, {
                        text: seg.text,
                        variant: "injection"
                    }, seg.key, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2001,
                        columnNumber: 18
                    }, this);
                }
                if (seg.kind === "text") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(seg.text, {
                            onLinkClick
                        })
                    }, seg.key, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2005,
                        columnNumber: 13
                    }, this);
                }
                if (seg.kind === "od-card") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$OdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OdCardView"], {
                        card: seg.card,
                        instanceScope: [
                            projectId ?? "no-project",
                            conversationId ?? "no-conversation",
                            runId ?? "no-run",
                            assistantMessageId,
                            seg.key
                        ].join(":")
                    }, seg.key, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2012,
                        columnNumber: 13
                    }, this);
                }
                if (seg.kind === "suppressed-direction") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "status-pill",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "status-label",
                            children: "Active design system selected. Visual direction is already locked."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2028,
                            columnNumber: 15
                        }, this)
                    }, seg.key, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2027,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormBlock, {
                    form: seg.form,
                    assistantMessageId: assistantMessageId,
                    nextUserContent: nextUserContent,
                    onOpenQuestions: onOpenQuestions
                }, seg.key, false, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 2035,
                    columnNumber: 11
                }, this);
            }),
            live ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StreamingCodeCard, {
                titleLabel: t("tool.write"),
                metaLabel: live.title || live.identifier || undefined,
                code: live.content
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2045,
                columnNumber: 9
            }, this) : null,
            hadOpenForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionsBanner, {
                onOpen: onOpenQuestions
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2051,
                columnNumber: 22
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 1998,
        columnNumber: 5
    }, this);
}
_s8(ProseBlock, "np8wDdn44CtsxyNqtIuJ/N4SpwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c11 = ProseBlock;
// Chat-side banner that points to the right-hand Questions tab where discovery
// forms live. The chat column always stays compact: no inline form preview,
// answered or not.
function QuestionsBanner({ onOpen, answered = false }) {
    _s9();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    // Once the form has been answered there is nothing left to open, so the
    // banner becomes a non-interactive "done" marker: no chevron affordance, no
    // click target, muted styling.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `questions-banner${answered ? " questions-banner-answered" : ""}`,
        "data-testid": "questions-banner",
        "data-answered": answered ? "true" : undefined,
        disabled: answered,
        onClick: answered ? undefined : ()=>onOpen?.(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "questions-banner-icon",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: answered ? "check" : "help-circle",
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 2080,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "questions-banner-label",
                children: answered ? t("questions.bannerAnswered") : t("questions.banner")
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2082,
                columnNumber: 7
            }, this),
            answered ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "questions-banner-cta",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "chevron-right",
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 2087,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2086,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2071,
        columnNumber: 5
    }, this);
}
_s9(QuestionsBanner, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c12 = QuestionsBanner;
function isDirectionForm(form) {
    if (form.id.toLowerCase() === "direction") return true;
    if (form.title.toLowerCase().includes("visual direction")) return true;
    return form.questions.some((q)=>q.type === "direction-cards");
}
function FormBlock({ form, assistantMessageId, nextUserContent, onOpenQuestions }) {
    _s10();
    // A "[form answers …]" reply parked right after this message means the form
    // was already submitted; the banner then renders as an answered/done state.
    const submittedFromHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormBlock.useMemo[submittedFromHistory]": ()=>nextUserContent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSubmittedAnswers"])(form, nextUserContent) : null
    }["FormBlock.useMemo[submittedFromHistory]"], [
        form,
        nextUserContent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionsBanner, {
        answered: submittedFromHistory != null,
        onOpen: ()=>{
            onOpenQuestions?.({
                form,
                messageId: assistantMessageId,
                submittedAnswers: submittedFromHistory ?? undefined
            });
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2118,
        columnNumber: 5
    }, this);
}
_s10(FormBlock, "QRilJllPMec28I5+0yXuME7Vi2E=");
_c13 = FormBlock;
function SystemReminderBlock({ text, variant = "trusted" }) {
    _s11();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const trimmed = text.trim();
    const preview = trimmed.split("\n")[0]?.slice(0, 120) ?? "";
    const isInjection = variant === "injection";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `system-reminder-block${isInjection ? " injection" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "system-reminder-toggle",
                onClick: ()=>setOpen((o)=>!o),
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "system-reminder-icon",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: isInjection ? "alert-triangle" : "settings",
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "system-reminder-label",
                        children: isInjection ? t("assistant.possiblePromptInjection") : t("assistant.systemReminder")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "system-reminder-preview",
                        children: [
                            open ? "" : preview,
                            !open && trimmed.length > preview.length ? "…" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "system-reminder-chev",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: open ? "chevron-down" : "chevron-right",
                            size: 11
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2147,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "system-reminder-body",
                children: trimmed
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2168,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2146,
        columnNumber: 5
    }, this);
}
_s11(SystemReminderBlock, "On179WySoO+ruhU3bhtWsVoqRMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c14 = SystemReminderBlock;
function ThinkingBlock({ text, streaming }) {
    _s12();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isThinking = streaming === true;
    // Thinking events carry no server timestamps, so the "用时 X 秒" duration is
    // measured client-side: stamp the start when streaming begins and freeze the
    // elapsed once it ends. Blocks restored from history never stream, so they
    // fall back to the plain "已深度思考" label with no seconds.
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [elapsedSec, setElapsedSec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThinkingBlock.useEffect": ()=>{
            if (isThinking) {
                if (startRef.current === null) startRef.current = Date.now();
                setElapsedSec(null);
            } else if (startRef.current !== null) {
                setElapsedSec(Math.max(1, Math.round((Date.now() - startRef.current) / 1000)));
                startRef.current = null;
            }
        }
    }["ThinkingBlock.useEffect"], [
        isThinking
    ]);
    const label = isThinking ? t("assistant.thinking") : elapsedSec != null ? t("assistant.thoughtFor", {
        s: elapsedSec
    }) : t("assistant.thought");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "thinking-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "thinking-toggle",
                onClick: ()=>setOpen((o)=>!o),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `thinking-status${isThinking ? ' op-status-running' : open ? ' thinking-status-active' : ''}`,
                        "aria-hidden": true,
                        children: isThinking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "spinner",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2202,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "sparkles",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2203,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `thinking-label${isThinking ? ' shimmer-text' : ''}`,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "thinking-chev",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: open ? "chevron-down" : "chevron-right",
                            size: 11
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-collapsible${open ? ' open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-collapsible-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "thinking-body",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(text)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2215,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 2214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2198,
        columnNumber: 5
    }, this);
}
_s12(ThinkingBlock, "2iFxENoA9bIyGNHFYpCLG7d7KV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c15 = ThinkingBlock;
function StatusPill({ label, detail }) {
    const variant = label === "error" ? "error" : label === "warning" ? "warning" : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `status-pill${variant ? ` is-${variant}` : ""}`,
        "data-status": label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "status-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2236,
                columnNumber: 7
            }, this),
            detail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "status-detail",
                children: renderStatusDetail(detail)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2237,
                columnNumber: 17
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2232,
        columnNumber: 5
    }, this);
}
_c16 = StatusPill;
function renderStatusDetail(detail) {
    const segments = [];
    const urlRe = /(https?:\/\/[^\s)<>"}\]]+)/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while(match = urlRe.exec(detail)){
        if (match.index > lastIndex) {
            segments.push(detail.slice(lastIndex, match.index));
        }
        const [href, suffix] = splitStatusDetailUrlPunctuation(match[1]);
        segments.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: "md-link md-link-bare",
            href: href,
            target: "_blank",
            rel: "noreferrer noopener",
            children: href
        }, `url-${key++}`, false, {
            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
            lineNumber: 2255,
            columnNumber: 7
        }, this));
        if (suffix) segments.push(suffix);
        lastIndex = urlRe.lastIndex;
    }
    if (lastIndex < detail.length) {
        segments.push(detail.slice(lastIndex));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: segments
    }, void 0, false);
}
function splitStatusDetailUrlPunctuation(url) {
    const match = /([.,!?;:，。！？；：、'"」』】》〉）}\]]+)$/.exec(url);
    if (!match?.[1]) return [
        url,
        ''
    ];
    const trimmed = url.slice(0, -match[1].length);
    return trimmed ? [
        trimmed,
        match[1]
    ] : [
        url,
        ''
    ];
}
// Snapshot tools (the call IS the state, later calls supersede earlier
// ones) and tools the model retries verbatim under headless-mode errors
// are noisy when stacked. Collapse identical-input neighbors to the most
// recent. Currently:
//   - TodoWrite / todowrite: the input replaces the previous list, so the
//     latest call is the only one worth showing; older identical or
//     superseded snapshots are pure duplication.
// Other tool names pass through untouched.
const SNAPSHOT_TOOL_NAMES = new Set([
    "TodoWrite",
    "todowrite",
    "todo_write",
    "update_plan"
]);
function dedupeSnapshotToolRetries(items) {
    if (items.length <= 1) return items;
    const allSnapshot = items.every((it)=>SNAPSHOT_TOOL_NAMES.has(it.use.name));
    if (!allSnapshot) return items;
    // For TodoWrite specifically, the LATEST call always wins regardless of
    // input — it is a state replace, not an append. The cheap unifying
    // behavior: keep the last item per `(name, JSON.stringify(input))` key;
    // for TodoWrite a single name+input is the snapshot identity.
    const lastByKey = new Map();
    for (const it of items){
        let key;
        try {
            key = `${it.use.name}:${JSON.stringify(it.use.input)}`;
        } catch  {
            key = it.use.id;
        }
        lastByKey.set(key, it);
    }
    // For TodoWrite groups, additionally collapse to just the most recent
    // item overall (a later call supersedes an earlier one even when inputs
    // differ). We detect by checking whether all items share a TodoWrite
    // name after the input-key dedupe above.
    const collapsed = Array.from(lastByKey.values());
    const allTodoWrite = collapsed.every((it)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTodoWriteToolName"])(it.use.name));
    if (allTodoWrite && collapsed.length > 1) {
        return [
            collapsed[collapsed.length - 1]
        ];
    }
    return collapsed;
}
// Tools whose streaming JSON input is worth previewing as live code. Other
// tools (Bash, Grep, TodoWrite, …) stream JSON too but a code panel for them
// would be noise.
const LIVE_CODE_TOOL_NAMES = new Set([
    "Write",
    "write",
    "Edit",
    "edit",
    "MultiEdit",
    "multiedit",
    "NotebookEdit"
]);
function isLiveCodeToolName(name) {
    return LIVE_CODE_TOOL_NAMES.has(name);
}
// Pull the (possibly still-streaming) value of a top-level JSON string field
// out of a raw, not-yet-closed JSON fragment. Returns the decoded text up to
// wherever the stream currently ends — an unterminated escape or \u sequence
// at the tail is dropped rather than throwing. Returns null when the field /
// its opening quote hasn't arrived yet. Good enough for a live preview; the
// authoritative value comes from the parsed `tool_use.input` once complete.
function extractStreamingJsonString(raw, field) {
    const marker = `"${field}"`;
    const mi = raw.indexOf(marker);
    if (mi === -1) return null;
    let i = mi + marker.length;
    // Advance to the value's opening quote, past the `:` and any whitespace.
    while(i < raw.length && raw[i] !== '"')i++;
    if (i >= raw.length) return null;
    i++; // step past the opening quote
    let out = "";
    while(i < raw.length){
        const ch = raw[i];
        if (ch === "\\") {
            const next = raw[i + 1];
            if (next === undefined) break; // incomplete escape at the streaming tail
            switch(next){
                case "n":
                    out += "\n";
                    break;
                case "t":
                    out += "\t";
                    break;
                case "r":
                    out += "\r";
                    break;
                case '"':
                    out += '"';
                    break;
                case "\\":
                    out += "\\";
                    break;
                case "/":
                    out += "/";
                    break;
                case "b":
                    out += "\b";
                    break;
                case "f":
                    out += "\f";
                    break;
                case "u":
                    {
                        const hex = raw.slice(i + 2, i + 6);
                        if (hex.length < 4) return out; // incomplete \u escape at the tail
                        out += String.fromCharCode(parseInt(hex, 16));
                        i += 6;
                        continue;
                    }
                default:
                    out += next;
            }
            i += 2;
            continue;
        }
        if (ch === '"') break; // closing quote → value complete
        out += ch;
        i++;
    }
    return out;
}
// Presentational in-flight code panel: a boxed header (spinner + shimmer
// title + optional meta) over a monospace body with a typing caret. Plain
// monospace on purpose — shiki highlighting is async and would thrash on
// every streamed delta; the finished, highlighted view is taken over by the
// normal card once the write/artifact completes. Shared by the tool-call
// path (LiveCodeBox) and the streaming-artifact path (ProseBlock).
function StreamingCodeCard({ titleLabel, metaLabel, code }) {
    _s13();
    const preRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep the latest streamed line in view as code grows.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StreamingCodeCard.useEffect": ()=>{
            const el = preRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        }
    }["StreamingCodeCard.useEffect"], [
        code
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "op-card op-file live-code-box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "op-card-head live-code-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "action-card-status op-status-running",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "spinner",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2424,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "op-title shimmer-text",
                        children: titleLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2426,
                        columnNumber: 9
                    }, this),
                    metaLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "op-meta",
                        children: metaLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2427,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2422,
                columnNumber: 7
            }, this),
            code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "live-code-pre",
                ref: preRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: [
                        code,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "live-code-caret",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2433,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 2431,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2430,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2421,
        columnNumber: 5
    }, this);
}
_s13(StreamingCodeCard, "zNxQZai100jbn8J50CJoQHo7HY8=");
_c17 = StreamingCodeCard;
// In-flight code panel rendered from a tool call whose JSON input is still
// streaming. The finished view is taken over by the normal tool card once
// `tool_use` lands.
function LiveCodeBox({ name, raw }) {
    _s14();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const file = extractStreamingJsonString(raw, "file_path") ?? extractStreamingJsonString(raw, "filePath") ?? extractStreamingJsonString(raw, "path") ?? "";
    const baseName = file ? file.split("/").pop() ?? file : "";
    const code = extractStreamingJsonString(raw, "content") ?? extractStreamingJsonString(raw, "new_string") ?? "";
    const isEdit = /edit/i.test(name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StreamingCodeCard, {
        titleLabel: isEdit ? t("tool.edit") : t("tool.write"),
        metaLabel: baseName || undefined,
        code: code
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2458,
        columnNumber: 5
    }, this);
}
_s14(LiveCodeBox, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c18 = LiveCodeBox;
function ToolGroupCard({ items, runStreaming, runSucceeded, projectFileNames, onRequestOpenFile }) {
    _s15();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Snapshot-style tools (TodoWrite and friends) replace their whole state on
    // each call, so a turn that wrote the list several times would otherwise
    // render a stack of superseded cards. Collapse those retries to the latest
    // snapshot; every other tool passes through untouched.
    items = dedupeSnapshotToolRetries(items);
    // A run of one tool collapses to that tool's card directly so we don't
    // wrap a single child in a redundant disclosure.
    if (items.length === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ToolCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolCard"], {
            use: items[0].use,
            result: items[0].result,
            runStreaming: runStreaming,
            runSucceeded: runSucceeded,
            projectFileNames: projectFileNames,
            onRequestOpenFile: onRequestOpenFile
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
            lineNumber: 2492,
            columnNumber: 7
        }, this);
    }
    const summary = summarizeGroup(items, t, runStreaming, runSucceeded);
    const running = runStreaming && items.some((it)=>!it.result);
    const hasError = items.some((it)=>it.result?.isError);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "action-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `action-card-toggle ${running ? "running" : ""}`,
                onClick: ()=>setOpen((o)=>!o),
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `action-card-status ${running ? 'op-status-running' : hasError ? 'op-status-error' : 'op-status-ok'}`,
                        "aria-hidden": true,
                        children: running ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "spinner",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2516,
                            columnNumber: 15
                        }, this) : hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2518,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "check",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2519,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `summary${running ? ' shimmer-text' : ''}`,
                        children: summary.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chev",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: open ? "chevron-down" : "chevron-right",
                            size: 11
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                            lineNumber: 2526,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-collapsible${open ? ' open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-collapsible-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "action-card-body",
                        children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ToolCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolCard"], {
                                use: it.use,
                                result: it.result,
                                runStreaming: runStreaming,
                                runSucceeded: runSucceeded,
                                projectFileNames: projectFileNames,
                                onRequestOpenFile: onRequestOpenFile
                            }, i, false, {
                                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                                lineNumber: 2533,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                        lineNumber: 2531,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                    lineNumber: 2530,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
                lineNumber: 2529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/AssistantMessage.tsx",
        lineNumber: 2507,
        columnNumber: 5
    }, this);
}
_s15(ToolGroupCard, "On179WySoO+ruhU3bhtWsVoqRMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c19 = ToolGroupCard;
function summarizeGroup(items, t, runStreaming, runSucceeded) {
    // All items share a tool family because the grouper only merges by name.
    const name = items[0]?.use.name ?? "";
    const family = toolFamily(name);
    const icon = familyIcon(family);
    const verbs = items.map((it)=>verbForState(it, t, runStreaming, runSucceeded));
    // Roll the verbs into a comma-list with deduplicated last-state. So three
    // edits whose results are all 'Done' render as "Editing ×3, Done"; mixed
    // states render as "Editing, Reading, Done".
    const head = countLabel(family, items.length, t);
    const tail = lastStateLabel(verbs, t);
    return {
        label: tail ? `${head}, ${tail}` : head,
        icon
    };
}
function toolFamily(name) {
    if (name === "Edit" || name === "str_replace_edit") return "edit";
    if (name === "Write" || name === "write" || name === "create_file") return "write";
    if (name === "Read" || name === "read_file") return "read";
    if (name === "Glob" || name === "list_files") return "glob";
    if (name === "Grep") return "grep";
    if (name === "Bash") return "bash";
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTodoWriteToolName"])(name)) return "todo";
    if (name === "WebFetch" || name === "web_fetch") return "fetch";
    if (name === "WebSearch" || name === "web_search") return "search";
    return name.toLowerCase();
}
function familyIcon(family) {
    if (family === "edit") return "✎";
    if (family === "write") return "+";
    if (family === "read") return "↗";
    if (family === "glob" || family === "grep" || family === "search") return "⌕";
    if (family === "bash") return "$";
    if (family === "todo") return "☐";
    if (family === "fetch") return "↬";
    return "·";
}
function countLabel(family, n, t) {
    const verb = family === "edit" ? t("assistant.verbEditing") : family === "write" ? t("assistant.verbWriting") : family === "read" ? t("assistant.verbReading") : family === "glob" || family === "grep" || family === "search" ? t("assistant.verbSearching") : family === "bash" ? t("assistant.verbRunning") : family === "todo" ? t("assistant.verbTodos") : family === "fetch" ? t("assistant.verbFetching") : t("assistant.verbCalling");
    return n > 1 ? `${verb} ×${n}` : verb;
}
function verbForState(it, t, runStreaming = false, runSucceeded = false) {
    if (!it.result && runStreaming) return t("assistant.verbRunning");
    if (!it.result && !runSucceeded) return t("tool.error");
    if (it.result?.isError) return t("tool.error");
    return t("tool.done");
}
function lastStateLabel(verbs, t) {
    const set = new Set(verbs);
    if (set.size === 1) return verbs[verbs.length - 1] ?? "";
    // Mixed states: surface error first, else running, else any.
    if (set.has(t("tool.error"))) return t("tool.error");
    if (set.has(t("assistant.verbRunning"))) return t("assistant.verbRunning");
    return verbs[verbs.length - 1] ?? "";
}
/**
 * Walk the event stream and build the rendering layout list. We additionally
 * collapse runs of consecutive tool_uses sharing the same tool family into a
 * single tool-group block so the chat surface stays compact during chains
 * of edits / reads.
 */ function placeConversationTodoCard(blocks, options) {
    let placed = false;
    return blocks.flatMap((block)=>{
        if (block.kind !== "tool-group") return [
            block
        ];
        if (!block.items.every((it)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTodoWriteToolName"])(it.use.name))) return [
            block
        ];
        if (!options.show || placed) return [];
        placed = true;
        const item = block.items[0];
        if (!item || options.input == null) return [
            block
        ];
        return [
            {
                ...block,
                items: [
                    {
                        ...item,
                        use: {
                            ...item.use,
                            input: options.input
                        }
                    }
                ]
            }
        ];
    });
}
function stripEmptyThinkingBlocks(blocks) {
    return blocks.filter((block)=>{
        if (block.kind !== "thinking") return true;
        return block.text.trim().length > 0;
    });
}
// The prompt asks for one discovery form and then a stop, but LLMs can still
// emit a tailored discovery form followed by the default Quick brief in the
// same assistant turn. Keep the first form for each id and drop later repeats.
function suppressDuplicateQuestionForms(blocks) {
    const seenFormIds = new Set();
    return blocks.map((block)=>{
        if (block.kind !== "text") return block;
        const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$question$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitOnQuestionForms"])(block.text);
        let changed = false;
        const nextText = segments.map((segment)=>{
            if (segment.kind === "text") return segment.text;
            const formKey = segment.form.id.trim().toLowerCase();
            if (seenFormIds.has(formKey)) {
                changed = true;
                return "";
            }
            seenFormIds.add(formKey);
            return segment.raw;
        }).join("");
        return changed ? {
            ...block,
            text: nextText
        } : block;
    });
}
function buildBlocks(events) {
    const out = [];
    const resultByToolId = new Map();
    for (const ev of events){
        if (ev.kind === "tool_result") resultByToolId.set(ev.toolUseId, ev);
    }
    for (const ev of events){
        if (ev.kind === "text") {
            const last = out[out.length - 1];
            if (last && last.kind === "text") last.text += ev.text;
            else out.push({
                kind: "text",
                text: ev.text
            });
            continue;
        }
        if (ev.kind === "thinking") {
            const last = out[out.length - 1];
            if (last && last.kind === "thinking") last.text += ev.text;
            else out.push({
                kind: "thinking",
                text: ev.text
            });
            continue;
        }
        if (ev.kind === "tool_use") {
            const result = resultByToolId.get(ev.id);
            const item = result ? {
                use: ev,
                result
            } : {
                use: ev
            };
            const last = out[out.length - 1];
            const fam = toolFamily(ev.name);
            if (last && last.kind === "tool-group" && toolFamily(last.items[last.items.length - 1].use.name) === fam) {
                last.items.push(item);
            } else {
                out.push({
                    kind: "tool-group",
                    items: [
                        item
                    ]
                });
            }
            continue;
        }
        if (ev.kind === "tool_result") continue;
        if (ev.kind === "plugin_candidate") {
            out.push({
                kind: "plugin-candidate",
                candidateId: ev.candidateId,
                title: ev.title,
                description: ev.description,
                confidence: ev.confidence,
                draftPath: ev.draftPath
            });
            continue;
        }
        if (ev.kind === "status") {
            if (ev.label === "streaming" || ev.label === "starting" || ev.label === "running" || ev.label === "requesting" || ev.label === "thinking" || ev.label === "empty_response") continue;
            const last = out[out.length - 1];
            if (last && last.kind === "status" && last.label === ev.label) {
                // Update detail to the latest value rather than skip. When an agent
                // emits multiple status events with the same label (notably
                // `label: 'model'` — fired once after `session/new` with the agent's
                // initial default, then again after the explicit model-selection
                // call completes), the badge UI must reflect the most recent detail,
                // not the first one. Without this update the post-selection model
                // (e.g. `claude-opus-4-7-high`) is silently replaced in the badge
                // by the stale initial default (`swe-1-6-fast`).
                last.detail = ev.detail;
                continue;
            }
            out.push({
                kind: "status",
                label: ev.label,
                detail: ev.detail
            });
            continue;
        }
    }
    return out;
}
function splitSystemReminders(input) {
    const re = /<system-reminder>([\s\S]*?)<\/system-reminder>/g;
    const out = [];
    let lastIndex = 0;
    let m;
    while(m = re.exec(input)){
        if (m.index > lastIndex) {
            out.push({
                kind: "text",
                text: input.slice(lastIndex, m.index)
            });
        }
        out.push({
            kind: "reminder",
            text: m[1] ?? ""
        });
        lastIndex = re.lastIndex;
    }
    if (lastIndex < input.length) {
        out.push({
            kind: "text",
            text: input.slice(lastIndex)
        });
    }
    // Drop any orphan tags that survived (open without close, or vice versa)
    // and discard text segments that became empty after stripping.
    return out.map((seg)=>seg.kind === "text" ? {
            ...seg,
            text: seg.text.replace(/<\/?system-reminder>/g, "")
        } : seg).filter((seg)=>seg.kind === "reminder" || seg.text.trim().length > 0);
}
function useLiveElapsed(streaming, startedAt, endedAt, fixedDurationMs) {
    _s16();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLiveElapsed.useState": ()=>Date.now()
    }["useLiveElapsed.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveElapsed.useEffect": ()=>{
            if (!streaming) return;
            const id = window.setInterval({
                "useLiveElapsed.useEffect.id": ()=>setNow(Date.now())
            }["useLiveElapsed.useEffect.id"], 200);
            return ({
                "useLiveElapsed.useEffect": ()=>window.clearInterval(id)
            })["useLiveElapsed.useEffect"];
        }
    }["useLiveElapsed.useEffect"], [
        streaming
    ]);
    if (!streaming && endedAt === undefined && typeof fixedDurationMs === "number") {
        return formatElapsedMs(fixedDurationMs);
    }
    if (!startedAt || !streaming && endedAt === undefined) return "";
    const end = streaming ? now : endedAt;
    const ms = Math.max(0, (end ?? now) - startedAt);
    return formatElapsedMs(ms);
}
_s16(useLiveElapsed, "2IU6yg86GfAIPaiHfn+vZjj7R4s=");
function formatElapsedMs(ms) {
    const s = ms / 1000;
    if (s < 60) return `${s.toFixed(s < 10 ? 1 : 0)}s`;
    const m = Math.floor(s / 60);
    const rem = Math.floor(s - m * 60);
    return `${m}m ${rem.toString().padStart(2, "0")}s`;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "ActionNoticeView");
__turbopack_context__.k.register(_c1, "SkillPluginCandidateCard");
__turbopack_context__.k.register(_c2, "AssistantMessage");
__turbopack_context__.k.register(_c3, "AssistantMessageImpl");
__turbopack_context__.k.register(_c4, "AssistantFooter");
__turbopack_context__.k.register(_c5, "AssistantForkButton");
__turbopack_context__.k.register(_c6, "AssistantMarkdownCopyButton");
__turbopack_context__.k.register(_c7, "AssistantFeedback");
__turbopack_context__.k.register(_c8, "UnfinishedTodosPanel");
__turbopack_context__.k.register(_c9, "ProducedFiles");
__turbopack_context__.k.register(_c10, "PluginActionPanel");
__turbopack_context__.k.register(_c11, "ProseBlock");
__turbopack_context__.k.register(_c12, "QuestionsBanner");
__turbopack_context__.k.register(_c13, "FormBlock");
__turbopack_context__.k.register(_c14, "SystemReminderBlock");
__turbopack_context__.k.register(_c15, "ThinkingBlock");
__turbopack_context__.k.register(_c16, "StatusPill");
__turbopack_context__.k.register(_c17, "StreamingCodeCard");
__turbopack_context__.k.register(_c18, "LiveCodeBox");
__turbopack_context__.k.register(_c19, "ToolGroupCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_AssistantMessage_tsx_129cbva._.js.map