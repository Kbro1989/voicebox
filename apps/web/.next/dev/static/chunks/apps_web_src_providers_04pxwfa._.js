(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLOUDFLARE_PAGES_PROVIDER_ID",
    ()=>CLOUDFLARE_PAGES_PROVIDER_ID,
    "DEFAULT_DEPLOY_PROVIDER_ID",
    ()=>DEFAULT_DEPLOY_PROVIDER_ID,
    "DEPLOY_PROVIDER_IDS",
    ()=>DEPLOY_PROVIDER_IDS,
    "LiveArtifactRefreshError",
    ()=>LiveArtifactRefreshError,
    "cancelConnectorAuthorization",
    ()=>cancelConnectorAuthorization,
    "checkDeploymentLink",
    ()=>checkDeploymentLink,
    "codexPetSpritesheetUrl",
    ()=>codexPetSpritesheetUrl,
    "connectConnector",
    ()=>connectConnector,
    "createDesignSystemDraft",
    ()=>createDesignSystemDraft,
    "createProjectFolder",
    ()=>createProjectFolder,
    "createSocialSharePayload",
    ()=>createSocialSharePayload,
    "daemonIsLive",
    ()=>daemonIsLive,
    "deleteDesignSystemDraft",
    ()=>deleteDesignSystemDraft,
    "deleteLiveArtifact",
    ()=>deleteLiveArtifact,
    "deletePreviewComment",
    ()=>deletePreviewComment,
    "deleteProjectFile",
    ()=>deleteProjectFile,
    "deleteProjectFolder",
    ()=>deleteProjectFolder,
    "deleteSkill",
    ()=>deleteSkill,
    "deployProjectFile",
    ()=>deployProjectFile,
    "dirExists",
    ()=>dirExists,
    "disconnectConnector",
    ()=>disconnectConnector,
    "ensureDesignSystemWorkspace",
    ()=>ensureDesignSystemWorkspace,
    "fetchAgents",
    ()=>fetchAgents,
    "fetchAgentsStream",
    ()=>fetchAgentsStream,
    "fetchAppVersionInfo",
    ()=>fetchAppVersionInfo,
    "fetchCloudflarePagesZones",
    ()=>fetchCloudflarePagesZones,
    "fetchCodexPets",
    ()=>fetchCodexPets,
    "fetchConnectorDetail",
    ()=>fetchConnectorDetail,
    "fetchConnectorDiscovery",
    ()=>fetchConnectorDiscovery,
    "fetchConnectorStatuses",
    ()=>fetchConnectorStatuses,
    "fetchConnectors",
    ()=>fetchConnectors,
    "fetchDeployConfig",
    ()=>fetchDeployConfig,
    "fetchDesignSystem",
    ()=>fetchDesignSystem,
    "fetchDesignSystemFile",
    ()=>fetchDesignSystemFile,
    "fetchDesignSystemFiles",
    ()=>fetchDesignSystemFiles,
    "fetchDesignSystemGenerationJob",
    ()=>fetchDesignSystemGenerationJob,
    "fetchDesignSystemPreview",
    ()=>fetchDesignSystemPreview,
    "fetchDesignSystemRevisions",
    ()=>fetchDesignSystemRevisions,
    "fetchDesignSystemShowcase",
    ()=>fetchDesignSystemShowcase,
    "fetchDesignSystems",
    ()=>fetchDesignSystems,
    "fetchDesignSystemsResult",
    ()=>fetchDesignSystemsResult,
    "fetchDesignTemplate",
    ()=>fetchDesignTemplate,
    "fetchDesignTemplates",
    ()=>fetchDesignTemplates,
    "fetchHostEditors",
    ()=>fetchHostEditors,
    "fetchLatestGithubReleaseInfo",
    ()=>fetchLatestGithubReleaseInfo,
    "fetchLiveArtifact",
    ()=>fetchLiveArtifact,
    "fetchLiveArtifactCode",
    ()=>fetchLiveArtifactCode,
    "fetchLiveArtifactRefreshes",
    ()=>fetchLiveArtifactRefreshes,
    "fetchLiveArtifacts",
    ()=>fetchLiveArtifacts,
    "fetchPluginAssetText",
    ()=>fetchPluginAssetText,
    "fetchPluginExampleHtml",
    ()=>fetchPluginExampleHtml,
    "fetchPluginPreviewHtml",
    ()=>fetchPluginPreviewHtml,
    "fetchPreviewComments",
    ()=>fetchPreviewComments,
    "fetchProjectDeployments",
    ()=>fetchProjectDeployments,
    "fetchProjectDesignSystemPackageAudit",
    ()=>fetchProjectDesignSystemPackageAudit,
    "fetchProjectFilePreview",
    ()=>fetchProjectFilePreview,
    "fetchProjectFileText",
    ()=>fetchProjectFileText,
    "fetchProjectFiles",
    ()=>fetchProjectFiles,
    "fetchProjectFolders",
    ()=>fetchProjectFolders,
    "fetchPromptTemplate",
    ()=>fetchPromptTemplate,
    "fetchPromptTemplates",
    ()=>fetchPromptTemplates,
    "fetchRecentLinkedDirs",
    ()=>fetchRecentLinkedDirs,
    "fetchSkill",
    ()=>fetchSkill,
    "fetchSkillExample",
    ()=>fetchSkillExample,
    "fetchSkillFiles",
    ()=>fetchSkillFiles,
    "fetchSkills",
    ()=>fetchSkills,
    "importGitHubDesignSystem",
    ()=>importGitHubDesignSystem,
    "importLocalDesignSystem",
    ()=>importLocalDesignSystem,
    "importShadcnDesignSystem",
    ()=>importShadcnDesignSystem,
    "importSkill",
    ()=>importSkill,
    "installDesignSystem",
    ()=>installDesignSystem,
    "installSkill",
    ()=>installSkill,
    "isDeployProviderId",
    ()=>isDeployProviderId,
    "liveArtifactDetailUrl",
    ()=>liveArtifactDetailUrl,
    "liveArtifactPreviewUrl",
    ()=>liveArtifactPreviewUrl,
    "openExternalUrl",
    ()=>openExternalUrl,
    "openFolderDialog",
    ()=>openFolderDialog,
    "openProjectInEditor",
    ()=>openProjectInEditor,
    "patchPreviewCommentStatus",
    ()=>patchPreviewCommentStatus,
    "projectFileUrl",
    ()=>projectFileUrl,
    "projectRawUrl",
    ()=>projectRawUrl,
    "pushRecentLinkedDir",
    ()=>pushRecentLinkedDir,
    "refreshLiveArtifact",
    ()=>refreshLiveArtifact,
    "renameProjectFile",
    ()=>renameProjectFile,
    "replaceProjectWorkingDir",
    ()=>replaceProjectWorkingDir,
    "startDesignSystemGenerationJob",
    ()=>startDesignSystemGenerationJob,
    "startDesignSystemRevisionJob",
    ()=>startDesignSystemRevisionJob,
    "startDesignSystemTokenContractRebuildJob",
    ()=>startDesignSystemTokenContractRebuildJob,
    "syncCommunityPets",
    ()=>syncCommunityPets,
    "uninstallDesignSystem",
    ()=>uninstallDesignSystem,
    "uninstallSkill",
    ()=>uninstallSkill,
    "updateDeployConfig",
    ()=>updateDeployConfig,
    "updateDesignSystemDraft",
    ()=>updateDesignSystemDraft,
    "updateDesignSystemRevisionStatus",
    ()=>updateDesignSystemRevisionStatus,
    "updateLiveArtifact",
    ()=>updateLiveArtifact,
    "updateSkill",
    ()=>updateSkill,
    "uploadProjectFile",
    ()=>uploadProjectFile,
    "uploadProjectFiles",
    ()=>uploadProjectFiles,
    "upsertPreviewComment",
    ()=>upsertPreviewComment,
    "writeProjectBase64File",
    ()=>writeProjectBase64File,
    "writeProjectTextFile",
    ()=>writeProjectTextFile,
    "writeProjectTextFileDetailed",
    ()=>writeProjectTextFileDetailed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-client] (ecmascript)");
;
const DEFAULT_DEPLOY_PROVIDER_ID = 'vercel-self';
const CLOUDFLARE_PAGES_PROVIDER_ID = 'cloudflare-pages';
const DEPLOY_PROVIDER_IDS = [
    DEFAULT_DEPLOY_PROVIDER_ID,
    CLOUDFLARE_PAGES_PROVIDER_ID
];
function isDeployProviderId(value) {
    return typeof value === 'string' && DEPLOY_PROVIDER_IDS.includes(value);
}
function deployProviderQuery(providerId) {
    return providerId ? `?providerId=${encodeURIComponent(providerId)}` : '';
}
async function fetchAgents(options) {
    try {
        const resp = await fetch('/api/agents', {
            cache: 'no-store'
        });
        if (!resp.ok) {
            if (options?.throwOnError) throw new Error(`agents ${resp.status}`);
            return [];
        }
        const json = await resp.json();
        return json.agents ?? [];
    } catch (err) {
        if (options?.throwOnError) throw err;
        return [];
    }
}
async function fetchAgentsStream(args) {
    const { onAgent, signal } = args;
    const resp = await fetch('/api/agents?stream=1', {
        cache: 'no-store',
        headers: {
            Accept: 'text/event-stream'
        },
        ...signal ? {
            signal
        } : {}
    });
    if (!resp.ok || !resp.body) {
        throw new Error(`agents stream ${resp.status}`);
    }
    const collected = [];
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let done = false;
    const errorMessageFromData = (data)=>{
        if (!data.trim()) return 'agents stream error';
        try {
            const parsed = JSON.parse(data);
            const message = parsed.error ?? parsed.message;
            if (typeof message === 'string' && message.trim()) return message;
        } catch  {
        // Fall through to the raw data string below.
        }
        return data;
    };
    const handleEvent = (rawEvent)=>{
        // Each SSE record is `event: <name>\ndata: <json>`; we act on `agent`
        // (one AgentInfo), `error` (terminal failure), and `done` (terminal
        // success). Unknown events are ignored so the protocol can grow without
        // breaking older clients.
        let eventName = 'message';
        const dataLines = [];
        for (const line of rawEvent.split('\n')){
            if (line.startsWith('event:')) eventName = line.slice(6).trim();
            else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim());
        }
        const data = dataLines.join('\n');
        if (eventName === 'done') {
            done = true;
            return;
        }
        if (eventName === 'error') {
            throw new Error(errorMessageFromData(data));
        }
        if (eventName === 'agent' && data) {
            try {
                const agent = JSON.parse(data);
                collected.push(agent);
                onAgent(agent);
            } catch  {
            // Ignore a malformed record rather than aborting the whole stream.
            }
        }
    };
    try {
        while(!done){
            const { value, done: streamDone } = await reader.read();
            if (streamDone) break;
            buffer += decoder.decode(value, {
                stream: true
            });
            let sep;
            // SSE records are separated by a blank line ("\n\n").
            while((sep = buffer.indexOf('\n\n')) !== -1){
                const rawEvent = buffer.slice(0, sep);
                buffer = buffer.slice(sep + 2);
                if (rawEvent.trim().length > 0) handleEvent(rawEvent);
                if (done) break;
            }
        }
        if (!done && buffer.trim().length > 0) {
            handleEvent(buffer);
        }
    } finally{
        try {
            await reader.cancel();
        } catch  {
        // Reader may already be closed; nothing to do.
        }
    }
    if (!done) {
        throw new Error('agents stream ended before done');
    }
    return collected;
}
async function fetchSkills() {
    try {
        const resp = await fetch('/api/skills');
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.skills ?? [];
    } catch  {
        return [];
    }
}
async function fetchDesignTemplates() {
    try {
        const resp = await fetch('/api/design-templates');
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.designTemplates ?? [];
    } catch  {
        return [];
    }
}
async function fetchDesignTemplate(id) {
    try {
        const resp = await fetch(`/api/design-templates/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function fetchCodexPets() {
    try {
        const resp = await fetch('/api/codex-pets');
        if (!resp.ok) return {
            pets: [],
            rootDir: ''
        };
        return await resp.json();
    } catch  {
        return {
            pets: [],
            rootDir: ''
        };
    }
}
async function syncCommunityPets(input) {
    try {
        const resp = await fetch('/api/codex-pets/sync', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input ?? {})
        });
        if (!resp.ok) {
            const payload = await resp.json().catch(()=>null);
            return {
                wrote: 0,
                skipped: 0,
                failed: 0,
                total: 0,
                rootDir: '',
                errors: [],
                error: payload?.error ?? `Sync failed (${resp.status})`
            };
        }
        return await resp.json();
    } catch (err) {
        return {
            wrote: 0,
            skipped: 0,
            failed: 0,
            total: 0,
            rootDir: '',
            errors: [],
            error: err instanceof Error ? err.message : 'Sync request failed'
        };
    }
}
function codexPetSpritesheetUrl(pet) {
    // The daemon stamps an absolute path-prefix in `spritesheetUrl`; if
    // that prefix is empty (default), it is already a same-origin path
    // we can hand to <img src> or fetch() as-is.
    return pet.spritesheetUrl;
}
async function importSkill(input) {
    try {
        const resp = await fetch('/api/skills/import', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) {
            const payload = await resp.json().catch(()=>null);
            return {
                error: {
                    code: payload?.error?.code,
                    message: payload?.error?.message ?? `Import failed (${resp.status}).`
                }
            };
        }
        return await resp.json();
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Import request failed.'
            }
        };
    }
}
async function updateSkill(id, input) {
    try {
        const resp = await fetch(`/api/skills/${encodeURIComponent(id)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) {
            const payload = await resp.json().catch(()=>null);
            return {
                error: {
                    code: payload?.error?.code,
                    message: payload?.error?.message ?? `Update failed (${resp.status}).`
                }
            };
        }
        return await resp.json();
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Update request failed.'
            }
        };
    }
}
async function fetchSkillFiles(id) {
    try {
        const resp = await fetch(`/api/skills/${encodeURIComponent(id)}/files`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.files ?? [];
    } catch  {
        return [];
    }
}
async function deleteSkill(id) {
    try {
        const resp = await fetch(`/api/skills/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        if (!resp.ok) {
            const payload = await resp.json().catch(()=>null);
            return {
                error: {
                    code: payload?.error?.code,
                    message: payload?.error?.message ?? `Delete failed (${resp.status}).`
                }
            };
        }
        return {
            ok: true
        };
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Delete request failed.'
            }
        };
    }
}
async function fetchSkill(id) {
    try {
        const resp = await fetch(`/api/skills/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function fetchDesignSystems() {
    const result = await fetchDesignSystemsResult();
    return result.ok ? result.designSystems : [];
}
async function fetchDesignSystemsResult() {
    try {
        const resp = await fetch('/api/design-systems');
        if (!resp.ok) return {
            ok: false
        };
        const json = await resp.json();
        return {
            ok: true,
            designSystems: json.designSystems ?? []
        };
    } catch  {
        return {
            ok: false
        };
    }
}
async function fetchDesignSystem(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        return parseDesignSystemDetail(await resp.json());
    } catch  {
        return null;
    }
}
async function fetchDesignSystemFiles(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/files`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.files ?? [];
    } catch  {
        return [];
    }
}
async function fetchDesignSystemFile(id, filePath) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/file?path=${encodeURIComponent(filePath)}`);
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.file ?? null;
    } catch  {
        return null;
    }
}
async function ensureDesignSystemWorkspace(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/workspace`, {
            method: 'POST'
        });
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
function parseDesignSystemDetail(json) {
    if (!json || typeof json !== 'object') return null;
    const wrapper = json;
    return wrapper.designSystem ?? json;
}
async function createDesignSystemDraft(input) {
    try {
        const resp = await fetch('/api/design-systems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        return parseDesignSystemDetail(await resp.json());
    } catch  {
        return null;
    }
}
async function startDesignSystemGenerationJob(input) {
    try {
        const resp = await fetch('/api/design-systems/generation-jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.job ?? null;
    } catch  {
        return null;
    }
}
async function fetchDesignSystemGenerationJob(id) {
    try {
        const resp = await fetch(`/api/design-systems/generation-jobs/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.job ?? null;
    } catch  {
        return null;
    }
}
async function fetchProjectDesignSystemPackageAudit(projectId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/design-system-package-audit`, {
            cache: 'no-store'
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.audit ?? null;
    } catch  {
        return null;
    }
}
async function fetchDesignSystemRevisions(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/revisions`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.revisions ?? [];
    } catch  {
        return [];
    }
}
async function updateDesignSystemRevisionStatus(id, revisionId, status) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/revisions/${encodeURIComponent(revisionId)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.revision ?? null;
    } catch  {
        return null;
    }
}
async function startDesignSystemRevisionJob(id, input) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/revision-jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.job ?? null;
    } catch  {
        return null;
    }
}
async function startDesignSystemTokenContractRebuildJob(id, input = {}) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/token-contract/rebuild-jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function updateDesignSystemDraft(id, input) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        return parseDesignSystemDetail(await resp.json());
    } catch  {
        return null;
    }
}
async function deleteDesignSystemDraft(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function importLocalDesignSystem(input) {
    try {
        const resp = await fetch('/api/design-systems/import/local', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) {
            return {
                error: await readImportError(resp)
            };
        }
        return await resp.json();
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Import request failed.'
            }
        };
    }
}
async function importGitHubDesignSystem(input) {
    try {
        const resp = await fetch('/api/design-systems/import/github', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return {
            error: await readImportError(resp)
        };
        return await resp.json();
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Import request failed.'
            }
        };
    }
}
async function importShadcnDesignSystem(input) {
    try {
        const resp = await fetch('/api/design-systems/import/shadcn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return {
            error: await readImportError(resp)
        };
        return await resp.json();
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Import request failed.'
            }
        };
    }
}
async function readImportError(resp) {
    const payload = await resp.json().catch(()=>null);
    const error = payload?.error;
    if (typeof error === 'object' && error !== null) return error;
    return {
        message: typeof error === 'string' ? error : payload?.message ?? `Import failed (${resp.status}).`
    };
}
async function fetchPromptTemplates() {
    try {
        const resp = await fetch('/api/prompt-templates');
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.promptTemplates ?? [];
    } catch  {
        return [];
    }
}
async function fetchPromptTemplate(surface, id) {
    try {
        const resp = await fetch(`/api/prompt-templates/${encodeURIComponent(surface)}/${encodeURIComponent(id)}`);
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.promptTemplate ?? null;
    } catch  {
        return null;
    }
}
async function daemonIsLive() {
    try {
        const resp = await fetch('/api/health');
        return resp.ok;
    } catch  {
        return false;
    }
}
async function fetchConnectors() {
    try {
        const resp = await fetch('/api/connectors');
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.connectors ?? [];
    } catch  {
        return [];
    }
}
async function fetchConnectorStatuses(options) {
    try {
        const resp = await fetch('/api/connectors/status', {
            signal: options?.signal
        });
        if (!resp.ok) return {};
        const json = await resp.json();
        return json.statuses ?? {};
    } catch  {
        return {};
    }
}
let connectorDiscoveryCache = null;
let connectorDiscoveryPromise = null;
async function fetchConnectorDiscovery(options = {}) {
    if (options.refresh) {
        connectorDiscoveryCache = null;
        connectorDiscoveryPromise = null;
    }
    if (connectorDiscoveryCache && !options.refresh) return connectorDiscoveryCache;
    if (connectorDiscoveryPromise && !options.refresh) return connectorDiscoveryPromise;
    const promise = (async ()=>{
        try {
            const params = options.refresh ? '?refresh=true' : '';
            const resp = await fetch(`/api/connectors/discovery${params}`);
            if (!resp.ok) return [];
            const json = await resp.json();
            const connectors = json.connectors ?? [];
            connectorDiscoveryCache = connectors;
            return connectors;
        } catch  {
            return [];
        } finally{
            connectorDiscoveryPromise = null;
        }
    })();
    connectorDiscoveryPromise = promise;
    return promise;
}
async function fetchConnectorDetail(connectorId, options = {}) {
    try {
        const params = new URLSearchParams();
        if (options.hydrateTools) params.set('hydrateTools', 'true');
        if (options.toolsLimit !== undefined) params.set('toolsLimit', String(options.toolsLimit));
        if (options.toolsCursor) params.set('toolsCursor', options.toolsCursor);
        const query = params.toString();
        const resp = await fetch(`/api/connectors/${encodeURIComponent(connectorId)}${query ? `?${query}` : ''}`);
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.connector ?? null;
    } catch  {
        return null;
    }
}
function popupBlockedMessage() {
    return 'Popup blocked. Allow popups for Open Design and try again.';
}
async function openExternalUrl(url) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])()) {
        const opened = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openHostExternalUrl"])(url);
        if (opened.ok) return true;
    }
    try {
        const resp = await fetch('/api/system/open-external', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url
            })
        });
        if (resp.ok) {
            const json = await resp.json().catch(()=>null);
            if (json?.ok === true) return true;
        }
    } catch  {
    // Fall through to current-tab navigation below.
    }
    try {
        window.location.assign(url);
    } catch  {
        return false;
    }
    return false;
}
async function decodeConnectorError(resp) {
    try {
        const payload = await resp.json();
        return payload?.error?.message?.trim() || `Connector request failed (${resp.status})`;
    } catch  {
        return `Connector request failed (${resp.status})`;
    }
}
async function connectConnector(connectorId) {
    let authWindow = null;
    const useExternalBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])();
    try {
        if (!useExternalBrowser) {
            authWindow = window.open('about:blank', '_blank');
            renderConnectorAuthLoading(authWindow, {
                title: 'Initializing auth config…',
                body: 'Creating or reusing the Composio auth configuration for this app. This can take a moment the first time.'
            });
        }
        const prepare = await prepareConnectorAuthConfig(connectorId);
        if (prepare.status !== 'ready') {
            renderConnectorAuthError(authWindow, prepare.message);
            return {
                connector: null,
                error: prepare.message
            };
        }
        renderConnectorAuthLoading(authWindow, {
            title: 'Opening authorization…',
            body: 'The auth config is ready. Preparing the provider authorization page.'
        });
        const resp = await fetch(`/api/connectors/${encodeURIComponent(connectorId)}/connect`, {
            method: 'POST'
        });
        if (!resp.ok) {
            const error = await decodeConnectorError(resp);
            renderConnectorAuthError(authWindow, error);
            return {
                connector: null,
                error
            };
        }
        const json = await resp.json();
        if (json.auth?.kind === 'redirect_required' && json.auth.redirectUrl) {
            if (useExternalBrowser) {
                const opened = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openHostExternalUrl"])(json.auth.redirectUrl);
                if (!opened.ok) {
                    return {
                        connector: json.connector ?? null,
                        auth: json.auth,
                        error: popupBlockedMessage()
                    };
                }
            } else if (authWindow) {
                openConnectorAuthRedirect(authWindow, json.auth.redirectUrl);
            } else {
                // The embedded browser can block even the synchronous placeholder
                // popup. Ask the local daemon to open the system browser; if that
                // route is unavailable, openExternalUrl falls back to current-tab
                // navigation.
                await openExternalUrl(json.auth.redirectUrl);
            }
        } else if (json.auth?.kind === 'connected') {
            renderConnectorAuthInfo(authWindow, {
                title: 'Already connected',
                body: 'This connector is already authorized. You can close this window.'
            });
        } else if (json.auth?.kind === 'pending') {
            renderConnectorAuthInfo(authWindow, {
                title: 'Authorization pending',
                body: 'Authorization is in progress but no redirect URL was returned. Watch for an email confirmation, or open the Composio dashboard to continue.'
            });
        } else {
            renderConnectorAuthInfo(authWindow, {
                title: 'No authorization URL returned',
                body: 'The connector responded without a redirect URL. If this seems wrong, retry from Settings → Connectors, and confirm your Composio API key.'
            });
        }
        return {
            connector: json.connector ?? null,
            ...json.auth === undefined ? {} : {
                auth: json.auth
            }
        };
    } catch (err) {
        renderConnectorAuthError(authWindow, err instanceof Error && err.message ? err.message : 'Could not start connector authentication.');
        return {
            connector: null,
            error: err instanceof Error && err.message ? err.message : 'Could not start connector authentication.'
        };
    }
}
async function prepareConnectorAuthConfig(connectorId) {
    const resp = await fetch('/api/connectors/auth-configs/prepare', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            connectorIds: [
                connectorId
            ]
        })
    });
    if (!resp.ok) {
        return {
            status: 'error',
            message: await decodeConnectorError(resp)
        };
    }
    const json = await resp.json();
    const result = json.results?.[connectorId];
    if (!result) return {
        status: 'error',
        message: 'Auth config initialization did not return a result.'
    };
    if (result.status === 'ready') return {
        status: 'ready'
    };
    return {
        status: 'error',
        message: result.message
    };
}
function openConnectorAuthRedirect(authWindow, redirectUrl) {
    if (authWindow) {
        renderConnectorAuthRedirect(authWindow, redirectUrl);
        try {
            authWindow.location.replace(redirectUrl);
            return;
        } catch  {
        // Some embedded browsers block async popup navigation. Leave the
        // clickable fallback in the popup so the user can continue.
        }
    }
    const opened = window.open(redirectUrl, '_blank');
    if (!opened) window.location.assign(redirectUrl);
}
function renderConnectorAuthLoading(authWindow, copy) {
    if (!authWindow) return;
    try {
        authWindow.document.title = 'Connecting…';
        authWindow.document.body.innerHTML = `
      <main style="min-height:100vh;display:grid;place-items:center;margin:0;background:#0f1115;color:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="display:grid;gap:14px;justify-items:center;text-align:center;padding:32px;">
          <div aria-hidden="true" style="width:28px;height:28px;border-radius:999px;border:3px solid rgba(255,255,255,.22);border-top-color:#fff;animation:od-spin .8s linear infinite;"></div>
          <div style="font-size:15px;font-weight:600;">${escapeHtmlText(copy.title)}</div>
          <div style="max-width:300px;color:rgba(246,247,251,.72);font-size:13px;line-height:1.5;">${escapeHtmlText(copy.body)}</div>
        </div>
        <style>@keyframes od-spin{to{transform:rotate(360deg)}}</style>
      </main>
    `;
    } catch  {
    /* Popup may be unavailable or already navigated; ignore. */ }
}
function renderConnectorAuthInfo(authWindow, copy) {
    if (!authWindow) return;
    try {
        authWindow.document.title = copy.title;
        authWindow.document.body.innerHTML = `
      <main style="min-height:100vh;display:grid;place-items:center;margin:0;background:#0f1115;color:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="display:grid;gap:14px;justify-items:center;text-align:center;padding:32px;">
          <div style="font-size:15px;font-weight:600;">${escapeHtmlText(copy.title)}</div>
          <div style="max-width:360px;color:rgba(246,247,251,.72);font-size:13px;line-height:1.5;">${escapeHtmlText(copy.body)}</div>
        </div>
      </main>
    `;
    } catch  {
    /* Popup may be unavailable or already navigated; ignore. */ }
}
function renderConnectorAuthRedirect(authWindow, redirectUrl) {
    try {
        authWindow.document.title = 'Continue authorization';
        authWindow.document.body.innerHTML = `
      <main style="min-height:100vh;display:grid;place-items:center;margin:0;background:#0f1115;color:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="display:grid;gap:14px;justify-items:center;text-align:center;padding:32px;">
          <div style="font-size:15px;font-weight:600;">Continue authorization</div>
          <div style="max-width:300px;color:rgba(246,247,251,.72);font-size:13px;line-height:1.5;">If this window does not redirect automatically, use the button below.</div>
          <a href="${escapeHtmlAttribute(redirectUrl)}" style="display:inline-flex;align-items:center;justify-content:center;min-width:164px;border-radius:8px;padding:9px 14px;background:#df7b56;color:#fff;text-decoration:none;font-size:13px;font-weight:600;">Open Composio</a>
        </div>
      </main>
    `;
    } catch  {
    /* Popup may already be cross-origin; navigation fallback still runs. */ }
}
async function readConnectorApiErrorMessage(resp) {
    try {
        const payload = await resp.json();
        return payload.error?.message ?? payload.message ?? `Connection failed (${resp.status})`;
    } catch  {
        return `Connection failed (${resp.status})`;
    }
}
function renderConnectorAuthError(authWindow, message) {
    if (!authWindow) return;
    try {
        authWindow.document.title = 'Connection failed';
        authWindow.document.body.innerHTML = `
      <main style="min-height:100vh;display:grid;place-items:center;margin:0;background:#0f1115;color:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="display:grid;gap:14px;justify-items:center;text-align:center;padding:32px;">
          <div style="font-size:15px;font-weight:600;">Connection failed</div>
          <div style="max-width:360px;color:rgba(246,247,251,.72);font-size:13px;line-height:1.5;">${escapeHtmlText(message)}</div>
        </div>
      </main>
    `;
    } catch  {
    /* Popup may be unavailable or already navigated; ignore. */ }
}
function escapeHtmlText(value) {
    return value.replace(/[&<>]/g, (char)=>{
        switch(char){
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            default:
                return char;
        }
    });
}
function escapeHtmlAttribute(value) {
    return value.replace(/[&<>"']/g, (char)=>{
        switch(char){
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&#39;';
            default:
                return char;
        }
    });
}
async function disconnectConnector(connectorId) {
    try {
        const resp = await fetch(`/api/connectors/${encodeURIComponent(connectorId)}/connection`, {
            method: 'DELETE'
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.connector ?? null;
    } catch  {
        return null;
    }
}
async function cancelConnectorAuthorization(connectorId) {
    try {
        const resp = await fetch(`/api/connectors/${encodeURIComponent(connectorId)}/authorization/cancel`, {
            method: 'POST'
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.connector ?? null;
    } catch  {
        return null;
    }
}
function isAppVersionInfo(value) {
    if (!value || typeof value !== 'object') return false;
    const candidate = value;
    return typeof candidate.version === 'string' && typeof candidate.channel === 'string' && typeof candidate.packaged === 'boolean' && typeof candidate.platform === 'string' && typeof candidate.arch === 'string';
}
async function fetchAppVersionInfo() {
    try {
        const resp = await fetch('/api/version');
        if (!resp.ok) return null;
        const json = await resp.json();
        return isAppVersionInfo(json.version) ? json.version : null;
    } catch  {
        return null;
    }
}
async function fetchLatestGithubReleaseInfo() {
    try {
        const resp = await fetch('/api/github/open-design/releases/latest');
        if (!resp.ok) return null;
        const json = await resp.json();
        if (typeof json.tag_name !== 'string' || typeof json.html_url !== 'string') return null;
        return {
            tagName: json.tag_name,
            htmlUrl: json.html_url,
            stale: json.stale === true
        };
    } catch  {
        return null;
    }
}
async function fetchSkillExample(id, previewType = 'html') {
    if (previewType !== 'html') {
        return {
            unavailable: true,
            kind: previewType
        };
    }
    try {
        const resp = await fetch(`/api/skills/${encodeURIComponent(id)}/example`);
        if (!resp.ok) {
            if (resp.status === 404) {
                return {
                    unavailable: true,
                    kind: 'html'
                };
            }
            return {
                error: `HTTP ${resp.status}`
            };
        }
        return {
            html: await resp.text()
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : 'network error';
        return {
            error: message
        };
    }
}
async function fetchDeployConfig(providerId) {
    try {
        const resp = await fetch(`/api/deploy/config${deployProviderQuery(providerId)}`);
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function updateDeployConfig(input) {
    try {
        const resp = await fetch('/api/deploy/config', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) {
            const payload = await resp.json().catch(()=>null);
            throw new Error(payload?.error?.message || payload?.message || `Could not save deploy config (${resp.status})`);
        }
        return await resp.json();
    } catch (err) {
        if (err instanceof Error) throw err;
        return null;
    }
}
async function fetchCloudflarePagesZones() {
    try {
        const resp = await fetch('/api/deploy/cloudflare-pages/zones');
        if (!resp.ok) {
            const payload = await resp.json().catch(()=>null);
            throw new Error(payload?.error?.message || payload?.message || `Could not load Cloudflare zones (${resp.status})`);
        }
        return await resp.json();
    } catch (err) {
        if (err instanceof Error) throw err;
        return null;
    }
}
async function fetchProjectDeployments(projectId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/deployments`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.deployments ?? [];
    } catch  {
        return [];
    }
}
async function deployProjectFile(projectId, fileName, providerId = DEFAULT_DEPLOY_PROVIDER_ID, cloudflarePages) {
    const body = {
        fileName,
        providerId,
        ...cloudflarePages ? {
            cloudflarePages
        } : {}
    };
    const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/deploy`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!resp.ok) {
        const payload = await resp.json().catch(()=>null);
        throw new Error(payload?.error?.message || payload?.message || `Deploy failed (${resp.status})`);
    }
    return await resp.json();
}
async function checkDeploymentLink(projectId, deploymentId) {
    const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/deployments/${encodeURIComponent(deploymentId)}/check-link`, {
        method: 'POST'
    });
    if (!resp.ok) {
        const payload = await resp.json().catch(()=>null);
        throw new Error(payload?.error?.message || payload?.message || `Link check failed (${resp.status})`);
    }
    return await resp.json();
}
async function createSocialSharePayload(input) {
    const resp = await fetch('/api/social-share', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(input)
    });
    if (!resp.ok) {
        const payload = await resp.json().catch(()=>null);
        throw new Error(payload?.error?.message || payload?.message || `Share payload failed (${resp.status})`);
    }
    return await resp.json();
}
async function fetchProjectFiles(projectId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/files`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.files ?? [];
    } catch  {
        return [];
    }
}
async function fetchProjectFolders(projectId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/folders`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.folders ?? [];
    } catch  {
        return [];
    }
}
async function createProjectFolder(projectId, name) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/folders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.folder ?? null;
    } catch  {
        return null;
    }
}
async function deleteProjectFolder(projectId, folderPath) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/folders`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: folderPath
            })
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function fetchLiveArtifacts(projectId) {
    try {
        const resp = await fetch(`/api/live-artifacts?projectId=${encodeURIComponent(projectId)}`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.liveArtifacts ?? json.artifacts ?? [];
    } catch  {
        return [];
    }
}
async function fetchLiveArtifact(projectId, artifactId) {
    try {
        const resp = await fetch(liveArtifactDetailUrl(projectId, artifactId));
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.liveArtifact ?? json.artifact ?? null;
    } catch  {
        return null;
    }
}
class LiveArtifactRefreshError extends Error {
    status;
    code;
    constructor(message, status, code){
        super(message), this.status = status, this.code = code;
        this.name = 'LiveArtifactRefreshError';
    }
}
async function refreshLiveArtifact(projectId, artifactId) {
    let resp;
    try {
        resp = await fetch(`/api/live-artifacts/${encodeURIComponent(artifactId)}/refresh?projectId=${encodeURIComponent(projectId)}`, {
            method: 'POST'
        });
    } catch (error) {
        throw new LiveArtifactRefreshError(error instanceof Error ? error.message : 'Refresh request failed.', 0);
    }
    if (!resp.ok) {
        const errorBody = await readApiErrorBody(resp);
        throw new LiveArtifactRefreshError(errorBody.message, resp.status, errorBody.code);
    }
    return await resp.json();
}
async function fetchLiveArtifactRefreshes(projectId, artifactId) {
    try {
        const resp = await fetch(`/api/live-artifacts/${encodeURIComponent(artifactId)}/refreshes?projectId=${encodeURIComponent(projectId)}`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.refreshes ?? [];
    } catch  {
        return [];
    }
}
async function updateLiveArtifact(projectId, artifactId, input) {
    let resp;
    try {
        resp = await fetch(`/api/live-artifacts/${encodeURIComponent(artifactId)}?projectId=${encodeURIComponent(projectId)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
    } catch (error) {
        throw new LiveArtifactRefreshError(error instanceof Error ? error.message : 'Update request failed.', 0);
    }
    if (!resp.ok) {
        const errorBody = await readApiErrorBody(resp);
        throw new LiveArtifactRefreshError(errorBody.message, resp.status, errorBody.code);
    }
    const json = await resp.json();
    const artifact = json.liveArtifact ?? json.artifact;
    if (!artifact) throw new LiveArtifactRefreshError('Update response did not include a live artifact.', resp.status);
    return artifact;
}
async function deleteLiveArtifact(projectId, artifactId) {
    try {
        const resp = await fetch(`/api/live-artifacts/${encodeURIComponent(artifactId)}?projectId=${encodeURIComponent(projectId)}`, {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function readApiErrorBody(resp) {
    try {
        const json = await resp.json();
        const message = json.error?.message ?? json.message;
        return {
            message: typeof message === 'string' && message.length > 0 ? message : `Request failed (${resp.status}).`,
            ...typeof json.error?.code === 'string' ? {
                code: json.error.code
            } : {}
        };
    } catch  {
        return {
            message: `Request failed (${resp.status}).`
        };
    }
}
function liveArtifactDetailUrl(projectId, artifactId) {
    return `/api/live-artifacts/${encodeURIComponent(artifactId)}?projectId=${encodeURIComponent(projectId)}`;
}
function liveArtifactPreviewUrl(projectId, artifactId, variant = 'rendered') {
    const variantQuery = variant === 'rendered' ? '' : `&variant=${encodeURIComponent(variant)}`;
    return `/api/live-artifacts/${encodeURIComponent(artifactId)}/preview?projectId=${encodeURIComponent(projectId)}${variantQuery}`;
}
async function fetchLiveArtifactCode(projectId, artifactId, variant) {
    try {
        const resp = await fetch(liveArtifactPreviewUrl(projectId, artifactId, variant), {
            cache: 'no-store'
        });
        if (!resp.ok) return null;
        return await resp.text();
    } catch  {
        return null;
    }
}
function projectFileUrl(projectId, name) {
    return projectRawUrl(projectId, name);
}
async function fetchProjectFilePreview(projectId, name) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/files/${encodeURIComponent(name)}/preview`);
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function fetchProjectFileText(projectId, name, options) {
    const url = projectFileUrl(projectId, name);
    const cacheBustKey = options?.cacheBustKey;
    const requestUrl = cacheBustKey == null ? url : `${url}${url.includes('?') ? '&' : '?'}cacheBust=${encodeURIComponent(String(cacheBustKey))}`;
    const init = {};
    if (options?.cache) init.cache = options.cache;
    try {
        const resp = await fetch(requestUrl, init);
        if (!resp.ok) {
            console.warn('[fetchProjectFileText] failed:', {
                name,
                projectId,
                status: resp.status,
                statusText: resp.statusText,
                url: requestUrl
            });
            return null;
        }
        return await resp.text();
    } catch (err) {
        console.warn('[fetchProjectFileText] failed:', {
            error: err,
            name,
            projectId,
            url: requestUrl
        });
        return null;
    }
}
async function fetchPreviewComments(projectId, conversationId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}/comments`);
        if (!resp.ok) return [];
        const json = await resp.json();
        return json.comments ?? [];
    } catch  {
        return [];
    }
}
async function upsertPreviewComment(projectId, conversationId, input) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.comment ?? null;
    } catch  {
        return null;
    }
}
async function patchPreviewCommentStatus(projectId, conversationId, commentId, status) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}/comments/${encodeURIComponent(commentId)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.comment ?? null;
    } catch  {
        return null;
    }
}
async function deletePreviewComment(projectId, conversationId, commentId) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/conversations/${encodeURIComponent(conversationId)}/comments/${encodeURIComponent(commentId)}`, {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function writeProjectTextFile(projectId, name, content, options) {
    const result = await writeProjectTextFileDetailed(projectId, name, content, options);
    return result.ok ? result.file : null;
}
async function writeProjectTextFileDetailed(projectId, name, content, options) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/files`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                content,
                artifactManifest: options?.artifactManifest
            })
        });
        if (!resp.ok) {
            const body = await readApiErrorBody(resp);
            return {
                ok: false,
                status: resp.status,
                code: body.code,
                message: body.message || resp.statusText || 'Save failed'
            };
        }
        const json = await resp.json();
        return {
            ok: true,
            file: json.file
        };
    } catch  {
        return {
            ok: false,
            message: 'Network error while saving the file'
        };
    }
}
async function writeProjectBase64File(projectId, name, base64) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/files`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                content: base64,
                encoding: 'base64'
            })
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.file;
    } catch  {
        return null;
    }
}
async function uploadProjectFile(projectId, file, desiredName) {
    try {
        const form = new FormData();
        form.append('file', file);
        if (desiredName) form.append('name', desiredName);
        const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/files`, {
            method: 'POST',
            body: form
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        return json.file;
    } catch  {
        return null;
    }
}
// Multi-file project upload used by the chat composer's paste / drop /
// picker. Each file lands flat in the project folder; the response is
// reshaped into ChatAttachments so the composer can stage them without a
// follow-up listFiles round-trip.
const PROJECT_UPLOAD_BATCH_SIZE = 12;
async function uploadProjectFiles(projectId, files, dir) {
    if (files.length === 0) return {
        uploaded: [],
        failed: []
    };
    const uploaded = [];
    const failed = [];
    let error;
    const targetDir = dir?.trim() ?? '';
    for(let i = 0; i < files.length; i += PROJECT_UPLOAD_BATCH_SIZE){
        const batch = files.slice(i, i + PROJECT_UPLOAD_BATCH_SIZE);
        const remaining = files.slice(i + PROJECT_UPLOAD_BATCH_SIZE);
        const form = new FormData();
        // The `dir` field MUST be appended before the file parts: the daemon's
        // multer destination resolver reads req.body.dir as each file streams in,
        // and busboy only exposes fields parsed earlier in the multipart body.
        if (targetDir) form.append('dir', targetDir);
        for (const f of batch)form.append('files', f);
        try {
            const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/upload`, {
                method: 'POST',
                body: form
            });
            if (!resp.ok) {
                const payload = await resp.json().catch(()=>null);
                error = payload?.error ?? `upload failed (${resp.status})`;
                for (const f of batch){
                    failed.push({
                        name: f.name,
                        code: payload?.code,
                        error: error
                    });
                }
                for (const f of remaining){
                    failed.push({
                        name: f.name,
                        code: payload?.code,
                        error: error
                    });
                }
                break;
            }
            const json = await resp.json();
            const responseFiles = json.files ?? [];
            uploaded.push(...responseFiles.map((f)=>({
                    path: f.path,
                    name: f.originalName ?? f.name,
                    kind: looksLikeImage(f.name) ? 'image' : 'file',
                    size: f.size
                })));
            // Server preserves request order; any dropped files are unmatched at the batch tail.
            if (responseFiles.length < batch.length) {
                error ??= 'some files could not be stored';
                for (const f of batch.slice(responseFiles.length)){
                    failed.push({
                        name: f.name,
                        error: error ?? 'some files could not be stored'
                    });
                }
            }
        } catch  {
            error = 'upload request failed';
            for (const f of batch){
                failed.push({
                    name: f.name,
                    error
                });
            }
            for (const f of remaining){
                failed.push({
                    name: f.name,
                    error
                });
            }
            break;
        }
    }
    return {
        uploaded,
        failed,
        error
    };
}
function projectRawUrl(projectId, filePath) {
    // Encode each path segment individually so a slash inside the file
    // path stays a path separator, not %2F.
    const safePath = filePath.split('/').map((seg)=>encodeURIComponent(seg)).join('/');
    return `/api/projects/${encodeURIComponent(projectId)}/raw/${safePath}`;
}
function looksLikeImage(name) {
    return /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(name);
}
async function deleteProjectFile(projectId, name) {
    try {
        const resp = await fetch(projectRawUrl(projectId, name), {
            method: 'DELETE'
        });
        return resp.ok;
    } catch  {
        return false;
    }
}
async function renameProjectFile(projectId, from, to) {
    const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/files/rename`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            to
        })
    });
    if (!resp.ok) {
        const errorBody = await readApiErrorBody(resp);
        throw new Error(errorBody.message);
    }
    return await resp.json();
}
async function openFolderDialog() {
    try {
        const resp = await fetch('/api/dialog/open-folder', {
            method: 'POST'
        });
        if (!resp.ok) return null;
        const data = await resp.json();
        return typeof data.path === 'string' && data.path.length > 0 ? data.path : null;
    } catch  {
        return null;
    }
}
async function dirExists(path) {
    try {
        const resp = await fetch('/api/dir-exists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path
            })
        });
        if (!resp.ok) return true; // can't tell → don't false-flag
        const data = await resp.json();
        return data?.exists !== false;
    } catch  {
        return true; // daemon unreachable → don't false-flag
    }
}
async function fetchRecentLinkedDirs() {
    try {
        // `/api/recent-dirs` returns the list pruned to folders that still exist
        // on disk (and persists the pruning), so deleted folders never linger.
        const resp = await fetch('/api/recent-dirs');
        if (!resp.ok) return [];
        const data = await resp.json();
        const list = data?.dirs;
        return Array.isArray(list) ? list.filter((d)=>typeof d === 'string') : [];
    } catch  {
        return [];
    }
}
async function pushRecentLinkedDir(dir) {
    const existing = await fetchRecentLinkedDirs();
    const next = [
        dir,
        ...existing.filter((d)=>d !== dir)
    ].slice(0, 5);
    try {
        await fetch('/api/app-config', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recentLinkedDirs: next
            })
        });
    } catch  {
    // Daemon offline — the picked dir still applies to this project; the
    // recents list just won't persist for next time.
    }
    return next;
}
async function replaceProjectWorkingDir(projectId, baseDir, desktopImportToken) {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (desktopImportToken) {
        headers['x-od-desktop-import-token'] = desktopImportToken;
    }
    const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/working-dir`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            baseDir
        })
    });
    if (!resp.ok) {
        const body = await readApiErrorBody(resp);
        throw new Error(body.message);
    }
    return await resp.json();
}
async function fetchHostEditors() {
    const resp = await fetch('/api/editors');
    if (!resp.ok) throw new Error(`GET /api/editors failed: ${resp.status}`);
    return await resp.json();
}
async function openProjectInEditor(projectId, editorId) {
    const resp = await fetch(`/api/projects/${encodeURIComponent(projectId)}/open-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            editorId
        })
    });
    if (!resp.ok) {
        const body = await readApiErrorBody(resp);
        throw new Error(body.message);
    }
    return await resp.json();
}
async function fetchDesignSystemPreview(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/preview`);
        if (!resp.ok) return null;
        return await resp.text();
    } catch  {
        return null;
    }
}
async function fetchDesignSystemShowcase(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}/showcase`);
        if (!resp.ok) return null;
        return await resp.text();
    } catch  {
        return null;
    }
}
async function fetchPluginPreviewHtml(id) {
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(id)}/preview`);
        if (!resp.ok) {
            if (resp.status === 404) return {
                unavailable: true,
                kind: 'html'
            };
            return {
                error: `HTTP ${resp.status}`
            };
        }
        return {
            html: await resp.text()
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : 'network error';
        return {
            error: message
        };
    }
}
async function fetchPluginExampleHtml(pluginId, stem) {
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(pluginId)}/example/${encodeURIComponent(stem)}`);
        if (!resp.ok) {
            if (resp.status === 404) return {
                unavailable: true,
                kind: 'html'
            };
            return {
                error: `HTTP ${resp.status}`
            };
        }
        return {
            html: await resp.text()
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : 'network error';
        return {
            error: message
        };
    }
}
async function fetchPluginAssetText(pluginId, relpath) {
    try {
        const resp = await fetch(`/api/plugins/${encodeURIComponent(pluginId)}/asset/${encodePluginAssetPath(relpath)}`);
        if (!resp.ok) return null;
        return await resp.text();
    } catch  {
        return null;
    }
}
function encodePluginAssetPath(relpath) {
    return relpath.replace(/^\.\//, '').split(/[\\/]/).filter(Boolean).map((seg)=>encodeURIComponent(seg)).join('/');
}
async function installSkill(input) {
    try {
        const resp = await fetch('/api/skills/install', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        const json = await resp.json();
        if (!resp.ok) return {
            error: json.error ?? 'Install failed'
        };
        return json;
    } catch  {
        return {
            error: 'Network error'
        };
    }
}
async function uninstallSkill(id) {
    try {
        const resp = await fetch(`/api/skills/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        const json = await resp.json();
        if (!resp.ok) return {
            error: json.error ?? 'Uninstall failed'
        };
        return {
            ok: true
        };
    } catch  {
        return {
            error: 'Network error'
        };
    }
}
async function installDesignSystem(input) {
    try {
        const resp = await fetch('/api/design-systems/install', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        const json = await resp.json();
        if (!resp.ok) return {
            error: json.error ?? 'Install failed'
        };
        return json;
    } catch  {
        return {
            error: 'Network error'
        };
    }
}
async function uninstallDesignSystem(id) {
    try {
        const resp = await fetch(`/api/design-systems/${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        const json = await resp.json();
        if (!resp.ok) return {
            error: json.error ?? 'Uninstall failed'
        };
        return {
            ok: true
        };
    } catch  {
        return {
            error: 'Network error'
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/elevenlabs-voices.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchElevenLabsVoiceOptions",
    ()=>fetchElevenLabsVoiceOptions
]);
function isRecord(value) {
    return value !== null && typeof value === 'object';
}
function readString(value) {
    return typeof value === 'string' && value.trim() ? value.trim() : '';
}
function readLabels(value) {
    if (!isRecord(value)) return undefined;
    const labels = {};
    for (const [key, raw] of Object.entries(value)){
        const normalized = readString(raw);
        if (normalized) labels[key] = normalized;
    }
    return Object.keys(labels).length > 0 ? labels : undefined;
}
async function readLookupErrorDetail(response) {
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('json')) {
        try {
            const payload = await response.clone().json();
            if (isRecord(payload)) {
                const message = readString(payload.error) || readString(payload.message) || readString(payload.detail);
                if (message) return message;
            }
        } catch  {
        // Fall through to the raw body text below.
        }
    }
    try {
        return readString(await response.text());
    } catch  {
        return '';
    }
}
function formatLookupError(response, detail) {
    const statusText = readString(response.statusText);
    const statusLabel = statusText ? `${response.status} ${statusText}` : String(response.status);
    return detail ? `ElevenLabs voice list could not be loaded (${statusLabel}): ${detail}` : `ElevenLabs voice list could not be loaded (${statusLabel})`;
}
function normalizeVoice(value) {
    if (!isRecord(value)) return null;
    const voiceId = readString(value.voiceId);
    const name = readString(value.name);
    if (!voiceId || !name) return null;
    const category = readString(value.category);
    const labels = readLabels(value.labels);
    return {
        voiceId,
        name,
        ...category ? {
            category
        } : {},
        ...labels ? {
            labels
        } : {}
    };
}
async function fetchElevenLabsVoiceOptions(signal) {
    const response = await fetch('/api/media/providers/elevenlabs/voices?limit=100', {
        signal
    });
    if (!response.ok) {
        const detail = await readLookupErrorDetail(response);
        throw new Error(formatLookupError(response, detail));
    }
    const payload = await response.json();
    const rawVoices = isRecord(payload) && Array.isArray(payload.voices) ? payload.voices : [];
    return rawVoices.map((voice)=>normalizeVoice(voice)).filter((voice)=>voice !== null);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/sse.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSseFrame",
    ()=>parseSseFrame
]);
function parseSseFrame(frame) {
    const lines = frame.split('\n');
    const comments = [];
    let event = 'message';
    let id;
    const dataLines = [];
    for (const rawLine of lines){
        const line = rawLine.endsWith('\r') ? rawLine.slice(0, -1) : rawLine;
        if (line.startsWith(':')) {
            comments.push(line.slice(1).trimStart());
        } else if (line.startsWith('event: ')) {
            event = line.slice(7).trim();
        } else if (line.startsWith('id: ')) {
            id = line.slice(4).trim();
        } else if (line.startsWith('data: ')) {
            dataLines.push(line.slice(6));
        }
    }
    if (dataLines.length === 0) {
        if (comments.length > 0) {
            return {
                kind: 'comment',
                comment: comments.join('\n')
            };
        }
        return {
            kind: 'empty'
        };
    }
    try {
        return {
            kind: 'event',
            event,
            data: JSON.parse(dataLines.join('\n')),
            ...id ? {
                id
            } : {}
        };
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Daemon provider — fetch-based SSE client for /api/runs. The daemon can
 * emit three event streams depending on the agent's streamFormat:
 *   - 'agent'   : typed events emitted by Claude Code's stream-json parser
 *                 (status, text_delta, thinking_delta, tool_use, tool_result,
 *                 usage, raw). We forward these to the UI as AgentEvent items.
 *   - 'stdout'  : plain chunks from other CLIs. We wrap them in a single
 *                 rolling 'text' event.
 *   - 'stderr'  : incidental stderr. Shown only when the process exits
 *                 non-zero (tail appended to the error message).
 */ __turbopack_context__.s([
    "RUNS_CHANGED_EVENT",
    ()=>RUNS_CHANGED_EVENT,
    "buildDaemonTranscript",
    ()=>buildDaemonTranscript,
    "cancelVelaLogin",
    ()=>cancelVelaLogin,
    "fetchAmrModels",
    ()=>fetchAmrModels,
    "fetchChatRunStatus",
    ()=>fetchChatRunStatus,
    "fetchVelaLoginStatus",
    ()=>fetchVelaLoginStatus,
    "latestUserPromptFromHistory",
    ()=>latestUserPromptFromHistory,
    "launchAntigravityOauth",
    ()=>launchAntigravityOauth,
    "listActiveChatRuns",
    ()=>listActiveChatRuns,
    "listProjectRuns",
    ()=>listProjectRuns,
    "reattachDaemonRun",
    ()=>reattachDaemonRun,
    "reportChatRunFeedback",
    ()=>reportChatRunFeedback,
    "sanitizePriorAssistantTurnForTranscript",
    ()=>sanitizePriorAssistantTurnForTranscript,
    "saveArtifact",
    ()=>saveArtifact,
    "startVelaLogin",
    ()=>startVelaLogin,
    "streamViaDaemon",
    ()=>streamViaDaemon,
    "velaLogout",
    ()=>velaLogout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$sse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/sse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$strip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/strip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$stuck$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/observability/stuck-run.ts [app-client] (ecmascript)");
/**
 * Returns the front-end carrier that's about to send this request:
 * - 'desktop' when running inside the Electron shell
 * - 'web' when running in a regular browser
 * - 'unknown' in non-browser test environments (jsdom without a UA)
 *
 * The daemon uses this to label telemetry traces. Cheap, called once per
 * run so caching isn't worth the complexity.
 */ function detectClientType() {
    if (typeof navigator === 'undefined') return 'unknown';
    const ua = navigator.userAgent ?? '';
    if (ua.includes('Electron/')) return 'desktop';
    if (ua) return 'web';
    return 'unknown';
}
;
;
;
const MAX_TRANSCRIPT_MESSAGE_CHARS = 12_000;
const LARGE_TOOL_RESULT_CHARS = 8_000;
const HIGH_INPUT_TOKEN_WARNING_THRESHOLD = 200_000;
function latestUserPromptFromHistory(history) {
    for(let i = history.length - 1; i >= 0; i -= 1){
        const message = history[i];
        if (message?.role === 'user') return message.content;
    }
    return '';
}
function truncateForTranscript(content) {
    if (content.length <= MAX_TRANSCRIPT_MESSAGE_CHARS) return content;
    const omitted = content.length - MAX_TRANSCRIPT_MESSAGE_CHARS;
    return `${content.slice(0, MAX_TRANSCRIPT_MESSAGE_CHARS)}\n\n[Open Design truncated ${omitted} chars from this prior message before sending it to the agent. Full content remains in persisted history.]`;
}
function escapeTranscriptRoleDelimiters(content) {
    return content.replace(/^(## (?:user|assistant)[ \t]*)(\r?)$/gm, '\\$1$2');
}
function compactInput(input) {
    if (typeof input === 'string') return input;
    try {
        return JSON.stringify(input);
    } catch  {
        return String(input);
    }
}
function buildPriorRunContextWarning(history) {
    let highestInputTokens = 0;
    let largeToolResults = 0;
    let sawAgentBrowserCoreDump = false;
    for (const message of history){
        for (const event of message.events ?? []){
            if (event.kind === 'usage' && typeof event.inputTokens === 'number') {
                highestInputTokens = Math.max(highestInputTokens, event.inputTokens);
            }
            if (event.kind === 'tool_result') {
                if (event.content.length > LARGE_TOOL_RESULT_CHARS) largeToolResults += 1;
                if (event.content.includes('agent-browser skills get core') || event.content.includes('Agent Browser Core') || event.content.includes('name: core')) {
                    sawAgentBrowserCoreDump = true;
                }
            }
            if (event.kind === 'tool_use') {
                const input = compactInput(event.input);
                if (input.includes('agent-browser skills get core')) {
                    sawAgentBrowserCoreDump = true;
                }
            }
        }
    }
    const notes = [];
    if (highestInputTokens >= HIGH_INPUT_TOKEN_WARNING_THRESHOLD) {
        notes.push(`a previous run reported ${highestInputTokens} input tokens`);
    }
    if (largeToolResults > 0) {
        notes.push(`${largeToolResults} large prior tool result${largeToolResults === 1 ? '' : 's'} exist only in persisted event history`);
    }
    if (sawAgentBrowserCoreDump) {
        notes.push('agent-browser documentation output was seen earlier; do not replay it into this turn');
    }
    if (notes.length === 0) return null;
    return [
        '## context warning',
        `Open Design detected ${notes.join(', ')}.`,
        'Keep this turn compact: summarize prior tool output, read large references from temp files, and quote only task-relevant lines.'
    ].join('\n');
}
function scopeHistoryToAgent(history, targetAgentId) {
    if (!targetAgentId) return history;
    for(let i = history.length - 1; i >= 0; i -= 1){
        const message = history[i];
        if (message?.role === 'assistant' && message.agentId && message.agentId !== targetAgentId) {
            return history.slice(i + 1);
        }
    }
    return history;
}
function sanitizePriorAssistantTurnForTranscript(content, persistedArtifactFiles = []) {
    let sanitized = content.replace(// `\1` backreference keeps the open/close tag names matched so we never
    // splice across a `<question-form>…</ask-question>` mismatch.
    /<(question-form|ask-question)\b[^>]*>[\s\S]*?<\/\1>/g, '[question-form was emitted here on a prior turn; the user already answered, see their reply below.]');
    // Strip ```json (or plain ```) fenced blocks whose body matches the
    // form schema shape — `"questions": [` is the strongest tell. A
    // generic JSON snippet without that key (e.g. an API response the
    // agent shared) is left intact.
    sanitized = sanitized.replace(/```(?:json)?\s*\n([\s\S]*?)\n```/g, (match, body)=>{
        if (/"questions"\s*:\s*\[/.test(body)) {
            return '[form schema was echoed here on a prior turn; stripped to avoid a loop.]';
        }
        return match;
    });
    // Replace prior-turn `<artifact>` HTML with a one-line summary — but ONLY
    // for artifacts whose save to the project files is confirmed by the
    // message's producedFiles record. persistArtifact has refusal and
    // write-failure branches; on those paths the transcript copy is the only
    // surviving artifact body, so an unconfirmed block stays verbatim (the
    // 12K truncation below still bounds it) and a follow-up turn can repair it.
    // For confirmed saves the agent reads/edits the file from disk, never from
    // this transcript copy, so re-sending the whole document each turn is pure
    // waste — the summary keeps identifier/title/type plus the saved file name.
    // Runs before truncateForTranscript so the summarized message no longer
    // trips the 12K cap. Uses markdown-aware detection so a literal
    // `<artifact>` recited in a code fence survives.
    sanitized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$strip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeArtifactsForTranscript"])(sanitized, persistedArtifactFiles);
    return sanitized;
}
// producedFiles → the persistence evidence summarizeArtifactsForTranscript
// matches artifact blocks against. producedFiles is the whole per-turn file
// diff — tool-written files included — so a name collision with an unrelated
// same-turn file must not count as proof the <artifact> body was saved. Only
// artifact-originated saves qualify: persistArtifact always writes an explicit
// (non-inferred) manifest, whereas tool-written files surface with no manifest
// or a daemon-inferred one (`metadata.inferred === true`). Within that
// narrowed set, the manifest identifier is the strongest link (it survives
// `-2`/`-3` collision renames); the file name is the fallback for artifact
// saves whose manifest predates identifier metadata.
function persistedArtifactFilesOf(message) {
    return (message.producedFiles ?? []).filter((file)=>file.artifactManifest && file.artifactManifest.metadata?.inferred !== true).map((file)=>{
        const identifier = file.artifactManifest?.metadata?.identifier;
        return {
            name: file.name,
            identifier: typeof identifier === 'string' && identifier ? identifier : undefined
        };
    });
}
function buildDaemonTranscript(history, targetAgentId) {
    const scopedHistory = scopeHistoryToAgent(history, targetAgentId);
    const transcript = scopedHistory.map((m)=>{
        const trimmed = m.content.trim();
        const sanitized = m.role === 'assistant' ? sanitizePriorAssistantTurnForTranscript(trimmed, persistedArtifactFilesOf(m)) : trimmed;
        return `## ${m.role}\n${escapeTranscriptRoleDelimiters(truncateForTranscript(sanitized))}`;
    }).join('\n\n');
    const warning = buildPriorRunContextWarning(scopedHistory);
    return warning ? `${warning}\n\n${transcript}` : transcript;
}
const RUNS_CHANGED_EVENT = 'open-design:runs-changed';
function notifyRunsChanged() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new Event(RUNS_CHANGED_EVENT));
}
function daemonSseErrorMessage(data) {
    const formattedOpenCodeError = formatOpenCodeSessionError(data.error?.details);
    if (formattedOpenCodeError) return formattedOpenCodeError;
    const message = String(data.error?.message ?? data.message ?? 'daemon error');
    const legacyOpenCodeError = formatLegacyOpenCodeSessionError(message);
    if (legacyOpenCodeError) return legacyOpenCodeError;
    const detail = data.error?.details && typeof data.error.details === 'object' && !Array.isArray(data.error.details) && typeof data.error.details.detail === 'string' ? data.error.details.detail : null;
    if (!detail || detail === message || message.includes(detail)) return message;
    return `${message}\n${detail}`;
}
function daemonSseError(data) {
    const error = new Error(daemonSseErrorMessage(data));
    if (data.error?.code) error.code = data.error.code;
    if (data.error?.details !== undefined) error.details = data.error.details;
    return error;
}
function shouldSuppressLifecycleExitFallback(agentId, exitCode, exitSignal, stderrTail) {
    if (exitCode !== 130 || exitSignal) return false;
    if (agentId === 'amr') return true;
    const normalizedStderr = stderrTail.toLowerCase();
    return normalizedStderr.includes('opencode server listening') || normalizedStderr.includes('opencode_server_password');
}
const AMR_OPENCODE_INCOMPLETE_MESSAGE = 'AMR/OpenCode started, but the run did not complete. Please retry or check the run details for the session stream error.';
function isRecord(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function readStringField(record, key) {
    const value = record?.[key];
    return typeof value === 'string' && value.trim() ? value.trim() : null;
}
function readNumberField(record, key) {
    const value = record?.[key];
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
}
function readBooleanField(record, key) {
    const value = record?.[key];
    return typeof value === 'boolean' ? value : null;
}
function inferOpenCodeRetryable(statusCode) {
    if (statusCode === null) return null;
    return statusCode === 429 || statusCode >= 500;
}
function normalizeOpenCodeSessionErrorDetails(value) {
    if (!isRecord(value) || value.kind !== 'opencode_session_error') return null;
    const statusCode = readNumberField(value, 'statusCode');
    return {
        source: readStringField(value, 'source'),
        code: readStringField(value, 'code'),
        message: readStringField(value, 'message'),
        statusCode,
        retryable: readBooleanField(value, 'retryable') ?? inferOpenCodeRetryable(statusCode),
        suggestion: readStringField(value, 'suggestion'),
        responseBodyPreview: readStringField(value, 'responseBodyPreview')
    };
}
function linkErrorMessageFromResponseBodyPreview(preview) {
    if (!preview) return null;
    let parsed;
    try {
        parsed = JSON.parse(preview);
    } catch  {
        return null;
    }
    const error = isRecord(parsed) && isRecord(parsed.error) ? parsed.error : null;
    return readStringField(error, 'message');
}
function retryExhaustedMessage(details) {
    const linkMessage = linkErrorMessageFromResponseBodyPreview(details.responseBodyPreview);
    if (!linkMessage) return null;
    const retryMatch = linkMessage.match(/\bRetried the upstream request\s+(\d+)\s+times\b/i);
    if (!retryMatch) return null;
    const retryCount = retryMatch[1];
    return [
        'The upstream model service is temporarily unavailable.',
        '',
        `We already retried ${retryCount} times, but the request still failed. Please retry later or switch to another model.`
    ].join('\n');
}
function formatOpenCodeSessionError(value) {
    const details = normalizeOpenCodeSessionErrorDetails(value);
    if (!details) return null;
    const statusCode = details.statusCode;
    const message = details.message;
    if (details.source === 'opencode' && details.code === 'ROLE_MARKER_HALLUCINATION') {
        return message;
    }
    if (statusCode === 404) {
        return 'The model service returned 404 Not Found for the configured runtime endpoint. Check the AMR Link URL or model route.';
    }
    if (statusCode === 401 || statusCode === 403) {
        return 'AMR authentication failed. Please sign in again or refresh the runtime key.';
    }
    if (statusCode === 429) {
        return 'The model service rejected the request due to quota or rate limits. Retry later or check quota and rate limits.';
    }
    if (typeof statusCode === 'number' && statusCode >= 500) {
        const exhaustedMessage = retryExhaustedMessage(details);
        if (exhaustedMessage) return exhaustedMessage;
        return 'The upstream model provider returned a temporary error. Please retry or switch models.';
    }
    const base = message ? `OpenCode session failed: ${message}` : 'OpenCode session failed.';
    return details.suggestion ? `${base}\n${details.suggestion}` : base;
}
function extractBalancedJsonObject(text, startIndex) {
    let depth = 0;
    let inString = false;
    let escaped = false;
    for(let i = startIndex; i < text.length; i += 1){
        const char = text[i];
        if (inString) {
            if (escaped) {
                escaped = false;
            } else if (char === '\\') {
                escaped = true;
            } else if (char === '"') {
                inString = false;
            }
            continue;
        }
        if (char === '"') {
            inString = true;
            continue;
        }
        if (char === '{') {
            depth += 1;
        } else if (char === '}') {
            depth -= 1;
            if (depth === 0) return text.slice(startIndex, i + 1);
        }
    }
    return null;
}
function legacyOpenCodeSessionErrorDetails(text) {
    const marker = 'opencode session error:';
    const markerIndex = text.toLowerCase().indexOf(marker);
    if (markerIndex === -1) return null;
    const jsonStart = text.indexOf('{', markerIndex + marker.length);
    if (jsonStart === -1) return null;
    const jsonText = extractBalancedJsonObject(text, jsonStart);
    if (!jsonText) return null;
    let parsed;
    try {
        parsed = JSON.parse(jsonText);
    } catch  {
        return null;
    }
    if (!isRecord(parsed)) return null;
    const error = isRecord(parsed.error) ? parsed.error : null;
    const data = isRecord(error?.data) ? error.data : null;
    const statusCode = readNumberField(data, 'statusCode');
    const retryable = readBooleanField(data, 'isRetryable') ?? inferOpenCodeRetryable(statusCode);
    return {
        source: null,
        code: null,
        message: readStringField(data, 'message') ?? readStringField(error, 'message'),
        statusCode,
        retryable,
        suggestion: null,
        responseBodyPreview: readStringField(data, 'responseBodyPreview') ?? readStringField(data, 'responseBody')
    };
}
function formatLegacyOpenCodeSessionError(text) {
    const details = legacyOpenCodeSessionErrorDetails(text);
    if (!details) return null;
    return formatOpenCodeSessionError({
        kind: 'opencode_session_error',
        ...details
    });
}
function isAmrOpenCodeExitFallback(agentId, stderr) {
    if (agentId === 'amr' || agentId === 'opencode') return true;
    const normalized = stderr.toLowerCase();
    return normalized.includes('opencode server listening') || normalized.includes('opencode session error:');
}
function isAmrOpenCodeBootstrapLine(line) {
    const trimmed = line.trim();
    return /^AMR run id:\s*\S+/i.test(trimmed) || /^Performing one time database migration/i.test(trimmed) || /^sqlite-migration:done$/i.test(trimmed) || /^Database migration complete\.?$/i.test(trimmed) || /^Warning:\s*OPENCODE_SERVER_PASSWORD is not set/i.test(trimmed) || /^opencode server listening on http:\/\/127\.0\.0\.1:\d+/i.test(trimmed);
}
function cleanAmrOpenCodeStderrFallback(agentId, stderr) {
    if (!isAmrOpenCodeExitFallback(agentId, stderr)) return stderr.trim();
    return stderr.split(/\r?\n/).filter((line)=>line.trim() && !isAmrOpenCodeBootstrapLine(line)).join('\n').trim();
}
async function streamViaDaemon({ agentId, history, signal, cancelSignal, handlers, projectId, conversationId, sessionMode, assistantMessageId, clientRequestId, skillId, skillIds, designSystemId, attachments, commentAttachments, model, reasoning, research, context, appliedPluginSnapshotId, mediaExecution, titleGeneration, locale, initialLastEventId, onRunCreated, onRunStatus, onRunEventId, analyticsHints }) {
    const emitRunStatus = (status)=>{
        onRunStatus?.(status);
        notifyRunsChanged();
    };
    // Local CLIs are single-turn print-mode programs, so we collapse the whole
    // chat into one string. If this becomes too noisy for long histories, the
    // fix is to only include the final user turn.
    const transcript = buildDaemonTranscript(history, agentId);
    const request = {
        agentId,
        message: transcript,
        currentPrompt: latestUserPromptFromHistory(history),
        projectId: projectId ?? null,
        conversationId: conversationId ?? null,
        sessionMode,
        assistantMessageId: assistantMessageId ?? null,
        clientRequestId: clientRequestId ?? null,
        skillId: skillId ?? null,
        skillIds: Array.isArray(skillIds) ? skillIds : [],
        designSystemId: designSystemId ?? null,
        attachments: attachments ?? [],
        commentAttachments: commentAttachments ?? [],
        model: model ?? null,
        reasoning: reasoning ?? null,
        locale,
        ...appliedPluginSnapshotId ? {
            appliedPluginSnapshotId
        } : {},
        ...context ? {
            context
        } : {},
        ...research ? {
            research
        } : {},
        ...mediaExecution ? {
            mediaExecution
        } : {},
        ...titleGeneration?.enabled ? {
            titleGeneration: {
                enabled: true
            }
        } : {},
        ...analyticsHints ? {
            analyticsHints
        } : {}
    };
    const body = JSON.stringify(request);
    try {
        const createResp = await fetch('/api/runs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Tells the daemon which front-end carrier started the run so the
                // telemetry trace can be tagged 'client:desktop' vs 'client:web'.
                // The daemon falls back to a User-Agent sniff when this header is
                // absent (e.g. third-party clients), so omitting it in tests is OK.
                'X-OD-Client': detectClientType()
            },
            body
        });
        if (!createResp.ok) {
            const text = await createResp.text().catch(()=>'');
            emitRunStatus('failed');
            handlers.onError(new Error(`daemon ${createResp.status}: ${text || 'no body'}`));
            return;
        }
        const created = await createResp.json();
        const runId = created.runId;
        onRunCreated?.(runId);
        // Start the stuck-run watchdog. trackRunProgress is called inside the
        // SSE consumer below on every event; trackRunTerminal fires when the
        // stream resolves to a terminal state (or errors out).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$stuck$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunStart"])(runId, {
            agent_id: agentId,
            project_id: projectId ?? undefined,
            conversation_id: conversationId ?? undefined,
            client_type: detectClientType()
        });
        notifyRunsChanged();
        emitRunStatus('queued');
        await consumeDaemonRun({
            agentId,
            runId,
            signal,
            cancelSignal,
            handlers,
            initialLastEventId,
            onRunStatus: emitRunStatus,
            onRunEventId
        });
    } catch (err) {
        if (err.name === 'AbortError') return;
        emitRunStatus('failed');
        handlers.onError(err instanceof Error ? err : new Error(String(err)));
    }
}
async function reattachDaemonRun(options) {
    await consumeDaemonRun({
        ...options,
        onRunStatus: (status)=>{
            options.onRunStatus?.(status);
            notifyRunsChanged();
        }
    });
}
async function fetchChatRunStatus(runId) {
    try {
        const resp = await fetch(`/api/runs/${encodeURIComponent(runId)}`);
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function launchAntigravityOauth() {
    try {
        const resp = await fetch('/api/agents/antigravity/oauth-launch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{}'
        });
        const body = await resp.json().catch(()=>null);
        if (!resp.ok) {
            return {
                ok: false,
                error: body?.error ?? `daemon returned ${resp.status} ${resp.statusText}`
            };
        }
        return body ?? {
            ok: true
        };
    } catch (err) {
        return {
            ok: false,
            error: err instanceof Error ? err.message : String(err)
        };
    }
}
async function fetchVelaLoginStatus() {
    try {
        const resp = await fetch('/api/integrations/vela/status');
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function fetchAmrModels() {
    try {
        const resp = await fetch('/api/amr/models', {
            cache: 'no-store'
        });
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
async function startVelaLogin(attribution, odDeviceId) {
    try {
        const loginAttribution = attribution && odDeviceId ? {
            ...attribution,
            odDeviceId
        } : attribution;
        const resp = await fetch('/api/integrations/vela/login', {
            method: 'POST',
            headers: loginAttribution ? {
                'Content-Type': 'application/json'
            } : undefined,
            body: loginAttribution ? JSON.stringify({
                attribution: loginAttribution
            }) : undefined
        });
        if (resp.ok) {
            const body = await resp.json();
            return {
                ok: true,
                status: resp.status,
                pid: body.pid
            };
        }
        const body = await resp.json().catch(()=>null);
        return {
            ok: false,
            status: resp.status,
            alreadyRunning: resp.status === 409,
            error: body?.error ?? ''
        };
    } catch (err) {
        return {
            ok: false,
            status: 0,
            error: err instanceof Error ? err.message : String(err)
        };
    }
}
async function cancelVelaLogin() {
    try {
        const resp = await fetch('/api/integrations/vela/login/cancel', {
            method: 'POST'
        });
        if (!resp.ok) return {
            ok: false
        };
        const body = await resp.json().catch(()=>null);
        return {
            ok: true,
            canceled: body?.canceled
        };
    } catch  {
        return {
            ok: false
        };
    }
}
async function velaLogout() {
    try {
        const resp = await fetch('/api/integrations/vela/logout', {
            method: 'POST'
        });
        return {
            ok: resp.ok
        };
    } catch  {
        return {
            ok: false
        };
    }
}
async function reportChatRunFeedback(req) {
    try {
        await fetch(`/api/runs/${encodeURIComponent(req.runId)}/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        });
    } catch  {
    // Best-effort.
    }
}
async function listActiveChatRuns(projectId, conversationId) {
    try {
        const qs = new URLSearchParams({
            projectId,
            conversationId,
            status: 'active'
        });
        const resp = await fetch(`/api/runs?${qs.toString()}`);
        if (!resp.ok) return [];
        const body = await resp.json();
        return body.runs ?? [];
    } catch  {
        return [];
    }
}
async function listProjectRuns() {
    try {
        const resp = await fetch('/api/runs');
        if (!resp.ok) return [];
        const body = await resp.json();
        return body.runs ?? [];
    } catch  {
        return [];
    }
}
async function consumeDaemonRun({ agentId, runId, signal, cancelSignal, handlers, initialLastEventId, onRunStatus, onRunEventId }) {
    let acc = '';
    let stderrBuf = '';
    let exitCode = null;
    let exitSignal = null;
    let endStatus = null;
    let pendingStructuredError = null;
    // Tracks whether the server explicitly declared `status: 'succeeded'` in
    // the SSE end payload (or via the fallback run-status fetch). Distinct
    // from `endStatus === 'succeeded'`, which can be a local fallback when
    // the SSE end event omits or sends an invalid `status` field. Only the
    // explicit declaration is allowed to bypass the exit-code/signal safety
    // net below — a missing-status fallback keeps the old behavior so a
    // failure response with `{code:1}` or `{code:null,signal:"SIGTERM"}` and
    // no `status` field still surfaces an error banner.
    let serverDeclaredSuccess = false;
    // Set when the daemon reports this terminal failure can be recovered by
    // resuming the agent's CLI session (transient upstream drop / inactivity on
    // a session-resuming runtime). Carried onto the surfaced error so the chat
    // can offer a Continue affordance. See ChatRunStatusResponse.resumable.
    let endResumable = false;
    let lastEventId = initialLastEventId ?? null;
    let canceled = false;
    const cancelRun = ()=>{
        if (canceled) return;
        canceled = true;
        void fetch(`/api/runs/${encodeURIComponent(runId)}/cancel`, {
            method: 'POST'
        }).catch(()=>{});
    };
    cancelSignal?.addEventListener('abort', cancelRun, {
        once: true
    });
    try {
        if (cancelSignal?.aborted) {
            cancelRun();
            return;
        }
        for(let reconnects = 0; endStatus === null && reconnects < 5;){
            const qs = lastEventId ? `?after=${encodeURIComponent(lastEventId)}` : '';
            let resp;
            try {
                resp = await fetch(`/api/runs/${encodeURIComponent(runId)}/events${qs}`, {
                    method: 'GET',
                    signal
                });
            } catch (err) {
                if (err.name === 'AbortError') throw err;
                reconnects += 1;
                continue;
            }
            if (!resp.ok || !resp.body) {
                const text = await resp.text().catch(()=>'');
                handlers.onError(new Error(`daemon ${resp.status}: ${text || 'no body'}`));
                return;
            }
            const reader = resp.body.getReader();
            const decoder = new TextDecoder();
            let buf = '';
            let sawStreamProgress = false;
            while(true){
                const { value, done } = await reader.read();
                if (done) break;
                buf += decoder.decode(value, {
                    stream: true
                });
                let idx;
                while((idx = buf.indexOf('\n\n')) !== -1){
                    const frame = buf.slice(0, idx);
                    buf = buf.slice(idx + 2);
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$sse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSseFrame"])(frame);
                    if (!parsed) continue;
                    if (parsed.kind === 'comment') {
                        sawStreamProgress = true;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$stuck$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunProgress"])(runId);
                        continue;
                    }
                    if (parsed.kind !== 'event') continue;
                    sawStreamProgress = true;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$stuck$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunProgress"])(runId);
                    if (parsed.id) {
                        lastEventId = parsed.id;
                        onRunEventId?.(parsed.id);
                    }
                    const event = parsed;
                    if (event.event === 'stdout') {
                        const chunk = String(event.data.chunk ?? '');
                        acc += chunk;
                        handlers.onDelta(chunk);
                        handlers.onAgentEvent({
                            kind: 'text',
                            text: chunk
                        });
                        continue;
                    }
                    if (event.event === 'stderr') {
                        stderrBuf += event.data.chunk ?? '';
                        continue;
                    }
                    if (event.event === 'agent') {
                        if (event.data.type === 'tool_input_delta') {
                            if (typeof event.data.id === 'string' && typeof event.data.name === 'string' && typeof event.data.delta === 'string') {
                                handlers.onToolInputDelta?.(event.data.id, event.data.name, event.data.delta);
                            }
                            continue;
                        }
                        const translated = translateAgentEvent(event.data);
                        if (!translated) continue;
                        if (translated.kind === 'text') {
                            acc += translated.text;
                            handlers.onDelta(translated.text);
                        }
                        handlers.onAgentEvent(translated);
                        continue;
                    }
                    if (event.event === 'start') {
                        const data = event.data;
                        onRunStatus?.('running');
                        handlers.onAgentEvent({
                            kind: 'status',
                            label: 'starting',
                            detail: typeof data.bin === 'string' ? data.bin : undefined
                        });
                        continue;
                    }
                    if (event.event === 'error') {
                        const data = event.data;
                        const structuredError = daemonSseError(data);
                        pendingStructuredError = structuredError;
                        // The daemon emits this error frame from the child-close handler
                        // BEFORE `finishWithRetryDecision()` runs, so a transient failure it
                        // can recover via a same-run retry is reported here first and only
                        // resolved later. `run.resumable` is also computed at that same
                        // finalize step. Read the run status ONCE to classify, and let the
                        // SSE `end` frame (always emitted on terminal) resolve in-flight
                        // runs — this has no timeout, so even a slow retry is handled:
                        //  - failed / canceled    -> surface the error now, with the
                        //    finalized `resumable` bit (set just before status flips to
                        //    failed, so a `failed` read already has it);
                        //  - status unreachable   -> surface the structured error (safe
                        //    default; never drop a real failure);
                        //  - succeeded (recovered) or still running/queued (retry in
                        //    flight) -> do NOT surface; keep consuming so the stream's
                        //    `end` frame resolves it (succeeded -> onDone; failed ->
                        //    the failure path below, carrying `end`'s resumable bit).
                        const status = await fetchChatRunStatus(runId).catch(()=>null);
                        if (status && (status.status === 'failed' || status.status === 'canceled')) {
                            onRunStatus?.('failed');
                            handlers.onError(markErrorResumable(structuredError, status.resumable === true));
                            return;
                        }
                        if (!status) {
                            onRunStatus?.('failed');
                            handlers.onError(structuredError);
                            return;
                        }
                        continue;
                    }
                    if (event.event === 'end') {
                        exitCode = typeof event.data.code === 'number' ? event.data.code : null;
                        exitSignal = typeof event.data.signal === 'string' ? event.data.signal : null;
                        if (event.data.resumable === true) endResumable = true;
                        // `serverDeclaredSuccess` records whether the server explicitly
                        // set `status: 'succeeded'` in the end payload — the local
                        // `'succeeded'` fallback below does not count and must keep
                        // hitting the exit-code/signal safety net later.
                        serverDeclaredSuccess = event.data.status === 'succeeded';
                        endStatus = isChatRunStatus(event.data.status) ? event.data.status : 'succeeded';
                        onRunStatus?.(endStatus);
                    }
                }
            }
            reconnects = sawStreamProgress ? 0 : reconnects + 1;
        }
        if (endStatus === null) {
            const status = await fetchChatRunStatus(runId);
            if (status && isChatRunStatus(status.status) && status.status !== 'queued' && status.status !== 'running') {
                endStatus = status.status;
                exitCode = status.exitCode ?? null;
                exitSignal = status.signal ?? null;
                // Fallback REST path: `status.status` is explicitly declared by the
                // daemon's run record (it passed `isChatRunStatus()` above), so an
                // explicit `'succeeded'` here is just as authoritative as the SSE
                // end-event success.
                serverDeclaredSuccess = status.status === 'succeeded';
                if (status.resumable === true) endResumable = true;
                onRunStatus?.(endStatus);
            } else {
                onRunStatus?.('failed');
                handlers.onError(new Error('daemon stream disconnected before run completed'));
                return;
            }
        }
        if (endStatus === 'canceled') {
            handlers.onDone(acc);
            return;
        }
        // Trust the server's authoritative success declaration. When the server
        // explicitly sets `status: 'succeeded'` (either in the SSE end payload
        // or via the fallback run-status fetch), the run completed cleanly even
        // if the underlying process exited via a signal — some agents (e.g.
        // ACP agents like Devin for Terminal) intentionally exit via SIGTERM
        // after a clean prompt completion because they don't shut down on
        // `stdin.end()`. The signal/non-zero-code safety net is bypassed only
        // for that explicit declaration; a missing/invalid `status` from a
        // compatible or older daemon still falls back to `endStatus =
        // 'succeeded'` for the run-status surface but must keep the safety net
        // intact so a real failure response like `{code:1}` or
        // `{code:null,signal:"SIGTERM"}` without `status` still surfaces an
        // error banner.
        const looksLikeFailure = endStatus === 'failed' || !serverDeclaredSuccess && (exitSignal || exitCode !== null && exitCode !== 0);
        if (looksLikeFailure) {
            if (pendingStructuredError) {
                handlers.onError(markErrorResumable(pendingStructuredError, endResumable));
                return;
            }
            if (shouldSuppressLifecycleExitFallback(agentId, exitCode, exitSignal, stderrBuf)) {
                handlers.onDone(acc);
                return;
            }
            const cleanedStderr = cleanAmrOpenCodeStderrFallback(agentId, stderrBuf);
            const formattedOpenCodeError = formatLegacyOpenCodeSessionError(cleanedStderr);
            const tail = (formattedOpenCodeError ?? cleanedStderr).trim().slice(-400);
            const fallbackTail = tail || (isAmrOpenCodeExitFallback(agentId, stderrBuf) ? AMR_OPENCODE_INCOMPLETE_MESSAGE : '');
            handlers.onError(markErrorResumable(new Error(`agent exited with ${exitSignal ? `signal ${exitSignal}` : `code ${exitCode}`}${fallbackTail ? `\n${fallbackTail}` : ''}`), endResumable));
            return;
        }
        handlers.onDone(acc);
    } finally{
        cancelSignal?.removeEventListener('abort', cancelRun);
        // Settle the stuck-run watchdog with whatever terminal state we
        // resolved. If the watchdog was never armed (reattach paths that
        // hit the daemon for an already-finished run), trackRunTerminal
        // is a no-op for unknown runIds.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$observability$2f$stuck$2d$run$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunTerminal"])(runId, endStatus ?? (canceled ? 'canceled' : 'unknown'));
    }
}
function isChatRunStatus(value) {
    return value === 'queued' || value === 'running' || value === 'succeeded' || value === 'failed' || value === 'canceled';
}
/** Tag an error surfaced to the chat with whether the failed run can be
 *  resumed (continued from its existing CLI session). Only stamps the property
 *  when true so non-resumable failures stay undefined. */ function markErrorResumable(err, resumable) {
    if (resumable) err.resumable = true;
    return err;
}
function normalizeToolInput(input) {
    if (input == null || typeof input !== 'object') return input;
    const obj = input;
    if ('filePath' in obj && typeof obj.filePath === 'string') {
        return {
            ...obj,
            file_path: obj.filePath
        };
    }
    return input;
}
const TRANSIENT_ACP_STATUS_LABELS = new Set([
    'waiting_for_first_output',
    'tool_call',
    'tool_call_update',
    'session_update'
]);
function normalizeAgentStatusLabel(label) {
    return TRANSIENT_ACP_STATUS_LABELS.has(label) ? 'running' : label;
}
// Translate a raw `agent` SSE payload (what apps/daemon/src/claude-stream.ts emits)
// into the UI's AgentEvent union. Keep this liberal — unknown types just
// return null so the UI ignores them instead of rendering garbage.
function translateAgentEvent(data) {
    const t = data.type;
    if (t === 'status' && typeof data.label === 'string') {
        return {
            kind: 'status',
            label: normalizeAgentStatusLabel(data.label),
            detail: typeof data.detail === 'string' ? data.detail : typeof data.model === 'string' ? data.model : typeof data.ttftMs === 'number' ? `first token in ${Math.round(data.ttftMs / 100) / 10}s` : undefined
        };
    }
    if (t === 'text_delta' && typeof data.delta === 'string') {
        return {
            kind: 'text',
            text: data.delta
        };
    }
    if (t === 'conversation_title' && typeof data.title === 'string') {
        return {
            kind: 'conversation_title',
            title: data.title
        };
    }
    if (t === 'thinking_delta' && typeof data.delta === 'string') {
        return {
            kind: 'thinking',
            text: data.delta
        };
    }
    if (t === 'thinking_start') {
        return {
            kind: 'status',
            label: 'thinking'
        };
    }
    if (t === 'live_artifact') {
        return {
            kind: 'live_artifact',
            action: data.action,
            projectId: data.projectId,
            artifactId: data.artifactId,
            title: data.title,
            refreshStatus: data.refreshStatus
        };
    }
    if (t === 'live_artifact_refresh') {
        return {
            kind: 'live_artifact_refresh',
            phase: data.phase,
            projectId: data.projectId,
            artifactId: data.artifactId,
            refreshId: data.refreshId,
            title: data.title,
            refreshedSourceCount: data.refreshedSourceCount,
            error: data.error
        };
    }
    if (t === 'tool_use' && typeof data.id === 'string' && typeof data.name === 'string') {
        return {
            kind: 'tool_use',
            id: data.id,
            name: data.name,
            input: normalizeToolInput(data.input)
        };
    }
    if (t === 'tool_result' && typeof data.toolUseId === 'string') {
        return {
            kind: 'tool_result',
            toolUseId: data.toolUseId,
            content: String(data.content ?? ''),
            isError: Boolean(data.isError)
        };
    }
    if (t === 'usage') {
        const usage = data.usage ?? {};
        return {
            kind: 'usage',
            inputTokens: usage.input_tokens,
            outputTokens: usage.output_tokens,
            costUsd: typeof data.costUsd === 'number' ? data.costUsd : undefined,
            durationMs: typeof data.durationMs === 'number' ? data.durationMs : undefined
        };
    }
    if (t === 'fabricated_role_marker' && typeof data.marker === 'string') {
        return {
            kind: 'status',
            label: 'warning',
            detail: `Model emitted fabricated role marker ("${data.marker}"). Response was truncated to prevent unauthorized instruction injection.`
        };
    }
    if (t === 'tool_loop' && typeof data.toolName === 'string') {
        const toolName = data.toolName;
        const count = typeof data.count === 'number' ? data.count : 0;
        const detail = data.action === 'halt' ? `Run stopped: the agent repeated a failing ${toolName} call ${count}× without progress. Re-check the actual target before retrying.` : `Heads up — the agent has repeated a failing ${toolName} call ${count}× and may be stuck.`;
        return {
            kind: 'status',
            label: 'warning',
            detail
        };
    }
    if (t === 'raw' && typeof data.line === 'string') {
        return {
            kind: 'raw',
            line: data.line
        };
    }
    return null;
}
async function saveArtifact(identifier, title, html) {
    try {
        const resp = await fetch('/api/artifacts/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier,
                title,
                html
            })
        });
        if (!resp.ok) return null;
        return await resp.json();
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProxyMessages",
    ()=>buildProxyMessages,
    "streamProxyEndpoint",
    ()=>streamProxyEndpoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/maxTokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$sse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/sse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/apiProtocol.ts [app-client] (ecmascript)");
;
;
;
;
async function streamProxyEndpoint(endpoint, cfg, system, history, signal, handlers, context) {
    if (!cfg.apiKey) {
        handlers.onError(new Error('Missing API key — open Settings and paste one in.'));
        return;
    }
    let acc = '';
    try {
        const messages = await buildProxyMessages(endpoint, history, context);
        const resp = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                baseUrl: cfg.baseUrl,
                apiKey: cfg.apiKey,
                model: cfg.model,
                systemPrompt: system,
                messages,
                maxTokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveMaxTokens"])(cfg),
                apiVersion: cfg.apiVersion,
                ...context?.projectId ? {
                    projectId: context.projectId
                } : {},
                ...context?.byokImageModel ? {
                    byokImageModel: context.byokImageModel
                } : {},
                ...context?.byokVideoModel ? {
                    byokVideoModel: context.byokVideoModel
                } : {},
                ...context?.byokSpeechModel ? {
                    byokSpeechModel: context.byokSpeechModel
                } : {},
                ...context?.byokSpeechVoice ? {
                    byokSpeechVoice: context.byokSpeechVoice
                } : {}
            }),
            signal
        });
        if (!resp.ok || !resp.body) {
            const text = await resp.text().catch(()=>'');
            handlers.onError(new Error(`proxy ${resp.status}: ${text || 'no body'}`));
            return;
        }
        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buf = '';
        while(true){
            const { value, done } = await reader.read();
            if (done) break;
            buf += decoder.decode(value, {
                stream: true
            });
            while(true){
                const match = buf.match(/\r?\n\r?\n/);
                if (!match || match.index === undefined) break;
                const frame = buf.slice(0, match.index);
                buf = buf.slice(match.index + match[0].length);
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$sse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSseFrame"])(frame);
                if (!parsed || parsed.kind !== 'event') continue;
                if (parsed.event === 'delta') {
                    const text = String(parsed.data.delta ?? parsed.data.text ?? '');
                    if (text) {
                        acc += text;
                        handlers.onDelta(text);
                    }
                    continue;
                }
                if (parsed.event === 'error') {
                    handlers.onError(new Error(proxyErrorMessage(parsed.data)));
                    return;
                }
                if (parsed.event === 'end') {
                    handlers.onDone(acc);
                    return;
                }
            }
        }
        handlers.onDone(acc);
    } catch (err) {
        if (err.name === 'AbortError') return;
        handlers.onError(err instanceof Error ? err : new Error(String(err)));
    }
}
async function buildProxyMessages(endpoint, history, context) {
    if (!usesAnthropicMessagesPayload(endpoint) || !context?.projectId) {
        return history.map((m)=>({
                role: m.role,
                content: m.content
            }));
    }
    const out = [];
    for (const message of history){
        out.push({
            role: message.role,
            content: await buildAnthropicMessageContent(message, context.projectId)
        });
    }
    return out;
}
function usesAnthropicMessagesPayload(endpoint) {
    return endpoint.includes('/api/proxy/anthropic/');
}
async function buildAnthropicMessageContent(message, projectId) {
    const imageAttachments = sortAttachmentsByUserOrder((message.attachments ?? []).filter((attachment)=>attachment.kind === 'image'));
    if (message.role !== 'user' || imageAttachments.length === 0) {
        return message.content;
    }
    const blocks = [];
    if (message.content.trim()) {
        blocks.push({
            type: 'text',
            text: message.content
        });
    }
    for (const attachment of imageAttachments){
        const block = await readAnthropicImageBlock(projectId, attachment.path);
        if (block) {
            blocks.push(block);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnthropicSupportedImagePath"])(attachment.path)) {
            blocks.push({
                type: 'text',
                text: `Attached image could not be sent as native image content: path: ${attachment.path} | name: ${attachment.name}`
            });
        }
    }
    return blocks.length > 0 ? blocks : message.content;
}
function sortAttachmentsByUserOrder(attachments) {
    return attachments.map((attachment, index)=>({
            attachment,
            index
        })).sort((a, b)=>{
        const aOrder = typeof a.attachment.order === 'number' && Number.isFinite(a.attachment.order) ? a.attachment.order : a.index;
        const bOrder = typeof b.attachment.order === 'number' && Number.isFinite(b.attachment.order) ? b.attachment.order : b.index;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.index - b.index;
    }).map((entry)=>entry.attachment);
}
async function readAnthropicImageBlock(projectId, path) {
    try {
        const resp = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectFileUrl"])(projectId, path), {
            cache: 'no-store'
        });
        if (!resp.ok) return null;
        const mediaType = supportedAnthropicImageMediaType(resp.headers.get('content-type') ?? '', path);
        if (!mediaType) return null;
        const bytes = new Uint8Array(await resp.arrayBuffer());
        return {
            type: 'image',
            source: {
                type: 'base64',
                media_type: mediaType,
                data: bytesToBase64(bytes)
            }
        };
    } catch  {
        return null;
    }
}
function supportedAnthropicImageMediaType(contentType, path) {
    const normalized = contentType.split(';', 1)[0]?.trim().toLowerCase();
    if (normalized === 'image/jpeg' || normalized === 'image/png' || normalized === 'image/gif' || normalized === 'image/webp') {
        return normalized;
    }
    const lower = path.toLowerCase();
    if (/\.(jpe?g)$/.test(lower)) return 'image/jpeg';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.gif')) return 'image/gif';
    if (lower.endsWith('.webp')) return 'image/webp';
    return null;
}
function bytesToBase64(bytes) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let out = '';
    let i = 0;
    for(; i + 2 < bytes.length; i += 3){
        const n = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        out += alphabet[n >> 18 & 63];
        out += alphabet[n >> 12 & 63];
        out += alphabet[n >> 6 & 63];
        out += alphabet[n & 63];
    }
    if (i < bytes.length) {
        const a = bytes[i];
        const b = i + 1 < bytes.length ? bytes[i + 1] : 0;
        const n = a << 16 | b << 8;
        out += alphabet[n >> 18 & 63];
        out += alphabet[n >> 12 & 63];
        out += i + 1 < bytes.length ? alphabet[n >> 6 & 63] : '=';
        out += '=';
    }
    return out;
}
function proxyErrorMessage(data) {
    const nested = data.error;
    if (nested && typeof nested === 'object' && 'message' in nested) {
        const message = nested.message;
        if (typeof message === 'string' && message) return message;
    }
    return String(data.message ?? 'proxy error');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/openai-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * OpenAI-compatible API provider. Works with any service that exposes the
 * /v1/chat/completions endpoint (e.g. MiMo, DeepSeek, Groq, Together, etc.).
 *
 * Routes through the daemon proxy to avoid browser CORS issues.
 * BYOK — the key stays on the user's machine.
 */ __turbopack_context__.s([
    "isOpenAICompatible",
    ()=>isOpenAICompatible,
    "streamMessageOpenAI",
    ()=>streamMessageOpenAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageOpenAI(cfg, system, history, signal, handlers) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/openai/stream', cfg, system, history, signal, handlers);
}
function isOpenAICompatible(model, baseUrl) {
    const m = model.toLowerCase();
    const u = baseUrl.toLowerCase();
    const parsed = new URL(u || 'https://api.anthropic.com', 'https://local.invalid');
    const pathSegments = parsed.pathname.split('/').filter(Boolean);
    const isOfficialAnthropic = parsed.hostname === 'api.anthropic.com';
    const isAnthropicEndpoint = pathSegments.at(-1) === 'anthropic' || /^v\d+$/.test(pathSegments.at(-1) ?? '') && pathSegments.at(-2) === 'anthropic';
    // Anthropic endpoint paths should win for providers that expose both
    // protocol shapes on the same host, e.g. /v1/anthropic or /anthropic/v1.
    if (isAnthropicEndpoint) return false;
    // Explicit OpenAI-compatible providers/models should win even when a host or
    // unrelated path segment happens to contain the word "anthropic".
    if (u.includes('xiaomimimo.com/v1')) return true;
    if (u.includes('api.minimaxi.com/v1')) return true;
    if (u.includes('api.deepseek')) return true;
    if (u.includes('api.groq')) return true;
    if (u.includes('api.together')) return true;
    if (u.includes('openrouter')) return true;
    if (u.includes('openai.com')) return true;
    if (m.startsWith('deepseek')) return true;
    if (m.startsWith('groq') || m.startsWith('llama') || m.startsWith('mixtral')) return true;
    if (m.startsWith('gpt-') || m.startsWith('o1') || m.startsWith('o3') || m.startsWith('o4')) return true;
    // MiMo exposes both OpenAI-compatible (/v1) and Anthropic-compatible
    // (/anthropic) endpoints with the same model names, so path shape must break
    // the tie for this provider.
    if (m.startsWith('mimo')) return true;
    // If the base URL is custom and not clearly Anthropic-compatible, preserve
    // the existing OpenAI-compatible fallback for third-party providers.
    if (u && !isOfficialAnthropic) return true;
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/connection-test.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Thin POST-and-decode wrappers around the daemon's /api/test/connection route.
// The daemon always answers with HTTP 200 and a `ConnectionTestResponse`
// body even on upstream-caused failures, so the only paths that throw here
// are network-level errors and abort signals.
__turbopack_context__.s([
    "testAgent",
    ()=>testAgent,
    "testApiProvider",
    ()=>testApiProvider
]);
function requestModel(body) {
    const model = body.model;
    if (typeof model === 'string' && model.trim()) return model.trim();
    return body.mode === 'agent' ? 'default' : undefined;
}
async function postTest(body, signal) {
    const start = Date.now();
    try {
        const response = await fetch('/api/test/connection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
            signal
        });
        if (!response.ok) {
            let detail;
            try {
                const payload = await response.json();
                detail = payload?.error?.message ?? payload?.message;
            } catch  {
            // body was not JSON — keep detail undefined.
            }
            return {
                ok: false,
                kind: 'unknown',
                latencyMs: Date.now() - start,
                model: requestModel(body),
                detail: detail ?? `Daemon responded with ${response.status}`
            };
        }
        return await response.json();
    } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
            throw err;
        }
        return {
            ok: false,
            kind: 'unknown',
            latencyMs: Date.now() - start,
            model: requestModel(body),
            detail: err instanceof Error ? err.message : 'Network request failed'
        };
    }
}
function testApiProvider(input, signal) {
    return postTest({
        mode: 'provider',
        ...input
    }, signal);
}
function testAgent(input, signal) {
    return postTest({
        mode: 'agent',
        ...input
    }, signal);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/provider-models.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchProviderModels",
    ()=>fetchProviderModels
]);
async function postProviderModels(body, signal) {
    const start = Date.now();
    try {
        const response = await fetch('/api/provider/models', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
            signal
        });
        if (!response.ok) {
            let detail;
            try {
                const payload = await response.json();
                detail = payload?.error?.message ?? payload?.message;
            } catch  {
            // body was not JSON; keep detail undefined.
            }
            return {
                ok: false,
                kind: 'unknown',
                latencyMs: Date.now() - start,
                detail: detail ?? `Daemon responded with ${response.status}`,
                status: response.status
            };
        }
        return await response.json();
    } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
            throw err;
        }
        return {
            ok: false,
            kind: 'unknown',
            latencyMs: Date.now() - start,
            detail: err instanceof Error ? err.message : 'Network request failed'
        };
    }
}
function fetchProviderModels(input, signal) {
    return postProviderModels(input, signal);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/anthropic-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "streamMessageAnthropicProxy",
    ()=>streamMessageAnthropicProxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageAnthropicProxy(cfg, system, history, signal, handlers, context) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/anthropic/stream', cfg, system, history, signal, handlers, context);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/azure-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "streamMessageAzure",
    ()=>streamMessageAzure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageAzure(cfg, system, history, signal, handlers) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/azure/stream', cfg, system, history, signal, handlers);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/google-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "streamMessageGoogle",
    ()=>streamMessageGoogle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageGoogle(cfg, system, history, signal, handlers) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/google/stream', cfg, system, history, signal, handlers);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/ollama-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "streamMessageOllama",
    ()=>streamMessageOllama
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageOllama(cfg, system, history, signal, handlers) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/ollama/stream', cfg, system, history, signal, handlers);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/senseaudio-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SenseAudio chat completions provider. Wire-compatible with OpenAI
 * (POST /v1/chat/completions, Bearer auth, SSE delta frames + [DONE]),
 * so the only thing that differs from streamMessageOpenAI is the
 * daemon proxy endpoint — keeping a dedicated client makes the picker
 * tab → daemon log line → upstream call chain readable end-to-end and
 * leaves room for SenseAudio-specific divergence in the future.
 *
 * Routes through the daemon proxy to avoid browser CORS issues.
 * BYOK — the key stays on the user's machine.
 */ __turbopack_context__.s([
    "streamMessageSenseAudio",
    ()=>streamMessageSenseAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageSenseAudio(cfg, system, history, signal, handlers, context) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/senseaudio/stream', cfg, system, history, signal, handlers, context);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/aihubmix-compatible.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AIHubMix chat completions provider. AIHubMix is an OpenAI-wire-compatible
 * aggregator gateway (POST /v1/chat/completions, Bearer auth, SSE delta
 * frames + [DONE]), so the only thing that differs from streamMessageOpenAI
 * is the daemon proxy endpoint — keeping a dedicated client makes the picker
 * tab → daemon log line → upstream call chain readable end-to-end and leaves
 * room for AIHubMix-specific divergence (e.g. the APP-Code attribution
 * header, injected daemon-side).
 *
 * Routes through the daemon proxy to avoid browser CORS issues and to keep
 * the fixed APP-Code header out of the browser bundle. BYOK — the key stays
 * on the user's machine.
 */ __turbopack_context__.s([
    "streamMessageAIHubMix",
    ()=>streamMessageAIHubMix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/api-proxy.ts [app-client] (ecmascript)");
;
async function streamMessageAIHubMix(cfg, system, history, signal, handlers, context) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$api$2d$proxy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamProxyEndpoint"])('/api/proxy/aihubmix/stream', cfg, system, history, signal, handlers, context);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/anthropic.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeClient",
    ()=>makeClient,
    "streamMessage",
    ()=>streamMessage
]);
/**
 * Thin wrapper over @anthropic-ai/sdk. Minimal analog of
 * packages/providers/src/index.ts in the reference repo.
 *
 * Runs in the browser with dangerouslyAllowBrowser — this is a BYOK local-
 * first tool, so the key is the user's and never leaves their machine. If
 * you later move to a server-hosted build, drop that flag and proxy through
 * your own backend.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@anthropic-ai/sdk/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/maxTokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$anthropic$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/anthropic-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$azure$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/azure-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$google$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/google-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$ollama$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/ollama-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$openai$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/openai-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$senseaudio$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/senseaudio-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$aihubmix$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/aihubmix-compatible.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/apiProtocol.ts [app-client] (ecmascript)");
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
function makeClient(cfg) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
        apiKey: cfg.apiKey,
        baseURL: cfg.baseUrl || undefined,
        dangerouslyAllowBrowser: true
    });
}
async function streamMessage(cfg, system, history, signal, handlers, // Only the senseaudio / aihubmix branches read `context.projectId`
// today (so the daemon-side `generate_image` tool can write into the
// active project's folder). Other branches accept and ignore — keeping the
// signature uniform means the single call site in ProjectView passes
// the same shape regardless of protocol.
context) {
    // Prefer the explicit Settings protocol; keep the legacy heuristic as a
    // fallback for configs saved before apiProtocol existed.
    if (cfg.apiProtocol === 'azure') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$azure$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageAzure"])(cfg, system, history, signal, handlers);
    }
    if (cfg.apiProtocol === 'ollama') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$ollama$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageOllama"])(cfg, system, history, signal, handlers);
    }
    if (cfg.apiProtocol === 'google') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$google$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageGoogle"])(cfg, system, history, signal, handlers);
    }
    if (cfg.apiProtocol === 'senseaudio') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$senseaudio$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageSenseAudio"])(cfg, system, history, signal, handlers, context);
    }
    if (cfg.apiProtocol === 'aihubmix') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$aihubmix$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageAIHubMix"])(cfg, system, history, signal, handlers, context);
    }
    if (cfg.apiProtocol === 'openai' || !cfg.apiProtocol && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$openai$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenAICompatible"])(cfg.model, cfg.baseUrl)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$openai$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageOpenAI"])(cfg, system, history, signal, handlers);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$apiProtocol$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usesAnthropicProxy"])(cfg)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$anthropic$2d$compatible$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamMessageAnthropicProxy"])(cfg, system, history, signal, handlers, context);
    }
    if (!cfg.apiKey) {
        handlers.onError(new Error('Missing API key — open Settings and paste one in.'));
        return;
    }
    const client = makeClient(cfg);
    let acc = '';
    try {
        const stream = client.messages.stream({
            model: cfg.model,
            max_tokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$maxTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveMaxTokens"])(cfg),
            system,
            messages: history.map((m)=>({
                    role: m.role,
                    content: m.content
                }))
        }, {
            signal
        });
        stream.on('text', (delta)=>{
            acc += delta;
            handlers.onDelta(delta);
        });
        await stream.finalMessage();
        handlers.onDone(acc);
    } catch (err) {
        if (err.name === 'AbortError') return;
        handlers.onError(err instanceof Error ? err : new Error(String(err)));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/project-events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProjectEventsConnection",
    ()=>createProjectEventsConnection,
    "projectEventsUrl",
    ()=>projectEventsUrl,
    "useProjectFileEvents",
    ()=>useProjectFileEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const DEFAULT_INITIAL_BACKOFF = 1000;
const DEFAULT_MAX_BACKOFF = 30_000;
function projectEventsUrl(projectId) {
    return `/api/projects/${encodeURIComponent(projectId)}/events`;
}
function createProjectEventsConnection(projectId, onChange, options = {}) {
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
    const connect = ()=>{
        if (cancelled) return;
        const es = new Ctor(projectEventsUrl(projectId));
        source = es;
        es.addEventListener('ready', ()=>{
            backoff = initialBackoff;
        });
        es.addEventListener('file-changed', (evt)=>{
            try {
                const data = JSON.parse(evt.data);
                onChange(data);
            } catch (err) {
                // Ignore malformed payloads — we'll get more on the next change.
                // Log in dev so payload-shape bugs don't go silent during testing.
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                    // eslint-disable-next-line no-console
                    console.warn('[project-events] malformed file-changed payload', err);
                }
            }
        });
        const handleLiveArtifactEvent = (evt)=>{
            try {
                const data = JSON.parse(evt.data);
                onChange(data);
            } catch (err) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                    // eslint-disable-next-line no-console
                    console.warn('[project-events] malformed live-artifact payload', err);
                }
            }
        };
        es.addEventListener('live_artifact', handleLiveArtifactEvent);
        es.addEventListener('live_artifact_refresh', handleLiveArtifactEvent);
        es.addEventListener('conversation-created', (evt)=>{
            try {
                const data = JSON.parse(evt.data);
                onChange(data);
            } catch (err) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development') {
                    // eslint-disable-next-line no-console
                    console.warn('[project-events] malformed conversation-created payload', err);
                }
            }
        });
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
function useProjectFileEvents(projectId, enabled, onChange, options = {}) {
    _s();
    const onChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProjectFileEvents.useEffect": ()=>{
            onChangeRef.current = onChange;
        }
    }["useProjectFileEvents.useEffect"], [
        onChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProjectFileEvents.useEffect": ()=>{
            if (!enabled || !projectId) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const conn = createProjectEventsConnection(projectId, {
                "useProjectFileEvents.useEffect.conn": (evt)=>onChangeRef.current(evt)
            }["useProjectFileEvents.useEffect.conn"], options);
            return ({
                "useProjectFileEvents.useEffect": ()=>conn.close()
            })["useProjectFileEvents.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useProjectFileEvents.useEffect"], [
        projectId,
        enabled,
        options.EventSourceCtor,
        options.initialBackoffMs,
        options.maxBackoffMs
    ]);
}
_s(useProjectFileEvents, "WuQsOoC9svuzuRNB/fDTFyScaXM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_providers_04pxwfa._.js.map