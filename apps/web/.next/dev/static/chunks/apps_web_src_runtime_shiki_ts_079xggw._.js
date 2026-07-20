(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/runtime/shiki.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "highlightCode",
    ()=>highlightCode
]);
let highlighterPromise = null;
const cache = new Map();
const CACHE_MAX = 128;
function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = __turbopack_context__.A("[project]/node_modules/shiki/dist/bundle-web.mjs [app-client] (ecmascript, async loader)").then(({ createHighlighter })=>createHighlighter({
                themes: [
                    'github-light-default',
                    'github-dark-default'
                ],
                langs: [
                    'javascript',
                    'typescript',
                    'tsx',
                    'jsx',
                    'html',
                    'css',
                    'json',
                    'python',
                    'bash',
                    'shell',
                    'markdown',
                    'yaml',
                    'sql',
                    'rust',
                    'go',
                    'java',
                    'c',
                    'cpp',
                    'swift',
                    'ruby',
                    'php',
                    'diff',
                    'toml',
                    'xml',
                    'graphql',
                    'dockerfile'
                ]
            }));
    }
    return highlighterPromise;
}
function isDarkMode() {
    if (typeof document === 'undefined') return false;
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
async function highlightCode(code, lang) {
    const dark = isDarkMode();
    const cacheKey = `${dark ? 'd' : 'l'}:${lang}:${code}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;
    const highlighter = await getHighlighter();
    const loadedLangs = highlighter.getLoadedLanguages();
    if (!loadedLangs.includes(lang)) {
        return '';
    }
    const html = highlighter.codeToHtml(code, {
        lang,
        theme: dark ? 'github-dark-default' : 'github-light-default'
    });
    if (cache.size >= CACHE_MAX) {
        const first = cache.keys().next().value;
        if (first !== undefined) cache.delete(first);
    }
    cache.set(cacheKey, html);
    return html;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_runtime_shiki_ts_079xggw._.js.map