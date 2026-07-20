module.exports = [
"[project]/packages/host/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPEN_DESIGN_HOST_CLIENT_TYPES",
    ()=>OPEN_DESIGN_HOST_CLIENT_TYPES,
    "OPEN_DESIGN_HOST_GLOBAL",
    ()=>OPEN_DESIGN_HOST_GLOBAL,
    "OPEN_DESIGN_HOST_UPDATER_ACTIONS",
    ()=>OPEN_DESIGN_HOST_UPDATER_ACTIONS,
    "OPEN_DESIGN_HOST_UPDATER_STATES",
    ()=>OPEN_DESIGN_HOST_UPDATER_STATES,
    "OPEN_DESIGN_HOST_VERSION",
    ()=>OPEN_DESIGN_HOST_VERSION,
    "captureHostPage",
    ()=>captureHostPage,
    "checkHostUpdater",
    ()=>checkHostUpdater,
    "clearHostBrowserData",
    ()=>clearHostBrowserData,
    "detectOpenDesignHostClientType",
    ()=>detectOpenDesignHostClientType,
    "downloadHostUpdater",
    ()=>downloadHostUpdater,
    "getHostUpdaterStatus",
    ()=>getHostUpdaterStatus,
    "getOpenDesignHost",
    ()=>getOpenDesignHost,
    "installHostUpdater",
    ()=>installHostUpdater,
    "isOpenDesignHostAvailable",
    ()=>isOpenDesignHostAvailable,
    "isOpenDesignHostBridge",
    ()=>isOpenDesignHostBridge,
    "normalizeOpenDesignHostPickWorkingDirResult",
    ()=>normalizeOpenDesignHostPickWorkingDirResult,
    "normalizeOpenDesignHostProjectImportResult",
    ()=>normalizeOpenDesignHostProjectImportResult,
    "normalizeOpenDesignHostProjectReplaceWorkingDirResult",
    ()=>normalizeOpenDesignHostProjectReplaceWorkingDirResult,
    "openHostExternalUrl",
    ()=>openHostExternalUrl,
    "openHostProjectPath",
    ()=>openHostProjectPath,
    "pickAndImportHostProject",
    ()=>pickAndImportHostProject,
    "pickAndReplaceHostProjectWorkingDir",
    ()=>pickAndReplaceHostProjectWorkingDir,
    "pickHostWorkingDir",
    ()=>pickHostWorkingDir,
    "printHostPdf",
    ()=>printHostPdf,
    "quitHostAfterUpdaterInstallerOpen",
    ()=>quitHostAfterUpdaterInstallerOpen,
    "setHostPetVisible",
    ()=>setHostPetVisible,
    "subscribeHostUpdater",
    ()=>subscribeHostUpdater
]);
// src/index.ts
var OPEN_DESIGN_HOST_GLOBAL = "__od__";
var OPEN_DESIGN_HOST_VERSION = 2;
var OPEN_DESIGN_HOST_CLIENT_TYPES = Object.freeze({
    DESKTOP: "desktop"
});
var OPEN_DESIGN_HOST_UPDATER_ACTIONS = Object.freeze({
    CHECK: "check",
    DOWNLOAD: "download",
    INSTALL: "install",
    QUIT: "quit",
    STATUS: "status"
});
var OPEN_DESIGN_HOST_UPDATER_STATES = Object.freeze({
    AVAILABLE: "available",
    CHECKING: "checking",
    DOWNLOADED: "downloaded",
    DOWNLOADING: "downloading",
    ERROR: "error",
    IDLE: "idle",
    INSTALLING: "installing",
    NOT_AVAILABLE: "not-available",
    UNSUPPORTED: "unsupported"
});
function isRecord(value) {
    return typeof value === "object" && value != null && !Array.isArray(value);
}
function failure(reason, details) {
    return {
        ...details === void 0 ? {} : {
            details
        },
        ok: false,
        reason
    };
}
function hasFunction(record, key) {
    return typeof record[key] === "function";
}
function isOpenDesignHostBridge(value) {
    if (!isRecord(value)) return false;
    if (value.version !== OPEN_DESIGN_HOST_VERSION) return false;
    const client = value.client;
    if (!isRecord(client) || client.type !== OPEN_DESIGN_HOST_CLIENT_TYPES.DESKTOP) return false;
    if (client.platform != null && typeof client.platform !== "string") return false;
    if (client.osLocale != null && typeof client.osLocale !== "string") return false;
    const shell = value.shell;
    if (!isRecord(shell) || !hasFunction(shell, "openExternal") || !hasFunction(shell, "openPath")) return false;
    const browser = value.browser;
    if (!isRecord(browser) || !hasFunction(browser, "clearData")) return false;
    const capture = value.capture;
    if (!isRecord(capture) || !hasFunction(capture, "page")) return false;
    const project = value.project;
    if (!isRecord(project) || !hasFunction(project, "pickAndImport") || !hasFunction(project, "pickAndReplaceWorkingDir")) {
        return false;
    }
    const pdf = value.pdf;
    if (!isRecord(pdf) || !hasFunction(pdf, "print")) return false;
    const pet = value.pet;
    if (!isRecord(pet) || !hasFunction(pet, "setVisible")) return false;
    const updater = value.updater;
    if (!isRecord(updater) || !hasFunction(updater, "status") || !hasFunction(updater, "check") || !hasFunction(updater, "download") || !hasFunction(updater, "install") || !hasFunction(updater, "quit") || !hasFunction(updater, "subscribe")) {
        return false;
    }
    return true;
}
function normalizeOpenDesignHostProjectImportResult(input) {
    if (!isRecord(input)) {
        return failure("desktop import returned an invalid response", input);
    }
    if (input.ok !== true) {
        if (input.canceled === true) return {
            canceled: true,
            ok: false
        };
        const reason = typeof input.reason === "string" && input.reason.length > 0 ? input.reason : "unknown failure";
        return failure(reason, input.details);
    }
    const response = input.response;
    if (!isRecord(response)) {
        return failure("daemon import response was not an object", response);
    }
    const project = response.project;
    const rawProjectId = isRecord(project) ? project.id : null;
    const projectId = typeof rawProjectId === "string" ? rawProjectId : null;
    const conversationId = typeof response.conversationId === "string" ? response.conversationId : null;
    const entryFile = typeof response.entryFile === "string" || response.entryFile === null ? response.entryFile : void 0;
    if (projectId == null || conversationId == null || entryFile === void 0) {
        return failure("daemon import response did not include host project identifiers", response);
    }
    return {
        conversationId,
        entryFile,
        ok: true,
        projectId
    };
}
function normalizeOpenDesignHostProjectReplaceWorkingDirResult(input) {
    if (!isRecord(input)) {
        return failure("desktop working-dir replace returned an invalid response", input);
    }
    if (input.ok !== true) {
        if (input.canceled === true) return {
            canceled: true,
            ok: false
        };
        const reason = typeof input.reason === "string" && input.reason.length > 0 ? input.reason : "unknown failure";
        return failure(reason, input.details);
    }
    const response = input.response;
    if (!isRecord(response)) {
        return failure("daemon working-dir response was not an object", response);
    }
    const baseDir = typeof response.baseDir === "string" ? response.baseDir : null;
    const entryFile = typeof response.entryFile === "string" ? response.entryFile : null;
    if (baseDir == null) {
        return failure("daemon working-dir response did not include baseDir", response);
    }
    return {
        baseDir,
        entryFile,
        ok: true
    };
}
function normalizeOpenDesignHostPickWorkingDirResult(input) {
    if (!isRecord(input)) {
        return failure("desktop working-dir pick returned an invalid response", input);
    }
    if (input.ok !== true) {
        if (input.canceled === true) return {
            canceled: true,
            ok: false
        };
        const reason = typeof input.reason === "string" && input.reason.length > 0 ? input.reason : "unknown failure";
        return failure(reason, input.details);
    }
    const baseDir = typeof input.baseDir === "string" ? input.baseDir : null;
    const token = typeof input.token === "string" ? input.token : null;
    if (baseDir == null || token == null) {
        return failure("desktop working-dir pick did not include baseDir and token", input);
    }
    return {
        baseDir,
        ok: true,
        token
    };
}
function candidateFromScope(scope) {
    if (OPEN_DESIGN_HOST_GLOBAL in scope) return scope[OPEN_DESIGN_HOST_GLOBAL];
    const windowValue = scope.window;
    if (isRecord(windowValue) && OPEN_DESIGN_HOST_GLOBAL in windowValue) {
        return windowValue[OPEN_DESIGN_HOST_GLOBAL];
    }
    return void 0;
}
function getOpenDesignHost(scope = globalThis) {
    const candidate = candidateFromScope(scope);
    return isOpenDesignHostBridge(candidate) ? candidate : null;
}
function isOpenDesignHostAvailable(scope = globalThis) {
    return getOpenDesignHost(scope) != null;
}
function detectOpenDesignHostClientType(scope = globalThis) {
    return getOpenDesignHost(scope)?.client.type ?? "web";
}
function unavailable(reason) {
    return failure(reason);
}
async function openHostExternalUrl(url, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.shell.openExternal(url);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function openHostProjectPath(projectId, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.shell.openPath(projectId);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function clearHostBrowserData(options, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.browser.clearData(options);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function captureHostPage(options, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.capture.page(options);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function pickAndImportHostProject(init, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.project.pickAndImport(init);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function pickAndReplaceHostProjectWorkingDir(projectId, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.project.pickAndReplaceWorkingDir(projectId);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function pickHostWorkingDir(scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    if (typeof host.project.pickWorkingDir !== "function") {
        return unavailable("host build does not support pickWorkingDir");
    }
    try {
        return await host.project.pickWorkingDir();
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function printHostPdf(html, nonce, options, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.pdf.print(html, nonce, options);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
function setHostPetVisible(visible, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        host.pet.setVisible(visible);
        return {
            ok: true
        };
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function runHostUpdaterAction(action, options, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return {
            ok: true,
            status: await host.updater[action](options)
        };
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
async function getHostUpdaterStatus(options, scope = globalThis) {
    return await runHostUpdaterAction(OPEN_DESIGN_HOST_UPDATER_ACTIONS.STATUS, options, scope);
}
async function checkHostUpdater(options, scope = globalThis) {
    return await runHostUpdaterAction(OPEN_DESIGN_HOST_UPDATER_ACTIONS.CHECK, options, scope);
}
async function downloadHostUpdater(options, scope = globalThis) {
    return await runHostUpdaterAction(OPEN_DESIGN_HOST_UPDATER_ACTIONS.DOWNLOAD, options, scope);
}
async function installHostUpdater(options, scope = globalThis) {
    return await runHostUpdaterAction(OPEN_DESIGN_HOST_UPDATER_ACTIONS.INSTALL, options, scope);
}
async function quitHostAfterUpdaterInstallerOpen(options, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return unavailable("Open Design host is not available");
    try {
        return await host.updater.quit(options);
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : String(error));
    }
}
function subscribeHostUpdater(listener, scope = globalThis) {
    const host = getOpenDesignHost(scope);
    if (host == null) return ()=>void 0;
    try {
        return host.updater.subscribe(listener);
    } catch  {
        return ()=>void 0;
    }
}
;
}),
"[project]/packages/contracts/dist/analytics/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANALYTICS_HEADER_CLIENT_TYPE",
    ()=>ANALYTICS_HEADER_CLIENT_TYPE,
    "ANALYTICS_HEADER_DEVICE_ID",
    ()=>ANALYTICS_HEADER_DEVICE_ID,
    "ANALYTICS_HEADER_LOCALE",
    ()=>ANALYTICS_HEADER_LOCALE,
    "ANALYTICS_HEADER_REQUEST_ID",
    ()=>ANALYTICS_HEADER_REQUEST_ID,
    "ANALYTICS_HEADER_SESSION_ID",
    ()=>ANALYTICS_HEADER_SESSION_ID,
    "EVENT_SCHEMA_VERSION",
    ()=>EVENT_SCHEMA_VERSION,
    "TRACKING_HANDOFF_TARGET_IDS",
    ()=>TRACKING_HANDOFF_TARGET_IDS,
    "agentIdToTracking",
    ()=>agentIdToTracking,
    "anonymizeArtifactId",
    ()=>anonymizeArtifactId,
    "artifactKindToTracking",
    ()=>artifactKindToTracking,
    "byokProtocolToTracking",
    ()=>byokProtocolToTracking,
    "createTabToTracking",
    ()=>createTabToTracking,
    "deriveConfigureGlobals",
    ()=>deriveConfigureGlobals,
    "designSystemFolderCountBucket",
    ()=>designSystemFolderCountBucket,
    "designSystemLengthBucket",
    ()=>designSystemLengthBucket,
    "designSystemModuleSlug",
    ()=>designSystemModuleSlug,
    "designSystemModuleType",
    ()=>designSystemModuleType,
    "designSystemRepoHostFromUrl",
    ()=>designSystemRepoHostFromUrl,
    "designSystemTotalSizeBucket",
    ()=>designSystemTotalSizeBucket,
    "executionModeToTracking",
    ()=>executionModeToTracking,
    "feedbackAgentProviderIdToTracking",
    ()=>feedbackAgentProviderIdToTracking,
    "fidelityToTracking",
    ()=>fidelityToTracking,
    "fileSizeBucketToTracking",
    ()=>fileSizeBucketToTracking,
    "fileTypeToTracking",
    ()=>fileTypeToTracking,
    "handoffTargetIdToTracking",
    ()=>handoffTargetIdToTracking,
    "modelIdForTracking",
    ()=>modelIdForTracking,
    "normalizeCustomReason",
    ()=>normalizeCustomReason,
    "projectKindToTracking",
    ()=>projectKindToTracking,
    "questionsFormTrackingId",
    ()=>questionsFormTrackingId,
    "sessionModeToTracking",
    ()=>sessionModeToTracking,
    "settingsSectionToTracking",
    ()=>settingsSectionToTracking
]);
// src/analytics/events.ts
var TRACKING_HANDOFF_TARGET_IDS = [
    // editors / file managers (HostEditorId)
    "cursor",
    "vscode",
    "windsurf",
    "zed",
    "qoder",
    "antigravity",
    "webstorm",
    "idea",
    "xcode",
    "finder",
    "explorer",
    "file-manager",
    "terminal",
    "warp",
    // code-agent CLIs (HandoffButton CLI_ORDER; qoder / antigravity already above)
    "amr",
    "claude",
    "codex",
    "opencode",
    "cursor-agent",
    "gemini",
    "qwen",
    "copilot",
    "grok-build",
    "deepseek",
    "kimi",
    "hermes",
    "devin",
    "kiro",
    "kilo",
    "vibe",
    "aider",
    "trae-cli",
    "pi",
    "reasonix"
];
function handoffTargetIdToTracking(id) {
    return TRACKING_HANDOFF_TARGET_IDS.includes(id ?? "") ? id : "other";
}
function sessionModeToTracking(mode) {
    return mode === "design" ? "design" : "ask";
}
var HYPERFRAMES_VIDEO_MODEL = "hyperframes-html";
function projectKindToTracking(kind, videoModel) {
    switch(kind){
        case "prototype":
            return "prototype";
        case "deck":
            return "slide_deck";
        case "template":
            return "template";
        case "other":
            return "other";
        case "image":
            return "image";
        case "video":
            return videoModel === HYPERFRAMES_VIDEO_MODEL ? "hyperframes" : "video";
        case "audio":
            return "audio";
        case "brand":
            return "brand";
        case "live-artifact":
        case "live_artifact":
            return "live_artifact";
        default:
            return null;
    }
}
function createTabToTracking(tab) {
    switch(tab){
        case "prototype":
            return "prototype";
        case "deck":
            return "slide_deck";
        case "template":
            return "from_template";
        case "live-artifact":
            return "live_artifact";
        case "image":
        case "video":
        case "audio":
            return "media";
        case "other":
            return "other";
        default:
            return "prototype";
    }
}
function fidelityToTracking(fidelity) {
    if (fidelity === "wireframe") return "wireframe";
    if (fidelity === "high-fidelity") return "high_fidelity";
    return "not_applicable";
}
function executionModeToTracking(mode) {
    return mode === "daemon" ? "local_cli" : "byok";
}
function modelIdForTracking(model) {
    const trimmed = typeof model === "string" ? model.trim() : "";
    return trimmed.length > 0 ? trimmed : "default";
}
function agentIdToTracking(agentId) {
    switch(agentId){
        case "claude":
            return "claude_code";
        case "codex":
            return "codex_cli";
        case "devin":
            return "devin_for_terminal";
        case "gemini":
            return "gemini_cli";
        case "opencode":
            return "opencode";
        case "hermes":
            return "hermes";
        case "kimi":
            return "kimi_cli";
        case "cursor-agent":
            return "cursor_agent";
        case "qwen":
            return "qwen_code";
        case "qoder":
            return "qoder_cli";
        case "copilot":
            return "github_copilot_cli";
        case "pi":
            return "pi";
        case "kilo":
            return "kilo";
        case "amr":
            return "amr";
        default:
            return "other";
    }
}
function feedbackAgentProviderIdToTracking(agentId) {
    switch(agentId){
        case "anthropic-api":
            return byokProtocolToTracking("anthropic") ?? "other";
        case "openai-api":
            return byokProtocolToTracking("openai") ?? "other";
        case "azure-openai-api":
            return byokProtocolToTracking("azure") ?? "other";
        case "google-gemini-api":
            return byokProtocolToTracking("google") ?? "other";
        case "ollama-cloud-api":
            return byokProtocolToTracking("ollama") ?? "other";
        case "senseaudio-api":
            return byokProtocolToTracking("senseaudio") ?? "other";
        default:
            return agentIdToTracking(agentId);
    }
}
function byokProtocolToTracking(protocol) {
    switch(protocol){
        case "anthropic":
            return "anthropic";
        case "openai":
            return "openai";
        case "azure":
        case "azure_openai":
            return "azure_openai";
        case "google":
        case "google_gemini":
            return "google_gemini";
        case "ollama":
        case "ollama_cloud":
            return "ollama_cloud";
        case "senseaudio":
            return "senseaudio";
        default:
            return null;
    }
}
function settingsSectionToTracking(section) {
    switch(section){
        case "execution":
            return "configure_execution_mode";
        case "instructions":
            return "instructions";
        case "media":
            return "media_providers";
        case "language":
            return "language";
        case "appearance":
            return "appearance";
        case "pet":
            return "pets";
        case "about":
            return "about";
        case "composio":
        case "integrations":
        case "connectors":
            return "connectors";
        case "mcpClient":
            return "external_mcp";
        case "mcp_server":
            return "mcp_server";
        case "orbit":
            return "orbit";
        case "skills":
            return "skills";
        case "designSystems":
            return "design_systems";
        case "critiqueTheater":
            return "design_review";
        case "projectLocations":
            return "project_locations";
        case "memory":
            return "memory";
        case "privacy":
            return "privacy";
        case "notifications":
            return "notifications";
        case "externalMcp":
            return "external_mcp";
        default:
            return "configure_execution_mode";
    }
}
function artifactKindToTracking(args) {
    const { rendererId, fileKind } = args;
    if (rendererId === "html" || rendererId === "deck-html" || rendererId === "react-component") {
        return "html";
    }
    if (rendererId === "markdown") return "markdown";
    if (rendererId === "svg") return "image";
    if (fileKind === "image" || fileKind === "sketch") return "image";
    if (fileKind === "video") return "video";
    if (fileKind === "audio") return "audio";
    if (fileKind === "pdf" || fileKind === "document" || fileKind === "presentation" || fileKind === "spreadsheet") {
        return "doc";
    }
    return "unknown";
}
function fileSizeBucketToTracking(bytes) {
    const mb = bytes / (1024 * 1024);
    if (mb < 1) return "0_1mb";
    if (mb < 10) return "1_10mb";
    if (mb < 100) return "10_100mb";
    return "100mb_plus";
}
function fileTypeToTracking(args) {
    if (args.isFolder) return "folder";
    if (args.isZip) return "zip";
    const m = args.mime ?? "";
    if (m.startsWith("image/")) return "image";
    if (m.startsWith("video/")) return "video";
    if (m.startsWith("audio/")) return "audio";
    if (m === "application/pdf") return "pdf";
    return "other";
}
function deriveConfigureGlobals(input) {
    const agents = input.agents ?? [];
    const cliAgents = agents.filter((a)=>a.id !== "amr");
    const hasAvailableCli = cliAgents.some((a)=>a.available === true);
    const selectedAgent = input.agentId ? agents.find((a)=>a.id === input.agentId) : void 0;
    const selectedAgentAvailable = selectedAgent?.available === true;
    const byokConfigured = input.byokConfigured === true;
    const amrAuthorized = input.amrAuthorized === true;
    const byokSignal = byokConfigured || input.mode === "api";
    let configureType;
    if (hasAvailableCli && byokSignal) {
        configureType = "both";
    } else if (hasAvailableCli) {
        configureType = "local_cli";
    } else if (byokSignal) {
        configureType = "byok";
    } else if (amrAuthorized) {
        configureType = "amr";
    } else {
        configureType = "none";
    }
    let configureAvailability;
    if (input.mode === "daemon") {
        configureAvailability = selectedAgentAvailable ? "available" : "unavailable";
    } else if (input.mode === "api") {
        configureAvailability = byokConfigured ? "available" : "unavailable";
    } else if (hasAvailableCli || byokConfigured || amrAuthorized) {
        configureAvailability = "available";
    } else {
        configureAvailability = "unknown";
    }
    let runtimeType;
    if (input.mode === "api") {
        runtimeType = "byok";
    } else if (input.agentId === "amr") {
        runtimeType = "amr_cloud";
    } else if (input.mode === "daemon" && selectedAgentAvailable) {
        runtimeType = "local_cli";
    } else if (hasAvailableCli) {
        runtimeType = "local_cli";
    } else if (byokSignal) {
        runtimeType = "byok";
    } else if (amrAuthorized) {
        runtimeType = "amr_cloud";
    } else {
        runtimeType = "none";
    }
    return {
        has_available_configure_cli: hasAvailableCli,
        configure_type: configureType,
        configure_availability: configureAvailability,
        runtime_type: runtimeType,
        // Independent per-path runnable flags (no cascade masking — see
        // AnalyticsConfigureGlobals). `cli_runnable` mirrors
        // `has_available_configure_cli`; `byok_runnable` uses the actually-saved
        // key signal (not the `mode === 'api'` fallback, which can be true with no
        // key yet); `amr_runnable` is sign-in.
        cli_runnable: hasAvailableCli,
        byok_runnable: byokConfigured,
        amr_runnable: amrAuthorized
    };
}
function normalizeCustomReason(text) {
    return (text ?? "").trim();
}
function designSystemLengthBucket(text) {
    const length = (text ?? "").trim().length;
    if (length === 0) return "0";
    if (length <= 50) return "1_50";
    if (length <= 200) return "51_200";
    if (length <= 500) return "201_500";
    return "500_plus";
}
function designSystemFolderCountBucket(count) {
    if (count === null || count === void 0 || !Number.isFinite(count)) {
        return "unknown";
    }
    if (count <= 0) return "0";
    if (count <= 10) return "1_10";
    if (count <= 50) return "11_50";
    if (count <= 200) return "51_200";
    return "200_plus";
}
function designSystemTotalSizeBucket(bytes) {
    if (bytes === null || bytes === void 0 || !Number.isFinite(bytes)) {
        return "unknown";
    }
    const mb = bytes / (1024 * 1024);
    if (mb < 1) return "0_1mb";
    if (mb < 10) return "1_10mb";
    if (mb < 50) return "10_50mb";
    return "50mb_plus";
}
function designSystemModuleSlug(header) {
    const trimmed = (header ?? "").trim().replace(/^#+\s*/, "");
    if (!trimmed) return "unknown";
    return trimmed.toLowerCase().replace(/[^a-z0-9\s-]+/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "unknown";
}
function questionsFormTrackingId(raw) {
    const slug = (raw ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
    return slug || "unknown";
}
function designSystemModuleType(slug) {
    const s = (slug ?? "").toLowerCase();
    if (!s) return "other";
    if (/(typography|type|font)/.test(s)) return "typography";
    if (/(color|palette)/.test(s)) return "colors";
    if (/(spacing|layout|grid|radius|shadow|elevation)/.test(s)) {
        return "spacing";
    }
    if (/(component|button|input|form|icon|widget)/.test(s)) return "components";
    if (/(brand|asset|logo|image|illustration)/.test(s)) return "brand_assets";
    return "other";
}
function designSystemRepoHostFromUrl(url) {
    const raw = (url ?? "").trim();
    if (!raw) return "unknown";
    try {
        const host = new URL(raw).hostname.toLowerCase();
        if (host === "github.com" || host.endsWith(".github.com")) return "github";
        if (host === "gitlab.com" || host.endsWith(".gitlab.com")) return "gitlab";
        return "other";
    } catch  {
        return "unknown";
    }
}
// src/analytics/public-params.ts
var EVENT_SCHEMA_VERSION = 2;
var ANALYTICS_HEADER_DEVICE_ID = "x-od-analytics-device-id";
var ANALYTICS_HEADER_SESSION_ID = "x-od-analytics-session-id";
var ANALYTICS_HEADER_CLIENT_TYPE = "x-od-analytics-client-type";
var ANALYTICS_HEADER_LOCALE = "x-od-analytics-locale";
var ANALYTICS_HEADER_REQUEST_ID = "x-od-analytics-request-id";
// src/analytics/artifact-id.ts
var FNV_OFFSET_BASIS = 0xcbf29ce484222325n;
var FNV_PRIME = 0x100000001b3n;
var MASK_64 = 0xffffffffffffffffn;
function anonymizeArtifactId(args) {
    const input = `${args.projectId}:${args.fileName}`;
    let hash = FNV_OFFSET_BASIS;
    for(let i = 0; i < input.length; i++){
        hash ^= BigInt(input.charCodeAt(i));
        hash = hash * FNV_PRIME & MASK_64;
    }
    return hash.toString(16).padStart(16, "0");
}
;
}),
];

//# sourceMappingURL=packages_0vrk7z2._.js.map