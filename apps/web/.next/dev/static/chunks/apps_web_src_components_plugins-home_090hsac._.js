(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/plugins-home/curatedPriority.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared curator ordering for Home examples and the Community shelf.
//
// These are the template styles we deliberately want in the first
// viewport. The ids are daemon plugin ids, so the ordering remains
// stable across locales and title-copy tweaks.
__turbopack_context__.s([
    "CURATED_LIVE_ARTIFACT_PLUGIN_IDS",
    ()=>CURATED_LIVE_ARTIFACT_PLUGIN_IDS,
    "CURATED_PLUGIN_IDS_BY_CHIP",
    ()=>CURATED_PLUGIN_IDS_BY_CHIP,
    "curatedPluginPriority",
    ()=>curatedPluginPriority,
    "curatedPluginPriorityForChip",
    ()=>curatedPluginPriorityForChip
]);
// Pinned-to-front template set (curator request): these premium
// prototype templates lead both the Home hero prototype chip and the
// Home plugin grid, ahead of the standing curated picks below. Order
// here is the exact display order requested.
const PINNED_TEMPLATE_PLUGIN_IDS = [
    'example-mythic-naturecore',
    'example-dreamcore-landing',
    'example-skyelite-private-jets',
    'example-layered-depth',
    'example-luxury-botanical',
    'example-aerocore',
    'example-liquid-glass-agency',
    'example-portfolio-cosmic',
    'example-innovation',
    'example-orbis-nft',
    'example-mindloop-landing',
    'example-cinematic-landing-page',
    'example-ai-designer-portfolio',
    'example-codenest-coding-platform',
    'example-nimbus-grid',
    'example-acreage-farming',
    'example-evergreen-finance',
    'example-stellar-launch'
];
const CURATED_PROTOTYPE_PLUGIN_IDS = [
    ...PINNED_TEMPLATE_PLUGIN_IDS,
    'example-open-design-landing',
    'example-kanban-board',
    'example-social-carousel',
    'example-blog-post',
    'example-doc-kami-parchment'
];
const CURATED_LIVE_ARTIFACT_PLUGIN_IDS = [
    'example-live-dashboard',
    'image-template-notion-team-dashboard-live-artifact',
    'example-social-media-matrix-tracker-template',
    'example-trading-analysis-dashboard-template',
    'example-live-artifact'
];
// Pinned-to-front slide library (curator request): the community-sourced
// slides batch leads both the Home hero deck chip and the Home plugin grid's
// Slides shelf, ahead of the standing curated deck picks below. Order here is
// the exact display order requested (family roots first, then variants).
const PINNED_SLIDE_PLUGIN_IDS = [
    // `example-frontend-slides` (the bare family-root template) is intentionally
    // NOT pinned — its generic cover reads as filler at the top of the shelf, so
    // it drops to the uncurated tail while the styled variants below still lead.
    'example-fs-creative-voltage',
    'example-fs-electric-studio',
    'example-fs-emerald-editorial',
    'example-fs-editorial-forest',
    'example-fs-notebook-tabs',
    'example-huashu-slides',
    'example-huashu-keynote-black',
    'example-huashu-takram-soft-tech',
    'example-huashu-luxe-whitespace',
    'example-huashu-bento-insight',
    'example-huashu-golden-circle',
    'example-huashu-pentagram-grid',
    'example-huashu-sparkline-arc',
    'example-huashu-annual-letter',
    'example-hps-bauhaus',
    'example-hps-memphis-pop',
    'example-hps-y2k-chrome',
    'example-hps-retro-tv',
    'example-hps-true-blueprint',
    'example-hps-academic-paper',
    'example-ve-midnight-editorial',
    'example-ve-terminal-mono'
];
const CURATED_DECK_PLUGIN_IDS = [
    ...PINNED_SLIDE_PLUGIN_IDS,
    'example-html-ppt-zhangzara-creative-mode',
    'example-html-ppt-zhangzara-scatterbrain',
    'example-guizang-ppt',
    'example-html-ppt-zhangzara-cobalt-grid',
    'example-html-ppt-zhangzara-capsule'
];
const CURATED_IMAGE_PLUGIN_IDS = [
    'image-template-anime-martial-arts-battle-illustration',
    'image-template-e-commerce-live-stream-ui-mockup',
    'image-template-infographic-otaku-dance-choreography-breakdown-gokurakujodo-16-panels',
    'image-template-profile-avatar-anime-girl-to-cinematic-photo',
    'image-template-social-media-post-showa-day-retro-culture-magazine-cover'
];
const CURATED_VIDEO_PLUGIN_IDS = [
    'video-template-video-seedance-three-kingdoms-lyubu-yuanmen-archery',
    'video-template-seedance-2-0-15-second-cinematic-japanese-romance-short-film',
    'video-template-cinematic-east-asian-woman-hand-dance',
    'video-template-luxury-supercar-cinematic-narrative',
    'video-template-forbidden-city-cat-satire'
];
const CURATED_HYPERFRAMES_PLUGIN_IDS = [
    'video-template-hyperframes-app-showcase-three-phones',
    'video-template-hyperframes-brand-sizzle-reel',
    'video-template-hyperframes-social-overlay-stack',
    'video-template-hyperframes-website-to-video-promo',
    'video-template-hyperframes-flight-map-route'
];
const CURATED_PLUGIN_IDS_BY_CHIP = {
    prototype: CURATED_PROTOTYPE_PLUGIN_IDS,
    'live-artifact': CURATED_LIVE_ARTIFACT_PLUGIN_IDS,
    deck: CURATED_DECK_PLUGIN_IDS,
    image: CURATED_IMAGE_PLUGIN_IDS,
    video: CURATED_VIDEO_PLUGIN_IDS,
    hyperframes: CURATED_HYPERFRAMES_PLUGIN_IDS
};
const CURATED_GLOBAL_IDS = [
    ...CURATED_PROTOTYPE_PLUGIN_IDS,
    ...CURATED_LIVE_ARTIFACT_PLUGIN_IDS,
    ...CURATED_DECK_PLUGIN_IDS,
    ...CURATED_IMAGE_PLUGIN_IDS,
    ...CURATED_VIDEO_PLUGIN_IDS,
    ...CURATED_HYPERFRAMES_PLUGIN_IDS
];
const CURATED_GLOBAL_RANK = new Map(CURATED_GLOBAL_IDS.map((id, index)=>[
        id,
        index
    ]));
function curatedPluginPriority(record) {
    return CURATED_GLOBAL_RANK.get(record.id) ?? null;
}
function curatedPluginPriorityForChip(record, chipId) {
    const ids = CURATED_PLUGIN_IDS_BY_CHIP[chipId];
    if (!ids) return null;
    const index = ids.indexOf(record.id);
    return index >= 0 ? index : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localizePluginDescription",
    ()=>localizePluginDescription,
    "localizePluginTitle",
    ()=>localizePluginTitle,
    "localizedText",
    ()=>localizedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
;
function localizePluginTitle(locale, record) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocalizedText"])(localizedText(record.manifest?.title_i18n), locale) || record.title;
}
function localizePluginDescription(locale, record) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocalizedText"])(localizedText(record.manifest?.description_i18n), locale) || record.manifest?.description || '';
}
function localizedText(value) {
    if (typeof value === 'string') return value;
    if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
    const entries = Object.entries(value);
    if (entries.length === 0) return undefined;
    if (!entries.every(([, text])=>typeof text === 'string')) return undefined;
    return Object.fromEntries(entries);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/facets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PREFERRED_DEFAULT_SELECTION",
    ()=>PREFERRED_DEFAULT_SELECTION,
    "applyFacetSelection",
    ()=>applyFacetSelection,
    "buildCategoryCatalog",
    ()=>buildCategoryCatalog,
    "buildFacetCatalog",
    ()=>buildFacetCatalog,
    "buildSubcategoryCatalog",
    ()=>buildSubcategoryCatalog,
    "extractCategories",
    ()=>extractCategories,
    "extractSubcategories",
    ()=>extractSubcategories,
    "filterByQuery",
    ()=>filterByQuery,
    "isFeaturedPlugin",
    ()=>isFeaturedPlugin,
    "resolveDefaultSelection",
    ()=>resolveDefaultSelection
]);
// Facet derivation for the Plugins home section.
//
// The Home starter grid is organized around the artifact a user wants
// to make first:
//
//   Prototype · Live Artifact · Slides · Image · Video · HyperFrames · Audio
//
// Prototype, Slides, Image, and Video have enough bundled templates to
// deserve a second row. Those child buckets follow the Feishu prompt
// taxonomy from the user-query analysis doc: business dashboards, app
// prototypes, landing pages, pitch decks, training decks, brand visuals,
// video/motion generation, and adjacent scene clusters. HyperFrames and
// Audio stay flat because their catalog slices are intentionally small.
//
// Counts in each category reflect the catalog *as a whole*, not the
// post-filter slice. We deliberately avoid recomputing counts after
// a selection because per-axis counts that "go to zero" as the user
// clicks make the row visually noisy and obscure how the overall
// catalog is shaped.
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/contracts/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$curatedPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/curatedPriority.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
;
;
;
function slugify(value) {
    return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}
function manifestField(record, key) {
    const od = record.manifest?.od ?? {};
    const v = od[key];
    return typeof v === 'string' ? v : undefined;
}
function manifestTaskKind(record) {
    return manifestField(record, 'taskKind');
}
function manifestTagSlugs(record) {
    const raw = record.manifest?.tags ?? [];
    return raw.map((t)=>slugify(String(t))).filter(Boolean);
}
function pipelineAtomSlugs(record) {
    const stages = record.manifest?.od?.pipeline?.stages ?? [];
    return stages.flatMap((stage)=>stage.atoms.map(slugify));
}
function recordSlugs(record) {
    return new Set([
        slugify(record.id),
        slugify(record.manifest?.name ?? ''),
        slugify(record.title ?? ''),
        slugify(manifestTaskKind(record) ?? ''),
        slugify(manifestField(record, 'mode') ?? ''),
        slugify(manifestField(record, 'scenario') ?? ''),
        slugify(manifestField(record, 'surface') ?? ''),
        ...manifestTagSlugs(record),
        ...pipelineAtomSlugs(record)
    ].filter(Boolean));
}
function byMode(mode) {
    return (record)=>{
        const v = manifestField(record, 'mode');
        return typeof v === 'string' && slugify(v) === mode;
    };
}
function hasAnySlug(record, slugs) {
    const haystack = recordSlugs(record);
    return slugs.some((slug)=>haystack.has(slug));
}
function byAnySlug(...slugs) {
    return (record)=>hasAnySlug(record, slugs);
}
function matchesAny(record, tests) {
    return tests.some((test)=>test(record));
}
const HYPERFRAMES_TESTS = [
    byAnySlug('hyperframes', 'html-video', 'video-composition', 'interactive-video')
];
function isHyperFramesPlugin(record) {
    return matchesAny(record, HYPERFRAMES_TESTS);
}
function isVideoPlugin(record) {
    return byMode('video')(record) && !isHyperFramesPlugin(record);
}
function isLiveArtifactPlugin(record) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$curatedPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CURATED_LIVE_ARTIFACT_PLUGIN_IDS"].includes(record.id);
}
// Curated artifact-kind list. Keep this aligned with the Home creation
// intents and the app's artifact product types.
const PRIMARY_CATEGORIES = [
    {
        slug: 'prototype',
        label: 'Prototype',
        starterPrompt: 'Create an Open Design plugin that generates an interactive prototype from a product brief.',
        test: (record)=>byMode('prototype')(record) && !isLiveArtifactPlugin(record)
    },
    {
        slug: 'live-artifact',
        label: 'Live Artifact',
        starterPrompt: 'Create an Open Design plugin that generates a live artifact with refreshable, data-aware UI.',
        test: isLiveArtifactPlugin
    },
    {
        slug: 'deck',
        label: 'Slides',
        starterPrompt: 'Create an Open Design plugin that generates a polished slide deck from a narrative brief.',
        test: byMode('deck')
    },
    {
        slug: 'image',
        label: 'Image',
        starterPrompt: 'Create an Open Design plugin that generates image assets from structured creative direction.',
        test: byMode('image')
    },
    {
        slug: 'video',
        label: 'Video',
        starterPrompt: 'Create an Open Design plugin that generates video prompts, storyboards, or render-ready motion artifacts.',
        test: isVideoPlugin
    },
    {
        slug: 'hyperframes',
        label: 'HyperFrames',
        starterPrompt: 'Create an Open Design plugin that generates a HyperFrames-ready motion composition.',
        test: isHyperFramesPlugin
    },
    {
        slug: 'audio',
        label: 'Audio',
        starterPrompt: 'Create an Open Design plugin that generates audio, voice, or sound-design assets from a brief.',
        test: byMode('audio')
    }
];
// Display-order overrides for sub-category rails/catalog, keyed by parent.
//
// IMPORTANT: this is presentation only. `extractSubcategories()` resolves a
// plugin's bucket via `SUBCATEGORIES.find(...)`, so the *array order* below is
// the matching precedence and must stay stable — reordering it would re-bucket
// overlapping-tag plugins (e.g. a `dashboard`+`design` plugin would flip from
// Dashboards to Brand / design). To change only the order chips/cards appear
// in — without touching which bucket a plugin lands in — list the parent's
// slugs here in the desired display order. Any slug not listed keeps its
// natural `SUBCATEGORIES` order behind the explicitly-ordered ones.
const SUBCATEGORY_DISPLAY_ORDER = {
    prototype: [
        'landing-marketing',
        'brand-design',
        'business-dashboards',
        'app-prototypes',
        'developer-tools',
        'docs-reports'
    ],
    deck: [
        'creative-decks',
        'engineering-talks',
        'pitch-business',
        'course-training',
        'reports-briefings',
        'product-sales'
    ]
};
function orderSubcategoriesForDisplay(parent, options) {
    const order = SUBCATEGORY_DISPLAY_ORDER[parent];
    if (!order) return options;
    const rank = (slug)=>{
        const index = order.indexOf(slug);
        return index === -1 ? order.length : index;
    };
    // Stable sort: explicitly-ordered slugs float to the front in the configured
    // order; everything else keeps its original relative position behind them.
    return options.map((option, index)=>({
            option,
            index
        })).sort((a, b)=>rank(a.option.slug) - rank(b.option.slug) || a.index - b.index).map((entry)=>entry.option);
}
// Scene child buckets based on the Feishu prompt taxonomy. HyperFrames
// and Audio intentionally have no children, so selecting them keeps the
// section flat.
//
// NOTE: array order here is matching precedence (see SUBCATEGORY_DISPLAY_ORDER
// above), NOT the on-screen order. Keep it stable.
const SUBCATEGORIES = [
    {
        parent: 'prototype',
        slug: 'business-dashboards',
        label: 'Dashboards',
        starterPrompt: 'Create an Open Design prototype plugin for business systems, admin panels, or analytics dashboards.',
        test: byAnySlug('dashboard', 'admin-panel', 'analytics', 'control-panel', 'team-dashboard', 'live-dashboard', 'refreshable-dashboard', 'ops-dashboard', 'github-dashboard', 'social-media-dashboard', 'data', 'chart')
    },
    {
        parent: 'prototype',
        slug: 'app-prototypes',
        label: 'Apps',
        starterPrompt: 'Create an Open Design prototype plugin for multi-screen apps, onboarding, or task-productivity flows.',
        test: byAnySlug('mobile', 'app', 'mobile-app', 'ios-app', 'android-app', 'phone-screen', 'app-ui', 'app-mockup', 'app-onboarding', 'onboarding', 'signup', 'task', 'habit-tracker', 'dating-app')
    },
    {
        parent: 'prototype',
        slug: 'landing-marketing',
        label: 'Landing / marketing',
        starterPrompt: 'Create an Open Design prototype plugin for landing pages, marketing sites, pricing pages, or campaign pages.',
        test: byAnySlug('landing', 'landing-page', 'saas-landing', 'marketing-page', 'product-landing', 'pricing', 'pricing-page', 'waitlist-page', 'coming-soon-page', 'email-template', 'newsletter', 'lead-magnet', 'e-guide', 'poster', 'social-carousel')
    },
    {
        parent: 'prototype',
        slug: 'developer-tools',
        label: 'Developer tools',
        starterPrompt: 'Create an Open Design prototype plugin for developer tools, engineering workflows, docs, or code collaboration.',
        test: byAnySlug('engineering', 'docs', 'documentation', 'api-reference', 'runbook', 'ops-doc', 'sre-doc', 'github', 'linear', 'issue')
    },
    {
        parent: 'prototype',
        slug: 'docs-reports',
        label: 'Docs / reports',
        starterPrompt: 'Create an Open Design prototype plugin for reports, documents, case studies, specs, invoices, or resumes.',
        test: byAnySlug('report', 'financial-report', 'finance-report', 'case-report', 'clinical-case', 'case-study', 'guide', 'tutorial', 'pm-spec', 'prd', 'spec', 'invoice', 'resume', 'cv')
    },
    {
        parent: 'prototype',
        slug: 'brand-design',
        label: 'Brand / design',
        starterPrompt: 'Create an Open Design prototype plugin for brand pages, visual exploration, design reviews, or mockups.',
        test: byAnySlug('design', 'design-review', 'design-audit', 'critique', 'mockup', 'wireframe', 'visual', 'brand')
    },
    {
        parent: 'deck',
        slug: 'pitch-business',
        label: 'Pitch / business',
        starterPrompt: 'Create an Open Design deck plugin for fundraising, business plans, investor decks, or strategic narratives.',
        test: byAnySlug('pitch-deck', 'pitch', 'fundraising', 'seed-round', 'investor-deck', 'vc-deck', 'business-plan', 'b2b-saas-pitch', 'founder-vision-deck')
    },
    {
        parent: 'deck',
        slug: 'course-training',
        label: 'Course / training',
        starterPrompt: 'Create an Open Design deck plugin for courses, training materials, workshops, or classroom slides.',
        test: byAnySlug('course-module', 'course-slides', 'training-deck', 'workshop', 'lesson', 'education', 'classroom')
    },
    {
        parent: 'deck',
        slug: 'reports-briefings',
        label: 'Reports / briefings',
        starterPrompt: 'Create an Open Design deck plugin for weekly reports, management briefings, white papers, or business reviews.',
        test: byAnySlug('weekly-report', 'status-update', 'team-report', 'business-review', 'white-paper', 'investment-thesis', 'consulting-deliverable', 'financial', 'data-viz-launch')
    },
    {
        parent: 'deck',
        slug: 'product-sales',
        label: 'Product / sales',
        starterPrompt: 'Create an Open Design deck plugin for product launches, sales enablement, feature reveals, or customer pitches.',
        test: byAnySlug('product-launch', 'launch-deck', 'feature-reveal', 'launch-slides', 'sales', 'customer', 'product')
    },
    {
        parent: 'deck',
        slug: 'engineering-talks',
        label: 'Engineering talks',
        starterPrompt: 'Create an Open Design deck plugin for technical presentations, architecture walkthroughs, or dev workflow talks.',
        test: byAnySlug('engineering', 'tech-sharing', 'tech-talk', 'technical-presentation', 'system-design', 'architecture', 'developer-tutorial', 'dev-workflow', 'incident', 'red-team', 'risk-review')
    },
    {
        parent: 'deck',
        slug: 'creative-decks',
        label: 'Creative decks',
        starterPrompt: 'Create an Open Design deck plugin for creative, editorial, brand, social, or visual storytelling decks.',
        test: byAnySlug('marketing', 'editorial', 'zhangzara', 'creative-agency-pitch', 'brand-manifesto', 'fashion-brand-deck', 'creator-portfolio', 'xhs', 'design-studio-deck')
    },
    {
        parent: 'image',
        slug: 'ui-product-mockups',
        label: 'UI / product mockups',
        starterPrompt: 'Create an Open Design image plugin for product UI mockups, game UI, product cards, or interface showcases.',
        test: byAnySlug('app-web-design', 'game-ui', 'ui', 'hud', 'live-artifact', 'app-showcase', 'product', 'mockup')
    },
    {
        parent: 'image',
        slug: 'brand-visuals',
        label: 'Brand / logo',
        starterPrompt: 'Create an Open Design image plugin for logos, brand visuals, typography-led posters, or visual systems.',
        test: byAnySlug('logo', 'brand', 'typography', 'poster', 'key-art', 'cover-art')
    },
    {
        parent: 'image',
        slug: 'storyboards-motion-refs',
        label: 'Storyboards',
        starterPrompt: 'Create an Open Design image plugin for storyboards, choreography breakdowns, pose references, or motion planning sheets.',
        test: byAnySlug('storyboard', 'dance', 'choreography', 'pose-reference', 'video-reference', 'sequence')
    },
    {
        parent: 'image',
        slug: 'social-content',
        label: 'Social / content',
        starterPrompt: 'Create an Open Design image plugin for social posts, infographics, explainers, or content graphics.',
        test: byAnySlug('social-media-post', 'infographic', 'explainer', 'social', 'collage')
    },
    {
        parent: 'image',
        slug: 'avatar-portrait',
        label: 'Avatar / portrait',
        starterPrompt: 'Create an Open Design image plugin for avatars, portraits, identity photos, or character headshots.',
        test: byAnySlug('profile-avatar', 'portrait', 'selfie', 'identity')
    },
    {
        parent: 'image',
        slug: 'illustration-style',
        label: 'Illustration / style',
        starterPrompt: 'Create an Open Design image plugin for illustrations, anime, fantasy scenes, 3D renders, or style-transfer prompts.',
        test: byAnySlug('illustration', 'anime', 'fantasy', '3d-render', 'cinematic', 'crayon', 'style-transfer', 'nature')
    },
    {
        parent: 'video',
        slug: 'motion-effects',
        label: 'Motion / effects',
        starterPrompt: 'Create an Open Design video plugin for motion graphics, VFX, title frames, animation, or logo/outro sequences.',
        test: byAnySlug('motion-graphics', 'vfx', 'frame', 'kinetic-typography', 'logo', 'outro', 'title', 'transition', 'animation')
    },
    {
        parent: 'video',
        slug: 'social-short-form',
        label: 'Social / short form',
        starterPrompt: 'Create an Open Design video plugin for short-form social clips, vertical video, TikTok-style captions, or dance trends.',
        test: byAnySlug('short-form', 'vertical', 'tiktok', 'social-meme', 'dance', 'k-pop', 'karaoke', 'captions')
    },
    {
        parent: 'video',
        slug: 'marketing-product',
        label: 'Marketing / product',
        starterPrompt: 'Create an Open Design video plugin for product promos, advertising, brand sizzle reels, or marketing cuts.',
        test: byAnySlug('marketing', 'product', 'advertising', 'product-promo', 'saas', 'website-to-video', 'brand')
    },
    {
        parent: 'video',
        slug: 'data-explainers',
        label: 'Data / explainers',
        starterPrompt: 'Create an Open Design video plugin for data explainers, animated charts, maps, diagrams, or flow walkthroughs.',
        test: byAnySlug('data', 'chart', 'flowchart', 'diagram', 'map', 'route', 'infographic')
    },
    {
        parent: 'video',
        slug: 'cinematic-story',
        label: 'Cinematic / story',
        starterPrompt: 'Create an Open Design video plugin for cinematic scenes, story sequences, anime/action shots, or fantasy clips.',
        test: byAnySlug('cinematic', 'fantasy', 'action', 'anime', 'game-cinematic', 'cyberpunk', 'nature', 'cinematic-romance', 'combat')
    }
];
function extractPrimaryCategory(record) {
    return PRIMARY_CATEGORIES.find((c)=>c.test(record))?.slug ?? null;
}
function extractCategories(record) {
    const primary = extractPrimaryCategory(record);
    return primary ? [
        primary
    ] : [];
}
function extractSubcategories(record, parent) {
    const primary = parent ?? extractPrimaryCategory(record);
    if (!primary) return [];
    const match = SUBCATEGORIES.find((c)=>c.parent === primary && c.test(record));
    return match ? [
        match.slug
    ] : [];
}
function buildCategoryCatalog(plugins) {
    const counts = new Map();
    for (const p of plugins){
        for (const slug of extractCategories(p)){
            counts.set(slug, (counts.get(slug) ?? 0) + 1);
        }
    }
    return PRIMARY_CATEGORIES.map((c)=>({
            slug: c.slug,
            label: c.label,
            starterPrompt: c.starterPrompt,
            count: counts.get(c.slug) ?? 0
        }));
}
function buildSubcategoryCatalog(plugins) {
    const counts = new Map();
    for (const p of plugins){
        const parent = extractPrimaryCategory(p);
        if (!parent) continue;
        for (const slug of extractSubcategories(p, parent)){
            counts.set(`${parent}:${slug}`, (counts.get(`${parent}:${slug}`) ?? 0) + 1);
        }
    }
    return PRIMARY_CATEGORIES.reduce((acc, category)=>{
        const options = SUBCATEGORIES.filter((c)=>c.parent === category.slug).map((c)=>({
                slug: c.slug,
                label: c.label,
                starterPrompt: c.starterPrompt,
                count: counts.get(`${category.slug}:${c.slug}`) ?? 0
            }));
        if (options.length > 0) {
            // Presentation order only; bucket membership is fixed by SUBCATEGORIES.
            acc[category.slug] = orderSubcategoriesForDisplay(category.slug, options);
        }
        return acc;
    }, {});
}
function buildFacetCatalog(plugins) {
    return {
        category: buildCategoryCatalog(plugins),
        subcategory: buildSubcategoryCatalog(plugins)
    };
}
function applyFacetSelection(plugins, selection) {
    if (!selection.category) return plugins;
    const want = selection.category;
    const inCategory = plugins.filter((p)=>extractCategories(p).includes(want));
    if (!selection.subcategory) return inCategory;
    return inCategory.filter((p)=>extractSubcategories(p, want).includes(selection.subcategory));
}
function isFeaturedPlugin(record) {
    const od = record.manifest?.od ?? {};
    return od.featured === true || typeof od.featured === 'number' && Number.isFinite(od.featured);
}
function filterByQuery(plugins, query, locale) {
    const q = query.trim().toLowerCase();
    if (!q) return plugins;
    const terms = q.split(/\s+/).filter(Boolean);
    if (terms.length === 0) return plugins;
    return plugins.filter((p)=>{
        const haystack = [
            p.title ?? '',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocalizedText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizedText"])(p.manifest?.title_i18n), locale),
            p.id,
            p.manifest?.description ?? '',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$contracts$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLocalizedText"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizedText"])(p.manifest?.description_i18n), locale),
            (p.manifest?.tags ?? []).join(' ')
        ].join(' ').toLowerCase();
        return terms.every((t)=>haystack.includes(t));
    });
}
const PREFERRED_DEFAULT_SELECTION = {
    category: 'prototype',
    subcategory: null
};
function resolveDefaultSelection(catalog) {
    const wantCategory = PREFERRED_DEFAULT_SELECTION.category;
    const preferredCategory = wantCategory ? catalog.category.find((o)=>o.slug === wantCategory && o.count > 0) : undefined;
    const selectedCategory = preferredCategory ?? catalog.category.find((o)=>o.count > 0);
    if (!selectedCategory) return {
        category: null,
        subcategory: null
    };
    if (selectedCategory.slug !== wantCategory) {
        return {
            category: selectedCategory.slug,
            subcategory: null
        };
    }
    const wantSubcategory = PREFERRED_DEFAULT_SELECTION.subcategory;
    if (!wantSubcategory) return PREFERRED_DEFAULT_SELECTION;
    const hasSubcategoryWithPlugins = catalog.subcategory[wantCategory]?.some((o)=>o.slug === wantSubcategory && o.count > 0);
    if (hasSubcategoryWithPlugins) return PREFERRED_DEFAULT_SELECTION;
    return {
        category: wantCategory,
        subcategory: null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/presetSeedPrompt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared "example preset" seed logic — the short, human-readable, editable
// hook that lands in the composer when a user picks a plugin's example.
//
// This is the SINGLE source of truth for that seed so the Home example-prompt
// cards (HomeHero) and the plugin detail modal's "Replicate this content"
// action (HomeView) stay in lockstep. They used to diverge: the cards surfaced
// a friendly description while the detail modal dumped the raw
// `od.useCase.query` — which for many plugins is a generator-facing
// meta-instruction ("follow the en field verbatim; start from example.html"),
// useless as a human seed.
//
// `examplePresetSeedPrompt` deliberately does NOT return the full build spec —
// that rides along as plugin context (SKILL.md + example.html) once the plugin
// is applied, so the output still faithfully recreates the reference.
__turbopack_context__.s([
    "examplePresetSeedPrompt",
    ()=>examplePresetSeedPrompt,
    "firstPromptParagraph",
    ()=>firstPromptParagraph,
    "isMetaInstructionSeed",
    ()=>isMetaInstructionSeed,
    "pluginPresetQuery",
    ()=>pluginPresetQuery,
    "promptLocaleKind",
    ()=>promptLocaleKind,
    "renderPluginPresetQuery",
    ()=>renderPluginPresetQuery,
    "stripAttributionTail",
    ()=>stripAttributionTail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
;
const INPUT_PLACEHOLDER_PATTERN = /\{\{\s*([a-zA-Z_][\w-]*)\s*\}\}/g;
const HOME_ESCAPED_ARGUMENT_PLACEHOLDER_PATTERN = /\{argument\s+name=\\"([^"]+)\\"\s+default=\\"([^"]*)\\"[^}]*\}/g;
const HOME_ARGUMENT_PLACEHOLDER_PATTERN = /\{argument\s+name=(?:"([^"]+)"|'([^']+)')\s+default=(?:"([^"]*)"|'([^']*)')[^}]*\}/g;
function promptLocaleKind(locale) {
    if (locale === 'zh-CN' || locale === 'zh-TW') return 'zh';
    if (locale === 'ja') return 'ja';
    return 'en';
}
function pluginPresetQuery(record, locale) {
    const query = record.manifest?.od?.useCase?.query;
    if (typeof query === 'string') return query;
    if (query && typeof query === 'object') {
        const localized = query;
        const exact = localized[locale];
        if (typeof exact === 'string') return exact;
        const language = locale.split('-')[0];
        const languageMatch = Object.entries(localized).find(([key, value])=>key.toLowerCase().startsWith(`${language}-`) && typeof value === 'string');
        if (typeof languageMatch?.[1] === 'string') return languageMatch[1];
        for (const key of [
            'zh-CN',
            'en',
            'default'
        ]){
            if (typeof localized[key] === 'string') return localized[key];
        }
        const first = Object.values(localized).find((value)=>typeof value === 'string');
        if (typeof first === 'string') return first;
    }
    return null;
}
function renderPluginPresetQuery(record, query) {
    const fields = record.manifest?.od?.inputs ?? [];
    const valueByName = new Map();
    for (const field of fields){
        const value = field.default ?? field.placeholder ?? field.label ?? field.name;
        valueByName.set(field.name, String(value));
    }
    return query.replace(HOME_ESCAPED_ARGUMENT_PLACEHOLDER_PATTERN, (_placeholder, _name, defaultValue)=>defaultValue ?? '').replace(HOME_ARGUMENT_PLACEHOLDER_PATTERN, (_placeholder, _doubleName, _singleName, doubleDefault, singleDefault)=>doubleDefault ?? singleDefault ?? '').replace(INPUT_PLACEHOLDER_PATTERN, (_placeholder, key)=>valueByName.get(key) ?? key);
}
function firstPromptParagraph(value) {
    const normalized = value.replace(/\r\n/g, '\n').trim();
    if (!normalized) return '';
    // First paragraph = text up to the first blank line / markdown rule fence.
    const [head] = normalized.split(/\n\s*\n/);
    return (head ?? normalized).trim();
}
function isMetaInstructionSeed(value) {
    return /逐字注入|以\s*en\s*字段为准|verbatim|example\.html/iu.test(value);
}
// Markers that introduce a source-provenance sentence ("Based on …", "移植自 …").
const ATTRIBUTION_MARKERS = [
    'Based on',
    'Adapted from',
    'Ported from',
    'Inspired by',
    '移植自',
    '改编自',
    '基于',
    '源自',
    '参考自'
];
// Start index of the final sentence. A Latin '.'/'!'/'?' ends a sentence only
// when it terminates the string or is followed by whitespace, so tokens like
// "STYLE_PRESETS.md" or "github.com/foo" don't split mid-word; CJK enders
// (。！？) always split.
function lastSentenceStart(text) {
    const bounds = [];
    for(let i = 0; i < text.length; i++){
        const ch = text[i];
        if (ch === '。' || ch === '！' || ch === '？') bounds.push(i);
        else if (ch === '.' || ch === '!' || ch === '?') {
            const next = text[i + 1];
            if (next === undefined || /\s/.test(next)) bounds.push(i);
        }
    }
    if (bounds.length === 0) return 0;
    const last = bounds[bounds.length - 1];
    // If the last boundary is the final char, the trailing sentence starts after
    // the previous boundary; otherwise it starts after the last one.
    if (last === text.length - 1) {
        return bounds.length >= 2 ? bounds[bounds.length - 2] + 1 : 0;
    }
    return last + 1;
}
function stripAttributionTail(text) {
    const trimmed = text.trimEnd();
    const start = lastSentenceStart(trimmed);
    if (start === 0) return text;
    const sentence = trimmed.slice(start).replace(/^\s+/, '');
    if (!ATTRIBUTION_MARKERS.some((m)=>sentence.startsWith(m))) return text;
    const kept = trimmed.slice(0, start).trimEnd();
    return kept.length > 0 ? kept : text;
}
// Non-global twin of INPUT_PLACEHOLDER_PATTERN — `.test()` on a /g/ regex is
// stateful (lastIndex), so probing uses this one.
const HAS_INPUT_PLACEHOLDER_PATTERN = /\{\{\s*[a-zA-Z_][\w-]*\s*\}\}/;
function usableQueryHead(record, query) {
    const head = firstPromptParagraph(renderPluginPresetQuery(record, query));
    // Skip meta-instructions that reference fields/assets the model can't see
    // from the textarea.
    if (head && !isMetaInstructionSeed(head)) return head;
    return null;
}
function examplePresetSeedPrompt(record, locale, fallback) {
    const description = stripAttributionTail((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, record).trim());
    // zh: the localized useCase.query is a generator-facing meta-instruction
    // ("follow the en field verbatim; start from example.html"), useless as a
    // human seed — surface the curated one-line description instead.
    if (promptLocaleKind(locale) === 'zh' && description) {
        return {
            text: description,
            fromRenderedQuery: false
        };
    }
    const query = pluginPresetQuery(record, locale);
    // Input-templated queries (raw `{{...}}` placeholders in the leading
    // paragraph) are authored as editable human seeds; keep the rendered head so
    // editing a hydrated value in the composer still writes back into the
    // plugin inputs.
    if (query && HAS_INPUT_PLACEHOLDER_PATTERN.test(firstPromptParagraph(query))) {
        const head = usableQueryHead(record, query);
        if (head) return {
            text: head,
            fromRenderedQuery: true
        };
    }
    // Otherwise prefer the curated natural-language description: for many
    // example plugins the en query opens with a generator-facing build spec
    // (stack/file-layout instructions, raw HTML, or a paragraph dangling "as
    // described below" whose referent was truncated away) that reads as noise
    // in the composer. The full spec still reaches the agent as plugin context
    // (SKILL.md + example.html) once the plugin is applied.
    if (description) return {
        text: description,
        fromRenderedQuery: false
    };
    if (query) {
        const head = usableQueryHead(record, query);
        if (head) return {
            text: head,
            fromRenderedQuery: true
        };
    }
    return {
        text: fallback(),
        fromRenderedQuery: false
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/useInView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
// IntersectionObserver-backed visibility hook used by the plugin
// preview tiles to defer expensive work — image fetches, srcDoc
// iframes, autoplaying video — until the card actually scrolls
// into view. Once a tile has been visible at least once we keep it
// "armed" so re-scrolling does not cause repeated mount churn.
//
// Centralised here so every preview variant (media / iframe /
// design-system) shares one lazy-mount contract. Tests can stub
// IntersectionObserver to force eager mounting.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useInView(options = {}) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const node = ref.current;
            if (!node) return;
            if (typeof IntersectionObserver === 'undefined') {
                setInView(true);
                return;
            }
            const observer = new IntersectionObserver({
                "useInView.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            setInView(true);
                            if (options.once !== false) {
                                observer.disconnect();
                            }
                        } else if (options.once === false) {
                            setInView(false);
                        }
                    }
                }
            }["useInView.useEffect"], {
                rootMargin: options.rootMargin ?? '240px'
            });
            observer.observe(node);
            return ({
                "useInView.useEffect": ()=>observer.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        options.once,
        options.rootMargin
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignSystemSurface",
    ()=>DesignSystemSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Design-system preview surface — showcase thumbnail with a brand-patch fallback.
//
// Most design-system plugins reference an upstream design system in
// `od.context.designSystem.ref`. When available, reuse the same
// showcase route as the detail modal so the home grid reads like real
// website thumbnails rather than synthetic color swatches. The iframe
// uses native lazy loading so off-screen cards do not eagerly render.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/visualStability.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function DesignSystemSurface({ preview, inView }) {
    _s();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DesignSystemSurface.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])()
    }["DesignSystemSurface.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignSystemSurface.useEffect": ()=>{
            if (!preview.designSystemId) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])()) {
                setReady(true);
                return;
            }
            if (!inView) {
                setReady(false);
                return;
            }
            const id = window.setTimeout({
                "DesignSystemSurface.useEffect.id": ()=>setReady(true)
            }["DesignSystemSurface.useEffect.id"], 520);
            return ({
                "DesignSystemSurface.useEffect": ()=>window.clearTimeout(id)
            })["DesignSystemSurface.useEffect"];
        }
    }["DesignSystemSurface.useEffect"], [
        inView,
        preview.designSystemId
    ]);
    if (preview.designSystemId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plugins-home__design plugins-home__design--showcase",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__design-showcase",
                children: ready ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    title: `${preview.brand} showcase preview`,
                    src: `/api/design-systems/${encodeURIComponent(preview.designSystemId)}/showcase`,
                    sandbox: "allow-scripts",
                    loading: "lazy",
                    tabIndex: -1,
                    "aria-hidden": true,
                    className: "plugins-home__design-iframe"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignPatch, {
                    preview: preview
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignPatch, {
        preview: preview
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_s(DesignSystemSurface, "hbg2pjQM+8hXasQbI2/q8eii4C8=");
_c = DesignSystemSurface;
function DesignPatch({ preview }) {
    const [primary, secondary, ink] = preview.swatches;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-home__design",
        style: {
            background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
            color: ink
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__design-headline",
                children: [
                    "The system that ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 71,
                        columnNumber: 25
                    }, this),
                    "makes ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: preview.brand
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 72,
                        columnNumber: 15
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 72,
                        columnNumber: 48
                    }, this),
                    "feel like ",
                    preview.brand,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__design-specimen",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Aa"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Bb"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Cc"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__design-swatches",
                "aria-hidden": true,
                children: preview.swatches.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            background: c
                        }
                    }, i, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c1 = DesignPatch;
var _c, _c1;
__turbopack_context__.k.register(_c, "DesignSystemSurface");
__turbopack_context__.k.register(_c1, "DesignPatch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HtmlSurface",
    ()=>HtmlSurface,
    "__resetHtmlSurfaceProbeCacheForTests",
    ()=>__resetHtmlSurfaceProbeCacheForTests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Sandboxed HTML preview surface — used for `examples/*` plugins
// and any scenario plugin that ships a runnable `od.preview.entry`.
//
// The iframe is mounted only after the card scrolls into view. We
// further guard the iframe behind a one-shot pointer hover (`armed`)
// for tiles that contain heavy interactive content; once armed it
// stays mounted so cursor flicker doesn't tear down the preview.
//
// The iframe is rendered tiny inside the card and visually scaled
// up via CSS `transform: scale(...)` so a full-size HTML doc reads
// as a thumbnail without needing a server-rendered screenshot. The
// daemon already enforces a strict CSP on the asset response.
//
// Reachability probe
// ------------------
// Some bundled plugins declare an `od.preview.entry` that doesn't
// resolve on disk (the daemon falls back to assets/*.html, but if
// nothing in the curated list exists the route 404s and the iframe
// renders the JSON error envelope as a blank white tile). To avoid
// blank cards in the home gallery, we issue a single HEAD probe
// before mounting the iframe and swap in a typographic fallback
// when the URL is unreachable. Results are cached per-URL so
// scrolling doesn't re-probe the same plugin.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/visualStability.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const probeCache = new Map();
const inflight = new Map();
async function probe(url) {
    const cached = probeCache.get(url);
    if (cached) return cached;
    const existing = inflight.get(url);
    if (existing) return existing;
    const run = (async ()=>{
        try {
            const head = await fetch(url, {
                method: 'HEAD'
            });
            if (head.ok) return 'ok';
            // Fall back to a normal GET — the daemon's asset routes only
            // handle GET, so HEAD may legitimately 404 even when the entry
            // exists. Use a Range request to keep the response tiny.
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    Range: 'bytes=0-0'
                }
            });
            return res.ok || res.status === 206 ? 'ok' : 'unreachable';
        } catch  {
            return 'unreachable';
        }
    })();
    inflight.set(url, run);
    const result = await run;
    probeCache.set(url, result);
    inflight.delete(url);
    return result;
}
function HtmlSurface({ preview, pluginId, pluginTitle, inView, eager = false }) {
    _s();
    const [armed, setArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldProbe, setShouldProbe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HtmlSurface.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])()
    }["HtmlSurface.useState"]);
    const [probeState, setProbeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HtmlSurface.useState": ()=>{
            const cached = probeCache.get(preview.src);
            return cached ?? 'idle';
        }
    }["HtmlSurface.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HtmlSurface.useEffect": ()=>{
            setArmed(false);
            setShouldProbe((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])());
            const cached = probeCache.get(preview.src);
            setProbeState(cached ?? 'idle');
        }
    }["HtmlSurface.useEffect"], [
        preview.src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HtmlSurface.useEffect": ()=>{
            if (!inView) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])()) {
                setShouldProbe(true);
                return;
            }
            if (probeCache.has(preview.src)) {
                setShouldProbe(true);
                return;
            }
            const id = window.setTimeout({
                "HtmlSurface.useEffect.id": ()=>setShouldProbe(true)
            }["HtmlSurface.useEffect.id"], eager ? 60 : 520);
            return ({
                "HtmlSurface.useEffect": ()=>window.clearTimeout(id)
            })["HtmlSurface.useEffect"];
        }
    }["HtmlSurface.useEffect"], [
        inView,
        preview.src,
        eager
    ]);
    // Kick off the probe on first in-view. We deliberately keep this
    // effect's deps narrow (just `inView` + `preview.src`) so the
    // subsequent `setProbeState(result)` does not cancel the in-flight
    // promise via a re-run cleanup. The module-level cache also makes
    // the probe a no-op if another tile already resolved the same URL.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HtmlSurface.useEffect": ()=>{
            if (!shouldProbe) return;
            if (probeCache.has(preview.src)) {
                setProbeState(probeCache.get(preview.src));
                return;
            }
            let cancelled = false;
            setProbeState('probing');
            probe(preview.src).then({
                "HtmlSurface.useEffect": (result)=>{
                    if (!cancelled) setProbeState(result);
                }
            }["HtmlSurface.useEffect"]);
            return ({
                "HtmlSurface.useEffect": ()=>{
                    cancelled = true;
                }
            })["HtmlSurface.useEffect"];
        }
    }["HtmlSurface.useEffect"], [
        preview.src,
        shouldProbe
    ]);
    // Arm the iframe after a short visibility window so the user can
    // scroll past tiles without paying for an iframe per tile, but tiles
    // that linger get the live preview without requiring hover.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HtmlSurface.useEffect": ()=>{
            if (probeState !== 'ok') return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$visualStability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVisualStabilityMode"])()) {
                if (inView) setArmed(true);
                return;
            }
            if (eager) {
                if (inView) setArmed(true);
                return;
            }
            const id = window.setTimeout({
                "HtmlSurface.useEffect.id": ()=>{
                    if (inView) setArmed(true);
                }
            }["HtmlSurface.useEffect.id"], 720);
            return ({
                "HtmlSurface.useEffect": ()=>window.clearTimeout(id)
            })["HtmlSurface.useEffect"];
        }
    }["HtmlSurface.useEffect"], [
        inView,
        probeState,
        eager
    ]);
    if (probeState === 'unreachable') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UnreachableFallback, {
            pluginId: pluginId,
            pluginTitle: pluginTitle,
            preview: preview,
            eager: eager
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-home__html",
        "data-plugin-id": pluginId,
        onMouseEnter: ()=>{
            setShouldProbe(true);
            if (probeState === 'ok') setArmed(true);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__html-frame",
                children: armed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    title: `${pluginTitle} preview`,
                    src: preview.src,
                    sandbox: "allow-scripts",
                    loading: "lazy",
                    tabIndex: -1,
                    "aria-hidden": true,
                    className: "plugins-home__html-iframe"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `plugins-home__html-skeleton${inView ? ' is-active' : ''}`,
                    "aria-hidden": true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            eager ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__html-chrome",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-dot"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-dot"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-dot"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-url",
                        children: preview.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(HtmlSurface, "5k0VPJBgFzHX+03wy4K3/rkJUjw=");
_c = HtmlSurface;
// Stable colour from the plugin id so adjacent fallback tiles stay
// visually distinct without flickering on re-renders.
function hueFor(id) {
    let hash = 0;
    for(let i = 0; i < id.length; i += 1){
        hash = hash * 31 + id.charCodeAt(i) >>> 0;
    }
    return hash % 360;
}
function UnreachableFallback({ pluginId, pluginTitle, preview, eager = false }) {
    const trimmed = pluginTitle.trim();
    const cp = trimmed.codePointAt(0) ?? 0x2022;
    const glyph = cp === 0x2022 ? '·' : String.fromCodePoint(cp).toUpperCase();
    const hue = hueFor(pluginId);
    const style = {
        background: `linear-gradient(135deg, hsl(${hue} 60% 18%), hsl(${(hue + 24) % 360} 50% 9%))`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-home__html plugins-home__html--fallback",
        "data-plugin-id": pluginId,
        "data-testid": "plugins-home-html-fallback",
        style: style,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__html-fallback-glyph",
                children: glyph
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            eager ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__html-chrome",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-dot"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-dot"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-dot"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__html-url",
                        children: preview.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c1 = UnreachableFallback;
function __resetHtmlSurfaceProbeCacheForTests() {
    probeCache.clear();
    inflight.clear();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "HtmlSurface");
__turbopack_context__.k.register(_c1, "UnreachableFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaSurface",
    ()=>MediaSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Image / video preview surface for the plugins-home gallery.
//
// Renders the plugin's poster as the card's hero. For plain video-template
// plugins the `<video>` only mounts on hover, so an idle gallery just fetches
// posters.
//
// Baked plugin previews (the home gallery's html plugins, pre-rendered by
// scripts/bake-plugin-previews.mjs) carry a `loopHoldMs`: the clip leads with a
// `[0, holdMs]` in-place-animation span, then pans top->bottom. We treat those
// as a cheap stand-in for the old live hover-pan iframe — the `<video>` mounts
// as soon as the tile is on-screen and loops the in-place span while idle
// (animated pages still look alive), and on hover jumps to the pan. The element
// stays mounted across a generous margin, so hover never remounts/reloads the
// source and can't flash black at the hand-off; it only decodes/plays while the
// tile is truly visible, and `preload="metadata"` paints the first frame off the
// faststart header instead of buffering the whole clip up front.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function MediaSurface({ preview, pluginTitle, inView, visible = inView }) {
    _s();
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track per-URL poster load failure so a 404 / decode error / dead
    // host swaps in the typographic fallback instead of leaving the
    // browser's default broken-image glyph on the card. Reset whenever
    // the poster URL itself changes — the previous failure must not
    // poison a freshly-assigned URL (filter rotations, daemon
    // repopulating a preview after an offline flip). #2955.
    const [posterLoadFailed, setPosterLoadFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaSurface.useEffect": ()=>{
            setPosterLoadFailed(false);
        }
    }["MediaSurface.useEffect"], [
        preview.poster
    ]);
    const isVideo = preview.mediaType === 'video' && Boolean(preview.videoUrl);
    const holdMs = preview.loopHoldMs ?? null;
    // Baked hover-pan clips (holdMs set) play as soon as they're on-screen so the
    // in-place span can loop while idle; plain video-template plugins keep the
    // cheaper poster-until-hover behaviour.
    const idlePlays = isVideo && holdMs != null;
    // Prefetch zone: warm the full clip into the HTTP cache a row or two ahead so
    // playback starts instantly on scroll-in instead of buffering from the
    // +faststart header at the moment the tile appears. Keep the root ref stable
    // across card reuse, and gate observer creation on `idlePlays` inside the
    // effect: non-baked media cards pay no observer/rerender cost, while a reused
    // card that flips from non-baked -> baked still subscribes correctly.
    const approachRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [approaching, setApproaching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaSurface.useEffect": ()=>{
            if (!idlePlays) {
                setApproaching(false);
                return;
            }
            const node = approachRef.current;
            if (!node) return;
            if (typeof IntersectionObserver === 'undefined') {
                setApproaching(true);
                return;
            }
            const observer = new IntersectionObserver({
                "MediaSurface.useEffect": (entries)=>{
                    for (const entry of entries){
                        setApproaching(entry.isIntersecting);
                    }
                }
            }["MediaSurface.useEffect"], {
                rootMargin: '1000px'
            });
            observer.observe(node);
            return ({
                "MediaSurface.useEffect": ()=>observer.disconnect()
            })["MediaSurface.useEffect"];
        }
    }["MediaSurface.useEffect"], [
        idlePlays
    ]);
    // Mount across the wider `inView` margin so hover/scroll-in never remounts +
    // reloads the source, but only decode/buffer when truly `visible` (or
    // hovering) — otherwise every tile in the margin runs a simultaneous decode +
    // full-clip download and the gallery stutters / first frames lag.
    const showVideo = inView && isVideo && (idlePlays || hovering);
    const playing = showVideo && (idlePlays && visible || hovering);
    // Idle: loop the leading [0, holdMs] in-place-animation span. Hover: jump to
    // holdMs and loop the pan span [holdMs, end] so it responds immediately
    // instead of waiting out the remaining hold. One element, never remounted
    // while on-screen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaSurface.useEffect": ()=>{
            const v = videoRef.current;
            if (!v || !playing || holdMs == null) return;
            const hold = holdMs / 1000;
            const clamp = {
                "MediaSurface.useEffect.clamp": (t)=>{
                    if (hovering) {
                        if (t < hold) v.currentTime = hold;
                    } else if (t >= hold) {
                        v.currentTime = 0;
                    }
                }
            }["MediaSurface.useEffect.clamp"];
            const vv = v;
            clamp(v.currentTime);
            if (typeof vv.requestVideoFrameCallback === 'function') {
                let id = 0;
                const tick = {
                    "MediaSurface.useEffect.tick": (_now, meta)=>{
                        clamp(meta?.mediaTime ?? v.currentTime);
                        id = vv.requestVideoFrameCallback(tick);
                    }
                }["MediaSurface.useEffect.tick"];
                id = vv.requestVideoFrameCallback(tick);
                return ({
                    "MediaSurface.useEffect": ()=>vv.cancelVideoFrameCallback?.(id)
                })["MediaSurface.useEffect"];
            }
            const onTime = {
                "MediaSurface.useEffect.onTime": ()=>clamp(v.currentTime)
            }["MediaSurface.useEffect.onTime"];
            v.addEventListener('timeupdate', onTime);
            return ({
                "MediaSurface.useEffect": ()=>v.removeEventListener('timeupdate', onTime)
            })["MediaSurface.useEffect"];
        }
    }["MediaSurface.useEffect"], [
        playing,
        hovering,
        holdMs
    ]);
    // The `autoplay` attribute alone doesn't reliably start a freshly-mounted
    // muted clip here (Electron/Chromium leaves it paused at readyState 1), so
    // kick it off explicitly on mount and again once it has buffered.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaSurface.useEffect": ()=>{
            const v = videoRef.current;
            if (!v || !showVideo) return;
            if (!playing) {
                // Mounted but off-screen (in the margin) or idle-disabled: hold the poster
                // frame, don't decode.
                v.pause();
                return;
            }
            const tryPlay = {
                "MediaSurface.useEffect.tryPlay": ()=>{
                    const p = v.play();
                    if (p && typeof p.catch === 'function') p.catch({
                        "MediaSurface.useEffect.tryPlay": ()=>{}
                    }["MediaSurface.useEffect.tryPlay"]);
                }
            }["MediaSurface.useEffect.tryPlay"];
            tryPlay();
            v.addEventListener('canplay', tryPlay);
            return ({
                "MediaSurface.useEffect": ()=>v.removeEventListener('canplay', tryPlay)
            })["MediaSurface.useEffect"];
        }
    }["MediaSurface.useEffect"], [
        showVideo,
        playing
    ]);
    const hasPoster = Boolean(preview.poster);
    const useFallback = !hasPoster || posterLoadFailed;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: approachRef,
        className: "plugins-home__media",
        onMouseEnter: ()=>setHovering(true),
        onMouseLeave: ()=>setHovering(false),
        children: [
            inView && preview.poster && !posterLoadFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "plugins-home__media-img",
                src: preview.poster,
                alt: `${pluginTitle} preview`,
                loading: "lazy",
                decoding: "async",
                referrerPolicy: "no-referrer",
                onError: ()=>setPosterLoadFailed(true)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this) : useFallback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFallback, {
                pluginTitle: pluginTitle
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `plugins-home__media-skeleton${inView ? ' is-active' : ''}`,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this),
            showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                className: "plugins-home__media-video",
                src: preview.videoUrl ?? undefined,
                poster: preview.poster ?? undefined,
                autoPlay: true,
                muted: true,
                playsInline: true,
                loop: true,
                // Tiered preload so scroll-in is instant without saturating the
                // network on first paint. In the wide mount margin: `metadata` (moov +
                // first frame off the +faststart header). Once `approaching` (or
                // hovering): `auto`, warming the whole clip into the HTTP cache a row
                // or two ahead so it plays without a buffering beat. Hover-only video
                // templates stay `none` until hovered.
                preload: approaching || hovering ? 'auto' : idlePlays ? 'metadata' : 'none',
                // Look like an inert iframe thumbnail: no native controls or PiP, and
                // clicks fall through to the card (open detail) instead of the video.
                disablePictureInPicture: true,
                tabIndex: -1,
                "aria-hidden": true,
                style: {
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(MediaSurface, "hTlZI78rjlHBW0v+dWirS98idV0=");
_c = MediaSurface;
function MediaFallback({ pluginTitle }) {
    const trimmed = pluginTitle.trim();
    const glyph = String.fromCodePoint(trimmed.codePointAt(0) ?? 0x2022).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-home__media-fallback",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "plugins-home__media-fallback-glyph",
            children: glyph
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c1 = MediaFallback;
var _c, _c1;
__turbopack_context__.k.register(_c, "MediaSurface");
__turbopack_context__.k.register(_c1, "MediaFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/cards/TextSurface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Fallback preview surface — used by scenario plugins without any
// declared preview material (no `od.preview`, no example outputs).
//
// We render a typographic patch with the plugin's first-letter
// glyph centered over a soft gradient. Visually quiet so it
// recedes next to media-rich tiles in the same grid.
__turbopack_context__.s([
    "TextSurface",
    ()=>TextSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TextSurface({ pluginTitle }) {
    const trimmed = pluginTitle.trim();
    const glyph = (trimmed.codePointAt(0) ?? 0x2022) === 0x2022 ? '·' : String.fromCodePoint(trimmed.codePointAt(0) ?? 0x2022).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plugins-home__text-surface",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "plugins-home__text-glyph",
            children: glyph
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/TextSurface.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/TextSurface.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = TextSurface;
var _c;
__turbopack_context__.k.register(_c, "TextSurface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreviewSurface",
    ()=>PreviewSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Switchboard component that renders the right preview surface
// for a plugin card based on the inferred preview kind.
//
// The surface is the visual hero of every card. It lazy-mounts
// expensive content (iframes, network images, video poll loops)
// via IntersectionObserver so a 350-plugin gallery does not
// hammer the daemon on first paint. The text-fallback variant
// short-circuits the lazy mount because it has no off-screen cost.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$DesignSystemSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/cards/DesignSystemSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$HtmlSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/cards/HtmlSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$MediaSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/cards/MediaSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$TextSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/cards/TextSurface.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function PreviewSurface({ pluginId, pluginTitle, preview, eager = false }) {
    _s();
    const usesBakedClipKeepalive = preview.kind === 'media' && preview.mediaType === 'video' && preview.loopHoldMs != null;
    // Visibility zones:
    //  - `inView` (tight): mount cheap-but-live content — iframes, design surfaces.
    //    Kept tight so a 350-plugin gallery never spins up dozens of live iframes.
    //  - `mediaReady` (medium): fetch cheap media posters a little earlier than
    //    live content, without widening iframe/design-system work.
    //  - `keep` (wide): keep the <video> + poster MOUNTED across a few screens, so
    //    scrolling away and back doesn't remount + reload the clip. The bytes are
    //    HTTP-cached (immutable), but a fresh <video> still re-fetches metadata and
    //    re-decodes the first frame, which reads as a load every scroll-back.
    //  - `visible` (no margin): only DECODE/play while truly on screen, so the
    //    kept-mounted off-screen clips stay paused on their poster instead of all
    //    running simultaneous decodes.
    const { ref: nearRef, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        rootMargin: eager ? '480px' : '120px',
        once: false
    });
    const { ref: mediaRef, inView: mediaReady } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        rootMargin: eager ? '720px' : '360px',
        once: false
    });
    const { ref: keepRef, inView: keep } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        rootMargin: eager ? '1800px' : '1500px',
        once: false
    });
    const { ref: visibleRef, inView: visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        rootMargin: '0px',
        once: false
    });
    // The prefetch zone (warm the full clip a row ahead) lives inside MediaSurface
    // so only baked-clip cards pay for that observer — html/design/text/plain-video
    // tiles can never upgrade `preload`, so they must not rerender on its threshold.
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PreviewSurface.useCallback[setRef]": (node)=>{
            nearRef.current = node;
            mediaRef.current = node;
            keepRef.current = node;
            visibleRef.current = node;
        }
    }["PreviewSurface.useCallback[setRef]"], [
        nearRef,
        mediaRef,
        keepRef,
        visibleRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setRef,
        className: `plugins-home__preview plugins-home__preview--${preview.kind}`,
        "data-preview-kind": preview.kind,
        children: preview.kind === 'media' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$MediaSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaSurface"], {
            preview: preview,
            pluginTitle: pluginTitle,
            inView: usesBakedClipKeepalive ? keep : mediaReady,
            visible: visible
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this) : preview.kind === 'html' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$HtmlSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HtmlSurface"], {
            preview: preview,
            pluginId: pluginId,
            pluginTitle: pluginTitle,
            inView: inView,
            eager: eager
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx",
            lineNumber: 84,
            columnNumber: 9
        }, this) : preview.kind === 'design' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$DesignSystemSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignSystemSurface"], {
            preview: preview,
            inView: inView
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx",
            lineNumber: 92,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$TextSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSurface"], {
            pluginTitle: pluginTitle
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx",
            lineNumber: 94,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(PreviewSurface, "Se5wH08qjD9oRGkyaxbzebN21Go=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = PreviewSurface;
var _c;
__turbopack_context__.k.register(_c, "PreviewSurface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/visualScore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Visual-appeal score for plugin home gallery ordering.
//
// The home grid wants the most striking, browsable plugins in the
// first viewport so users immediately see "wow, this thing has
// real content". Without this score the grid was sorted by raw
// daemon order (alphabetical inside each source bucket), which
// surfaced sleepy text-only scenarios above cinematic decks.
//
// The score is a deterministic linear sum of signals already
// present on the manifest:
//
//   featured flag/rank                     → +1000+ (curator pick wins)
//   has video preview                      →  +700  (motion is rare; lead with it)
//   has image poster                       →  +500
//   has both video + poster                →  +200  (extra polish bonus)
//   surface === image  (image template)    →  +400
//   surface === video  (video template)    →  +400
//   has exampleOutputs[]   (rich html)     →  +320
//   mode === deck                          →  +280
//   mode === design-system                 →  +260
//   mode === prototype-desktop / mobile    →  +180
//   has od.preview.entry                   →   +90
//   ships rich tags (>= 3 non-noise)       →   +30
//   author name set                        →   +20
//   well-curated description (>= 60 chars) →   +15
//   penalty: kind === atom                 →  -200  (atoms never reach the
//                                                    grid, but defensive)
//   penalty: kind === bundle               →   -50  (less interesting hero)
//
// We deliberately avoid scoring trust tier — community plugins
// should be able to bubble up if their preview is great. Trust is
// surfaced as a chip in the card chrome instead.
__turbopack_context__.s([
    "pluginVisualScore",
    ()=>pluginVisualScore,
    "sortByVisualAppeal",
    ()=>sortByVisualAppeal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$curatedPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/curatedPriority.ts [app-client] (ecmascript)");
;
const NOISE_TAGS = new Set([
    'first-party',
    'third-party',
    'phase-1',
    'phase-7',
    'untitled',
    'plugin'
]);
function readPreview(record) {
    const od = record.manifest?.od;
    if (!od || typeof od.preview !== 'object' || od.preview === null) return null;
    return od.preview;
}
function exampleOutputCount(record) {
    const od = record.manifest?.od;
    const list = od?.useCase?.exampleOutputs;
    return Array.isArray(list) ? list.length : 0;
}
function modeOf(record) {
    const od = record.manifest?.od;
    return typeof od?.mode === 'string' ? od.mode.toLowerCase() : '';
}
function surfaceOf(record) {
    const od = record.manifest?.od;
    return typeof od?.surface === 'string' ? od.surface.toLowerCase() : '';
}
function kindOf(record) {
    const od = record.manifest?.od;
    return typeof od?.kind === 'string' ? od.kind.toLowerCase() : '';
}
function featuredRank(record) {
    const od = record.manifest?.od ?? {};
    if (od.featured === true) return 0;
    if (typeof od.featured !== 'number' || !Number.isFinite(od.featured)) return null;
    return Math.max(0, od.featured);
}
function richTagCount(record) {
    const tags = record.manifest?.tags ?? [];
    return tags.filter((t)=>{
        const slug = String(t).toLowerCase();
        return slug && !NOISE_TAGS.has(slug);
    }).length;
}
function pluginVisualScore(record) {
    let score = 0;
    const rank = featuredRank(record);
    if (rank !== null) score += 1000 + Math.max(0, 100 - rank);
    const preview = readPreview(record);
    const hasPoster = preview && (typeof preview.poster === 'string' || typeof preview.gif === 'string');
    const hasVideo = preview && typeof preview.video === 'string';
    if (hasVideo) score += 700;
    if (hasPoster) score += 500;
    if (hasVideo && hasPoster) score += 200;
    const surface = surfaceOf(record);
    if (surface === 'image') score += 400;
    if (surface === 'video') score += 400;
    const examples = exampleOutputCount(record);
    if (examples > 0) score += 320 + Math.min(examples - 1, 4) * 12;
    const mode = modeOf(record);
    if (mode === 'deck') score += 280;
    else if (mode === 'design-system') score += 260;
    else if (mode === 'prototype-desktop' || mode === 'prototype-mobile') {
        score += 180;
    } else if (mode === 'live') score += 220;
    if (preview && typeof preview.entry === 'string') score += 90;
    const tagCount = richTagCount(record);
    if (tagCount >= 3) score += 30;
    const author = record.manifest?.author?.name;
    if (typeof author === 'string' && author.trim().length > 0) score += 20;
    const description = record.manifest?.description ?? '';
    if (description.length >= 60) score += 15;
    const kind = kindOf(record);
    if (kind === 'atom') score -= 200;
    else if (kind === 'bundle') score -= 50;
    return score;
}
function sortByVisualAppeal(records) {
    const annotated = records.map((r, idx)=>({
            record: r,
            curatedPriority: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$curatedPriority$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curatedPluginPriority"])(r),
            rank: featuredRank(r),
            score: pluginVisualScore(r),
            idx
        }));
    annotated.sort((a, b)=>{
        const aCurated = a.curatedPriority !== null;
        const bCurated = b.curatedPriority !== null;
        if (aCurated || bCurated) {
            if (aCurated && !bCurated) return -1;
            if (!aCurated && bCurated) return 1;
            if (a.curatedPriority !== b.curatedPriority) {
                return (a.curatedPriority ?? 0) - (b.curatedPriority ?? 0);
            }
        }
        const aFeatured = a.rank !== null;
        const bFeatured = b.rank !== null;
        if (aFeatured || bFeatured) {
            if (aFeatured && !bFeatured) return -1;
            if (!aFeatured && bFeatured) return 1;
            if (a.rank !== b.rank) return (a.rank ?? 0) - (b.rank ?? 0);
        }
        if (b.score !== a.score) return b.score - a.score;
        const aTitle = a.record.title || a.record.id;
        const bTitle = b.record.title || b.record.id;
        const cmp = aTitle.localeCompare(bTitle);
        if (cmp !== 0) return cmp;
        return a.idx - b.idx;
    });
    return annotated.map((a)=>a.record);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/preview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Preview-kind classifier for the plugins-home gallery.
//
// Each card variant in the home gallery wants different content
// in its hero region:
//   - `media`  → poster image (image-template plugins) or video
//                poster with optional hover-play (video-template)
//   - `html`   → sandboxed iframe rendering the plugin's example
//                output / preview entry (examples + scenarios that
//                ship a `od.preview.entry` or `exampleOutputs[]`)
//   - `design` → design-system showcase thumbnail, falling back to
//                a stylized brand patch when no showcase ref exists
//   - `text`   → fallback layout (other scenario plugins, atoms
//                that slip through the visiblePlugins filter, …)
//
// Keeping the classifier in its own pure module lets the renderer
// branch on a single discriminator and lets the unit tests assert
// classification without touching React.
__turbopack_context__.s([
    "inferPluginPreview",
    ()=>inferPluginPreview
]);
function readPreview(record) {
    const od = record.manifest?.od;
    if (!od || typeof od.preview !== 'object' || od.preview === null) return null;
    return od.preview;
}
// Pre-baked hover-pan clip attached by the daemon (scripts/bake-plugin-previews.mjs),
// kept separate from `od.preview` so only gallery tiles use it.
function readBakedPreview(record) {
    const od = record.manifest?.od;
    const b = od?.bakedPreview;
    if (!b || typeof b !== 'object') return null;
    const { poster, video, holdMs } = b;
    if (typeof poster !== 'string' || typeof video !== 'string') return null;
    return {
        poster,
        video,
        holdMs: typeof holdMs === 'number' ? holdMs : null
    };
}
function readExamples(record) {
    const od = record.manifest?.od;
    const list = od?.useCase?.exampleOutputs;
    if (!Array.isArray(list)) return [];
    return list;
}
function exampleStem(entry) {
    if (typeof entry.path !== 'string') return null;
    const segments = entry.path.split(/[\\/]/).filter(Boolean);
    const base = segments[segments.length - 1] ?? '';
    const stem = base.replace(/\.[^.]+$/, '');
    return stem || null;
}
function isDesignSystemPlugin(record) {
    const od = record.manifest?.od;
    if (typeof od?.mode === 'string' && od.mode.toLowerCase() === 'design-system') {
        return true;
    }
    const tags = record.manifest?.tags ?? [];
    return tags.some((t)=>t.toLowerCase() === 'design-system');
}
function designSystemRef(record) {
    const od = record.manifest?.od;
    const ref = od?.context?.designSystem?.ref;
    return typeof ref === 'string' && ref.length > 0 ? ref : null;
}
// Synthetic colour swatches derived from the plugin id so cards stay
// visually distinct without dragging in the real DESIGN.md content.
// Hue is pinned per-plugin (stable across renders) but lightness /
// saturation rotate so each design-system tile reads as a brand
// patch rather than a random gradient.
function deriveSwatches(record) {
    const seed = hashString(record.id);
    const hue = seed % 360;
    return [
        `hsl(${hue}, 78%, 56%)`,
        `hsl(${(hue + 32) % 360}, 64%, 48%)`,
        `hsl(${(hue + 200) % 360}, 36%, 22%)`
    ];
}
function hashString(value) {
    let h = 2166136261;
    for(let i = 0; i < value.length; i += 1){
        h ^= value.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
}
function brandLabel(record) {
    const title = record.title ?? record.manifest?.title ?? record.id;
    // Strip the tooling prefix so design-system plugin titles ("Airbnb",
    // "Cursor", "Apple") read as bare brand names on the tile. Falls back
    // to the raw title when there's no decoration.
    return title.replace(/^design[\s-]?system[:\s-]*/i, '').trim() || title;
}
function inferPluginPreview(record, opts) {
    // Gallery tiles opt in to a pre-baked hover-pan clip (cheap thumbnail) when
    // the daemon has attached one. Everything else — crucially the detail modal —
    // falls through to the real `od.preview`, so opening a plugin still shows the
    // live, interactive page rather than the baked video.
    if (opts?.preferBaked) {
        const baked = readBakedPreview(record);
        if (baked) {
            return {
                kind: 'media',
                mediaType: 'video',
                poster: baked.poster,
                videoUrl: baked.video,
                audioUrl: null,
                imageOnly: false,
                loopHoldMs: baked.holdMs
            };
        }
    }
    const preview = readPreview(record);
    const examples = readExamples(record);
    if (preview) {
        const t = typeof preview.type === 'string' ? preview.type.toLowerCase() : '';
        const poster = typeof preview.poster === 'string' ? preview.poster : null;
        const video = typeof preview.video === 'string' ? preview.video : null;
        const gif = typeof preview.gif === 'string' ? preview.gif : null;
        const audio = typeof preview.audio === 'string' ? preview.audio : null;
        const entry = typeof preview.entry === 'string' ? preview.entry : null;
        if (t === 'video' || video) {
            const holdMs = typeof preview.holdMs === 'number' ? preview.holdMs : null;
            return {
                kind: 'media',
                mediaType: 'video',
                poster: poster ?? gif ?? null,
                videoUrl: video,
                audioUrl: null,
                imageOnly: !video,
                loopHoldMs: holdMs
            };
        }
        if (t === 'audio' || audio) {
            return {
                kind: 'media',
                mediaType: 'audio',
                poster: poster ?? gif ?? null,
                videoUrl: null,
                audioUrl: audio,
                imageOnly: false
            };
        }
        if (t === 'image' || poster || gif) {
            return {
                kind: 'media',
                mediaType: 'image',
                poster: poster ?? gif ?? null,
                videoUrl: null,
                audioUrl: null,
                imageOnly: true
            };
        }
        if (t === 'html' && entry) {
            return {
                kind: 'html',
                src: `/api/plugins/${encodeURIComponent(record.id)}/preview`,
                label: entry.replace(/^\.\//, '').split(/[\\/]/).pop() ?? entry,
                source: 'preview'
            };
        }
    }
    if (examples.length > 0) {
        const stem = exampleStem(examples[0]);
        if (stem) {
            const title = typeof examples[0].title === 'string' ? examples[0].title : stem;
            return {
                kind: 'html',
                src: `/api/plugins/${encodeURIComponent(record.id)}/example/${encodeURIComponent(stem)}`,
                label: title,
                source: 'example',
                exampleStem: stem
            };
        }
    }
    if (isDesignSystemPlugin(record)) {
        return {
            kind: 'design',
            brand: brandLabel(record),
            designSystemId: designSystemRef(record),
            swatches: deriveSwatches(record)
        };
    }
    return {
        kind: 'text'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/subfacetLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Localized display labels for the curated facet SUBCATEGORIES
// (`./facets.ts`). The taxonomy table keeps English labels as the
// canonical data (slugs and grouping are derived from it for filtering),
// while every rendering surface — the Home composer sub-type rail and the
// Community subcategory pills — resolves the visible text through the
// typed i18n dict. Unknown slugs (a newly added facet before its key
// lands) fall back to the table's English label.
__turbopack_context__.s([
    "pluginSubfacetLabel",
    ()=>pluginSubfacetLabel
]);
function pluginSubfacetLabel(slug, fallback, t) {
    switch(slug){
        case 'business-dashboards':
            return t('pluginsHome.subfacet.business-dashboards');
        case 'app-prototypes':
            return t('pluginsHome.subfacet.app-prototypes');
        case 'landing-marketing':
            return t('pluginsHome.subfacet.landing-marketing');
        case 'developer-tools':
            return t('pluginsHome.subfacet.developer-tools');
        case 'docs-reports':
            return t('pluginsHome.subfacet.docs-reports');
        case 'brand-design':
            return t('pluginsHome.subfacet.brand-design');
        case 'pitch-business':
            return t('pluginsHome.subfacet.pitch-business');
        case 'course-training':
            return t('pluginsHome.subfacet.course-training');
        case 'reports-briefings':
            return t('pluginsHome.subfacet.reports-briefings');
        case 'product-sales':
            return t('pluginsHome.subfacet.product-sales');
        case 'engineering-talks':
            return t('pluginsHome.subfacet.engineering-talks');
        case 'creative-decks':
            return t('pluginsHome.subfacet.creative-decks');
        case 'ui-product-mockups':
            return t('pluginsHome.subfacet.ui-product-mockups');
        case 'brand-visuals':
            return t('pluginsHome.subfacet.brand-visuals');
        case 'storyboards-motion-refs':
            return t('pluginsHome.subfacet.storyboards-motion-refs');
        case 'social-content':
            return t('pluginsHome.subfacet.social-content');
        case 'avatar-portrait':
            return t('pluginsHome.subfacet.avatar-portrait');
        case 'illustration-style':
            return t('pluginsHome.subfacet.illustration-style');
        case 'motion-effects':
            return t('pluginsHome.subfacet.motion-effects');
        case 'social-short-form':
            return t('pluginsHome.subfacet.social-short-form');
        case 'marketing-product':
            return t('pluginsHome.subfacet.marketing-product');
        case 'data-explainers':
            return t('pluginsHome.subfacet.data-explainers');
        case 'cinematic-story':
            return t('pluginsHome.subfacet.cinematic-story');
        default:
            return fallback;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/PluginCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PluginCard",
    ()=>PluginCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Single plugin card rendered inside the plugins-home grid.
//
// Each card is a hero preview tile + a small metadata footer. The
// hero region adapts to the plugin type (image / video poster,
// sandboxed HTML iframe, design-system patch, plain text) — the
// classifier in `./preview.ts` picks the right surface and the
// shared `PreviewSurface` switchboard mounts it lazily so a
// 350-tile grid stays cheap.
//
// Hover reveals an overlay with the plugin description, tag chips,
// and primary actions (Use / Details), so the resting state stays
// gallery-clean while the active state surfaces everything the user
// needs to commit.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/components/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$visually$2d$hidden$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/src/visually-hidden.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/TrustBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$PreviewSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/cards/PreviewSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/localization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/preview.ts [app-client] (ecmascript)");
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
const MAX_VISIBLE_TAGS = 3;
function PluginCard({ record, isActive, isPending, pendingAny, pendingShareAction = null, isFeatured, isSaved, onSave, onUse, onOpenDetails, onShareAction, layout = 'rich' }) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"])();
    const [useMenuOpen, setUseMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tiles prefer the cheap pre-baked hover-pan clip; the detail modal still
    // opens the live interactive page (it calls inferPluginPreview without this).
    const preview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginCard.useMemo[preview]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferPluginPreview"])(record, {
                preferBaked: true
            })
    }["PluginCard.useMemo[preview]"], [
        record
    ]);
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginTitle"])(locale, record);
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$localization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePluginDescription"])(locale, record);
    const tags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PluginCard.useMemo[tags]": ()=>(record.manifest?.tags ?? []).filter({
                "PluginCard.useMemo[tags]": (t)=>!NOISE_TAGS.has(t.toLowerCase())
            }["PluginCard.useMemo[tags]"]).slice(0, MAX_VISIBLE_TAGS)
    }["PluginCard.useMemo[tags]"], [
        record.manifest?.tags
    ]);
    const hasQuery = Boolean(record.manifest?.od?.useCase?.query);
    const sharePendingAction = pendingShareAction?.pluginId === record.id ? pendingShareAction.action : null;
    const shareBusy = sharePendingAction !== null;
    const useDisabled = isPending || pendingAny || shareBusy;
    function pickUseAction(action) {
        setUseMenuOpen(false);
        onUse(record, action);
    }
    if (layout === 'gallery') {
        // Live-preview tile: a macOS-window-style bar (status dot + plugin
        // name) over an eagerly-rendered example.html iframe. The whole tile
        // opens the detail surface.
        // Decks render a fixed 16:9 stage; tag them so the gallery preview uses a
        // 16:9 frame instead of the tall scroll-preview viewport (which would
        // letterbox the stage and show a dark band above/below the slide).
        const odMode = record.manifest?.od?.mode;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            role: "listitem",
            className: [
                'plugins-home__card',
                'plugins-home__card--gallery',
                `plugins-home__card--${preview.kind}`,
                isActive ? 'is-active' : '',
                isFeatured ? 'is-featured' : ''
            ].filter(Boolean).join(' '),
            "data-plugin-id": record.id,
            "data-preview-kind": preview.kind,
            ...typeof odMode === 'string' ? {
                'data-od-mode': odMode
            } : {},
            ...isFeatured ? {
                'data-featured': 'true'
            } : {},
            // Mouse convenience: clicking anywhere on the tile opens details.
            // Keyboard/AT users get a real, announced control via the title
            // button below — the tile itself stays a non-interactive listitem
            // so screen readers don't announce a bare "listitem" as actionable.
            onClick: ()=>onOpenDetails(record),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plugins-home__gallery-bar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "plugins-home__gallery-dot",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "plugins-home__gallery-name",
                            title: title,
                            "aria-label": `Open ${title} details`,
                            onClick: (event)=>{
                                event.stopPropagation();
                                onOpenDetails(record);
                            },
                            // The accessible, focusable control that opens the detail modal;
                            // also the e2e/visual hook equivalent to the rich card's Details.
                            "data-testid": `plugins-home-details-${record.id}`,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plugins-home__gallery-frame",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$PreviewSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewSurface"], {
                        pluginId: record.id,
                        pluginTitle: title,
                        preview: preview,
                        eager: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        role: "listitem",
        className: [
            'plugins-home__card',
            `plugins-home__card--${preview.kind}`,
            onShareAction ? 'plugins-home__card--shareable' : '',
            isActive ? 'is-active' : '',
            isFeatured ? 'is-featured' : ''
        ].filter(Boolean).join(' '),
        "data-plugin-id": record.id,
        "data-preview-kind": preview.kind,
        ...isFeatured ? {
            'data-featured': 'true'
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$cards$2f$PreviewSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewSurface"], {
                pluginId: record.id,
                pluginTitle: title,
                preview: preview
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__card-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-home__card-overlay-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                                trust: record.trust,
                                variant: "overlay"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            isFeatured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugins-home__overlay-featured",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "star",
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-home__card-overlay-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plugins-home__overlay-title",
                                title: title,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "plugins-home__overlay-desc",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this) : null,
                            tags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-home__overlay-tags",
                                children: tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "plugins-home__overlay-tag",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plugins-home__overlay-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-home__overlay-actions-main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-home__action plugins-home__action--secondary",
                                        onClick: ()=>onOpenDetails(record),
                                        "aria-label": `View details for ${title}`,
                                        "data-testid": `plugins-home-details-${record.id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "eye",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Details"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `plugins-home__use-menu${hasQuery ? ' has-options' : ''}`,
                                        onBlur: (event)=>{
                                            const nextTarget = event.relatedTarget;
                                            if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                                                setUseMenuOpen(false);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "plugins-home__action plugins-home__action--primary plugins-home__use-main",
                                                onClick: ()=>pickUseAction('use'),
                                                disabled: useDisabled,
                                                "aria-busy": isPending ? 'true' : undefined,
                                                "data-testid": `plugins-home-use-${record.id}`,
                                                children: isPending ? 'Applying…' : 'Use'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            hasQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "plugins-home__action plugins-home__action--primary plugins-home__use-toggle",
                                                        onClick: ()=>setUseMenuOpen((open)=>!open),
                                                        disabled: useDisabled,
                                                        "aria-haspopup": "menu",
                                                        "aria-expanded": useMenuOpen,
                                                        "aria-label": `Choose how to use ${title}`,
                                                        "data-testid": `plugins-home-use-menu-${record.id}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "chevron-down",
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    useMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "plugins-home__use-menu-list",
                                                        role: "menu",
                                                        "aria-label": `Use options for ${title}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                role: "menuitem",
                                                                className: "plugins-home__use-menu-item",
                                                                onMouseDown: (event)=>event.preventDefault(),
                                                                onClick: ()=>pickUseAction('use'),
                                                                "data-testid": `plugins-home-use-context-${record.id}`,
                                                                children: "Use"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                role: "menuitem",
                                                                className: "plugins-home__use-menu-item",
                                                                onMouseDown: (event)=>event.preventDefault(),
                                                                onClick: ()=>pickUseAction('use-with-query'),
                                                                "data-testid": `plugins-home-use-with-query-${record.id}`,
                                                                children: "Use with query"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            onShareAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plugins-home__share-actions",
                                "aria-label": `Share ${title}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-home__action plugins-home__action--secondary plugins-home__action--compact",
                                        onClick: ()=>onShareAction(record, 'publish-github'),
                                        disabled: pendingAny || shareBusy,
                                        "aria-busy": sharePendingAction === 'publish-github' ? 'true' : undefined,
                                        "aria-label": `Publish ${title} as a GitHub repository`,
                                        title: "Publish plugin as a GitHub repository",
                                        "data-testid": `plugins-home-publish-github-${record.id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: sharePendingAction === 'publish-github' ? 'spinner' : 'github',
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: sharePendingAction === 'publish-github' ? 'Starting…' : 'Publish'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "plugins-home__action plugins-home__action--secondary plugins-home__action--compact",
                                        onClick: ()=>onShareAction(record, 'contribute-open-design'),
                                        disabled: pendingAny || shareBusy,
                                        "aria-busy": sharePendingAction === 'contribute-open-design' ? 'true' : undefined,
                                        "aria-label": `Contribute ${title} to Open Design`,
                                        title: "Contribute plugin to Open Design with a pull request",
                                        "data-testid": `plugins-home-contribute-open-design-${record.id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: sharePendingAction === 'contribute-open-design' ? 'spinner' : 'share',
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: sharePendingAction === 'contribute-open-design' ? 'Starting…' : 'Contribute'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plugins-home__card-foot",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: [
                            'plugins-home__card-save',
                            isSaved ? 'is-saved' : ''
                        ].filter(Boolean).join(' '),
                        onClick: ()=>onSave(record),
                        "aria-pressed": isSaved,
                        "aria-label": `${isSaved ? 'Saved' : 'Save'} ${title}`,
                        title: isSaved ? 'Saved' : 'Save',
                        "data-testid": `plugins-home-save-${record.id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: isSaved ? 'check' : 'star',
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$src$2f$visually$2d$hidden$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
                                children: isSaved ? 'Saved' : 'Save'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plugins-home__card-title",
                        title: title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "plugins-home__card-title-text",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$TrustBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustBadge"], {
                        trust: record.trust
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/plugins-home/PluginCard.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(PluginCard, "krGNQl+iVrTCR5fgctKTghbvPUc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"]
    ];
});
_c = PluginCard;
const NOISE_TAGS = new Set([
    'first-party',
    'third-party',
    'phase-1',
    'phase-7',
    'untitled',
    'plugin'
]);
var _c;
__turbopack_context__.k.register(_c, "PluginCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/usePluginFacets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePluginFacets",
    ()=>usePluginFacets
]);
// Faceted categorisation hook for the Plugins home section.
//
// Two-level starter model: the top row is the artifact kind
// (Prototype / Slides / Image / Video / HyperFrames / Audio). Prototype,
// Slides, Image, and Video expose scene buckets from the prompt-taxonomy
// analysis; HyperFrames and Audio stay flat.
//
// A small "Saved" toggle sits orthogonally to the category row —
// when active it overrides the category selection and just shows
// the plugins saved by the user. We intentionally make Saved
// override rather than AND-compose so a saved pick is never
// accidentally hidden behind a still-selected category pill.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$facets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/facets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$visualScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/plugins-home/visualScore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const EMPTY_SELECTION = {
    category: null,
    subcategory: null
};
function usePluginFacets({ plugins, savedPluginIds, preferDefaultFacet = true, locale }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_SELECTION);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Apply the preferred default selection once, on the first render that
    // sees a non-empty catalog. Using a flag (instead of a useState lazy
    // initializer) handles the realistic case where `args.plugins` is
    // empty at first paint and arrives a tick later.
    const [bootstrapped, setBootstrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Atoms are infrastructure pieces (`code-import`, `patch-edit`) that
    // are not user-facing on the home grid; the original section already
    // filtered them out and we preserve that contract. We immediately
    // sort by visual-appeal score so the first viewport leads with the
    // cinematic decks / image / video templates rather than alphabetical
    // bundled noise. Featured plugins get a +1000 score boost inside the
    // sort so curator picks stay anchored to the front of every category view.
    const visiblePlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePluginFacets.useMemo[visiblePlugins]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$visualScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByVisualAppeal"])(plugins.filter({
                "usePluginFacets.useMemo[visiblePlugins]": (p)=>p.manifest?.od?.kind !== 'atom'
            }["usePluginFacets.useMemo[visiblePlugins]"]))
    }["usePluginFacets.useMemo[visiblePlugins]"], [
        plugins
    ]);
    const savedList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePluginFacets.useMemo[savedList]": ()=>visiblePlugins.filter({
                "usePluginFacets.useMemo[savedList]": (plugin)=>savedPluginIds?.has(plugin.id)
            }["usePluginFacets.useMemo[savedList]"])
    }["usePluginFacets.useMemo[savedList]"], [
        savedPluginIds,
        visiblePlugins
    ]);
    const catalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePluginFacets.useMemo[catalog]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$facets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFacetCatalog"])(visiblePlugins)
    }["usePluginFacets.useMemo[catalog]"], [
        visiblePlugins
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePluginFacets.useEffect": ()=>{
            if (bootstrapped) return;
            if (visiblePlugins.length === 0) return;
            if (!preferDefaultFacet) {
                setBootstrapped(true);
                return;
            }
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$facets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDefaultSelection"])(catalog);
            if (next.category !== null) {
                setSelection(next);
            }
            setBootstrapped(true);
        }
    }["usePluginFacets.useEffect"], [
        bootstrapped,
        preferDefaultFacet,
        visiblePlugins.length,
        catalog
    ]);
    // The visual-appeal sort is applied at `visiblePlugins` derivation
    // (above), so any downstream `applyFacetSelection` slice preserves
    // the ranking. We do not re-sort here because filter + featured
    // override should both remain stable across selections.
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePluginFacets.useMemo[filtered]": ()=>{
            const base = mode === 'saved' ? savedList : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$facets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyFacetSelection"])(visiblePlugins, selection);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$plugins$2d$home$2f$facets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterByQuery"])(base, query, locale);
        }
    }["usePluginFacets.useMemo[filtered]"], [
        mode,
        savedList,
        visiblePlugins,
        selection,
        query,
        locale
    ]);
    function pickCategory(slug) {
        if (mode === 'saved') setMode('all');
        setSelection((prev)=>({
                category: prev.category === slug ? null : slug,
                subcategory: null
            }));
    }
    function pickSubcategory(slug) {
        if (mode === 'saved') setMode('all');
        setSelection((prev)=>({
                ...prev,
                subcategory: prev.subcategory === slug ? null : slug
            }));
    }
    function clearFacets() {
        setSelection(EMPTY_SELECTION);
        setQuery('');
        // Saved overrides the facet slice, so the empty-state "Clear
        // filters" CTA also has to leave Saved mode — otherwise clicking
        // it from a Saved + zero-match view just re-renders the same
        // empty state and the user has no one-click escape back to the
        // full catalog.
        setMode('all');
    }
    const hasActiveFacet = selection.category !== null || selection.subcategory !== null || query.trim().length > 0;
    return {
        visiblePlugins,
        savedList,
        filtered,
        catalog,
        selection,
        pickCategory,
        pickSubcategory,
        clearFacets,
        hasActiveFacet,
        mode,
        setMode,
        query,
        setQuery,
        totalVisible: visiblePlugins.length
    };
}
_s(usePluginFacets, "B9x7iE5LxO2cln6Q8QxRXgbuUPQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/plugins-home/savedPlugins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readSavedPluginIds",
    ()=>readSavedPluginIds,
    "useSavedPluginIds",
    ()=>useSavedPluginIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const SAVED_PLUGIN_IDS_KEY = 'open-design:saved-plugin-ids';
const SAVED_PLUGIN_IDS_EVENT = 'open-design:saved-plugin-ids-changed';
function isBrowserStorageAvailable() {
    try {
        return ("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.localStorage !== 'undefined';
    } catch  {
        return false;
    }
}
function normalizePluginIds(value) {
    if (!Array.isArray(value)) return [];
    const seen = new Set();
    for (const item of value){
        if (typeof item !== 'string') continue;
        const id = item.trim();
        if (!id) continue;
        seen.add(id);
    }
    return [
        ...seen
    ].sort();
}
function readSavedPluginIds() {
    if (!isBrowserStorageAvailable()) return new Set();
    try {
        return new Set(normalizePluginIds(JSON.parse(window.localStorage.getItem(SAVED_PLUGIN_IDS_KEY) ?? '[]')));
    } catch  {
        return new Set();
    }
}
function writeSavedPluginIds(ids) {
    const next = normalizePluginIds([
        ...ids
    ]);
    if (!isBrowserStorageAvailable()) return next;
    window.localStorage.setItem(SAVED_PLUGIN_IDS_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent(SAVED_PLUGIN_IDS_EVENT, {
        detail: {
            ids: next
        }
    }));
    return next;
}
function useSavedPluginIds() {
    _s();
    const [savedPluginIds, setSavedPluginIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSavedPluginIds.useState": ()=>readSavedPluginIds()
    }["useSavedPluginIds.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSavedPluginIds.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const refresh = {
                "useSavedPluginIds.useEffect.refresh": ()=>setSavedPluginIds(readSavedPluginIds())
            }["useSavedPluginIds.useEffect.refresh"];
            const onSavedIdsChanged = {
                "useSavedPluginIds.useEffect.onSavedIdsChanged": (event)=>{
                    const detail = event.detail;
                    setSavedPluginIds(new Set(normalizePluginIds(detail?.ids)));
                }
            }["useSavedPluginIds.useEffect.onSavedIdsChanged"];
            const onStorage = {
                "useSavedPluginIds.useEffect.onStorage": (event)=>{
                    if (event.key === SAVED_PLUGIN_IDS_KEY) refresh();
                }
            }["useSavedPluginIds.useEffect.onStorage"];
            window.addEventListener(SAVED_PLUGIN_IDS_EVENT, onSavedIdsChanged);
            window.addEventListener('storage', onStorage);
            return ({
                "useSavedPluginIds.useEffect": ()=>{
                    window.removeEventListener(SAVED_PLUGIN_IDS_EVENT, onSavedIdsChanged);
                    window.removeEventListener('storage', onStorage);
                }
            })["useSavedPluginIds.useEffect"];
        }
    }["useSavedPluginIds.useEffect"], []);
    const savePluginId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSavedPluginIds.useCallback[savePluginId]": (id)=>{
            const cleanId = id.trim();
            if (!cleanId || !isBrowserStorageAvailable()) return 'unavailable';
            const current = readSavedPluginIds();
            if (current.has(cleanId)) {
                setSavedPluginIds(current);
                return 'already-saved';
            }
            current.add(cleanId);
            try {
                setSavedPluginIds(new Set(writeSavedPluginIds(current)));
                return 'saved';
            } catch  {
                return 'unavailable';
            }
        }
    }["useSavedPluginIds.useCallback[savePluginId]"], []);
    return {
        savedPluginIds,
        savePluginId
    };
}
_s(useSavedPluginIds, "WVhnhqO23pdzmpQpnkPoDhkI9/4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_plugins-home_090hsac._.js.map