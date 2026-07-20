(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/workspace/TabLauncherMenu.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chip": "TabLauncherMenu-module__ho-3vG__chip",
  "chipActive": "TabLauncherMenu-module__ho-3vG__chipActive",
  "chips": "TabLauncherMenu-module__ho-3vG__chips",
  "empty": "TabLauncherMenu-module__ho-3vG__empty",
  "launcher-in": "TabLauncherMenu-module__ho-3vG__launcher-in",
  "list": "TabLauncherMenu-module__ho-3vG__list",
  "menu": "TabLauncherMenu-module__ho-3vG__menu",
  "row": "TabLauncherMenu-module__ho-3vG__row",
  "rowBody": "TabLauncherMenu-module__ho-3vG__rowBody",
  "rowIcon": "TabLauncherMenu-module__ho-3vG__rowIcon",
  "rowMeta": "TabLauncherMenu-module__ho-3vG__rowMeta",
  "rowName": "TabLauncherMenu-module__ho-3vG__rowName",
  "rowOpen": "TabLauncherMenu-module__ho-3vG__rowOpen",
  "rowSelected": "TabLauncherMenu-module__ho-3vG__rowSelected",
  "scrollBody": "TabLauncherMenu-module__ho-3vG__scrollBody",
  "searchIcon": "TabLauncherMenu-module__ho-3vG__searchIcon",
  "searchInput": "TabLauncherMenu-module__ho-3vG__searchInput",
  "searchRow": "TabLauncherMenu-module__ho-3vG__searchRow",
  "section": "TabLauncherMenu-module__ho-3vG__section",
  "sectionHeader": "TabLauncherMenu-module__ho-3vG__sectionHeader",
});
}),
"[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabLauncherMenu",
    ()=>TabLauncherMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/TabLauncherMenu.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function TabLauncherMenu({ anchor, files, workspaceContexts = [], openTabNames, actions, launcherContext, onOpenFile, onOpenTab, onTrack, onClose }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [kindFilter, setKindFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Position from the anchor's rect; keep it pinned to the button's right edge
    // so the menu hangs under the "+" without spilling off-screen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TabLauncherMenu.useLayoutEffect": ()=>{
            if (!anchor) return;
            function update() {
                if (!anchor) return;
                const r = anchor.getBoundingClientRect();
                const width = 340;
                const left = Math.max(12, Math.min(r.right - width, window.innerWidth - width - 12));
                setPos({
                    top: r.bottom + 6,
                    left
                });
            }
            update();
            window.addEventListener('scroll', update, true);
            window.addEventListener('resize', update);
            return ({
                "TabLauncherMenu.useLayoutEffect": ()=>{
                    window.removeEventListener('scroll', update, true);
                    window.removeEventListener('resize', update);
                }
            })["TabLauncherMenu.useLayoutEffect"];
        }
    }["TabLauncherMenu.useLayoutEffect"], [
        anchor
    ]);
    // Outside-click / Escape to dismiss.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabLauncherMenu.useEffect": ()=>{
            function onDown(e) {
                const target = e.target;
                if (anchor?.contains(target)) return;
                if (menuRef.current?.contains(target)) return;
                onClose();
            }
            function onKey(e) {
                if (e.key === 'Escape') onClose();
            }
            document.addEventListener('mousedown', onDown);
            document.addEventListener('keydown', onKey);
            return ({
                "TabLauncherMenu.useEffect": ()=>{
                    document.removeEventListener('mousedown', onDown);
                    document.removeEventListener('keydown', onKey);
                }
            })["TabLauncherMenu.useEffect"];
        }
    }["TabLauncherMenu.useEffect"], [
        anchor,
        onClose
    ]);
    // The set of kinds present, in a stable order, for the filter chips.
    const presentKinds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TabLauncherMenu.useMemo[presentKinds]": ()=>{
            const seen = new Set();
            for (const f of files)seen.add(f.kind);
            return [
                ...seen
            ];
        }
    }["TabLauncherMenu.useMemo[presentKinds]"], [
        files
    ]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TabLauncherMenu.useMemo[results]": ()=>{
            const q = query.trim().toLowerCase();
            return files.filter({
                "TabLauncherMenu.useMemo[results]": (f)=>{
                    if (kindFilter !== 'all' && f.kind !== kindFilter) return false;
                    if (!q) return true;
                    return f.name.toLowerCase().includes(q);
                }
            }["TabLauncherMenu.useMemo[results]"]);
        }
    }["TabLauncherMenu.useMemo[results]"], [
        files,
        query,
        kindFilter
    ]);
    const tabResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TabLauncherMenu.useMemo[tabResults]": ()=>{
            if (kindFilter !== 'all') return [];
            const q = query.trim().toLowerCase();
            return workspaceContexts.filter({
                "TabLauncherMenu.useMemo[tabResults]": (item)=>item.tabId
            }["TabLauncherMenu.useMemo[tabResults]"]).filter({
                "TabLauncherMenu.useMemo[tabResults]": (item)=>!q || workspaceContextSearchText(item).toLowerCase().includes(q)
            }["TabLauncherMenu.useMemo[tabResults]"]).slice(0, 20);
        }
    }["TabLauncherMenu.useMemo[tabResults]"], [
        kindFilter,
        query,
        workspaceContexts
    ]);
    const selectableCount = results.length + tabResults.length;
    // Clamp the selection whenever the result set shrinks.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabLauncherMenu.useEffect": ()=>{
            setSelected({
                "TabLauncherMenu.useEffect": (curr)=>selectableCount === 0 ? 0 : Math.min(curr, selectableCount - 1)
            }["TabLauncherMenu.useEffect"]);
        }
    }["TabLauncherMenu.useEffect"], [
        selectableCount
    ]);
    // Keep the keyboard-selected row visible as arrow keys move past the
    // scrollable window's edges.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabLauncherMenu.useEffect": ()=>{
            const el = menuRef.current?.querySelector(`[data-selectable-idx="${selected}"]`);
            el?.scrollIntoView({
                block: 'nearest'
            });
        }
    }["TabLauncherMenu.useEffect"], [
        selected,
        selectableCount
    ]);
    const openSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TabLauncherMenu.useMemo[openSet]": ()=>new Set(openTabNames)
    }["TabLauncherMenu.useMemo[openSet]"], [
        openTabNames
    ]);
    // Fire once when the launcher opens (the menu mounts only while open).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabLauncherMenu.useEffect": ()=>{
            onTrack?.({
                element: 'open'
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TabLauncherMenu.useEffect"], []);
    function chooseFile(file) {
        onTrack?.({
            element: 'open_file',
            file_kind: file.kind
        });
        onOpenFile(file.name);
        onClose();
    }
    function chooseTab(item) {
        onTrack?.({
            element: 'open_tab',
            tab_kind: item.kind
        });
        if (item.tabId) onOpenTab?.(item.tabId);
        onClose();
    }
    function runLauncherAction(action) {
        onTrack?.({
            element: 'create',
            action_id: action.id
        });
        action.run(launcherContext);
        onClose();
    }
    function onInputKeyDown(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelected((s)=>selectableCount === 0 ? 0 : (s + 1) % selectableCount);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelected((s)=>selectableCount === 0 ? 0 : (s - 1 + selectableCount) % selectableCount);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const file = results[selected] ?? null;
            if (file) {
                chooseFile(file);
                return;
            }
            const tabIndex = selected - results.length;
            const tab = tabResults[tabIndex] ?? null;
            if (tab) {
                chooseTab(tab);
            } else if (actions[0]) {
                // No file matches the query but "Create new" actions exist — Enter
                // triggers the first action so the keyboard path is never a dead end.
                runLauncherAction(actions[0]);
            }
        }
    }
    if (!pos) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
        style: {
            top: pos.top,
            left: pos.left
        },
        role: "dialog",
        "aria-label": t('workspace.newTab'),
        "data-testid": "tab-launcher-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon,
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "search",
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        autoFocus: true,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput,
                        type: "text",
                        value: query,
                        placeholder: t('workspace.searchFilesPlaceholder'),
                        onChange: (e)=>setQuery(e.target.value),
                        onKeyDown: onInputKeyDown,
                        "data-testid": "tab-launcher-search"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            presentKinds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip} ${kindFilter === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chipActive : ''}`,
                        onClick: ()=>{
                            onTrack?.({
                                element: 'filter',
                                kind_filter: 'all'
                            });
                            setKindFilter('all');
                        },
                        children: t('workspace.allFiles')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    presentKinds.map((kind)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip} ${kindFilter === kind ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chipActive : ''}`,
                            onClick: ()=>{
                                onTrack?.({
                                    element: 'filter',
                                    kind_filter: kind
                                });
                                setKindFilter(kind);
                            },
                            children: kindLabel(kind, t)
                        }, kind, false, {
                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollBody,
                "data-testid": "tab-launcher-scroll-body",
                children: [
                    actions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                                children: t('workspace.createNew')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                children: actions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                                            onClick: ()=>runLauncherAction(action),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowIcon,
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: action.iconName,
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowBody,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowName,
                                                            children: t(action.labelKey)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this),
                                                        action.descriptionKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowMeta,
                                                            children: t(action.descriptionKey)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    }, action.id, false, {
                                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this) : null,
                    results.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                                children: t('workspace.openFile')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                ref: listRef,
                                children: results.map((file, index)=>{
                                    const isOpen = openSet.has(file.name);
                                    const selectableIndex = index;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row} ${selectableIndex === selected ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowSelected : ''}`,
                                            onMouseEnter: ()=>setSelected(selectableIndex),
                                            onClick: ()=>chooseFile(file),
                                            "data-selectable-idx": selectableIndex,
                                            "data-testid": "tab-launcher-result",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowIcon,
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: kindIconName(file.kind),
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowBody,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowName,
                                                            children: file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowMeta,
                                                            children: [
                                                                kindLabel(file.kind, t),
                                                                " · ",
                                                                formatBytes(file.size),
                                                                " ·",
                                                                ' ',
                                                                formatRelativeTime(file.mtime, t)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 23
                                                }, this),
                                                isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowOpen,
                                                    children: t('workspace.tabOpen')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 33
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                            lineNumber: 291,
                                            columnNumber: 21
                                        }, this)
                                    }, file.name, false, {
                                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                        lineNumber: 290,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this) : null,
                    tabResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                                children: t('workspace.openTabs')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                children: tabResults.map((item, index)=>{
                                    const selectableIndex = results.length + index;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row} ${selectableIndex === selected ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowSelected : ''}`,
                                            onMouseEnter: ()=>setSelected(selectableIndex),
                                            onClick: ()=>chooseTab(item),
                                            "data-selectable-idx": selectableIndex,
                                            "data-testid": "tab-launcher-tab-result",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowIcon,
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: workspaceContextIconName(item.kind),
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowBody,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowName,
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowMeta,
                                                            children: [
                                                                workspaceContextKindLabel(item.kind),
                                                                " · ",
                                                                workspaceContextMeta(item)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowOpen,
                                                    children: t('workspace.tabOpen')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                            lineNumber: 326,
                                            columnNumber: 21
                                        }, this)
                                    }, `${item.kind}:${item.id}`, false, {
                                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                        lineNumber: 325,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this) : null,
                    results.length === 0 && tabResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TabLauncherMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                        "data-testid": "tab-launcher-empty",
                        children: t('workspace.noFilesMatch')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/workspace/TabLauncherMenu.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this), document.body);
}
_s(TabLauncherMenu, "S3QajxdPddwDZa3haw26gkmyNKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = TabLauncherMenu;
// --- local helpers ---------------------------------------------------------
// DesignFilesPanel keeps equivalent `humanBytes` / `relativeTime` /
// `kindLabel` helpers but does not export them, so we keep tiny copies here
// (same formatting contract) rather than widening that component's surface.
function kindIconName(kind) {
    if (kind === 'html') return 'file-code';
    if (kind === 'image') return 'image';
    if (kind === 'sketch') return 'pencil';
    if (kind === 'code') return 'file-code';
    return 'file';
}
function kindLabel(kind, t) {
    if (kind === 'html') return t('designFiles.kindHtml');
    if (kind === 'image') return t('designFiles.kindImage');
    if (kind === 'sketch') return t('designFiles.kindSketch');
    if (kind === 'text') return t('designFiles.kindText');
    if (kind === 'code') return t('designFiles.kindCode');
    if (kind === 'pdf') return t('designFiles.kindPdf');
    if (kind === 'document') return t('designFiles.kindDocument');
    if (kind === 'presentation') return t('designFiles.kindPresentation');
    if (kind === 'spreadsheet') return t('designFiles.kindSpreadsheet');
    return t('designFiles.kindBinary');
}
function workspaceContextIconName(kind) {
    if (kind === 'browser') return 'globe';
    if (kind === 'design-files' || kind === 'folder') return 'folder';
    if (kind === 'design-system') return 'blocks';
    if (kind === 'terminal') return 'terminal';
    if (kind === 'side-chat') return 'comment';
    if (kind === 'live-artifact') return 'file-code';
    return 'file';
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
function workspaceContextMeta(item) {
    return item.url || item.path || item.absolutePath || item.title || item.tabId || item.id;
}
function workspaceContextSearchText(item) {
    return [
        item.id,
        item.kind,
        item.label,
        item.tabId ?? '',
        item.path ?? '',
        item.absolutePath ?? '',
        item.url ?? '',
        item.title ?? ''
    ].join(' ');
}
function formatBytes(n) {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
function formatRelativeTime(ts, t) {
    const diff = Date.now() - ts;
    const min = 60_000;
    const hr = 60 * min;
    const day = 24 * hr;
    if (diff < min) return t('common.justNow');
    if (diff < hr) return t('common.minutesAgo', {
        n: Math.floor(diff / min)
    });
    if (diff < day) return t('common.hoursAgo', {
        n: Math.floor(diff / hr)
    });
    if (diff < 7 * day) return t('common.daysAgo', {
        n: Math.floor(diff / day)
    });
    if (diff < 30 * day) return t('designFiles.weeksAgo', {
        n: Math.floor(diff / (7 * day))
    });
    return new Date(ts).toLocaleDateString();
}
var _c;
__turbopack_context__.k.register(_c, "TabLauncherMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/workspace/tab-launcher.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLauncherActions",
    ()=>buildLauncherActions
]);
const ENABLE_TERMINAL_WORKSPACE_ENTRYPOINT = false;
function buildLauncherActions(ctx) {
    const actions = [];
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (ctx.createBrowser) {
        actions.push({
            id: 'new-browser',
            iconName: 'globe',
            labelKey: 'workspace.newBrowser',
            descriptionKey: 'workspace.newBrowserDescription',
            // Browser tabs open synchronously and focus themselves, so there is no
            // id to thread through openTab here.
            run: (runCtx)=>{
                runCtx.createBrowser?.();
            }
        });
    }
    return actions;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/workspace/useConversationChat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConversationChat",
    ()=>useConversationChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/daemon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$chat$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/chat-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/agentLabels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$agentModelSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/agentModelSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ProjectView.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
// ---------------------------------------------------------------------------
// useConversationChat — drives a secondary ChatPane bound to a single
// conversation (the Side Chat workspace tab).
//
// ProjectView owns the primary conversation's send/stream loop. That loop is
// deeply entangled with queueing, plugin snapshots, live-artifact parsing,
// design-system auditing, notifications, and route sync — extracting it wholesale
// would gut ProjectView. Instead this hook reuses the SAME daemon primitive the
// primary loop runs on (`streamViaDaemon`) plus the SAME persistence helpers
// (`listMessages` / `saveMessage`), so a side chat behaves like the main chat
// ("chat 和我们已有的 chat 对齐即可"): create a run against the conversation, stream
// deltas into the live assistant message, push tool/status events, persist, and
// finalize on done / error / stop. It deliberately omits the primary loop's
// extras (no live-artifact viewer wiring, no queueing) because a side chat is a
// lightweight scratch conversation.
// ---------------------------------------------------------------------------
function isTerminalRunStatus(status) {
    return status === 'succeeded' || status === 'failed' || status === 'canceled';
}
function isActiveRunStatus(status) {
    return status === 'queued' || status === 'running';
}
function useConversationChat(projectId, conversationId, ctx) {
    _s();
    const { config, agentsById, locale } = ctx;
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [streaming, setStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Keep the latest config/agent map in refs so the stable `onSend` callback
    // always reads the current agent selection without re-subscribing the SSE.
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(ctx);
    ctxRef.current = ctx;
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(messages);
    messagesRef.current = messages;
    const abortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Coalesces streamed deltas into ~one React update per animation frame
    // (same primitive the primary chat loop uses) so a side chat doesn't rebuild
    // the whole messages array on every SSE token.
    const textBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load the conversation's persisted messages on mount / conversation switch.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConversationChat.useEffect": ()=>{
            let cancelled = false;
            setLoading(true);
            setMessages([]);
            setError(null);
            void ({
                "useConversationChat.useEffect": async ()=>{
                    const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listMessages"])(projectId, conversationId);
                    if (cancelled) return;
                    setMessages(list);
                    setLoading(false);
                }
            })["useConversationChat.useEffect"]();
            return ({
                "useConversationChat.useEffect": ()=>{
                    cancelled = true;
                }
            })["useConversationChat.useEffect"];
        }
    }["useConversationChat.useEffect"], [
        projectId,
        conversationId
    ]);
    // Tear down the live subscription when the tab unmounts. The daemon run
    // keeps going; we only stop the browser-side SSE.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConversationChat.useEffect": ()=>{
            return ({
                "useConversationChat.useEffect": ()=>{
                    abortRef.current?.abort();
                    abortRef.current = null;
                    cancelRef.current = null;
                    textBufferRef.current?.cancel();
                    textBufferRef.current = null;
                }
            })["useConversationChat.useEffect"];
        }
    }["useConversationChat.useEffect"], []);
    const persist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConversationChat.useCallback[persist]": (message)=>{
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMessage"])(projectId, conversationId, message);
        }
    }["useConversationChat.useCallback[persist]"], [
        projectId,
        conversationId
    ]);
    const updateAssistant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConversationChat.useCallback[updateAssistant]": (assistantId, updater)=>{
            setMessages({
                "useConversationChat.useCallback[updateAssistant]": (curr)=>curr.map({
                        "useConversationChat.useCallback[updateAssistant]": (m)=>m.id === assistantId ? updater(m) : m
                    }["useConversationChat.useCallback[updateAssistant]"])
            }["useConversationChat.useCallback[updateAssistant]"]);
        }
    }["useConversationChat.useCallback[updateAssistant]"], []);
    const runSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConversationChat.useCallback[runSend]": (prompt, attachments, commentAttachments, retryOfAssistantId)=>{
            const { config: cfg, agentsById: agents, locale: loc, sessionMode } = ctxRef.current;
            if (cfg.mode !== 'daemon') {
                setError('Side Chat needs a local agent. Pick one in the top bar.');
                return;
            }
            if (!cfg.agentId) {
                setError('Pick a local agent first (top bar).');
                return;
            }
            const retryTarget = retryOfAssistantId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveRetryTarget"])(messagesRef.current, retryOfAssistantId) : null;
            if (retryOfAssistantId && !retryTarget) return;
            const startedAt = Date.now();
            const selectedAgent = agents.get(cfg.agentId) ?? null;
            const choice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$agentModelSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveAgentModelChoice"])(selectedAgent, cfg.agentModels?.[cfg.agentId]);
            const assistantAgentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$agentLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentModelDisplayName"])(cfg.agentId, selectedAgent?.name, choice?.model);
            const userMsg = retryTarget ? retryTarget.userMsg : {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                role: 'user',
                content: prompt,
                createdAt: startedAt,
                ...attachments.length > 0 ? {
                    attachments
                } : {},
                ...commentAttachments.length > 0 ? {
                    commentAttachments
                } : {}
            };
            const assistantId = retryTarget?.failedAssistant.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
            const assistantMsg = {
                id: assistantId,
                role: 'assistant',
                content: '',
                agentId: cfg.agentId,
                agentName: assistantAgentName,
                events: [],
                createdAt: retryTarget?.failedAssistant.createdAt ?? startedAt,
                runStatus: 'running',
                startedAt
            };
            const history = retryTarget ? [
                ...retryTarget.priorMessages,
                userMsg
            ] : [
                ...messagesRef.current,
                userMsg
            ];
            setMessages([
                ...history,
                assistantMsg
            ]);
            setStreaming(true);
            setError(null);
            if (!retryTarget) persist(userMsg);
            const controller = new AbortController();
            const cancelController = new AbortController();
            abortRef.current = controller;
            cancelRef.current = cancelController;
            // Frame-batch this run's text deltas. flush() applies any pending content
            // before cancel() tears down, so a terminal status that races onDone
            // can't drop the tail of the answer.
            textBufferRef.current?.cancel();
            const textBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBufferedTextUpdates"])({
                updateMessage: {
                    "useConversationChat.useCallback[runSend].textBuffer": (updater)=>updateAssistant(assistantId, updater)
                }["useConversationChat.useCallback[runSend].textBuffer"],
                // Side chat persists at done/error (+ onRunCreated), not mid-stream.
                persistSoon: {
                    "useConversationChat.useCallback[runSend].textBuffer": ()=>{}
                }["useConversationChat.useCallback[runSend].textBuffer"]
            });
            textBufferRef.current = textBuffer;
            const clearRefs = {
                "useConversationChat.useCallback[runSend].clearRefs": ()=>{
                    if (abortRef.current === controller) abortRef.current = null;
                    if (cancelRef.current === cancelController) cancelRef.current = null;
                    textBufferRef.current?.flush();
                    textBufferRef.current?.cancel();
                    textBufferRef.current = null;
                    setStreaming(false);
                }
            }["useConversationChat.useCallback[runSend].clearRefs"];
            const handlers = {
                onDelta: {
                    "useConversationChat.useCallback[runSend]": (delta)=>{
                        textBuffer.appendContent(delta);
                    }
                }["useConversationChat.useCallback[runSend]"],
                onAgentEvent: {
                    "useConversationChat.useCallback[runSend]": (ev)=>{
                        textBuffer.appendEvent(ev);
                    }
                }["useConversationChat.useCallback[runSend]"],
                onDone: {
                    "useConversationChat.useCallback[runSend]": ()=>{
                        textBuffer.flush();
                        const endedAt = Date.now();
                        setMessages({
                            "useConversationChat.useCallback[runSend]": (curr)=>{
                                const next = curr.map({
                                    "useConversationChat.useCallback[runSend].next": (m)=>m.id === assistantId ? {
                                            ...m,
                                            endedAt,
                                            runStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSucceededRunStatus"])(m.runStatus)
                                        } : m
                                }["useConversationChat.useCallback[runSend].next"]);
                                const finalized = next.find({
                                    "useConversationChat.useCallback[runSend].finalized": (m)=>m.id === assistantId
                                }["useConversationChat.useCallback[runSend].finalized"]);
                                if (finalized) persist(finalized);
                                return next;
                            }
                        }["useConversationChat.useCallback[runSend]"]);
                        clearRefs();
                    }
                }["useConversationChat.useCallback[runSend]"],
                onError: {
                    "useConversationChat.useCallback[runSend]": (err)=>{
                        textBuffer.flush();
                        const endedAt = Date.now();
                        const code = err.code;
                        const resumable = err.resumable === true;
                        setError(err.message);
                        setMessages({
                            "useConversationChat.useCallback[runSend]": (curr)=>{
                                const next = curr.map({
                                    "useConversationChat.useCallback[runSend].next": (m)=>{
                                        if (m.id !== assistantId) return m;
                                        const withError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$chat$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrorStatusEvent"])(m, err.message, code);
                                        return {
                                            ...withError,
                                            endedAt,
                                            runStatus: 'failed',
                                            resumable
                                        };
                                    }
                                }["useConversationChat.useCallback[runSend].next"]);
                                const finalized = next.find({
                                    "useConversationChat.useCallback[runSend].finalized": (m)=>m.id === assistantId
                                }["useConversationChat.useCallback[runSend].finalized"]);
                                if (finalized) persist(finalized);
                                return next;
                            }
                        }["useConversationChat.useCallback[runSend]"]);
                        clearRefs();
                    }
                }["useConversationChat.useCallback[runSend]"]
            };
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$daemon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamViaDaemon"])({
                agentId: cfg.agentId,
                history,
                signal: controller.signal,
                cancelSignal: cancelController.signal,
                handlers,
                projectId,
                conversationId,
                assistantMessageId: assistantId,
                clientRequestId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])(),
                skillId: null,
                skillIds: [],
                designSystemId: cfg.designSystemId ?? null,
                attachments: (userMsg.attachments ?? []).map({
                    "useConversationChat.useCallback[runSend]": (a)=>a.path
                }["useConversationChat.useCallback[runSend]"]),
                commentAttachments: userMsg.commentAttachments ?? [],
                model: choice?.model ?? null,
                reasoning: choice?.reasoning ?? null,
                locale: loc,
                sessionMode,
                onRunCreated: {
                    "useConversationChat.useCallback[runSend]": (runId)=>{
                        updateAssistant(assistantId, {
                            "useConversationChat.useCallback[runSend]": (prev)=>({
                                    ...prev,
                                    runId,
                                    runStatus: 'queued'
                                })
                        }["useConversationChat.useCallback[runSend]"]);
                        setMessages({
                            "useConversationChat.useCallback[runSend]": (curr)=>{
                                const pinned = curr.find({
                                    "useConversationChat.useCallback[runSend].pinned": (m)=>m.id === assistantId
                                }["useConversationChat.useCallback[runSend].pinned"]);
                                if (pinned) persist(pinned);
                                return curr;
                            }
                        }["useConversationChat.useCallback[runSend]"]);
                    }
                }["useConversationChat.useCallback[runSend]"],
                onRunStatus: {
                    "useConversationChat.useCallback[runSend]": (runStatus)=>{
                        updateAssistant(assistantId, {
                            "useConversationChat.useCallback[runSend]": (prev)=>({
                                    ...prev,
                                    runStatus,
                                    endedAt: isTerminalRunStatus(runStatus) ? prev.endedAt ?? Date.now() : prev.endedAt
                                })
                        }["useConversationChat.useCallback[runSend]"]);
                        if (isTerminalRunStatus(runStatus)) clearRefs();
                    }
                }["useConversationChat.useCallback[runSend]"],
                onRunEventId: {
                    "useConversationChat.useCallback[runSend]": (lastRunEventId)=>{
                        updateAssistant(assistantId, {
                            "useConversationChat.useCallback[runSend]": (prev)=>({
                                    ...prev,
                                    lastRunEventId
                                })
                        }["useConversationChat.useCallback[runSend]"]);
                    }
                }["useConversationChat.useCallback[runSend]"]
            });
        }
    }["useConversationChat.useCallback[runSend]"], [
        projectId,
        conversationId,
        persist,
        updateAssistant
    ]);
    const onSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConversationChat.useCallback[onSend]": (prompt, attachments, commentAttachments)=>{
            runSend(prompt, attachments, commentAttachments);
        }
    }["useConversationChat.useCallback[onSend]"], [
        runSend
    ]);
    const onRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConversationChat.useCallback[onRetry]": (assistantMessage)=>{
            runSend('', [], [], assistantMessage.id);
        }
    }["useConversationChat.useCallback[onRetry]"], [
        runSend
    ]);
    const onStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConversationChat.useCallback[onStop]": ()=>{
            const stoppedAt = Date.now();
            // Abort the cancel signal first so the daemon stops the run (POST cancel),
            // then drop the browser-side SSE subscription.
            cancelRef.current?.abort();
            cancelRef.current = null;
            abortRef.current?.abort();
            abortRef.current = null;
            textBufferRef.current?.flush();
            textBufferRef.current?.cancel();
            textBufferRef.current = null;
            setStreaming(false);
            setMessages({
                "useConversationChat.useCallback[onStop]": (curr)=>{
                    const { messages: next, finalized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ProjectView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeActiveAssistantMessagesOnStop"])(curr, stoppedAt);
                    for (const message of finalized)persist(message);
                    return next;
                }
            }["useConversationChat.useCallback[onStop]"]);
        }
    }["useConversationChat.useCallback[onStop]"], [
        persist
    ]);
    return {
        messages,
        streaming,
        error,
        loading,
        onSend,
        onRetry,
        onStop
    };
}
_s(useConversationChat, "C+N7IGD+uWnX9wQGppBOARrJhyY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/workspace/SideChatTab.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "banner": "SideChatTab-module__Ios02G__banner",
  "bannerIcon": "SideChatTab-module__Ios02G__bannerIcon",
  "pane": "SideChatTab-module__Ios02G__pane",
  "sideChat": "SideChatTab-module__Ios02G__sideChat",
});
}),
"[project]/apps/web/src/components/workspace/SideChatTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SideChatTab",
    ()=>SideChatTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ChatPane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$useConversationChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/useConversationChat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/SideChatTab.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function SideChatTab({ projectId, conversationId, config, agentsById, locale, projectFiles, projectFileNames, conversations, onSelectConversation, onDeleteConversation, onRenameConversation, onSessionModeChange, onNewConversation, activeConversationChat, onRequestOpenFile }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const sessionMode = conversations.find((conversation)=>conversation.id === conversationId)?.sessionMode ?? 'design';
    const chat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$useConversationChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationChat"])(projectId, conversationId, {
        config,
        agentsById,
        locale,
        sessionMode
    });
    const controlledChat = activeConversationChat?.conversationId === conversationId ? activeConversationChat : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideChat,
        "data-testid": "side-chat-tab",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].banner,
                "data-testid": "side-chat-context-banner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerIcon,
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "comment",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('workspace.sideChatContextBanner')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$SideChatTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pane,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ChatPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPane"], {
                    messages: controlledChat?.messages ?? chat.messages,
                    streaming: controlledChat?.streaming ?? chat.streaming,
                    loading: controlledChat?.loading ?? chat.loading,
                    sendDisabled: controlledChat?.sendDisabled,
                    queuedItems: controlledChat?.queuedItems,
                    onRemoveQueuedSend: controlledChat?.onRemoveQueuedSend,
                    onUpdateQueuedSend: controlledChat?.onUpdateQueuedSend,
                    onReorderQueuedSends: controlledChat?.onReorderQueuedSends,
                    onSendQueuedNow: controlledChat?.onSendQueuedNow,
                    error: controlledChat ? controlledChat.error : chat.error,
                    projectId: projectId,
                    sessionMode: sessionMode,
                    onSessionModeChange: (mode)=>onSessionModeChange?.(conversationId, mode),
                    projectFiles: projectFiles,
                    projectFileNames: projectFileNames,
                    onEnsureProject: async ()=>projectId,
                    onSend: controlledChat?.onSend ?? chat.onSend,
                    onRetry: controlledChat?.onRetry ?? chat.onRetry,
                    onStop: controlledChat?.onStop ?? chat.onStop,
                    onAssistantFeedback: controlledChat?.onAssistantFeedback,
                    onRequestOpenFile: onRequestOpenFile,
                    conversations: conversations,
                    activeConversationId: conversationId,
                    // Intentionally omit `messagesConversationId`: `useConversationChat`
                    // resets `messages` to [] while a conversation loads, so trusting the
                    // live length here would flash a phantom "0 msg". Falling back to the
                    // persisted `conversation.messageCount` keeps the list count stable.
                    onSelectConversation: onSelectConversation,
                    onDeleteConversation: onDeleteConversation,
                    onNewConversation: onNewConversation,
                    researchAvailable: config.mode === 'daemon',
                    config: config
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/workspace/SideChatTab.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(SideChatTab, "dgjvVo84kOL1cva7SoESlnwuteA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$useConversationChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationChat"]
    ];
});
_c = SideChatTab;
var _c;
__turbopack_context__.k.register(_c, "SideChatTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/workspace/TerminalViewer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "banner": "TerminalViewer-module__OmUUba__banner",
  "bannerIcon": "TerminalViewer-module__OmUUba__bannerIcon",
  "bannerLabel": "TerminalViewer-module__OmUUba__bannerLabel",
  "loading": "TerminalViewer-module__OmUUba__loading",
  "loadingCommand": "TerminalViewer-module__OmUUba__loadingCommand",
  "loadingCopy": "TerminalViewer-module__OmUUba__loadingCopy",
  "loadingCursor": "TerminalViewer-module__OmUUba__loadingCursor",
  "loadingDescription": "TerminalViewer-module__OmUUba__loadingDescription",
  "loadingPrompt": "TerminalViewer-module__OmUUba__loadingPrompt",
  "loadingPromptLine": "TerminalViewer-module__OmUUba__loadingPromptLine",
  "loadingRows": "TerminalViewer-module__OmUUba__loadingRows",
  "loadingStack": "TerminalViewer-module__OmUUba__loadingStack",
  "loadingTitle": "TerminalViewer-module__OmUUba__loadingTitle",
  "restartBtn": "TerminalViewer-module__OmUUba__restartBtn",
  "root": "TerminalViewer-module__OmUUba__root",
  "surface": "TerminalViewer-module__OmUUba__surface",
  "surfaceConnecting": "TerminalViewer-module__OmUUba__surfaceConnecting",
  "terminal-cursor-blink": "TerminalViewer-module__OmUUba__terminal-cursor-blink",
  "terminal-loading-sweep": "TerminalViewer-module__OmUUba__terminal-loading-sweep",
});
}),
"[project]/apps/web/src/components/workspace/TerminalViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TerminalViewer",
    ()=>TerminalViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/workspace/TerminalViewer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const TERMINAL_THEME_VARS = {
    foreground: '--terminal-fg',
    background: '--terminal-bg',
    cursor: '--terminal-cursor',
    cursorAccent: '--terminal-cursor-accent',
    selectionBackground: '--terminal-selection-bg',
    selectionForeground: '--terminal-selection-fg',
    selectionInactiveBackground: '--terminal-selection-inactive-bg',
    black: '--terminal-ansi-black',
    red: '--terminal-ansi-red',
    green: '--terminal-ansi-green',
    yellow: '--terminal-ansi-yellow',
    blue: '--terminal-ansi-blue',
    magenta: '--terminal-ansi-magenta',
    cyan: '--terminal-ansi-cyan',
    white: '--terminal-ansi-white',
    brightBlack: '--terminal-ansi-bright-black',
    brightRed: '--terminal-ansi-bright-red',
    brightGreen: '--terminal-ansi-bright-green',
    brightYellow: '--terminal-ansi-bright-yellow',
    brightBlue: '--terminal-ansi-bright-blue',
    brightMagenta: '--terminal-ansi-bright-magenta',
    brightCyan: '--terminal-ansi-bright-cyan',
    brightWhite: '--terminal-ansi-bright-white'
};
const FALLBACK_TERMINAL_THEME = {
    foreground: '#e6e1d9',
    background: '#1e1e1e',
    cursor: '#e6e1d9',
    cursorAccent: '#1e1e1e',
    selectionBackground: 'rgba(96, 165, 250, 0.32)',
    selectionForeground: '#ffffff',
    selectionInactiveBackground: 'rgba(148, 163, 184, 0.22)',
    black: '#1f2328',
    red: '#ff7b72',
    green: '#7ee787',
    yellow: '#d29922',
    blue: '#79c0ff',
    magenta: '#d2a8ff',
    cyan: '#56d4dd',
    white: '#e6edf3',
    brightBlack: '#6e7681',
    brightRed: '#ffa198',
    brightGreen: '#7ee787',
    brightYellow: '#e3b341',
    brightBlue: '#a5d6ff',
    brightMagenta: '#d2a8ff',
    brightCyan: '#7ee7f2',
    brightWhite: '#ffffff'
};
function terminalThemeFromCss(element) {
    const styles = getComputedStyle(element);
    const theme = {};
    for (const key of Object.keys(TERMINAL_THEME_VARS)){
        theme[key] = styles.getPropertyValue(TERMINAL_THEME_VARS[key]).trim() || FALLBACK_TERMINAL_THEME[key];
    }
    return theme;
}
function subscribeToAppearanceChanges(onChange) {
    const root = document.documentElement;
    const media = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    let frame = null;
    const cancelScheduled = ()=>{
        if (frame == null) return;
        if (typeof window.cancelAnimationFrame === 'function') {
            window.cancelAnimationFrame(frame);
        } else {
            window.clearTimeout(frame);
        }
        frame = null;
    };
    const schedule = ()=>{
        cancelScheduled();
        frame = typeof window.requestAnimationFrame === 'function' ? window.requestAnimationFrame(onChange) : window.setTimeout(onChange, 0);
    };
    const observer = new MutationObserver(schedule);
    // Watch only `data-theme` — the terminal palette is driven by that attribute
    // (plus the prefers-color-scheme media query below), never by the host root's
    // inline style. Observing `style` would re-run a full getComputedStyle theme
    // recompute on every unrelated inline-style write to <html>.
    observer.observe(root, {
        attributes: true,
        attributeFilter: [
            'data-theme'
        ]
    });
    if (media && typeof media.addEventListener === 'function') {
        media.addEventListener('change', schedule);
    } else if (media) {
        media.addListener(schedule);
    }
    return ()=>{
        cancelScheduled();
        observer.disconnect();
        if (media && typeof media.removeEventListener === 'function') {
            media.removeEventListener('change', schedule);
        } else if (media) {
            media.removeListener(schedule);
        }
    };
}
function TerminalViewer({ terminalId, projectId, onClose, onSessionIdChange }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const surfaceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const termRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('connecting');
    // The live PTY session this surface is attached to. Starts as the tab's
    // session id; Restart spawns a fresh PTY and rebinds in place (the tab id is
    // just a stable container, so we don't churn OpenTabsState).
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(terminalId);
    // Keep the id of the most-recently-applied resize so the ResizeObserver
    // doesn't spam identical POSTs on every layout tick.
    const lastSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Resync if the tab's backing id changes (shouldn't normally — the tab is
    // keyed by it — but keeps the surface honest if it ever does).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalViewer.useEffect": ()=>{
            setSessionId(terminalId);
        }
    }["TerminalViewer.useEffect"], [
        terminalId
    ]);
    // Surface the live session id to the host so an explicit Close kills the
    // correct PTY even after a Restart rebound this surface to a new session.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalViewer.useEffect": ()=>{
            onSessionIdChange?.(terminalId, sessionId);
        }
    }["TerminalViewer.useEffect"], [
        terminalId,
        sessionId,
        onSessionIdChange
    ]);
    const applyFit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TerminalViewer.useCallback[applyFit]": ()=>{
            const term = termRef.current;
            const fit = fitRef.current;
            if (!term || !fit) return;
            try {
                fit.fit();
            } catch  {
                // fit throws if the container has zero size (e.g. tab not yet visible);
                // the ResizeObserver will fire again once it has real dimensions.
                return;
            }
            const { cols, rows } = term;
            const last = lastSizeRef.current;
            if (last && last.cols === cols && last.rows === rows) return;
            lastSizeRef.current = {
                cols,
                rows
            };
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeTerminal"])(projectId, sessionId, cols, rows);
        }
    }["TerminalViewer.useCallback[applyFit]"], [
        projectId,
        sessionId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalViewer.useEffect": ()=>{
            const container = surfaceRef.current;
            if (!container) return;
            let disposed = false;
            let observer = null;
            let source = null;
            let dataSub = null;
            let appearanceCleanup = null;
            void ({
                "TerminalViewer.useEffect": async ()=>{
                    // Lazy import — see the component docblock for why xterm must not be
                    // evaluated at module-import time.
                    const mods = await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/@xterm/xterm/lib/xterm.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/@xterm/addon-fit/lib/addon-fit.js [app-client] (ecmascript, async loader)")
                    ]).catch({
                        "TerminalViewer.useEffect": ()=>null
                    }["TerminalViewer.useEffect"]);
                    if (disposed || !surfaceRef.current || !mods) {
                        if (!disposed) setPhase('unavailable');
                        return;
                    }
                    const [{ Terminal }, { FitAddon }] = mods;
                    const xterm = new Terminal({
                        cursorBlink: true,
                        fontSize: 13,
                        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                        theme: terminalThemeFromCss(container),
                        // The daemon owns scrollback semantics via PTY output; a generous local
                        // buffer keeps long sessions scrollable without a round-trip.
                        scrollback: 5000
                    });
                    const fit = new FitAddon();
                    xterm.loadAddon(fit);
                    xterm.open(container);
                    termRef.current = xterm;
                    fitRef.current = fit;
                    appearanceCleanup = subscribeToAppearanceChanges({
                        "TerminalViewer.useEffect": ()=>{
                            const nextContainer = surfaceRef.current;
                            if (!nextContainer) return;
                            xterm.options.theme = terminalThemeFromCss(nextContainer);
                        }
                    }["TerminalViewer.useEffect"]);
                    // Initial fit, then sync the PTY to the measured geometry.
                    applyFit();
                    // Keystrokes / pasted text → PTY stdin. Coalesce within a microtask so a
                    // multi-KB paste (or a fast key burst) flushes as ONE POST instead of
                    // fragmenting into a request per chunk.
                    let stdinBuffer = '';
                    let stdinScheduled = false;
                    const flushStdin = {
                        "TerminalViewer.useEffect.flushStdin": ()=>{
                            stdinScheduled = false;
                            if (!stdinBuffer) return;
                            const data = stdinBuffer;
                            stdinBuffer = '';
                            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTerminalStdin"])(projectId, sessionId, data);
                        }
                    }["TerminalViewer.useEffect.flushStdin"];
                    dataSub = xterm.onData({
                        "TerminalViewer.useEffect": (data)=>{
                            stdinBuffer += data;
                            if (!stdinScheduled) {
                                stdinScheduled = true;
                                queueMicrotask(flushStdin);
                            }
                        }
                    }["TerminalViewer.useEffect"]);
                    // Reflow on container resize (tab switches, window resize, split changes).
                    observer = new ResizeObserver({
                        "TerminalViewer.useEffect": ()=>applyFit()
                    }["TerminalViewer.useEffect"]);
                    observer.observe(container);
                    // SSE down. EventSource auto-reconnects with Last-Event-ID, so the daemon
                    // replays buffered output we missed during a transient gap.
                    const es = new EventSource((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["terminalStreamUrl"])(projectId, sessionId));
                    source = es;
                    es.addEventListener('open', {
                        "TerminalViewer.useEffect": ()=>{
                            setPhase({
                                "TerminalViewer.useEffect": (prev)=>prev === 'ended' ? prev : 'live'
                            }["TerminalViewer.useEffect"]);
                        }
                    }["TerminalViewer.useEffect"]);
                    es.addEventListener('data', {
                        "TerminalViewer.useEffect": (evt)=>{
                            try {
                                const payload = JSON.parse(evt.data);
                                if (typeof payload.data === 'string') xterm.write(payload.data);
                            } catch  {
                            // Ignore malformed chunks — more output will follow.
                            }
                        }
                    }["TerminalViewer.useEffect"]);
                    es.addEventListener('exit', {
                        "TerminalViewer.useEffect": (evt)=>{
                            let payload = null;
                            try {
                                payload = JSON.parse(evt.data);
                            } catch  {
                                payload = null;
                            }
                            const code = payload?.code ?? null;
                            // The daemon closes the stream right after `exit`; mark the session
                            // done so the error handler below doesn't flip us to "reconnecting".
                            setPhase('ended');
                            xterm.write(`\r\n\x1b[2m${t('workspace.terminalSessionEnded')}${code != null ? ` (${code})` : ''}\x1b[0m\r\n`);
                            es.close();
                        }
                    }["TerminalViewer.useEffect"]);
                    es.addEventListener('error', {
                        "TerminalViewer.useEffect": ()=>{
                            // A non-2xx (e.g. the session no longer exists after a daemon restart)
                            // permanently CLOSES EventSource — there is no auto-reconnect, so
                            // surface an "unavailable" state (Restart/Close) instead of a perpetual
                            // spinner. A transient drop leaves readyState === CONNECTING; show
                            // "reconnecting".
                            setPhase({
                                "TerminalViewer.useEffect": (prev)=>{
                                    if (prev === 'ended') return prev;
                                    return es.readyState === EventSource.CLOSED ? 'unavailable' : 'reconnecting';
                                }
                            }["TerminalViewer.useEffect"]);
                        }
                    }["TerminalViewer.useEffect"]);
                }
            })["TerminalViewer.useEffect"]();
            return ({
                "TerminalViewer.useEffect": ()=>{
                    disposed = true;
                    dataSub?.dispose();
                    observer?.disconnect();
                    source?.close();
                    appearanceCleanup?.();
                    termRef.current?.dispose();
                    termRef.current = null;
                    fitRef.current = null;
                    lastSizeRef.current = null;
                // Deliberately DO NOT kill the PTY here. Unmount happens on every tab
                // switch, and the daemon owns the session with Last-Event-ID replay, so
                // keeping it alive lets a tab switch (or page reload) reattach cheaply
                // instead of SIGTERM-ing a running `yarn build` and losing scrollback.
                // The PTY is killed only on an explicit Close (FileWorkspace.closeTab)
                // or when the daemon shuts down.
                }
            })["TerminalViewer.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TerminalViewer.useEffect"], [
        projectId,
        sessionId
    ]);
    // Re-fit when the banner appears/disappears so the surface reclaims the row.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalViewer.useEffect": ()=>{
            applyFit();
        }
    }["TerminalViewer.useEffect"], [
        phase,
        applyFit
    ]);
    // Spawn a fresh PTY and rebind this surface to it (the tab id is unchanged).
    const restart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TerminalViewer.useCallback[restart]": async ()=>{
            setPhase('connecting');
            // Abandon the previous PTY before rebinding. Restart is only reachable from
            // the ended/unavailable states (old session already gone), so this is
            // usually a no-op — but since unmount no longer kills, it's the guard that
            // stops a stale session from lingering on the daemon if that ever changes.
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["killTerminal"])(projectId, sessionId, {
                keepalive: true
            });
            const next = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTerminal"])(projectId);
            if (next?.id) {
                lastSizeRef.current = null;
                setSessionId(next.id);
            } else {
                setPhase('unavailable');
            }
        }
    }["TerminalViewer.useCallback[restart]"], [
        projectId,
        sessionId
    ]);
    const stopped = phase === 'ended' || phase === 'unavailable';
    const connecting = phase === 'connecting';
    const reconnecting = phase === 'reconnecting';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        "data-testid": "terminal-viewer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: surfaceRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].surface} ${connecting ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].surfaceConnecting : ''}`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            connecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                role: "status",
                "aria-live": "polite",
                "data-testid": "terminal-loading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingStack,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingPromptLine,
                            "aria-hidden": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingPrompt,
                                    children: "$"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingCommand,
                                    children: "open-design shell"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingCursor
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingCopy,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingTitle,
                                    children: t('workspace.terminalStarting')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDescription,
                                    children: t('workspace.terminalStartingDescription')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingRows,
                            "aria-hidden": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                    lineNumber: 390,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                lineNumber: 384,
                columnNumber: 9
            }, this) : null,
            stopped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].banner,
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerIcon,
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "terminal",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerLabel,
                        children: t(phase === 'unavailable' ? 'workspace.terminalStartFailed' : 'workspace.terminalSessionEnded')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].restartBtn,
                        "data-testid": "terminal-restart",
                        onClick: ()=>void restart(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "reload",
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this),
                            t('workspace.terminalRestart')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].restartBtn,
                        "data-testid": "terminal-close",
                        onClick: onClose,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            t('workspace.closeTab')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                lineNumber: 411,
                columnNumber: 9
            }, this) : reconnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].banner,
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerIcon,
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "spinner",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$workspace$2f$TerminalViewer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerLabel,
                        children: t('workspace.terminalReconnecting')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/workspace/TerminalViewer.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_s(TerminalViewer, "Xep+0cWUFkzuGAt7pYgLWuJBF2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = TerminalViewer;
var _c;
__turbopack_context__.k.register(_c, "TerminalViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_workspace_0rgyenh._.js.map