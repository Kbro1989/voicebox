module.exports = [
"[project]/apps/web/src/i18n/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Supported UI locales. Adding a new locale requires creating a new
// dictionary in `./locales/` and registering it in `./index.tsx`.
__turbopack_context__.s([
    "LOCALES",
    ()=>LOCALES,
    "LOCALE_LABEL",
    ()=>LOCALE_LABEL
]);
const LOCALES = [
    'en',
    'id',
    'de',
    'zh-CN',
    'zh-TW',
    'pt-BR',
    'es-ES',
    'ru',
    'fa',
    'ar',
    'ja',
    'ko',
    'pl',
    'hu',
    'fr',
    'uk',
    'tr',
    'th',
    'it'
];
const LOCALE_LABEL = {
    'en': 'English',
    'id': 'Bahasa Indonesia',
    'de': 'Deutsch',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
    'pt-BR': 'Português (Brasil)',
    'es-ES': 'Español (España)',
    'ru': 'Русский',
    'fa': 'فارسی',
    'ar': 'العربية',
    'ja': '日本語',
    'ko': '한국어',
    'pl': 'Polski',
    'hu': 'Magyar',
    'fr': 'Français',
    'uk': 'Українська',
    'tr': 'Türkçe',
    'th': 'ภาษาไทย',
    'it': 'Italiano'
};
}),
"[project]/apps/web/src/i18n/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "detectInitialLocale",
    ()=>detectInitialLocale,
    "resolveSystemLocale",
    ()=>resolveSystemLocale,
    "useI18n",
    ()=>useI18n,
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$de$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/de.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/en.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$id$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/id.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$es$2d$ES$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/es-ES.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$fa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/fa.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/ar.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ja$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/ja.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ko$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/ko.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$pt$2d$BR$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/pt-BR.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ru$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/ru.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$zh$2d$CN$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/zh-CN.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$zh$2d$TW$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/zh-TW.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$pl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/pl.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$hu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/hu.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$fr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/fr.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$uk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/uk.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$tr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/tr.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$th$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/th.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$it$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/locales/it.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/types.ts [app-ssr] (ecmascript)");
'use client';
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
const DICTS = {
    'en': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"],
    'id': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$id$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["id"],
    'de': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$de$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["de"],
    'zh-CN': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$zh$2d$CN$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zhCN"],
    'zh-TW': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$zh$2d$TW$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zhTW"],
    'pt-BR': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$pt$2d$BR$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ptBR"],
    'es-ES': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$es$2d$ES$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["esES"],
    'ru': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ru$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ru"],
    'fa': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$fa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fa"],
    'ar': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ar"],
    'ja': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ja$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ja"],
    'ko': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$ko$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ko"],
    'pl': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$pl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pl"],
    'hu': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$hu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hu"],
    'fr': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$fr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fr"],
    'uk': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$uk$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uk"],
    'tr': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$tr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tr"],
    'th': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$th$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["th"],
    'it': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$it$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["it"]
};
const LS_KEY = 'open-design:locale';
// Marker that says "the value in LS_KEY came from a deliberate user
// action through setLocale, not from some auto-detection path". Only
// values tagged this way win over the desktop host's injected OS
// locale, so a stale auto-detected pick can't pin the app forever once
// the user changes their system language.
const LS_SOURCE_KEY = 'open-design:locale-source';
const MANUAL_LOCALE_SOURCE = 'manual';
function resolveSystemLocale(languages) {
    const supported = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCALES"];
    for (const raw of languages){
        const normalized = raw.trim();
        if (!normalized) continue;
        const exact = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCALES"].find((locale)=>locale.toLowerCase() === normalized.toLowerCase());
        if (exact) return exact;
        const [language, regionOrScript] = normalized.toLowerCase().split('-');
        if (language === 'zh') {
            if (regionOrScript === 'hant' || regionOrScript === 'tw' || regionOrScript === 'hk' || regionOrScript === 'mo') {
                return 'zh-TW';
            }
            return 'zh-CN';
        }
        const baseMatch = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCALES"].find((locale)=>locale.toLowerCase().split('-')[0] === language);
        if (baseMatch && supported.includes(baseMatch)) return baseMatch;
    }
    return null;
}
// Read the OS locale the desktop host attached to its client descriptor.
// Packaged desktop builds need this because Chromium otherwise reports
// en-US through navigator.language regardless of the OS setting. We go
// through `getOpenDesignHost` rather than reading the bridge global by
// name so the web/preload boundary stays single-source (see the
// `host bridge boundary` guard test).
function readDesktopHostOsLocale() {
    if ("TURBOPACK compile-time truthy", 1) return undefined;
    //TURBOPACK unreachable
    ;
    const host = undefined;
    const value = undefined;
}
function detectInitialLocale() {
    if ("TURBOPACK compile-time truthy", 1) return 'en';
    //TURBOPACK unreachable
    ;
    let storedLocale;
    let storedSource;
    const hostOsLocale = undefined;
    const detected = undefined;
}
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const RTL_LOCALES = [
    'ar',
    'fa'
];
function I18nProvider({ initial, children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>initial ?? detectInitialLocale());
    // Keep <html lang="…" dir="…"> in sync so screen readers and CSS hooks
    // pick the right language token and direction without each component
    // having to set it itself.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof document !== 'undefined') {
            const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('lang', locale);
            document.documentElement.setAttribute('dir', dir);
        }
    }, [
        locale
    ]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        setLocaleState(next);
        try {
            window.localStorage.setItem(LS_KEY, next);
            // Marker so detectInitialLocale knows this came from a deliberate
            // user action and should beat the desktop host's OS locale.
            window.localStorage.setItem(LS_SOURCE_KEY, MANUAL_LOCALE_SOURCE);
        } catch  {
        /* ignore */ }
    }, []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, vars)=>{
        const dict = DICTS[locale] ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"];
        const raw = dict[key] ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"][key] ?? key;
        if (!vars) return raw;
        return raw.replace(/\{(\w+)\}/g, (_, name)=>{
            const v = vars[name];
            return v == null ? `{${name}}` : String(v);
        });
    }, [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            setLocale,
            t
        }), [
        locale,
        setLocale,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/i18n/index.tsx",
        lineNumber: 201,
        columnNumber: 10
    }, this);
}
function useI18n() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) {
        // Fall back to a stand-alone English translator when no provider is
        // mounted (e.g. an isolated test). This keeps the API safe to call
        // without requiring every callsite to wrap in a provider.
        return {
            locale: 'en',
            setLocale: ()=>{},
            t: (key, vars)=>{
                const raw = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$locales$2f$en$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"][key] ?? key;
                if (!vars) return raw;
                return raw.replace(/\{(\w+)\}/g, (_, n)=>{
                    const v = vars[n];
                    return v == null ? `{${n}}` : String(v);
                });
            }
        };
    }
    return ctx;
}
function useT() {
    return useI18n().t;
}
}),
"[project]/apps/web/src/i18n/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nProvider"],
    "LOCALES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCALES"],
    "LOCALE_LABEL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCALE_LABEL"],
    "detectInitialLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectInitialLocale"],
    "resolveSystemLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveSystemLocale"],
    "useI18n",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
    "useT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/types.ts [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=apps_web_src_i18n_0tiu8ge._.js.map