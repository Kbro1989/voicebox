(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/NewProjectPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewProjectPanel",
    ()=>NewProjectPanel,
    "buildDesignSystemCreateSelection",
    ()=>buildDesignSystemCreateSelection,
    "defaultDesignSystemSelection",
    ()=>defaultDesignSystemSelection,
    "supportedModels",
    ()=>supportedModels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/analytics/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$provider$2d$readiness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/provider-readiness.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/media/aihubmix-image-models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/brands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BrandPreviewCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useOpenFolderImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/useOpenFolderImport.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
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
const SFX_AUDIO_DURATIONS_SEC = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_DURATIONS_SEC"].filter(_c = (sec)=>sec <= 30);
_c1 = SFX_AUDIO_DURATIONS_SEC;
const DESIGN_PLATFORMS = [
    {
        value: 'responsive',
        labelKey: 'newproj.platform.responsive.label',
        hintKey: 'newproj.platform.responsive.hint'
    },
    {
        value: 'web-desktop',
        labelKey: 'newproj.platform.webDesktop.label',
        hintKey: 'newproj.platform.webDesktop.hint'
    },
    {
        value: 'mobile-ios',
        labelKey: 'newproj.platform.mobileIos.label',
        hintKey: 'newproj.platform.mobileIos.hint'
    },
    {
        value: 'mobile-android',
        labelKey: 'newproj.platform.mobileAndroid.label',
        hintKey: 'newproj.platform.mobileAndroid.hint'
    },
    {
        value: 'tablet',
        labelKey: 'newproj.platform.tablet.label',
        hintKey: 'newproj.platform.tablet.hint'
    },
    {
        value: 'desktop-app',
        labelKey: 'newproj.platform.desktopApp.label',
        hintKey: 'newproj.platform.desktopApp.hint'
    }
];
const TAB_LABEL_KEYS = {
    prototype: 'newproj.tabPrototype',
    'live-artifact': 'newproj.tabLiveArtifact',
    deck: 'newproj.tabDeck',
    template: 'newproj.tabTemplate',
    media: 'newproj.tabMedia',
    other: 'newproj.tabOther'
};
// Maps the New Project tab + media surface to the apply-result target
// kind enum. `media` collapses to image/video/audio inside callers;
// this helper covers the non-media tabs and the live-artifact special
// case. Media surfaces map case-by-case at the call site.
function newProjectTabToApplyKind(tab) {
    switch(tab){
        case 'prototype':
            return 'prototype';
        case 'deck':
            return 'slide_deck';
        case 'live-artifact':
            return 'live_artifact';
        case 'media':
            // Media tab has its own surface picker; the apply emission
            // happens before the user selects image/video/audio, so we
            // mark it `unknown` rather than guessing. The picker is also
            // typically hidden under media but the helper stays total.
            return 'unknown';
        case 'template':
        case 'other':
            return 'unknown';
    }
}
// Maps a `DesignSystemSummary.source` value to the DS origin enum used
// by `design_system_apply_result.design_system_source`. The summary
// shape only carries `'built-in' | 'installed' | 'user'`; we map them
// onto the doc's enum: user → manual_create, built-in → official_preset,
// installed → template.
function deriveDesignSystemOrigin(system) {
    if (!system) return undefined;
    switch(system.source){
        case 'user':
            return 'manual_create';
        case 'built-in':
            return 'official_preset';
        case 'installed':
            return 'template';
        default:
            return 'unknown';
    }
}
function deriveDesignSystemStatusValue(system) {
    if (!system) return undefined;
    switch(system.status){
        case 'draft':
        case 'published':
            return system.status;
        default:
            return 'unknown';
    }
}
const MEDIA_SURFACE_LABEL_KEYS = {
    image: 'newproj.surfaceImage',
    video: 'newproj.surfaceVideo',
    audio: 'newproj.surfaceAudio'
};
function defaultDesignSystemSelection(defaultDesignSystemId, designSystems) {
    if (!defaultDesignSystemId) return [];
    return designSystems.some((d)=>d.id === defaultDesignSystemId && (d.status ?? 'published') !== 'draft') ? [
        defaultDesignSystemId
    ] : [];
}
function isSelectableProjectDesignSystem(system) {
    return system.status !== 'draft';
}
function buildDesignSystemCreateSelection(showDesignSystemPicker, selectedIds) {
    return showDesignSystemPicker ? {
        primary: selectedIds[0] ?? null,
        inspirations: selectedIds.slice(1)
    } : {
        primary: null,
        inspirations: []
    };
}
function NewProjectPanel({ skills, designSystems, defaultDesignSystemId, templates, onDeleteTemplate, promptTemplates, onCreate, onImportClaudeDesign, onImportFolder, onImportFolderResponse, mediaProviders, connectors, connectorsLoading = false, onOpenConnectorsTab, loading = false, initialTab = 'prototype' }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const importInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [importing, setImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importZipError, setImportZipError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workingDir, setWorkingDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workingDirToken, setWorkingDirToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workingDirPicking, setWorkingDirPicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [workingDirError, setWorkingDirError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    // P0 analytics — fire surface_view once per (panel mount, tab) pair so the
    // funnel sees both initial open and tab switches without double-counting on
    // unrelated re-renders. Ref keys on a tab string because the panel is a
    // long-lived component the modal mounts/unmounts as the user opens/closes it.
    const newProjectViewedTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            if (newProjectViewedTabRef.current === tab) return;
            newProjectViewedTabRef.current = tab;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackNewProjectModalSurfaceView"])(analytics.track, {
                page_name: 'home',
                area: 'new_project_modal',
                tab_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTabToTracking"])(tab)
            });
        }
    }["NewProjectPanel.useEffect"], [
        tab,
        analytics.track
    ]);
    // Media tab consolidates image / video / audio. The active surface picks
    // which set of options + skill resolution applies; submission still maps
    // back to the existing image/video/audio ProjectKind branches so the
    // backend contract is unchanged.
    const [mediaSurface, setMediaSurface] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('image');
    const tabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tabScroll, setTabScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: false,
        right: false
    });
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Design-system selection is now an *array* internally so the same
    // component can drive both single-select and multi-select modes without
    // duplicating state. Single-select coerces to length 0/1.
    const selectableDesignSystems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewProjectPanel.useMemo[selectableDesignSystems]": ()=>designSystems.filter(isSelectableProjectDesignSystem)
    }["NewProjectPanel.useMemo[selectableDesignSystems]"], [
        designSystems
    ]);
    const initialDefaultDsSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewProjectPanel.useMemo[initialDefaultDsSelection]": ()=>defaultDesignSystemSelection(defaultDesignSystemId, selectableDesignSystems)
    }["NewProjectPanel.useMemo[initialDefaultDsSelection]"], [
        defaultDesignSystemId,
        selectableDesignSystems
    ]);
    const [selectedDsIds, setSelectedDsIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NewProjectPanel.useState": ()=>initialDefaultDsSelection
    }["NewProjectPanel.useState"]);
    const [dsSelectionTouched, setDsSelectionTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dsMulti, setDsMulti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Per-tab metadata. Tracked independently so switching tabs preserves
    // each tab's pick rather than resetting to defaults.
    const [fidelity, setFidelity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('high-fidelity');
    const [platformTargets, setPlatformTargets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'responsive'
    ]);
    const [includeLandingPage, setIncludeLandingPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includeOsWidgets, setIncludeOsWidgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speakerNotes, setSpeakerNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animations, setAnimations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [templateId, setTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageModel, setImageModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_IMAGE_MODEL"]);
    const [imageAspect, setImageAspect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('1:1');
    const [videoModel, setVideoModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VIDEO_MODEL"]);
    const [videoModelTouched, setVideoModelTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoAspect, setVideoAspect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('16:9');
    const [videoLength, setVideoLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [audioKind, setAudioKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('speech');
    const [audioModel, setAudioModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUDIO_MODEL"].speech);
    const [audioDuration, setAudioDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [voice, setVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Per-surface curated prompt template the user picked. Tracked
    // independently for image vs video so flipping tabs doesn't clobber the
    // other one's pick. The body is editable in-line and the edited copy is
    // what gets carried to the agent — that's the "optimize the template"
    // affordance the design brief asks for.
    const [imagePromptTemplate, setImagePromptTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [videoPromptTemplate, setVideoPromptTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Design system is meaningful only for the structured/visual surfaces
    // (prototype, deck, template, and the freeform "other" canvas). The
    // media surfaces use prompt templates instead — design tokens don't map
    // onto image/video/audio generations, and the picker just adds noise
    // there. Keep this list explicit so future tabs declare their intent.
    const tabSupportsDesignSystem = tab === 'prototype' || tab === 'deck' || tab === 'template' || tab === 'other';
    // Orbit briefings ship their own complete visual language baked into
    // example.html and explicitly opt out of DESIGN.md injection via
    // `od.design_system.requires: false`. Hide the picker only for those
    // Orbit scenario skills; the general prototype creation surface should
    // still honor the user's configured default design system even when a
    // non-Orbit default skill does not require one.
    const tabDefaultSkillForcesNoDs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs]": ()=>{
            const tabSkillId = ({
                "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId": ()=>{
                    if (tab === 'prototype' || tab === 'live-artifact') {
                        const list = skills.filter({
                            "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId.list": (s)=>s.mode === 'prototype'
                        }["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId.list"]);
                        return list.find({
                            "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId": (s)=>s.defaultFor.includes('prototype')
                        }["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId"])?.id ?? list[0]?.id ?? null;
                    }
                    if (tab === 'deck') {
                        const list = skills.filter({
                            "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId.list": (s)=>s.mode === 'deck'
                        }["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId.list"]);
                        return list.find({
                            "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId": (s)=>s.defaultFor.includes('deck')
                        }["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId"])?.id ?? list[0]?.id ?? null;
                    }
                    return null;
                }
            })["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].tabSkillId"]();
            if (!tabSkillId) return false;
            const s = skills.find({
                "NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].s": (x)=>x.id === tabSkillId
            }["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs].s"]);
            return s ? s.scenario === 'orbit' && s.designSystemRequired === false : false;
        }
    }["NewProjectPanel.useMemo[tabDefaultSkillForcesNoDs]"], [
        tab,
        skills
    ]);
    const showDesignSystemPicker = tabSupportsDesignSystem && !tabDefaultSkillForcesNoDs;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            if (dsSelectionTouched) return;
            setSelectedDsIds(initialDefaultDsSelection);
        }
    }["NewProjectPanel.useEffect"], [
        dsSelectionTouched,
        initialDefaultDsSelection
    ]);
    // Fires `design_system_apply_result` with `auto_select` when the
    // picker mounts/refreshes and pre-selects the user's default DS
    // without an explicit click. Only emits once per default-id while
    // the picker is showing, and only while the user hasn't manually
    // changed the selection (so the dashboard separates auto vs manual
    // attribution). The picker visibility guard skips media tabs where
    // the DS picker isn't rendered.
    const autoSelectFiredForRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            if (!showDesignSystemPicker) return;
            if (dsSelectionTouched) return;
            const primary = initialDefaultDsSelection[0];
            if (!primary) return;
            if (autoSelectFiredForRef.current === primary) return;
            autoSelectFiredForRef.current = primary;
            const picked = selectableDesignSystems.find({
                "NewProjectPanel.useEffect.picked": (d)=>d.id === primary
            }["NewProjectPanel.useEffect.picked"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemApplyResult"])(analytics.track, {
                page_name: 'home',
                area: 'design_system_picker',
                action: 'auto_select',
                result: 'success',
                target_project_kind: newProjectTabToApplyKind(tab),
                design_system_id: primary,
                design_system_source: deriveDesignSystemOrigin(picked),
                design_system_status: deriveDesignSystemStatusValue(picked),
                design_system_applied: true,
                design_system_selection_mode: 'default',
                is_default: true,
                is_auto_selected: true,
                available_design_system_count: designSystems.length,
                duration_ms: 0
            });
        }
    }["NewProjectPanel.useEffect"], [
        analytics.track,
        dsSelectionTouched,
        initialDefaultDsSelection,
        selectableDesignSystems,
        showDesignSystemPicker,
        tab
    ]);
    // When entering the template tab, snap to the first user-saved template
    // if there is one (and we don't already have a valid pick). The template
    // tab no longer offers a built-in fallback — the entire point is to
    // start from a template *the user* created via Share.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            if (tab !== 'template') return;
            if (templates.length === 0) {
                setTemplateId(null);
                return;
            }
            if (templateId == null || !templates.some({
                "NewProjectPanel.useEffect": (t)=>t.id === templateId
            }["NewProjectPanel.useEffect"])) {
                setTemplateId(templates[0].id);
            }
        }
    }["NewProjectPanel.useEffect"], [
        tab,
        templates,
        templateId
    ]);
    // The skill the request still routes through — kept so prototype/deck
    // pick a default-rendered skill (so the agent gets the right SKILL.md
    // body) without requiring the user to choose one explicitly.
    const skillIdForTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewProjectPanel.useMemo[skillIdForTab]": ()=>{
            if (tab === 'other') return null;
            if (tab === 'prototype') {
                const list = skills.filter({
                    "NewProjectPanel.useMemo[skillIdForTab].list": (s)=>s.mode === 'prototype'
                }["NewProjectPanel.useMemo[skillIdForTab].list"]);
                return list.find({
                    "NewProjectPanel.useMemo[skillIdForTab]": (s)=>s.defaultFor.includes('prototype')
                }["NewProjectPanel.useMemo[skillIdForTab]"])?.id ?? list[0]?.id ?? null;
            }
            if (tab === 'live-artifact') {
                const exact = skills.find({
                    "NewProjectPanel.useMemo[skillIdForTab].exact": (s)=>s.id === 'live-artifact' || s.name === 'live-artifact'
                }["NewProjectPanel.useMemo[skillIdForTab].exact"]);
                if (exact) return exact.id;
                const hinted = skills.find({
                    "NewProjectPanel.useMemo[skillIdForTab].hinted": (s)=>{
                        const haystack = `${s.id} ${s.name} ${s.description} ${s.triggers.join(' ')}`.toLowerCase();
                        return haystack.includes('live artifact') || haystack.includes('live-artifact');
                    }
                }["NewProjectPanel.useMemo[skillIdForTab].hinted"]);
                if (hinted) return hinted.id;
                const prototypes = skills.filter({
                    "NewProjectPanel.useMemo[skillIdForTab].prototypes": (s)=>s.mode === 'prototype'
                }["NewProjectPanel.useMemo[skillIdForTab].prototypes"]);
                return prototypes.find({
                    "NewProjectPanel.useMemo[skillIdForTab]": (s)=>s.defaultFor.includes('prototype')
                }["NewProjectPanel.useMemo[skillIdForTab]"])?.id ?? prototypes[0]?.id ?? null;
            }
            if (tab === 'deck') {
                const list = skills.filter({
                    "NewProjectPanel.useMemo[skillIdForTab].list": (s)=>s.mode === 'deck'
                }["NewProjectPanel.useMemo[skillIdForTab].list"]);
                return list.find({
                    "NewProjectPanel.useMemo[skillIdForTab]": (s)=>s.defaultFor.includes('deck')
                }["NewProjectPanel.useMemo[skillIdForTab]"])?.id ?? list[0]?.id ?? null;
            }
            if (tab === 'media') {
                const list = skills.filter({
                    "NewProjectPanel.useMemo[skillIdForTab].list": (s)=>s.mode === mediaSurface || s.surface === mediaSurface
                }["NewProjectPanel.useMemo[skillIdForTab].list"]);
                // The HyperFrames-HTML render path lives in the `hyperframes` skill.
                // When the user has chosen `hyperframes-html` (via dropdown or template),
                // pin the project to that skill explicitly.
                if (mediaSurface === 'video' && videoModel === 'hyperframes-html') {
                    const hyper = list.find({
                        "NewProjectPanel.useMemo[skillIdForTab].hyper": (s)=>s.id === 'hyperframes'
                    }["NewProjectPanel.useMemo[skillIdForTab].hyper"]);
                    if (hyper) return hyper.id;
                }
                return list.find({
                    "NewProjectPanel.useMemo[skillIdForTab]": (s)=>s.defaultFor.includes(mediaSurface)
                }["NewProjectPanel.useMemo[skillIdForTab]"])?.id ?? list[0]?.id ?? null;
            }
            return null;
        }
    }["NewProjectPanel.useMemo[skillIdForTab]"], [
        tab,
        mediaSurface,
        skills,
        videoModel
    ]);
    // When the user picks a curated prompt template, propagate the template's
    // declared `model` and `aspect` onto the actual project state. Without
    // this the user picks (e.g.) a HyperFrames template but `videoModel`
    // stays on the default seedance — the agent then dispatches the wrong
    // model and the render path mismatches the prompt.
    function handleImagePromptTemplate(pick) {
        setImagePromptTemplate(pick);
        const m = pick?.summary.model;
        // Accept catalogued ids plus any live AIHubMix catalogue id (aihubmix-*),
        // which renders dynamically and won't appear in the static IMAGE_MODELS.
        if (m && (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_MODELS"].some((x)=>x.id === m) || m.startsWith('aihubmix-'))) setImageModel(m);
        const a = pick?.summary.aspect;
        if (a && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_ASPECTS"].includes(a)) {
            setImageAspect(a);
        }
    }
    function handleVideoPromptTemplate(pick) {
        setVideoPromptTemplate(pick);
        const m = pick?.summary.model;
        if (m && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_MODELS"].some((x)=>x.id === m)) {
            setVideoModel(m);
            setVideoModelTouched(true);
        }
        const a = pick?.summary.aspect;
        if (a && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_ASPECTS"].includes(a)) {
            setVideoAspect(a);
        }
    }
    function handleVideoModel(id) {
        setVideoModel(id);
        setVideoModelTouched(true);
    }
    // The HyperFrames skill renders HTML compositions through a local
    // `npx hyperframes render` path, which dispatches under the
    // `hyperframes-html` model — not seedance/veo/sora. When the resolved
    // skill for the video tab is hyperframes, default `videoModel` so the
    // model dropdown matches the actual render path. Once the user has
    // explicitly chosen a model (via the dropdown or by picking a template
    // that declares a model), `videoModelTouched` latches and this effect
    // becomes a no-op for the rest of the panel session — re-entering the
    // Media tab's Video surface no longer silently rewrites their override back to
    // hyperframes-html.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            if (tab !== 'media' || mediaSurface !== 'video') return;
            if (skillIdForTab !== 'hyperframes') return;
            if (videoModelTouched) return;
            if (videoPromptTemplate) return;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_MODELS"].some({
                "NewProjectPanel.useEffect": (m)=>m.id === 'hyperframes-html'
            }["NewProjectPanel.useEffect"])) return;
            setVideoModel('hyperframes-html');
        // Intentionally leaving videoPromptTemplate / videoModel out of deps
        // so this only fires when the user toggles the tab or the skill
        // resolution shifts — not whenever the user changes the dropdown.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["NewProjectPanel.useEffect"], [
        tab,
        mediaSurface,
        skillIdForTab,
        videoModelTouched
    ]);
    const canCreate = !loading && (tab !== 'template' || templateId != null);
    function updateTabScrollState() {
        const el = tabsRef.current;
        if (!el) return;
        const maxLeft = el.scrollWidth - el.clientWidth;
        setTabScroll({
            left: el.scrollLeft > 2,
            right: el.scrollLeft < maxLeft - 2
        });
    }
    function scrollTabs(direction) {
        const el = tabsRef.current;
        if (!el) return;
        el.scrollBy({
            left: direction * Math.max(120, el.clientWidth * 0.65),
            behavior: 'smooth'
        });
    }
    function handleDesignSystemChange(ids) {
        setDsSelectionTouched(true);
        setSelectedDsIds(ids);
        const previousPrimary = selectedDsIds[0] ?? null;
        const nextPrimary = ids[0] ?? null;
        // Only emit when the primary actually changed; secondary reorders
        // inside multi-select don't count as a fresh apply.
        if (previousPrimary === nextPrimary) return;
        const targetKind = newProjectTabToApplyKind(tab);
        if (ids.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemApplyResult"])(analytics.track, {
                page_name: 'home',
                area: 'design_system_picker',
                action: 'clear_selection',
                result: 'success',
                target_project_kind: targetKind,
                design_system_applied: false,
                design_system_selection_mode: 'none',
                is_default: false,
                is_auto_selected: false,
                available_design_system_count: designSystems.length,
                duration_ms: 0
            });
            return;
        }
        if (!nextPrimary) return;
        const picked = designSystems.find((d)=>d.id === nextPrimary);
        const isDefault = nextPrimary === defaultDesignSystemId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackDesignSystemApplyResult"])(analytics.track, {
            page_name: 'home',
            area: 'design_system_picker',
            action: 'select_design_system',
            result: 'success',
            target_project_kind: targetKind,
            design_system_id: nextPrimary,
            design_system_source: deriveDesignSystemOrigin(picked),
            design_system_status: deriveDesignSystemStatusValue(picked),
            design_system_applied: true,
            design_system_selection_mode: isDefault ? 'default' : 'manual',
            is_default: isDefault,
            // `is_auto_selected` reports whether this row was picked by the
            // app (initial default selection from `initialDefaultDsSelection`)
            // rather than by the user. Once `dsSelectionTouched` is set we
            // know any subsequent change came from a click.
            is_auto_selected: false,
            available_design_system_count: designSystems.length,
            duration_ms: 0
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            const el = tabsRef.current;
            if (!el) return;
            updateTabScrollState();
            const onScroll = {
                "NewProjectPanel.useEffect.onScroll": ()=>updateTabScrollState()
            }["NewProjectPanel.useEffect.onScroll"];
            el.addEventListener('scroll', onScroll, {
                passive: true
            });
            const ro = new ResizeObserver(updateTabScrollState);
            ro.observe(el);
            return ({
                "NewProjectPanel.useEffect": ()=>{
                    el.removeEventListener('scroll', onScroll);
                    ro.disconnect();
                }
            })["NewProjectPanel.useEffect"];
        }
    }["NewProjectPanel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewProjectPanel.useEffect": ()=>{
            const el = tabsRef.current;
            const active = el?.querySelector('.newproj-tab.active');
            active?.scrollIntoView({
                behavior: 'smooth',
                inline: 'nearest',
                block: 'nearest'
            });
            window.setTimeout(updateTabScrollState, 180);
        }
    }["NewProjectPanel.useEffect"], [
        tab
    ]);
    function handleCreate() {
        if (!canCreate) return;
        // Media surfaces don't carry a design system pick. Force the primary
        // and inspiration ids to empty there so the New Project panel can't
        // accidentally bind a stale DS that the user can no longer see in the
        // form (the picker is hidden for image/video/audio).
        const { primary: primaryDs, inspirations } = buildDesignSystemCreateSelection(showDesignSystemPicker, selectedDsIds);
        const promptTemplatePick = tab === 'media' ? mediaSurface === 'image' ? imagePromptTemplate : mediaSurface === 'video' ? videoPromptTemplate : null : null;
        const trimmedName = name.trim();
        const metadata = buildMetadata({
            tab,
            mediaSurface,
            fidelity,
            platformTargets,
            includeLandingPage,
            includeOsWidgets,
            speakerNotes,
            animations,
            templateId,
            templates,
            imageModel,
            imageAspect,
            videoModel,
            videoAspect,
            videoLength,
            audioKind,
            audioModel,
            audioDuration,
            voice,
            inspirationIds: inspirations,
            promptTemplate: promptTemplatePick
        });
        // Generate the click→result correlation id here so the home_click and
        // the eventual project_create_result share request_id.
        const requestId = analytics.newRequestId();
        // v2 emits ui_click element=create on the New project modal; the
        // project_create_result correlated through `requestId` carries the
        // project_kind / fidelity payload, so we no longer duplicate them
        // on the click event.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackNewProjectModalElementClick"])(analytics.track, {
            page_name: 'home',
            area: 'new_project_modal',
            element: 'create',
            tab_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTabToTracking"])(tab)
        }, {
            requestId
        });
        onCreate({
            name: trimmedName || autoName(tab, mediaSurface, t),
            skillId: skillIdForTab,
            designSystemId: primaryDs,
            metadata: {
                ...metadata,
                nameSource: trimmedName ? 'user' : 'generated',
                ...workingDir ? {
                    userWorkingDir: workingDir
                } : {}
            },
            ...workingDirToken ? {
                userWorkingDirToken: workingDirToken
            } : {},
            requestId
        });
    }
    async function handlePickWorkingDir() {
        if (workingDirPicking) return;
        setWorkingDirPicking(true);
        setWorkingDirError(null);
        try {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])()) {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickHostWorkingDir"])();
                if (result.ok) {
                    setWorkingDir(result.baseDir);
                    setWorkingDirToken(result.token);
                    return;
                }
                if ('canceled' in result && result.canceled) return;
                setWorkingDirError({
                    message: `Couldn't open the folder picker (${'reason' in result ? result.reason : 'host unavailable'}). Please update Open Design and try again.`
                });
                return;
            }
            const picked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openFolderDialog"])();
            if (picked) {
                setWorkingDir(picked);
                setWorkingDirToken(null);
            }
        } finally{
            setWorkingDirPicking(false);
        }
    }
    async function handleImportPicked(ev) {
        const file = ev.target.files?.[0];
        ev.target.value = '';
        if (!file || !onImportClaudeDesign) return;
        setImporting(true);
        setImportZipError(null);
        try {
            const result = await onImportClaudeDesign(file);
            if (result?.ok === false) {
                setImportZipError({
                    message: result.message ? `Import failed: ${result.message}` : 'Import failed',
                    details: result.details
                });
            }
        } catch (err) {
            setImportZipError({
                message: err instanceof Error ? `Import failed: ${err.message}` : 'Import failed'
            });
        } finally{
            setImporting(false);
        }
    }
    const folderImport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useOpenFolderImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenFolderImport"])({
        skillId: skillIdForTab,
        onImportFolder,
        onImportFolderResponse
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj",
        "data-testid": "new-project-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `newproj-tabs-shell${tabScroll.left ? ' can-left' : ''}${tabScroll.right ? ' can-right' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `newproj-tabs-arrow left${tabScroll.left ? '' : ' hidden'}`,
                        onClick: ()=>scrollTabs(-1),
                        "aria-label": "Scroll project types left",
                        tabIndex: tabScroll.left ? 0 : -1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "chevron-left",
                            size: 16,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 797,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 790,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newproj-tabs",
                        role: "tablist",
                        ref: tabsRef,
                        children: Object.keys(TAB_LABEL_KEYS).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                role: "tab",
                                "data-testid": `new-project-tab-${entry}`,
                                "aria-selected": tab === entry,
                                className: `newproj-tab ${tab === entry ? 'active' : ''}`,
                                onClick: ()=>{
                                    if (entry !== tab) {
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackNewProjectModalTabClick"])(analytics.track, {
                                            page_name: 'home',
                                            area: 'new_project_modal',
                                            element: 'tab',
                                            tab_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$analytics$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTabToTracking"])(entry)
                                        });
                                    }
                                    setTab(entry);
                                },
                                children: t(TAB_LABEL_KEYS[entry])
                            }, entry, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 801,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 799,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `newproj-tabs-arrow right${tabScroll.right ? '' : ' hidden'}`,
                        onClick: ()=>scrollTabs(1),
                        "aria-label": "Scroll project types right",
                        tabIndex: tabScroll.right ? 0 : -1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "chevron-right",
                            size: 16,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 830,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 823,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "newproj-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "newproj-title-text",
                                children: titleForTab(tab, mediaSurface, t)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this),
                            tab === 'live-artifact' ? // "Beta" is an internationally adopted brand-style status marker;
                            // intentionally not run through t() (consistent with short product
                            // status pills that read the same across our supported locales).
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "newproj-title-badge",
                                "aria-label": "Beta feature",
                                children: "Beta"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newproj-name-row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "newproj-name",
                            "data-testid": "new-project-name",
                            placeholder: t('newproj.namePlaceholder'),
                            value: name,
                            onChange: (e)=>setName(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 845,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 844,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newproj-working-dir-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `ghost newproj-working-dir od-tooltip${workingDir ? ' picked' : ''}`,
                                onClick: ()=>void handlePickWorkingDir(),
                                disabled: workingDirPicking,
                                title: workingDir ?? t('workingDirPicker.homeTitle'),
                                "data-tooltip": workingDir ?? t('workingDirPicker.homeTitle'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "folder",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 863,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: workingDirPicking ? t('workingDirPicker.processing') : workingDir ? displayFolderName(workingDir) : t('workingDirPicker.select')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 864,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 855,
                                columnNumber: 11
                            }, this),
                            workingDir ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "newproj-working-dir-clear",
                                onClick: ()=>{
                                    setWorkingDir(null);
                                    setWorkingDirToken(null);
                                },
                                "aria-label": t('workingDirPicker.clearAria'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 10
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 882,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 873,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 854,
                        columnNumber: 9
                    }, this),
                    showDesignSystemPicker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemPicker, {
                        designSystems: selectableDesignSystems,
                        defaultDesignSystemId: defaultDesignSystemId,
                        selectedIds: selectedDsIds,
                        multi: dsMulti,
                        onChangeMulti: setDsMulti,
                        onChange: handleDesignSystemChange,
                        loading: loading
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'media' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newproj-media-segmented",
                        role: "tablist",
                        "aria-label": t('newproj.tabMedia'),
                        children: Object.keys(MEDIA_SURFACE_LABEL_KEYS).map((surface)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "data-testid": `new-project-media-surface-${surface}`,
                                "aria-selected": mediaSurface === surface,
                                className: `newproj-media-surface ${mediaSurface === surface ? 'active' : ''}`,
                                onClick: ()=>setMediaSurface(surface),
                                children: t(MEDIA_SURFACE_LABEL_KEYS[surface])
                            }, surface, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 906,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 900,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'media' && mediaSurface === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptTemplatePicker, {
                        surface: "image",
                        templates: promptTemplates,
                        value: imagePromptTemplate,
                        onChange: handleImagePromptTemplate
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 922,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'media' && mediaSurface === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptTemplatePicker, {
                        surface: "video",
                        templates: promptTemplates,
                        value: videoPromptTemplate,
                        onChange: handleVideoPromptTemplate
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 931,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'prototype' || tab === 'live-artifact' || tab === 'template' || tab === 'other' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformPicker, {
                        value: platformTargets,
                        onChange: setPlatformTargets
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 940,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'prototype' || tab === 'live-artifact' || tab === 'template' || tab === 'other' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurfaceOptions, {
                        includeLandingPage: includeLandingPage,
                        includeOsWidgets: includeOsWidgets,
                        onIncludeLandingPage: setIncludeLandingPage,
                        onIncludeOsWidgets: setIncludeOsWidgets
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 944,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'prototype' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FidelityPicker, {
                        value: fidelity,
                        onChange: setFidelity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 955,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'live-artifact' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectorsSection, {
                        connectors: connectors,
                        loading: connectorsLoading,
                        onOpenConnectorsTab: onOpenConnectorsTab
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 959,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'deck' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                        label: t('newproj.toggleSpeakerNotes'),
                        hint: t('newproj.toggleSpeakerNotesHint'),
                        checked: speakerNotes,
                        onChange: setSpeakerNotes
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 967,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'template' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplatePicker, {
                                templates: templates,
                                value: templateId,
                                onChange: setTemplateId,
                                onDelete: onDeleteTemplate
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 977,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleRow, {
                                label: t('newproj.toggleAnimations'),
                                hint: t('newproj.toggleAnimationsHint'),
                                checked: animations,
                                onChange: setAnimations
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 983,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null,
                    tab === 'media' && mediaSurface === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaProjectOptions, {
                        surface: "image",
                        imageModel: imageModel,
                        imageAspect: imageAspect,
                        mediaProviders: mediaProviders,
                        onImageModel: setImageModel,
                        onImageAspect: setImageAspect
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 993,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'media' && mediaSurface === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaProjectOptions, {
                        surface: "video",
                        videoModel: videoModel,
                        videoAspect: videoAspect,
                        videoLength: videoLength,
                        mediaProviders: mediaProviders,
                        onVideoModel: handleVideoModel,
                        onVideoAspect: setVideoAspect,
                        onVideoLength: setVideoLength
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1004,
                        columnNumber: 11
                    }, this) : null,
                    tab === 'media' && mediaSurface === 'audio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaProjectOptions, {
                        surface: "audio",
                        audioKind: audioKind,
                        audioModel: audioModel,
                        audioDuration: audioDuration,
                        voice: voice,
                        mediaProviders: mediaProviders,
                        onAudioKind: (kind)=>{
                            setAudioKind(kind);
                            setAudioModel(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUDIO_MODEL"][kind]);
                            if (kind === 'sfx') {
                                setAudioDuration((duration)=>Math.min(duration, SFX_AUDIO_DURATIONS_SEC.at(-1) ?? 30));
                            }
                        },
                        onAudioModel: setAudioModel,
                        onAudioDuration: setAudioDuration,
                        onVoice: setVoice
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1017,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "primary newproj-create",
                        "data-testid": "create-project",
                        onClick: handleCreate,
                        disabled: !canCreate,
                        title: tab === 'template' && templateId == null ? t('newproj.createDisabledTitle') : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "plus",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tab === 'template' ? t('newproj.createFromTemplate') : tab === 'live-artifact' ? t('newproj.createLiveArtifact') : t('newproj.create')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1049,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1037,
                        columnNumber: 9
                    }, this),
                    onImportClaudeDesign ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: importInputRef,
                                type: "file",
                                accept: ".zip,application/zip",
                                hidden: true,
                                onChange: handleImportPicked
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1059,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost newproj-import",
                                disabled: loading || importing,
                                title: t('newproj.importClaudeZipTitle'),
                                onClick: ()=>importInputRef.current?.click(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "import",
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: importing ? t('newproj.importingClaudeZip') : t('newproj.importClaudeZip')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 1074,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1066,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null,
                    folderImport.available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "newproj-open-folder",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ghost newproj-import",
                            disabled: folderImport.importing,
                            onClick: ()=>void folderImport.openFolder(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "folder",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 1090,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: folderImport.importing ? 'Opening...' : 'Open folder'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 1091,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 1084,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1083,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 833,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-footer",
                children: t('newproj.privacyFooter')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1096,
                columnNumber: 7
            }, this),
            importZipError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: importZipError.message,
                details: importZipError.details ?? null,
                ttlMs: 6000,
                onDismiss: ()=>setImportZipError(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1098,
                columnNumber: 9
            }, this) : null,
            folderImport.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: folderImport.error.message,
                details: folderImport.error.details ?? null,
                ttlMs: 6000,
                onDismiss: folderImport.clearError
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1106,
                columnNumber: 9
            }, this) : null,
            workingDirError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                message: workingDirError.message,
                details: workingDirError.details ?? null,
                ttlMs: 6000,
                onDismiss: ()=>setWorkingDirError(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1114,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 788,
        columnNumber: 5
    }, this);
}
_s(NewProjectPanel, "NCrhi+fPCxsbIvJO92L4YZZIlZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$useOpenFolderImport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenFolderImport"]
    ];
});
_c2 = NewProjectPanel;
function displayFolderName(path) {
    return path.split(/[/\\]/).filter(Boolean).pop() ?? path;
}
function PlatformPicker({ value, onChange }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listboxId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    function togglePlatform(next) {
        const active = value.includes(next);
        const updated = active ? value.filter((item)=>item !== next) : [
            ...value,
            next
        ];
        onChange(updated.length > 0 ? updated : [
            'responsive'
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlatformPicker.useEffect": ()=>{
            if (!open) return;
            function onPointer(e) {
                if (wrapRef.current?.contains(e.target)) return;
                setOpen(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') setOpen(false);
            }
            // Defer listener registration by a tick so the very click that opened
            // the popover doesn't get re-interpreted as an outside-click on the
            // mousedown that follows in the same event cycle.
            const tid = window.setTimeout({
                "PlatformPicker.useEffect.tid": ()=>{
                    document.addEventListener('mousedown', onPointer);
                    document.addEventListener('keydown', onKey);
                }
            }["PlatformPicker.useEffect.tid"], 0);
            return ({
                "PlatformPicker.useEffect": ()=>{
                    window.clearTimeout(tid);
                    document.removeEventListener('mousedown', onPointer);
                    document.removeEventListener('keydown', onKey);
                }
            })["PlatformPicker.useEffect"];
        }
    }["PlatformPicker.useEffect"], [
        open
    ]);
    const primary = DESIGN_PLATFORMS.find((o)=>o.value === value[0]) ?? null;
    const extraCount = Math.max(0, value.length - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `newproj-section ds-picker platform-picker${open ? ' open' : ''}`,
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: "Target platforms"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `ds-picker-trigger${open ? ' open' : ''}${primary ? '' : ' empty'}`,
                onClick: ()=>setOpen((v)=>!v),
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                "aria-controls": open ? listboxId : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-picker-meta",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ds-picker-title",
                            children: [
                                primary ? t(primary.labelKey) : 'Pick a platform',
                                extraCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ds-picker-extra-pill",
                                    children: [
                                        "+",
                                        extraCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 1190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "chevron-down",
                        size: 14,
                        className: "ds-picker-chevron",
                        style: {
                            transform: open ? 'rotate(180deg)' : undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1181,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-picker-popover",
                id: listboxId,
                role: "listbox",
                "aria-label": "Target platforms",
                "aria-multiselectable": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ds-picker-list",
                    children: DESIGN_PLATFORMS.map((option)=>{
                        const active = value.includes(option.value);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            role: "option",
                            "aria-selected": active,
                            className: `ds-picker-item${active ? ' active' : ''}`,
                            onClick: ()=>togglePlatform(option.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ds-picker-item-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ds-picker-item-title",
                                            children: t(option.labelKey)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 1225,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ds-picker-item-sub",
                                            children: t(option.hintKey)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 1224,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `ds-picker-mark check${active ? ' active' : ''}`,
                                    "aria-hidden": true,
                                    children: active ? '✓' : ''
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 1228,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 1216,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 1212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1205,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1176,
        columnNumber: 5
    }, this);
}
_s1(PlatformPicker, "6p854nzbUVjcSGA8lHU3+lYVo8M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c3 = PlatformPicker;
function SurfaceOptions({ includeLandingPage, includeOsWidgets, onIncludeLandingPage, onIncludeOsWidgets }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-section surface-options",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: t('newproj.surfaceOptionsLabel')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "compact-toggle-list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompactToggle, {
                        label: t('newproj.includeLandingPage'),
                        hint: t('newproj.includeLandingPageHint'),
                        checked: includeLandingPage,
                        onChange: onIncludeLandingPage
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompactToggle, {
                        label: t('newproj.includeOsWidgets'),
                        hint: t('newproj.includeOsWidgetsHint'),
                        checked: includeOsWidgets,
                        onChange: onIncludeOsWidgets
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1257,
        columnNumber: 5
    }, this);
}
_s2(SurfaceOptions, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c4 = SurfaceOptions;
// Lightweight inline toggle row. The hint moves to a native tooltip so the
// row stays one line tall — used by SurfaceOptions where the toggles are
// secondary controls and the full card treatment of ToggleRow felt too heavy.
function CompactToggle({ label, hint, checked, onChange, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `compact-toggle${checked ? ' on' : ''}${disabled ? ' disabled' : ''}`,
        onClick: ()=>{
            if (!disabled) onChange(!checked);
        },
        "aria-pressed": checked,
        disabled: disabled,
        title: hint,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "compact-toggle-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "compact-toggle-switch",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1303,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1294,
        columnNumber: 5
    }, this);
}
_c5 = CompactToggle;
function FidelityPicker({ value, onChange }) {
    _s3();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: t('newproj.fidelityLabel')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fidelity-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FidelityCard, {
                        active: value === 'wireframe',
                        onClick: ()=>onChange('wireframe'),
                        label: t('newproj.fidelityWireframe'),
                        variant: "wireframe"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FidelityCard, {
                        active: value === 'high-fidelity',
                        onClick: ()=>onChange('high-fidelity'),
                        label: t('newproj.fidelityHigh'),
                        variant: "high-fidelity"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1317,
        columnNumber: 5
    }, this);
}
_s3(FidelityPicker, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c6 = FidelityPicker;
/* ============================================================
   Connectors section (live-artifact only).
   - Lists configured connectors as compact chips so the user can
     see at a glance what data sources this artifact can pull from.
   - When no connector is configured (or the list hasn't loaded yet
     and ended up empty), shows a guidance card that, on click, opens
     the Settings → Connectors surface (the new home of the catalog).
   ============================================================ */ function ConnectorsSection({ connectors, loading, onOpenConnectorsTab }) {
    _s4();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const configured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConnectorsSection.useMemo[configured]": ()=>(connectors ?? []).filter({
                "ConnectorsSection.useMemo[configured]": (c)=>c.status === 'connected'
            }["ConnectorsSection.useMemo[configured]"])
    }["ConnectorsSection.useMemo[configured]"], [
        connectors
    ]);
    const hasConfigured = configured.length > 0;
    if (loading && !connectors) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newproj-section newproj-connectors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "newproj-label",
                    children: t('newproj.connectorsLabel')
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 1364,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    height: 56,
                    width: "100%",
                    radius: 8
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 1365,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 1363,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-section newproj-connectors",
        "data-testid": "new-project-connectors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-connectors-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "newproj-label",
                        children: t('newproj.connectorsLabel')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1376,
                        columnNumber: 9
                    }, this),
                    hasConfigured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "newproj-connectors-manage",
                        onClick: ()=>onOpenConnectorsTab?.(),
                        "data-testid": "new-project-connectors-manage",
                        children: t('newproj.connectorsManage')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1378,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1375,
                columnNumber: 7
            }, this),
            hasConfigured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "newproj-connectors-hint",
                        children: [
                            configured.length === 1 ? t('newproj.connectorsCountOne', {
                                n: configured.length
                            }) : t('newproj.connectorsCountMany', {
                                n: configured.length
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                children: " · "
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1395,
                                columnNumber: 13
                            }, this),
                            t('newproj.connectorsHint')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1391,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "newproj-connectors-list",
                        "aria-label": t('newproj.connectorsLabel'),
                        children: configured.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "newproj-connector-chip",
                                title: c.name,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "newproj-connector-dot",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 1405,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "newproj-connector-name",
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 1406,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1400,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1398,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "newproj-connectors-empty",
                onClick: ()=>onOpenConnectorsTab?.(),
                "data-testid": "new-project-connectors-empty",
                "aria-label": t('newproj.connectorsEmptyCta'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "newproj-connectors-empty-icon",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "link",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 1420,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1419,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "newproj-connectors-empty-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "newproj-connectors-empty-title",
                                children: t('newproj.connectorsEmptyTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1423,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "newproj-connectors-empty-body",
                                children: t('newproj.connectorsEmptyBody')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1426,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "newproj-connectors-empty-cta",
                                children: t('newproj.connectorsEmptyCta')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1412,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1371,
        columnNumber: 5
    }, this);
}
_s4(ConnectorsSection, "q0y29+eZyWpu509KwuwbFYUnM0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c7 = ConnectorsSection;
function FidelityCard({ active, onClick, label, variant }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `fidelity-card${active ? ' active' : ''}`,
        onClick: onClick,
        "aria-pressed": active,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `fidelity-thumb fidelity-thumb-${variant}`,
                "aria-hidden": true,
                children: variant === 'wireframe' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WireframeArt, {}, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 1458,
                    columnNumber: 36
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighFidelityArt, {}, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 1458,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "fidelity-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1451,
        columnNumber: 5
    }, this);
}
_c8 = FidelityCard;
function WireframeArt() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 70",
        width: "100%",
        height: "100%",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "8",
                width: "46",
                height: "6",
                rx: "2",
                fill: "#d8d4cb"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "20",
                width: "34",
                height: "4",
                rx: "2",
                fill: "#ebe8e1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "28",
                width: "38",
                height: "4",
                rx: "2",
                fill: "#ebe8e1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "36",
                width: "30",
                height: "4",
                rx: "2",
                fill: "#ebe8e1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "22",
                cy: "56",
                r: "6",
                fill: "none",
                stroke: "#d8d4cb",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1472,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "64",
                y: "8",
                width: "50",
                height: "54",
                rx: "3",
                fill: "none",
                stroke: "#d8d4cb",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1473,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "14",
                width: "38",
                height: "4",
                rx: "2",
                fill: "#ebe8e1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "22",
                width: "32",
                height: "4",
                rx: "2",
                fill: "#ebe8e1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "30",
                width: "38",
                height: "4",
                rx: "2",
                fill: "#ebe8e1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1467,
        columnNumber: 5
    }, this);
}
_c9 = WireframeArt;
function HighFidelityArt() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 70",
        width: "100%",
        height: "100%",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "8",
                width: "34",
                height: "6",
                rx: "2",
                fill: "#1a1916"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "20",
                width: "46",
                height: "4",
                rx: "2",
                fill: "#74716b"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "28",
                width: "42",
                height: "4",
                rx: "2",
                fill: "#b3b0a8"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "40",
                width: "22",
                height: "9",
                rx: "2",
                fill: "#c96442"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "64",
                y: "8",
                width: "50",
                height: "54",
                rx: "4",
                fill: "#fbeee5"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "14",
                width: "38",
                height: "4",
                rx: "2",
                fill: "#c96442"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "22",
                width: "32",
                height: "3",
                rx: "1.5",
                fill: "#74716b"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "29",
                width: "36",
                height: "3",
                rx: "1.5",
                fill: "#b3b0a8"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "70",
                y: "36",
                width: "20",
                height: "6",
                rx: "2",
                fill: "#c96442"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1483,
        columnNumber: 5
    }, this);
}
_c10 = HighFidelityArt;
function ToggleRow({ label, hint, checked, onChange, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `toggle-row${checked ? ' on' : ''}${disabled ? ' disabled' : ''}`,
        onClick: ()=>{
            if (!disabled) onChange(!checked);
        },
        "aria-pressed": checked,
        disabled: disabled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toggle-row-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "toggle-row-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1519,
                        columnNumber: 9
                    }, this),
                    hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "toggle-row-hint",
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1520,
                        columnNumber: 17
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1518,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "toggle-row-switch",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1522,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1511,
        columnNumber: 5
    }, this);
}
_c11 = ToggleRow;
function TemplatePicker({ templates, value, onChange, onDelete }) {
    _s5();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const deleteTemplateTitleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [confirmDelete, setConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteError, setDeleteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function closeConfirm() {
        setConfirmDelete(null);
        setDeleting(false);
        setDeleteError(false);
    }
    async function runDelete() {
        if (!confirmDelete || !onDelete) return;
        setDeleting(true);
        setDeleteError(false);
        let ok = false;
        try {
            ok = await onDelete(confirmDelete.id);
        } catch  {
            ok = false;
        }
        if (ok) {
            if (value === confirmDelete.id) onChange(null);
            closeConfirm();
        } else {
            setDeleting(false);
            setDeleteError(true);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: t('newproj.templateLabel')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1573,
                columnNumber: 7
            }, this),
            templates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "template-howto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-howto-title",
                        children: t('newproj.noTemplatesTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1576,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-howto-body",
                        children: t('newproj.noTemplatesBody')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1579,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1575,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "template-list",
                children: templates.map((tpl)=>{
                    const fallbackDesc = `${t('newproj.savedTemplate')} · ${tpl.files.length} ${tpl.files.length === 1 ? t('newproj.fileSingular') : t('newproj.filePlural')}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateOption, {
                        active: value === tpl.id,
                        onClick: ()=>onChange(tpl.id),
                        onDelete: onDelete ? ()=>setConfirmDelete({
                                id: tpl.id,
                                name: tpl.name
                            }) : ()=>{},
                        name: tpl.name,
                        description: tpl.description ?? fallbackDesc
                    }, tpl.id, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1592,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1584,
                columnNumber: 9
            }, this),
            confirmDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                className: "modal-confirm",
                role: "alertdialog",
                onClose: deleting ? undefined : closeConfirm,
                ariaLabelledBy: deleteTemplateTitleId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        id: deleteTemplateTitleId,
                        children: t('newproj.deleteTemplateTitle')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1611,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        className: "modal-confirm-message",
                        children: t('newproj.deleteTemplateConfirm', {
                            name: confirmDelete.name
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1612,
                        columnNumber: 11
                    }, this),
                    deleteError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "modal-confirm-error",
                        role: "alert",
                        children: t('newproj.deleteTemplateError')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1616,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeConfirm,
                                disabled: deleting,
                                children: t('common.cancel')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1621,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "primary danger",
                                autoFocus: true,
                                disabled: deleting,
                                onClick: runDelete,
                                children: t('newproj.deleteTemplateConfirmCta')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1624,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1620,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1605,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1572,
        columnNumber: 5
    }, this);
}
_s5(TemplatePicker, "qXlQ2uZ6lFOfHGeAaK8iKIplj5U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c12 = TemplatePicker;
/* ============================================================
   Prompt template picker — for the image/video tabs only.
   - Trigger card (mirrors the design-system trigger) opens a popover
     with a search field and a thumbnail-card list filtered by surface.
   - When a template is picked we lazily fetch the full prompt body via
     fetchPromptTemplate(...) and drop it into a textarea so the user
     can tune ("optimize") the wording before clicking Create.
   - The (possibly edited) body lands in metadata.promptTemplate.prompt
     and becomes part of the system prompt — the agent treats it as a
     stylistic + structural reference for the generation request.
   ============================================================ */ function PromptTemplatePicker({ surface, templates, value, onChange }) {
    _s6();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loadingId, setLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Last template we tried to pick that failed — kept so the inline
    // banner can offer a one-click retry without making the user re-find
    // the card in the popover (which auto-closed on success). Cleared as
    // soon as a pick succeeds or the user picks a different template.
    const [lastFailedPick, setLastFailedPick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const surfaceScoped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptTemplatePicker.useMemo[surfaceScoped]": ()=>templates.filter({
                "PromptTemplatePicker.useMemo[surfaceScoped]": (tpl)=>tpl.surface === surface
            }["PromptTemplatePicker.useMemo[surfaceScoped]"])
    }["PromptTemplatePicker.useMemo[surfaceScoped]"], [
        templates,
        surface
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptTemplatePicker.useMemo[filtered]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return surfaceScoped;
            return surfaceScoped.filter({
                "PromptTemplatePicker.useMemo[filtered]": (tpl)=>{
                    return tpl.title.toLowerCase().includes(q) || tpl.summary.toLowerCase().includes(q) || (tpl.category || '').toLowerCase().includes(q) || (tpl.tags ?? []).some({
                        "PromptTemplatePicker.useMemo[filtered]": (tag)=>tag.toLowerCase().includes(q)
                    }["PromptTemplatePicker.useMemo[filtered]"]);
                }
            }["PromptTemplatePicker.useMemo[filtered]"]);
        }
    }["PromptTemplatePicker.useMemo[filtered]"], [
        surfaceScoped,
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptTemplatePicker.useEffect": ()=>{
            if (!open) return;
            const id = window.setTimeout({
                "PromptTemplatePicker.useEffect.id": ()=>searchRef.current?.focus()
            }["PromptTemplatePicker.useEffect.id"], 30);
            return ({
                "PromptTemplatePicker.useEffect": ()=>window.clearTimeout(id)
            })["PromptTemplatePicker.useEffect"];
        }
    }["PromptTemplatePicker.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptTemplatePicker.useEffect": ()=>{
            if (!open) return;
            function onPointer(e) {
                if (wrapRef.current?.contains(e.target)) return;
                setOpen(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') setOpen(false);
            }
            const id = window.setTimeout({
                "PromptTemplatePicker.useEffect.id": ()=>{
                    document.addEventListener('mousedown', onPointer);
                    document.addEventListener('keydown', onKey);
                }
            }["PromptTemplatePicker.useEffect.id"], 0);
            return ({
                "PromptTemplatePicker.useEffect": ()=>{
                    window.clearTimeout(id);
                    document.removeEventListener('mousedown', onPointer);
                    document.removeEventListener('keydown', onKey);
                }
            })["PromptTemplatePicker.useEffect"];
        }
    }["PromptTemplatePicker.useEffect"], [
        open
    ]);
    async function pickTemplate(summary) {
        setLoadingId(summary.id);
        setError(null);
        try {
            const detail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPromptTemplate"])(summary.surface, summary.id);
            if (!detail) {
                setError(t('promptTemplates.fetchError'));
                setLastFailedPick(summary);
                return;
            }
            onChange({
                summary,
                prompt: detail.prompt
            });
            setLastFailedPick(null);
            setOpen(false);
            setQuery('');
        } catch  {
            // fetchPromptTemplate already swallows errors and returns null in
            // the happy path; this catch is a defensive net for unexpected
            // throws so the inline banner still surfaces and the user can
            // retry instead of being stuck on a permanent loading spinner.
            setError(t('promptTemplates.fetchError'));
            setLastFailedPick(summary);
        } finally{
            setLoadingId(null);
        }
    }
    function clear() {
        onChange(null);
        setLastFailedPick(null);
        setError(null);
        setOpen(false);
        setQuery('');
    }
    const triggerTitle = value?.summary.title ?? t('newproj.promptTemplateNoneTitle');
    const triggerSub = value ? value.summary.category || value.summary.summary || t('newproj.promptTemplateRefSub') : t('newproj.promptTemplateNoneSub');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-section ds-picker prompt-template-picker",
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: t('newproj.promptTemplateLabel')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1761,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "data-testid": "prompt-template-trigger",
                className: `ds-picker-trigger${open ? ' open' : ''}${value ? '' : ' empty'}`,
                onClick: ()=>setOpen((v)=>!v),
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptTemplateAvatar, {
                        summary: value?.summary ?? null
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1770,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-picker-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-title",
                                children: triggerTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1772,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-sub",
                                children: triggerSub
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1773,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1771,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "chevron-down",
                        size: 14,
                        className: "ds-picker-chevron",
                        style: {
                            transform: open ? 'rotate(180deg)' : undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1775,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1762,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-picker-popover",
                role: "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-picker-head",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchRef,
                            "data-testid": "prompt-template-search",
                            className: "ds-picker-search",
                            placeholder: t('newproj.promptTemplateSearch'),
                            value: query,
                            onChange: (e)=>setQuery(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 1785,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1784,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-picker-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "option",
                                "aria-selected": value === null,
                                className: `ds-picker-item${value === null ? ' active' : ''}`,
                                onClick: clear,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ds-picker-item-avatar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoneAvatar, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 1803,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 1802,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ds-picker-item-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ds-picker-item-title",
                                                children: t('newproj.promptTemplateNoneTitle')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 1806,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ds-picker-item-sub",
                                                children: t('newproj.promptTemplateNoneSub')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 1809,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 1805,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1795,
                                columnNumber: 13
                            }, this),
                            filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-picker-empty",
                                children: surfaceScoped.length === 0 ? t('newproj.promptTemplateEmpty') : t('promptTemplates.emptyNoMatch')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1815,
                                columnNumber: 15
                            }, this) : filtered.map((tpl)=>{
                                const active = value?.summary.id === tpl.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "option",
                                    "aria-selected": active,
                                    className: `ds-picker-item${active ? ' active' : ''}`,
                                    onClick: ()=>void pickTemplate(tpl),
                                    disabled: loadingId === tpl.id,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ds-picker-item-avatar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptTemplateAvatar, {
                                                summary: tpl
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 1834,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 1833,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ds-picker-item-text",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ds-picker-item-title",
                                                    children: [
                                                        tpl.title,
                                                        loadingId === tpl.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ds-picker-item-badge",
                                                            children: t('common.loading')
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                            lineNumber: 1840,
                                                            columnNumber: 27
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                    lineNumber: 1837,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ds-picker-item-sub",
                                                    children: tpl.summary || tpl.category
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                    lineNumber: 1845,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 1836,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, tpl.id, true, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 1824,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1794,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1783,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prompt-template-error",
                role: "alert",
                "data-testid": "prompt-template-error",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "prompt-template-error-msg",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1862,
                        columnNumber: 11
                    }, this),
                    lastFailedPick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ghost prompt-template-error-retry",
                        "data-testid": "prompt-template-retry",
                        onClick: ()=>void pickTemplate(lastFailedPick),
                        disabled: loadingId === lastFailedPick.id,
                        children: loadingId === lastFailedPick.id ? t('common.loading') : t('promptTemplates.retry')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1864,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1857,
                columnNumber: 9
            }, this) : null,
            value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prompt-template-edit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prompt-template-edit-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "prompt-template-edit-label",
                                children: t('newproj.promptTemplateBodyLabel')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1881,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "prompt-template-edit-hint",
                                children: t('newproj.promptTemplateOptimizeHint')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1884,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1880,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        "data-testid": "prompt-template-body",
                        className: "prompt-template-edit-textarea",
                        value: value.prompt,
                        rows: 6,
                        onChange: (e)=>onChange({
                                summary: value.summary,
                                prompt: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1888,
                        columnNumber: 11
                    }, this),
                    value.prompt.trim().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prompt-template-edit-empty",
                        "data-testid": "prompt-template-empty-hint",
                        children: t('newproj.promptTemplateBodyEmpty')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1898,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1879,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1760,
        columnNumber: 5
    }, this);
}
_s6(PromptTemplatePicker, "NUhVEJrm3aJn0dB4hEgTDcZMUS4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c13 = PromptTemplatePicker;
function PromptTemplateAvatar({ summary }) {
    if (!summary) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoneAvatar, {}, void 0, false, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1916,
        columnNumber: 24
    }, this);
    if (summary.previewImageUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ds-avatar prompt-template-avatar",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: summary.previewImageUrl,
                alt: "",
                loading: "lazy",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1920,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 1919,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ds-avatar prompt-template-avatar fallback",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: summary.surface === 'video' ? 'play' : 'image',
            size: 14
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 1931,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1930,
        columnNumber: 5
    }, this);
}
_c14 = PromptTemplateAvatar;
function TemplateOption({ active, onClick, onDelete, name, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `template-option${active ? ' active' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "template-option-select",
                onClick: onClick,
                "aria-pressed": active,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `template-radio${active ? ' active' : ''}`,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1957,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-option-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-option-name",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1959,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-option-desc",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 1960,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 1958,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "template-option-delete",
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete();
                },
                title: "Delete template",
                "aria-label": `Delete template ${name}`,
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 1963,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 1950,
        columnNumber: 5
    }, this);
}
_c15 = TemplateOption;
/* ============================================================
   Design system picker — custom popover (replaces native <select>).
   - Single-select by default. Toggle in the popover header switches to
     multi-select, which lets users blend up to a few inspirations
     (first pick is the primary; the rest go into metadata).
   - Trigger card mirrors the claude.ai/design treatment: a tiny brand
     swatch strip + title + "Default" subtitle + chevron.
   ============================================================ */ function DesignSystemPicker({ designSystems, defaultDesignSystemId, selectedIds, multi, onChange, onChangeMulti, loading }) {
    _s7();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const popoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The open popover renders through a portal anchored to the trigger so it
    // escapes the New Project modal's `.newproj-body { overflow-y: auto }` clip
    // box. A plain `position: absolute` popover (the previous shape) was trapped
    // inside that scroll container and got truncated when the trigger sat low in
    // the body or the window was short (issue #4303). Mirrors the viewport-aware
    // up/down placement of the shared DesignSystemPicker.
    const [anchor, setAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Upgrade the popover's thin list to the rich Brand Kit card whenever the
    // hovered / selected row is a finalized brand (`user:<id>` design system).
    // Fetched lazily on first open; non-brand systems are absent and the popover
    // stays a plain list. See `DesignSystemPicker.tsx` for the same wiring.
    const brandsByDesignSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBrandsByDesignSystemId"])(open);
    const byId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemPicker.useMemo[byId]": ()=>{
            const map = new Map();
            for (const d of designSystems)map.set(d.id, d);
            return map;
        }
    }["DesignSystemPicker.useMemo[byId]"], [
        designSystems
    ]);
    // Sort: selected first (in pick order), then default DS, then alpha
    // by category then title. Keeps the popover scannable while honoring
    // the user's existing picks.
    const ordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemPicker.useMemo[ordered]": ()=>{
            const picked = selectedIds.map({
                "DesignSystemPicker.useMemo[ordered].picked": (id)=>byId.get(id)
            }["DesignSystemPicker.useMemo[ordered].picked"]).filter({
                "DesignSystemPicker.useMemo[ordered].picked": (d)=>Boolean(d)
            }["DesignSystemPicker.useMemo[ordered].picked"]);
            const pickedSet = new Set(picked.map({
                "DesignSystemPicker.useMemo[ordered]": (d)=>d.id
            }["DesignSystemPicker.useMemo[ordered]"]));
            const rest = designSystems.filter({
                "DesignSystemPicker.useMemo[ordered].rest": (d)=>(d.status ?? 'published') !== 'draft' && !pickedSet.has(d.id)
            }["DesignSystemPicker.useMemo[ordered].rest"]).sort({
                "DesignSystemPicker.useMemo[ordered].rest": (a, b)=>{
                    if (a.id === defaultDesignSystemId) return -1;
                    if (b.id === defaultDesignSystemId) return 1;
                    const ca = a.category || 'Other';
                    const cb = b.category || 'Other';
                    if (ca !== cb) return ca.localeCompare(cb);
                    return a.title.localeCompare(b.title);
                }
            }["DesignSystemPicker.useMemo[ordered].rest"]);
            return [
                ...picked,
                ...rest
            ];
        }
    }["DesignSystemPicker.useMemo[ordered]"], [
        designSystems,
        byId,
        selectedIds,
        defaultDesignSystemId
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignSystemPicker.useMemo[filtered]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return ordered;
            return ordered.filter({
                "DesignSystemPicker.useMemo[filtered]": (d)=>{
                    return d.title.toLowerCase().includes(q) || (d.summary || '').toLowerCase().includes(q) || (d.category || '').toLowerCase().includes(q);
                }
            }["DesignSystemPicker.useMemo[filtered]"]);
        }
    }["DesignSystemPicker.useMemo[filtered]"], [
        ordered,
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemPicker.useEffect": ()=>{
            if (!open) {
                setHoveredId(null);
                return;
            }
            const t = window.setTimeout({
                "DesignSystemPicker.useEffect.t": ()=>searchRef.current?.focus()
            }["DesignSystemPicker.useEffect.t"], 30);
            return ({
                "DesignSystemPicker.useEffect": ()=>window.clearTimeout(t)
            })["DesignSystemPicker.useEffect"];
        }
    }["DesignSystemPicker.useEffect"], [
        open
    ]);
    // Anchor the portalled popover to the trigger, flipping above it when there
    // isn't room below (e.g. the picker sits low in a short New Project modal).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "DesignSystemPicker.useLayoutEffect": ()=>{
            if (!open) {
                setAnchor(null);
                return undefined;
            }
            function updateAnchor() {
                const trigger = triggerRef.current;
                if (!trigger) return;
                const rect = trigger.getBoundingClientRect();
                const viewport = window.innerWidth;
                const width = Math.max(280, rect.width);
                const left = Math.max(8, Math.min(viewport - width - 8, rect.left));
                const gap = 6;
                const margin = 12;
                const PREFERRED_MIN = 200;
                const PREFERRED_MAX = 440;
                const spaceBelow = window.innerHeight - rect.bottom - gap - margin;
                const spaceAbove = rect.top - gap - margin;
                // Open upward only when there's more room above and below is cramped.
                // Either way the popover is sized to the room on the chosen side.
                const openUp = spaceBelow < PREFERRED_MIN + 80 && spaceAbove > spaceBelow;
                const available = openUp ? spaceAbove : spaceBelow;
                // Clamp the fixed popover to the side's actual space. The PREFERRED_MIN
                // is only honored when the side can fit it; when both sides are tighter
                // than that (a very short window), forcing 200px here would push the
                // popover past the viewport instead of letting the list scroll inside a
                // smaller box. Floor at >= 0 so an off-screen trigger can't yield NaN.
                const maxHeight = Math.max(0, Math.min(PREFERRED_MAX, available));
                if (openUp) {
                    setAnchor({
                        bottom: window.innerHeight - rect.top + gap,
                        left,
                        width,
                        maxHeight
                    });
                } else {
                    setAnchor({
                        top: rect.bottom + gap,
                        left,
                        width,
                        maxHeight
                    });
                }
            }
            updateAnchor();
            window.addEventListener('resize', updateAnchor);
            window.addEventListener('scroll', updateAnchor, true);
            return ({
                "DesignSystemPicker.useLayoutEffect": ()=>{
                    window.removeEventListener('resize', updateAnchor);
                    window.removeEventListener('scroll', updateAnchor, true);
                }
            })["DesignSystemPicker.useLayoutEffect"];
        }
    }["DesignSystemPicker.useLayoutEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemPicker.useEffect": ()=>{
            if (!open) return;
            function onPointer(e) {
                const target = e.target;
                if (wrapRef.current?.contains(target)) return;
                // The popover is portalled outside `wrapRef`, so check it explicitly or
                // every click inside the open list would dismiss the picker.
                if (popoverRef.current?.contains(target)) return;
                setOpen(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') setOpen(false);
            }
            // Defer listener registration by a tick so the very click that opened
            // the popover doesn't get re-interpreted as an outside-click on the
            // mousedown that follows in the same event cycle (StrictMode also
            // double-invokes the effect, which can race the same event).
            const t = window.setTimeout({
                "DesignSystemPicker.useEffect.t": ()=>{
                    document.addEventListener('mousedown', onPointer);
                    document.addEventListener('keydown', onKey);
                }
            }["DesignSystemPicker.useEffect.t"], 0);
            return ({
                "DesignSystemPicker.useEffect": ()=>{
                    window.clearTimeout(t);
                    document.removeEventListener('mousedown', onPointer);
                    document.removeEventListener('keydown', onKey);
                }
            })["DesignSystemPicker.useEffect"];
        }
    }["DesignSystemPicker.useEffect"], [
        open
    ]);
    function toggle(id) {
        if (multi) {
            // Multi-select: tapping toggles membership; the *first* id in the
            // array is treated as the primary across the rest of the app.
            const has = selectedIds.includes(id);
            if (has) {
                onChange(selectedIds.filter((x)=>x !== id));
            } else {
                onChange([
                    ...selectedIds,
                    id
                ]);
            }
        } else {
            onChange([
                id
            ]);
            setOpen(false);
        }
    }
    function clearAll() {
        onChange([]);
        if (!multi) setOpen(false);
    }
    const primaryId = selectedIds[0] ?? null;
    const primary = primaryId ? byId.get(primaryId) ?? null : null;
    const extraCount = Math.max(0, selectedIds.length - 1);
    const isDefault = !!primary && primary.id === defaultDesignSystemId;
    // The hovered row wins over the current selection so scrubbing the list
    // previews each brand; falling back to the primary pick keeps the rich card
    // visible while the pointer rests outside the list.
    const previewId = hoveredId ?? primaryId;
    const previewBrand = previewId ? brandsByDesignSystem.get(previewId) ?? null : null;
    if (loading && designSystems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newproj-section",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "newproj-label",
                    children: t('newproj.designSystem')
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    height: 56,
                    width: "100%",
                    radius: 8
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2196,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 2194,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `newproj-section ds-picker${open ? ' open' : ''}`,
        "data-testid": "design-system-picker",
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: t('newproj.designSystem')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: triggerRef,
                type: "button",
                "data-testid": "design-system-trigger",
                className: `ds-picker-trigger${open ? ' open' : ''}${primary ? '' : ' empty'}`,
                onClick: ()=>setOpen((v)=>!v),
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemAvatar, {
                        system: primary,
                        extraCount: extraCount
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-picker-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-title",
                                children: [
                                    primary ? primary.title : t('newproj.dsNoneFreeform'),
                                    extraCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ds-picker-extra-pill",
                                        children: [
                                            "+",
                                            extraCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2222,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-sub",
                                children: primary ? isDefault ? t('common.default') : primary.category || t('newproj.dsCategoryFallback') : t('newproj.dsNoneSubtitleEmpty')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "chevron-down",
                        size: 14,
                        className: "ds-picker-chevron",
                        style: {
                            transform: open ? 'rotate(180deg)' : undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2208,
                columnNumber: 7
            }, this),
            open && anchor && typeof document !== 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: popoverRef,
                className: "ds-picker-popover-portal",
                "data-placement": anchor.bottom !== undefined ? 'up' : 'down',
                style: {
                    top: anchor.top,
                    bottom: anchor.bottom,
                    left: anchor.left,
                    width: anchor.width,
                    maxHeight: anchor.maxHeight
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-picker-popover",
                        role: "listbox",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-picker-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: searchRef,
                                        "data-testid": "design-system-search",
                                        className: "ds-picker-search",
                                        placeholder: t('newproj.dsSearch'),
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2256,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ds-picker-mode",
                                        role: "tablist",
                                        "aria-label": t('newproj.dsModeAria'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "tab",
                                                "aria-selected": !multi,
                                                className: `ds-picker-mode-btn${!multi ? ' active' : ''}`,
                                                onClick: ()=>{
                                                    onChangeMulti(false);
                                                    if (selectedIds.length > 1) onChange(selectedIds.slice(0, 1));
                                                },
                                                children: t('newproj.dsModeSingle')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2269,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                role: "tab",
                                                "aria-selected": multi,
                                                className: `ds-picker-mode-btn${multi ? ' active' : ''}`,
                                                onClick: ()=>onChangeMulti(true),
                                                children: t('newproj.dsModeMulti')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2281,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2264,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2255,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-picker-list ds-picker-list-design-systems",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DsPickerItem, {
                                        active: selectedIds.length === 0,
                                        multi: multi,
                                        onClick: clearAll,
                                        avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoneAvatar, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 2297,
                                            columnNumber: 29
                                        }, this),
                                        title: t('newproj.dsNoneTitle'),
                                        subtitle: t('newproj.dsNoneSub')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2293,
                                        columnNumber: 19
                                    }, this),
                                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ds-picker-empty",
                                        children: t('newproj.dsEmpty', {
                                            query
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2302,
                                        columnNumber: 21
                                    }, this) : filtered.map((d)=>{
                                        const active = selectedIds.includes(d.id);
                                        const order = active ? selectedIds.indexOf(d.id) : -1;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DsPickerItem, {
                                            active: active,
                                            multi: multi,
                                            order: order,
                                            onClick: ()=>toggle(d.id),
                                            onMouseEnter: ()=>setHoveredId(d.id),
                                            onMouseLeave: ()=>setHoveredId(null),
                                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignSystemAvatar, {
                                                system: d
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2318,
                                                columnNumber: 35
                                            }, this),
                                            title: d.title,
                                            badge: d.id === defaultDesignSystemId ? t('newproj.dsBadgeDefault') : undefined,
                                            subtitle: d.summary || d.category || ''
                                        }, d.id, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 2310,
                                            columnNumber: 25
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2292,
                                columnNumber: 17
                            }, this),
                            multi && selectedIds.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-picker-foot",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ds-picker-foot-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: primary?.title ?? t('newproj.dsPrimaryFallback')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2334,
                                                columnNumber: 23
                                            }, this),
                                            ' ',
                                            extraCount === 1 ? t('newproj.dsFootSingular') : t('newproj.dsFootPlural')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2333,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "ds-picker-clear",
                                        onClick: clearAll,
                                        children: t('newproj.dsFootClear')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2339,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2332,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2254,
                        columnNumber: 15
                    }, this),
                    previewBrand ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "ds-picker-brand-flyout",
                        "data-testid": "new-project-ds-brand-flyout",
                        "aria-label": t('brandDetail.identity'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BrandPreviewCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandPreviewCard"], {
                            variant: "compact",
                            summary: previewBrand
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 2355,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2350,
                        columnNumber: 17
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2242,
                columnNumber: 13
            }, this), document.body) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2202,
        columnNumber: 5
    }, this);
}
_s7(DesignSystemPicker, "sctOIEBTLUWB/oSoSwUSqPy7Iu4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBrandsByDesignSystemId"]
    ];
});
_c16 = DesignSystemPicker;
function DsPickerItem({ active, multi, order, onClick, onMouseEnter, onMouseLeave, avatar, title, subtitle, badge }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "option",
        "aria-selected": active,
        className: `ds-picker-item${active ? ' active' : ''}`,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onFocus: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ds-picker-item-avatar",
                children: avatar
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ds-picker-item-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-picker-item-title",
                        children: [
                            title,
                            badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-item-badge",
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2404,
                                columnNumber: 20
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-picker-item-sub",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `ds-picker-mark ${multi ? 'check' : 'radio'}${active ? ' active' : ''}`,
                "aria-hidden": true,
                children: multi ? active ? order != null && order >= 0 ? order + 1 : '✓' : '' : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2408,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2390,
        columnNumber: 5
    }, this);
}
_c17 = DsPickerItem;
function DesignSystemAvatar({ system, extraCount = 0 }) {
    if (!system) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoneAvatar, {}, void 0, false, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2427,
        columnNumber: 23
    }, this);
    const swatches = system.swatches && system.swatches.length > 0 ? system.swatches.slice(0, 4) : fallbackSwatches(system.title);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ds-avatar",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ds-avatar-grid",
                children: swatches.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-avatar-cell",
                        style: {
                            background: c
                        }
                    }, i, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2435,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2433,
                columnNumber: 7
            }, this),
            extraCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ds-avatar-stack",
                children: [
                    "+",
                    extraCount
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2439,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2432,
        columnNumber: 5
    }, this);
}
_c18 = DesignSystemAvatar;
function NoneAvatar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "ds-avatar ds-avatar-none",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            width: "16",
            height: "16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.6"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2449,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "18",
                    x2: "18",
                    y2: "6",
                    stroke: "currentColor",
                    strokeWidth: "1.6"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2450,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 2448,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2447,
        columnNumber: 5
    }, this);
}
_c19 = NoneAvatar;
// Deterministic fallback swatches for design systems whose DESIGN.md doesn't
// expose its tokens via the bold-and-hex format. Keeps the avatar visually
// distinct per-system without extra metadata fetches.
function fallbackSwatches(seed) {
    let h = 0;
    for(let i = 0; i < seed.length; i++){
        h = h * 31 + seed.charCodeAt(i) >>> 0;
    }
    const base = h % 360;
    return [
        `hsl(${base}, 18%, 96%)`,
        `hsl(${(base + 90) % 360}, 22%, 78%)`,
        `hsl(${(base + 180) % 360}, 30%, 32%)`,
        `hsl(${(base + 30) % 360}, 70%, 52%)`
    ];
}
function MediaProjectOptions(props) {
    _s8();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const aihubmixImageModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixImageModels"])();
    const aihubmixVideoModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixVideoModels"])();
    const aihubmixAudioModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixAudioModels"])();
    if (props.surface === 'image') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newproj-media-options",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaModelCards, {
                    label: t('newproj.modelLabel'),
                    models: supportedModels('image', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAihubmixModels"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_MODELS"], aihubmixImageModels)),
                    mediaProviders: props.mediaProviders,
                    value: props.imageModel,
                    onChange: props.onImageModel
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2513,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AspectCards, {
                    label: t('newproj.aspectLabel'),
                    value: props.imageAspect,
                    onChange: props.onImageAspect
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2520,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 2512,
            columnNumber: 7
        }, this);
    }
    if (props.surface === 'video') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newproj-media-options",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaModelCards, {
                    label: t('newproj.modelLabel'),
                    models: supportedModels('video', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAihubmixModels"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_MODELS"], aihubmixVideoModels)),
                    mediaProviders: props.mediaProviders,
                    value: props.videoModel,
                    onChange: props.onVideoModel
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2532,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AspectCards, {
                    label: t('newproj.aspectLabel'),
                    value: props.videoAspect,
                    onChange: props.onVideoAspect
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2539,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "newproj-label",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t('newproj.videoLengthLabel')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 2545,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: props.videoLength,
                            onChange: (e)=>props.onVideoLength(Number(e.target.value)),
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_LENGTHS_SEC"].map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: sec,
                                    children: t('newproj.videoLengthSeconds', {
                                        n: sec
                                    })
                                }, sec, false, {
                                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                    lineNumber: 2548,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 2546,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                    lineNumber: 2544,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
            lineNumber: 2531,
            columnNumber: 7
        }, this);
    }
    // AIHubMix's live catalogue is speech (TTS) only; music/sfx stay static.
    const audioBase = props.audioKind === 'speech' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAihubmixModels"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_MODELS_BY_KIND"].speech, aihubmixAudioModels) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_MODELS_BY_KIND"][props.audioKind];
    const models = supportedModels('audio', audioBase);
    const audioDurations = props.audioKind === 'sfx' ? SFX_AUDIO_DURATIONS_SEC : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_DURATIONS_SEC"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-media-options",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCards, {
                label: t('newproj.audioKindLabel'),
                options: [
                    {
                        value: 'speech',
                        title: t('newproj.audioKindSpeech')
                    },
                    {
                        value: 'sfx',
                        title: t('newproj.audioKindSfx')
                    }
                ],
                value: props.audioKind,
                onChange: props.onAudioKind
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaModelCards, {
                label: t('newproj.modelLabel'),
                models: models,
                mediaProviders: props.mediaProviders,
                value: props.audioModel,
                onChange: props.onAudioModel
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2576,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('newproj.audioDurationLabel')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2584,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: props.audioDuration,
                        onChange: (e)=>props.onAudioDuration(Number(e.target.value)),
                        children: audioDurations.map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: sec,
                                children: t('newproj.audioDurationSeconds', {
                                    n: sec
                                })
                            }, sec, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2587,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2585,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2583,
                columnNumber: 7
            }, this),
            props.audioKind === 'speech' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('newproj.voiceLabel')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2593,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: props.voice,
                        placeholder: t('newproj.voicePlaceholder'),
                        onChange: (e)=>props.onVoice(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2594,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2592,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2566,
        columnNumber: 5
    }, this);
}
_s8(MediaProjectOptions, "Xmz7e6FtJYAV/CgzEvU13JjEMxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixImageModels"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixVideoModels"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$aihubmix$2d$image$2d$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIHubMixAudioModels"]
    ];
});
_c20 = MediaProjectOptions;
function supportedModels(surface, models) {
    const supportedProviders = {
        image: new Set([
            'openai',
            'codex',
            'volcengine',
            'grok',
            'nanobanana',
            'openrouter',
            'imagerouter',
            'leonardo',
            'custom-image',
            'aihubmix'
        ]),
        video: new Set([
            'volcengine',
            'hyperframes',
            'grok',
            'openrouter',
            'imagerouter',
            'aihubmix'
        ]),
        audio: new Set([
            'minimax',
            'fishaudio',
            'senseaudio',
            'elevenlabs',
            'openai',
            'volcengine',
            'aihubmix'
        ])
    };
    return models.filter((model)=>{
        const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findProvider"])(model.provider);
        return provider?.integrated === true && supportedProviders[surface].has(model.provider);
    });
}
function MediaModelCards({ label, models, mediaProviders, value, onChange }) {
    _s9();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Group models by provider once. The trigger row needs the same provider
    // metadata (label + status) to render the selected model's caption, so we
    // compute groups regardless of whether the popover is open.
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaModelCards.useMemo[groups]": ()=>{
            const out = [];
            for (const model of models){
                const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findProvider"])(model.provider);
                const providerId = provider?.id ?? model.provider;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$provider$2d$readiness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaProviderPickerReady"])(providerId, mediaProviders)) continue;
                const entry = mediaProviders?.[providerId];
                const configured = provider?.credentialsRequired !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStoredMediaProviderEntryPresent"])(entry);
                let group = out.find({
                    "MediaModelCards.useMemo[groups].group": (g)=>g.providerId === providerId
                }["MediaModelCards.useMemo[groups].group"]);
                if (!group) {
                    group = {
                        providerId,
                        providerLabel: provider?.label ?? model.provider,
                        status: configured ? 'configured' : provider?.integrated ? 'integrated' : 'unsupported',
                        sortIndex: out.length,
                        sortPriority: configured ? 0 : provider?.credentialsRequired === false ? 1 : 2,
                        models: []
                    };
                    out.push(group);
                }
                group.models.push(model);
            }
            return out.sort({
                "MediaModelCards.useMemo[groups]": (a, b)=>a.sortPriority - b.sortPriority || a.sortIndex - b.sortIndex
            }["MediaModelCards.useMemo[groups]"]);
        }
    }["MediaModelCards.useMemo[groups]"], [
        models,
        mediaProviders
    ]);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaModelCards.useMemo[selected]": ()=>{
            for (const group of groups){
                const hit = group.models.find({
                    "MediaModelCards.useMemo[selected].hit": (m)=>m.id === value
                }["MediaModelCards.useMemo[selected].hit"]);
                if (hit) return {
                    model: hit,
                    group
                };
            }
            return null;
        }
    }["MediaModelCards.useMemo[selected]"], [
        groups,
        value
    ]);
    const firstAvailableModelId = groups[0]?.models[0]?.id ?? null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaModelCards.useEffect": ()=>{
            if (selected) return;
            if (firstAvailableModelId) {
                onChange(firstAvailableModelId);
                return;
            }
            if (value) onChange('');
        }
    }["MediaModelCards.useEffect"], [
        firstAvailableModelId,
        onChange,
        selected,
        value
    ]);
    const filteredGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaModelCards.useMemo[filteredGroups]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return groups;
            return groups.map({
                "MediaModelCards.useMemo[filteredGroups]": (g)=>({
                        ...g,
                        models: g.models.filter({
                            "MediaModelCards.useMemo[filteredGroups]": (m)=>{
                                return m.id.toLowerCase().includes(q) || m.label.toLowerCase().includes(q) || m.hint.toLowerCase().includes(q) || g.providerLabel.toLowerCase().includes(q);
                            }
                        }["MediaModelCards.useMemo[filteredGroups]"])
                    })
            }["MediaModelCards.useMemo[filteredGroups]"]).filter({
                "MediaModelCards.useMemo[filteredGroups]": (g)=>g.models.length > 0
            }["MediaModelCards.useMemo[filteredGroups]"]);
        }
    }["MediaModelCards.useMemo[filteredGroups]"], [
        groups,
        query
    ]);
    const totalMatches = filteredGroups.reduce((n, g)=>n + g.models.length, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaModelCards.useEffect": ()=>{
            if (!open) return;
            const id = window.setTimeout({
                "MediaModelCards.useEffect.id": ()=>searchRef.current?.focus()
            }["MediaModelCards.useEffect.id"], 30);
            return ({
                "MediaModelCards.useEffect": ()=>window.clearTimeout(id)
            })["MediaModelCards.useEffect"];
        }
    }["MediaModelCards.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaModelCards.useEffect": ()=>{
            if (!open) return;
            function onPointer(e) {
                if (wrapRef.current?.contains(e.target)) return;
                setOpen(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') setOpen(false);
            }
            const id = window.setTimeout({
                "MediaModelCards.useEffect.id": ()=>{
                    document.addEventListener('mousedown', onPointer);
                    document.addEventListener('keydown', onKey);
                }
            }["MediaModelCards.useEffect.id"], 0);
            return ({
                "MediaModelCards.useEffect": ()=>{
                    window.clearTimeout(id);
                    document.removeEventListener('mousedown', onPointer);
                    document.removeEventListener('keydown', onKey);
                }
            })["MediaModelCards.useEffect"];
        }
    }["MediaModelCards.useEffect"], [
        open
    ]);
    function pick(modelId) {
        onChange(modelId);
        setOpen(false);
        setQuery('');
    }
    const triggerTitle = selected?.model.label ?? t('newproj.modelMissingTitle');
    // The model.hint frequently leads with the provider name (e.g.
    // "OpenAI · 4K, native multimodal"), so emitting providerLabel as a
    // separate prefix would duplicate it. If the hint already opens with the
    // provider label, just use the hint verbatim — otherwise prefix it.
    const triggerSub = selected ? selected.model.hint.toLowerCase().startsWith(selected.group.providerLabel.toLowerCase()) ? selected.model.hint : `${selected.group.providerLabel} · ${selected.model.hint}` : t('newproj.modelMissingSub');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-section ds-picker model-picker",
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "newproj-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2758,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "data-testid": "model-picker-trigger",
                className: `ds-picker-trigger${open ? ' open' : ''}${selected ? '' : ' empty'}`,
                onClick: ()=>setOpen((v)=>!v),
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ds-picker-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-title",
                                children: triggerTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2768,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ds-picker-sub",
                                children: triggerSub
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2769,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2767,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "chevron-down",
                        size: 14,
                        className: "ds-picker-chevron",
                        style: {
                            transform: open ? 'rotate(180deg)' : undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2771,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2759,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ds-picker-popover",
                role: "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-picker-head",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchRef,
                            "data-testid": "model-picker-search",
                            className: "ds-picker-search",
                            placeholder: t('newproj.modelSearch'),
                            value: query,
                            onChange: (e)=>setQuery(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 2781,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2780,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ds-picker-list",
                        children: totalMatches === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ds-picker-empty",
                            children: t('newproj.modelEmpty')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                            lineNumber: 2792,
                            columnNumber: 15
                        }, this) : filteredGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ds-picker-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ds-picker-group-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: group.providerLabel
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2797,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `newproj-provider-badge ${group.status}`,
                                                children: group.status === 'configured' ? 'Configured' : group.status === 'integrated' ? 'Integrated' : 'Unsupported'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2798,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                        lineNumber: 2796,
                                        columnNumber: 19
                                    }, this),
                                    group.models.map((model)=>{
                                        const active = value === model.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "option",
                                            "aria-selected": active,
                                            "data-testid": `model-picker-option-${model.id}`,
                                            className: `ds-picker-item${active ? ' active' : ''}`,
                                            onClick: ()=>pick(model.id),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ds-picker-item-text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ds-picker-item-title",
                                                        children: [
                                                            model.label,
                                                            model.default ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ds-picker-item-badge",
                                                                children: t('newproj.modelRecommended')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                                lineNumber: 2822,
                                                                columnNumber: 31
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                        lineNumber: 2819,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ds-picker-item-sub",
                                                        children: model.hint
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                        lineNumber: 2827,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                                lineNumber: 2818,
                                                columnNumber: 25
                                            }, this)
                                        }, model.id, false, {
                                            fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                            lineNumber: 2809,
                                            columnNumber: 23
                                        }, this);
                                    })
                                ]
                            }, group.providerId, true, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2795,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2790,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2779,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2757,
        columnNumber: 5
    }, this);
}
_s9(MediaModelCards, "KWpi12iMa0LghM41tIf+7eHRQSE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c21 = MediaModelCards;
function AspectCards({ label, value, onChange }) {
    const labels = {
        '1:1': 'Square',
        '16:9': 'Landscape',
        '9:16': 'Portrait',
        '4:3': 'Wide',
        '3:4': 'Tall'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-media-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2860,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-aspect-segmented",
                role: "radiogroup",
                "aria-label": label,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$media$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA_ASPECTS"].map((aspect)=>{
                    const active = value === aspect;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "radio",
                        "aria-checked": active,
                        title: `${labels[aspect]} · ${aspect}`,
                        className: `newproj-aspect-pill${active ? ' active' : ''}`,
                        onClick: ()=>onChange(aspect),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `newproj-aspect-icon newproj-aspect-icon-${aspect.replace(':', '-')}`,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2874,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "newproj-aspect-ratio",
                                children: aspect
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2878,
                                columnNumber: 15
                            }, this)
                        ]
                    }, aspect, true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2865,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2861,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2859,
        columnNumber: 5
    }, this);
}
_c22 = AspectCards;
function OptionCards({ label, options, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newproj-media-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2900,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newproj-option-grid compact",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `newproj-card newproj-option-card${value === option.value ? ' active' : ''}`,
                        onClick: ()=>onChange(option.value),
                        "aria-pressed": value === option.value,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: option.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2910,
                                columnNumber: 13
                            }, this),
                            option.hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: option.hint
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                                lineNumber: 2911,
                                columnNumber: 28
                            }, this) : null
                        ]
                    }, String(option.value), true, {
                        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                        lineNumber: 2903,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
                lineNumber: 2901,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/NewProjectPanel.tsx",
        lineNumber: 2899,
        columnNumber: 5
    }, this);
}
_c23 = OptionCards;
function buildMetadata(input) {
    const kind = input.tab === 'live-artifact' ? 'prototype' : input.tab === 'media' ? input.mediaSurface : input.tab;
    const selectedPlatforms = normalizeSelectedPlatforms(input.platformTargets);
    const concreteTargets = platformTargetsFor(selectedPlatforms);
    const canIncludeOsWidgets = platformTargetsSupportOsWidgets(concreteTargets);
    const surfaceOptions = {
        ...input.includeLandingPage ? {
            includeLandingPage: true
        } : {},
        ...input.includeOsWidgets && canIncludeOsWidgets ? {
            includeOsWidgets: true
        } : {}
    };
    const base = {
        platform: selectedPlatforms[0],
        platformTargets: concreteTargets,
        ...surfaceOptions
    };
    const inspirations = input.inspirationIds.length > 0 ? {
        inspirationDesignSystemIds: input.inspirationIds
    } : {};
    if (input.tab === 'prototype' || input.tab === 'live-artifact') {
        return {
            kind,
            ...base,
            // Live artifact is locked to high fidelity (the picker is hidden in
            // the panel) — wireframe live artifacts don't make sense.
            fidelity: input.tab === 'live-artifact' ? 'high-fidelity' : input.fidelity,
            ...input.tab === 'live-artifact' ? {
                intent: 'live-artifact'
            } : {},
            ...inspirations
        };
    }
    if (input.tab === 'deck') {
        return {
            kind,
            speakerNotes: input.speakerNotes,
            ...inspirations
        };
    }
    if (input.tab === 'template') {
        if (input.templateId == null) {
            return {
                kind,
                ...base,
                animations: input.animations,
                ...inspirations
            };
        }
        const tpl = input.templates.find((x)=>x.id === input.templateId);
        // The fallback label is consumed by the agent prompt rather than the
        // UI, so we keep it in English to match the rest of the prompt corpus.
        return {
            kind,
            ...base,
            animations: input.animations,
            templateId: input.templateId,
            templateLabel: tpl?.name ?? 'Saved template',
            ...inspirations
        };
    }
    if (input.tab === 'media') {
        if (input.mediaSurface === 'image') {
            const imageModel = input.imageModel.trim();
            return {
                kind,
                ...imageModel ? {
                    imageModel
                } : {},
                imageAspect: input.imageAspect,
                ...buildPromptTemplateMetadata(input.promptTemplate),
                ...inspirations
            };
        }
        if (input.mediaSurface === 'video') {
            const videoModel = input.videoModel.trim();
            return {
                kind,
                ...videoModel ? {
                    videoModel
                } : {},
                videoAspect: input.videoAspect,
                videoLength: input.videoLength,
                ...buildPromptTemplateMetadata(input.promptTemplate),
                ...inspirations
            };
        }
        const audioModel = input.audioModel.trim();
        return {
            kind,
            audioKind: input.audioKind,
            ...audioModel ? {
                audioModel
            } : {},
            audioDuration: input.audioDuration,
            ...input.audioKind === 'speech' && input.voice.trim() ? {
                voice: input.voice.trim()
            } : {},
            ...inspirations
        };
    }
    return {
        kind: 'other',
        ...base,
        ...inspirations
    };
}
function normalizeSelectedPlatforms(platforms) {
    const seen = new Set();
    for (const platform of platforms){
        if (DESIGN_PLATFORMS.some((option)=>option.value === platform)) {
            seen.add(platform);
        }
    }
    return seen.size > 0 ? [
        ...seen
    ] : [
        'responsive'
    ];
}
function platformTargetsSupportOsWidgets(platforms) {
    return platforms.some((platform)=>platform === 'mobile-ios' || platform === 'mobile-android' || platform === 'tablet');
}
function platformTargetsFor(platforms) {
    const targets = new Set();
    for (const platform of platforms){
        switch(platform){
            case 'responsive':
                targets.add('responsive');
                break;
            case 'web-desktop':
                targets.add('web-desktop');
                break;
            case 'mobile-ios':
                targets.add('mobile-ios');
                break;
            case 'mobile-android':
                targets.add('mobile-android');
                break;
            case 'tablet':
                targets.add('tablet');
                break;
            case 'desktop-app':
                targets.add('desktop-app');
                break;
            default:
                {
                    const exhaustive = platform;
                    targets.add(exhaustive);
                }
        }
    }
    return targets.size > 0 ? [
        ...targets
    ] : [
        'responsive'
    ];
}
function buildPromptTemplateMetadata(pick) {
    if (!pick) return {};
    const trimmed = pick.prompt.trim();
    if (trimmed.length === 0) return {};
    const { summary } = pick;
    return {
        promptTemplate: {
            id: summary.id,
            surface: summary.surface,
            title: summary.title,
            prompt: trimmed,
            summary: summary.summary || undefined,
            category: summary.category || undefined,
            tags: summary.tags && summary.tags.length > 0 ? summary.tags : undefined,
            model: summary.model,
            aspect: summary.aspect,
            source: summary.source ? {
                repo: summary.source.repo,
                license: summary.source.license,
                author: summary.source.author,
                url: summary.source.url
            } : undefined
        }
    };
}
function titleForTab(tab, mediaSurface, t) {
    switch(tab){
        case 'prototype':
            return t('newproj.titlePrototype');
        case 'live-artifact':
            return t('newproj.titleLiveArtifact');
        case 'deck':
            return t('newproj.titleDeck');
        case 'template':
            return t('newproj.titleTemplate');
        case 'media':
            {
                // Title tracks the active surface so the heading still reads "New
                // image" / "New video" / "New audio" — the shared "Media" label only
                // appears on the tab strip itself.
                const key = mediaSurface === 'image' ? 'newproj.titleImage' : mediaSurface === 'video' ? 'newproj.titleVideo' : 'newproj.titleAudio';
                return t(key);
            }
        case 'other':
            return t('newproj.titleOther');
    }
}
function autoName(tab, mediaSurface, t) {
    const stamp = new Date().toLocaleDateString();
    // For the Media tab the auto name reads "Image · {date}" / "Video · …" /
    // "Audio · …" so the project list still surfaces the actual surface.
    const labelKey = tab === 'media' ? MEDIA_SURFACE_LABEL_KEYS[mediaSurface] : TAB_LABEL_KEYS[tab];
    return `${t(labelKey)} · ${stamp}`;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
__turbopack_context__.k.register(_c, "SFX_AUDIO_DURATIONS_SEC$AUDIO_DURATIONS_SEC.filter");
__turbopack_context__.k.register(_c1, "SFX_AUDIO_DURATIONS_SEC");
__turbopack_context__.k.register(_c2, "NewProjectPanel");
__turbopack_context__.k.register(_c3, "PlatformPicker");
__turbopack_context__.k.register(_c4, "SurfaceOptions");
__turbopack_context__.k.register(_c5, "CompactToggle");
__turbopack_context__.k.register(_c6, "FidelityPicker");
__turbopack_context__.k.register(_c7, "ConnectorsSection");
__turbopack_context__.k.register(_c8, "FidelityCard");
__turbopack_context__.k.register(_c9, "WireframeArt");
__turbopack_context__.k.register(_c10, "HighFidelityArt");
__turbopack_context__.k.register(_c11, "ToggleRow");
__turbopack_context__.k.register(_c12, "TemplatePicker");
__turbopack_context__.k.register(_c13, "PromptTemplatePicker");
__turbopack_context__.k.register(_c14, "PromptTemplateAvatar");
__turbopack_context__.k.register(_c15, "TemplateOption");
__turbopack_context__.k.register(_c16, "DesignSystemPicker");
__turbopack_context__.k.register(_c17, "DsPickerItem");
__turbopack_context__.k.register(_c18, "DesignSystemAvatar");
__turbopack_context__.k.register(_c19, "NoneAvatar");
__turbopack_context__.k.register(_c20, "MediaProjectOptions");
__turbopack_context__.k.register(_c21, "MediaModelCards");
__turbopack_context__.k.register(_c22, "AspectCards");
__turbopack_context__.k.register(_c23, "OptionCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_NewProjectPanel_tsx_0fixi50._.js.map