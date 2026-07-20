(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/DesignBrowserPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BROWSER_USE_ACTION_TOTAL",
    ()=>BROWSER_USE_ACTION_TOTAL,
    "BROWSER_USE_CATEGORIES",
    ()=>BROWSER_USE_CATEGORIES,
    "DesignBrowserPanel",
    ()=>DesignBrowserPanel,
    "REFERENCE_GROUPS",
    ()=>REFERENCE_GROUPS,
    "REFERENCE_TOTAL",
    ()=>REFERENCE_TOTAL,
    "browserFileName",
    ()=>browserFileName,
    "browserUseActionById",
    ()=>browserUseActionById,
    "browserUsePrompt",
    ()=>browserUsePrompt,
    "faviconUrl",
    ()=>faviconUrl,
    "filterBrowserUseCategories",
    ()=>filterBrowserUseCategories,
    "filterReferenceGroups",
    ()=>filterReferenceGroups,
    "formatAddressDisplay",
    ()=>formatAddressDisplay,
    "formatAddressDisplayParts",
    ()=>formatAddressDisplayParts,
    "hostnameFromUrl",
    ()=>hostnameFromUrl,
    "isHistoryEntry",
    ()=>isHistoryEntry,
    "isHistoryUrl",
    ()=>isHistoryUrl,
    "labelFromUrl",
    ()=>labelFromUrl,
    "loadHistory",
    ()=>loadHistory,
    "normalizeBrowserAddress",
    ()=>normalizeBrowserAddress,
    "pageBriefMarkdown",
    ()=>pageBriefMarkdown,
    "referenceIconUrl",
    ()=>referenceIconUrl,
    "sameUrl",
    ()=>sameUrl,
    "saveHistory",
    ()=>saveHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$exports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/exports.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/comments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/design-browser-tools.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BoardComposerPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/BoardComposerPopover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewDrawOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/PreviewDrawOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RemixIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/RemixIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
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
function browserViewportIcon(viewport) {
    if (viewport === 'tablet') return 'tablet-line';
    if (viewport === 'mobile') return 'smartphone-line';
    return 'computer-line';
}
const BROWSER_USE_INPUT_KEYS = {
    none: 'browserUse.input.none',
    'kind: images|svgs|media|fonts, limit=200': 'browserUse.input.assetKind',
    'optional selector': 'browserUse.input.optionalSelector',
    'requirement, selector? optional': 'browserUse.input.requirementSelector',
    'selector? optional': 'browserUse.input.selectorOptional',
    'scale=1': 'browserUse.input.scaleOne',
    'selector, scale=2': 'browserUse.input.selectorScaleTwo',
    'columns=12, maxWidth=1200, gap=24': 'browserUse.input.gridOverlay',
    "selector='body'": 'browserUse.input.bodySelector',
    'url / domain / search terms': 'browserUse.input.navigate',
    selector: 'browserUse.input.selector',
    'selector, text': 'browserUse.input.selectorText',
    'pixels / top / bottom / page': 'browserUse.input.scroll',
    'command, timeoutMs=120000': 'browserUse.input.terminalRun',
    command: 'browserUse.input.command',
    'maxChars=8000': 'browserUse.input.maxChars'
};
function browserUseActionOutputKey(action) {
    return `browserUse.action.${action.id}.output`;
}
function browserUseActionInputKey(action) {
    return BROWSER_USE_INPUT_KEYS[action.input] ?? 'browserUse.input.custom';
}
function localizedBrowserUseInput(t, action) {
    const key = browserUseActionInputKey(action);
    return key === 'browserUse.input.custom' ? t(key, {
        input: action.input
    }) : t(key);
}
const EMPTY_URL = 'about:blank';
const DESIGN_BROWSER_PARTITION = 'persist:open-design-design-browser';
const HISTORY_LIMIT = 80;
const HISTORY_SUGGESTION_LIMIT = 20;
const EMPTY_PREVIEW_COMMENTS = [];
// Cap the resource-hint (`dns-prefetch`/`preconnect`) links we leave in <head>.
// Hovering/typing origins used to accumulate them and their Set entries forever.
const WARMED_ORIGIN_LIMIT = 32;
const warmedOrigins = new Map();
function browserHomeNavigationEntry() {
    return {
        title: 'Reference Board',
        url: EMPTY_URL
    };
}
function initialBrowserState(initialUrl, initialTitle) {
    const url = initialUrl?.trim() && isHistoryUrl(initialUrl.trim()) ? initialUrl.trim() : EMPTY_URL;
    if (url === EMPTY_URL) {
        return {
            addressValue: '',
            navigationIndex: 0,
            navigationStack: [
                browserHomeNavigationEntry()
            ],
            url
        };
    }
    const title = initialTitle?.trim() || labelFromUrl(url);
    return {
        addressValue: url,
        navigationIndex: 0,
        navigationStack: [
            {
                title,
                url
            }
        ],
        url
    };
}
const REFERENCE_GROUPS = [
    {
        id: 'inspiration',
        title: 'Inspiration',
        sites: [
            {
                label: 'Dribbble',
                url: 'https://dribbble.com/',
                detail: 'Design shots and UI inspiration.'
            },
            {
                label: 'Behance',
                url: 'https://www.behance.net/',
                detail: 'Creative portfolios and case studies.'
            },
            {
                label: 'Awwwards',
                url: 'https://www.awwwards.com/',
                detail: 'Award-winning website design.'
            },
            {
                label: 'Godly',
                url: 'https://godly.website/',
                detail: 'Curated modern web design.'
            },
            {
                label: 'Land-book',
                url: 'https://land-book.com/',
                detail: 'Landing page gallery and patterns.'
            }
        ]
    },
    {
        id: 'interfaces',
        title: 'Real Interfaces',
        sites: [
            {
                label: 'Mobbin',
                url: 'https://mobbin.com/',
                detail: 'Real app screens and UI patterns.'
            },
            {
                label: 'Screenlane',
                url: 'https://screenlane.com/',
                detail: 'Latest UI design patterns from apps.'
            },
            {
                label: 'Page Flows',
                url: 'https://pageflows.com/',
                detail: 'Real product user flows and onboarding.'
            },
            {
                label: 'UI Sources',
                url: 'https://www.uisources.com/',
                detail: 'Interaction patterns from top apps.'
            },
            {
                label: 'Collect UI',
                url: 'https://collectui.com/',
                detail: 'Daily UI collection by category.'
            }
        ]
    },
    {
        id: 'motion',
        title: 'Motion',
        sites: [
            {
                label: 'GSAP',
                url: 'https://gsap.com/',
                detail: 'Production animation engine and examples.'
            },
            {
                label: 'Animations.dev',
                url: 'https://animations.dev/',
                detail: 'Animation patterns and interaction examples.'
            },
            {
                label: 'Transitions',
                url: 'https://transitions.dev/',
                detail: 'Transition patterns for modern interfaces.'
            },
            {
                label: 'Motion Sites',
                url: 'https://motionsites.ai/',
                detail: 'High-end motion and interaction references.'
            },
            {
                label: 'Motion.page Showcase',
                url: 'https://motion.page/showcase/',
                detail: 'Scroll and timeline animation inspiration.'
            },
            {
                label: 'Animography',
                url: 'https://animography.net/',
                detail: 'Animated type and kinetic lettering.'
            },
            {
                label: 'React Bits Shiny Text',
                url: 'https://reactbits.dev/text-animations/shiny-text',
                detail: 'React text animation reference for shiny kinetic type.'
            }
        ]
    },
    {
        id: 'color',
        title: 'Color',
        sites: [
            {
                label: 'Coolors',
                url: 'https://coolors.co/',
                detail: 'Fast color palette generator.'
            },
            {
                label: 'Color Hunt',
                url: 'https://colorhunt.co/',
                detail: 'Curated color palettes.'
            },
            {
                label: 'Realtime Colors',
                url: 'https://www.realtimecolors.com/',
                detail: 'Preview palettes on a real UI.'
            },
            {
                label: 'Adobe Color',
                url: 'https://color.adobe.com/',
                detail: 'Color wheel and harmony rules.'
            },
            {
                label: 'Happy Hues',
                url: 'https://www.happyhues.co/',
                detail: 'Palettes shown in real context.'
            }
        ]
    },
    {
        id: 'type',
        title: 'Typography',
        sites: [
            {
                label: 'Google Fonts',
                url: 'https://fonts.google.com/',
                detail: 'Open-source font library.'
            },
            {
                label: 'Fontshare',
                url: 'https://www.fontshare.com/',
                detail: 'Quality fonts free for commercial use.'
            },
            {
                label: 'Typewolf',
                url: 'https://www.typewolf.com/',
                detail: 'Fonts in use and pairing guidance.'
            },
            {
                label: 'Fontpair',
                url: 'https://www.fontpair.co/',
                detail: 'Font pairing suggestions.'
            },
            {
                label: 'Fonts In Use',
                url: 'https://fontsinuse.com/',
                detail: 'Typography in real-world design.'
            }
        ]
    },
    {
        id: 'icons',
        title: 'Icons',
        sites: [
            {
                label: 'The SVG',
                url: 'https://thesvg.org/',
                detail: 'SVG assets and vector references.'
            },
            {
                label: 'SVG Logos',
                url: 'https://svglogos.dev/',
                detail: 'Clean SVG logos for product and brand mocks.'
            },
            {
                label: 'Lobe Icons',
                url: 'https://icons.lobehub.com/',
                detail: 'Product and AI-brand icons for interfaces.'
            },
            {
                label: 'Iconify',
                url: 'https://icon-sets.iconify.design/',
                detail: '200k+ open-source icons in one place.'
            },
            {
                label: 'Lucide',
                url: 'https://lucide.dev/',
                detail: 'Clean, consistent open icon set.'
            },
            {
                label: 'Heroicons',
                url: 'https://heroicons.com/',
                detail: 'Tailwind-made SVG icons.'
            },
            {
                label: 'SVG Repo',
                url: 'https://www.svgrepo.com/',
                detail: 'Free SVG vectors and icons.'
            }
        ]
    },
    {
        id: 'illustration',
        title: 'Illustration',
        sites: [
            {
                label: 'Storyset',
                url: 'https://storyset.com/',
                detail: 'Customizable vector illustrations.'
            },
            {
                label: 'unDraw',
                url: 'https://undraw.co/',
                detail: 'Open-source MIT illustrations.'
            },
            {
                label: 'Blush',
                url: 'https://blush.design/',
                detail: 'Mix-and-match illustrations.'
            },
            {
                label: 'Lummi',
                url: 'https://www.lummi.ai/',
                detail: 'Free AI-generated visuals.'
            },
            {
                label: 'Whirrls',
                url: 'https://www.whirrls.com/',
                detail: 'Hand-drawn image references.'
            },
            {
                label: 'World in Dots',
                url: 'https://www.worldindots.com/',
                detail: 'Dot-map and data-viz references.'
            }
        ]
    },
    {
        id: 'photography',
        title: 'Photography',
        sites: [
            {
                label: 'Unsplash',
                url: 'https://unsplash.com/',
                detail: 'Free high-resolution photos.'
            },
            {
                label: 'Pexels',
                url: 'https://www.pexels.com/',
                detail: 'Free stock photos and video.'
            },
            {
                label: 'Pixabay',
                url: 'https://pixabay.com/',
                detail: 'Royalty-free images and media.'
            },
            {
                label: 'Cosmos',
                url: 'https://www.cosmos.so/',
                detail: 'Visual discovery and mood boards.'
            }
        ]
    },
    {
        id: '3d',
        title: '3D & Graphics',
        sites: [
            {
                label: 'Spline',
                url: 'https://spline.design/',
                detail: 'Browser-based 3D design.'
            },
            {
                label: 'Three.js Examples',
                url: 'https://threejs.org/examples/',
                detail: 'WebGL 3D references and demos.'
            },
            {
                label: 'Womp',
                url: 'https://womp.com/',
                detail: 'Easy in-browser 3D creation.'
            },
            {
                label: 'Pixcap',
                url: 'https://pixcap.com/',
                detail: '3D icons, mockups, and scenes.'
            }
        ]
    },
    {
        id: 'mockups',
        title: 'Mockups',
        sites: [
            {
                label: 'Shots',
                url: 'https://shots.so/',
                detail: 'Device and browser mockups.'
            },
            {
                label: 'Mockuuups Studio',
                url: 'https://mockuuups.studio/',
                detail: 'Drag-and-drop device mockups.'
            },
            {
                label: 'Angle',
                url: 'https://angle.sh/',
                detail: '3D device mockup library.'
            },
            {
                label: 'Rotato',
                url: 'https://rotato.app/',
                detail: 'Animated 3D product mockups.'
            }
        ]
    },
    {
        id: 'systems',
        title: 'Design Systems',
        sites: [
            {
                label: 'Impeccable Style',
                url: 'https://impeccable.style/',
                detail: 'High-quality style and interface references.'
            },
            {
                label: 'Styles Refero',
                url: 'https://styles.refero.design/',
                detail: 'Design style references and visual systems.'
            },
            {
                label: 'Brandfetch',
                url: 'https://brandfetch.com/',
                detail: 'Brand assets, logos, and identity.'
            },
            {
                label: 'Design Systems Repo',
                url: 'https://designsystemsrepo.com/',
                detail: 'Gallery of public design systems.'
            },
            {
                label: 'Startups Gallery',
                url: 'https://startups.gallery/',
                detail: 'Top startup product and brand references.'
            }
        ]
    },
    {
        id: 'components',
        title: 'Components',
        sites: [
            {
                label: 'Base UI',
                url: 'https://base-ui.com/',
                detail: 'Unstyled accessible primitives for custom systems.'
            },
            {
                label: 'shadcn/ui',
                url: 'https://ui.shadcn.com/',
                detail: 'Composable React components built on Radix and Tailwind.'
            },
            {
                label: 'HeroUI',
                url: 'https://www.heroui.com/',
                detail: 'Modern React component library and design system.'
            },
            {
                label: 'Radix UI',
                url: 'https://www.radix-ui.com/',
                detail: 'Accessible low-level UI primitives.'
            },
            {
                label: 'React Aria',
                url: 'https://react-spectrum.adobe.com/react-aria/',
                detail: 'Accessible behavior primitives from Adobe.'
            },
            {
                label: 'Headless UI',
                url: 'https://headlessui.com/',
                detail: 'Unstyled accessible components for Tailwind projects.'
            },
            {
                label: 'MUI',
                url: 'https://mui.com/',
                detail: 'Material-based React component ecosystem.'
            },
            {
                label: 'Mantine',
                url: 'https://mantine.dev/',
                detail: 'Full-featured React components and hooks.'
            },
            {
                label: 'Chakra UI',
                url: 'https://chakra-ui.com/',
                detail: 'Accessible React components with theme tokens.'
            },
            {
                label: 'Ant Design',
                url: 'https://ant.design/',
                detail: 'Enterprise component system and patterns.'
            },
            {
                label: 'Ark UI',
                url: 'https://ark-ui.com/',
                detail: 'Headless components across modern frameworks.'
            },
            {
                label: 'daisyUI',
                url: 'https://daisyui.com/',
                detail: 'Tailwind CSS component classes and themes.'
            }
        ]
    },
    {
        id: 'guidelines',
        title: 'Guidelines & A11y',
        sites: [
            {
                label: 'Apple HIG',
                url: 'https://developer.apple.com/design/human-interface-guidelines',
                detail: 'Apple platform design guidelines.'
            },
            {
                label: 'Material Design',
                url: 'https://m3.material.io/',
                detail: "Google's Material Design 3."
            },
            {
                label: 'Laws of UX',
                url: 'https://lawsofux.com/',
                detail: 'UX principles and heuristics.'
            },
            {
                label: 'WebAIM Contrast',
                url: 'https://webaim.org/resources/contrastchecker/',
                detail: 'Color contrast checker.'
            },
            {
                label: 'The A11y Project',
                url: 'https://www.a11yproject.com/',
                detail: 'Accessibility checklist and patterns.'
            }
        ]
    },
    {
        id: 'tools',
        title: 'Tools & Resources',
        sites: [
            {
                label: 'Toolfolio',
                url: 'https://toolfolio.io/',
                detail: 'Design tools, resources, and collections.'
            },
            {
                label: 'GetDesign',
                url: 'https://getdesign.md/',
                detail: 'Curated design resources.'
            },
            {
                label: 'Taste Skill',
                url: 'https://www.tasteskill.dev/',
                detail: 'Design taste training and critique references.'
            },
            {
                label: 'UI Goodies',
                url: 'https://www.uigoodies.com/',
                detail: 'Hand-picked design resources.'
            },
            {
                label: 'Sidebar',
                url: 'https://sidebar.io/',
                detail: 'Five design links, every day.'
            },
            {
                label: 'Superset',
                url: 'https://github.com/superset-sh/superset',
                detail: 'Reference implementation for embedded browser workflows.'
            }
        ]
    }
];
const REFERENCE_TOTAL = REFERENCE_GROUPS.reduce(_c = (sum, group)=>sum + group.sites.length, 0);
_c1 = REFERENCE_TOTAL;
function filterReferenceGroups(groups, category, query) {
    const needle = query.trim().toLocaleLowerCase();
    return groups.filter((group)=>category === 'all' || group.id === category).map((group)=>{
        if (!needle) return group;
        if (group.title.toLocaleLowerCase().includes(needle)) return group;
        const sites = group.sites.filter((site)=>site.label.toLocaleLowerCase().includes(needle) || site.detail.toLocaleLowerCase().includes(needle) || hostnameFromUrl(site.url).toLocaleLowerCase().includes(needle));
        return {
            ...group,
            sites
        };
    }).filter((group)=>group.sites.length > 0);
}
const BROWSER_USE_CATEGORIES = [
    {
        id: 'assets',
        title: 'Asset extraction',
        titleKey: 'browserUse.category.assets',
        searchTerms: [
            'assets',
            'images',
            'svg'
        ],
        actions: [
            {
                id: 'extract_logo',
                label: 'extract_logo',
                input: 'none',
                output: 'Best logo candidates from header/nav/class/position plus og/favicon fallback.',
                prompt: 'Find likely site logo assets using DOM position, class names, header/nav context, OG image, and favicon evidence.'
            },
            {
                id: 'list_images',
                label: 'list_images',
                input: 'none',
                output: 'All img/srcset/source/CSS background images with dimensions and alt text.',
                prompt: 'Inventory every visible and CSS-referenced image, including dimensions, alt text, and source URLs.'
            },
            {
                id: 'download_assets',
                label: 'download_assets',
                input: 'kind: images|svgs|media|fonts, limit=200',
                output: 'Downloaded asset folder plus _manifest.json with referer/cookie support.',
                prompt: 'Download the requested asset kind from the bound Browser tab into the project and write a compact manifest.'
            },
            {
                id: 'extract_svgs',
                label: 'extract_svgs',
                input: 'none',
                output: 'Inline svg and linked .svg files saved as .svg.',
                prompt: 'Extract all inline and linked SVG assets from the page and save them as project files.'
            },
            {
                id: 'optimize_svgs',
                label: 'optimize_svgs',
                input: 'none',
                output: 'Optimized SVG files and compression ratio.',
                prompt: 'Extract page SVGs, lightly optimize comments/metadata/editor namespaces, and report compression ratios.'
            }
        ]
    },
    {
        id: 'tokens',
        title: 'Design language',
        titleKey: 'browserUse.category.tokens',
        searchTerms: [
            'tokens',
            'palette',
            'typography'
        ],
        actions: [
            {
                id: 'extract_colors',
                label: 'extract_colors',
                input: 'none',
                output: 'Weighted palette plus :root CSS variables as palette.json and palette.html.',
                prompt: 'Extract the weighted color palette and CSS color variables, then save a JSON file and visual swatch preview.'
            },
            {
                id: 'extract_fonts',
                label: 'extract_fonts',
                input: 'none',
                output: 'Top font families, sizes, weights, and @font-face rules as typography.json.',
                prompt: 'Extract computed font families, size/weight usage, and @font-face declarations from the current page.'
            },
            {
                id: 'extract_design_tokens',
                label: 'extract_design_tokens',
                input: 'none',
                output: 'Radius, shadow, spacing, and CSS variables as tokens.json.',
                prompt: 'Extract reusable design tokens from computed CSS: radius, shadows, spacing, and custom properties.'
            },
            {
                id: 'extract_type_scale',
                label: 'extract_type_scale',
                input: 'none',
                output: 'h1-h6/p/button type scale with size, weight, line-height, and ratios.',
                prompt: 'Extract the effective typography scale for headings, body, buttons, labels, weights, line heights, and adjacent ratios.'
            },
            {
                id: 'extract_buttons',
                label: 'extract_buttons',
                input: 'none',
                output: 'Deduped button style library as buttons.html and buttons.json.',
                prompt: 'Extract a deduped gallery of button variants, states, labels, and computed styles.'
            },
            {
                id: 'extract_grid_system',
                label: 'extract_grid_system',
                input: 'none',
                output: 'Grid/flex containers, direction, gaps, columns, and max widths as layout.json.',
                prompt: 'Detect layout containers and grid/flex systems, including gaps, columns, directions, and max-width rules.'
            },
            {
                id: 'extract_breakpoints',
                label: 'extract_breakpoints',
                input: 'none',
                output: 'Responsive media-query breakpoints as breakpoints.json.',
                prompt: 'Extract responsive breakpoints from stylesheets and summarize what changes at each breakpoint.'
            },
            {
                id: 'extract_gradients',
                label: 'extract_gradients',
                input: 'none',
                output: 'CSS gradients as gradients.css, gradients.json, and preview HTML.',
                prompt: 'Find linear, radial, and conic gradients and save reusable CSS, JSON, and an HTML preview.'
            },
            {
                id: 'extract_shadows',
                label: 'extract_shadows',
                input: 'none',
                output: 'box-shadow, text-shadow, and drop-shadow as shadows.json plus preview.',
                prompt: 'Extract shadow styles from the page and generate a compact visual preview.'
            },
            {
                id: 'extract_easings',
                label: 'extract_easings',
                input: 'none',
                output: 'Transition/animation easing functions as easings.json.',
                prompt: 'Extract easing functions from CSS transitions and animations, including cubic-bezier, steps, and named easings.'
            },
            {
                id: 'export_tokens',
                label: 'export_tokens',
                input: 'none',
                output: 'tokens.css, tokens.scss, tailwind.theme.js, style-dictionary.tokens.json.',
                prompt: 'Export extracted tokens in CSS variables, SCSS, Tailwind theme, and Style Dictionary formats.'
            }
        ]
    },
    {
        id: 'motion',
        title: 'Motion',
        titleKey: 'browserUse.category.motion',
        searchTerms: [
            'animation',
            'motion'
        ],
        actions: [
            {
                id: 'extract_animations',
                label: 'extract_animations',
                input: 'optional selector',
                output: '@keyframes, transition/transform rules, detected motion libraries, motion.css, motion.json.',
                prompt: 'Extract animation evidence from the page or selector scope, including keyframes, transitions, transforms, and motion libraries.'
            }
        ]
    },
    {
        id: 'visual',
        title: 'Visual QA',
        titleKey: 'browserUse.category.visual',
        searchTerms: [
            'screenshot',
            'accessibility',
            'layout'
        ],
        actions: [
            {
                id: 'validate_view',
                label: 'validate_view',
                input: 'requirement, selector? optional',
                output: 'Screenshot paths plus structured visual/layout issues.',
                prompt: 'Validate the current view against the requirement using screenshots plus layout audit evidence, then return issues and asset paths.'
            },
            {
                id: 'audit_layout',
                label: 'audit_layout',
                input: 'selector? optional',
                output: 'Layout defects: overflow, bounds, overlap, clipped text as audit.json.',
                prompt: 'Run a deterministic layout audit for overflow, out-of-bounds elements, text overlap, and clipped text.'
            },
            {
                id: 'audit_accessibility',
                label: 'audit_accessibility',
                input: 'selector? optional',
                output: 'A11y issues with selectors, labels, roles, focus, contrast, and screenshots where useful.',
                prompt: 'Audit accessibility evidence for the page or selector scope: names, roles, labels, focus order, contrast, and obvious keyboard traps.'
            },
            {
                id: 'responsive_screenshots',
                label: 'responsive_screenshots',
                input: 'none',
                output: 'Mobile 390, tablet 834, and desktop 1440 screenshots.',
                prompt: 'Capture mobile, tablet, and desktop screenshots for the current page and compare the main layout shifts.'
            },
            {
                id: 'screenshot_full',
                label: 'screenshot_full',
                input: 'scale=1',
                output: 'Full-page screenshot beyond the viewport.',
                prompt: 'Capture a full-page screenshot of the bound Browser tab and save it in the project.'
            },
            {
                id: 'screenshot_element',
                label: 'screenshot_element',
                input: 'selector, scale=2',
                output: 'Single element screenshot at 2x by default.',
                prompt: 'Capture a screenshot of the requested element selector, preferring a direct element capture over a cropped page image.'
            },
            {
                id: 'screenshot_with_grid',
                label: 'screenshot_with_grid',
                input: 'columns=12, maxWidth=1200, gap=24',
                output: 'Screenshot with layout grid overlay.',
                prompt: 'Overlay a responsive column grid on the page and capture a screenshot for alignment review.'
            },
            {
                id: 'screenshot_dark_mode',
                label: 'screenshot_dark_mode',
                input: 'none',
                output: 'Screenshot with prefers-color-scheme: dark.',
                prompt: 'Emulate dark color scheme and capture a screenshot of the page state.'
            },
            {
                id: 'generate_styleguide',
                label: 'generate_styleguide',
                input: 'none',
                output: 'One-page style guide with colors, type scale, radius, and shadows.',
                prompt: 'Generate a concise one-page style guide from page evidence: colors, typography, radius, shadows, and reusable UI notes.'
            }
        ]
    },
    {
        id: 'structure',
        title: 'Component structure',
        titleKey: 'browserUse.category.structure',
        searchTerms: [
            'html',
            'copy',
            'forms',
            'nav'
        ],
        actions: [
            {
                id: 'extract_html',
                label: 'extract_html',
                input: "selector='body'",
                output: 'Clean self-contained HTML without script/noscript/on* attributes.',
                prompt: 'Extract clean self-contained HTML for the selected area, removing scripts and inline event handlers.'
            },
            {
                id: 'extract_component_inventory',
                label: 'extract_component_inventory',
                input: 'none',
                output: 'Repeated component patterns, selectors, counts, and screenshots.',
                prompt: 'Inventory repeated component patterns such as cards, nav items, pricing rows, modals, accordions, and tables.'
            },
            {
                id: 'extract_copy',
                label: 'extract_copy',
                input: 'none',
                output: 'Headings, CTAs, body copy, descriptions as copy.md and copy.json.',
                prompt: 'Extract product copy from the page: headings, CTA labels, paragraphs, descriptions, and repeated text patterns.'
            },
            {
                id: 'extract_nav',
                label: 'extract_nav',
                input: 'none',
                output: 'Primary navigation and footer links as sitemap.md and nav.json.',
                prompt: 'Extract primary navigation, footer links, and sitemap-like structure from the current page.'
            },
            {
                id: 'extract_forms',
                label: 'extract_forms',
                input: 'none',
                output: 'Form fields, labels, validation hints, and submit actions as forms.json.',
                prompt: 'Extract form structure, labels, placeholders, validation hints, required states, and submit actions.'
            }
        ]
    },
    {
        id: 'project',
        title: 'Project runtime',
        titleKey: 'browserUse.category.project',
        searchTerms: [
            'dev server',
            'framework'
        ],
        actions: [
            {
                id: 'run_project',
                label: 'run_project',
                input: 'none',
                output: 'Detected dev server URL opened in Browser tab.',
                prompt: 'Detect, install if needed, run the project dev server, find the local URL, and open it in the Browser tab.'
            },
            {
                id: 'detect_project',
                label: 'detect_project',
                input: 'none',
                output: 'Framework, package manager, install command, dev command, and port.',
                prompt: 'Detect the project setup from package files, lockfiles, and framework config, then report install/dev commands and likely ports.'
            }
        ]
    },
    {
        id: 'general',
        title: 'General actions',
        titleKey: 'browserUse.category.general',
        searchTerms: [
            'metadata',
            'navigate',
            'terminal'
        ],
        actions: [
            {
                id: 'page_info',
                label: 'page_info',
                input: 'none',
                output: 'URL, title, description, OG image, theme color, favicon, viewport.',
                prompt: 'Read compact metadata for the bound Browser tab: URL, title, description, OG/Twitter cards, theme color, favicon, and viewport.'
            },
            {
                id: 'snapshot',
                label: 'snapshot',
                input: 'none',
                output: 'Up to 120 visible interactive/text elements with tag, label, href, and coordinates.',
                prompt: 'Capture a compact DOM interaction snapshot for agent reasoning, capped to the most useful visible controls and text blocks.'
            },
            {
                id: 'navigate',
                label: 'navigate',
                input: 'url / domain / search terms',
                output: 'Open page and return page_info.',
                prompt: 'Navigate the bound Browser tab to the requested URL, domain, or search query, then report the resulting page_info.'
            },
            {
                id: 'click',
                label: 'click',
                input: 'selector',
                output: 'Click first matching element after scrolling it into view.',
                prompt: 'Click the first element matching the requested selector in the bound Browser tab, then report the visible result.'
            },
            {
                id: 'type_text',
                label: 'type_text',
                input: 'selector, text',
                output: 'Fill an input and dispatch input/change events.',
                prompt: 'Type the requested text into the selected input or editable element and dispatch the normal browser events.'
            },
            {
                id: 'scroll',
                label: 'scroll',
                input: 'pixels / top / bottom / page',
                output: 'Current and maximum scroll position.',
                prompt: 'Scroll the page by the requested amount or target, then report the resulting scroll position.'
            },
            {
                id: 'extract_og_metadata',
                label: 'extract_og_metadata',
                input: 'none',
                output: 'Meta title/description/canonical, OG/Twitter cards, social image, theme color.',
                prompt: 'Extract SEO and social preview metadata, including canonical, OG, Twitter card, image, and theme-color evidence.'
            },
            {
                id: 'terminal_run',
                label: 'terminal_run',
                input: 'command, timeoutMs=120000',
                output: 'stdout, stderr, and exit code.',
                prompt: 'Run the requested terminal command to completion in the shared project terminal and summarize stdout, stderr, and exit code.'
            },
            {
                id: 'terminal_run_background',
                label: 'terminal_run_background',
                input: 'command',
                output: 'Background task id and recent output.',
                prompt: 'Start the requested long-running terminal command in the background and report how to read its output.'
            },
            {
                id: 'terminal_read',
                label: 'terminal_read',
                input: 'maxChars=8000',
                output: 'Recent shared terminal output.',
                prompt: 'Read recent terminal output and extract URLs, errors, or readiness signals relevant to the bound Browser tab.'
            }
        ]
    }
];
const BROWSER_USE_ACTION_TOTAL = BROWSER_USE_CATEGORIES.reduce(_c2 = (sum, group)=>sum + group.actions.length, 0);
_c3 = BROWSER_USE_ACTION_TOTAL;
function browserUseActionById(id) {
    for (const group of BROWSER_USE_CATEGORIES){
        const action = group.actions.find((item)=>item.id === id);
        if (action) return action;
    }
    return null;
}
function filterBrowserUseCategories(groups, query, localizeCategoryTitle, localizeAction) {
    const needle = query.trim().toLocaleLowerCase();
    if (!needle) return groups;
    return groups.map((group)=>{
        const localizedTitle = localizeCategoryTitle?.(group) ?? group.title;
        const groupMatches = [
            group.title,
            localizedTitle,
            ...group.searchTerms ?? []
        ].some((value)=>value.toLocaleLowerCase().includes(needle));
        const actions = groupMatches ? group.actions : group.actions.filter((action)=>[
                action.id,
                action.label,
                action.input,
                action.output,
                action.prompt,
                ...localizeAction?.(action) ?? []
            ].some((value)=>value.toLocaleLowerCase().includes(needle)));
        return {
            ...group,
            actions
        };
    }).filter((group)=>group.actions.length > 0);
}
function browserUsePrompt(action, context = {}) {
    const title = context.title?.trim() || '(untitled)';
    const url = context.url?.trim() || EMPTY_URL;
    const tabLabel = context.tabLabel?.trim() || title || labelFromUrl(url);
    const browserFilePath = context.browserFilePath?.trim();
    const resolvedDir = context.resolvedDir?.trim();
    return [
        '@agent-browser',
        '',
        'Use the selected Open Design Browser tab as the bound target.',
        'Browser tab context:',
        `- tab: ${tabLabel}`,
        `- title: ${title}`,
        `- url: ${url}`,
        ...browserFilePath ? [
            `- browser context path: ${browserFilePath}`
        ] : [],
        ...context.projectId ? [
            `- project id: ${context.projectId}`
        ] : [],
        ...resolvedDir ? [
            `- project directory: ${resolvedDir}`
        ] : [],
        '',
        `Operation: ${action.id}`,
        `Input contract: ${action.input}`,
        `Expected output: ${action.output}`,
        '',
        `Task: ${action.prompt}`,
        '',
        'Evidence rules:',
        '1. Use browser-use / browser-harness style evidence: page_info, DOM snapshot, screenshots, accessibility tree, OG metadata, computed CSS, fonts, colors, motion rules, and layout audit as relevant.',
        '2. First confirm the bound tab URL/title. If the tab is blank and the operation needs a page, ask for or navigate to the target before extracting evidence.',
        '3. Save bulky assets, screenshots, manifests, and HTML extracts in the project, then summarize paths instead of pasting large dumps into chat.',
        '4. Return a concise result with evidence paths, key selectors, and any follow-up action needed.'
    ].join('\n');
}
const PAGE_BRIEF_SCRIPT = `(() => {
  const clean = (value) => String(value || '').replace(/\\s+/g, ' ').trim();
  const attr = (selector, name) => document.querySelector(selector)?.getAttribute(name) || '';
  const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
    .map((node) => clean(node.textContent))
    .filter(Boolean)
    .slice(0, 18);
  const links = Array.from(document.querySelectorAll('a[href]'))
    .map((node) => ({ text: clean(node.textContent), url: node.href }))
    .filter((item) => item.url && item.text)
    .slice(0, 28);
  const images = Array.from(document.images)
    .map((image) => image.currentSrc || image.src)
    .filter(Boolean)
    .slice(0, 24);
  const colorCounts = new Map();
  const transparent = new Set(['rgba(0, 0, 0, 0)', 'transparent']);
  for (const element of Array.from(document.querySelectorAll('body, body *')).slice(0, 700)) {
    const style = getComputedStyle(element);
    for (const prop of ['color', 'backgroundColor', 'borderColor']) {
      const value = style[prop];
      if (!value || transparent.has(value)) continue;
      colorCounts.set(value, (colorCounts.get(value) || 0) + 1);
    }
  }
  return {
    title: clean(document.title),
    url: location.href,
    description: clean(attr('meta[name="description"]', 'content') || attr('meta[property="og:description"]', 'content')),
    headings,
    images,
    links,
    colors: Array.from(colorCounts.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 16)
      .map(([value, count]) => ({ value, count })),
  };
})()`;
function DesignBrowserPanel({ initialIconUrl, initialTitle, initialUrl, projectId, resolvedDir, onOpenFile, onPageInfoChange, onRefreshFiles, previewComments = EMPTY_PREVIEW_COMMENTS, onSavePreviewComment, onRemovePreviewComment, onSendBoardCommentAttachments, onRequestBrowserUsePrompt, sendDisabled = false }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const desktopHostAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])();
    const initialState = initialBrowserState(initialUrl, initialTitle);
    // `loadUrl` is the navigation target bound to the <webview>/<iframe> `src`.
    // It changes ONLY on user-initiated navigation. `currentUrl` is the committed
    // location shown in the address bar and recorded in history, synced from the
    // webview's own navigation events. They are deliberately separate: if `src`
    // tracked every committed URL, a server redirect (e.g. adding a trailing
    // slash) would mutate `src` mid-load and Electron would abort the in-flight
    // navigation (ERR_ABORTED -3), leaving the page blank.
    const [loadUrl, setLoadUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.url);
    const [currentUrl, setCurrentUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.url);
    const [addressValue, setAddressValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.addressValue);
    const [addressEditing, setAddressEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DesignBrowserPanel.useState": ()=>loadHistory(projectId)
    }["DesignBrowserPanel.useState"]);
    const [navigationStack, setNavigationStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.navigationStack);
    const [navigationIndex, setNavigationIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.navigationIndex);
    const [suggestionsOpen, setSuggestionsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [browserUseOpen, setBrowserUseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [webviewNode, setWebviewNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drawOverlayOpen, setDrawOverlayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desktop');
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCommentTarget, setActiveCommentTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activePreviewCommentId, setActivePreviewCommentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commentDraft, setCommentDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [queuedCommentNotes, setQueuedCommentNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [browserImages, setBrowserImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [browserImagePreviews, setBrowserImagePreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [browserPreviewIndex, setBrowserPreviewIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sendingComment, setSendingComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingDomEdit, setSavingDomEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [browserLiveCommentTargets, setBrowserLiveCommentTargets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DesignBrowserPanel.useState": ()=>new Map()
    }["DesignBrowserPanel.useState"]);
    const [textDraft, setTextDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [captureChromeHidden, setCaptureChromeHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savingAction, setSavingAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const addressInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chromeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pickerRequestIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const restoredIconUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialIconUrl?.trim() ?? '');
    const restoredTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialTitle?.trim() ?? '');
    const navigationStackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialState.navigationStack);
    const navigationIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialState.navigationIndex);
    const pendingLoadTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canGoBack = navigationIndex > 0;
    const canGoForward = navigationIndex >= 0 && navigationIndex < navigationStack.length - 1;
    const assignWebviewNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[assignWebviewNode]": (node)=>{
            // Set `allowpopups` imperatively rather than as a JSX prop. React's DOM
            // renderer does not treat `allowpopups` as a known boolean attribute, so
            // passing it through JSX logs "Received `true` for a non-boolean
            // attribute" at runtime (only reproducible once the webview branch mounts
            // in the desktop host). The attribute must still reach Electron's <webview>
            // as a present string so the guest page may open popups.
            if (node) node.setAttribute('allowpopups', 'true');
            setWebviewNode(node);
        }
    }["DesignBrowserPanel.useCallback[assignWebviewNode]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            setHistory(loadHistory(projectId));
            const nextInitialState = initialBrowserState(initialUrl, initialTitle);
            setLoadUrl(nextInitialState.url);
            setCurrentUrl(nextInitialState.url);
            setAddressValue(nextInitialState.addressValue);
            setAddressEditing(false);
            setNavigationStack(nextInitialState.navigationStack);
            setNavigationIndex(nextInitialState.navigationIndex);
            navigationStackRef.current = nextInitialState.navigationStack;
            navigationIndexRef.current = nextInitialState.navigationIndex;
            pendingLoadTargetRef.current = null;
            if (isHistoryUrl(nextInitialState.url)) {
                commitHistory(nextInitialState.url, {
                    iconUrl: initialIconUrl,
                    title: initialTitle
                }, {
                    countVisit: false
                });
            }
        // `initial*` props are mount-time tab restore inputs. During normal
        // navigation the parent updates them from onPageInfoChange; that must not
        // reset the live webview.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DesignBrowserPanel.useEffect"], [
        projectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            const timer = window.setTimeout({
                "DesignBrowserPanel.useEffect.timer": ()=>saveHistory(projectId, history)
            }["DesignBrowserPanel.useEffect.timer"], 140);
            return ({
                "DesignBrowserPanel.useEffect": ()=>window.clearTimeout(timer)
            })["DesignBrowserPanel.useEffect"];
        }
    }["DesignBrowserPanel.useEffect"], [
        history,
        projectId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            if (!statusMessage) return;
            const timer = window.setTimeout({
                "DesignBrowserPanel.useEffect.timer": ()=>setStatusMessage(null)
            }["DesignBrowserPanel.useEffect.timer"], 2600);
            return ({
                "DesignBrowserPanel.useEffect": ()=>window.clearTimeout(timer)
            })["DesignBrowserPanel.useEffect"];
        }
    }["DesignBrowserPanel.useEffect"], [
        statusMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            if (!menuOpen && !suggestionsOpen && !browserUseOpen) return;
            const onPointerDown = {
                "DesignBrowserPanel.useEffect.onPointerDown": (event)=>{
                    const chrome = chromeRef.current;
                    if (chrome && event.target instanceof Node && chrome.contains(event.target)) return;
                    setMenuOpen(false);
                    setSuggestionsOpen(false);
                    setBrowserUseOpen(false);
                }
            }["DesignBrowserPanel.useEffect.onPointerDown"];
            document.addEventListener('pointerdown', onPointerDown);
            return ({
                "DesignBrowserPanel.useEffect": ()=>document.removeEventListener('pointerdown', onPointerDown)
            })["DesignBrowserPanel.useEffect"];
        }
    }["DesignBrowserPanel.useEffect"], [
        browserUseOpen,
        menuOpen,
        suggestionsOpen
    ]);
    const commitHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[commitHistory]": (url, meta = {}, options = {})=>{
            if (!isHistoryUrl(url)) return;
            setHistory({
                "DesignBrowserPanel.useCallback[commitHistory]": (current)=>{
                    const now = Date.now();
                    const existing = current.find({
                        "DesignBrowserPanel.useCallback[commitHistory].existing": (entry)=>sameUrl(entry.url, url)
                    }["DesignBrowserPanel.useCallback[commitHistory].existing"]);
                    const nextTitle = meta.title && meta.title.trim() ? meta.title.trim() : existing?.title || labelFromUrl(url);
                    const nextIconUrl = cleanIconUrl(meta.iconUrl) || existing?.iconUrl || faviconUrl(url);
                    const visitIncrement = options.countVisit === false ? 0 : 1;
                    const entry = existing ? {
                        ...existing,
                        iconUrl: nextIconUrl,
                        title: nextTitle,
                        lastVisitedAt: visitIncrement > 0 ? now : existing.lastVisitedAt,
                        visitCount: existing.visitCount + visitIncrement
                    } : {
                        iconUrl: nextIconUrl,
                        title: nextTitle,
                        url,
                        lastVisitedAt: now,
                        visitCount: 1
                    };
                    if (existing && existing.title === entry.title && existing.iconUrl === entry.iconUrl && existing.lastVisitedAt === entry.lastVisitedAt && existing.visitCount === entry.visitCount) {
                        return current;
                    }
                    return [
                        entry,
                        ...current.filter({
                            "DesignBrowserPanel.useCallback[commitHistory]": (item)=>!sameUrl(item.url, url)
                        }["DesignBrowserPanel.useCallback[commitHistory]"])
                    ].slice(0, HISTORY_LIMIT);
                }
            }["DesignBrowserPanel.useCallback[commitHistory]"]);
        }
    }["DesignBrowserPanel.useCallback[commitHistory]"], []);
    const setNavigationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[setNavigationState]": (stack, index)=>{
            navigationStackRef.current = stack;
            navigationIndexRef.current = index;
            setNavigationStack(stack);
            setNavigationIndex(index);
        }
    }["DesignBrowserPanel.useCallback[setNavigationState]"], []);
    const recordNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[recordNavigation]": (url, title, options)=>{
            if (url !== EMPTY_URL && !isHistoryUrl(url)) return;
            const stack = navigationStackRef.current;
            const index = navigationIndexRef.current;
            const nextTitle = url === EMPTY_URL ? browserHomeNavigationEntry().title : title && title.trim() ? title.trim() : labelFromUrl(url);
            const nextEntry = {
                title: nextTitle,
                url
            };
            const updateEntry = {
                "DesignBrowserPanel.useCallback[recordNavigation].updateEntry": (entries, entryIndex)=>{
                    const existing = entries[entryIndex];
                    const next = entries.slice();
                    next[entryIndex] = {
                        title: nextTitle || existing?.title || labelFromUrl(url),
                        url
                    };
                    return next;
                }
            }["DesignBrowserPanel.useCallback[recordNavigation].updateEntry"];
            const currentEntry = index >= 0 ? stack[index] : undefined;
            const pendingTarget = pendingLoadTargetRef.current;
            const shouldReplacePending = Boolean(options?.replacePendingTarget && pendingTarget && currentEntry && sameUrl(currentEntry.url, pendingTarget));
            if (currentEntry && (sameUrl(currentEntry.url, url) || shouldReplacePending)) {
                setNavigationState(updateEntry(stack, index), index);
                if (options?.replacePendingTarget) pendingLoadTargetRef.current = null;
                return;
            }
            const previousIndex = index - 1;
            if (previousIndex >= 0 && sameUrl(stack[previousIndex]?.url ?? '', url)) {
                setNavigationState(updateEntry(stack, previousIndex), previousIndex);
                if (options?.replacePendingTarget) pendingLoadTargetRef.current = null;
                return;
            }
            const nextIndex = index + 1;
            if (nextIndex < stack.length && sameUrl(stack[nextIndex]?.url ?? '', url)) {
                setNavigationState(updateEntry(stack, nextIndex), nextIndex);
                if (options?.replacePendingTarget) pendingLoadTargetRef.current = null;
                return;
            }
            const base = index >= 0 ? stack.slice(0, index + 1) : [];
            const nextStack = [
                ...base,
                nextEntry
            ].slice(-HISTORY_LIMIT);
            setNavigationState(nextStack, nextStack.length - 1);
            if (options?.replacePendingTarget) pendingLoadTargetRef.current = null;
        }
    }["DesignBrowserPanel.useCallback[recordNavigation]"], [
        setNavigationState
    ]);
    const updateCurrentNavigationTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[updateCurrentNavigationTitle]": (title)=>{
            const trimmedTitle = title?.trim();
            const index = navigationIndexRef.current;
            if (!trimmedTitle || index < 0) return;
            const stack = navigationStackRef.current;
            const currentEntry = stack[index];
            if (!currentEntry || currentEntry.title === trimmedTitle) return;
            const nextStack = stack.slice();
            nextStack[index] = {
                ...currentEntry,
                title: trimmedTitle
            };
            setNavigationState(nextStack, index);
        }
    }["DesignBrowserPanel.useCallback[updateCurrentNavigationTitle]"], [
        setNavigationState
    ]);
    const loadWebviewUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[loadWebviewUrl]": (url)=>{
            if (!webviewNode) {
                setLoadUrl(url);
                return;
            }
            if (loadUrl === EMPTY_URL) {
                setLoadUrl(url);
                return;
            }
            try {
                const result = webviewNode.loadURL?.(url);
                if (result instanceof Promise) void result.catch({
                    "DesignBrowserPanel.useCallback[loadWebviewUrl]": ()=>setLoadUrl(url)
                }["DesignBrowserPanel.useCallback[loadWebviewUrl]"]);
                else if (!webviewNode.loadURL) setLoadUrl(url);
            } catch  {
                setLoadUrl(url);
            }
        }
    }["DesignBrowserPanel.useCallback[loadWebviewUrl]"], [
        loadUrl,
        webviewNode
    ]);
    const navigateTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[navigateTo]": (rawAddress)=>{
            const nextUrl = normalizeBrowserAddress(rawAddress);
            warmBrowserOrigin(nextUrl);
            pendingLoadTargetRef.current = isHistoryUrl(nextUrl) ? nextUrl : null;
            setCurrentUrl(nextUrl);
            setAddressValue(nextUrl === EMPTY_URL ? '' : nextUrl);
            setAddressEditing(false);
            setSuggestionsOpen(false);
            setMenuOpen(false);
            setBrowserUseOpen(false);
            if (isHistoryUrl(nextUrl)) {
                commitHistory(nextUrl, undefined, {
                    countVisit: true
                });
                recordNavigation(nextUrl);
            } else if (nextUrl === EMPTY_URL) {
                setLoadUrl(EMPTY_URL);
                recordNavigation(nextUrl);
            }
            if (nextUrl !== EMPTY_URL) loadWebviewUrl(nextUrl);
        }
    }["DesignBrowserPanel.useCallback[navigateTo]"], [
        commitHistory,
        loadWebviewUrl,
        recordNavigation
    ]);
    const syncFromFallbackFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[syncFromFallbackFrame]": (frame)=>{
            if (!frame || loadUrl === EMPTY_URL) return;
            let nextUrl = loadUrl;
            let nextTitle = '';
            try {
                nextUrl = frame.contentWindow?.location.href || loadUrl;
                nextTitle = frame.contentDocument?.title?.trim() || '';
            } catch  {
            // Cross-origin iframe content is expected to reject here. Keep the URL
            // context and let the display fall back to labelFromUrl().
            }
            setCurrentUrl(nextUrl);
            if (!addressEditing) setAddressValue(nextUrl);
            commitHistory(nextUrl, {
                title: nextTitle
            }, {
                countVisit: false
            });
            recordNavigation(nextUrl, nextTitle, {
                replacePendingTarget: true
            });
            updateCurrentNavigationTitle(nextTitle);
            setIsLoading(false);
        }
    }["DesignBrowserPanel.useCallback[syncFromFallbackFrame]"], [
        addressEditing,
        commitHistory,
        loadUrl,
        recordNavigation,
        updateCurrentNavigationTitle
    ]);
    const updateLoadingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignBrowserPanel.useCallback[updateLoadingState]": (node = webviewNode)=>{
            if (!node) {
                setIsLoading(false);
                return;
            }
            // Electron's <webview> throws ("The WebView must be attached to the DOM and
            // the dom-ready event emitted before this method can be called") when
            // isLoading runs before the guest attaches. The mount effect calls this
            // immediately, so guard like safeGetWebviewUrl/Title do.
            try {
                setIsLoading(Boolean(node.isLoading()));
            } catch  {
            // Pre-dom-ready: keep the existing loading state.
            }
        }
    }["DesignBrowserPanel.useCallback[updateLoadingState]"], [
        webviewNode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            const node = webviewNode;
            if (!node) return;
            const syncFromWebview = {
                "DesignBrowserPanel.useEffect.syncFromWebview": (url, title, options)=>{
                    const nextUrl = url || safeGetWebviewUrl(node);
                    if (nextUrl) {
                        setCurrentUrl(nextUrl);
                        if (!addressEditing) {
                            setAddressValue(nextUrl === EMPTY_URL ? '' : nextUrl);
                        }
                    }
                    const nextTitle = title || safeGetWebviewTitle(node);
                    if (nextUrl) {
                        commitHistory(nextUrl, {
                            iconUrl: options?.iconUrl,
                            title: nextTitle
                        }, {
                            countVisit: options?.recordVisit === true
                        });
                        if (options?.recordNavigation !== false) {
                            recordNavigation(nextUrl, nextTitle, {
                                replacePendingTarget: true
                            });
                        } else {
                            updateCurrentNavigationTitle(nextTitle);
                        }
                    }
                    updateLoadingState(node);
                }
            }["DesignBrowserPanel.useEffect.syncFromWebview"];
            const onStart = {
                "DesignBrowserPanel.useEffect.onStart": ()=>{
                    setIsLoading(true);
                    updateLoadingState(node);
                }
            }["DesignBrowserPanel.useEffect.onStart"];
            const onStop = {
                "DesignBrowserPanel.useEffect.onStop": ()=>{
                    setIsLoading(false);
                    syncFromWebview(undefined, undefined, {
                        recordVisit: false
                    });
                }
            }["DesignBrowserPanel.useEffect.onStop"];
            const onNavigate = {
                "DesignBrowserPanel.useEffect.onNavigate": (event)=>{
                    const navigationEvent = event;
                    if (navigationEvent.isMainFrame === false) return;
                    const pendingTarget = pendingLoadTargetRef.current;
                    const nextUrl = navigationEvent.url || safeGetWebviewUrl(node);
                    const isPendingCommit = Boolean(pendingTarget && nextUrl && sameUrl(pendingTarget, nextUrl));
                    syncFromWebview(nextUrl, undefined, {
                        recordVisit: !isPendingCommit
                    });
                }
            }["DesignBrowserPanel.useEffect.onNavigate"];
            const onTitle = {
                "DesignBrowserPanel.useEffect.onTitle": (event)=>{
                    const titleEvent = event;
                    syncFromWebview(undefined, titleEvent.title, {
                        recordNavigation: false,
                        recordVisit: false
                    });
                }
            }["DesignBrowserPanel.useEffect.onTitle"];
            const onFavicon = {
                "DesignBrowserPanel.useEffect.onFavicon": (event)=>{
                    const faviconEvent = event;
                    const iconUrl = faviconEvent.favicons?.find(isHttpLikeUrl);
                    if (!iconUrl) return;
                    syncFromWebview(undefined, undefined, {
                        iconUrl,
                        recordNavigation: false,
                        recordVisit: false
                    });
                }
            }["DesignBrowserPanel.useEffect.onFavicon"];
            const onFail = {
                "DesignBrowserPanel.useEffect.onFail": (event)=>{
                    const navigationEvent = event;
                    if (navigationEvent.isMainFrame === false) return;
                    setIsLoading(false);
                    pendingLoadTargetRef.current = null;
                    updateLoadingState(node);
                }
            }["DesignBrowserPanel.useEffect.onFail"];
            node.addEventListener('did-start-loading', onStart);
            node.addEventListener('did-stop-loading', onStop);
            node.addEventListener('did-navigate', onNavigate);
            node.addEventListener('did-navigate-in-page', onNavigate);
            node.addEventListener('page-title-updated', onTitle);
            node.addEventListener('page-favicon-updated', onFavicon);
            node.addEventListener('did-fail-load', onFail);
            node.addEventListener('dom-ready', onStop);
            updateLoadingState(node);
            return ({
                "DesignBrowserPanel.useEffect": ()=>{
                    node.removeEventListener('did-start-loading', onStart);
                    node.removeEventListener('did-stop-loading', onStop);
                    node.removeEventListener('did-navigate', onNavigate);
                    node.removeEventListener('did-navigate-in-page', onNavigate);
                    node.removeEventListener('page-title-updated', onTitle);
                    node.removeEventListener('page-favicon-updated', onFavicon);
                    node.removeEventListener('did-fail-load', onFail);
                    node.removeEventListener('dom-ready', onStop);
                }
            })["DesignBrowserPanel.useEffect"];
        }
    }["DesignBrowserPanel.useEffect"], [
        addressEditing,
        commitHistory,
        recordNavigation,
        updateCurrentNavigationTitle,
        updateLoadingState,
        webviewNode
    ]);
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignBrowserPanel.useMemo[suggestions]": ()=>{
            const query = addressValue.trim().toLocaleLowerCase();
            const showDefaultSuggestions = addressEditing && currentUrl !== EMPTY_URL && sameUrl(addressValue.trim(), currentUrl);
            const referenceSuggestions = REFERENCE_GROUPS.flatMap({
                "DesignBrowserPanel.useMemo[suggestions].referenceSuggestions": (group)=>group.sites.map({
                        "DesignBrowserPanel.useMemo[suggestions].referenceSuggestions": (site)=>({
                                detail: `${group.title} - ${site.detail}`,
                                id: `site:${site.url}`,
                                iconUrl: referenceIconUrl(site.url),
                                label: site.label,
                                type: 'Reference',
                                url: site.url
                            })
                    }["DesignBrowserPanel.useMemo[suggestions].referenceSuggestions"])
            }["DesignBrowserPanel.useMemo[suggestions].referenceSuggestions"]);
            const historySuggestions = history.slice(0, HISTORY_SUGGESTION_LIMIT).map({
                "DesignBrowserPanel.useMemo[suggestions].historySuggestions": (entry)=>({
                        detail: entry.url,
                        id: `history:${entry.url}`,
                        iconUrl: entry.iconUrl || faviconUrl(entry.url),
                        label: entry.title || labelFromUrl(entry.url),
                        type: 'History',
                        url: entry.url
                    })
            }["DesignBrowserPanel.useMemo[suggestions].historySuggestions"]);
            const all = [
                ...historySuggestions,
                ...referenceSuggestions
            ];
            if (!query || showDefaultSuggestions) return all;
            return all.filter({
                "DesignBrowserPanel.useMemo[suggestions]": (item)=>`${item.label} ${item.url} ${item.detail}`.toLocaleLowerCase().includes(query)
            }["DesignBrowserPanel.useMemo[suggestions]"]).slice(0, HISTORY_SUGGESTION_LIMIT + referenceSuggestions.length);
        }
    }["DesignBrowserPanel.useMemo[suggestions]"], [
        addressEditing,
        addressValue,
        currentUrl,
        history
    ]);
    const pageHistoryEntry = history.find((entry)=>sameUrl(entry.url, currentUrl));
    const pageTitle = pageHistoryEntry?.title || restoredTitleRef.current || labelFromUrl(currentUrl);
    const pageIconUrl = pageHistoryEntry?.iconUrl || restoredIconUrlRef.current || faviconUrl(currentUrl);
    const addressDisplayParts = addressEditing ? {
        url: ''
    } : formatAddressDisplayParts(currentUrl, pageTitle);
    const shownAddressValue = addressEditing ? addressValue : '';
    // Drive the start-page/webview branch off the load target, not the committed
    // URL, so a transient about:blank navigation event can't unmount the webview.
    const isBlank = loadUrl === EMPTY_URL;
    const browserFilePath = isBlank ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserCommentFilePath"])(EMPTY_URL) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserCommentFilePath"])(currentUrl, resolvedDir);
    const editableProjectHtml = !isBlank && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProjectHtmlBrowserUrl"])(currentUrl, resolvedDir);
    const browserUseContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignBrowserPanel.useMemo[browserUseContext]": ()=>({
                browserFilePath,
                projectId,
                resolvedDir,
                tabLabel: isBlank ? 'Browser' : pageTitle,
                title: isBlank ? 'Browser' : pageTitle,
                url: isBlank ? EMPTY_URL : currentUrl
            })
    }["DesignBrowserPanel.useMemo[browserUseContext]"], [
        browserFilePath,
        currentUrl,
        isBlank,
        pageTitle,
        projectId,
        resolvedDir
    ]);
    const visibleComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignBrowserPanel.useMemo[visibleComments]": ()=>previewComments.filter({
                "DesignBrowserPanel.useMemo[visibleComments]": (comment)=>comment.filePath === browserFilePath && comment.status === 'open'
            }["DesignBrowserPanel.useMemo[visibleComments]"]).sort({
                "DesignBrowserPanel.useMemo[visibleComments]": (left, right)=>left.createdAt - right.createdAt
            }["DesignBrowserPanel.useMemo[visibleComments]"])
    }["DesignBrowserPanel.useMemo[visibleComments]"], [
        browserFilePath,
        previewComments
    ]);
    const activeSavedComment = activePreviewCommentId ? visibleComments.find((comment)=>comment.id === activePreviewCommentId) ?? null : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            const node = webviewNode;
            if (!node || isBlank) {
                setBrowserLiveCommentTargets({
                    "DesignBrowserPanel.useEffect": (current)=>current.size > 0 ? new Map() : current
                }["DesignBrowserPanel.useEffect"]);
                return;
            }
            const activeTarget = activeCommentTarget ? [
                {
                    elementId: activeCommentTarget.elementId,
                    key: 'active',
                    selector: activeCommentTarget.selector
                }
            ] : [];
            const targets = activeTarget.filter({
                "DesignBrowserPanel.useEffect.targets": (target)=>target.elementId && target.selector
            }["DesignBrowserPanel.useEffect.targets"]);
            if (targets.length === 0) {
                setBrowserLiveCommentTargets({
                    "DesignBrowserPanel.useEffect": (current)=>current.size > 0 ? new Map() : current
                }["DesignBrowserPanel.useEffect"]);
                return;
            }
            let cancelled = false;
            let running = false;
            const refresh = {
                "DesignBrowserPanel.useEffect.refresh": async ()=>{
                    if (cancelled || running) return;
                    running = true;
                    try {
                        const result = await node.executeJavaScript((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserMeasureTargetsScript"])(browserFilePath, targets), true);
                        if (cancelled || !Array.isArray(result)) return;
                        const next = new Map();
                        for (const item of result){
                            if (!item || typeof item !== 'object') continue;
                            const key = String(item.key || '');
                            if (!key) continue;
                            const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSnapshotFromUnknown"])(item, browserFilePath);
                            if (snapshot) next.set(key, snapshot);
                        }
                        setBrowserLiveCommentTargets({
                            "DesignBrowserPanel.useEffect.refresh": (current)=>browserSnapshotMapsEqual(current, next) ? current : next
                        }["DesignBrowserPanel.useEffect.refresh"]);
                        const activeSnapshot = next.get('active');
                        if (activeSnapshot) {
                            setActiveCommentTarget({
                                "DesignBrowserPanel.useEffect.refresh": (current)=>current && current.selector === activeSnapshot.selector && !browserSnapshotsEqual(current, activeSnapshot) ? {
                                        ...current,
                                        ...activeSnapshot
                                    } : current
                            }["DesignBrowserPanel.useEffect.refresh"]);
                            setTextDraft({
                                "DesignBrowserPanel.useEffect.refresh": (current)=>activeTool === 'inspect' || activeTool === 'edit' ? current : activeSnapshot.text
                            }["DesignBrowserPanel.useEffect.refresh"]);
                        }
                    } catch  {
                    // Cross-origin navigations, transient loads, and detached webviews can
                    // reject executeJavaScript. Keep the saved positions until the next tick.
                    } finally{
                        running = false;
                    }
                }
            }["DesignBrowserPanel.useEffect.refresh"];
            void refresh();
            const timer = window.setInterval({
                "DesignBrowserPanel.useEffect.timer": ()=>{
                    void refresh();
                }
            }["DesignBrowserPanel.useEffect.timer"], 250);
            return ({
                "DesignBrowserPanel.useEffect": ()=>{
                    cancelled = true;
                    window.clearInterval(timer);
                }
            })["DesignBrowserPanel.useEffect"];
        }
    }["DesignBrowserPanel.useEffect"], [
        activeCommentTarget?.elementId,
        activeCommentTarget?.selector,
        activeTool,
        browserFilePath,
        isBlank,
        webviewNode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            const next = browserImages.map({
                "DesignBrowserPanel.useEffect.next": (file)=>({
                        file,
                        url: URL.createObjectURL(file)
                    })
            }["DesignBrowserPanel.useEffect.next"]);
            setBrowserImagePreviews(next);
            return ({
                "DesignBrowserPanel.useEffect": ()=>{
                    next.forEach({
                        "DesignBrowserPanel.useEffect": (item)=>URL.revokeObjectURL(item.url)
                    }["DesignBrowserPanel.useEffect"]);
                }
            })["DesignBrowserPanel.useEffect"];
        }
    }["DesignBrowserPanel.useEffect"], [
        browserImages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            onPageInfoChange?.({
                title: isBlank ? 'Browser' : pageTitle,
                url: isBlank ? '' : currentUrl,
                ...!isBlank && pageIconUrl ? {
                    iconUrl: pageIconUrl
                } : {}
            });
        }
    }["DesignBrowserPanel.useEffect"], [
        currentUrl,
        isBlank,
        onPageInfoChange,
        pageIconUrl,
        pageTitle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserPanel.useEffect": ()=>{
            pickerRequestIdRef.current += 1;
            setActiveTool(null);
            setActiveCommentTarget(null);
            setActivePreviewCommentId(null);
            setCommentDraft('');
            setQueuedCommentNotes([]);
            setBrowserImages([]);
            setBrowserPreviewIndex(null);
            setTextDraft('');
            void cancelBrowserPicker();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DesignBrowserPanel.useEffect"], [
        browserFilePath
    ]);
    async function handleAddressSubmit(event) {
        event.preventDefault();
        navigateTo(addressValue);
        addressInputRef.current?.blur();
    }
    async function copyCurrentUrl() {
        const text = isBlank ? '' : currentUrl;
        if (!text) {
            setStatusMessage('No URL to copy');
            return;
        }
        await copyText(text);
        setStatusMessage('URL copied');
        setMenuOpen(false);
    }
    async function openCurrentExternally() {
        if (isBlank || !isHttpLikeUrl(currentUrl)) {
            setStatusMessage('Open an http URL first');
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openExternalUrl"])(currentUrl);
        setMenuOpen(false);
    }
    async function takeScreenshot() {
        if (!webviewNode || isBlank) {
            setStatusMessage('Open a page before taking a screenshot');
            return;
        }
        setSavingAction('screenshot');
        // Close the dropdown first so it cannot appear in a host compositor capture
        // (which screenshots the on-screen window region, not the guest surface).
        setMenuOpen(false);
        if (drawOverlayOpen) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>setCaptureChromeHidden(true));
        try {
            // Let the dropdown unmount + repaint before the compositor capture.
            await new Promise((resolve)=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve())));
            const dataUrl = await captureBrowserPageDataUrl();
            if (!dataUrl) throw new Error('screenshot capture failed');
            // Put the capture on the clipboard first so it is paste-ready (e.g. into
            // the chat composer) the instant it is taken; the project file is the
            // durable artifact, the clipboard is the fast path.
            const copied = await copyImageToClipboard(dataUrl);
            const base64 = dataUrl.split(',', 2)[1] ?? '';
            const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectBase64File"])(projectId, browserFileName('browser-capture', currentUrl, 'png'), base64);
            if (!file) throw new Error('screenshot save failed');
            await onRefreshFiles();
            // Stay on the browser so the confirmation toast is visible and the page
            // remains in view; the capture is reachable from Design Files. Show
            // whether it reached the clipboard so the user knows it is paste-ready.
            setStatusMessage(copied ? 'Screenshot copied to clipboard' : 'Screenshot saved to project');
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : 'Screenshot failed');
        } finally{
            setCaptureChromeHidden(false);
            setSavingAction(null);
            setMenuOpen(false);
        }
    }
    // Capture the live page as a PNG data URL. Prefers the desktop compositor
    // screenshot of the webview's on-screen region: the embedded <webview> guest
    // WebContents' own capturePage() frequently returns an all-black frame (its
    // GPU surface is not available to that capture path), whereas the host
    // window's composited surface clipped to the webview rect yields the real
    // page pixels the user sees — including authenticated content, since it is
    // the same logged-in session. Falls back to the guest capturePage() only when
    // no desktop host is present.
    async function captureBrowserPageDataUrl() {
        const node = webviewNode;
        if (!node) return null;
        const rect = node.getBoundingClientRect();
        const hostSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$exports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureHostRegionSnapshot"])({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        });
        if (hostSnap) return hostSnap.dataUrl;
        try {
            const image = await node.capturePage();
            return image.toDataURL();
        } catch  {
            return null;
        }
    }
    async function captureBrowserSnapshot() {
        if (!webviewNode || isBlank) return null;
        const rect = webviewNode.getBoundingClientRect();
        const hostSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$exports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureHostRegionSnapshot"])({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        });
        if (hostSnap) return hostSnap;
        try {
            const image = await webviewNode.capturePage();
            const dataUrl = image.toDataURL();
            const size = await imageSizeFromDataUrl(dataUrl);
            if (size) return {
                dataUrl,
                ...size
            };
            const dpr = window.devicePixelRatio || 1;
            return {
                dataUrl,
                w: Math.max(1, Math.round(rect.width * dpr)),
                h: Math.max(1, Math.round(rect.height * dpr))
            };
        } catch  {
            return null;
        }
    }
    async function savePageBrief() {
        if (!webviewNode || isBlank) {
            setStatusMessage('Open a page before saving a brief');
            return;
        }
        setSavingAction('brief');
        try {
            const brief = await webviewNode.executeJavaScript(PAGE_BRIEF_SCRIPT, true);
            const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(projectId, browserFileName('browser-brief', currentUrl, 'md'), pageBriefMarkdown(brief, currentUrl));
            if (!file) throw new Error('brief save failed');
            await onRefreshFiles();
            onOpenFile(file.name);
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : 'Brief save failed');
        } finally{
            setSavingAction(null);
            setMenuOpen(false);
        }
    }
    async function clearCookies(storage) {
        if (!desktopHostAvailable) {
            setStatusMessage('Desktop browser data is unavailable here');
            return;
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearHostBrowserData"])({
            cookies: true,
            storage
        });
        setStatusMessage(result.ok ? 'Browser data cleared' : 'reason' in result ? result.reason : 'Browser data clear failed');
        if (storage) {
            setHistory([]);
            setLoadUrl(EMPTY_URL);
            setCurrentUrl(EMPTY_URL);
            setAddressValue('');
            setAddressEditing(false);
            setNavigationState([
                browserHomeNavigationEntry()
            ], 0);
            pendingLoadTargetRef.current = null;
            saveHistory(projectId, []);
        }
        setMenuOpen(false);
    }
    function clearHistoryOnly() {
        setHistory([]);
        saveHistory(projectId, []);
        setStatusMessage('History cleared');
        setMenuOpen(false);
    }
    function navigateHistoryBy(delta) {
        const targetIndex = navigationIndex + delta;
        const entry = navigationStack[targetIndex];
        if (!entry) return;
        pendingLoadTargetRef.current = null;
        setNavigationState(navigationStack.slice(), targetIndex);
        setCurrentUrl(entry.url);
        setAddressValue(entry.url === EMPTY_URL ? '' : entry.url);
        setAddressEditing(false);
        setSuggestionsOpen(false);
        setMenuOpen(false);
        if (entry.url === EMPTY_URL) {
            pendingLoadTargetRef.current = null;
            setLoadUrl(EMPTY_URL);
            return;
        }
        if (webviewNode && canUseNativeHistoryNavigation(webviewNode, delta)) {
            if (delta < 0) webviewNode.goBack();
            else webviewNode.goForward();
        } else {
            loadWebviewUrl(entry.url);
        }
    }
    function reload(hard = false) {
        if (isBlank) return;
        if (webviewNode) {
            // Reload is enabled as soon as a URL is set, which can be before the
            // <webview> emits dom-ready; reload()/reloadIgnoringCache() throw in that
            // window. Guard so an early click can't crash the panel.
            try {
                if (hard) webviewNode.reloadIgnoringCache();
                else webviewNode.reload();
            } catch  {
                setLoadUrl((url)=>`${url}${url.includes('?') ? '&' : '?'}odReload=${Date.now()}`);
            }
        } else {
            setLoadUrl((url)=>`${url}${url.includes('?') ? '&' : '?'}odReload=${Date.now()}`);
        }
        setMenuOpen(false);
    }
    async function cancelBrowserPicker() {
        pickerRequestIdRef.current += 1;
        try {
            await webviewNode?.executeJavaScript(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_CANCEL_PICKER_SCRIPT"], true);
        } catch  {
        // The picker script only exists after a page is loaded; ignore misses.
        }
    }
    function clearBrowserTool() {
        void cancelBrowserPicker();
        setActiveTool(null);
        setActiveCommentTarget(null);
        setActivePreviewCommentId(null);
        setCommentDraft('');
        setQueuedCommentNotes([]);
        setBrowserImages([]);
        setBrowserPreviewIndex(null);
        setTextDraft('');
    }
    async function pickBrowserElement(tool) {
        if (isBlank || !webviewNode) {
            setStatusMessage('Open a page before using browser tools');
            return;
        }
        const requestId = pickerRequestIdRef.current + 1;
        pickerRequestIdRef.current = requestId;
        setActiveTool(tool);
        setActiveCommentTarget(null);
        setActivePreviewCommentId(null);
        setCommentDraft('');
        setQueuedCommentNotes([]);
        setBrowserImages([]);
        setBrowserPreviewIndex(null);
        setTextDraft('');
        setDrawOverlayOpen(false);
        setMenuOpen(false);
        setStatusMessage(tool === 'comment' ? 'Click an element to comment' : 'Click an element to tune');
        try {
            await webviewNode.executeJavaScript(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_CANCEL_PICKER_SCRIPT"], true);
            const result = await webviewNode.executeJavaScript((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserElementPickerScript"])(browserFilePath), true);
            if (pickerRequestIdRef.current !== requestId) return;
            const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSnapshotFromUnknown"])(result, browserFilePath);
            if (!snapshot) {
                setStatusMessage('No browser element selected');
                setActiveTool(null);
                return;
            }
            setActiveCommentTarget(snapshot);
            setTextDraft(snapshot.text);
            setActiveTool(tool);
            setStatusMessage(tool === 'comment' ? 'Add a browser comment' : editableProjectHtml ? 'Tune the element, then save HTML' : 'Tune is live only for non-project pages');
        } catch (error) {
            if (pickerRequestIdRef.current !== requestId) return;
            setStatusMessage(error instanceof Error ? error.message : 'Browser element picker failed');
            setActiveTool(null);
        }
    }
    function toggleBrowserTool(tool) {
        if (activeTool === tool) {
            clearBrowserTool();
            return;
        }
        void pickBrowserElement(tool);
    }
    function requestBrowserUsePrompt(action) {
        if (!onRequestBrowserUsePrompt) {
            setStatusMessage(t('browserUse.unavailable'));
            setBrowserUseOpen(false);
            return;
        }
        onRequestBrowserUsePrompt(browserUsePrompt(action, browserUseContext));
        setBrowserUseOpen(false);
        setMenuOpen(false);
        setSuggestionsOpen(false);
        setStatusMessage(t('browserUse.added'));
    }
    function updateActiveTargetStyle(prop, value) {
        setActiveCommentTarget((current)=>{
            if (!current) return current;
            const style = {
                ...current.style ?? {}
            };
            if (prop === 'paddingTop') {
                style.paddingTop = value;
                style.paddingRight = value;
                style.paddingBottom = value;
                style.paddingLeft = value;
            } else {
                style[prop] = value;
            }
            return {
                ...current,
                style
            };
        });
    }
    async function applyBrowserStyle(prop, value) {
        const target = activeCommentTarget;
        if (!target || !webviewNode) return;
        updateActiveTargetStyle(prop, value);
        const props = prop === 'paddingTop' ? [
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft'
        ] : [
            prop
        ];
        try {
            for (const item of props){
                await webviewNode.executeJavaScript((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserApplyStyleScript"])(target.selector, item, value), true);
            }
        } catch  {
            setStatusMessage('Could not apply style in browser page');
        }
    }
    async function applyBrowserText(value) {
        const target = activeCommentTarget;
        setTextDraft(value);
        setActiveCommentTarget((current)=>current ? {
                ...current,
                text: value
            } : current);
        if (!target || !webviewNode) return;
        try {
            await webviewNode.executeJavaScript((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserApplyTextScript"])(target.selector, value), true);
        } catch  {
            setStatusMessage('Could not edit text in browser page');
        }
    }
    async function saveBrowserDomEdit() {
        if (!webviewNode) return;
        const relativePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRelativePathFromBrowserUrl"])(currentUrl, resolvedDir);
        if (!relativePath) {
            setStatusMessage('Only project-local HTML pages can be saved');
            return;
        }
        setSavingDomEdit(true);
        try {
            const html = await webviewNode.executeJavaScript(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_SERIALIZE_HTML_SCRIPT"], true);
            const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeProjectTextFile"])(projectId, relativePath, html);
            if (!file) throw new Error('HTML save failed');
            await onRefreshFiles();
            setStatusMessage('HTML changes saved');
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : 'HTML save failed');
        } finally{
            setSavingDomEdit(false);
        }
    }
    function queueBrowserCommentDraft() {
        const note = commentDraft.trim();
        if (!note) return;
        setQueuedCommentNotes((current)=>[
                ...current,
                note
            ]);
        setCommentDraft('');
    }
    function addBrowserImages(files) {
        const images = files.filter((file)=>file.type.startsWith('image/'));
        if (images.length === 0) return;
        setBrowserImages((current)=>[
                ...current,
                ...images
            ]);
    }
    function removeBrowserImage(index) {
        setBrowserImages((current)=>current.filter((_, itemIndex)=>itemIndex !== index));
        setBrowserPreviewIndex((current)=>{
            if (current === null) return current;
            if (current === index) return null;
            return current > index ? current - 1 : current;
        });
    }
    async function saveBrowserComment() {
        if (!activeCommentTarget || !onSavePreviewComment) {
            setStatusMessage('Comment saving is unavailable');
            return;
        }
        const note = commentDraft.trim();
        if (!note && browserImages.length === 0 && (activeSavedComment?.attachments?.length ?? 0) === 0) return;
        setSendingComment(true);
        try {
            const saved = await onSavePreviewComment(browserTargetFromSnapshot(activeCommentTarget), note, false, browserImages);
            if (saved) {
                setActivePreviewCommentId(saved.id);
                setCommentDraft(saved.note);
                setQueuedCommentNotes([]);
                setBrowserImages([]);
                setBrowserPreviewIndex(null);
                setStatusMessage('Browser comment saved');
            }
        } finally{
            setSendingComment(false);
        }
    }
    async function sendBrowserCommentBatch() {
        if (!activeCommentTarget || !onSendBoardCommentAttachments) {
            setStatusMessage('Comment sending is unavailable');
            return;
        }
        const notes = [
            ...queuedCommentNotes
        ];
        if (commentDraft.trim()) notes.push(commentDraft.trim());
        if (notes.length === 0 && browserImages.length === 0 && activeSavedComment) {
            setSendingComment(true);
            try {
                await onSendBoardCommentAttachments((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentsToAttachments"])([
                    activeSavedComment
                ]));
                clearBrowserTool();
            } finally{
                setSendingComment(false);
            }
            return;
        }
        if (notes.length === 0 && browserImages.length === 0) return;
        setSendingComment(true);
        try {
            const existingAttachments = activeSavedComment?.attachments ?? [];
            const attachments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$comments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBoardCommentAttachments"])({
                target: browserTargetFromSnapshot(activeCommentTarget),
                notes,
                includeImageOnly: browserImages.length > 0,
                imageAttachmentCount: browserImages.length
            }).map((attachment)=>existingAttachments.length > 0 ? {
                    ...attachment,
                    imageAttachments: existingAttachments
                } : attachment);
            const accepted = await onSendBoardCommentAttachments(attachments, browserImages);
            if (accepted === false) return;
            clearBrowserTool();
        } finally{
            setSendingComment(false);
        }
    }
    const viewportPreset = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_VIEWPORT_PRESETS"].find((preset)=>preset.id === viewport) ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_VIEWPORT_PRESETS"][0];
    const viewportStyle = viewportPreset.width ? {
        '--db-viewport-width': `${viewportPreset.width}px`,
        '--db-viewport-height': `${viewportPreset.height}px`
    } : undefined;
    const browserPopoverBounds = (()=>{
        const rect = webviewNode?.getBoundingClientRect();
        if (!rect || rect.width <= 0 || rect.height <= 0) return undefined;
        return {
            width: rect.width,
            height: rect.height
        };
    })();
    const activeBrowserPreviewImage = browserPreviewIndex !== null ? browserImagePreviews[browserPreviewIndex] ?? null : null;
    const browserPreviewImageModal = activeBrowserPreviewImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "staged-preview-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": activeBrowserPreviewImage.file.name,
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget) setBrowserPreviewIndex(null);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "staged-preview-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "staged-preview-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            title: activeBrowserPreviewImage.file.name,
                            children: activeBrowserPreviewImage.file.name
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 1722,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "icon-only od-tooltip",
                            onClick: ()=>setBrowserPreviewIndex(null),
                            "aria-label": t('common.close'),
                            title: t('common.close'),
                            "data-tooltip": t('common.close'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1731,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 1723,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                    lineNumber: 1721,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: activeBrowserPreviewImage.url,
                    alt: activeBrowserPreviewImage.file.name
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                    lineNumber: 1734,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
            lineNumber: 1720,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 1711,
        columnNumber: 9
    }, this), document.body) : null;
    const commentComposer = activeTool === 'comment' && activeCommentTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$BoardComposerPopover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoardComposerPopover"], {
        target: activeCommentTarget,
        existing: activeSavedComment,
        draft: commentDraft,
        notes: queuedCommentNotes,
        onDraft: setCommentDraft,
        onAddDraft: queueBrowserCommentDraft,
        onRemoveQueuedNote: (index)=>setQueuedCommentNotes((current)=>current.filter((_, itemIndex)=>itemIndex !== index)),
        onClose: clearBrowserTool,
        onSaveComment: ()=>saveBrowserComment(),
        onSendBatch: ()=>sendBrowserCommentBatch(),
        onRemoveMember: ()=>{},
        onDeleteComment: onRemovePreviewComment,
        images: browserImagePreviews,
        existingImages: (activeSavedComment?.attachments ?? []).map((attachment)=>({
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectRawUrl"])(projectId, attachment.path),
                name: attachment.name
            })),
        onAttachImages: addBrowserImages,
        onRemoveImage: removeBrowserImage,
        onPreviewImage: setBrowserPreviewIndex,
        sending: sendingComment,
        queueOnSend: sendDisabled && Boolean(onSendBoardCommentAttachments),
        sendDisabled: !onSendBoardCommentAttachments,
        t: t,
        scale: 1,
        bounds: browserPopoverBounds,
        commenting: true
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 1741,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "design-browser",
        "aria-label": "Design Browser",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-chrome",
                ref: chromeRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: "Go Back",
                                disabled: !canGoBack,
                                onClick: ()=>navigateHistoryBy(-1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-left",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1781,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1776,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: "Go Forward",
                                disabled: !canGoForward,
                                onClick: ()=>navigateHistoryBy(1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-right",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1788,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1783,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: isLoading ? 'Loading...' : 'Reload',
                                className: isLoading ? 'is-spinning' : '',
                                disabled: isBlank,
                                onClick: ()=>reload(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "reload",
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1796,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1790,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserViewportControls, {
                                viewport: viewport,
                                onViewport: setViewport,
                                disabled: isBlank
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1798,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 1775,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "db-address-form",
                        onSubmit: handleAddressSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserSiteIcon, {
                                className: "db-address-site-icon",
                                fallback: "globe",
                                iconUrl: isBlank ? undefined : pageIconUrl
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1805,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-address-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: addressInputRef,
                                        value: shownAddressValue,
                                        onChange: (event)=>{
                                            setAddressEditing(true);
                                            setAddressValue(event.target.value);
                                            setSuggestionsOpen(true);
                                        },
                                        onFocus: (event)=>{
                                            setAddressEditing(true);
                                            setAddressValue(isBlank ? '' : currentUrl);
                                            setSuggestionsOpen(true);
                                            const input = event.currentTarget;
                                            window.requestAnimationFrame(()=>input.select());
                                        },
                                        onBlur: (event)=>{
                                            if (event.currentTarget.form?.contains(event.relatedTarget)) return;
                                            setSuggestionsOpen(false);
                                            window.setTimeout(()=>setAddressEditing(false), 80);
                                        },
                                        placeholder: addressDisplayParts.url ? '' : 'Enter URL or search...',
                                        "aria-label": "Browser address",
                                        autoComplete: "off",
                                        spellCheck: false
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1811,
                                        columnNumber: 13
                                    }, this),
                                    addressDisplayParts.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-address-display",
                                        "aria-hidden": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-address-url",
                                                children: addressDisplayParts.url
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1838,
                                                columnNumber: 17
                                            }, this),
                                            addressDisplayParts.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "db-address-separator",
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 1841,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "db-address-title",
                                                        children: addressDisplayParts.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 1842,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1837,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1810,
                                columnNumber: 11
                            }, this),
                            suggestionsOpen && suggestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-suggestions",
                                role: "listbox",
                                children: suggestions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "option",
                                        onFocus: ()=>warmBrowserOrigin(item.url),
                                        onPointerEnter: ()=>warmBrowserOrigin(item.url),
                                        onClick: ()=>navigateTo(item.url),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-suggestion-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserSiteIcon, {
                                                    fallback: item.type === 'History' ? 'history' : 'globe',
                                                    iconUrl: item.iconUrl
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                    lineNumber: 1860,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1859,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-suggestion-copy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 1866,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: item.detail
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 1867,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1865,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-suggestion-type",
                                                children: item.type
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1869,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1851,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1849,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 1804,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-actions",
                        children: [
                            desktopHostAvailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: t('fileViewer.screenshot'),
                                wrapperClassName: "db-action-item db-action-secondary db-action-screenshot",
                                disabled: isBlank || savingAction != null,
                                onClick: takeScreenshot,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RemixIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemixIcon"], {
                                    name: "screenshot-2-line",
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1883,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1877,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: t('browserUse.title'),
                                wrapperClassName: "db-action-item db-action-browser-use",
                                className: browserUseOpen ? 'is-active' : '',
                                onClick: ()=>{
                                    setBrowserUseOpen((open)=>!open);
                                    setMenuOpen(false);
                                    setSuggestionsOpen(false);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "lightbulb",
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1896,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1886,
                                columnNumber: 11
                            }, this),
                            browserUseOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserUseMenu, {
                                onPick: requestBrowserUsePrompt
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1899,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: "Save page brief",
                                wrapperClassName: "db-action-item db-action-secondary db-action-save",
                                disabled: isBlank || savingAction != null,
                                onClick: savePageBrief,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "file-code",
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1907,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1901,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                                label: "Browser menu",
                                wrapperClassName: "db-action-item db-action-menu",
                                onClick: ()=>{
                                    setMenuOpen((open)=>!open);
                                    setBrowserUseOpen(false);
                                    setSuggestionsOpen(false);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "more-horizontal",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1918,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1909,
                                columnNumber: 11
                            }, this),
                            menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-menu",
                                role: "menu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: takeScreenshot,
                                        disabled: isBlank || savingAction != null,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "image",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1923,
                                                columnNumber: 17
                                            }, this),
                                            "Copy Screenshot"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1922,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: ()=>reload(true),
                                        disabled: isBlank,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "reload",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1927,
                                                columnNumber: 17
                                            }, this),
                                            "Hard Reload"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1926,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: copyCurrentUrl,
                                        disabled: isBlank,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "copy",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1931,
                                                columnNumber: 17
                                            }, this),
                                            "Copy URL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1930,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: openCurrentExternally,
                                        disabled: isBlank || !isHttpLikeUrl(currentUrl),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "external-link",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1935,
                                                columnNumber: 17
                                            }, this),
                                            "Open in Browser"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1934,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-menu-separator"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1938,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: savePageBrief,
                                        disabled: isBlank || savingAction != null,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "file",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1940,
                                                columnNumber: 17
                                            }, this),
                                            "Save Page Brief"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1939,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: clearHistoryOnly,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "history",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1944,
                                                columnNumber: 17
                                            }, this),
                                            "Clear Browsing History"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1943,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: ()=>void clearCookies(false),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "trash",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1948,
                                                columnNumber: 17
                                            }, this),
                                            "Clear Cookies"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1947,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        onClick: ()=>void clearCookies(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "trash",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 1952,
                                                columnNumber: 17
                                            }, this),
                                            "Clear All Data"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1951,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 1921,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 1875,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 1774,
                columnNumber: 7
            }, this),
            statusMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-status",
                children: statusMessage
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 1959,
                columnNumber: 24
            }, this) : null,
            browserPreviewImageModal,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `db-content db-content-viewport-${isBlank ? 'desktop' : viewport}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$PreviewDrawOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewDrawOverlay"], {
                    active: drawOverlayOpen,
                    captureTarget: activeCommentTarget ? browserTargetFromSnapshot(activeCommentTarget) : null,
                    captureViewport: !isBlank,
                    captureSnapshot: desktopHostAvailable ? captureBrowserSnapshot : undefined,
                    captureFrameRect: ()=>webviewNode?.getBoundingClientRect() ?? null,
                    filePath: isBlank ? undefined : currentUrl,
                    hideChrome: captureChromeHidden,
                    onActiveChange: setDrawOverlayOpen,
                    sendDisabled: sendDisabled,
                    sendDisabledReason: t('chat.annotationSendDisabledReason'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `db-viewport-frame db-viewport-${isBlank ? 'desktop' : viewport}`,
                            style: isBlank ? undefined : viewportStyle,
                            children: [
                                isBlank ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignBrowserStart, {
                                    onNavigate: navigateTo,
                                    projectId: projectId
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1979,
                                    columnNumber: 15
                                }, this) : desktopHostAvailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("webview", {
                                    ref: assignWebviewNode,
                                    className: "db-webview",
                                    src: loadUrl,
                                    partition: DESIGN_BROWSER_PARTITION,
                                    title: pageTitle
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1984,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "db-fallback",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        title: pageTitle,
                                        src: loadUrl,
                                        onLoad: (event)=>syncFromFallbackFrame(event.currentTarget)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 1993,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 1992,
                                    columnNumber: 15
                                }, this),
                                commentComposer,
                                (activeTool === 'inspect' || activeTool === 'edit') && activeCommentTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserInspectPanel, {
                                    mode: activeTool,
                                    target: activeCommentTarget,
                                    textDraft: textDraft,
                                    canSave: editableProjectHtml,
                                    saving: savingDomEdit,
                                    onApplyStyle: (prop, value)=>{
                                        void applyBrowserStyle(prop, value);
                                    },
                                    onTextDraft: (value)=>{
                                        void applyBrowserText(value);
                                    },
                                    onSave: ()=>{
                                        void saveBrowserDomEdit();
                                    },
                                    onClose: clearBrowserTool
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 2002,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 1974,
                            columnNumber: 11
                        }, this),
                        !isBlank && activeTool && !activeCommentTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-tool-hint",
                            role: "status",
                            children: activeTool === 'comment' ? 'Click an element to comment' : 'Click an element to tune'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2016,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                    lineNumber: 1962,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 1961,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 1773,
        columnNumber: 5
    }, this);
}
_s(DesignBrowserPanel, "DL9v+krwuGftH2kh0PGiZf5vxjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c4 = DesignBrowserPanel;
function IconTooltipButton({ label, className, wrapperClassName, children, ...buttonProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: [
            'db-tooltip-anchor od-tooltip',
            wrapperClassName
        ].filter(Boolean).join(' '),
        "data-tooltip": label,
        "data-tooltip-placement": "bottom",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ...buttonProps,
            type: "button",
            className: [
                'db-icon-btn',
                className
            ].filter(Boolean).join(' '),
            "aria-label": label,
            title: label,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
            lineNumber: 2043,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2038,
        columnNumber: 5
    }, this);
}
_c5 = IconTooltipButton;
function BrowserUseMenu({ onPick }) {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrowserUseMenu.useMemo[categories]": ()=>filterBrowserUseCategories(BROWSER_USE_CATEGORIES, query, {
                "BrowserUseMenu.useMemo[categories]": (category)=>t(category.titleKey)
            }["BrowserUseMenu.useMemo[categories]"], {
                "BrowserUseMenu.useMemo[categories]": (action)=>[
                        t(browserUseActionOutputKey(action)),
                        localizedBrowserUseInput(t, action)
                    ]
            }["BrowserUseMenu.useMemo[categories]"])
    }["BrowserUseMenu.useMemo[categories]"], [
        query,
        t
    ]);
    const visibleTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrowserUseMenu.useMemo[visibleTotal]": ()=>categories.reduce({
                "BrowserUseMenu.useMemo[visibleTotal]": (sum, category)=>sum + category.actions.length
            }["BrowserUseMenu.useMemo[visibleTotal]"], 0)
    }["BrowserUseMenu.useMemo[visibleTotal]"], [
        categories
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "db-menu db-browser-use-menu",
        role: "menu",
        "aria-label": t('browserUse.title'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-browser-use-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: t('browserUse.title')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2080,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: t('browserUse.summary', {
                            count: BROWSER_USE_ACTION_TOTAL
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2081,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "db-browser-use-search",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "search",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2084,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: query,
                        "aria-label": t('browserUse.searchAria'),
                        placeholder: t('browserUse.searchPlaceholder'),
                        onChange: (event)=>setQuery(event.currentTarget.value)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2085,
                        columnNumber: 9
                    }, this),
                    query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: visibleTotal
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2092,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2083,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-browser-use-list",
                children: [
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "db-browser-use-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "db-browser-use-section-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t(category.titleKey)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                            lineNumber: 2098,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: category.actions.length
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                            lineNumber: 2099,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 2097,
                                    columnNumber: 13
                                }, this),
                                category.actions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "menuitem",
                                        className: "db-browser-use-action",
                                        onClick: ()=>onPick(action),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "sparkles",
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 2109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-browser-use-action-copy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: action.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 2111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: t(browserUseActionOutputKey(action))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 2112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 2110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "db-browser-use-action-input",
                                                children: localizedBrowserUseInput(t, action)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 2114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, action.id, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2102,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, category.id, true, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2096,
                            columnNumber: 11
                        }, this)),
                    categories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-browser-use-empty",
                        role: "status",
                        children: t('browserUse.empty')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2120,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2094,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2078,
        columnNumber: 5
    }, this);
}
_s1(BrowserUseMenu, "qphvSkzDaUlq431rC4P8P7oGp6E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c6 = BrowserUseMenu;
function BrowserViewportControls({ disabled, onViewport, viewport }) {
    _s2();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activePreset = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_VIEWPORT_PRESETS"].find((preset)=>preset.id === viewport) ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_VIEWPORT_PRESETS"][0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrowserViewportControls.useEffect": ()=>{
            if (!open) return;
            const onPointerDown = {
                "BrowserViewportControls.useEffect.onPointerDown": (event)=>{
                    if (!menuRef.current?.contains(event.target)) setOpen(false);
                }
            }["BrowserViewportControls.useEffect.onPointerDown"];
            const onKeyDown = {
                "BrowserViewportControls.useEffect.onKeyDown": (event)=>{
                    if (event.key === 'Escape') setOpen(false);
                }
            }["BrowserViewportControls.useEffect.onKeyDown"];
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
            return ({
                "BrowserViewportControls.useEffect": ()=>{
                    document.removeEventListener('pointerdown', onPointerDown);
                    document.removeEventListener('keydown', onKeyDown);
                }
            })["BrowserViewportControls.useEffect"];
        }
    }["BrowserViewportControls.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "db-viewport-switcher",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTooltipButton, {
                label: activePreset.title,
                disabled: disabled,
                className: open ? 'is-active' : '',
                onClick: ()=>setOpen((value)=>!value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RemixIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemixIcon"], {
                        name: browserViewportIcon(activePreset.id),
                        size: 14,
                        className: "db-viewport-icon"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "db-viewport-label",
                        children: activePreset.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RemixIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemixIcon"], {
                        name: "arrow-down-s-line",
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2159,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-viewport-menu",
                role: "listbox",
                "aria-label": "Browser viewport",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$design$2d$browser$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BROWSER_VIEWPORT_PRESETS"].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "option",
                        "aria-selected": preset.id === viewport,
                        className: preset.id === viewport ? 'active' : '',
                        onClick: ()=>{
                            onViewport(preset.id);
                            setOpen(false);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "db-viewport-menu-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$RemixIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemixIcon"], {
                                        name: browserViewportIcon(preset.id),
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: preset.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2187,
                                columnNumber: 15
                            }, this),
                            preset.id === viewport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2191,
                                columnNumber: 41
                            }, this) : null
                        ]
                    }, preset.id, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2176,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2174,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2158,
        columnNumber: 5
    }, this);
}
_s2(BrowserViewportControls, "iuQeQ4sVg+lFcobs6EbZQm9Prm4=");
_c7 = BrowserViewportControls;
function BrowserCommentMarkers({ activeCommentId, comments, liveTargets, onOpen }) {
    if (comments.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "db-comment-layer",
        "aria-label": "Browser comments",
        children: comments.map((comment, index)=>{
            const snapshot = liveTargets.get(`comment:${comment.id}`) ?? browserSnapshotFromComment(comment, comment.filePath);
            const bounds = browserOverlayBounds(snapshot);
            const active = comment.id === activeCommentId;
            const label = comment.label || comment.elementId || 'Browser comment';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `db-comment-marker${active ? ' active' : ''}`,
                style: {
                    left: bounds.left,
                    top: bounds.top,
                    width: bounds.width,
                    height: bounds.height
                },
                title: `${index + 1}. ${label}: ${comment.note}`,
                "aria-label": `Open browser comment for ${label}`,
                onClick: ()=>onOpen(comment),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: index + 1
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                    lineNumber: 2234,
                    columnNumber: 13
                }, this)
            }, comment.id, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2220,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2213,
        columnNumber: 5
    }, this);
}
_c8 = BrowserCommentMarkers;
function browserSnapshotMapsEqual(current, next) {
    if (current.size !== next.size) return false;
    for (const [key, snapshot] of current){
        const candidate = next.get(key);
        if (!candidate || !browserSnapshotsEqual(snapshot, candidate)) return false;
    }
    return true;
}
function browserSnapshotsEqual(left, right) {
    return left.filePath === right.filePath && left.elementId === right.elementId && left.selector === right.selector && left.label === right.label && left.text === right.text && left.htmlHint === right.htmlHint && left.position.x === right.position.x && left.position.y === right.position.y && left.position.width === right.position.width && left.position.height === right.position.height && JSON.stringify(left.style ?? null) === JSON.stringify(right.style ?? null);
}
function BrowserCommentComposer({ draft, existing, notes, onAddDraft, onClose, onDeleteComment, onDraft, onRemoveQueuedNote, onSaveComment, onSendBatch, sendDisabled, sending, target }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "comment-popover db-comment-popover",
        role: "dialog",
        "aria-label": "Browser comment",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comment-popover-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                title: target.label,
                                children: target.label || 'Browser element'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                title: target.selector,
                                children: target.selector
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ghost",
                        onClick: onClose,
                        "aria-label": "Close browser comment",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2307,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2301,
                columnNumber: 7
            }, this),
            notes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "board-note-list",
                children: notes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "board-note-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: note
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2314,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost",
                                onClick: ()=>onRemoveQueuedNote(index),
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2315,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${note}:${index}`, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2313,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2311,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                "aria-label": "Browser comment note",
                value: draft,
                onChange: (event)=>onDraft(event.target.value),
                placeholder: "Describe the change or issue..."
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comment-popover-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comment-popover-actions-start",
                        children: [
                            existing && onDeleteComment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost comment-popover-delete",
                                disabled: sending,
                                onClick: ()=>void onDeleteComment(existing.id),
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2331,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost",
                                disabled: sending || !draft.trim(),
                                onClick: onAddDraft,
                                children: "Add note"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comment-popover-actions-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ghost",
                                disabled: sending || !draft.trim() && !existing,
                                onClick: onSaveComment,
                                children: "Save comment"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "primary",
                                disabled: sending || sendDisabled || !draft.trim() && notes.length === 0 && !existing,
                                onClick: onSendBatch,
                                children: sending ? 'Sending...' : 'Send to chat'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2343,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2328,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2300,
        columnNumber: 5
    }, this);
}
_c9 = BrowserCommentComposer;
function BrowserInspectPanel({ canSave, mode, onApplyStyle, onClose, onSave, onTextDraft, saving, target, textDraft }) {
    const draft = browserStyleDraftFromTarget(target);
    const fontSize = parsePx(draft.fontSize, 16);
    const padding = parsePx(draft.paddingTop, 0);
    const radius = parsePx(draft.borderRadius, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "inspect-panel db-inspect-panel",
        "data-testid": "browser-inspect-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "inspect-panel-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-panel-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                title: target.label,
                                children: mode === 'edit' ? 'Edit HTML element' : 'Tune browser element'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                title: target.selector,
                                children: target.label || target.selector
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ghost",
                        onClick: onClose,
                        "aria-label": "Close browser tune",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "close",
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2386,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2385,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inspect-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-section-label",
                        children: "Colors"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "db-inspect-color",
                                children: "Text"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "db-inspect-color",
                                type: "color",
                                value: cssColorToHex(draft.color, '#1f1f1f'),
                                onChange: (event)=>onApplyStyle('color', event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inspect-row-value",
                                children: cssColorToHex(draft.color, '#1f1f1f')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2400,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "db-inspect-bg",
                                children: "Fill"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "db-inspect-bg",
                                type: "color",
                                value: cssColorToHex(draft.backgroundColor, '#ffffff'),
                                onChange: (event)=>onApplyStyle('backgroundColor', event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2404,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inspect-row-value",
                                children: cssColorToHex(draft.backgroundColor, '#ffffff')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inspect-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-section-label",
                        children: "Type"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "db-inspect-font-size",
                                children: "Size"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "db-inspect-font-size",
                                type: "range",
                                min: 8,
                                max: 96,
                                value: fontSize,
                                onChange: (event)=>onApplyStyle('fontSize', `${event.target.value}px`)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inspect-row-value",
                                children: [
                                    fontSize,
                                    "px"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2426,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "db-inspect-weight",
                                children: "Weight"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "db-inspect-weight",
                                value: draft.fontWeight,
                                onChange: (event)=>onApplyStyle('fontWeight', event.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "300",
                                        children: "300"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "400",
                                        children: "400"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "500",
                                        children: "500"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "600",
                                        children: "600"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "700",
                                        children: "700"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "800",
                                        children: "800"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inspect-row-value",
                                children: draft.fontWeight
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2428,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inspect-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-section-label",
                        children: "Spacing"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "db-inspect-padding",
                                children: "Pad"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "db-inspect-padding",
                                type: "range",
                                min: 0,
                                max: 80,
                                value: padding,
                                onChange: (event)=>onApplyStyle('paddingTop', `${event.target.value}px`)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inspect-row-value",
                                children: [
                                    padding,
                                    "px"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2448,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "db-inspect-radius",
                                children: "Radius"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "db-inspect-radius",
                                type: "range",
                                min: 0,
                                max: 80,
                                value: radius,
                                onChange: (event)=>onApplyStyle('borderRadius', `${event.target.value}px`)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inspect-row-value",
                                children: [
                                    radius,
                                    "px"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2470,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2446,
                columnNumber: 7
            }, this),
            mode === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inspect-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspect-section-label",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2476,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        "aria-label": "Element text",
                        className: "db-inspect-text",
                        value: textDraft,
                        onChange: (event)=>onTextDraft(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2477,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2475,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "inspect-panel-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "ghost",
                        onClick: onClose,
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "primary",
                        disabled: !canSave || saving,
                        onClick: onSave,
                        children: saving ? 'Saving...' : canSave ? 'Save HTML' : 'Live only'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2488,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2486,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2379,
        columnNumber: 5
    }, this);
}
_c10 = BrowserInspectPanel;
function browserSnapshotFromComment(comment, filePath) {
    return {
        filePath,
        elementId: comment.elementId,
        selector: comment.selector,
        label: comment.label,
        text: comment.text,
        position: comment.position,
        htmlHint: comment.htmlHint,
        style: comment.style,
        selectionKind: 'element'
    };
}
function browserTargetFromSnapshot(snapshot) {
    return {
        filePath: snapshot.filePath,
        elementId: snapshot.elementId,
        selector: snapshot.selector,
        label: snapshot.label,
        text: snapshot.text.trim().slice(0, 500),
        position: snapshot.position,
        htmlHint: snapshot.htmlHint.trim().slice(0, 500),
        style: snapshot.style,
        selectionKind: 'element'
    };
}
function browserOverlayBounds(snapshot) {
    const position = snapshot.position;
    return {
        left: Math.round(position.x),
        top: Math.round(position.y),
        width: Math.max(1, Math.round(position.width)),
        height: Math.max(1, Math.round(position.height))
    };
}
function browserCommentsToAttachments(comments) {
    return comments.map((comment, index)=>({
            id: comment.id,
            order: index + 1,
            filePath: comment.filePath,
            elementId: comment.elementId,
            selector: comment.selector,
            label: comment.label,
            comment: comment.note.trim() || 'Saved browser comment',
            currentText: comment.text.trim().slice(0, 500),
            pagePosition: comment.position,
            htmlHint: comment.htmlHint.trim().slice(0, 500),
            style: comment.style,
            selectionKind: 'element',
            imageAttachments: comment.attachments && comment.attachments.length > 0 ? comment.attachments : undefined,
            source: 'saved-comment'
        }));
}
function browserBoardCommentAttachments(input) {
    return input.notes.map((note)=>note.trim()).filter(Boolean).map((note, index)=>({
            id: `${input.target.elementId}-browser-${index + 1}`,
            order: index + 1,
            filePath: input.target.filePath,
            elementId: input.target.elementId,
            selector: input.target.selector,
            label: input.target.label,
            comment: note,
            currentText: input.target.text.trim().slice(0, 500),
            pagePosition: input.target.position,
            htmlHint: input.target.htmlHint.trim().slice(0, 500),
            style: input.target.style,
            selectionKind: 'element',
            source: 'board-batch'
        }));
}
function browserStyleDraftFromTarget(target) {
    const style = target.style ?? {};
    return {
        backgroundColor: style.backgroundColor || '#ffffff',
        borderRadius: style.borderRadius || '0px',
        color: style.color || '#1f1f1f',
        fontSize: style.fontSize || '16px',
        fontWeight: style.fontWeight || '400',
        lineHeight: style.lineHeight || 'normal',
        paddingTop: style.paddingTop || style.paddingRight || style.paddingBottom || style.paddingLeft || '0px',
        textAlign: style.textAlign || 'start'
    };
}
function parsePx(value, fallback) {
    const match = /^(-?\d+(?:\.\d+)?)px$/i.exec(value.trim());
    if (!match) return fallback;
    const next = Math.round(Number(match[1]));
    return Number.isFinite(next) ? next : fallback;
}
function cssColorToHex(value, fallback) {
    const raw = value.trim();
    if (/^#[0-9a-f]{6}$/i.test(raw)) return raw;
    if (/^#[0-9a-f]{3}$/i.test(raw)) {
        return `#${raw.slice(1).split('').map((char)=>char + char).join('')}`;
    }
    const match = raw.match(/rgba?\(\s*([0-9.]+)[ ,]+([0-9.]+)[ ,]+([0-9.]+)/i);
    if (!match) return fallback;
    const toHex = (part)=>{
        const number = Math.max(0, Math.min(255, Math.round(Number(part ?? 0))));
        return number.toString(16).padStart(2, '0');
    };
    return `#${toHex(match[1])}${toHex(match[2])}${toHex(match[3])}`;
}
const REFERENCE_ALL_CATEGORY = 'all';
function DesignBrowserStart({ onNavigate, projectId }) {
    _s3();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(REFERENCE_ALL_CATEGORY);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignBrowserStart.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackReferenceBoardSurfaceView"])(analytics.track, {
                page_name: 'file_manager',
                area: 'reference_board',
                ...projectId ? {
                    project_id: projectId
                } : {}
            });
        }
    }["DesignBrowserStart.useEffect"], [
        analytics.track,
        projectId
    ]);
    const visibleGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignBrowserStart.useMemo[visibleGroups]": ()=>filterReferenceGroups(REFERENCE_GROUPS, activeCategory, query)
    }["DesignBrowserStart.useMemo[visibleGroups]"], [
        activeCategory,
        query
    ]);
    const trimmedQuery = query.trim();
    const hasQuery = trimmedQuery.length > 0;
    const resetFilters = ()=>{
        setQuery('');
        setActiveCategory(REFERENCE_ALL_CATEGORY);
        searchRef.current?.focus();
    };
    const selectCategory = (categoryId)=>{
        setActiveCategory(categoryId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackReferenceBoardClick"])(analytics.track, {
            page_name: 'file_manager',
            area: 'reference_board',
            element: 'category_chip',
            category_id: categoryId,
            ...projectId ? {
                project_id: projectId
            } : {}
        });
    };
    const openSite = (site)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackReferenceBoardClick"])(analytics.track, {
            page_name: 'file_manager',
            area: 'reference_board',
            element: 'open_site',
            site_id: referenceSiteId(site.url),
            ...projectId ? {
                project_id: projectId
            } : {}
        });
        onNavigate(site.url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "db-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-start-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "db-start-hero-copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-kicker",
                            children: "Open Design browser"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2676,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Reference Board"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2677,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "db-start-sub",
                            children: "A curated set of references across inspiration, real product UI, motion, color, type, assets, and design systems. Open one to browse it live while gathering design language for the next artifact."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                            lineNumber: 2678,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                    lineNumber: 2675,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2674,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-reference-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-reference-chips",
                        role: "tablist",
                        "aria-label": "Reference category",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": activeCategory === REFERENCE_ALL_CATEGORY,
                                className: `db-reference-chip${activeCategory === REFERENCE_ALL_CATEGORY ? ' is-active' : ''}`,
                                onClick: ()=>selectCategory(REFERENCE_ALL_CATEGORY),
                                children: [
                                    "All",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-reference-chip-count",
                                        children: REFERENCE_TOTAL
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2700,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2692,
                                columnNumber: 11
                            }, this),
                            REFERENCE_GROUPS.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": activeCategory === group.id,
                                    className: `db-reference-chip${activeCategory === group.id ? ' is-active' : ''}`,
                                    onClick: ()=>selectCategory(group.id),
                                    children: [
                                        group.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "db-reference-chip-count",
                                            children: group.sites.length
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                            lineNumber: 2712,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 2703,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2687,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-reference-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "db-reference-search-icon",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "search",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 2718,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2717,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: searchRef,
                                type: "search",
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                onFocus: ()=>{
                                    // Tracked on focus rather than every keystroke so each
                                    // engagement counts once.
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackReferenceBoardClick"])(analytics.track, {
                                        page_name: 'file_manager',
                                        area: 'reference_board',
                                        element: 'search_input',
                                        ...projectId ? {
                                            project_id: projectId
                                        } : {}
                                    });
                                },
                                onKeyDown: (event)=>{
                                    if (event.key === 'Escape' && query) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        setQuery('');
                                    }
                                },
                                placeholder: "Search references…",
                                "aria-label": "Search references"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2720,
                                columnNumber: 11
                            }, this),
                            hasQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "db-reference-search-clear",
                                "aria-label": "Clear search",
                                onClick: ()=>{
                                    setQuery('');
                                    searchRef.current?.focus();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                    lineNumber: 2755,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2746,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2716,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2686,
                columnNumber: 7
            }, this),
            visibleGroups.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-reference-empty",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "db-reference-empty-title",
                        children: [
                            "No references match “",
                            trimmedQuery,
                            "”."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2763,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "db-reference-empty-action",
                        onClick: resetFilters,
                        children: "Clear filters"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2766,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2762,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-reference-board",
                children: visibleGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "db-reference-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    group.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-reference-group-count",
                                        children: group.sites.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2780,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2778,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-reference-list",
                                children: group.sites.map((site)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "db-reference-card",
                                        onPointerEnter: ()=>warmBrowserOrigin(site.url),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>openSite(site),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserSiteIcon, {
                                                        className: "db-reference-icon",
                                                        fallback: "globe",
                                                        iconUrl: referenceIconUrl(site.url)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 2790,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "db-reference-title",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: site.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                                lineNumber: 2796,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: hostnameFromUrl(site.url)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                                lineNumber: 2797,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                        lineNumber: 2795,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 2789,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: site.detail
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 2800,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "db-reference-actions",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>openSite(site),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "globe",
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                            lineNumber: 2803,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Open"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                    lineNumber: 2802,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                                lineNumber: 2801,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, site.url, true, {
                                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                        lineNumber: 2784,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                                lineNumber: 2782,
                                columnNumber: 15
                            }, this)
                        ]
                    }, group.id, true, {
                        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                        lineNumber: 2777,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
                lineNumber: 2775,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2673,
        columnNumber: 5
    }, this);
}
_s3(DesignBrowserStart, "eMIsGtvn9sg07EHTlnR+D1K3UP8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c11 = DesignBrowserStart;
function BrowserSiteIcon({ className, fallback, iconUrl }) {
    _s4();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cleanUrl = cleanIconUrl(iconUrl);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: [
            'db-site-icon',
            className
        ].filter(Boolean).join(' '),
        children: cleanUrl && !failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            src: cleanUrl,
            onError: ()=>setFailed(true)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
            lineNumber: 2832,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: fallback,
            size: 13
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
            lineNumber: 2834,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/DesignBrowserPanel.tsx",
        lineNumber: 2830,
        columnNumber: 5
    }, this);
}
_s4(BrowserSiteIcon, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c12 = BrowserSiteIcon;
function loadHistory(projectId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(historyStorageKey(projectId));
        const parsed = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(isHistoryEntry).sort((left, right)=>right.lastVisitedAt - left.lastVisitedAt).slice(0, HISTORY_LIMIT);
    } catch  {
        return [];
    }
}
function saveHistory(projectId, history) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(historyStorageKey(projectId), JSON.stringify(history.slice(0, HISTORY_LIMIT)));
    } catch  {
    // Ignore storage quota and private-mode failures.
    }
}
function historyStorageKey(projectId) {
    return `od:design-browser:${projectId}:history:v1`;
}
function isHistoryEntry(value) {
    if (typeof value !== 'object' || value == null || Array.isArray(value)) return false;
    const record = value;
    return typeof record.url === 'string' && typeof record.title === 'string' && typeof record.lastVisitedAt === 'number' && typeof record.visitCount === 'number' && (record.iconUrl === undefined || typeof record.iconUrl === 'string');
}
function normalizeBrowserAddress(rawAddress) {
    const value = rawAddress.trim();
    if (!value) return EMPTY_URL;
    if (value === EMPTY_URL) return EMPTY_URL;
    if (/^(https?|file):\/\//i.test(value)) return value;
    if (/^localhost(:\d+)?(\/.*)?$/i.test(value)) return `http://${value}`;
    if (/^(127\.0\.0\.1|0\.0\.0\.0)(:\d+)?(\/.*)?$/i.test(value)) return `http://${value}`;
    if (value.startsWith('/')) {
        if (/^\/(api|artifacts|frames)(\/|$)/.test(value) && ("TURBOPACK compile-time value", "object") !== 'undefined') {
            return new URL(value, window.location.origin).toString();
        }
        return `file://${encodeURI(value)}`;
    }
    if (/^[\w.-]+\.[a-z]{2,}(:\d+)?(\/.*)?$/i.test(value)) return `https://${value}`;
    return `https://www.google.com/search?q=${encodeURIComponent(value)}`;
}
function labelFromUrl(url) {
    if (url === EMPTY_URL) return 'New Tab';
    try {
        const parsed = new URL(url);
        return parsed.hostname.replace(/^www\./, '') || url;
    } catch  {
        return url;
    }
}
function formatAddressDisplayParts(url, title) {
    if (url === EMPTY_URL) return {
        url: ''
    };
    const cleanTitle = title?.trim();
    if (!cleanTitle) return {
        url
    };
    const fallback = labelFromUrl(url);
    if (cleanTitle === fallback || cleanTitle === url) return {
        url
    };
    return {
        url: url.replace(/\/+$/, ''),
        title: cleanTitle
    };
}
function formatAddressDisplay(url, title) {
    const parts = formatAddressDisplayParts(url, title);
    if (!parts.url) return '';
    if (!parts.title) return parts.url;
    return `${parts.url} / ${parts.title}`;
}
function hostnameFromUrl(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch  {
        return url;
    }
}
// Slugs a reference site URL into the snake_case `site_id` reported by
// reference-board analytics: hostname minus the TLD, non-alphanumerics
// folded into underscores (`land-book.com` → `land_book`,
// `fonts.google.com` → `fonts_google`).
function referenceSiteId(url) {
    const labels = hostnameFromUrl(url).toLowerCase().split('.');
    const slug = (labels.length > 1 ? labels.slice(0, -1) : labels).join('_').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    return slug || 'unknown';
}
function faviconUrl(url) {
    if (!isHttpLikeUrl(url)) return undefined;
    try {
        return new URL('/favicon.ico', new URL(url).origin).toString();
    } catch  {
        return undefined;
    }
}
function referenceIconUrl(url, size = 64) {
    if (!isHttpLikeUrl(url)) return undefined;
    try {
        const host = new URL(url).hostname;
        if (!host) return undefined;
        return `https://www.google.com/s2/favicons?sz=${size}&domain=${encodeURIComponent(host)}`;
    } catch  {
        return undefined;
    }
}
function isHistoryUrl(url) {
    return url !== EMPTY_URL && (isHttpLikeUrl(url) || /^file:\/\//i.test(url));
}
function isHttpLikeUrl(url) {
    return /^https?:\/\//i.test(url);
}
function sameUrl(left, right) {
    return left.replace(/\/+$/, '') === right.replace(/\/+$/, '');
}
function safeGetWebviewUrl(node) {
    try {
        return node.getURL();
    } catch  {
        return '';
    }
}
function safeGetWebviewTitle(node) {
    try {
        return node.getTitle();
    } catch  {
        return '';
    }
}
function cleanIconUrl(url) {
    const value = url?.trim();
    if (!value) return undefined;
    if (/^https?:\/\//i.test(value) || /^data:image\//i.test(value)) return value;
    return undefined;
}
function warmBrowserOrigin(url) {
    if (typeof document === 'undefined' || !isHttpLikeUrl(url)) return;
    let origin;
    try {
        origin = new URL(url).origin;
    } catch  {
        return;
    }
    if (warmedOrigins.has(origin)) return;
    const links = [];
    for (const rel of [
        'dns-prefetch',
        'preconnect'
    ]){
        const link = document.createElement('link');
        link.rel = rel;
        link.href = origin;
        if (rel === 'preconnect') link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        links.push(link);
    }
    warmedOrigins.set(origin, links);
    // FIFO-evict the oldest warmed origin once over the cap, removing its links.
    while(warmedOrigins.size > WARMED_ORIGIN_LIMIT){
        const oldest = warmedOrigins.keys().next().value;
        if (oldest == null) break;
        warmedOrigins.get(oldest)?.forEach((link)=>link.remove());
        warmedOrigins.delete(oldest);
    }
}
function canUseNativeHistoryNavigation(node, delta) {
    try {
        if (delta < 0) return typeof node.canGoBack === 'function' && node.canGoBack();
        return typeof node.canGoForward === 'function' && node.canGoForward();
    } catch  {
        return false;
    }
}
function imageSizeFromDataUrl(dataUrl) {
    return new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>resolve({
                w: Math.max(1, img.naturalWidth || img.width),
                h: Math.max(1, img.naturalHeight || img.height)
            });
        img.onerror = ()=>resolve(null);
        img.src = dataUrl;
    });
}
function browserFileName(prefix, url, extension) {
    const host = labelFromUrl(url).replace(/[^a-z0-9._-]+/gi, '-').replace(/^-+|-+$/g, '') || 'page';
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `browser/${prefix}-${host}-${stamp}.${extension}`;
}
function pageBriefMarkdown(brief, fallbackUrl) {
    const title = brief.title || labelFromUrl(fallbackUrl);
    const url = brief.url || fallbackUrl;
    const lines = [
        `# ${title}`,
        '',
        `Source: ${url}`,
        ''
    ];
    if (brief.description) {
        lines.push('## Description', '', brief.description, '');
    }
    appendList(lines, 'Headings', brief.headings);
    appendList(lines, 'Images', brief.images);
    appendList(lines, 'Links', brief.links?.map((link)=>`${link.text} - ${link.url}`));
    appendList(lines, 'Colors', brief.colors?.map((color)=>`${color.value} (${color.count})`));
    return `${lines.join('\n').trim()}\n`;
}
function appendList(lines, title, values) {
    const filtered = (values ?? []).map((value)=>value.trim()).filter(Boolean);
    if (filtered.length === 0) return;
    lines.push(`## ${title}`, '');
    for (const value of filtered)lines.push(`- ${value}`);
    lines.push('');
}
// Writes a captured page image onto the system clipboard via the async
// Clipboard API. Decodes the data URL locally (no fetch) so it works under a
// strict connect-src CSP, and returns false instead of throwing when the
// browser lacks ClipboardItem or the write is blocked, so the caller can still
// fall back to the saved-to-project confirmation.
async function copyImageToClipboard(dataUrl) {
    try {
        if (typeof ClipboardItem === 'undefined' || !navigator.clipboard?.write) return false;
        const [header = '', base64 = ''] = dataUrl.split(',', 2);
        const mime = /^data:([^;,]+)/.exec(header)?.[1] || 'image/png';
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for(let index = 0; index < binary.length; index += 1){
            bytes[index] = binary.charCodeAt(index);
        }
        const blob = new Blob([
            bytes
        ], {
            type: mime
        });
        await navigator.clipboard.write([
            new ClipboardItem({
                [mime]: blob
            })
        ]);
        return true;
    } catch  {
        return false;
    }
}
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return;
    } catch  {
    // Fall back for desktop/web contexts where clipboard permission is blocked.
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand('copy');
    } finally{
        textarea.remove();
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "REFERENCE_TOTAL$REFERENCE_GROUPS.reduce");
__turbopack_context__.k.register(_c1, "REFERENCE_TOTAL");
__turbopack_context__.k.register(_c2, "BROWSER_USE_ACTION_TOTAL$BROWSER_USE_CATEGORIES.reduce");
__turbopack_context__.k.register(_c3, "BROWSER_USE_ACTION_TOTAL");
__turbopack_context__.k.register(_c4, "DesignBrowserPanel");
__turbopack_context__.k.register(_c5, "IconTooltipButton");
__turbopack_context__.k.register(_c6, "BrowserUseMenu");
__turbopack_context__.k.register(_c7, "BrowserViewportControls");
__turbopack_context__.k.register(_c8, "BrowserCommentMarkers");
__turbopack_context__.k.register(_c9, "BrowserCommentComposer");
__turbopack_context__.k.register(_c10, "BrowserInspectPanel");
__turbopack_context__.k.register(_c11, "DesignBrowserStart");
__turbopack_context__.k.register(_c12, "BrowserSiteIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_DesignBrowserPanel_tsx_0nm0hm9._.js.map