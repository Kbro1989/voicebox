(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/ChatPane.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatPane",
    ()=>ChatPane,
    "buildRunErrorDiagnosticText",
    ()=>buildRunErrorDiagnosticText,
    "conversationMetaLabel",
    ()=>conversationMetaLabel,
    "isAssistantMessageStreaming",
    ()=>isAssistantMessageStreaming,
    "retryableAssistantMessage",
    ()=>retryableAssistantMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/amr-attribution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/design-toolbox.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/copy-to-clipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/design-system-auto-prompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/todos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/agentLabels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/comments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AssistantMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AssistantMessage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrGuidance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AmrGuidance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/AmrLoginPill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/amrLoginPolling.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$amr$2d$guidance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/amr-guidance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/resume.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ChatComposer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$designArtifacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-files/designArtifacts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-system-github-evidence.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/SketchPreview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
const DEFAULT_STARTER_KEYS = [
    {
        icon: '▤',
        titleKey: 'chat.example1Title',
        tagKey: 'chat.example1Tag',
        promptKey: 'chat.example1Prompt'
    },
    {
        icon: '▦',
        titleKey: 'chat.example2Title',
        tagKey: 'chat.example2Tag',
        promptKey: 'chat.example2Prompt'
    },
    {
        icon: '◈',
        titleKey: 'chat.example3Title',
        tagKey: 'chat.example3Tag',
        promptKey: 'chat.example3Prompt'
    }
];
const IMPORTED_ARTIFACTS_INITIAL_VISIBLE_COUNT = 5;
const IMPORTED_ARTIFACTS_REVEAL_COUNT = 5;
const IMAGE_STARTERS = [
    {
        icon: '◯',
        title: 'Editorial portrait',
        tag: 'Portrait',
        prompt: 'A close-up editorial portrait of a young creative director in their late 20s, soft natural light through tall studio windows, warm neutral palette (cream, taupe, soft black), shot at 85mm f/1.8 with shallow depth of field, sharp gaze straight to camera, subtle film grain, no makeup look.'
    },
    {
        icon: '▭',
        title: 'Product hero',
        tag: 'E-commerce',
        prompt: 'A premium product hero shot of a single matte ceramic coffee mug on a warm cream paper backdrop. Hard rim light from the upper-left, gentle elongated shadow stretching to the lower-right, faint steam rising from the cup. Square crop, centered composition, room above for headline copy, no props or hands in frame.'
    },
    {
        icon: '◐',
        title: 'Flat illustration',
        tag: 'Illustration',
        prompt: 'A flat vector illustration of a cozy reading nook by a rainy window — geometric shapes, restrained 5-color palette (cream, terracotta, deep teal, burnt sienna, soft black), thin 1.5px line accents, no gradients, no textures, soft drop shadows only on the foreground armchair.'
    }
];
// Pure-video / cinematic-shot starters for seedance, sora, kling, veo,
// grok-imagine and similar text-to-video models. Each prompt is one
// shot, restrained motion, and a clear visual concept the model can
// nail in 5-10 seconds.
const VIDEO_SEEDANCE_STARTERS = [
    {
        icon: '◉',
        title: 'Product reveal',
        tag: 'Cinematic',
        prompt: 'A 5-second product reveal: a minimal high-end skincare bottle on a clean cream stone surface, soft side light from camera-left, slow camera push-in, subtle depth-of-field shift from the cap to the label, restrained motion, no text overlays, no people in frame.'
    },
    {
        icon: '▣',
        title: 'Lantern close-up',
        tag: 'Mood',
        prompt: 'A 6-second cinematic close-up of a young woman holding a glowing paper lantern in a misty pine forest at golden hour. Shallow depth of field on her eyes, gentle dolly-in, ambient particles drifting through the warm shaft of light, no dialogue, ambient forest sound only.'
    },
    {
        icon: '⌘',
        title: 'Neon street drift',
        tag: 'Action',
        prompt: 'A 5-second street-racing tracking shot at night in a neon-lit cyberpunk Hong Kong alley. Low-angle camera following a matte-black sports car drifting around a tight corner, motion blur on the wheels, lens flares from oncoming neon signs, rain-slick asphalt reflecting the lights, no on-screen text.'
    }
];
// HyperFrames HTML-in-canvas starters — these target the
// hyperframes-html video model where the renderer captures live DOM
// into a WebGL texture and runs shader effects on top. References:
// https://www.remotion.dev/docs/html-in-canvas (concept), the seven
// vfx-* catalog blocks shipped via `npx hyperframes add vfx-*`, and
// skills/hyperframes/references/html-in-canvas.md.
const VIDEO_HYPERFRAMES_STARTERS = [
    {
        icon: '◉',
        title: 'Magnifying glass reveal',
        tag: 'HTML-in-canvas',
        prompt: 'Make a 5-second composition with a single line of bold display text on a clean canvas. Animate a round magnifying glass that travels left to right across the line, with subtle glass refraction warping the letters underneath as it passes. Use HyperFrames html-in-canvas — capture the text DOM and run the lens shader on top via a vfx-liquid-glass-style pass. Pure CSS for the text; the glass is a WebGL layer.'
    },
    {
        icon: '▦',
        title: 'CRT terminal scene',
        tag: 'Vintage VFX',
        prompt: "Make a CRT-screen composition: dark canvas, monospace terminal text typing `npx hyperframes init my-video`, then `claude` invoked with the prompt 'Add a CRT effect using HTML-in-canvas'. Apply a subtle convex-curvature shader, scanlines, slight chromatic aberration, and a soft phosphor glow on top of the live DOM via html-in-canvas. The terminal text stays as real CSS so it's pixel-sharp before the shader pass."
    },
    {
        icon: '◈',
        title: 'Glitch breakdown',
        tag: 'Glitch',
        prompt: 'Build a 6-second composition that displays a hero headline and a one-line subhead on a dark canvas, then breaks into a hard digital glitch — RGB channel split, horizontal displacement bands, brief frame-stutter, and a final clean reset. Capture the live DOM via html-in-canvas and run the glitch pass on top, so the type is real CSS underneath the shader.'
    }
];
// Speech-focused audio starters — the New Project audio panel only
// surfaces the `speech` kind today (see MediaProjectOptions), so we
// match that. If/when the music + sfx tabs come back, broaden this set.
const AUDIO_STARTERS = [
    {
        icon: '♪',
        title: 'Brand voiceover',
        tag: 'Speech',
        prompt: "A 30-second warm-toned narrative voiceover for a product launch video — confident but conversational, mid-tempo, with a beat of pause after the brand name. Script: 'Three years in the making. One simple promise. Meet [product name] — the way work was supposed to feel.' English, neutral North American accent."
    },
    {
        icon: '♫',
        title: 'Onboarding narration',
        tag: 'Speech',
        prompt: "A 20-second friendly onboarding narration for a mobile app's first-launch screen. Reassuring, smiling tone, slow enough to feel attentive without sounding scripted. Script: 'Welcome to Loop. Let's set up your space — three quick questions and you're in. You can change any of this later.'"
    },
    {
        icon: '♬',
        title: 'Story passage read',
        tag: 'Speech',
        prompt: "A 45-second cinematic read of an opening passage. Low, measured delivery with breath between sentences, slightly intimate close-mic'd quality. Script: 'The city sleeps in pieces. A neon sign flickers above the ramen counter. Across the avenue, a window glows — the only one still on this side of midnight.'"
    }
];
function pickStarters(metadata, t) {
    const kind = metadata?.kind;
    if (kind === 'image') return IMAGE_STARTERS;
    if (kind === 'video') {
        return metadata?.videoModel === 'hyperframes-html' ? VIDEO_HYPERFRAMES_STARTERS : VIDEO_SEEDANCE_STARTERS;
    }
    if (kind === 'audio') return AUDIO_STARTERS;
    return DEFAULT_STARTER_KEYS.map((entry)=>({
            icon: entry.icon,
            title: t(entry.titleKey),
            tag: t(entry.tagKey),
            prompt: t(entry.promptKey)
        }));
}
function sortArtifactsByModified(files) {
    return [
        ...files
    ].sort((a, b)=>b.mtime - a.mtime || a.name.localeCompare(b.name));
}
function ImportedFolderArtifacts({ projectId, files, onOpenFile, t }) {
    _s();
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(IMPORTED_ARTIFACTS_INITIAL_VISIBLE_COUNT);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImportedFolderArtifacts.useEffect": ()=>{
            setVisibleCount(IMPORTED_ARTIFACTS_INITIAL_VISIBLE_COUNT);
        }
    }["ImportedFolderArtifacts.useEffect"], [
        files
    ]);
    if (files.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "chat-design-artifacts-empty",
            "data-testid": "chat-design-artifacts-empty",
            children: t('designFiles.empty')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this);
    }
    const visibleFiles = files.slice(0, visibleCount);
    const hiddenCount = Math.max(0, files.length - visibleFiles.length);
    const revealCount = Math.min(IMPORTED_ARTIFACTS_REVEAL_COUNT, hiddenCount);
    const revealLabel = t('chat.designArtifactsShowMore', {
        count: revealCount
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-design-artifacts",
        "data-testid": "chat-design-artifacts",
        children: [
            visibleFiles.map((file, index)=>{
                const openable = Boolean(onOpenFile);
                const openLabel = `${t('designFiles.previewOpen')} ${file.name}`;
                const openFile = ()=>{
                    onOpenFile?.(file.name);
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chat-design-artifact",
                    "data-kind": file.kind,
                    "data-file-name": file.name,
                    "data-testid": `chat-design-artifact-${index}`,
                    role: openable ? 'button' : 'listitem',
                    tabIndex: openable ? 0 : undefined,
                    title: openLabel,
                    "aria-label": openLabel,
                    onDoubleClick: openable ? openFile : undefined,
                    onKeyDown: openable ? (event)=>{
                        if (event.key !== 'Enter' && event.key !== ' ') return;
                        event.preventDefault();
                        openFile();
                    } : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chat-design-artifact-preview",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatArtifactPreview, {
                                projectId: projectId,
                                file: file
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chat-design-artifact-meta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chat-design-artifact-name",
                                    title: file.name,
                                    children: file.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chat-design-artifact-kind",
                                    children: chatArtifactKindLabel(file.kind, t)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this)
                    ]
                }, file.name, true, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this);
            }),
            hiddenCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "chat-design-artifact chat-design-artifact-more",
                "data-testid": "chat-design-artifacts-more",
                "aria-label": revealLabel,
                title: revealLabel,
                onClick: ()=>{
                    setVisibleCount((current)=>Math.min(files.length, current + IMPORTED_ARTIFACTS_REVEAL_COUNT));
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chat-design-artifact-more-icon",
                        "aria-hidden": true,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chat-design-artifact-more-count",
                        children: revealLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_s(ImportedFolderArtifacts, "/cPeJ6KmpoyQjWIdF+fkl1XX8ho=");
_c = ImportedFolderArtifacts;
function ChatArtifactPreview({ projectId, file }) {
    if (!projectId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatArtifactFallback, {
            kind: file.kind
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 363,
            columnNumber: 12
        }, this);
    }
    const url = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, file.name)}?v=${Math.round(file.mtime)}`;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRenderableSketchJson"])(file)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$SketchPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SketchPreview"], {
            projectId: projectId,
            file: file
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 368,
            columnNumber: 12
        }, this);
    }
    if (file.kind === 'image' || file.kind === 'sketch') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: url,
            alt: "",
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 371,
            columnNumber: 12
        }, this);
    }
    if (file.kind === 'html') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            title: file.name,
            src: url,
            sandbox: "allow-scripts allow-downloads",
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 375,
            columnNumber: 7
        }, this);
    }
    if (file.kind === 'video') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: url,
            muted: true,
            playsInline: true,
            preload: "metadata"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 384,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatArtifactFallback, {
        kind: file.kind
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 386,
        columnNumber: 10
    }, this);
}
_c1 = ChatArtifactPreview;
function ChatArtifactFallback({ kind }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "chat-design-artifact-fallback",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: chatArtifactIcon(kind),
                size: 28
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: chatArtifactShortKind(kind)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
_c2 = ChatArtifactFallback;
function chatArtifactIcon(kind) {
    if (kind === 'html' || kind === 'code') return 'file-code';
    if (kind === 'image' || kind === 'sketch') return 'image';
    if (kind === 'video' || kind === 'audio') return 'play';
    if (kind === 'presentation') return 'present';
    return 'file';
}
function chatArtifactShortKind(kind) {
    if (kind === 'html') return 'HTML';
    if (kind === 'image') return 'IMG';
    if (kind === 'sketch') return 'SKETCH';
    if (kind === 'video') return 'VIDEO';
    if (kind === 'pdf') return 'PDF';
    if (kind === 'presentation') return 'PPT';
    if (kind === 'document') return 'DOC';
    return 'FILE';
}
function chatArtifactKindLabel(kind, t) {
    if (kind === 'html') return t('designFiles.kindHtml');
    if (kind === 'image') return t('designFiles.kindImage');
    if (kind === 'sketch') return t('designFiles.kindSketch');
    if (kind === 'video') return 'Video';
    if (kind === 'audio') return 'Audio';
    if (kind === 'pdf') return t('designFiles.kindPdf');
    if (kind === 'document') return t('designFiles.kindDocument');
    if (kind === 'presentation') return t('designFiles.kindPresentation');
    if (kind === 'spreadsheet') return t('designFiles.kindSpreadsheet');
    return t('designFiles.kindBinary');
}
const AMR_PROFILE_ENV_KEY = 'OPEN_DESIGN_AMR_PROFILE';
const CHAT_MESSAGE_VIRTUALIZE_THRESHOLD = 80;
const CHAT_MESSAGE_OVERSCAN_PX = 900;
const CHAT_VIRTUAL_ROW_GAP_PX = 14;
const CHAT_VIRTUAL_MIN_ROW_HEIGHT = 36;
const CHAT_VIRTUAL_DEFAULT_VIEWPORT_PX = 640;
const CHAT_VIRTUAL_INITIAL_TAIL_ROWS = 16;
const CONVERSATION_ROW_HEIGHT_PX = 34;
const CONVERSATION_VIRTUALIZE_THRESHOLD = 36;
const CONVERSATION_OVERSCAN_ROWS = 8;
// Gap left above the anchored user message when it is pinned to the top.
const ANCHOR_TOP_PADDING = 12;
function ChatPane({ messages, streaming, loading = false, sendDisabled = false, queuedItems = [], error, projectId, sessionMode = 'design', onSessionModeChange, projectKindForTracking = null, projectFiles, activeProjectFileName = null, hasActiveDesignSystem = false, activeDesignSystem = null, projectFileNames, onEnsureProject, previewComments = [], attachedComments = [], onAttachComment, onDetachComment, onDeleteComment, onSend, onRetry, onResumeRun, onStop, onRemoveQueuedSend, onUpdateQueuedSend, onReorderQueuedSends, onSendQueuedNow, onRequestOpenFile, onRequestPluginDetails, onRequestDesignSystemDetails, onRequestPluginFolderAgentAction, activePluginActionPaths, hiddenPluginActionPaths, onShareToOpenDesign, shareToOpenDesignBusyMessageId, forceStreamingMessageIds, liveToolInput, initialDraft, onOpenQuestions, onContinueRemainingTasks, onAssistantFeedback, onArtifactShare, onArtifactDownload, onForkFromMessage, forkingMessageId = null, onNewConversation, newConversationDisabled = false, conversations, activeConversationId, messagesConversationId = null, onSelectConversation, onDeleteConversation, onOpenSettings, showByokRecoveryAction = false, onSwitchToLocalCli, onOpenAmrSettings, onSwitchToAmrAndRetry, onLaunchAntigravityOauth, onOpenMcpSettings, onBrowsePlugins, onOpenConnectors, connectRepoNeeded, githubConnected, onConnectRepo, composerDraftSignal, petConfig, onAdoptPet, onTogglePet, onOpenPetSettings, projectMetadata, onProjectMetadataChange, activeWorkspaceContext, workspaceContexts = [], currentSkillId = null, onProjectSkillChange, researchAvailable, activePluginSnapshot, skills = [], byokApiProtocol, byokImageModel, onChangeByokImageModel, byokVideoModel, onChangeByokVideoModel, byokSpeechModel, onChangeByokSpeechModel, byokSpeechVoice, onChangeByokSpeechVoice, composerLeadingAccessory, composerFooterAccessory, currentDesignSystemId, onActiveDesignSystemChange, onShowToast, onBack, backLabel, projectHeader, designSystemPicker, config }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const amrProfile = config?.agentCliEnv?.amr?.[AMR_PROFILE_ENV_KEY] ?? null;
    const [inlineAmrLoginStatus, setInlineAmrLoginStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const logRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Guards the inline AMR sign-in card so a successful login auto-retries the
    // failed run exactly once (the pill's onStatusChange fires loggedIn on every
    // poll). Keyed by the failed assistant's id.
    const amrAuthRetriedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Tracks the last observed AMR login state so we retry only on a real
    // signed-out -> signed-in transition. Without this, a run that keeps failing
    // AMR_AUTH_REQUIRED while /status already reports signed-in would auto-retry
    // forever (each retry is a new assistant id, so the id guard alone never
    // converges).
    const amrAuthPrevLoggedInRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const chatLogScrollIdleTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const historyWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composerSlotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composerLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const queuedSendStripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const didInitialScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const runFailedToastSurfaceKeysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Tracks whether the user is glued close enough to the bottom that
    // streamed content should auto-follow. Distinct from the jump-button
    // state below, which uses a wider threshold (120px) so the affordance
    // stays visible for short scroll-ups. Auto-follow needs the tighter
    // 80px cutoff: scrolling ~90px up is an intentional pause that
    // shouldn't be yanked back the moment the next chunk streams in.
    const pinnedToBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scrolledToFormRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const refreshInlineAmrLoginStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatPane.useCallback[refreshInlineAmrLoginStatus]": async ()=>{
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVelaLoginStatus"])().catch({
                "ChatPane.useCallback[refreshInlineAmrLoginStatus]": ()=>null
            }["ChatPane.useCallback[refreshInlineAmrLoginStatus]"]);
            if (next) setInlineAmrLoginStatus(next);
            return next;
        }
    }["ChatPane.useCallback[refreshInlineAmrLoginStatus]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            void refreshInlineAmrLoginStatus();
            const onAmrLoginStatusChange = {
                "ChatPane.useEffect.onAmrLoginStatusChange": (event)=>{
                    const reason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrLoginStatusEventReason"])(event);
                    if (reason === 'login-canceled') return;
                    void refreshInlineAmrLoginStatus();
                }
            }["ChatPane.useEffect.onAmrLoginStatusChange"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_STATUS_EVENT"], onAmrLoginStatusChange);
            return ({
                "ChatPane.useEffect": ()=>{
                    window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$amrLoginPolling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AMR_LOGIN_STATUS_EVENT"], onAmrLoginStatusChange);
                }
            })["ChatPane.useEffect"];
        }
    }["ChatPane.useEffect"], [
        refreshInlineAmrLoginStatus
    ]);
    // "Anchor the just-sent turn to the top" (ChatGPT-style). On send we pin
    // the user's message to the top of the viewport and let the reply stream
    // below it instead of following the bottom. `pending` is armed by the
    // composer's onSend; the messages effect promotes it to `active` once the
    // new user turn actually renders. A dynamic tail spacer reserves just
    // enough real, scrollable blank space below the turn so the message can
    // reach the top even when the reply is short. The spacer is only resized
    // while the message sits at its pinned position — once the user scrolls
    // below it, the reserved blank stays put (no collapse, no jump).
    const anchorPendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const anchorActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const tailSpacerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevStreamingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(streaming);
    const prevLastUserIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    // AssistantMessage's interaction callbacks are re-created per render and
    // excluded from its memo comparison (so streaming doesn't re-render every
    // message). Route them through this ref so a memoized message still calls the
    // LATEST handler. See areAssistantMessagePropsEqual in AssistantMessage.tsx.
    const assistantCallbacksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onContinueRemainingTasks,
        onAssistantFeedback,
        onArtifactShare,
        onForkFromMessage,
        onShareToOpenDesign
    });
    assistantCallbacksRef.current = {
        onContinueRemainingTasks,
        onAssistantFeedback,
        onArtifactShare,
        onForkFromMessage,
        onShareToOpenDesign
    };
    // Featured design-toolbox follow-up rows on the assistant "next step" card.
    // The toolbox left the "+" menu, so these route straight into the composer
    // we own here: seeding an action's prompt+skill, or opening the full panel.
    // Both stay stable (composer ref + no deps) so AssistantMessage stays memoized.
    const handleToolboxAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatPane.useCallback[handleToolboxAction]": (id)=>{
            composerRef.current?.applyDesignToolboxAction(id);
        }
    }["ChatPane.useCallback[handleToolboxAction]"], []);
    const handlePickSkill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatPane.useCallback[handlePickSkill]": (skillId)=>{
            composerRef.current?.applyDesignToolboxSkill(skillId);
        }
    }["ChatPane.useCallback[handlePickSkill]"], []);
    // The `@skill` shown in each featured row's hover detail — matched the same
    // way the composer matches it, using the raw skill name (what gets inlined
    // into the draft). Recomputed only when the skill list changes.
    const featuredToolboxSkillNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPane.useMemo[featuredToolboxSkillNames]": ()=>{
            const map = {};
            for (const id of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURED_DESIGN_TOOLBOX_ACTION_IDS"]){
                const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDesignToolboxAction"])(id);
                map[id] = action ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$design$2d$toolbox$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDesignToolboxSkill"])(action, skills)?.name ?? null : null;
            }
            return map;
        }
    }["ChatPane.useMemo[featuredToolboxSkillNames]"], [
        skills
    ]);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chat');
    const [showConvList, setShowConvList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversationSearch, setConversationSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const deferredConversationSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(conversationSearch);
    const [scrolledFromBottom, setScrolledFromBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatLogScrollable, setChatLogScrollable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatLogScrolling, setChatLogScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [composerPortalTarget, setComposerPortalTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [composerPortalRect, setComposerPortalRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [composerSlotHeight, setComposerSlotHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editingQueuedSendId, setEditingQueuedSendId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reverse scan (no array copy) + memo so this and the maps below don't
    // recompute on every non-`messages` render (scroll, hover, toggles).
    const lastAssistantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPane.useMemo[lastAssistantId]": ()=>{
            for(let i = messages.length - 1; i >= 0; i--){
                if (messages[i].role === 'assistant') return messages[i].id;
            }
            return undefined;
        }
    }["ChatPane.useMemo[lastAssistantId]"], [
        messages
    ]);
    const hasActiveRunMessage = messages.some((m)=>m.role === 'assistant' && isActiveRunStatus(m.runStatus));
    const retryAssistant = retryableAssistantMessage(messages, lastAssistantId, streaming);
    // The failed run's error event lives on the (persisted) assistant message, so
    // the error card + AMR card survive a reload — unlike the ephemeral global
    // `error` state. Drive both off this event.
    const failedRunErrorEvent = (()=>{
        const evs = retryAssistant?.events ?? [];
        for(let i = evs.length - 1; i >= 0; i--){
            const ev = evs[i];
            if (ev?.kind === 'status' && ev.label === 'error') return ev;
        }
        return null;
    })();
    // Per-case failure UI (button + copy + whether to promote AMR). Only
    // meaningful for a failed run (retryAssistant present).
    const runFailureUi = retryAssistant ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$amr$2d$guidance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRunFailureUi"])(failedRunErrorEvent?.code, retryAssistant.agentId) : null;
    const hasInlineAmrAuthorizeFailure = Boolean(retryAssistant && onRetry && runFailureUi?.primaryAction === 'authorize');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (!hasInlineAmrAuthorizeFailure || !retryAssistant || !onRetry) return;
            let stopped = false;
            const retryIfSignedIn = {
                "ChatPane.useEffect.retryIfSignedIn": async ()=>{
                    const next = await refreshInlineAmrLoginStatus();
                    if (stopped) return;
                    // Retry only on a real signed-out -> signed-in transition. A null/unknown
                    // status is NOT treated as signed-out, so it can't fabricate a transition;
                    // and once signed-in we never retry again until an explicit signed-out is
                    // seen. Otherwise a run that keeps failing auth while /status reports
                    // signed-in would retry forever (each retry is a new assistant id).
                    if (next?.loggedIn === true) {
                        const wasSignedOut = amrAuthPrevLoggedInRef.current === false;
                        amrAuthPrevLoggedInRef.current = true;
                        if (wasSignedOut && amrAuthRetriedRef.current !== retryAssistant.id) {
                            amrAuthRetriedRef.current = retryAssistant.id;
                            onRetry(retryAssistant);
                        }
                    } else if (next && next.loggedIn === false) {
                        amrAuthPrevLoggedInRef.current = false;
                    }
                }
            }["ChatPane.useEffect.retryIfSignedIn"];
            void retryIfSignedIn();
            const interval = window.setInterval({
                "ChatPane.useEffect.interval": ()=>{
                    void retryIfSignedIn();
                }
            }["ChatPane.useEffect.interval"], 500);
            return ({
                "ChatPane.useEffect": ()=>{
                    stopped = true;
                    window.clearInterval(interval);
                }
            })["ChatPane.useEffect"];
        }
    }["ChatPane.useEffect"], [
        hasInlineAmrAuthorizeFailure,
        onRetry,
        refreshInlineAmrLoginStatus,
        retryAssistant
    ]);
    // Offer Continue (resume) when the failed run is resumable AND the active
    // agent still matches the agent that produced it. The daemon stores a
    // resumable session per (conversation, agent); after an agent switch the new
    // agent has no id for that session, so a resume would silently start fresh —
    // fall back to the from-scratch Retry instead. We do NOT require `onResumeRun`
    // here: because the daemon persists the resumable session, the plain Retry
    // path (which re-sends the original prompt) would itself silently resume that
    // session and double the work. So every ChatPane surface must offer Continue
    // for a resumable failure — `onResumeRun` when wired (primary chat, carries
    // the resume_continue analytics), otherwise a plain `onSend` of the canonical
    // continue prompt (resumes the session without re-sending the original turn).
    const canResumeFailedRun = !!retryAssistant?.resumable && !!retryAssistant?.agentId && retryAssistant.agentId === config?.agentId;
    // Prefer a case-specific message (AMR auth / balance) over the raw upstream
    // string; fall back to the live global error (also covers conversation-load
    // / audio errors) then the persisted run error so a reload still shows it.
    const rawError = error ?? failedRunErrorEvent?.detail ?? null;
    // Friendly agent name for {agent} interpolation in failure copy (e.g. the
    // sign-in messages). Falls back to a neutral word when unreadable, never null.
    const failedAgentLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentDisplayName"])(retryAssistant?.agentId, retryAssistant?.agentName) ?? t('chat.runError.agentFallback');
    const displayError = runFailureUi?.messageKey ? t(runFailureUi.messageKey, {
        agent: failedAgentLabel
    }) : rawError;
    const errorDiagnosticText = displayError ? buildRunErrorDiagnosticText({
        message: displayError,
        rawMessage: rawError,
        errorCode: failedRunErrorEvent?.code,
        traceId: retryAssistant?.runId,
        projectId,
        conversationId: activeConversationId,
        assistantMessageId: retryAssistant?.id,
        agentId: retryAssistant?.agentId
    }) : null;
    // First non-empty line of the diagnostics — shown as the one-line peek when
    // the error-source area is collapsed.
    const errorSourcePeek = errorDiagnosticText?.split('\n').find((line)=>line.trim().length > 0)?.trim() ?? null;
    // Status-dot tone for the unified card. Brand (accent) for AMR sign-in/top-up
    // — the commercial recovery path; warn (amber) for the self-healing
    // connection drop; error (red) for everything else. Purely visual.
    const runErrorTone = runFailureUi?.primaryAction === 'authorize' || runFailureUi?.primaryAction === 'recharge' ? 'brand' : failedRunErrorEvent?.code === 'AGENT_CONNECTION_DROPPED' ? 'warn' : 'error';
    const [copiedErrorDiagnostic, setCopiedErrorDiagnostic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Collapsed by default: the error source area shows one line until expanded.
    const [errorSourceOpen, setErrorSourceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const errorDiagnosticCopyTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const copyErrorDiagnostic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatPane.useCallback[copyErrorDiagnostic]": async ()=>{
            if (!errorDiagnosticText) return;
            const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(errorDiagnosticText);
            if (!ok) return;
            if (errorDiagnosticCopyTimerRef.current != null) {
                window.clearTimeout(errorDiagnosticCopyTimerRef.current);
            }
            setCopiedErrorDiagnostic(true);
            errorDiagnosticCopyTimerRef.current = window.setTimeout({
                "ChatPane.useCallback[copyErrorDiagnostic]": ()=>{
                    errorDiagnosticCopyTimerRef.current = null;
                    setCopiedErrorDiagnostic(false);
                }
            }["ChatPane.useCallback[copyErrorDiagnostic]"], 1600);
        }
    }["ChatPane.useCallback[copyErrorDiagnostic]"], [
        errorDiagnosticText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>({
                "ChatPane.useEffect": ()=>{
                    if (errorDiagnosticCopyTimerRef.current != null) {
                        window.clearTimeout(errorDiagnosticCopyTimerRef.current);
                        errorDiagnosticCopyTimerRef.current = null;
                    }
                }
            })["ChatPane.useEffect"]
    }["ChatPane.useEffect"], []);
    // The failed run whose error this top-level card represents. AssistantMessage
    // suppresses only THIS message's per-message error pill (to avoid the
    // duplicate); other failed turns — older history, or once a follow-up makes
    // this no longer the last assistant — keep their pill so the error survives.
    const errorCardOwnerId = retryAssistant && failedRunErrorEvent ? retryAssistant.id : null;
    // AMR promotion card payload (only the non-AMR model/auth/quota case).
    const amrSwitchPayload = runFailureUi?.showSwitchCard && failedRunErrorEvent?.code !== 'UPSTREAM_UNAVAILABLE' && retryAssistant && failedRunErrorEvent?.code ? {
        errorCode: failedRunErrorEvent.code,
        projectId: projectId ?? '',
        projectKind: projectKindForTracking,
        conversationId: activeConversationId,
        assistantMessageId: retryAssistant.id,
        runId: retryAssistant.runId ?? null
    } : null;
    const showByokRecoveryCta = showByokRecoveryAction && Boolean(onSwitchToLocalCli);
    const showErrorActions = showByokRecoveryCta || Boolean(retryAssistant && onRetry && runFailureUi);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (!displayError || !failedRunErrorEvent?.code || !retryAssistant) return;
            // The hosted-AMR nudge owns this same surface_view when it renders below
            // the error card. For all other failed-run guidance (AMR auth/balance,
            // Antigravity auth/quota, upstream outage, generic retry), the chat error
            // card itself is the visible run_failed_toast surface.
            if (amrSwitchPayload) return;
            const key = [
                projectId ?? '',
                activeConversationId ?? '',
                retryAssistant.id,
                retryAssistant.runId ?? '',
                failedRunErrorEvent.code
            ].join(':');
            if (runFailedToastSurfaceKeysRef.current.has(key)) return;
            runFailedToastSurfaceKeysRef.current.add(key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackRunFailedToastSurfaceView"])(analytics.track, {
                page_name: 'chat_panel',
                area: 'chat_panel',
                element: 'run_failed_toast',
                error_code: failedRunErrorEvent.code,
                project_id: projectId ?? '',
                project_kind: projectKindForTracking,
                conversation_id: activeConversationId,
                assistant_message_id: retryAssistant.id,
                run_id: retryAssistant.runId ?? null
            });
        }
    }["ChatPane.useEffect"], [
        activeConversationId,
        analytics.track,
        amrSwitchPayload,
        displayError,
        failedRunErrorEvent?.code,
        projectId,
        projectKindForTracking,
        retryAssistant
    ]);
    const importedFolderArtifacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPane.useMemo[importedFolderArtifacts]": ()=>projectMetadata?.importedFrom === 'folder' ? sortArtifactsByModified((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$files$2f$designArtifacts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listDesignArtifactCandidates"])(projectFiles, projectMetadata.entryFile)) : []
    }["ChatPane.useMemo[importedFolderArtifacts]"], [
        projectFiles,
        projectMetadata?.entryFile,
        projectMetadata?.importedFrom
    ]);
    const showImportedFolderArtifacts = projectMetadata?.importedFrom === 'folder';
    const composerDraftStorageKey = projectId && activeConversationId ? `od:chat-composer:draft:${projectId}:${activeConversationId}` : undefined;
    // Only the first user message gets the active-plugin chip — the
    // plugin is project-scoped so re-stamping it on every reply would be
    // noise. Subsequent messages still run under the same snapshot.
    const firstUserMessageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPane.useMemo[firstUserMessageId]": ()=>messages.find({
                "ChatPane.useMemo[firstUserMessageId]": (m)=>m.role === 'user'
            }["ChatPane.useMemo[firstUserMessageId]"])?.id
    }["ChatPane.useMemo[firstUserMessageId]"], [
        messages
    ]);
    const shouldBalanceFinishedTranscript = !loading && !streaming && !displayError && !hasActiveRunMessage && messages.length > 0;
    // Map each assistant message id to the user message that follows it (if any)
    // so the chat-side Questions banner can reopen that exact answered form in
    // the right-hand panel later.
    const nextUserContentByAssistantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPane.useMemo[nextUserContentByAssistantId]": ()=>{
            const map = new Map();
            for(let i = 0; i < messages.length - 1; i++){
                const m = messages[i];
                const next = messages[i + 1];
                if (m.role === 'assistant' && next.role === 'user') {
                    map.set(m.id, next.content);
                }
            }
            return map;
        }
    }["ChatPane.useMemo[nextUserContentByAssistantId]"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            didInitialScrollRef.current = false;
            anchorPendingRef.current = false;
            anchorActiveRef.current = false;
            prevLastUserIdRef.current = undefined;
            resetTailSpacer();
            // A new conversation should land at the bottom (its own initial
            // scroll), not inherit the previous conversation's saved position —
            // including any anchor-to-top reserve still held by the tail spacer, which
            // would otherwise strand the freshly opened conversation below a dead gap.
            savedChatScrollRef.current = null;
            scrolledToFormRef.current = new Set();
            anchorActiveRef.current = false;
            anchorPendingRef.current = false;
            resetTailSpacer();
        }
    }["ChatPane.useEffect"], [
        activeConversationId
    ]);
    // ChatComposer's internal `seededRef` latches after the first
    // non-empty `initialDraft`, so a parent setting `initialDraft` back
    // to `undefined` will not flow into the composer's draft state. When
    // the parent does that transition (because the seed is now stale —
    // e.g. ProjectView discovered the conversation already has a sent
    // user message after a reload), reach into the composer and clear
    // the textarea so the user does not see the prompt they already
    // submitted.
    const lastSeenInitialDraftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialDraft);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            const previous = lastSeenInitialDraftRef.current;
            lastSeenInitialDraftRef.current = initialDraft;
            if (previous && initialDraft === undefined) {
                composerRef.current?.setDraft('');
            }
        }
    }["ChatPane.useEffect"], [
        initialDraft
    ]);
    // Parent-driven composer prefill (the "Import repo" CTA). Reuse the same
    // imperative setDraft the starter cards use; the nonce guards against
    // re-applying the same signal on unrelated re-renders.
    const lastDraftSignalNonceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (!composerDraftSignal) return;
            if (lastDraftSignalNonceRef.current === composerDraftSignal.nonce) return;
            lastDraftSignalNonceRef.current = composerDraftSignal.nonce;
            composerRef.current?.setDraft(composerDraftSignal.text);
        }
    }["ChatPane.useEffect"], [
        composerDraftSignal
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (!editingQueuedSendId) return;
            if (queuedItems.some({
                "ChatPane.useEffect": (item)=>item.id === editingQueuedSendId
            }["ChatPane.useEffect"])) return;
            setEditingQueuedSendId(null);
        }
    }["ChatPane.useEffect"], [
        editingQueuedSendId,
        queuedItems
    ]);
    const restoreQueuedSendToComposer = (item)=>{
        setEditingQueuedSendId(item.id);
        composerRef.current?.restoreDraft({
            text: item.prompt,
            attachments: item.attachments ?? [],
            commentAttachments: item.commentAttachments ?? [],
            meta: item.meta
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            const el = logRef.current;
            if (!el || didInitialScrollRef.current || messages.length === 0) return;
            didInitialScrollRef.current = true;
            requestAnimationFrame({
                "ChatPane.useEffect": ()=>{
                    // If the last assistant message contains a question form, scroll to
                    // the form instead of the bottom, so the user sees the form first.
                    const lastAssistantMsg = [
                        ...messages
                    ].reverse().find({
                        "ChatPane.useEffect.lastAssistantMsg": (m)=>m.role === 'assistant'
                    }["ChatPane.useEffect.lastAssistantMsg"]);
                    if (lastAssistantMsg?.content.includes('<question-form')) {
                        const assistantEls = el.querySelectorAll('.msg.assistant');
                        const lastAssistantEl = assistantEls[assistantEls.length - 1];
                        const formEl = lastAssistantEl?.querySelector('[data-form-id]');
                        if (formEl && !scrolledToFormRef.current.has(formEl.dataset.formId)) {
                            scrolledToFormRef.current.add(formEl.dataset.formId);
                            formEl.scrollIntoView({
                                block: 'start',
                                behavior: 'smooth'
                            });
                            pinnedToBottomRef.current = false;
                            setScrolledFromBottom(true);
                            return;
                        }
                        // Already handled by the auto-scroll effect — don't bottom-scroll.
                        if (formEl) return;
                    }
                    // Initial-load bottom-pin must be instant — smooth scrollTo emits
                    // intermediate scroll events that flip pinnedToBottomRef to false.
                    el.scrollTop = el.scrollHeight;
                    setScrolledFromBottom(false);
                    pinnedToBottomRef.current = true;
                }
            }["ChatPane.useEffect"]);
        // `tab` is in the deps so that switching conversations while
        // Comments is open doesn't strand the new conversation at scrollTop:
        // 0. The activeConversationId-reset effect above clears
        // didInitialScrollRef while the chat-log is unmounted; this effect
        // then re-runs when the user returns to Chat and the element is
        // available, scrolling the new conversation to its initial bottom.
        }
    }["ChatPane.useEffect"], [
        activeConversationId,
        messages.length,
        tab
    ]);
    // When a turn finishes streaming, release the anchor-to-top reserve. The
    // tail spacer only exists to give a streaming reply room to grow while the
    // user message stays pinned at the top; once the reply is final it must not
    // linger, or a short turn (typical of a fresh fork) is left with a large
    // dead gap below it. Collapsing the spacer lets the bottom-anchored layout
    // settle the finished transcript against the composer.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            const was = prevStreamingRef.current;
            prevStreamingRef.current = streaming;
            // The tail spacer only ever holds the anchor-to-top reserve for an actively
            // streaming reply, so once the turn ends it must collapse unconditionally —
            // even if a mid-turn scroll already cleared `anchorActiveRef` (which leaves
            // the spacer sized). Collapsing it lets the bottom-anchored layout settle a
            // finished short turn against the composer instead of below a dead gap.
            if (was && !streaming) {
                anchorActiveRef.current = false;
                resetTailSpacer();
            }
        }
    }["ChatPane.useEffect"], [
        streaming
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            const el = logRef.current;
            if (!el) return;
            // Auto-scroll only when the user was already pinned near the bottom,
            // so a scrollback session reading earlier output isn't yanked to the
            // latest message. We key off the pre-content `pinnedToBottomRef`
            // (a ref so it doesn't itself re-fire this effect on scroll) instead
            // of recomputing distance from the just-grown scrollHeight: a single
            // streamed chunk can add 100+ px in one render, which made the
            // post-content distance check skip auto-scroll even when the user
            // was glued to the bottom. We deliberately use the tighter 80px
            // cutoff tracked by the ref (not the wider 120px jump-button
            // threshold) so a deliberate ~90px scroll-up isn't snapped back the
            // next time content streams in. Issue #983.
            // A brand-new user turn from a local send: switch to "anchor to top"
            // mode and smooth-scroll their message to the top of the viewport.
            const lastUser = [
                ...messages
            ].reverse().find({
                "ChatPane.useEffect.lastUser": (m)=>m.role === 'user'
            }["ChatPane.useEffect.lastUser"]);
            const prevUserId = prevLastUserIdRef.current;
            prevLastUserIdRef.current = lastUser?.id;
            if (anchorPendingRef.current && lastUser && lastUser.id !== prevUserId) {
                anchorPendingRef.current = false;
                resetTailSpacer();
                anchorActiveRef.current = true;
                pinnedToBottomRef.current = false;
                setScrolledFromBottom(true);
                requestAnimationFrame({
                    "ChatPane.useEffect": ()=>{
                        sizeAnchorSpacer();
                        scrollAnchorToTop();
                    }
                }["ChatPane.useEffect"]);
                return;
            }
            // While anchored, the message stays at the top on its own (nothing above
            // it changes), so we only shrink the spacer as the reply grows — never
            // re-scroll. This is what keeps scrolling down and the final settle smooth.
            if (anchorActiveRef.current) {
                requestAnimationFrame(sizeAnchorSpacer);
                return;
            }
            if (pinnedToBottomRef.current) {
                // If the last assistant message contains a question form, scroll to
                // the form instead of the bottom, so the user lands on the form.
                const lastAssistantMsg = [
                    ...messages
                ].reverse().find({
                    "ChatPane.useEffect.lastAssistantMsg": (m)=>m.role === 'assistant'
                }["ChatPane.useEffect.lastAssistantMsg"]);
                if (lastAssistantMsg?.content.includes('<question-form')) {
                    const assistantEls = el.querySelectorAll('.msg.assistant');
                    const lastAssistantEl = assistantEls[assistantEls.length - 1];
                    const formEl = lastAssistantEl?.querySelector('[data-form-id]');
                    if (formEl && !scrolledToFormRef.current.has(formEl.dataset.formId)) {
                        scrolledToFormRef.current.add(formEl.dataset.formId);
                        formEl.scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        });
                        pinnedToBottomRef.current = false;
                        setScrolledFromBottom(true);
                        return;
                    }
                    // Form tag in content but the DOM element isn't ready yet (partial
                    // stream) — skip bottom-scroll to avoid a jarring jump that gets
                    // undone when the form finishes rendering.
                    if (streaming) return;
                }
                // Streaming bottom-pin must be instant — smooth scrollTo emits
                // intermediate scroll events that flip pinnedToBottomRef to false,
                // breaking auto-follow for subsequent chunks.
                el.scrollTop = el.scrollHeight;
            }
        }
    }["ChatPane.useEffect"], [
        messages,
        error,
        streaming
    ]);
    // Saved chat-log scroll state, preserved across tab switches. The
    // chat-log <div> is conditionally rendered so it unmounts when the
    // user switches to Comments. On remount it would default to
    // scrollTop: 0 and the initial-bottom-scroll effect skips because
    // didInitialScrollRef is already true. We capture either the absolute
    // scrollTop or a "pinned to bottom" flag while Chat is visible, so
    // bottom-followers stay pinned even when new messages stream in
    // off-tab. Issue #790.
    const savedChatScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (tab !== 'chat') return;
            const el = logRef.current;
            if (!el) return;
            function syncScrollable(target) {
                const next = target.scrollHeight - target.clientHeight > 1;
                setChatLogScrollable({
                    "ChatPane.useEffect.syncScrollable": (prev)=>prev === next ? prev : next
                }["ChatPane.useEffect.syncScrollable"]);
                if (!next) setChatLogScrolling(false);
            }
            function markScrolling() {
                setChatLogScrolling(true);
                if (chatLogScrollIdleTimerRef.current !== null) {
                    window.clearTimeout(chatLogScrollIdleTimerRef.current);
                }
                chatLogScrollIdleTimerRef.current = window.setTimeout({
                    "ChatPane.useEffect.markScrolling": ()=>{
                        chatLogScrollIdleTimerRef.current = null;
                        setChatLogScrolling(false);
                    }
                }["ChatPane.useEffect.markScrolling"], 650);
            }
            // Restore previously-saved position on remount. Defer to the next
            // frame so the conditional <> contents finish layout before the
            // scrollTop write lands.
            const saved = savedChatScrollRef.current;
            if (saved !== null) {
                requestAnimationFrame({
                    "ChatPane.useEffect": ()=>{
                        const target = logRef.current;
                        if (!target) return;
                        if (saved.pinnedToBottom) {
                            target.scrollTop = target.scrollHeight;
                        } else {
                            target.scrollTop = saved.scrollTop;
                        }
                        syncScrollable(target);
                        // Resync the jump-to-latest affordance with the restored
                        // position. Without this, a user who left Chat ~60px from the
                        // bottom and returns to find new messages stacked underneath
                        // would land hundreds of pixels above the latest turn while
                        // scrolledFromBottom remained false until they scrolled.
                        const distance = target.scrollHeight - target.scrollTop - target.clientHeight;
                        setScrolledFromBottom(distance > 120);
                        pinnedToBottomRef.current = distance < 80;
                    }
                }["ChatPane.useEffect"]);
            }
            function snapshot(target) {
                const distance = target.scrollHeight - target.scrollTop - target.clientHeight;
                savedChatScrollRef.current = distance < 50 ? {
                    pinnedToBottom: true
                } : {
                    pinnedToBottom: false,
                    scrollTop: target.scrollTop
                };
            }
            function onScroll() {
                const target = logRef.current;
                if (!target) return;
                // A genuine user scroll (one that moves away from where the anchored
                // message currently sits) releases the auto-resize behavior. We do NOT
                // collapse the tail spacer: the reserved blank below stays as real,
                // scrollable space so scrolling down feels natural instead of snapping.
                if (anchorActiveRef.current) {
                    const pinnedTop = lastUserMsgTopInContent(target);
                    if (pinnedTop !== null && Math.abs(target.scrollTop - (pinnedTop - ANCHOR_TOP_PADDING)) > 40) {
                        anchorActiveRef.current = false;
                    }
                }
                syncScrollable(target);
                markScrolling();
                snapshot(target);
                const distance = target.scrollHeight - target.scrollTop - target.clientHeight;
                // Functional updater bails out when the value is unchanged so a flood
                // of scroll events (e.g. programmatic scrollTop + ResizeObserver
                // follow-up during streaming) does not schedule a re-render per tick
                // and trip React's "Maximum update depth exceeded" guard.
                const next = distance > 120;
                setScrolledFromBottom({
                    "ChatPane.useEffect.onScroll": (prev)=>prev === next ? prev : next
                }["ChatPane.useEffect.onScroll"]);
                pinnedToBottomRef.current = distance < 80;
            }
            syncScrollable(el);
            el.addEventListener('scroll', onScroll);
            return ({
                "ChatPane.useEffect": ()=>{
                    // Capture final scroll state before unmount; the ref normally
                    // tracks via onScroll, but programmatic scrolls or layout shifts
                    // right before unmount can leave it stale.
                    snapshot(el);
                    el.removeEventListener('scroll', onScroll);
                    if (chatLogScrollIdleTimerRef.current !== null) {
                        window.clearTimeout(chatLogScrollIdleTimerRef.current);
                        chatLogScrollIdleTimerRef.current = null;
                    }
                    setChatLogScrolling(false);
                }
            })["ChatPane.useEffect"];
        }
    }["ChatPane.useEffect"], [
        tab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (tab !== 'chat') return;
            const el = logRef.current;
            if (!el) return;
            let followFrame = null;
            const followLatestIfPinned = {
                "ChatPane.useEffect.followLatestIfPinned": ()=>{
                    // While anchored, only shrink the tail spacer as the reply grows
                    // (resize-only, never scroll) so the user message stays put without
                    // fighting a manual scroll-down.
                    if (anchorActiveRef.current) {
                        if (followFrame !== null) return;
                        followFrame = requestAnimationFrame({
                            "ChatPane.useEffect.followLatestIfPinned": ()=>{
                                followFrame = null;
                                if (!anchorActiveRef.current) return;
                                sizeAnchorSpacer();
                            }
                        }["ChatPane.useEffect.followLatestIfPinned"]);
                        return;
                    }
                    if (!pinnedToBottomRef.current || followFrame !== null) return;
                    followFrame = requestAnimationFrame({
                        "ChatPane.useEffect.followLatestIfPinned": ()=>{
                            followFrame = null;
                            const target = logRef.current;
                            if (!target || !pinnedToBottomRef.current) return;
                            target.scrollTop = target.scrollHeight;
                            setScrolledFromBottom(false);
                        }
                    }["ChatPane.useEffect.followLatestIfPinned"]);
                }
            }["ChatPane.useEffect.followLatestIfPinned"];
            const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver({
                "ChatPane.useEffect": ()=>{
                    const target = logRef.current;
                    if (target) {
                        const next = target.scrollHeight - target.clientHeight > 1;
                        setChatLogScrollable({
                            "ChatPane.useEffect": (prev)=>prev === next ? prev : next
                        }["ChatPane.useEffect"]);
                        if (!next) setChatLogScrolling(false);
                    }
                    followLatestIfPinned();
                }
            }["ChatPane.useEffect"]) : null;
            const observedChildren = new Set();
            const syncObservedChildren = {
                "ChatPane.useEffect.syncObservedChildren": ()=>{
                    if (!resizeObserver) return;
                    const currentChildren = new Set(Array.from(el.children));
                    // The tail spacer's height is driven by the anchor logic; observing it
                    // would feed its own resize back into followLatestIfPinned.
                    if (tailSpacerRef.current) currentChildren.delete(tailSpacerRef.current);
                    for (const child of currentChildren){
                        if (observedChildren.has(child)) continue;
                        resizeObserver.observe(child);
                        observedChildren.add(child);
                    }
                    for (const child of observedChildren){
                        if (currentChildren.has(child)) continue;
                        resizeObserver.unobserve(child);
                        observedChildren.delete(child);
                    }
                }
            }["ChatPane.useEffect.syncObservedChildren"];
            let observedQueuedSendStrip = null;
            const syncQueuedSendStrip = {
                "ChatPane.useEffect.syncQueuedSendStrip": ()=>{
                    if (!resizeObserver) return;
                    const queuedEl = queuedSendStripRef.current;
                    if (queuedEl && observedQueuedSendStrip !== queuedEl) {
                        if (observedQueuedSendStrip) {
                            resizeObserver.unobserve(observedQueuedSendStrip);
                        }
                        resizeObserver.observe(queuedEl);
                        observedQueuedSendStrip = queuedEl;
                    } else if (!queuedEl && observedQueuedSendStrip) {
                        resizeObserver.unobserve(observedQueuedSendStrip);
                        observedQueuedSendStrip = null;
                    }
                }
            }["ChatPane.useEffect.syncQueuedSendStrip"];
            syncObservedChildren();
            syncQueuedSendStrip();
            const mutationObserver = typeof MutationObserver !== 'undefined' ? new MutationObserver({
                "ChatPane.useEffect": ()=>{
                    syncObservedChildren();
                    syncQueuedSendStrip();
                    followLatestIfPinned();
                }
            }["ChatPane.useEffect"]) : null;
            // childList + subtree only — NOT characterData. Auto-follow during
            // streaming is driven by the ResizeObserver on each message child (text
            // growth changes height), so observing per-character text mutations would
            // re-run the full sync sweep on every streamed frame for no extra benefit.
            mutationObserver?.observe(el, {
                childList: true,
                subtree: true
            });
            // QueuedSendStrip lives outside the chat-log subtree (it is a sibling of
            // .chat-log-wrap inside .pane). The MutationObserver above only fires for
            // changes inside el, so it cannot detect that surface mounting or
            // unmounting. Watch the nearest common ancestor (.pane) with childList-only
            // to keep its observer current.
            const paneEl = el.parentElement?.parentElement ?? null;
            if (paneEl && mutationObserver) {
                mutationObserver.observe(paneEl, {
                    childList: true
                });
            }
            return ({
                "ChatPane.useEffect": ()=>{
                    if (followFrame !== null) cancelAnimationFrame(followFrame);
                    mutationObserver?.disconnect();
                    resizeObserver?.disconnect();
                }
            })["ChatPane.useEffect"];
        }
    }["ChatPane.useEffect"], [
        tab
    ]);
    // Close the conversation history dropdown on outside click / Escape.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (!showConvList) return;
            function onPointer(e) {
                const target = e.target;
                if (historyWrapRef.current?.contains(target)) return;
                setShowConvList(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') setShowConvList(false);
            }
            document.addEventListener('mousedown', onPointer);
            document.addEventListener('keydown', onKey);
            return ({
                "ChatPane.useEffect": ()=>{
                    document.removeEventListener('mousedown', onPointer);
                    document.removeEventListener('keydown', onKey);
                }
            })["ChatPane.useEffect"];
        }
    }["ChatPane.useEffect"], [
        showConvList
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (showConvList) return;
            setConversationSearch('');
        }
    }["ChatPane.useEffect"], [
        showConvList
    ]);
    const activeConversation = conversations.find((c)=>c.id === activeConversationId) ?? null;
    const filteredConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPane.useMemo[filteredConversations]": ()=>filterConversations(conversations, deferredConversationSearch, t)
    }["ChatPane.useMemo[filteredConversations]"], [
        conversations,
        deferredConversationSearch,
        t
    ]);
    function resetTailSpacer() {
        const s = tailSpacerRef.current;
        if (s) s.style.height = '0px';
    }
    // Content offset (distance from the top of the scroll content) of the most
    // recent user message. Invariant to the current scrollTop, so it's safe to
    // call regardless of where the user has scrolled.
    function lastUserMsgTopInContent(el) {
        const userEls = el.querySelectorAll('.msg.user');
        const msgEl = userEls[userEls.length - 1];
        if (!msgEl) return null;
        const elRect = el.getBoundingClientRect();
        const msgRect = msgEl.getBoundingClientRect();
        return el.scrollTop + (msgRect.top - elRect.top);
    }
    // Resize the tail spacer so the anchored message can sit at the top with
    // just enough room below it — no more. This is a resize ONLY (never a
    // scroll): shrinking empty space below the fold can't shift what's visible
    // while the user is pinned near the top, so it never causes jitter. As the
    // reply streams in, `needed` shrinks monotonically toward 0.
    function sizeAnchorSpacer() {
        const el = logRef.current;
        const spacer = tailSpacerRef.current;
        if (!el || !spacer) return;
        const msgTopInContent = lastUserMsgTopInContent(el);
        if (msgTopInContent === null) return;
        const spacerH = spacer.offsetHeight;
        const contentBelow = el.scrollHeight - spacerH - msgTopInContent;
        const needed = Math.max(0, el.clientHeight - contentBelow - ANCHOR_TOP_PADDING);
        spacer.style.height = `${needed}px`;
    }
    // Smooth-scroll the anchored message to the top. Called ONCE per turn (on
    // send). The message then stays at the top on its own as the reply streams
    // below it, so we never re-scroll — re-scrolling each chunk is what caused
    // the scroll-down fight and the settle jitter.
    function scrollAnchorToTop() {
        const el = logRef.current;
        if (!el) return;
        const msgTopInContent = lastUserMsgTopInContent(el);
        if (msgTopInContent === null) return;
        const target = Math.max(0, msgTopInContent - ANCHOR_TOP_PADDING);
        el.scrollTo({
            top: target,
            behavior: 'smooth'
        });
    }
    function jumpToBottom() {
        const el = logRef.current;
        if (!el) return;
        anchorActiveRef.current = false;
        pinnedToBottomRef.current = true;
        resetTailSpacer();
        el.scrollTo({
            top: el.scrollHeight,
            behavior: 'smooth'
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPane.useEffect": ()=>{
            if (typeof document === 'undefined') return;
            setComposerPortalTarget(document.body);
        }
    }["ChatPane.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ChatPane.useLayoutEffect": ()=>{
            if (tab !== 'chat') {
                setComposerPortalRect(null);
                return;
            }
            const slot = composerSlotRef.current;
            if (!slot || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            let frame = null;
            const updateRect = {
                "ChatPane.useLayoutEffect.updateRect": ()=>{
                    frame = null;
                    const rect = slot.getBoundingClientRect();
                    setComposerPortalRect({
                        "ChatPane.useLayoutEffect.updateRect": (prev)=>{
                            const next = {
                                left: Math.round(rect.left),
                                width: Math.round(rect.width),
                                bottom: Math.max(0, Math.round(window.innerHeight - rect.bottom))
                            };
                            if (prev && prev.left === next.left && prev.width === next.width && prev.bottom === next.bottom) {
                                return prev;
                            }
                            return next;
                        }
                    }["ChatPane.useLayoutEffect.updateRect"]);
                }
            }["ChatPane.useLayoutEffect.updateRect"];
            const scheduleUpdate = {
                "ChatPane.useLayoutEffect.scheduleUpdate": ()=>{
                    if (frame !== null) return;
                    frame = window.requestAnimationFrame(updateRect);
                }
            }["ChatPane.useLayoutEffect.scheduleUpdate"];
            updateRect();
            const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(scheduleUpdate) : null;
            resizeObserver?.observe(slot);
            const pane = slot.closest('.pane');
            if (pane) resizeObserver?.observe(pane);
            window.addEventListener('resize', scheduleUpdate);
            window.visualViewport?.addEventListener('resize', scheduleUpdate);
            return ({
                "ChatPane.useLayoutEffect": ()=>{
                    if (frame !== null) window.cancelAnimationFrame(frame);
                    resizeObserver?.disconnect();
                    window.removeEventListener('resize', scheduleUpdate);
                    window.visualViewport?.removeEventListener('resize', scheduleUpdate);
                }
            })["ChatPane.useLayoutEffect"];
        }
    }["ChatPane.useLayoutEffect"], [
        tab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ChatPane.useLayoutEffect": ()=>{
            if (tab !== 'chat' || !composerPortalTarget || !composerPortalRect) return;
            const layer = composerLayerRef.current;
            if (!layer || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            let frame = null;
            const updateHeight = {
                "ChatPane.useLayoutEffect.updateHeight": ()=>{
                    frame = null;
                    const nextHeight = Math.ceil(layer.getBoundingClientRect().height);
                    setComposerSlotHeight({
                        "ChatPane.useLayoutEffect.updateHeight": (prev)=>prev === nextHeight ? prev : nextHeight
                    }["ChatPane.useLayoutEffect.updateHeight"]);
                }
            }["ChatPane.useLayoutEffect.updateHeight"];
            const scheduleUpdate = {
                "ChatPane.useLayoutEffect.scheduleUpdate": ()=>{
                    if (frame !== null) return;
                    frame = window.requestAnimationFrame(updateHeight);
                }
            }["ChatPane.useLayoutEffect.scheduleUpdate"];
            updateHeight();
            const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(scheduleUpdate) : null;
            resizeObserver?.observe(layer);
            return ({
                "ChatPane.useLayoutEffect": ()=>{
                    if (frame !== null) window.cancelAnimationFrame(frame);
                    resizeObserver?.disconnect();
                }
            })["ChatPane.useLayoutEffect"];
        }
    }["ChatPane.useLayoutEffect"], [
        composerPortalRect,
        composerPortalTarget,
        tab
    ]);
    const composerNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatComposer"], {
        ref: composerRef,
        designSystemPicker: designSystemPicker,
        projectId: projectId,
        projectFiles: projectFiles,
        activeProjectFileName: activeProjectFileName,
        sessionMode: sessionMode,
        onSessionModeChange: onSessionModeChange,
        skills: skills,
        streaming: streaming,
        sendDisabled: sendDisabled,
        initialDraft: initialDraft,
        draftStorageKey: composerDraftStorageKey,
        onEnsureProject: onEnsureProject,
        commentAttachments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentsToAttachments"])(attachedComments),
        onRemoveCommentAttachment: onDetachComment,
        onSend: (prompt, attachments, commentAttachments, meta)=>{
            pinnedToBottomRef.current = true;
            scrolledToFormRef.current = new Set();
            if (editingQueuedSendId && onUpdateQueuedSend) {
                const original = queuedItems.find((item)=>item.id === editingQueuedSendId);
                const update = {
                    prompt,
                    attachments,
                    commentAttachments
                };
                const nextMeta = meta ?? original?.meta;
                if (nextMeta !== undefined) update.meta = nextMeta;
                onUpdateQueuedSend(editingQueuedSendId, update);
                setEditingQueuedSendId(null);
                return;
            }
            // Arm "anchor to top": the messages effect promotes this once
            // the new user turn renders, pinning it to the top of the view.
            // Clear any stale reserve from the previous turn first so a resend
            // doesn't strand the new turn below a leftover gap (release #3653).
            anchorActiveRef.current = false;
            resetTailSpacer();
            anchorPendingRef.current = true;
            onSend(prompt, attachments, commentAttachments, meta);
        },
        onStop: onStop,
        onOpenSettings: onOpenSettings,
        onOpenMcpSettings: onOpenMcpSettings,
        onBrowsePlugins: onBrowsePlugins,
        onOpenConnectors: onOpenConnectors,
        petConfig: petConfig,
        onAdoptPet: onAdoptPet,
        onTogglePet: onTogglePet,
        onOpenPetSettings: onOpenPetSettings,
        researchAvailable: researchAvailable,
        projectMetadata: projectMetadata,
        onProjectMetadataChange: onProjectMetadataChange,
        activeWorkspaceContext: activeWorkspaceContext,
        workspaceContexts: workspaceContexts,
        byokApiProtocol: byokApiProtocol,
        byokImageModel: byokImageModel,
        onChangeByokImageModel: onChangeByokImageModel,
        byokVideoModel: byokVideoModel,
        onChangeByokVideoModel: onChangeByokVideoModel,
        byokSpeechModel: byokSpeechModel,
        onChangeByokSpeechModel: onChangeByokSpeechModel,
        byokSpeechVoice: byokSpeechVoice,
        onChangeByokSpeechVoice: onChangeByokSpeechVoice,
        currentSkillId: currentSkillId,
        onProjectSkillChange: onProjectSkillChange,
        pinnedPluginId: activePluginSnapshot?.pluginId ?? null,
        footerAccessory: composerFooterAccessory,
        leadingAccessory: composerLeadingAccessory,
        currentDesignSystemId: currentDesignSystemId,
        onActiveDesignSystemChange: onActiveDesignSystemChange,
        onShowToast: onShowToast
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 1704,
        columnNumber: 5
    }, this);
    const shouldPortalComposer = tab === 'chat' && composerPortalTarget !== null && composerPortalRect !== null && composerPortalRect.width > 0;
    const composerSlotStyle = shouldPortalComposer ? {
        minHeight: composerSlotHeight > 0 ? composerSlotHeight : undefined
    } : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pane",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-project-header",
                children: [
                    onBack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "chat-project-back",
                        onClick: onBack,
                        title: backLabel,
                        "aria-label": backLabel,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "arrow-left",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 1798,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 1791,
                        columnNumber: 11
                    }, this) : null,
                    projectHeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chat-project-header-title",
                        children: projectHeader
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 1802,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `chat-history-wrap chat-session-switcher${showConvList ? ' open' : ''}`,
                        ref: historyWrapRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "chat-session-trigger icon-only",
                                "data-testid": "conversation-history-trigger",
                                title: activeConversation?.title ? `${t('chat.conversationsTitle')} · ${activeConversation.title}` : t('chat.conversationsTitle'),
                                "aria-label": t('chat.conversationsAria'),
                                "aria-haspopup": "menu",
                                "aria-expanded": showConvList,
                                onClick: ()=>{
                                    setShowConvList((v)=>{
                                        const next = !v;
                                        if (next) {
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackChatPanelClick"])(analytics.track, {
                                                page_name: 'chat_panel',
                                                area: 'chat_panel',
                                                element: 'history'
                                            });
                                        }
                                        return next;
                                    });
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "comment",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 1834,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 1808,
                                columnNumber: 11
                            }, this),
                            showConvList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-history-menu",
                                role: "menu",
                                "data-testid": "conversation-history-menu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-history-menu-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chat-history-menu-title",
                                                children: t('chat.conversationsHeading')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1839,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chat-history-menu-count",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-testid": "conversation-history-count",
                                                    children: filteredConversations.length === conversations.length ? compactCount(conversations.length) : `${compactCount(filteredConversations.length)} / ${compactCount(conversations.length)}`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                    lineNumber: 1843,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1842,
                                                columnNumber: 17
                                            }, this),
                                            onNewConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "chat-history-new",
                                                "data-testid": "conversation-history-new",
                                                disabled: newConversationDisabled,
                                                onClick: ()=>{
                                                    if (newConversationDisabled) return;
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackChatPanelClick"])(analytics.track, {
                                                        page_name: 'chat_panel',
                                                        area: 'chat_panel',
                                                        element: 'new_chat'
                                                    });
                                                    onNewConversation();
                                                    setShowConvList(false);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "plus",
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 1866,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('chat.new')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 1867,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1850,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 1838,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "chat-history-search",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "search",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1872,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                value: conversationSearch,
                                                onChange: (event)=>setConversationSearch(event.currentTarget.value),
                                                placeholder: "Search conversations",
                                                "data-testid": "conversation-history-search"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1873,
                                                columnNumber: 17
                                            }, this),
                                            conversationSearch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "chat-history-search-clear",
                                                onClick: ()=>setConversationSearch(''),
                                                "aria-label": t('chat.comments.clear'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "close",
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                    lineNumber: 1887,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1881,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 1871,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-history-list",
                                        "data-testid": "conversation-list",
                                        children: conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chat-history-empty",
                                            children: t('chat.emptyConversations')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 1893,
                                            columnNumber: 19
                                        }, this) : filteredConversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chat-history-empty",
                                            children: "No conversations match."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 1897,
                                            columnNumber: 19
                                        }, this) : filteredConversations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConversationRow, {
                                                conversation: c,
                                                active: c.id === activeConversationId,
                                                messageCount: conversationMessageCount(c, activeConversationId, messagesConversationId, messages.length),
                                                onSelect: ()=>{
                                                    onSelectConversation(c.id);
                                                    setShowConvList(false);
                                                },
                                                onDelete: ()=>onDeleteConversation(c.id),
                                                t: t
                                            }, c.id, false, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 1902,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 1891,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 1837,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 1804,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 1789,
                columnNumber: 7
            }, this),
            tab === 'chat' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-log-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    'chat-log',
                                    loading ? 'is-loading' : '',
                                    chatLogScrollable ? 'is-scrollable' : '',
                                    chatLogScrolling ? 'is-scrolling' : '',
                                    shouldBalanceFinishedTranscript ? 'is-balanced-transcript' : ''
                                ].filter(Boolean).join(' '),
                                ref: logRef,
                                "aria-busy": loading,
                                onClickCapture: (e)=>{
                                    // Expanding an accordion (tool card / thinking block) should
                                    // grow downward with the clicked header staying put. While a
                                    // run is glued to the bottom, the ResizeObserver would re-pin
                                    // to the bottom on the height change and push the header up,
                                    // so unpin the moment the user toggles one open.
                                    const toggle = e.target.closest('.thinking-toggle, .action-card-toggle, button.op-card-head, [aria-expanded]');
                                    if (toggle && logRef.current?.contains(toggle)) {
                                        pinnedToBottomRef.current = false;
                                        anchorActiveRef.current = false;
                                        setScrolledFromBottom(true);
                                    }
                                },
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatConversationLoading, {
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 1950,
                                        columnNumber: 26
                                    }, this) : null,
                                    messages.length === 0 && !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-empty-wrap",
                                        children: showImportedFolderArtifacts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportedFolderArtifacts, {
                                            projectId: projectId,
                                            files: importedFolderArtifacts,
                                            onOpenFile: onRequestOpenFile,
                                            t: t
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 1954,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "chat-empty",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "chat-empty-title",
                                                        children: t('chat.startTitle')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 1963,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                    lineNumber: 1962,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "chat-examples",
                                                    role: "list",
                                                    children: pickStarters(projectMetadata, t).map((ex, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            role: "listitem",
                                                            className: "chat-example",
                                                            style: {
                                                                animationDelay: `${i * 70}ms`
                                                            },
                                                            onClick: ()=>{
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackChatPanelClick"])(analytics.track, {
                                                                    page_name: 'chat_panel',
                                                                    area: 'chat_panel',
                                                                    element: 'template_card'
                                                                });
                                                                composerRef.current?.setDraft(ex.prompt);
                                                            },
                                                            title: t('chat.fillInputTitle'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "chat-example-icon",
                                                                    "aria-hidden": true,
                                                                    children: ex.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 1985,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "chat-example-body",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "chat-example-head",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "chat-example-title",
                                                                                    children: ex.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                                    lineNumber: 1990,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "chat-example-tag",
                                                                                    children: ex.tag
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                                    lineNumber: 1991,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                            lineNumber: 1989,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "chat-example-prompt",
                                                                            children: ex.prompt
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                            lineNumber: 1993,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 1988,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "chat-example-cta",
                                                                    "aria-hidden": true,
                                                                    children: "↵"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 1995,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, `${ex.title}-${i}`, true, {
                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                            lineNumber: 1969,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                    lineNumber: 1967,
                                                    columnNumber: 23
                                                }, this),
                                                connectRepoNeeded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "chat-connect-repo",
                                                    role: "note",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "chat-connect-repo-icon",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "github",
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2004,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                            lineNumber: 2003,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "chat-connect-repo-body",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "chat-connect-repo-title",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repoConnectCopy"])(githubConnected).cardTitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 2007,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "chat-connect-repo-text",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repoConnectCopy"])(githubConnected).cardBody
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 2010,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                            lineNumber: 2006,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "primary-ghost",
                                                            disabled: githubConnected === undefined,
                                                            onClick: ()=>onConnectRepo?.(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                    name: "github",
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 2020,
                                                                    columnNumber: 29
                                                                }, this),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$system$2d$github$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repoConnectCopy"])(githubConnected).buttonLabel
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                            lineNumber: 2014,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                    lineNumber: 2002,
                                                    columnNumber: 25
                                                }, this) : null
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 1952,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatRows, {
                                        messages: messages,
                                        streaming: streaming,
                                        liveToolInput: liveToolInput,
                                        projectId: projectId,
                                        projectKindForTracking: projectKindForTracking,
                                        activeConversationId: activeConversationId,
                                        activeConversationKey: activeConversationId ?? 'no-conversation',
                                        projectFiles: projectFiles,
                                        projectFileNames: projectFileNames,
                                        onRequestOpenFile: onRequestOpenFile,
                                        onRequestPluginDetails: onRequestPluginDetails,
                                        onRequestDesignSystemDetails: onRequestDesignSystemDetails,
                                        onRequestPluginFolderAgentAction: onRequestPluginFolderAgentAction,
                                        activePluginActionPaths: activePluginActionPaths,
                                        hiddenPluginActionPaths: hiddenPluginActionPaths,
                                        onShareToOpenDesign: onShareToOpenDesign,
                                        shareToOpenDesignBusyMessageId: shareToOpenDesignBusyMessageId,
                                        forceStreamingMessageIds: forceStreamingMessageIds,
                                        lastAssistantId: lastAssistantId,
                                        firstUserMessageId: firstUserMessageId,
                                        activePluginSnapshot: activePluginSnapshot,
                                        activeDesignSystem: activeDesignSystem,
                                        hasActiveDesignSystem: hasActiveDesignSystem,
                                        errorCardOwnerId: errorCardOwnerId,
                                        nextUserContentByAssistantId: nextUserContentByAssistantId,
                                        assistantCallbacksRef: assistantCallbacksRef,
                                        onContinueRemainingTasks: onContinueRemainingTasks,
                                        onArtifactShare: onArtifactShare,
                                        onToolboxAction: handleToolboxAction,
                                        onPickSkill: handlePickSkill,
                                        onArtifactDownload: onArtifactDownload,
                                        nextStepSkills: skills,
                                        toolboxSkillNames: featuredToolboxSkillNames,
                                        onForkFromMessage: onForkFromMessage,
                                        onAssistantFeedback: onAssistantFeedback,
                                        forkingMessageId: forkingMessageId,
                                        t: t,
                                        onOpenQuestions: onOpenQuestions,
                                        scrollContainerRef: logRef
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 2029,
                                        columnNumber: 15
                                    }, this),
                                    displayError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "run-error",
                                        "data-tone": runErrorTone,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "run-error__main",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "run-error__icon",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 16 16",
                                                            fill: "none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "8",
                                                                    cy: "8",
                                                                    r: "6.4",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 2076,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M8 4.5v4M8 11h.01",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.6",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 2077,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 2074,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "run-error__copy",
                                                        children: [
                                                            runFailureUi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "run-error__title",
                                                                children: t(runFailureUi.titleKey)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2082,
                                                                columnNumber: 25
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "run-error__desc",
                                                                children: displayError
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2084,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 2080,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 2073,
                                                columnNumber: 19
                                            }, this),
                                            errorDiagnosticText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `run-error__source${errorSourceOpen ? ' is-open' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "run-error__source-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "run-error__source-bar",
                                                                "aria-expanded": errorSourceOpen,
                                                                "aria-label": errorSourceOpen ? t('chat.runError.sourceCollapseAria') : t('chat.runError.sourceExpandAria'),
                                                                onClick: ()=>setErrorSourceOpen((open)=>!open),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "run-error__source-chevron",
                                                                        viewBox: "0 0 12 12",
                                                                        fill: "none",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M4.5 2.5 8 6l-3.5 3.5",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "1.4",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                            lineNumber: 2103,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                        lineNumber: 2102,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "run-error__source-label",
                                                                        children: t('chat.runError.sourceLabel')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                        lineNumber: 2105,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    errorSourcePeek ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "run-error__source-peek",
                                                                        children: errorSourcePeek
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                        lineNumber: 2107,
                                                                        columnNumber: 29
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2091,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "run-error__source-copy",
                                                                onClick: ()=>void copyErrorDiagnostic(),
                                                                "aria-label": copiedErrorDiagnostic ? t('chat.copyDone') : t('chat.copyErrorDiagnostic'),
                                                                title: copiedErrorDiagnostic ? t('chat.copyDone') : t('chat.copyErrorDiagnostic'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                    name: copiedErrorDiagnostic ? 'check' : 'copy',
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                    lineNumber: 2117,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2110,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 2090,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "run-error__source-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                            children: errorDiagnosticText
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                            lineNumber: 2121,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 2120,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 2089,
                                                columnNumber: 21
                                            }, this) : null,
                                            showErrorActions || retryAssistant && onRetry && runFailureUi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "run-error__actions",
                                                children: [
                                                    showByokRecoveryCta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "chat-error-action",
                                                        onClick: onSwitchToLocalCli,
                                                        children: t('avatar.useLocal')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                        lineNumber: 2129,
                                                        columnNumber: 25
                                                    }, this) : null,
                                                    retryAssistant && onRetry && runFailureUi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            runFailureUi.primaryAction === 'authorize' ? // Sign in to AMR inline — the pill drives vela login,
                                                            // surfaces the activation URL/code when the browser
                                                            // doesn't auto-open, and on success we retry the run
                                                            // without bouncing the user out to Settings.
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrLoginPill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmrLoginPill"], {
                                                                className: "chat-error-amr-login",
                                                                signInLabel: t('chat.amrError.authorizeCta'),
                                                                amrEntrySourceDetail: "chat_error_authorize_retry",
                                                                initialStatus: inlineAmrLoginStatus,
                                                                metricsConsent: config?.telemetry?.metrics === true,
                                                                installationId: config?.installationId,
                                                                showActivationDetails: true,
                                                                hideSignedOutStatus: true,
                                                                revealPendingCancelAction: true,
                                                                onStatusChange: (loginStatus)=>{
                                                                    // Retry only on a real signed-out -> signed-in
                                                                    // transition (see amrAuthPrevLoggedInRef).
                                                                    if (loginStatus?.loggedIn === true) {
                                                                        const wasSignedOut = amrAuthPrevLoggedInRef.current === false;
                                                                        amrAuthPrevLoggedInRef.current = true;
                                                                        if (wasSignedOut && amrAuthRetriedRef.current !== retryAssistant.id) {
                                                                            amrAuthRetriedRef.current = retryAssistant.id;
                                                                            onRetry(retryAssistant);
                                                                        }
                                                                    } else if (loginStatus && loginStatus.loggedIn === false) {
                                                                        amrAuthPrevLoggedInRef.current = false;
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2144,
                                                                columnNumber: 29
                                                            }, this) : runFailureUi.primaryAction === 'launch-terminal-auth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "chat-error-action",
                                                                onClick: ()=>{
                                                                    onLaunchAntigravityOauth?.();
                                                                },
                                                                children: t('chat.antigravityError.launchTerminalCta')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2177,
                                                                columnNumber: 29
                                                            }, this) : runFailureUi.primaryAction === 'launch-terminal-switch-model' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "chat-error-action",
                                                                onClick: ()=>{
                                                                    onLaunchAntigravityOauth?.();
                                                                },
                                                                children: t('chat.antigravityError.launchSwitchModelCta')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2187,
                                                                columnNumber: 29
                                                            }, this) : runFailureUi.primaryAction === 'recharge' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "chat-error-action",
                                                                onClick: ()=>{
                                                                    const attribution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordAmrEntry"])(analytics.track, 'chat_error_recharge', new Date(), {
                                                                        metricsConsent: config?.telemetry?.metrics === true
                                                                    });
                                                                    // Forward the canonical telemetry device id to
                                                                    // AMR only on metrics opt-in (see
                                                                    // amrHandoffDeviceId). Sourced from the current
                                                                    // config.installationId / resolved device id,
                                                                    // not the mount-time bootstrap UUID, so the join
                                                                    // key matches the telemetry identity even across
                                                                    // a Delete-my-data rotation.
                                                                    const deviceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrHandoffDeviceId"])({
                                                                        metricsConsent: config?.telemetry?.metrics === true,
                                                                        resolvedDeviceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedDeviceId"])(),
                                                                        installationId: config?.installationId
                                                                    });
                                                                    window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$amr$2d$attribution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributedAmrUrl"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$amr$2d$guidance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amrRechargeUrlForProfile"])(amrProfile), attribution, deviceId), '_blank', 'noopener,noreferrer');
                                                                },
                                                                children: t('chat.amrError.rechargeCta')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2197,
                                                                columnNumber: 29
                                                            }, this) : null,
                                                            canResumeFailedRun ? // Resumable failure: continue the agent's existing
                                                            // CLI session instead of restarting from scratch, so
                                                            // partial work is kept. Replaces the from-scratch
                                                            // Retry as the single primary recovery action. Use
                                                            // the wired resume handler when present, otherwise a
                                                            // plain send of the continue prompt — never the
                                                            // re-sending Retry path, which would resume + repeat.
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "ghost chat-error-retry",
                                                                onClick: ()=>onResumeRun ? onResumeRun(retryAssistant) : onSend(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESUME_CONTINUE_PROMPT"], [], []),
                                                                children: t('chat.resumeRunCta')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2245,
                                                                columnNumber: 29
                                                            }, this) : runFailureUi.primaryAction === 'retry' || runFailureUi.secondaryRetry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "ghost chat-error-retry",
                                                                onClick: ()=>onRetry(retryAssistant),
                                                                children: t('promptTemplates.retry')
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                                lineNumber: 2257,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                                lineNumber: 2127,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 2071,
                                        columnNumber: 17
                                    }, this) : null,
                                    amrSwitchPayload ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AmrGuidance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmrGuidance"], {
                                        ...amrSwitchPayload,
                                        sourceDetail: "chat_error_switch_retry_card",
                                        metricsConsent: config?.telemetry?.metrics === true,
                                        onActivate: ()=>{
                                            if (retryAssistant && onSwitchToAmrAndRetry) {
                                                onSwitchToAmrAndRetry(retryAssistant);
                                            } else {
                                                onOpenAmrSettings?.();
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 2272,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-log-tail-spacer",
                                        ref: tailSpacerRef,
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 2288,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 1924,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `chat-jump-btn${scrolledFromBottom && !showConvList ? ' chat-jump-btn-active' : ''}`,
                                onClick: jumpToBottom,
                                title: t('chat.scrollToLatest'),
                                "aria-hidden": !scrolledFromBottom || showConvList,
                                tabIndex: scrolledFromBottom && !showConvList ? 0 : -1,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "arrow-up",
                                        size: 12,
                                        style: {
                                            transform: 'rotate(180deg)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 2305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('chat.jumpToLatest')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 2306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 2297,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 1923,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QueuedSendStrip, {
                        containerRef: queuedSendStripRef,
                        items: queuedItems,
                        editingId: editingQueuedSendId,
                        onEdit: (item)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackMessageQueueClick"])(analytics.track, {
                                page_name: 'chat_panel',
                                area: 'message_queue',
                                element: 'edit',
                                project_id: projectId ?? '',
                                queue_length: queuedItems.length
                            });
                            restoreQueuedSendToComposer(item);
                        },
                        onRemove: onRemoveQueuedSend ? (id)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackMessageQueueClick"])(analytics.track, {
                                page_name: 'chat_panel',
                                area: 'message_queue',
                                element: 'delete',
                                project_id: projectId ?? '',
                                queue_length: queuedItems.length
                            });
                            onRemoveQueuedSend(id);
                        } : undefined,
                        onReorder: onReorderQueuedSends,
                        onSendNow: onSendQueuedNow ? (id)=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackMessageQueueClick"])(analytics.track, {
                                page_name: 'chat_panel',
                                area: 'message_queue',
                                element: 'send_now',
                                project_id: projectId ?? '',
                                queue_length: queuedItems.length
                            });
                            onSendQueuedNow(id);
                        } : undefined
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2309,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-composer-slot",
                        ref: composerSlotRef,
                        style: composerSlotStyle,
                        "aria-hidden": shouldPortalComposer ? true : undefined,
                        children: shouldPortalComposer ? null : composerNode
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2349,
                        columnNumber: 11
                    }, this),
                    shouldPortalComposer && composerPortalTarget && composerPortalRect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-composer-fixed-layer",
                        ref: composerLayerRef,
                        style: {
                            left: composerPortalRect.left,
                            bottom: composerPortalRect.bottom,
                            width: composerPortalRect.width
                        },
                        children: composerNode
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2359,
                        columnNumber: 17
                    }, this), composerPortalTarget) : null
                ]
            }, void 0, true) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 1788,
        columnNumber: 5
    }, this);
}
_s1(ChatPane, "dgn94Tu7g7qbcyuqf2XpWEd7G2s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"]
    ];
});
_c3 = ChatPane;
function ChatConversationLoading({ t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-loading-state",
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chat-loading-mark",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chat-loading-copy",
                children: t('common.loading')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chat-loading-lines",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 2399,
        columnNumber: 5
    }, this);
}
_c4 = ChatConversationLoading;
function ChatRows({ messages, streaming, liveToolInput, projectId, projectKindForTracking, activeConversationId, activeConversationKey, projectFiles, projectFileNames, onRequestOpenFile, onRequestPluginDetails, onRequestDesignSystemDetails, onRequestPluginFolderAgentAction, activePluginActionPaths, hiddenPluginActionPaths, onShareToOpenDesign, shareToOpenDesignBusyMessageId, forceStreamingMessageIds, lastAssistantId, firstUserMessageId, activePluginSnapshot, activeDesignSystem, hasActiveDesignSystem, errorCardOwnerId, nextUserContentByAssistantId, assistantCallbacksRef, onContinueRemainingTasks, onArtifactShare, onToolboxAction, onPickSkill, onArtifactDownload, nextStepSkills, toolboxSkillNames, onForkFromMessage, onAssistantFeedback, forkingMessageId, t, onOpenQuestions, scrollContainerRef }) {
    _s2();
    const conversationTodoInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatRows.useMemo[conversationTodoInput]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latestTodoWriteInputForPinnedCard"])(messages)
    }["ChatRows.useMemo[conversationTodoInput]"], [
        messages
    ]);
    const conversationTodoAnchorMessageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatRows.useMemo[conversationTodoAnchorMessageId]": ()=>firstTodoWriteAssistantMessageId(messages)
    }["ChatRows.useMemo[conversationTodoAnchorMessageId]"], [
        messages
    ]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatRows.useMemo[items]": ()=>buildChatRenderItems(messages)
    }["ChatRows.useMemo[items]"], [
        messages
    ]);
    const virtualized = items.length > CHAT_MESSAGE_VIRTUALIZE_THRESHOLD;
    const virtualWindow = useMeasuredVirtualWindow(items, {
        enabled: virtualized,
        containerRef: scrollContainerRef,
        estimateSize: estimateChatRenderItemHeight,
        overscanPx: CHAT_MESSAGE_OVERSCAN_PX,
        resetKey: activeConversationKey,
        initialTailRows: CHAT_VIRTUAL_INITIAL_TAIL_ROWS,
        alwaysIncludeKey: conversationTodoInput != null && conversationTodoAnchorMessageId ? `message:${conversationTodoAnchorMessageId}` : undefined
    });
    const renderItem = (item)=>{
        const m = item.message;
        const messageStreaming = isAssistantMessageStreaming(m, streaming, lastAssistantId, forceStreamingMessageIds);
        if (m.role === 'user') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserMessage, {
                message: m,
                projectId: projectId,
                projectFileNames: projectFileNames,
                onRequestOpenFile: onRequestOpenFile,
                onRequestPluginDetails: onRequestPluginDetails,
                onRequestDesignSystemDetails: onRequestDesignSystemDetails,
                t: t,
                activePluginSnapshot: m.id === firstUserMessageId ? activePluginSnapshot ?? null : null,
                activeDesignSystem: m.id === firstUserMessageId ? activeDesignSystem ?? null : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2532,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$AssistantMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantMessage"], {
            message: m,
            streaming: messageStreaming,
            // Only the streaming row consumes live tool input. Non-streaming rows
            // get a stable `undefined`, so adding `liveToolInput` to the memo
            // comparator re-renders just this row per `tool_input_delta`, not all N.
            liveToolInput: messageStreaming ? liveToolInput : undefined,
            showConversationTodoCard: m.id === conversationTodoAnchorMessageId,
            conversationTodoInput: conversationTodoInput,
            projectId: projectId,
            projectKind: projectKindForTracking,
            conversationId: activeConversationId,
            projectFiles: projectFiles,
            projectFileNames: projectFileNames,
            onRequestOpenFile: onRequestOpenFile,
            onRequestPluginFolderAgentAction: onRequestPluginFolderAgentAction,
            activePluginActionPaths: activePluginActionPaths,
            hiddenPluginActionPaths: hiddenPluginActionPaths,
            onShareToOpenDesign: onShareToOpenDesign ? ()=>assistantCallbacksRef.current.onShareToOpenDesign?.(m.id) : undefined,
            shareToOpenDesignBusy: shareToOpenDesignBusyMessageId === m.id,
            isLast: m.id === lastAssistantId,
            errorCardOwnerId: errorCardOwnerId,
            nextUserContent: nextUserContentByAssistantId.get(m.id),
            suppressDirectionForms: hasActiveDesignSystem,
            hasDesignSystemContext: hasActiveDesignSystem || !!activeDesignSystem,
            onOpenQuestions: onOpenQuestions,
            onContinueRemainingTasks: m.id === lastAssistantId && onContinueRemainingTasks ? (todos)=>assistantCallbacksRef.current.onContinueRemainingTasks?.(m, todos) : undefined,
            onForkFromMessage: onForkFromMessage ? ()=>assistantCallbacksRef.current.onForkFromMessage?.(m) : undefined,
            forking: forkingMessageId === m.id,
            onFeedback: onAssistantFeedback ? (rating)=>assistantCallbacksRef.current.onAssistantFeedback?.(m, rating) : undefined,
            onArtifactShare: onArtifactShare ? (fileName)=>assistantCallbacksRef.current.onArtifactShare?.(fileName) : undefined,
            onToolboxAction: onToolboxAction,
            onPickSkill: onPickSkill,
            onArtifactDownload: onArtifactDownload,
            nextStepSkills: nextStepSkills,
            toolboxSkillNames: toolboxSkillNames
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 2554,
            columnNumber: 7
        }, this);
    };
    if (items.length === 0) return null;
    if (!virtualized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: renderItem(item)
                }, item.key, false, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 2620,
                    columnNumber: 11
                }, this))
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-virtual-spacer",
        "data-testid": "chat-virtual-spacer",
        style: {
            height: virtualWindow.totalHeight
        },
        children: virtualWindow.rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VirtualChatRow, {
                itemKey: row.item.key,
                top: row.top,
                onMeasure: virtualWindow.onMeasure,
                children: renderItem(row.item)
            }, row.item.key, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2633,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 2627,
        columnNumber: 5
    }, this);
}
_s2(ChatRows, "8PDHQ/ZwkfAB/iLewhPZCuyPiHI=", false, function() {
    return [
        useMeasuredVirtualWindow
    ];
});
_c5 = ChatRows;
function VirtualChatRow({ itemKey, top, onMeasure, children }) {
    _s3();
    const rowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VirtualChatRow.useEffect": ()=>{
            const node = rowRef.current;
            if (!node) return;
            const measure = {
                "VirtualChatRow.useEffect.measure": ()=>{
                    const height = node.getBoundingClientRect().height;
                    onMeasure(itemKey, height);
                }
            }["VirtualChatRow.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return undefined;
            const observer = new ResizeObserver(measure);
            observer.observe(node);
            return ({
                "VirtualChatRow.useEffect": ()=>observer.disconnect()
            })["VirtualChatRow.useEffect"];
        }
    }["VirtualChatRow.useEffect"], [
        itemKey,
        onMeasure
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rowRef,
        className: "chat-virtual-row",
        style: {
            transform: `translateY(${top}px)`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 2674,
        columnNumber: 5
    }, this);
}
_s3(VirtualChatRow, "5SsjulHLOtcQW+VVI1nkaEhY8Hw=");
_c6 = VirtualChatRow;
function buildChatRenderItems(messages) {
    const items = [];
    for(let i = 0; i < messages.length; i += 1){
        const message = messages[i];
        items.push({
            kind: 'message',
            key: `message:${message.id}`,
            message
        });
    }
    return items;
}
function firstTodoWriteAssistantMessageId(messages) {
    const message = messages.find((candidate)=>candidate.role === 'assistant' && candidate.events?.some((event)=>event.kind === 'tool_use' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$todos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTodoWriteToolName"])(event.name)));
    return message?.id ?? null;
}
function estimateChatRenderItemHeight(item) {
    const message = item.message;
    const contentLength = message.content?.length ?? 0;
    const attachmentCount = (message.attachments?.length ?? 0) + (message.commentAttachments?.length ?? 0);
    const eventCount = message.events?.length ?? 0;
    const fileCount = message.producedFiles?.length ?? 0;
    const base = message.role === 'user' ? 82 : 118;
    const contentRows = Math.min(18, Math.ceil(contentLength / 120));
    return base + contentRows * 18 + attachmentCount * 34 + eventCount * 28 + fileCount * 32 + CHAT_VIRTUAL_ROW_GAP_PX;
}
function useMeasuredVirtualWindow(items, { enabled, containerRef, estimateSize, overscanPx, resetKey, initialTailRows, alwaysIncludeKey }) {
    _s4();
    const measuredHeightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [measureVersion, setMeasureVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scrollTop: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMeasuredVirtualWindow.useEffect": ()=>{
            measuredHeightsRef.current.clear();
            setMeasureVersion({
                "useMeasuredVirtualWindow.useEffect": (version)=>version + 1
            }["useMeasuredVirtualWindow.useEffect"]);
            setViewport({
                scrollTop: 0,
                height: 0
            });
        }
    }["useMeasuredVirtualWindow.useEffect"], [
        resetKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMeasuredVirtualWindow.useEffect": ()=>{
            if (!enabled) return undefined;
            const el = containerRef.current;
            if (!el) return undefined;
            let frame = null;
            const readViewport = {
                "useMeasuredVirtualWindow.useEffect.readViewport": ()=>{
                    frame = null;
                    setViewport({
                        "useMeasuredVirtualWindow.useEffect.readViewport": (current)=>{
                            const next = {
                                scrollTop: el.scrollTop,
                                height: el.clientHeight || CHAT_VIRTUAL_DEFAULT_VIEWPORT_PX
                            };
                            return current.scrollTop === next.scrollTop && current.height === next.height ? current : next;
                        }
                    }["useMeasuredVirtualWindow.useEffect.readViewport"]);
                }
            }["useMeasuredVirtualWindow.useEffect.readViewport"];
            const scheduleRead = {
                "useMeasuredVirtualWindow.useEffect.scheduleRead": ()=>{
                    if (frame !== null) return;
                    frame = requestAnimationFrame(readViewport);
                }
            }["useMeasuredVirtualWindow.useEffect.scheduleRead"];
            scheduleRead();
            el.addEventListener('scroll', scheduleRead, {
                passive: true
            });
            const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(scheduleRead) : null;
            observer?.observe(el);
            return ({
                "useMeasuredVirtualWindow.useEffect": ()=>{
                    if (frame !== null) cancelAnimationFrame(frame);
                    el.removeEventListener('scroll', scheduleRead);
                    observer?.disconnect();
                }
            })["useMeasuredVirtualWindow.useEffect"];
        }
    }["useMeasuredVirtualWindow.useEffect"], [
        containerRef,
        enabled
    ]);
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMeasuredVirtualWindow.useMemo[layout]": ()=>{
            const offsets = [];
            const sizes = [];
            let cursor = 0;
            for (const item of items){
                offsets.push(cursor);
                const measured = measuredHeightsRef.current.get(item.key);
                const size = Math.max(CHAT_VIRTUAL_MIN_ROW_HEIGHT, measured ?? estimateSize(item));
                sizes.push(size);
                cursor += size;
            }
            return {
                offsets,
                sizes,
                totalHeight: cursor
            };
        }
    }["useMeasuredVirtualWindow.useMemo[layout]"], [
        estimateSize,
        items,
        measureVersion
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMeasuredVirtualWindow.useMemo[rows]": ()=>{
            if (!enabled || items.length === 0) return [];
            const height = viewport.height || CHAT_VIRTUAL_DEFAULT_VIEWPORT_PX;
            if (viewport.scrollTop === 0 && viewport.height === 0) {
                const start = Math.max(0, items.length - initialTailRows);
                const rows = items.slice(start).map({
                    "useMeasuredVirtualWindow.useMemo[rows].rows": (item, offset)=>{
                        const index = start + offset;
                        return {
                            item,
                            index,
                            top: layout.offsets[index] ?? 0
                        };
                    }
                }["useMeasuredVirtualWindow.useMemo[rows].rows"]);
                return includeVirtualRowByKey(rows, items, layout.offsets, alwaysIncludeKey);
            }
            const startTarget = Math.max(0, viewport.scrollTop - overscanPx);
            const endTarget = viewport.scrollTop + height + overscanPx;
            let start = 0;
            while(start < items.length - 1 && (layout.offsets[start] ?? 0) + (layout.sizes[start] ?? 0) < startTarget){
                start += 1;
            }
            let end = start;
            while(end < items.length && (layout.offsets[end] ?? 0) <= endTarget){
                end += 1;
            }
            const rows = items.slice(start, end).map({
                "useMeasuredVirtualWindow.useMemo[rows].rows": (item, offset)=>{
                    const index = start + offset;
                    return {
                        item,
                        index,
                        top: layout.offsets[index] ?? 0
                    };
                }
            }["useMeasuredVirtualWindow.useMemo[rows].rows"]);
            return includeVirtualRowByKey(rows, items, layout.offsets, alwaysIncludeKey);
        }
    }["useMeasuredVirtualWindow.useMemo[rows]"], [
        alwaysIncludeKey,
        enabled,
        initialTailRows,
        items,
        layout.offsets,
        layout.sizes,
        overscanPx,
        viewport.height,
        viewport.scrollTop
    ]);
    const onMeasure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMeasuredVirtualWindow.useCallback[onMeasure]": (key, height)=>{
            if (!Number.isFinite(height) || height <= 0) return;
            const next = Math.max(CHAT_VIRTUAL_MIN_ROW_HEIGHT, Math.ceil(height));
            const previous = measuredHeightsRef.current.get(key);
            if (previous !== undefined && Math.abs(previous - next) < 2) return;
            measuredHeightsRef.current.set(key, next);
            setMeasureVersion({
                "useMeasuredVirtualWindow.useCallback[onMeasure]": (version)=>version + 1
            }["useMeasuredVirtualWindow.useCallback[onMeasure]"]);
        }
    }["useMeasuredVirtualWindow.useCallback[onMeasure]"], []);
    return {
        rows,
        totalHeight: layout.totalHeight,
        onMeasure
    };
}
_s4(useMeasuredVirtualWindow, "bEa3fwJgDBML0IfoaAdsS9b7bkg=");
function includeVirtualRowByKey(rows, items, offsets, key) {
    if (!key || rows.some((row)=>row.item.key === key)) return rows;
    const index = items.findIndex((item)=>item.key === key);
    if (index === -1) return rows;
    return [
        ...rows,
        {
            item: items[index],
            index,
            top: offsets[index] ?? 0
        }
    ].sort((a, b)=>a.index - b.index);
}
function QueuedSendStrip({ containerRef, editingId, items, onEdit, onRemove, onReorder, onSendNow }) {
    _s5();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [dragState, setDragState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (items.length === 0) return null;
    const canReorder = Boolean(onReorder && items.length > 1);
    const overflowCount = Math.max(0, items.length - QUEUED_SEND_VISIBLE_ROW_COUNT);
    const handleDragStart = (event, item)=>{
        if (!canReorder) return;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData(QUEUED_SEND_DRAG_MIME, item.id);
        event.dataTransfer.setData('text/plain', item.id);
        setDragState({
            draggingId: item.id,
            overId: item.id,
            edge: null
        });
    };
    const handleDragOver = (event, targetId)=>{
        if (!canReorder) return;
        const draggingId = dragState?.draggingId || event.dataTransfer.getData(QUEUED_SEND_DRAG_MIME);
        if (!draggingId) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        if (draggingId === targetId) {
            if (dragState?.overId !== targetId || dragState.edge !== null) {
                setDragState({
                    draggingId,
                    overId: targetId,
                    edge: null
                });
            }
            return;
        }
        const edge = queuedDropEdgeForEvent(event);
        if (dragState?.draggingId !== draggingId || dragState.overId !== targetId || dragState.edge !== edge) {
            setDragState({
                draggingId,
                overId: targetId,
                edge
            });
        }
    };
    const handleDrop = (event, targetId)=>{
        if (!canReorder) return;
        event.preventDefault();
        const draggingId = dragState?.draggingId || event.dataTransfer.getData(QUEUED_SEND_DRAG_MIME) || event.dataTransfer.getData('text/plain');
        if (!draggingId || draggingId === targetId) {
            setDragState(null);
            return;
        }
        const edge = dragState?.overId === targetId && dragState.edge ? dragState.edge : queuedDropEdgeForEvent(event);
        const nextIds = reorderQueuedSendIds(items, draggingId, targetId, edge);
        if (nextIds.join('\0') !== items.map((item)=>item.id).join('\0')) {
            onReorder?.(nextIds);
        }
        setDragState(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "chat-queued-send-strip",
        "data-testid": "chat-queued-send-strip",
        onDragLeave: (event)=>{
            const related = event.relatedTarget;
            if (related instanceof Node && event.currentTarget.contains(related)) return;
            setDragState(null);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-queued-send-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chat-queued-send-heading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                items.length,
                                " ",
                                t('chat.queuedHeader')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 2980,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            children: "↩"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 2983,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t('chat.queuedToSend')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 2984,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 2979,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2978,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `chat-queued-send-list${overflowCount > 0 ? ' is-scrollable' : ''}`,
                children: items.map((item, index)=>{
                    const isDragging = dragState?.draggingId === item.id;
                    const dropClass = dragState?.overId === item.id && dragState.draggingId !== item.id && dragState.edge ? ` chat-queued-send-row-drop-${dragState.edge}` : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `chat-queued-send-row${index === 0 ? ' chat-queued-send-row-active' : ''}${editingId === item.id ? ' chat-queued-send-row-editing' : ''}${isDragging ? ' chat-queued-send-row-dragging' : ''}${dropClass}`,
                        onDragOver: (event)=>handleDragOver(event, item.id),
                        onDrop: (event)=>handleDrop(event, item.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "chat-queued-send-drag-handle chat-queued-send-tooltip od-tooltip",
                                title: t('chat.queuedReorder'),
                                "data-tooltip": t('chat.queuedReorder'),
                                "data-tooltip-placement": "right",
                                "aria-label": t('chat.queuedReorder'),
                                draggable: canReorder,
                                disabled: !canReorder,
                                onDragStart: (event)=>handleDragStart(event, item),
                                onDragEnd: ()=>setDragState(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "grip-vertical",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3016,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3004,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-queued-send-main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-queued-send-title",
                                        children: summarizeQueuedPrompt(item, t)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 3019,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QueuedSendMetaChips, {
                                        item: item
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 3020,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3018,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-queued-send-actions",
                                children: [
                                    onEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "chat-queued-send-action chat-queued-send-tooltip od-tooltip",
                                        title: t('chat.queuedEdit'),
                                        "data-tooltip": t('chat.queuedEdit'),
                                        "data-tooltip-placement": "top",
                                        "aria-label": t('chat.queuedEdit'),
                                        onClick: ()=>onEdit(item),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "pencil",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 3033,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 3024,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "chat-queued-send-action chat-queued-send-tooltip od-tooltip",
                                        title: t('chat.send'),
                                        "data-tooltip": t('chat.send'),
                                        "data-tooltip-placement": "top",
                                        "aria-label": t('chat.send'),
                                        "data-testid": "chat-queued-send-now",
                                        onClick: ()=>onSendNow?.(item.id),
                                        disabled: !onSendNow,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "arrow-up",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 3047,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 3036,
                                        columnNumber: 17
                                    }, this),
                                    onRemove ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "chat-queued-send-action chat-queued-send-tooltip od-tooltip",
                                        onClick: ()=>onRemove(item.id),
                                        title: t('chat.comments.remove'),
                                        "data-tooltip": t('chat.comments.remove'),
                                        "data-tooltip-placement": "top",
                                        "aria-label": t('chat.comments.remove'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "trash",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 3059,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                        lineNumber: 3050,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3022,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 2996,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 2987,
                columnNumber: 7
            }, this),
            overflowCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-queued-send-overflow",
                children: [
                    "+",
                    overflowCount,
                    " ",
                    t('chat.queuedMore')
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3068,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 2968,
        columnNumber: 5
    }, this);
}
_s5(QueuedSendStrip, "C8ZsG3Q600S1fv9FFlmSyEU7aw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c7 = QueuedSendStrip;
const QUEUED_SEND_DRAG_MIME = 'application/x-open-design-queued-send';
const QUEUED_SEND_VISIBLE_ROW_COUNT = 4;
function queuedDropEdgeForEvent(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientY < rect.top + rect.height / 2 ? 'before' : 'after';
}
function reorderQueuedSendIds(items, draggingId, targetId, edge) {
    const ids = items.map((item)=>item.id);
    const from = ids.indexOf(draggingId);
    if (from < 0) return ids;
    const [draggedId] = ids.splice(from, 1);
    const targetIndex = ids.indexOf(targetId);
    if (targetIndex < 0 || !draggedId) return items.map((item)=>item.id);
    ids.splice(edge === 'after' ? targetIndex + 1 : targetIndex, 0, draggedId);
    return ids;
}
function summarizeQueuedPrompt(item, t) {
    const normalized = item.prompt.replace(/\s+/g, ' ').trim();
    const text = normalized || t('chat.queuedFollowUpFallback');
    return text.length > 58 ? `${text.slice(0, 57)}...` : text;
}
// Surfaces what a queued turn carries — attachments, visual marks, and the
// staged plugin / skill / MCP / connector context from its meta — as compact
// chips so the user can see (and trust) what will be sent without expanding it.
// Counts use the same plain-English style as the rest of this strip.
function QueuedSendMetaChips({ item }) {
    const ctx = item.meta?.context;
    const files = item.attachments?.length ?? 0;
    const marks = item.commentAttachments?.length ?? 0;
    const plugins = item.meta?.appliedPluginSnapshot ? 1 : ctx?.pluginIds?.length ?? 0;
    const skills = ctx?.skillIds?.length ?? 0;
    const mcp = ctx?.mcpServerIds?.length ?? 0;
    const connectors = ctx?.connectorIds?.length ?? 0;
    const workspace = ctx?.workspaceItems?.length ?? 0;
    const plural = (n, word)=>`${n} ${word}${n === 1 ? '' : 's'}`;
    const chips = [];
    if (files > 0) chips.push({
        key: 'files',
        label: plural(files, 'file')
    });
    if (marks > 0) chips.push({
        key: 'marks',
        label: plural(marks, 'mark')
    });
    if (plugins > 0) chips.push({
        key: 'plugins',
        label: plural(plugins, 'plugin')
    });
    if (skills > 0) chips.push({
        key: 'skills',
        label: plural(skills, 'skill')
    });
    if (mcp > 0) chips.push({
        key: 'mcp',
        label: `${mcp} MCP`
    });
    if (connectors > 0) chips.push({
        key: 'connectors',
        label: plural(connectors, 'connector')
    });
    if (workspace > 0) chips.push({
        key: 'workspace',
        label: plural(workspace, 'workspace context')
    });
    if (chips.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-queued-send-chips",
        children: chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chat-queued-send-chip",
                children: chip.label
            }, chip.key, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3140,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3138,
        columnNumber: 5
    }, this);
}
_c8 = QueuedSendMetaChips;
function CommentsPanel({ comments, attachedComments, onAttach, onDetach, onDelete, t }) {
    const attachedIds = new Set(attachedComments.map((comment)=>comment.id));
    const saved = comments.filter((comment)=>!attachedIds.has(comment.id));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "comments-panel",
        "data-testid": "comments-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentSection, {
                title: t('chat.comments.attached'),
                empty: t('chat.comments.emptyAttached'),
                comments: attachedComments,
                actionLabel: t('chat.comments.remove'),
                onAction: (comment)=>onDetach?.(comment.id),
                attached: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentSection, {
                title: t('chat.comments.saved'),
                empty: t('chat.comments.emptySaved'),
                comments: saved,
                actionLabel: t('chat.comments.add'),
                onAction: (comment)=>onAttach?.(comment),
                secondaryActionLabel: t('chat.comments.remove'),
                onSecondaryAction: (comment)=>onDelete?.(comment.id)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3175,
                columnNumber: 7
            }, this),
            saved.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comments-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "primary",
                    onClick: ()=>saved.forEach((comment)=>onAttach?.(comment)),
                    children: t('chat.comments.addAll')
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 3186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3185,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3166,
        columnNumber: 5
    }, this);
}
_c9 = CommentsPanel;
function CommentSection({ title, empty, comments, actionLabel, onAction, secondaryActionLabel, onSecondaryAction, attached }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "comments-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3220,
                columnNumber: 7
            }, this),
            comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "comments-empty",
                children: empty
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3222,
                columnNumber: 9
            }, this) : comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: `comment-card${attached ? ' attached' : ''}`,
                    "data-testid": `comment-card-${comment.elementId}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "comment-card-top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(comment)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "comment-card-actions",
                                    children: [
                                        secondaryActionLabel && onSecondaryAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "comment-card-action danger",
                                            onClick: ()=>onSecondaryAction(comment),
                                            children: secondaryActionLabel
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 3234,
                                            columnNumber: 19
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "comment-card-action",
                                            onClick: ()=>onAction(comment),
                                            children: actionLabel
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                            lineNumber: 3242,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: comment.note
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "comment-card-meta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: comment.id
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: comment.filePath
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(comment)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simplePositionLabel"])(comment.position)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3248,
                            columnNumber: 13
                        }, this)
                    ]
                }, comment.id, true, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 3225,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3219,
        columnNumber: 5
    }, this);
}
_c10 = CommentSection;
function isActiveRunStatus(status) {
    return status === 'queued' || status === 'running';
}
function isTerminalRunStatus(status) {
    return status === 'succeeded' || status === 'failed' || status === 'canceled';
}
function retryableAssistantMessage(messages, lastAssistantId, paneStreaming) {
    if (paneStreaming) return null;
    const last = messages[messages.length - 1];
    if (!last || last.role !== 'assistant') return null;
    if (last.id !== lastAssistantId) return null;
    return last.runStatus === 'failed' ? last : null;
}
function isAssistantMessageStreaming(message, paneStreaming, lastAssistantId, forceStreamingMessageIds) {
    if (message.role !== 'assistant') return false;
    if (forceStreamingMessageIds?.has(message.id)) return true;
    if (isActiveRunStatus(message.runStatus)) return true;
    if (message.id !== lastAssistantId) return false;
    if (!paneStreaming) return false;
    if (message.endedAt !== undefined) return false;
    if (isTerminalRunStatus(message.runStatus)) return false;
    return true;
}
function buildRunErrorDiagnosticText(input) {
    const lines = [
        'Open Design run error diagnostics',
        `trace_id: ${input.traceId ?? 'n/a'}`,
        `run_id: ${input.traceId ?? 'n/a'}`,
        `error_code: ${input.errorCode ?? 'n/a'}`,
        `project_id: ${input.projectId ?? 'n/a'}`,
        `conversation_id: ${input.conversationId ?? 'n/a'}`,
        `assistant_message_id: ${input.assistantMessageId ?? 'n/a'}`,
        `agent_id: ${input.agentId ?? 'n/a'}`,
        '',
        'error:',
        input.message.trim()
    ];
    const raw = input.rawMessage?.trim();
    if (raw && raw !== input.message.trim()) {
        lines.push('', 'raw_error:', raw);
    }
    return lines.join('\n');
}
function filterConversations(conversations, query, t) {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return conversations;
    return conversations.filter((conversation)=>{
        const title = conversation.title || t('chat.untitledConversation');
        const meta = conversationMetaLabel(conversation, t);
        return `${title} ${conversation.id} ${meta}`.toLocaleLowerCase().includes(normalized);
    });
}
function conversationMessageCount(conversation, activeConversationId, messagesConversationId, activeMessageCount) {
    // The live `messages` array is authoritative for the active conversation —
    // it stays fresh as a run streams new turns in — but ONLY once it has
    // actually loaded for that conversation. While a switch is mid-flight (or a
    // load failed) `messages` is reset to [] and `messagesConversationId` no
    // longer matches the active id; trusting `messages.length` there renders a
    // phantom "0 msg". Fall back to the persisted server count until the live
    // array catches up.
    if (conversation.id === activeConversationId && messagesConversationId === activeConversationId) {
        return activeMessageCount;
    }
    return typeof conversation.messageCount === 'number' ? conversation.messageCount : null;
}
function compactCount(value) {
    if (value < 1000) return String(value);
    const compact = Math.floor(value / 100) / 10;
    return `${compact}k`;
}
function ConversationRow({ conversation, active, messageCount, onSelect, onDelete, t }) {
    const displayTitle = conversation.title || t('chat.untitledConversation');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `chat-conv-item${active ? ' active' : ''}`,
        "data-testid": `conversation-item-${conversation.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "chat-conv-item-name",
                "data-testid": `conversation-select-${conversation.id}`,
                style: {
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left'
                },
                onClick: onSelect,
                children: displayTitle
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chat-conv-item-meta",
                "data-testid": `conversation-meta-${conversation.id}`,
                children: [
                    messageCount !== null ? `${compactCount(messageCount)} msg · ` : '',
                    conversationMetaLabel(conversation, t)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "chat-conv-item-del",
                "data-testid": `conversation-delete-${conversation.id}`,
                title: t('chat.deleteConversation'),
                onClick: (e)=>{
                    e.stopPropagation();
                    if (confirm(t('chat.deleteConversationConfirm', {
                        title: displayTitle
                    }))) {
                        onDelete();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "close",
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 3415,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3381,
        columnNumber: 5
    }, this);
}
_c11 = ConversationRow;
// Memoized (hoisted impl referenced below): a static user message has stable
// props, so it skips re-render while a later turn streams.
const UserMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(UserMessageImpl);
_c12 = UserMessage;
function UserMessageImpl({ message, projectId, projectFileNames, onRequestOpenFile, onRequestPluginDetails, onRequestDesignSystemDetails, t, activePluginSnapshot, activeDesignSystem }) {
    _s6();
    const attachments = sortChatAttachmentsForDisplay(message.attachments ?? []);
    const commentAttachments = message.commentAttachments ?? [];
    const workspaceItems = message.runContext?.workspaceItems ?? [];
    const messagePluginSnapshot = message.appliedPluginSnapshot ?? activePluginSnapshot ?? null;
    const hasRunContext = Boolean(message.sessionMode || workspaceItems.length > 0 || messagePluginSnapshot || activeDesignSystem);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserMessageImpl.useEffect": ()=>{
            return ({
                "UserMessageImpl.useEffect": ()=>{
                    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
                }
            })["UserMessageImpl.useEffect"];
        }
    }["UserMessageImpl.useEffect"], []);
    async function handleCopy() {
        if (!message.content) return;
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(message.content);
        if (!ok) return;
        setCopied(true);
        copyTimerRef.current = setTimeout(()=>{
            setCopied(false);
            copyTimerRef.current = undefined;
        }, 2000);
    }
    const isDesignSystemWorkspaceRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesignSystemWorkspacePrompt"])(message.content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "msg user",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: t('chat.you')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3481,
                columnNumber: 7
            }, this),
            hasRunContext ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "msg-run-context-row",
                "data-testid": "msg-run-context-row",
                children: [
                    message.sessionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageSessionModeChip, {
                        mode: message.sessionMode,
                        t: t
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3485,
                        columnNumber: 13
                    }, this) : null,
                    workspaceItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveWorkspaceContextChip, {
                            item: item,
                            onOpen: onRequestOpenFile
                        }, `${item.kind}:${item.id}`, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3488,
                            columnNumber: 13
                        }, this)),
                    messagePluginSnapshot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivePluginChip, {
                        snapshot: messagePluginSnapshot,
                        t: t,
                        onOpenDetails: onRequestPluginDetails
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3495,
                        columnNumber: 13
                    }, this) : null,
                    activeDesignSystem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveDesignSystemChip, {
                        system: activeDesignSystem,
                        onOpenDetails: onRequestDesignSystemDetails
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3502,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3483,
                columnNumber: 9
            }, this) : null,
            attachments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-attachments",
                children: attachments.map((a, index)=>{
                    const baseName = a.path.split('/').pop() || a.path;
                    const openable = !!onRequestOpenFile && (projectFileNames ? projectFileNames.has(baseName) : true);
                    const handleOpen = openable ? ()=>onRequestOpenFile?.(baseName) : undefined;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `user-attachment staged-${a.kind}${openable ? ' openable' : ''}`,
                        onClick: handleOpen,
                        disabled: !openable,
                        title: openable ? t('chat.openFile', {
                            name: baseName
                        }) : a.path,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "staged-order",
                                "aria-label": `Attachment ${index + 1}`,
                                children: index + 1
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3528,
                                columnNumber: 17
                            }, this),
                            a.kind === 'image' && projectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, a.path),
                                alt: a.name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3532,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "file",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3534,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "staged-name",
                                children: a.name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3536,
                                columnNumber: 17
                            }, this)
                        ]
                    }, a.path, true, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3520,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3510,
                columnNumber: 9
            }, this) : null,
            commentAttachments.some((attachment)=>attachment.selectionKind !== 'visual') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-attachments comment-history-attachments",
                children: commentAttachments.filter((attachment)=>attachment.selectionKind !== 'visual').map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "user-attachment staged-comment",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "staged-name",
                            title: a.comment ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(a)}: ${a.comment}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(a),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentTargetDisplayName"])(a)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3547,
                                    columnNumber: 17
                                }, this),
                                a.comment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: a.comment
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3548,
                                    columnNumber: 30
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3546,
                            columnNumber: 15
                        }, this)
                    }, a.id, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3545,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3543,
                columnNumber: 9
            }, this) : null,
            message.content && isDesignSystemWorkspaceRequest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-text-wrap user-status-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "user-status-card design-system-generation-status",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "user-status-card__icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "blocks",
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3558,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3557,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "user-status-card__copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_SYSTEM_WORKSPACE_DISPLAY_TITLE"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$design$2d$system$2d$auto$2d$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESIGN_SYSTEM_WORKSPACE_DISPLAY_DESCRIPTION"]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                    lineNumber: 3562,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3560,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 3556,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3555,
                columnNumber: 9
            }, this) : message.content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-text-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-text user-bubble",
                        children: message.content
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3568,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "ghost user-copy-btn",
                            onClick: handleCopy,
                            "aria-label": copied ? t('chat.copyDone') : t('chat.copyPrompt'),
                            title: copied ? t('chat.copyDone') : t('chat.copyPrompt'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: copied ? 'check' : 'copy',
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                                lineNumber: 3577,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                            lineNumber: 3570,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3569,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3567,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3480,
        columnNumber: 5
    }, this);
}
_s6(UserMessageImpl, "rYb/ANyP3Dg6b/liSouU5lA5Lc8=");
_c13 = UserMessageImpl;
// Context chip rendered above a user message when the project pinned a
// plugin at create time (PluginLoopHome on Home). Replaces the noisy
// in-composer plugin rail so the user is not re-prompted to pick
// something they already chose; instead the active plugin lives inside
// the run message it kicked off.
function ActivePluginChip({ snapshot, t: _t, onOpenDetails }) {
    const title = snapshot.pluginTitle ?? snapshot.pluginId;
    const version = snapshot.pluginVersion;
    const taskKind = snapshot.taskKind;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__dot",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__kind",
                        children: "Plugin"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3608,
                        columnNumber: 9
                    }, this),
                    version ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__version",
                        children: [
                            "@",
                            version
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3610,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3606,
                columnNumber: 7
            }, this),
            taskKind ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__task",
                children: taskKind
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3614,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
    // One clean chip per message — the plugin's full resolved context still
    // rides the run via the persisted snapshot; we no longer fan it out into
    // per-category (design-system / asset / skill) chips here.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "msg-plugin-context",
        "data-testid": "msg-plugin-context",
        children: onOpenDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "msg-plugin-chip msg-plugin-chip--action",
            "data-testid": "msg-plugin-chip",
            title: title,
            onClick: ()=>onOpenDetails(snapshot.pluginId),
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 3624,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "msg-plugin-chip",
            "data-testid": "msg-plugin-chip",
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 3634,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3622,
        columnNumber: 5
    }, this);
}
_c14 = ActivePluginChip;
function MessageSessionModeChip({ mode, t }) {
    const label = mode === 'chat' ? t('chat.mode.chat.label') : t('chat.mode.design.label');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `msg-mode-chip msg-mode-chip--${mode}`,
        "data-testid": "msg-session-mode-chip",
        title: label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: mode === 'chat' ? 'comment' : 'sparkles',
                size: 12
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3658,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3659,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3653,
        columnNumber: 5
    }, this);
}
_c15 = MessageSessionModeChip;
function ActiveDesignSystemChip({ system, onOpenDetails }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__dot",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3673,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__kind",
                        children: "Design System"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3675,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__title",
                        children: system.title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3676,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3674,
                columnNumber: 7
            }, this),
            system.category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__task",
                children: system.category
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3679,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
    if (!onOpenDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "msg-plugin-chip msg-plugin-chip--design-system",
            "data-testid": "msg-design-system-chip",
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 3685,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "msg-plugin-chip msg-plugin-chip--design-system msg-plugin-chip--action",
        "data-testid": "msg-design-system-chip",
        title: system.title,
        onClick: ()=>onOpenDetails(system),
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3691,
        columnNumber: 5
    }, this);
}
_c16 = ActiveDesignSystemChip;
const WORKSPACE_DESIGN_FILES_TAB = '__design_files__';
const WORKSPACE_DESIGN_SYSTEM_TAB = '__design_system__';
function ActiveWorkspaceContextChip({ item, onOpen }) {
    const target = workspaceContextOpenTarget(item);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__icon",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: workspaceContextIcon(item),
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                    lineNumber: 3717,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3716,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "msg-plugin-chip__label",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__kind",
                        children: "Current"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3720,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "msg-plugin-chip__title",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                        lineNumber: 3721,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ChatPane.tsx",
                lineNumber: 3719,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (!target || !onOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `msg-plugin-chip msg-plugin-chip--workspace msg-plugin-chip--workspace-${item.kind}`,
            "data-testid": "msg-workspace-context-chip",
            title: workspaceContextTitle(item),
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ChatPane.tsx",
            lineNumber: 3727,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `msg-plugin-chip msg-plugin-chip--workspace msg-plugin-chip--workspace-${item.kind} msg-plugin-chip--action`,
        "data-testid": "msg-workspace-context-chip",
        title: workspaceContextTitle(item),
        onClick: ()=>onOpen(target),
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ChatPane.tsx",
        lineNumber: 3737,
        columnNumber: 5
    }, this);
}
_c17 = ActiveWorkspaceContextChip;
function workspaceContextOpenTarget(item) {
    if (item.tabId) return item.tabId;
    if (item.kind === 'design-files') return WORKSPACE_DESIGN_FILES_TAB;
    if (item.kind === 'design-system') return WORKSPACE_DESIGN_SYSTEM_TAB;
    if (item.kind === 'file' || item.kind === 'live-artifact') {
        return item.path ?? item.label;
    }
    return null;
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
function sortChatAttachmentsForDisplay(attachments) {
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
function relTime(ts, t) {
    const diff = Date.now() - ts;
    const min = 60_000;
    const hr = 60 * min;
    const day = 24 * hr;
    if (diff < min) return t('common.now');
    if (diff < hr) return t('common.minutesShort', {
        n: Math.floor(diff / min)
    });
    if (diff < day) return t('common.hoursShort', {
        n: Math.floor(diff / hr)
    });
    if (diff < 7 * day) return t('common.daysShort', {
        n: Math.floor(diff / day)
    });
    return new Date(ts).toLocaleDateString();
}
function conversationMetaLabel(conversation, t) {
    const latestRun = conversation.latestRun;
    if (latestRun && (latestRun.status === 'succeeded' || latestRun.status === 'failed' || latestRun.status === 'canceled') && typeof conversation.totalDurationMs === 'number' && Number.isFinite(conversation.totalDurationMs)) {
        return formatDurationShort(conversation.totalDurationMs);
    }
    if (latestRun && (latestRun.status === 'succeeded' || latestRun.status === 'failed' || latestRun.status === 'canceled') && typeof latestRun.durationMs === 'number' && Number.isFinite(latestRun.durationMs)) {
        return formatDurationShort(latestRun.durationMs);
    }
    return relTime(conversation.updatedAt, t);
}
function formatDurationShort(ms) {
    const s = Math.max(0, ms) / 1000;
    if (s < 60) return `${s.toFixed(s < 10 ? 1 : 0)}s`;
    const m = Math.floor(s / 60);
    const rem = Math.floor(s - m * 60);
    return `${m}m ${rem.toString().padStart(2, '0')}s`;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "ImportedFolderArtifacts");
__turbopack_context__.k.register(_c1, "ChatArtifactPreview");
__turbopack_context__.k.register(_c2, "ChatArtifactFallback");
__turbopack_context__.k.register(_c3, "ChatPane");
__turbopack_context__.k.register(_c4, "ChatConversationLoading");
__turbopack_context__.k.register(_c5, "ChatRows");
__turbopack_context__.k.register(_c6, "VirtualChatRow");
__turbopack_context__.k.register(_c7, "QueuedSendStrip");
__turbopack_context__.k.register(_c8, "QueuedSendMetaChips");
__turbopack_context__.k.register(_c9, "CommentsPanel");
__turbopack_context__.k.register(_c10, "CommentSection");
__turbopack_context__.k.register(_c11, "ConversationRow");
__turbopack_context__.k.register(_c12, "UserMessage");
__turbopack_context__.k.register(_c13, "UserMessageImpl");
__turbopack_context__.k.register(_c14, "ActivePluginChip");
__turbopack_context__.k.register(_c15, "MessageSessionModeChip");
__turbopack_context__.k.register(_c16, "ActiveDesignSystemChip");
__turbopack_context__.k.register(_c17, "ActiveWorkspaceContextChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_ChatPane_tsx_0lsebjf._.js.map