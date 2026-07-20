(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/TasksView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TasksView",
    ()=>TasksView,
    "sortRoutinesNewestFirst",
    ()=>sortRoutinesNewestFirst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Automations tab: one surface for scheduled routines, Orbit-style digests,
// and live artifact refreshers. The daemon still stores these as routines;
// the UI presents them as scheduled agent conversations.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NewAutomationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/NewAutomationModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function buildStaticTemplates(t) {
    return [
        {
            id: 'memory-refresh',
            category: 'memory',
            kind: 'routine',
            icon: 'sparkles',
            title: t('automations.tpl.memoryRefresh.title'),
            description: t('automations.tpl.memoryRefresh.desc'),
            defaultName: 'Memory refresh',
            prompt: 'Review recent chats, PR comments, design feedback, and project changes. Extract durable preferences, repeated decisions, and workflow lessons. Propose concise memory updates with source links and separate one-off notes from reusable guidance.'
        },
        {
            id: 'design-system-refresh',
            category: 'design-system',
            kind: 'routine',
            icon: 'sliders',
            title: t('automations.tpl.designSystemRefresh.title'),
            description: t('automations.tpl.designSystemRefresh.desc'),
            defaultName: 'Design system maintainer',
            prompt: 'Inspect recent generated artifacts, review feedback, and accepted revisions. Identify patterns that should become design-system tokens, component rules, examples, or anti-patterns. Draft precise updates to DESIGN.md and call out anything that needs human approval.'
        },
        {
            id: 'live-artifact-registry',
            category: 'live-artifact',
            kind: 'routine',
            icon: 'file-code',
            title: t('automations.tpl.liveArtifactRegistry.title'),
            description: t('automations.tpl.liveArtifactRegistry.desc'),
            defaultName: 'Live artifact maintainer',
            prompt: 'List live artifacts for this project, find stale or failed refreshes, and update the highest-value artifact in place. Preserve artifact ids, summarize what changed, and flag artifacts that need connector access or human review.'
        },
        {
            id: 'orbit-dashboard',
            category: 'orbit',
            kind: 'routine',
            icon: 'orbit',
            title: t('automations.tpl.orbitDashboard.title'),
            description: t('automations.tpl.orbitDashboard.desc'),
            defaultName: 'Connector activity dashboard',
            prompt: 'Use the selected connectors to build or refresh a live dashboard of recent activity. Group by people, projects, decisions, risks, and follow-ups. Prefer connected read-only tools, cite sources, and keep the dashboard refreshable.'
        },
        {
            id: 'release-notes',
            category: 'release',
            kind: 'routine',
            icon: 'present',
            title: t('automations.tpl.releaseNotes.title'),
            description: t('automations.tpl.releaseNotes.desc'),
            defaultName: 'Weekly release notes',
            prompt: "Draft user-facing release notes covering merged PRs, updated artifacts, and design-system changes from the last 7 days. Group by 'New', 'Improved', and 'Fixed'. Include links when available and keep the copy user-readable."
        },
        {
            id: 'quality-regression-watch',
            category: 'quality',
            kind: 'routine',
            icon: 'bell',
            title: t('automations.tpl.qualityRegressionWatch.title'),
            description: t('automations.tpl.qualityRegressionWatch.desc'),
            defaultName: 'Regression watch',
            prompt: 'Compare recent project changes against accepted artifacts, design-system rules, benchmarks, and traces. Flag regressions in behavior, layout, accessibility, or product intent. Suggest the smallest fix and cite the evidence.'
        }
    ];
}
function fallbackOrbitTemplate(t) {
    return {
        id: 'orbit-daily',
        category: 'orbit',
        kind: 'orbit',
        icon: 'orbit',
        title: t('automations.tpl.orbitDaily.title'),
        description: t('automations.tpl.orbitDaily.desc'),
        defaultName: 'Daily connector digest',
        prompt: 'Survey every connected integration and produce a daily digest of what changed in the last 24 hours. Group the result by people, projects, decisions, and follow-ups. Save the output as a live artifact named `daily_digest.md` and update it in place on each run.'
    };
}
function fallbackLiveTemplate(t) {
    return {
        id: 'live-status-board',
        category: 'live-artifact',
        kind: 'live-artifact',
        icon: 'file-code',
        title: t('automations.tpl.liveStatusBoard.title'),
        description: t('automations.tpl.liveStatusBoard.desc'),
        defaultName: 'Live status board',
        prompt: "Maintain a single live artifact named `status_board.md`. On each run, update the sections for 'In flight', 'Shipped this week', 'Risks', and 'Decisions made'. Edit in place so the artifact stays stable."
    };
}
function templateFilters(t) {
    return [
        {
            id: 'all',
            label: t('automations.filterAll')
        },
        {
            id: 'orbit',
            label: t('automations.filterOrbit')
        },
        {
            id: 'live-artifact',
            label: t('automations.filterLiveArtifacts')
        },
        {
            id: 'memory',
            label: t('automations.filterMemory')
        },
        {
            id: 'design-system',
            label: t('automations.filterDesignSystems')
        },
        {
            id: 'skills',
            label: t('automations.filterSkills')
        },
        {
            id: 'connectors',
            label: t('automations.filterConnectors')
        },
        {
            id: 'compression',
            label: t('automations.filterCompression')
        },
        {
            id: 'release',
            label: t('automations.filterRelease')
        },
        {
            id: 'quality',
            label: t('automations.filterQuality')
        }
    ];
}
function scheduleStatusLabel(routine, t) {
    if (!routine.enabled) return t('automations.scheduleStatusPaused');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NewAutomationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeScheduleSummary"])(routine.schedule);
}
function nextRunLabel(routine, t) {
    if (!routine.enabled) return t('automations.nextRunManualOnly');
    if (!routine.nextRunAt) return t('automations.nextRunScheduled');
    const date = new Date(routine.nextRunAt);
    return t('automations.nextRunAt', {
        time: date.toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
    });
}
function formatAutomationTimestamp(ts) {
    if (!ts) return '—';
    return new Date(ts).toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}
function formatRunDuration(run, t) {
    if (!run.completedAt) return t('automations.runInProgress');
    const seconds = Math.max(1, Math.round((run.completedAt - run.startedAt) / 1000));
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return remainder > 0 ? `${minutes}m ${remainder}s` : `${minutes}m`;
}
function statusLabel(status, t) {
    if (status === 'succeeded') return t('automations.statusSucceeded');
    if (status === 'failed') return t('automations.statusFailed');
    if (status === 'running') return t('automations.statusRunning');
    if (status === 'queued') return t('automations.statusQueued');
    return t('automations.statusCanceled');
}
function StatusPill({ status, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `automation-status is-${status}`,
        children: statusLabel(status, t)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/TasksView.tsx",
        lineNumber: 212,
        columnNumber: 10
    }, this);
}
_c = StatusPill;
function templateFromSkill(skill, kind) {
    const category = kind === 'orbit' ? 'orbit' : 'live-artifact';
    return {
        id: `skill-${skill.id}`,
        category,
        kind,
        icon: kind === 'orbit' ? 'orbit' : 'file-code',
        title: skill.name,
        description: skill.description || skill.id,
        defaultName: skill.name,
        prompt: skill.examplePrompt || skill.description || `Run ${skill.name}.`,
        skillId: skill.id
    };
}
function automationTemplateCategory(template) {
    const tags = new Set(template.tags ?? []);
    if (template.outputSinks.includes('design-system') || tags.has('design-system')) {
        return 'design-system';
    }
    if (template.outputSinks.includes('skill') || tags.has('skills')) {
        return 'skills';
    }
    if (tags.has('connectors') || template.sourceKinds.length > 0 && template.sourceKinds.every((kind)=>kind === 'connector')) {
        return 'connectors';
    }
    if (template.tokenCompression === 'aggressive' || tags.has('compression') || tags.has('tokens')) {
        return 'compression';
    }
    if (template.outputSinks.includes('memory') || tags.has('memory')) {
        return 'memory';
    }
    return 'routine';
}
function automationTemplateIcon(category) {
    if (category === 'design-system') return 'sliders';
    if (category === 'skills') return 'sparkles';
    if (category === 'connectors') return 'link';
    if (category === 'compression') return 'reload';
    if (category === 'memory') return 'history';
    return 'history';
}
function automationTemplatePrompt(template) {
    const stages = template.stages.map((stage)=>stage.title).join(' -> ');
    return [
        `Use Automation template "${template.id}".`,
        `Purpose: ${template.purpose}`,
        `Sources: ${template.sourceKinds.join(', ')}.`,
        `Trigger modes: ${template.triggerKinds.join(', ')}.`,
        `Pipeline: ${stages}.`,
        `Outputs: ${template.outputSinks.join(', ')}.`,
        `Review policy: ${template.reviewPolicy}. Token compression: ${template.tokenCompression}.`,
        'Produce reviewable proposals with provenance before applying durable memory, skill, automation, or design-system changes.'
    ].join('\n');
}
function templateFromAutomationCatalog(template) {
    const category = automationTemplateCategory(template);
    return {
        id: template.id,
        category,
        kind: 'routine',
        icon: automationTemplateIcon(category),
        title: template.title,
        description: template.description,
        defaultName: template.title,
        prompt: automationTemplatePrompt(template)
    };
}
function dedupeTemplates(templates) {
    const seen = new Set();
    return templates.filter((template)=>{
        if (seen.has(template.id)) return false;
        seen.add(template.id);
        return true;
    });
}
function buildAutomationTemplates(designTemplates, automationCatalog, t) {
    const orbit = designTemplates.filter((skill)=>skill.scenario === 'orbit').map((skill)=>templateFromSkill(skill, 'orbit'));
    const live = designTemplates.filter((skill)=>skill.scenario === 'live').map((skill)=>templateFromSkill(skill, 'live-artifact'));
    return dedupeTemplates([
        ...automationCatalog.map(templateFromAutomationCatalog),
        ...orbit.length > 0 ? orbit : [
            fallbackOrbitTemplate(t)
        ],
        ...live.length > 0 ? live : [
            fallbackLiveTemplate(t)
        ],
        ...buildStaticTemplates(t)
    ]);
}
function filterTemplates(templates, filter) {
    if (filter === 'all') return templates;
    if (filter === 'orbit' || filter === 'live-artifact') {
        return templates.filter((template)=>template.kind === filter);
    }
    return templates.filter((template)=>template.category === filter);
}
function kindLabel(kind, t) {
    if (kind === 'orbit') return t('automations.kindOrbit');
    if (kind === 'live-artifact') return t('automations.kindLiveArtifact');
    return t('automations.kindAutomation');
}
function kindIcon(kind) {
    if (kind === 'orbit') return 'orbit';
    if (kind === 'live-artifact') return 'file-code';
    return 'history';
}
function proposalTargetLabel(target, t) {
    if (target === 'memory-node') return t('automations.proposalTargetMemory');
    if (target === 'design-system') return t('automations.proposalTargetDesignSystem');
    if (target === 'skill') return t('automations.proposalTargetSkill');
    return t('automations.proposalTargetTemplate');
}
function proposalActionLabel(action, t) {
    if (action === 'create') return t('automations.proposalActionCreate');
    if (action === 'update') return t('automations.proposalActionUpdate');
    if (action === 'merge') return t('automations.proposalActionMerge');
    if (action === 'move') return t('automations.proposalActionMove');
    if (action === 'delete') return t('automations.proposalActionDelete');
    return t('automations.proposalActionPromote');
}
function mergeAutomationProposals(current, incoming) {
    const merged = new Map(current.map((proposal)=>[
            proposal.id,
            proposal
        ]));
    for (const proposal of incoming){
        merged.set(proposal.id, proposal);
    }
    return Array.from(merged.values()).sort((a, b)=>{
        const bTime = Date.parse(b.createdAt);
        const aTime = Date.parse(a.createdAt);
        return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
    });
}
function errorMessage(err) {
    return err instanceof Error ? err.message : String(err);
}
function TasksView({ skills = [], designTemplates = [], connectors = [] }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    // P2 page_view page_name=automations. Ref-keyed so re-renders don't
    // double-fire while the user is on the page.
    const pageViewFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TasksView.useState": ()=>({
                fired: false
            })
    }["TasksView.useState"])[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TasksView.useEffect": ()=>{
            if (pageViewFiredRef.fired) return;
            pageViewFiredRef.fired = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(analytics.track, {
                page_name: 'automations'
            });
        }
    }["TasksView.useEffect"], [
        analytics.track,
        pageViewFiredRef
    ]);
    // P2 ui_click page_name=automations. Fire on every actionable click inside
    // the tab before running the handler, so navigations that unmount the view
    // still report.
    const fireClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TasksView.useCallback[fireClick]": (element, extra)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackAutomationsClick"])(analytics.track, {
                page_name: 'automations',
                area: 'automations',
                element,
                ...extra
            });
        }
    }["TasksView.useCallback[fireClick]"], [
        analytics.track
    ]);
    const [routines, setRoutines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busyId, setBusyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [templateFilter, setTemplateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [automationCatalog, setAutomationCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [proposals, setProposals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [proposalBusyId, setProposalBusyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [crystallizingRunId, setCrystallizingRunId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [focusRoutineId, setFocusRoutineId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const routineRowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [historyTick, setHistoryTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const templates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TasksView.useMemo[templates]": ()=>buildAutomationTemplates(designTemplates, automationCatalog, t)
    }["TasksView.useMemo[templates]"], [
        automationCatalog,
        designTemplates,
        t
    ]);
    const filteredTemplates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TasksView.useMemo[filteredTemplates]": ()=>filterTemplates(templates, templateFilter)
    }["TasksView.useMemo[filteredTemplates]"], [
        templates,
        templateFilter
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TasksView.useCallback[refresh]": async ()=>{
            let proposalRefreshFailed = false;
            try {
                const templateRequest = fetch('/api/automation-templates').then({
                    "TasksView.useCallback[refresh].templateRequest": async (res)=>{
                        if (!res.ok) return null;
                        return await res.json();
                    }
                }["TasksView.useCallback[refresh].templateRequest"]).catch({
                    "TasksView.useCallback[refresh].templateRequest": ()=>null
                }["TasksView.useCallback[refresh].templateRequest"]);
                const proposalRequest = fetch('/api/automation-proposals?status=pending-review').then({
                    "TasksView.useCallback[refresh].proposalRequest": async (res)=>{
                        if (!res.ok) {
                            proposalRefreshFailed = true;
                            return null;
                        }
                        return await res.json();
                    }
                }["TasksView.useCallback[refresh].proposalRequest"]).catch({
                    "TasksView.useCallback[refresh].proposalRequest": ()=>{
                        proposalRefreshFailed = true;
                        return null;
                    }
                }["TasksView.useCallback[refresh].proposalRequest"]);
                const [rRes, pRes, tJson, proposalJson] = await Promise.all([
                    fetch('/api/routines'),
                    fetch('/api/projects'),
                    templateRequest,
                    proposalRequest
                ]);
                if (!rRes.ok) throw new Error(`routines: ${rRes.status}`);
                const rJson = await rRes.json();
                setRoutines(rJson.routines ?? []);
                if (pRes.ok) {
                    const pJson = await pRes.json();
                    setProjects((pJson.projects ?? []).map({
                        "TasksView.useCallback[refresh]": (p)=>({
                                id: p.id,
                                name: p.name
                            })
                    }["TasksView.useCallback[refresh]"]));
                }
                if (tJson) {
                    setAutomationCatalog(Array.isArray(tJson.templates) ? tJson.templates : []);
                }
                if (proposalJson) {
                    setProposals(Array.isArray(proposalJson.proposals) ? proposalJson.proposals : []);
                }
                setError(null);
            } catch (err) {
                setError(errorMessage(err));
            } finally{
                setLoading(false);
            }
            return {
                proposalRefreshFailed
            };
        }
    }["TasksView.useCallback[refresh]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TasksView.useEffect": ()=>{
            void refresh();
        }
    }["TasksView.useEffect"], [
        refresh
    ]);
    const projectsById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TasksView.useMemo[projectsById]": ()=>{
            const map = new Map();
            for (const p of projects)map.set(p.id, p.name);
            return map;
        }
    }["TasksView.useMemo[projectsById]"], [
        projects
    ]);
    // Sort routines by creation time, newest first
    const sortedRoutines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TasksView.useMemo[sortedRoutines]": ()=>sortRoutinesNewestFirst(routines)
    }["TasksView.useMemo[sortedRoutines]"], [
        routines
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TasksView.useEffect": ()=>{
            if (!focusRoutineId) return;
            const node = routineRowRefs.current[focusRoutineId];
            node?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
            const timer = window.setTimeout({
                "TasksView.useEffect.timer": ()=>setFocusRoutineId(null)
            }["TasksView.useEffect.timer"], 4000);
            return ({
                "TasksView.useEffect": ()=>window.clearTimeout(timer)
            })["TasksView.useEffect"];
        }
    }["TasksView.useEffect"], [
        focusRoutineId,
        sortedRoutines
    ]);
    const activeCount = sortedRoutines.filter((routine)=>routine.enabled).length;
    const pausedCount = sortedRoutines.length - activeCount;
    const reviewProposal = async (id, action)=>{
        setProposalBusyId(id);
        setError(null);
        try {
            const res = await fetch(`/api/automation-proposals/${id}/${action}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: action === 'reject' ? JSON.stringify({
                    reason: t('automations.proposalsDismissReason')
                }) : '{}'
            });
            if (!res.ok) {
                const j = await res.json().catch(()=>({}));
                throw new Error(j.error || `${action} failed: ${res.status}`);
            }
            await refresh();
        } catch (err) {
            setError(errorMessage(err));
        } finally{
            setProposalBusyId(null);
        }
    };
    const runNow = async (id)=>{
        setBusyId(id);
        setError(null);
        try {
            const res = await fetch(`/api/routines/${id}/run`, {
                method: 'POST'
            });
            if (!res.ok && res.status !== 202) {
                const j = await res.json().catch(()=>({}));
                throw new Error(j.error || `run failed: ${res.status}`);
            }
            const j = await res.json().catch(()=>null);
            if (j?.projectId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                    kind: 'project',
                    projectId: j.projectId,
                    conversationId: j.conversationId ?? null,
                    fileName: null
                });
                return;
            }
            void refresh();
            setExpandedId(id);
            setHistoryTick((tick)=>tick + 1);
        } catch (err) {
            setError(errorMessage(err));
        } finally{
            setBusyId(null);
        }
    };
    const crystallizeRun = async (routineId, runId)=>{
        setCrystallizingRunId(runId);
        setError(null);
        try {
            const res = await fetch(`/api/routines/${routineId}/runs/${runId}/crystallize`, {
                method: 'POST'
            });
            if (!res.ok) {
                const j = await res.json().catch(()=>({}));
                throw new Error(j.error || `crystallize failed: ${res.status}`);
            }
            const json = await res.json();
            const createdProposals = Array.isArray(json.proposals) ? json.proposals : [];
            if (createdProposals.length > 0) {
                setProposals((current)=>mergeAutomationProposals(current, createdProposals));
            }
            const { proposalRefreshFailed } = await refresh();
            if (proposalRefreshFailed) {
                setError(createdProposals.length > 0 ? t('automations.crystallizePartialSuccess') : t('automations.crystallizeRefreshFailed'));
            } else if (createdProposals.length === 0) {
                setError(t('automations.crystallizeNoProposals'));
            }
        } catch (err) {
            setError(t('automations.crystallizeFailed', {
                error: errorMessage(err)
            }));
        } finally{
            setCrystallizingRunId(null);
        }
    };
    const togglePaused = async (routine)=>{
        setBusyId(routine.id);
        try {
            const res = await fetch(`/api/routines/${routine.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    enabled: !routine.enabled
                })
            });
            if (!res.ok) {
                const j = await res.json().catch(()=>({}));
                throw new Error(j.error || `update failed: ${res.status}`);
            }
            void refresh();
        } catch (err) {
            setError(errorMessage(err));
        } finally{
            setBusyId(null);
        }
    };
    const remove = async (id)=>{
        if (!window.confirm(t('automations.deleteConfirm'))) return;
        setBusyId(id);
        try {
            const res = await fetch(`/api/routines/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const j = await res.json().catch(()=>({}));
                throw new Error(j.error || `delete failed: ${res.status}`);
            }
            if (expandedId === id) setExpandedId(null);
            void refresh();
        } catch (err) {
            setError(errorMessage(err));
        } finally{
            setBusyId(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "automations-view",
        "aria-labelledby": "automations-title",
        "data-testid": "tasks-view",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "automations-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-hero__copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automations-hero__eyebrow",
                                children: t('automations.eyebrow')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 640,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "automations-title",
                                className: "automations-hero__title",
                                children: t('automations.title')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "automations-hero__lede",
                                children: t('automations.lede')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-hero__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "automations-metrics",
                                "aria-label": t('automations.summaryAria'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                        label: t('automations.metricActive'),
                                        value: activeCount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                        label: t('automations.metricPaused'),
                                        value: pausedCount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                        label: t('automations.metricTemplates'),
                                        value: templates.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "automations-view__new",
                                onClick: ()=>{
                                    fireClick('new_automation');
                                    setModal({
                                        kind: 'create'
                                    });
                                },
                                "data-testid": "automations-new",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "plus",
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('automations.newAutomation')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "automations-view__error",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 670,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "automations-saved",
                "aria-label": t('automations.yourAutomations'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-section-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "automations-section__label",
                                children: t('automations.yourAutomations')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 677,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automations-section__meta",
                                children: t('automations.loading')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 678,
                                columnNumber: 22
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this),
                    !loading && sortedRoutines.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "automation-empty",
                        onClick: ()=>{
                            fireClick('new_automation');
                            setModal({
                                kind: 'create'
                            });
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automation-empty__icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "plus",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                    lineNumber: 690,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 689,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automation-empty__body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: t('automations.emptyTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('automations.emptyBody')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 692,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 681,
                        columnNumber: 11
                    }, this) : null,
                    sortedRoutines.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "automations-saved__list",
                        children: sortedRoutines.map((r)=>{
                            const isBusy = busyId === r.id;
                            const targetLabel = r.target.mode === 'reuse' ? projectsById.get(r.target.projectId) ?? r.target.projectId : t('automations.targetNewEachRun');
                            const isExpanded = expandedId === r.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                ref: (node)=>{
                                    routineRowRefs.current[r.id] = node;
                                },
                                "data-testid": `automation-row-${r.id}`,
                                className: `automation-row${r.enabled ? '' : ' is-paused'}${focusRoutineId === r.id ? ' is-focused' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "automation-row__main",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-row__icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: r.skillId ? 'sparkles' : 'history',
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 717,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-row__content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__title",
                                                        children: r.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__meta",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: scheduleStatusLabel(r, t)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 723,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: targetLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: nextRunLabel(r, t)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 727,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 23
                                                    }, this),
                                                    r.prompt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__prompt",
                                                        children: r.prompt
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 25
                                                    }, this) : null,
                                                    r.lastRun ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__last-run",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                                status: r.lastRun.status,
                                                                t: t
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 734,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: t('automations.lastRun', {
                                                                    time: formatAutomationTimestamp(r.lastRun.startedAt)
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "automation-inline-link",
                                                                onClick: ()=>{
                                                                    fireClick('open_artifact');
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                                                                        kind: 'project',
                                                                        projectId: r.lastRun.projectId,
                                                                        conversationId: r.lastRun.conversationId,
                                                                        fileName: null
                                                                    });
                                                                },
                                                                children: t('automations.openResult')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 720,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 716,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "automation-row__actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn",
                                                onClick: ()=>{
                                                    fireClick('run_now');
                                                    runNow(r.id);
                                                },
                                                disabled: isBusy,
                                                title: t('automations.runNowTitle'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "play",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('automations.run')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 757,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn",
                                                onClick: ()=>{
                                                    fireClick('history');
                                                    setExpandedId(isExpanded ? null : r.id);
                                                    if (!isExpanded) setHistoryTick((tick)=>tick + 1);
                                                },
                                                "aria-expanded": isExpanded,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "history",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isExpanded ? t('automations.hideHistory') : t('automations.history')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 770,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn",
                                                onClick: ()=>{
                                                    fireClick('edit');
                                                    setModal({
                                                        kind: 'edit',
                                                        routine: r
                                                    });
                                                },
                                                disabled: isBusy,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "edit",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('automations.edit')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 783,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn",
                                                onClick: ()=>{
                                                    fireClick(r.enabled ? 'pause' : 'resume');
                                                    togglePaused(r);
                                                },
                                                disabled: isBusy,
                                                children: r.enabled ? t('automations.pause') : t('automations.resume')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 795,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn automation-row__btn--danger",
                                                onClick: ()=>{
                                                    fireClick('delete');
                                                    remove(r.id);
                                                },
                                                disabled: isBusy,
                                                "aria-label": t('automations.deleteAria'),
                                                title: t('automations.deleteTitle'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "trash",
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 806,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 756,
                                        columnNumber: 19
                                    }, this),
                                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutomationRunHistory, {
                                        routineId: r.id,
                                        refreshKey: historyTick,
                                        crystallizingRunId: crystallizingRunId,
                                        onCrystallizeRun: crystallizeRun,
                                        onFireClick: fireClick,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 821,
                                        columnNumber: 21
                                    }, this) : null
                                ]
                            }, r.id, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 708,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 699,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            proposals.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "automations-saved",
                "aria-label": t('automations.proposalsAria'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-section-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "automations-section__label",
                                        children: t('automations.proposalsTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 841,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "automations-section__sub",
                                        children: t('automations.proposalsSub')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 842,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automations-section__meta",
                                children: t('automations.proposalsPending', {
                                    n: proposals.length
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 846,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 839,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "automations-saved__list",
                        children: proposals.map((proposal)=>{
                            const isBusy = proposalBusyId === proposal.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "automation-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "automation-row__main",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-row__icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: proposal.targetKind === 'design-system' ? 'sliders' : 'sparkles',
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 854,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-row__content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__title",
                                                        children: proposal.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__meta",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: proposalTargetLabel(proposal.targetKind, t)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 864,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: proposalActionLabel(proposal.action, t)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 865,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 866,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: proposal.reviewPolicy
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                                lineNumber: 867,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 862,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__prompt",
                                                        children: proposal.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 23
                                                    }, this),
                                                    proposal.patch.diffSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "automation-row__last-run",
                                                        children: proposal.patch.diffSummary
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 25
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 860,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 853,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "automation-row__actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn",
                                                onClick: ()=>{
                                                    fireClick('proposal_apply');
                                                    reviewProposal(proposal.id, 'apply');
                                                },
                                                disabled: isBusy,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "check",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('automations.apply')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 878,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "automation-row__btn automation-row__btn--danger",
                                                onClick: ()=>{
                                                    fireClick('proposal_reject');
                                                    reviewProposal(proposal.id, 'reject');
                                                },
                                                disabled: isBusy,
                                                children: t('automations.reject')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 890,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 877,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, proposal.id, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 852,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 848,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 838,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "automations-templates",
                "aria-label": t('automations.templatesAria'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-templates__head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "automations-templates__head-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "automations-section__label",
                                        children: t('automations.templatesTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 912,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "automations-section__sub",
                                        children: t('automations.templatesSub')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 913,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 911,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automations-section__meta",
                                children: t('automations.templatesCount', {
                                    filtered: filteredTemplates.length,
                                    total: templates.length
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 917,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 910,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-template-tabs",
                        role: "tablist",
                        "aria-label": t('automations.templateFiltersAria'),
                        children: templateFilters(t).map((filter)=>{
                            const count = filterTemplates(templates, filter.id).length;
                            const isActive = templateFilter === filter.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": isActive,
                                className: `automations-template-tab${isActive ? ' is-active' : ''}`,
                                onClick: ()=>{
                                    fireClick('filter_tab', {
                                        filter_id: filter.id
                                    });
                                    setTemplateFilter(filter.id);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "automations-template-tab__label",
                                        children: filter.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 941,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "automations-template-tab__count",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 942,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, filter.id, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 930,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 921,
                        columnNumber: 9
                    }, this),
                    filteredTemplates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-templates__empty",
                        role: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "automations-templates__empty-icon",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "sparkles",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                    lineNumber: 951,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 950,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: t('automations.templatesEmptyTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 954,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t('automations.templatesEmptyBody')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 955,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 953,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 949,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "automations-templates__grid",
                        children: filteredTemplates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `automation-template-card is-${template.kind}`,
                                onClick: ()=>{
                                    fireClick('type_card', {
                                        template_kind: template.kind
                                    });
                                    setModal({
                                        kind: 'create',
                                        template
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "automation-template-card__icon",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: template.icon,
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                            lineNumber: 971,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 970,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "automation-template-card__body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-template-card__kicker",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: kindIcon(template.kind),
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 19
                                                    }, this),
                                                    kindLabel(template.kind, t)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 974,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-template-card__title",
                                                children: template.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 978,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-template-card__desc",
                                                children: template.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 979,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "automation-template-card__cta",
                                                children: [
                                                    t('automations.useTemplate'),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "chevron-right",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 980,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 973,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, template.id, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 961,
                                columnNumber: 13
                            }, this))
                    }, templateFilter, false, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 959,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 909,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$NewAutomationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewAutomationModal"], {
                open: modal !== null,
                initial: modal?.kind === 'edit' ? {
                    routine: modal.routine
                } : modal?.kind === 'create' && modal.template ? {
                    template: modal.template
                } : null,
                templates: templates,
                projects: projects,
                skills: skills,
                connectors: connectors,
                onClose: ()=>setModal(null),
                onSaved: (routine)=>{
                    void (async ()=>{
                        await refresh();
                        setExpandedId(routine.id);
                        setFocusRoutineId(routine.id);
                    })();
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 990,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/TasksView.tsx",
        lineNumber: 637,
        columnNumber: 5
    }, this);
}
_s(TasksView, "WaaiaqyX0BoWl3HzplObcihCzZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = TasksView;
function sortRoutinesNewestFirst(routines) {
    return [
        ...routines
    ].sort((a, b)=>(b.createdAt ?? 0) - (a.createdAt ?? 0));
}
function Metric({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "automations-metric",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "automations-metric__value",
                children: value
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 1023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "automations-metric__label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 1024,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/TasksView.tsx",
        lineNumber: 1022,
        columnNumber: 5
    }, this);
}
_c2 = Metric;
function AutomationRunHistory({ routineId, refreshKey, crystallizingRunId, onCrystallizeRun, onFireClick, t }) {
    _s1();
    const [runs, setRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutomationRunHistory.useEffect": ()=>{
            let cancelled = false;
            setRuns(null);
            void ({
                "AutomationRunHistory.useEffect": async ()=>{
                    try {
                        const res = await fetch(`/api/routines/${routineId}/runs?limit=10`);
                        if (!res.ok) throw new Error(`runs: ${res.status}`);
                        const json = await res.json();
                        if (!cancelled) setRuns(json.runs ?? []);
                    } catch  {
                        if (!cancelled) setRuns([]);
                    }
                }
            })["AutomationRunHistory.useEffect"]();
            return ({
                "AutomationRunHistory.useEffect": ()=>{
                    cancelled = true;
                }
            })["AutomationRunHistory.useEffect"];
        }
    }["AutomationRunHistory.useEffect"], [
        refreshKey,
        routineId
    ]);
    if (runs === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "automation-history automation-history--empty",
            children: t('automations.runHistoryLoading')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/TasksView.tsx",
            lineNumber: 1065,
            columnNumber: 12
        }, this);
    }
    if (runs.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "automation-history automation-history--empty",
            children: t('automations.runHistoryEmpty')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/TasksView.tsx",
            lineNumber: 1069,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "automation-history",
        "aria-label": t('automations.runHistoryAria'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "automation-history__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('automations.runHistoryTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 1075,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('automations.runHistoryLatest')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 1076,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 1074,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "automation-history__list",
                children: runs.map((run)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "automation-history__row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "automation-history__status",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                        status: run.status,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1082,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: run.trigger
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1083,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 1081,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "automation-history__meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatAutomationTimestamp(run.startedAt)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1086,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatRunDuration(run, t)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1089,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: run.agentRunId
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 1085,
                                columnNumber: 13
                            }, this),
                            run.summary || run.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `automation-history__message${run.error ? ' is-error' : ''}`,
                                children: run.error ?? run.summary
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 1093,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "automation-history__actions",
                                children: [
                                    run.status === 'succeeded' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "automation-history__open",
                                        onClick: ()=>{
                                            onFireClick('crystallize');
                                            onCrystallizeRun(routineId, run.id);
                                        },
                                        disabled: crystallizingRunId === run.id,
                                        title: t('automations.crystallizeTitle'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "sparkles",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: crystallizingRunId === run.id ? t('automations.crystallizing') : t('automations.crystallize')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 1110,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "automation-history__open",
                                        onClick: ()=>{
                                            onFireClick('view_progress');
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigate"])({
                                                kind: 'project',
                                                projectId: run.projectId,
                                                conversationId: run.conversationId,
                                                fileName: null
                                            });
                                        },
                                        children: [
                                            t('automations.openConversation'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "chevron-right",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                        lineNumber: 1113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                                lineNumber: 1097,
                                columnNumber: 13
                            }, this)
                        ]
                    }, run.id, true, {
                        fileName: "[project]/apps/web/src/components/TasksView.tsx",
                        lineNumber: 1080,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/TasksView.tsx",
                lineNumber: 1078,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/TasksView.tsx",
        lineNumber: 1073,
        columnNumber: 5
    }, this);
}
_s1(AutomationRunHistory, "KuECUKbOAaV6IrT9ySPjOpPUwSA=");
_c3 = AutomationRunHistory;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "StatusPill");
__turbopack_context__.k.register(_c1, "TasksView");
__turbopack_context__.k.register(_c2, "Metric");
__turbopack_context__.k.register(_c3, "AutomationRunHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_TasksView_tsx_0d-0vpz._.js.map