(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/pet/codexAtlas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Codex hatch-pet atlas helpers.
//
// The companion `hatch-pet` skill (vendored under `skills/hatch-pet/`)
// produces a fixed-shape spritesheet that the Codex app reads directly:
//
//   - Format: PNG or WebP, transparent background.
//   - Dimensions: 1536 x 1872 px.
//   - Grid: 8 columns x 9 rows of 192 x 208 cells.
//   - Each row encodes one animation state (idle, running-right, …).
//
// The pet overlay can render the full atlas and switch the active row
// based on interaction state (hover, drag direction, idle timeout) —
// matching the codex-pets-react `PetWidget` behaviour. For users who
// prefer a single-row loop (or a non-Codex strip) we still expose the
// `cropAtlasRow` helper, which slices one row into a standalone strip.
//
// Source contract:
// https://github.com/openai/skills/tree/main/skills/.curated/hatch-pet/references
__turbopack_context__.s([
    "CODEX_ATLAS_ASPECT",
    ()=>CODEX_ATLAS_ASPECT,
    "CODEX_ATLAS_COLS",
    ()=>CODEX_ATLAS_COLS,
    "CODEX_ATLAS_HEIGHT",
    ()=>CODEX_ATLAS_HEIGHT,
    "CODEX_ATLAS_LAYOUT",
    ()=>CODEX_ATLAS_LAYOUT,
    "CODEX_ATLAS_ROWS",
    ()=>CODEX_ATLAS_ROWS,
    "CODEX_ATLAS_ROWS_DEF",
    ()=>CODEX_ATLAS_ROWS_DEF,
    "CODEX_ATLAS_WIDTH",
    ()=>CODEX_ATLAS_WIDTH,
    "CODEX_CELL_HEIGHT",
    ()=>CODEX_CELL_HEIGHT,
    "CODEX_CELL_WIDTH",
    ()=>CODEX_CELL_WIDTH,
    "cropAtlasRow",
    ()=>cropAtlasRow,
    "loadAtlasImageFromFile",
    ()=>loadAtlasImageFromFile,
    "looksLikeCodexAtlas",
    ()=>looksLikeCodexAtlas,
    "prepareCodexAtlas",
    ()=>prepareCodexAtlas
]);
const CODEX_ATLAS_COLS = 8;
const CODEX_ATLAS_ROWS = 9;
const CODEX_CELL_WIDTH = 192;
const CODEX_CELL_HEIGHT = 208;
const CODEX_ATLAS_WIDTH = CODEX_ATLAS_COLS * CODEX_CELL_WIDTH; // 1536
const CODEX_ATLAS_HEIGHT = CODEX_ATLAS_ROWS * CODEX_CELL_HEIGHT; // 1872
const CODEX_ATLAS_ASPECT = CODEX_ATLAS_WIDTH / CODEX_ATLAS_HEIGHT; // ~0.821
const CODEX_ATLAS_ROWS_DEF = [
    {
        index: 0,
        id: 'idle',
        frames: 6,
        fps: 6
    },
    {
        index: 1,
        id: 'running-right',
        frames: 8,
        fps: 8
    },
    {
        index: 2,
        id: 'running-left',
        frames: 8,
        fps: 8
    },
    {
        index: 3,
        id: 'waving',
        frames: 4,
        fps: 6
    },
    {
        index: 4,
        id: 'jumping',
        frames: 5,
        fps: 7
    },
    {
        index: 5,
        id: 'failed',
        frames: 8,
        fps: 7
    },
    {
        index: 6,
        id: 'waiting',
        frames: 6,
        fps: 6
    },
    {
        index: 7,
        id: 'running',
        frames: 6,
        fps: 8
    },
    {
        index: 8,
        id: 'review',
        frames: 6,
        fps: 6
    }
];
const CODEX_ATLAS_LAYOUT = {
    cols: CODEX_ATLAS_COLS,
    rows: CODEX_ATLAS_ROWS,
    rowsDef: CODEX_ATLAS_ROWS_DEF.map((row)=>({
            index: row.index,
            id: row.id,
            frames: row.frames,
            fps: row.fps
        }))
};
function looksLikeCodexAtlas(width, height) {
    if (!Number.isFinite(width) || !Number.isFinite(height)) return false;
    if (width <= 0 || height <= 0) return false;
    const aspect = width / height;
    return Math.abs(aspect - CODEX_ATLAS_ASPECT) < 0.06;
}
const ACCEPTED_TYPES = new Set([
    'image/png',
    'image/webp',
    'image/jpeg',
    'image/gif'
]);
async function loadAtlasImageFromFile(file) {
    if (!file.type.startsWith('image/')) {
        throw new Error('Only image files are supported.');
    }
    if (!ACCEPTED_TYPES.has(file.type) && file.type !== 'image/svg+xml') {
        throw new Error('Use a PNG, WebP, JPEG, or GIF spritesheet.');
    }
    const dataUrl = await readFileAsDataUrl(file);
    const dims = await measureImage(dataUrl);
    return {
        dataUrl,
        width: dims.width,
        height: dims.height
    };
}
const DEFAULT_MAX_CELL_HEIGHT = 96;
async function cropAtlasRow(dataUrl, options) {
    const cols = Math.max(1, Math.floor(options.cols ?? CODEX_ATLAS_COLS));
    const rows = Math.max(1, Math.floor(options.rows ?? CODEX_ATLAS_ROWS));
    const rowIndex = Math.max(0, Math.min(rows - 1, Math.floor(options.rowIndex)));
    const def = CODEX_ATLAS_ROWS_DEF.find((r)=>r.index === rowIndex);
    const requestedFrames = options.frames ?? def?.frames ?? cols;
    const frames = Math.max(1, Math.min(cols, Math.floor(requestedFrames)));
    const maxCellHeight = options.maxCellHeight === null ? null : options.maxCellHeight ?? DEFAULT_MAX_CELL_HEIGHT;
    const img = await loadImage(dataUrl);
    const cellWidth = Math.floor(img.naturalWidth / cols);
    const cellHeight = Math.floor(img.naturalHeight / rows);
    if (cellWidth <= 0 || cellHeight <= 0) {
        throw new Error('Atlas image is too small to crop.');
    }
    const targetCellHeight = maxCellHeight && cellHeight > maxCellHeight ? maxCellHeight : cellHeight;
    const scale = targetCellHeight / cellHeight;
    const targetCellWidth = Math.max(1, Math.round(cellWidth * scale));
    const targetWidth = targetCellWidth * frames;
    const targetHeight = targetCellHeight;
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Canvas is unavailable in this browser.');
    }
    // Pixel-art atlases lose readability under bilinear smoothing, so we
    // explicitly disable it before drawing.
    ctx.imageSmoothingEnabled = false;
    for(let f = 0; f < frames; f++){
        const sx = f * cellWidth;
        const sy = rowIndex * cellHeight;
        ctx.drawImage(img, sx, sy, cellWidth, cellHeight, f * targetCellWidth, 0, targetCellWidth, targetCellHeight);
    }
    const out = canvas.toDataURL('image/png');
    return {
        dataUrl: out,
        width: targetWidth,
        height: targetHeight,
        frames
    };
}
// Same idea as `cropAtlasRow` but keeps every row so the overlay can
// switch animations on the fly. We downscale to a target cell height
// (default 80 px → 8x9 grid lands at ~528 KB PNG which fits inside the
// MAX_DATA_URL_BYTES guard from `image.ts` even for busy spritesheets)
// while preserving the grid layout 1:1 so background-position math in
// `PetSpriteFace` stays simple.
const DEFAULT_FULL_ATLAS_MAX_CELL = 80;
async function prepareCodexAtlas(sourceDataUrl, options) {
    const maxCellHeight = options?.maxCellHeight === null ? null : options?.maxCellHeight ?? DEFAULT_FULL_ATLAS_MAX_CELL;
    const img = await loadImage(sourceDataUrl);
    const cellWidth = Math.floor(img.naturalWidth / CODEX_ATLAS_COLS);
    const cellHeight = Math.floor(img.naturalHeight / CODEX_ATLAS_ROWS);
    if (cellWidth <= 0 || cellHeight <= 0) {
        throw new Error('Atlas image is too small to slice.');
    }
    const targetCellHeight = maxCellHeight && cellHeight > maxCellHeight ? maxCellHeight : cellHeight;
    const scale = targetCellHeight / cellHeight;
    const targetCellWidth = Math.max(1, Math.round(cellWidth * scale));
    const targetWidth = targetCellWidth * CODEX_ATLAS_COLS;
    const targetHeight = targetCellHeight * CODEX_ATLAS_ROWS;
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Canvas is unavailable in this browser.');
    }
    ctx.imageSmoothingEnabled = false;
    // Draw cell-by-cell so alignment survives even if the source has a
    // slightly off canvas size (some tools add a 1 px gutter that would
    // otherwise smear into adjacent cells under a single drawImage).
    for(let r = 0; r < CODEX_ATLAS_ROWS; r++){
        for(let c = 0; c < CODEX_ATLAS_COLS; c++){
            ctx.drawImage(img, c * cellWidth, r * cellHeight, cellWidth, cellHeight, c * targetCellWidth, r * targetCellHeight, targetCellWidth, targetCellHeight);
        }
    }
    const dataUrl = canvas.toDataURL('image/png');
    return {
        dataUrl,
        width: targetWidth,
        height: targetHeight,
        layout: CODEX_ATLAS_LAYOUT
    };
}
function readFileAsDataUrl(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = ()=>reject(reader.error ?? new Error('Read failed'));
        reader.onload = ()=>{
            const result = reader.result;
            if (typeof result !== 'string') {
                reject(new Error('Could not decode the image.'));
                return;
            }
            resolve(result);
        };
        reader.readAsDataURL(file);
    });
}
function measureImage(dataUrl) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
        img.onerror = ()=>reject(new Error('Could not load that image.'));
        img.src = dataUrl;
    });
}
function loadImage(dataUrl) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new Error('Could not load that image.'));
        img.src = dataUrl;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/pet/pets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUILT_IN_PETS",
    ()=>BUILT_IN_PETS,
    "CUSTOM_PET_ID",
    ()=>CUSTOM_PET_ID,
    "FPS_MAX",
    ()=>FPS_MAX,
    "FPS_MIN",
    ()=>FPS_MIN,
    "FRAMES_MAX",
    ()=>FRAMES_MAX,
    "FRAMES_MIN",
    ()=>FRAMES_MIN,
    "ambientLines",
    ()=>ambientLines,
    "defaultCustomPet",
    ()=>defaultCustomPet,
    "migrateCustomPetAtlas",
    ()=>migrateCustomPetAtlas,
    "pickAmbientRow",
    ()=>pickAmbientRow,
    "pickAtlasRow",
    ()=>pickAtlasRow,
    "preferredRowId",
    ()=>preferredRowId,
    "prepareCodexPetCustom",
    ()=>prepareCodexPetCustom,
    "resolveActivePet",
    ()=>resolveActivePet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/codexAtlas.ts [app-client] (ecmascript)");
;
;
const BUILT_IN_PETS = [];
const CUSTOM_PET_ID = 'custom';
function resolveActivePet(pet) {
    if (!pet?.adopted) return null;
    // Bundled "Built-in" pets adopt into the custom slot (the spritesheet
    // and atlas layout are copied there by `adoptCodexPet`), so the
    // custom branch is the rendering path for both user-authored pets
    // and bundled adoptions.
    if (pet.petId === CUSTOM_PET_ID) {
        return resolveCustomPet(pet.custom);
    }
    const found = BUILT_IN_PETS.find((p)=>p.id === pet.petId);
    if (found) {
        return {
            id: found.id,
            name: found.name,
            glyph: found.glyph,
            accent: found.accent,
            greeting: found.greeting,
            animation: found.animation
        };
    }
    // Legacy fallback — older configs may still carry an emoji built-in
    // id (e.g. `mochi`) from before the catalog migrated to bundled
    // spritesheets. Render the user's custom slot instead of crashing or
    // blanking the overlay; the user can re-adopt from Settings to pick
    // a bundled pet.
    return resolveCustomPet(pet.custom);
}
function resolveCustomPet(c) {
    return {
        id: CUSTOM_PET_ID,
        name: c.name?.trim() || 'Buddy',
        glyph: c.glyph?.trim() || '🦄',
        accent: c.accent?.trim() || '#c96442',
        greeting: c.greeting?.trim() || 'Hi! I am here whenever you need me.',
        // Custom pets get the gentle float animation by default. We could
        // expose this in the editor later; today's UX keeps the picker
        // focused on glyph + name + color.
        animation: 'float',
        imageUrl: c.imageUrl,
        frames: clampFrames(c.frames),
        fps: clampFps(c.fps),
        atlas: sanitizeAtlas(c.atlas)
    };
}
const FRAMES_MIN = 1;
const FRAMES_MAX = 24;
const FPS_MIN = 1;
const FPS_MAX = 30;
function clampFrames(value) {
    if (!Number.isFinite(value)) return 1;
    return Math.max(FRAMES_MIN, Math.min(FRAMES_MAX, Math.round(value)));
}
function clampFps(value) {
    if (!Number.isFinite(value)) return 6;
    return Math.max(FPS_MIN, Math.min(FPS_MAX, Math.round(value)));
}
// Atlas hardening — strips out malformed entries so the renderer never
// has to defensively check for NaN cell sizes / negative indices. We
// keep rows we can validate even if the layout omits a few; missing
// rows just fall back to `idle` at lookup time.
function sanitizeAtlas(input) {
    if (!input) return undefined;
    const cols = Math.max(1, Math.floor(input.cols));
    const rows = Math.max(1, Math.floor(input.rows));
    if (!Number.isFinite(cols) || !Number.isFinite(rows)) return undefined;
    const seen = new Set();
    const rowsDef = [];
    for (const row of input.rowsDef ?? []){
        if (!row || typeof row.id !== 'string' || !row.id.trim()) continue;
        const index = Math.floor(row.index);
        if (!Number.isFinite(index) || index < 0 || index >= rows) continue;
        if (seen.has(index)) continue;
        seen.add(index);
        rowsDef.push({
            index,
            id: row.id.trim(),
            frames: Math.max(1, Math.min(cols, Math.floor(row.frames) || 1)),
            fps: Math.max(FPS_MIN, Math.min(FPS_MAX, Math.floor(row.fps) || 6))
        });
    }
    if (rowsDef.length === 0) return undefined;
    rowsDef.sort((a, b)=>a.index - b.index);
    return {
        cols,
        rows,
        rowsDef
    };
}
// Preferred Codex atlas row id for each interaction state. Hover and
// drag each map to a dedicated action row so the pet visibly reacts to
// the user — hover plays a wave, drag swaps to a directional run (or
// hop when the gesture is vertical). Autonomous ambient variety below
// only fires when the pet is otherwise at rest so rest ↔ interaction
// reads as two cleanly separated behaviours.
const INTERACTION_ROW_ID = {
    idle: 'idle',
    hover: 'waving',
    'drag-right': 'running-right',
    'drag-left': 'running-left',
    'drag-up': 'jumping',
    'drag-down': 'waving',
    waiting: 'waiting'
};
const ROW_FALLBACK_ORDER = [
    'idle',
    'waiting',
    'waving',
    'running',
    'running-right'
];
function preferredRowId(state) {
    return INTERACTION_ROW_ID[state];
}
function pickAtlasRow(layout, preferred) {
    if (!layout || layout.rowsDef.length === 0) return undefined;
    const direct = layout.rowsDef.find((r)=>r.id === preferred);
    if (direct) return direct;
    for (const id of ROW_FALLBACK_ORDER){
        const fallback = layout.rowsDef.find((r)=>r.id === id);
        if (fallback) return fallback;
    }
    return layout.rowsDef[0];
}
// Ambient row pool — the overlay dips into these between `idle` cycles
// so a parked pet doesn't look frozen. Ordered by "quietness": waving
// and review feel calm enough to interject without startling the user,
// jumping / running* are more energetic and round out the variety when
// the atlas ships them. `idle`, `waiting`, and `failed` are excluded
// intentionally: idle is the resting baseline, waiting is reserved for
// the long-idle cue, and failed reads as a negative micro-narrative.
const AMBIENT_ROW_POOL = [
    'waving',
    'review',
    'jumping',
    'running',
    'running-right',
    'running-left'
];
function pickAmbientRow(layout, avoidId) {
    if (!layout || layout.rowsDef.length === 0) return null;
    const pool = layout.rowsDef.filter((r)=>AMBIENT_ROW_POOL.includes(r.id));
    if (pool.length === 0) return null;
    const candidates = pool.length > 1 && avoidId ? pool.filter((r)=>r.id !== avoidId) : pool;
    const choices = candidates.length > 0 ? candidates : pool;
    return choices[Math.floor(Math.random() * choices.length)] ?? null;
}
function ambientLines(name) {
    return [
        `${name}: nudge me when you want a fresh idea.`,
        `${name}: I will keep you company while it builds.`,
        `${name}: take a breath — the prototype will wait.`,
        `${name}: small tweaks compound. Keep going!`
    ];
}
function defaultCustomPet() {
    return {
        name: 'Buddy',
        glyph: '🦄',
        accent: '#c96442',
        greeting: 'Hi! I am here whenever you need me.'
    };
}
async function migrateCustomPetAtlas(cfg) {
    const pet = cfg.pet;
    if (!pet || !pet.adopted || pet.petId !== CUSTOM_PET_ID) return null;
    const custom = pet.custom;
    if (!custom?.imageUrl || custom.atlas) return null;
    const name = custom.name?.trim();
    if (!name) return null;
    let registry;
    try {
        registry = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCodexPets"])();
    } catch  {
        return null;
    }
    if (!registry?.pets?.length) return null;
    const needle = name.toLowerCase();
    const match = registry.pets.find((p)=>(p.displayName?.trim().toLowerCase() ?? '') === needle || p.id.trim().toLowerCase() === needle);
    if (!match) return null;
    try {
        const resp = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codexPetSpritesheetUrl"])(match));
        if (!resp.ok) return null;
        const blob = await resp.blob();
        const dataUrl = await blobToDataUrl(blob);
        const prepared = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareCodexAtlas"])(dataUrl);
        return {
            ...custom,
            imageUrl: prepared.dataUrl,
            frames: 1,
            fps: prepared.layout.rowsDef[0]?.fps ?? custom.fps ?? 6,
            atlas: prepared.layout
        };
    } catch  {
        return null;
    }
}
async function prepareCodexPetCustom(pet) {
    const resp = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codexPetSpritesheetUrl"])(pet));
    if (!resp.ok) throw new Error('Could not download that pet.');
    const blob = await resp.blob();
    const dataUrl = await blobToDataUrl(blob);
    const prepared = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareCodexAtlas"])(dataUrl);
    return {
        name: pet.displayName || pet.id,
        glyph: '🦄',
        accent: '#c96442',
        greeting: pet.description || `Hi! I am ${pet.displayName || pet.id}.`,
        imageUrl: prepared.dataUrl,
        frames: 1,
        fps: prepared.layout.rowsDef[0]?.fps ?? 6,
        atlas: prepared.layout
    };
}
function blobToDataUrl(blob) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = ()=>reject(reader.error ?? new Error('Read failed'));
        reader.onload = ()=>{
            const result = reader.result;
            if (typeof result !== 'string') {
                reject(new Error('Could not read sprite blob.'));
                return;
            }
            resolve(result);
        };
        reader.readAsDataURL(blob);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/pet/PetSpriteFace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PetSpriteFace",
    ()=>PetSpriteFace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function PetSpriteFace({ active, className, size, rowId }) {
    if (!active.imageUrl) {
        const style = size ? {
            fontSize: Math.round(size * 0.85),
            width: size,
            height: size,
            lineHeight: 1
        } : undefined;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            "aria-hidden": true,
            style: style,
            children: active.glyph
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/pet/PetSpriteFace.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    if (active.atlas && active.atlas.rowsDef.length > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtlasSprite, {
            imageUrl: active.imageUrl,
            cols: Math.max(1, active.atlas.cols),
            rows: Math.max(1, active.atlas.rows),
            rowsDef: active.atlas.rowsDef,
            rowId: rowId,
            className: className,
            size: size
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/pet/PetSpriteFace.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    const frames = Math.max(1, active.frames ?? 1);
    const fps = Math.max(1, active.fps ?? 6);
    if (frames === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `${className ?? ''} pet-image static`.trim(),
            "aria-hidden": true,
            style: {
                backgroundImage: `url(${active.imageUrl})`,
                width: size,
                height: size
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/pet/PetSpriteFace.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    // Strip mode — N frames laid out horizontally. The image is
    // (N × container_width) wide, so the visible frame is selected by
    // sliding background-position-x from 0% to 100% in (N-1) steps.
    // `steps(N, jump-none)` is required because the default jump-end
    // would land on 0/N, 1/N, …, (N-1)/N, which slices each frame mid-cell;
    // jump-none lands on the actual cell boundaries 0/(N-1) … 1.
    const durationMs = Math.round(frames / fps * 1000);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${className ?? ''} pet-image frames`.trim(),
        "aria-hidden": true,
        style: {
            backgroundImage: `url(${active.imageUrl})`,
            backgroundSize: `${frames * 100}% 100%`,
            animation: `pet-frames ${durationMs}ms steps(${frames}, jump-none) infinite`,
            width: size,
            height: size
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/pet/PetSpriteFace.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c = PetSpriteFace;
// Atlas renderer. Drives the frame index from JS instead of a CSS
// `steps()` animation — sidesteps the jump-end vs jump-none footgun
// and makes per-row fps trivial to swap when the parent flips the
// `rowId` prop (idle ↔ waving ↔ running-*).
function AtlasSprite({ imageUrl, cols, rows, rowsDef, rowId, className, size }) {
    _s();
    const def = rowsDef.find((r)=>r.id === rowId) ?? rowsDef.find((r)=>r.id === 'idle') ?? rowsDef[0];
    const rowFrames = Math.max(1, def.frames);
    const fps = Math.max(1, def.fps);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Reset to frame 0 on row change so a freshly-triggered animation
    // (e.g. tap → waving) starts cleanly instead of mid-cycle.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AtlasSprite.useEffect": ()=>{
            setFrame(0);
            if (rowFrames <= 1) return;
            const intervalMs = Math.max(16, Math.round(1000 / fps));
            const id = window.setInterval({
                "AtlasSprite.useEffect.id": ()=>{
                    setFrame({
                        "AtlasSprite.useEffect.id": (f)=>(f + 1) % rowFrames
                    }["AtlasSprite.useEffect.id"]);
                }
            }["AtlasSprite.useEffect.id"], intervalMs);
            return ({
                "AtlasSprite.useEffect": ()=>window.clearInterval(id)
            })["AtlasSprite.useEffect"];
        }
    }["AtlasSprite.useEffect"], [
        def.id,
        def.index,
        rowFrames,
        fps
    ]);
    // Background math:
    //   - background-size = (cols × 100%) × (rows × 100%)
    //     → each grid cell renders at exactly the container size.
    //   - background-position-x = frame / (cols - 1) × 100%
    //     → 0% slides to the leftmost cell, 100% to the rightmost,
    //       intermediate cells land at frame/(cols-1) of the offset range.
    //   - background-position-y = rowIndex / (rows - 1) × 100%
    const xPct = cols > 1 ? frame / (cols - 1) * 100 : 0;
    const yPct = rows > 1 ? def.index / (rows - 1) * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${className ?? ''} pet-image atlas`.trim(),
        "aria-hidden": true,
        style: {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${cols * 100}% ${rows * 100}%`,
            backgroundPosition: `${xPct}% ${yPct}%`,
            width: size,
            height: size
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/pet/PetSpriteFace.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(AtlasSprite, "HjuKYnT7WSpqHpTq196U5FwaCpc=");
_c1 = AtlasSprite;
var _c, _c1;
__turbopack_context__.k.register(_c, "PetSpriteFace");
__turbopack_context__.k.register(_c1, "AtlasSprite");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/pet/image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Helpers for turning a user-picked image file into a self-contained
// pet sprite payload that is safe to drop into localStorage. We do
// three things:
//
// 1. Reject anything that is not an image.
// 2. For animated GIFs (and SVGs), pass the original bytes through as a
//    data URL — re-encoding through a canvas would freeze a GIF on its
//    first frame and rasterize an SVG, which we explicitly want to
//    avoid for spritesheet uploads modeled on codex-pets-react sheets.
// 3. For everything else (PNG / JPG / WebP), draw to a canvas at a
//    capped longest-side and re-export as PNG so the resulting data
//    URL stays bounded even when the source is a 4K screenshot.
//
// All of this happens client-side; nothing is uploaded to the daemon.
__turbopack_context__.s([
    "loadPetImageFromFile",
    ()=>loadPetImageFromFile
]);
// Hard cap on the data URL we are willing to stash in localStorage.
// localStorage typically has a 5 MB budget per origin and we already
// share that bucket with the rest of `open-design:config`. 800 KB
// keeps room for a beefy spritesheet without blowing the budget.
const MAX_DATA_URL_BYTES = 800 * 1024;
// Capped longest-side for re-encoded sprites. 384 px gives a 4-frame
// strip plenty of resolution at the 56 px overlay size while keeping
// the data URL short.
const MAX_REENCODED_PX = 384;
const PASSTHROUGH_TYPES = new Set([
    'image/gif',
    'image/svg+xml',
    'image/webp'
]);
async function loadPetImageFromFile(file) {
    if (!file.type.startsWith('image/')) {
        throw new Error('Only image files are supported.');
    }
    if (PASSTHROUGH_TYPES.has(file.type)) {
        const dataUrl = await fileToDataUrl(file);
        if (approxDataUrlBytes(dataUrl) > MAX_DATA_URL_BYTES) {
            throw new Error('That image is too large after encoding. Try one under ~800 KB.');
        }
        const dims = await measureImage(dataUrl);
        return {
            dataUrl,
            width: dims.width,
            height: dims.height,
            reencoded: false
        };
    }
    // PNG / JPG / etc — re-encode through a canvas so the data URL stays
    // small even when the source is high-resolution.
    const dataUrl = await fileToDataUrl(file);
    const original = await measureImage(dataUrl);
    const scale = Math.min(1, MAX_REENCODED_PX / Math.max(original.width, original.height));
    const targetW = Math.max(1, Math.round(original.width * scale));
    const targetH = Math.max(1, Math.round(original.height * scale));
    const reencoded = await drawToPng(dataUrl, targetW, targetH);
    if (approxDataUrlBytes(reencoded) > MAX_DATA_URL_BYTES) {
        throw new Error('That image is too large after encoding. Try a smaller source.');
    }
    return {
        dataUrl: reencoded,
        width: targetW,
        height: targetH,
        reencoded: true
    };
}
function fileToDataUrl(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = ()=>reject(reader.error ?? new Error('Read failed'));
        reader.onload = ()=>{
            const result = reader.result;
            if (typeof result !== 'string') {
                reject(new Error('Could not decode the image.'));
                return;
            }
            resolve(result);
        };
        reader.readAsDataURL(file);
    });
}
function measureImage(dataUrl) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
        img.onerror = ()=>reject(new Error('Could not load that image.'));
        img.src = dataUrl;
    });
}
function drawToPng(dataUrl, w, h) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>{
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Canvas is unavailable in this browser.'));
                return;
            }
            ctx.drawImage(img, 0, 0, w, h);
            try {
                resolve(canvas.toDataURL('image/png'));
            } catch (err) {
                reject(err instanceof Error ? err : new Error('Encode failed'));
            }
        };
        img.onerror = ()=>reject(new Error('Could not load that image.'));
        img.src = dataUrl;
    });
}
function approxDataUrlBytes(dataUrl) {
    const comma = dataUrl.indexOf(',');
    if (comma === -1) return dataUrl.length;
    // base64 is ~4 chars per 3 bytes; this estimate is good enough to
    // guard the localStorage budget without parsing.
    const base64 = dataUrl.slice(comma + 1);
    return Math.floor(base64.length * 3 / 4);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/pet/PetSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PetSettings",
    ()=>PetSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/state/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/pets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSpriteFace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/PetSpriteFace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/codexAtlas.ts [app-client] (ecmascript)");
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
;
;
;
// Curated palette so the customize swatch row stays compact and on-brand
// without forcing a full color picker. The first entry mirrors --accent.
const ACCENT_SWATCHES = [
    '#c96442',
    '#2348b8',
    '#1f7a3a',
    '#6c3aa6',
    '#d97a26',
    '#9c2a25',
    '#74716b',
    '#0d0c0a'
];
function PetSettings({ cfg, setCfg }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const pet = cfg.pet ?? {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PET"],
        custom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCustomPet"])()
    };
    const customGlyphId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const atlasInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Atlas import staging — when the user uploads (or drops in) a file
    // that matches the Codex 8x9 / 192x208 spritesheet shape, we keep the
    // raw pixels around in memory so they can preview every animation row
    // and pick the one to "adopt" without re-uploading. None of this hits
    // localStorage; only the cropped row strip does.
    const [atlasPreview, setAtlasPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [atlasRowIndex, setAtlasRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [atlasBusy, setAtlasBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hatchCopiedTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // "Hatch with AI" prompt scratchpad. The user types a short pet
    // concept here, we splice it into a ready-to-paste hatch-pet skill
    // prompt, then they copy or run it from chat.
    const [hatchConcept, setHatchConcept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hatchCopied, setHatchCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // "Recently hatched" — the daemon scans `${CODEX_HOME:-$HOME/.codex}/pets/`
    // for pets packaged by the upstream hatch-pet skill and surfaces them
    // here so the user can one-click adopt without going through the
    // file-picker import path.
    const [codexPets, setCodexPets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [codexPetsLoading, setCodexPetsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [codexPetsRoot, setCodexPetsRoot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [codexAdopting, setCodexAdopting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [petActionStatus, setPetActionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Community catalog sync — calls the daemon-side port of the
    // `sync-community-pets` script which fetches the latest pets from
    // Codex Pet Share + j20 Hatchery into `~/.codex/pets/`. We surface
    // the run summary (or error) inline below the head row so users get
    // direct feedback after the long-running download.
    const [communitySyncing, setCommunitySyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [communitySyncStatus, setCommunitySyncStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetSettings.useEffect": ()=>{
            return ({
                "PetSettings.useEffect": ()=>{
                    if (hatchCopiedTimerRef.current !== null) {
                        window.clearTimeout(hatchCopiedTimerRef.current);
                        hatchCopiedTimerRef.current = null;
                    }
                }
            })["PetSettings.useEffect"];
        }
    }["PetSettings.useEffect"], []);
    const initialTab = pet.petId === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"] && pet.custom.imageUrl && !pet.custom.atlas ? 'custom' : 'builtIn';
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    // Atlas previews are produced from a Custom-tab upload; pin the
    // user there so the row picker is visible right after they drop
    // the file in.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetSettings.useEffect": ()=>{
            if (atlasPreview) setActiveTab('custom');
        }
    }["PetSettings.useEffect"], [
        atlasPreview
    ]);
    const refreshCodexPets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PetSettings.useCallback[refreshCodexPets]": async ()=>{
            setCodexPetsLoading(true);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCodexPets"])();
                setCodexPets(result.pets);
                setCodexPetsRoot(result.rootDir);
            } finally{
                setCodexPetsLoading(false);
            }
        }
    }["PetSettings.useCallback[refreshCodexPets]"], []);
    const handleCommunitySync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PetSettings.useCallback[handleCommunitySync]": async ()=>{
            setCommunitySyncing(true);
            setCommunitySyncStatus(null);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncCommunityPets"])();
                if (result.error) {
                    setCommunitySyncStatus({
                        kind: 'error',
                        error: result.error
                    });
                } else {
                    setCommunitySyncStatus({
                        kind: 'done',
                        wrote: result.wrote,
                        total: result.total
                    });
                }
                // Pull the freshly-synced pets into the grid even on a partial
                // failure — the daemon writes whatever succeeded before erroring.
                await refreshCodexPets();
            } catch (err) {
                setCommunitySyncStatus({
                    kind: 'error',
                    error: err instanceof Error ? err.message : 'Sync request failed'
                });
            } finally{
                setCommunitySyncing(false);
            }
        }
    }["PetSettings.useCallback[handleCommunitySync]"], [
        refreshCodexPets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetSettings.useEffect": ()=>{
            void refreshCodexPets();
        }
    }["PetSettings.useEffect"], [
        refreshCodexPets
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetSettings.useEffect": ()=>{
            if (!petActionStatus) return;
            const timer = window.setTimeout({
                "PetSettings.useEffect.timer": ()=>setPetActionStatus(null)
            }["PetSettings.useEffect.timer"], 2400);
            return ({
                "PetSettings.useEffect": ()=>window.clearTimeout(timer)
            })["PetSettings.useEffect"];
        }
    }["PetSettings.useEffect"], [
        petActionStatus
    ]);
    const update = (patch)=>{
        setCfg((curr)=>{
            const prev = curr.pet ?? {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PET"],
                custom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCustomPet"])()
            };
            return {
                ...curr,
                pet: {
                    ...prev,
                    ...patch,
                    custom: {
                        ...prev.custom,
                        ...patch.custom ?? {}
                    }
                }
            };
        });
    };
    // "Adopt" is the umbrella action that picks a pet *and* wakes it. The
    // user can independently tuck via the wake toggle below without giving
    // up adoption status.
    const adopt = (petId)=>{
        update({
            adopted: true,
            enabled: true,
            petId
        });
    };
    // Patch the custom pet's image fields and (when something useful was
    // dropped in) auto-switch the active pet to `custom` so the user
    // sees their upload immediately without an extra click.
    const patchCustom = (patch, options)=>{
        setCfg((curr)=>{
            const prev = curr.pet ?? {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$state$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PET"],
                custom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCustomPet"])()
            };
            const nextCustom = {
                ...prev.custom,
                ...patch
            };
            const shouldFocus = options?.focusCustom && nextCustom.imageUrl;
            return {
                ...curr,
                pet: {
                    ...prev,
                    adopted: shouldFocus ? true : prev.adopted,
                    enabled: shouldFocus ? true : prev.enabled,
                    petId: shouldFocus ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"] : prev.petId,
                    custom: nextCustom
                }
            };
        });
    };
    async function handleFile(file) {
        if (!file) return;
        setUploadError(null);
        setUploading(true);
        try {
            // Quick aspect probe before we commit to either path — this lets
            // us route Codex hatch-pet atlases through the row-picker flow
            // (no downscale, lossless crop) while every other image keeps
            // the existing tiny-PNG re-encode.
            const probe = await probeImageDimensions(file);
            if (probe && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["looksLikeCodexAtlas"])(probe.width, probe.height)) {
                const atlas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAtlasImageFromFile"])(file);
                setAtlasPreview(atlas);
                setAtlasRowIndex(0);
                return;
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadPetImageFromFile"])(file);
            // Best-effort guess at frame count for spritesheets — if the
            // image is much wider than tall, assume horizontal frames sized
            // to the image height (codex-pets-react sheets follow this
            // convention). The user can always tweak the field after.
            const aspectGuess = result.width / Math.max(1, result.height) >= 1.6 ? Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAMES_MAX"], Math.max(2, Math.round(result.width / result.height))) : 1;
            patchCustom({
                imageUrl: result.dataUrl,
                frames: aspectGuess,
                fps: pet.custom.fps ?? 6
            }, {
                focusCustom: true
            });
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Could not load that image.';
            setUploadError(message);
        } finally{
            setUploading(false);
        }
    }
    // Opening the dedicated "Import Codex sprite" picker forces the atlas
    // path even if the dimensions don't quite match — useful for users
    // who've resized or recompressed a hatched pet outside Open Design.
    async function handleAtlasFile(file) {
        if (!file) return;
        setUploadError(null);
        setAtlasBusy(true);
        try {
            const atlas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAtlasImageFromFile"])(file);
            setAtlasPreview(atlas);
            setAtlasRowIndex(0);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Could not load that atlas.';
            setUploadError(message);
        } finally{
            setAtlasBusy(false);
        }
    }
    // Slice the staged atlas into a single horizontal animation strip
    // and stash it as the custom pet's sprite. We pick the per-row frame
    // count + fps directly from the upstream `animation-rows.md`
    // reference so the resulting playback matches the cadence the Codex
    // app uses for the same row.
    async function commitAtlasRow() {
        if (!atlasPreview) return;
        const def = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEX_ATLAS_ROWS_DEF"].find((r)=>r.index === atlasRowIndex);
        setAtlasBusy(true);
        try {
            const cropped = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cropAtlasRow"])(atlasPreview.dataUrl, {
                rowIndex: atlasRowIndex,
                cols: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEX_ATLAS_COLS"],
                rows: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEX_ATLAS_ROWS"]
            });
            patchCustom({
                imageUrl: cropped.dataUrl,
                frames: cropped.frames,
                fps: def?.fps ?? pet.custom.fps ?? 6,
                atlas: undefined
            }, {
                focusCustom: true
            });
            setAtlasPreview(null);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Could not crop that row.';
            setUploadError(message);
        } finally{
            setAtlasBusy(false);
        }
    }
    // "Use full atlas" path — keep the entire downscaled Codex grid plus
    // its layout metadata so the overlay can drive row switching from
    // the interaction state machine (idle → hover/waving, drag → running,
    // long-idle → waiting). Mirrors the upstream `codex-pets-react`
    // PetWidget behaviour that picks rows on the fly instead of looping
    // a single strip.
    async function commitFullAtlas() {
        if (!atlasPreview) return;
        setAtlasBusy(true);
        try {
            const prepared = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareCodexAtlas"])(atlasPreview.dataUrl);
            patchCustom({
                imageUrl: prepared.dataUrl,
                atlas: prepared.layout,
                // Drop the legacy strip params so the renderer goes through
                // the atlas branch unambiguously, even on configs migrated
                // from the old single-row import path.
                frames: 1,
                fps: prepared.layout.rowsDef[0]?.fps ?? pet.custom.fps ?? 6
            }, {
                focusCustom: true
            });
            setAtlasPreview(null);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Could not import that atlas.';
            setUploadError(message);
        } finally{
            setAtlasBusy(false);
        }
    }
    function clearImage() {
        patchCustom({
            imageUrl: undefined,
            frames: 1,
            atlas: undefined
        });
    }
    // One-click adopt for a Codex hatch-pet — fetch the spritesheet
    // from the daemon and stash the FULL 8x9 atlas (downscaled) plus a
    // matching layout so the overlay can switch animation rows
    // (idle ↔ waving ↔ running-*) just like the upstream
    // `codex-pets-react` `PetWidget`. Defaults `name`/`greeting` from the
    // manifest so the speech bubble feels personalized.
    async function adoptCodexPet(pet) {
        setCodexAdopting(pet.id);
        setUploadError(null);
        try {
            const custom = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareCodexPetCustom"])(pet);
            patchCustom(custom, {
                focusCustom: true
            });
            setPetActionStatus({
                kind: 'adopted',
                name: pet.displayName || pet.id
            });
            return true;
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Could not adopt that pet.';
            setUploadError(message);
            return false;
        } finally{
            setCodexAdopting(null);
        }
    }
    // Build the ready-to-paste hatch-pet skill prompt. The skill is
    // vendored under `skills/hatch-pet/` so any chat agent can run it;
    // this prompt is just the friendly wrapper that names the concept
    // and points the agent at the right skill.
    const hatchPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PetSettings.useMemo[hatchPrompt]": ()=>{
            const concept = hatchConcept.trim();
            const intro = concept ? `Hatch a Codex-compatible animated pet for me. Concept: ${concept}.` : 'Hatch a Codex-compatible animated pet for me.';
            return [
                intro,
                '',
                'Use the @hatch-pet skill end-to-end:',
                '1. Generate the base look with $imagegen.',
                '2. Generate every row strip (idle, running-right, waving, jumping, failed, waiting, running, review).',
                '3. Mirror running-left from running-right only when the design is symmetric.',
                '4. Run the deterministic scripts (extract / compose / validate / contact-sheet / videos).',
                '5. Package the result into ${CODEX_HOME:-$HOME/.codex}/pets/<pet-name>/ with pet.json + spritesheet.webp.',
                '',
                'When the spritesheet is saved, tell me the absolute path so I can import it into Open Design via Settings → Pets → Import Codex sprite.'
            ].join('\n');
        }
    }["PetSettings.useMemo[hatchPrompt]"], [
        hatchConcept
    ]);
    async function copyHatchPrompt() {
        try {
            await navigator.clipboard.writeText(hatchPrompt);
            setHatchCopied(true);
            if (hatchCopiedTimerRef.current !== null) {
                window.clearTimeout(hatchCopiedTimerRef.current);
            }
            hatchCopiedTimerRef.current = window.setTimeout(()=>{
                hatchCopiedTimerRef.current = null;
                setHatchCopied(false);
            }, 1800);
        } catch  {
            if (hatchCopiedTimerRef.current !== null) {
                window.clearTimeout(hatchCopiedTimerRef.current);
                hatchCopiedTimerRef.current = null;
            }
            setHatchCopied(false);
        }
    }
    // Resolved view of the custom pet so the preview / picker rows can
    // share the same sprite renderer used by the overlay.
    const customPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveActivePet"])({
        ...pet,
        adopted: true,
        petId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"]
    });
    // Built-in pets are the bundled spritesheets baked into the repo at
    // `assets/community-pets/<id>/`; the daemon flags them with
    // `bundled: true` so they land here. Community pets are the
    // user-hatched / synced pets that live under `~/.codex/pets/`.
    const bundledPets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PetSettings.useMemo[bundledPets]": ()=>codexPets.filter({
                "PetSettings.useMemo[bundledPets]": (p)=>p.bundled
            }["PetSettings.useMemo[bundledPets]"])
    }["PetSettings.useMemo[bundledPets]"], [
        codexPets
    ]);
    const communityPets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PetSettings.useMemo[communityPets]": ()=>codexPets.filter({
                "PetSettings.useMemo[communityPets]": (p)=>!p.bundled
            }["PetSettings.useMemo[communityPets]"])
    }["PetSettings.useMemo[communityPets]"], [
        codexPets
    ]);
    const selectedPetPreview = pet.adopted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveActivePet"])(pet) : null;
    const canToggleVisibility = pet.adopted || bundledPets.length > 0 || codexPetsLoading;
    async function togglePetVisibility() {
        if (pet.enabled) {
            update({
                enabled: false
            });
            setPetActionStatus({
                kind: 'hidden'
            });
            return;
        }
        if (pet.adopted) {
            update({
                enabled: true
            });
            setPetActionStatus({
                kind: 'shown'
            });
            return;
        }
        const firstBundledPet = bundledPets[0];
        if (firstBundledPet) {
            const adopted = await adoptCodexPet(firstBundledPet);
            if (adopted) setActiveTab('builtIn');
        }
    }
    // Shared card renderer used by both the Built-in and Community tabs
    // so the visual treatment stays consistent — the only difference
    // between the two grids is which subset of `codexPets` they show.
    function renderCodexCard(p, options) {
        const adopting = codexAdopting === p.id;
        const spritesheet = `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["codexPetSpritesheetUrl"])(p)})`;
        // Best-effort match: bundled / community adoption copies the
        // pet's display name into `custom.name`, so when the user is on
        // a custom slot with a matching name + image we treat that card
        // as the active selection.
        const isActive = pet.adopted && pet.petId === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"] && !!pet.custom.imageUrl && pet.custom.name === (p.displayName || p.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `pet-codex-card${isActive ? ' active' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pet-codex-thumb",
                    style: {
                        ['--pet-codex-src']: spritesheet
                    },
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pet-codex-thumb-preview",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pet-codex-meta",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-codex-title-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: p.displayName
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                options?.defaultChoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pet-codex-default-badge",
                                    children: t('common.default')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this),
                        p.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-codex-description",
                            children: p.description
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                            lineNumber: 514,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `seg-btn small pet-codex-adopt-btn${isActive ? ' active' : ''}`,
                    onClick: ()=>void adoptCodexPet(p),
                    disabled: adopting || codexAdopting !== null,
                    "aria-pressed": isActive,
                    "aria-label": isActive ? t('pet.adoptedBadge') : t('pet.codexAdopt'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: adopting ? 'spinner' : 'check',
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this),
                        !isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: adopting ? t('pet.codexAdopting') : t('pet.codexAdopt')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                            lineNumber: 527,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                    lineNumber: 517,
                    columnNumber: 9
                }, this)
            ]
        }, p.id, true, {
            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
            lineNumber: 493,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "settings-section",
        children: [
            petActionStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pet-action-status",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "check",
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: petActionStatus.kind === 'adopted' ? `${t('pet.adoptedBadge')}: ${petActionStatus.name ?? ''}` : petActionStatus.kind === 'shown' ? t('pet.wake') : t('pet.tuck')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                lineNumber: 537,
                columnNumber: 9
            }, this) : null,
            selectedPetPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-current-summary",
                style: {
                    ['--pet-accent']: selectedPetPreview.accent
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pet-current-summary__sprite",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSpriteFace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PetSpriteFace"], {
                            active: selectedPetPreview,
                            size: 38
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                            lineNumber: 555,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-current-summary__copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pet-current-summary__label",
                                children: t('pet.adoptedBadge')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 558,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: selectedPetPreview.name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 561,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    pet.enabled ? t('pet.wake') : t('pet.tuck'),
                                    " · ",
                                    selectedPetPreview.greeting
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 562,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 557,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                lineNumber: 550,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-tabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-tabs-top-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "subtab-pill",
                                role: "tablist",
                                "aria-label": t('pet.tabsAria'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "tab",
                                        "aria-selected": activeTab === 'builtIn',
                                        className: activeTab === 'builtIn' ? 'active' : '',
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsPetsClick"])(analytics.track, {
                                                page_name: 'settings',
                                                area: 'pets',
                                                element: 'built_in'
                                            });
                                            setActiveTab('builtIn');
                                        },
                                        children: t('pet.tabBuiltIn')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "tab",
                                        "aria-selected": activeTab === 'custom',
                                        className: activeTab === 'custom' ? 'active' : '',
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsPetsClick"])(analytics.track, {
                                                page_name: 'settings',
                                                area: 'pets',
                                                element: 'custom'
                                            });
                                            setActiveTab('custom');
                                        },
                                        children: t('pet.tabCustom')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "tab",
                                        "aria-selected": activeTab === 'community',
                                        className: activeTab === 'community' ? 'active' : '',
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsPetsClick"])(analytics.track, {
                                                page_name: 'settings',
                                                area: 'pets',
                                                element: 'community'
                                            });
                                            setActiveTab('community');
                                        },
                                        children: t('pet.tabCommunity')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 608,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-wake-controls",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `seg-btn small${pet.enabled ? ' active' : ''}`,
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsPetsClick"])(analytics.track, {
                                            page_name: 'settings',
                                            area: 'pets',
                                            element: 'tuck_away'
                                        });
                                        void togglePetVisibility();
                                    },
                                    disabled: !canToggleVisibility || codexAdopting !== null,
                                    title: pet.enabled ? t('pet.tuckTitle') : t('pet.wakeTitle'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: codexAdopting !== null ? 'spinner' : pet.enabled ? 'eye' : 'sparkles',
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                            lineNumber: 640,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: pet.enabled ? t('pet.tuck') : t('pet.wake')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                    lineNumber: 626,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 625,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint pet-tabs-hint",
                        children: activeTab === 'builtIn' ? t('pet.tabBuiltInHint') : activeTab === 'custom' ? t('pet.tabCustomHint') : t('pet.tabCommunityHint')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            activeTab === 'builtIn' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-built-in",
                children: [
                    bundledPets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint pet-codex-empty",
                        children: codexPetsLoading ? t('pet.codexLoading') : t('pet.builtInEmpty')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 660,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-codex-grid",
                        role: "radiogroup",
                        "aria-label": t('pet.tabBuiltIn'),
                        children: bundledPets.map((p, index)=>renderCodexCard(p, {
                                defaultChoice: !pet.adopted && index === 0
                            }))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 666,
                        columnNumber: 13
                    }, this),
                    uploadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint pet-image-error",
                        children: uploadError
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 679,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                lineNumber: 658,
                columnNumber: 9
            }, this) : null,
            activeTab === 'custom' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-custom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-custom-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: t('pet.customTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 688,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hint",
                                        children: t('pet.customHint')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `seg-btn small${pet.adopted && pet.petId === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"] ? ' active' : ''}`,
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackSettingsPetsClick"])(analytics.track, {
                                        page_name: 'settings',
                                        area: 'pets',
                                        element: 'adopt',
                                        pet_id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"]
                                    });
                                    adopt(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"]);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: pet.adopted && pet.petId === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"] ? 'check' : 'sparkles',
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: pet.adopted && pet.petId === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_PET_ID"] ? t('pet.adoptedBadge') : t('pet.useCustom')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-custom-preview",
                        style: {
                            ['--pet-accent']: pet.custom.accent
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pet-custom-sprite",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSpriteFace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PetSpriteFace"], {
                                    active: customPreview,
                                    size: 48
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                    lineNumber: 720,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-custom-bubble",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: pet.custom.name || 'Buddy'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 723,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: pet.custom.greeting || t('pet.customGreetingPlaceholder')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 724,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 722,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 715,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-image-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                accept: "image/png,image/jpeg,image/webp,image/gif,image/svg+xml",
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>{
                                    const file = e.target.files?.[0];
                                    void handleFile(file);
                                    e.target.value = '';
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: atlasInputRef,
                                type: "file",
                                accept: "image/png,image/webp,image/jpeg,image/gif",
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>{
                                    const file = e.target.files?.[0];
                                    void handleAtlasFile(file);
                                    e.target.value = '';
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 739,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-image-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "seg-btn small",
                                        onClick: ()=>fileInputRef.current?.click(),
                                        disabled: uploading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: uploading ? 'spinner' : 'upload',
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 757,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: pet.custom.imageUrl ? t('pet.imageReplace') : t('pet.imageUpload')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 758,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 751,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "seg-btn small ghost",
                                        onClick: ()=>atlasInputRef.current?.click(),
                                        disabled: atlasBusy,
                                        title: t('pet.atlasImportTitle'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: atlasBusy ? 'spinner' : 'sparkles',
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 771,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pet.atlasImport')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 772,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 764,
                                        columnNumber: 13
                                    }, this),
                                    pet.custom.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "seg-btn small ghost",
                                        onClick: clearImage,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "close",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 780,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pet.imageRemove')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 781,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 775,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 750,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint",
                                children: pet.custom.imageUrl ? t('pet.imageHintActive') : t('pet.imageHintIdle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 785,
                                columnNumber: 11
                            }, this),
                            uploadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint pet-image-error",
                                children: uploadError
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 791,
                                columnNumber: 13
                            }, this) : null,
                            pet.custom.imageUrl && pet.custom.atlas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint pet-image-atlas-hint",
                                children: t('pet.atlasActiveHint')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 794,
                                columnNumber: 13
                            }, this) : null,
                            pet.custom.imageUrl && !pet.custom.atlas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-image-frames",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "field-label",
                                                children: t('pet.fieldFrames')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAMES_MIN"],
                                                max: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAMES_MAX"],
                                                step: 1,
                                                value: pet.custom.frames ?? 1,
                                                onChange: (e)=>{
                                                    const n = parseInt(e.target.value, 10);
                                                    if (!Number.isFinite(n)) return;
                                                    patchCustom({
                                                        frames: n
                                                    });
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hint",
                                                children: t('pet.fieldFramesHint')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 812,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 798,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "field-label",
                                                children: t('pet.fieldFps')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 815,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FPS_MIN"],
                                                max: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FPS_MAX"],
                                                step: 1,
                                                value: pet.custom.fps ?? 6,
                                                onChange: (e)=>{
                                                    const n = parseInt(e.target.value, 10);
                                                    if (!Number.isFinite(n)) return;
                                                    patchCustom({
                                                        fps: n
                                                    });
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 816,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hint",
                                                children: t('pet.fieldFpsHint')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 828,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 814,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 797,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    atlasPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-atlas-preview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-atlas-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: t('pet.atlasPickerTitle')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 838,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hint",
                                                children: t('pet.atlasPickerHint')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 839,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 837,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "seg-btn small ghost",
                                        onClick: ()=>setAtlasPreview(null),
                                        disabled: atlasBusy,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "close",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 847,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pet.atlasCancel')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 848,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 841,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 836,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-atlas-thumb",
                                style: {
                                    backgroundImage: `url(${atlasPreview.dataUrl})`
                                },
                                "aria-label": t('pet.atlasPickerTitle')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 851,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-atlas-rows",
                                role: "radiogroup",
                                "aria-label": t('pet.atlasPickerTitle'),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$codexAtlas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEX_ATLAS_ROWS_DEF"].map((row)=>{
                                    const active = row.index === atlasRowIndex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "radio",
                                        "aria-checked": active,
                                        className: `pet-atlas-row${active ? ' active' : ''}`,
                                        onClick: ()=>setAtlasRowIndex(row.index),
                                        disabled: atlasBusy,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pet-atlas-row-name",
                                                children: t(`pet.atlasRow.${row.id}`)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 873,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pet-atlas-row-meta",
                                                children: [
                                                    row.frames,
                                                    " · ",
                                                    row.fps,
                                                    " fps"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 876,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 864,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-atlas-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "seg-btn small",
                                        onClick: ()=>void commitFullAtlas(),
                                        disabled: atlasBusy,
                                        title: t('pet.atlasAdoptFullTitle'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: atlasBusy ? 'spinner' : 'sparkles',
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 891,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pet.atlasAdoptFull')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 892,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 884,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "seg-btn small ghost",
                                        onClick: ()=>void commitAtlasRow(),
                                        disabled: atlasBusy,
                                        title: t('pet.atlasAdoptRowTitle'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: atlasBusy ? 'spinner' : 'check',
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 901,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('pet.atlasAdopt')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 894,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 883,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 835,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-custom-fields",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-label",
                                        children: t('pet.fieldName')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 910,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        maxLength: 32,
                                        value: pet.custom.name,
                                        placeholder: "Buddy",
                                        onChange: (e)=>update({
                                                custom: {
                                                    ...pet.custom,
                                                    name: e.target.value
                                                }
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 911,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 909,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                htmlFor: customGlyphId,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-label",
                                        children: t('pet.fieldGlyph')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 922,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: customGlyphId,
                                        type: "text",
                                        maxLength: 4,
                                        value: pet.custom.glyph,
                                        placeholder: "🦄",
                                        onChange: (e)=>update({
                                                custom: {
                                                    ...pet.custom,
                                                    glyph: e.target.value
                                                }
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 923,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hint",
                                        children: t('pet.fieldGlyphHint')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 933,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 921,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-label",
                                        children: t('pet.fieldGreeting')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 936,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        maxLength: 120,
                                        value: pet.custom.greeting,
                                        placeholder: t('pet.customGreetingPlaceholder'),
                                        onChange: (e)=>update({
                                                custom: {
                                                    ...pet.custom,
                                                    greeting: e.target.value
                                                }
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 935,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-label",
                                        children: t('pet.fieldAccent')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 948,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pet-swatches",
                                        role: "radiogroup",
                                        "aria-label": t('pet.fieldAccent'),
                                        children: [
                                            ACCENT_SWATCHES.map((color)=>{
                                                const active = pet.custom.accent.toLowerCase() === color.toLowerCase();
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    role: "radio",
                                                    "aria-checked": active,
                                                    className: `pet-swatch${active ? ' active' : ''}`,
                                                    style: {
                                                        background: color
                                                    },
                                                    onClick: ()=>update({
                                                            custom: {
                                                                ...pet.custom,
                                                                accent: color
                                                            }
                                                        }),
                                                    title: color
                                                }, color, false, {
                                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                "aria-label": t('pet.fieldAccentCustom'),
                                                className: "pet-swatch-picker",
                                                value: pet.custom.accent,
                                                onChange: (e)=>update({
                                                        custom: {
                                                            ...pet.custom,
                                                            accent: e.target.value
                                                        }
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 967,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 949,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, this) : null,
            activeTab === 'community' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-community",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-codex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-codex-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: t('pet.codexTitle')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 987,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hint",
                                                children: codexPetsRoot ? t('pet.codexSubtitleWithDir', {
                                                    dir: codexPetsRoot
                                                }) : t('pet.codexSubtitle')
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 988,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 986,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pet-codex-head-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "seg-btn small",
                                                onClick: ()=>void handleCommunitySync(),
                                                disabled: communitySyncing,
                                                title: t('pet.communitySyncTitle'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: communitySyncing ? 'spinner' : 'download',
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: communitySyncing ? t('pet.communitySyncing') : t('pet.communitySync')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 995,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "seg-btn small ghost",
                                                onClick: ()=>void refreshCodexPets(),
                                                disabled: codexPetsLoading,
                                                title: t('pet.codexRefresh'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: codexPetsLoading ? 'spinner' : 'refresh',
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('pet.codexRefresh')
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 994,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 985,
                                columnNumber: 13
                            }, this),
                            communitySyncStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `hint pet-codex-sync-status${communitySyncStatus.kind === 'error' ? ' error' : ''}`,
                                role: "status",
                                children: communitySyncStatus.kind === 'done' ? t('pet.communitySyncDone', {
                                    wrote: communitySyncStatus.wrote,
                                    total: communitySyncStatus.total
                                }) : t('pet.communitySyncFailed', {
                                    error: communitySyncStatus.error
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1028,
                                columnNumber: 15
                            }, this) : null,
                            communityPets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint pet-codex-empty",
                                children: codexPetsLoading ? t('pet.codexLoading') : t('pet.codexEmpty')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1043,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-codex-grid",
                                role: "radiogroup",
                                "aria-label": t('pet.codexTitle'),
                                children: communityPets.map((p)=>renderCodexCard(p))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1047,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 984,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-hatch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-hatch-head",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: t('pet.hatchTitle')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                            lineNumber: 1060,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "hint",
                                            children: t('pet.hatchHint')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1058,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "field-label",
                                        children: t('pet.hatchConcept')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        maxLength: 140,
                                        value: hatchConcept,
                                        placeholder: t('pet.hatchConceptPlaceholder'),
                                        onChange: (e)=>setHatchConcept(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1064,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "pet-hatch-prompt",
                                "aria-live": "polite",
                                children: hatchPrompt
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1074,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pet-hatch-actions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "seg-btn small",
                                    onClick: ()=>void copyHatchPrompt(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: hatchCopied ? 'check' : 'copy',
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: hatchCopied ? t('pet.hatchCopied') : t('pet.hatchCopy')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                    lineNumber: 1076,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1075,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hint pet-hatch-foot",
                                children: t('pet.hatchFoot')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                                lineNumber: 1085,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                        lineNumber: 1057,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
                lineNumber: 983,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/pet/PetSettings.tsx",
        lineNumber: 535,
        columnNumber: 5
    }, this);
}
_s(PetSettings, "1LpO+IpA59q8LUGY2sf0D9Mty3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = PetSettings;
function blobToDataUrl(blob) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = ()=>reject(reader.error ?? new Error('Read failed'));
        reader.onload = ()=>{
            const result = reader.result;
            if (typeof result !== 'string') {
                reject(new Error('Could not read pet sprite.'));
                return;
            }
            resolve(result);
        };
        reader.readAsDataURL(blob);
    });
}
// Cheap dimension probe used to decide whether an upload is a Codex
// hatch-pet atlas before we commit to either the lossy re-encode path
// or the lossless atlas crop path. Returns null on read errors so the
// caller can fall back to the regular flow without surfacing the read
// failure twice.
async function probeImageDimensions(file) {
    try {
        const url = URL.createObjectURL(file);
        try {
            return await new Promise((resolve, reject)=>{
                const img = new Image();
                img.onload = ()=>resolve({
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    });
                img.onerror = ()=>reject(new Error('probe failed'));
                img.src = url;
            });
        } finally{
            URL.revokeObjectURL(url);
        }
    } catch  {
        return null;
    }
}
var _c;
__turbopack_context__.k.register(_c, "PetSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/pet/PetOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PetOverlay",
    ()=>PetOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/pets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSpriteFace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/pet/PetSpriteFace.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const STORAGE_KEY = 'open-design:pet-position';
const EMPTY_TASK_CENTER = {
    running: [],
    queued: [],
    recent: []
};
const DEFAULT_POSITION = {
    right: 24,
    bottom: 24
};
// How long the pet has to sit untouched before the overlay flips to
// the "waiting" animation row. Sized to sit comfortably past a few
// ambient beats so the pet clearly feels alive before falling through
// to the more static "bored" cue.
const WAITING_AFTER_MS = 45000;
// Ambient idle choreography — while nobody is hovering / dragging, the
// overlay occasionally swaps the `idle` row for a random non-idle row
// from the atlas (wave, hop, look around) so the pet visibly has a
// life of its own instead of breathing in place forever. Each ambient
// "beat" plays for a chunk of time, then the pet returns to idle for
// a longer rest window before the next beat. Randomising both windows
// prevents the rhythm from feeling mechanical, and the rest window is
// intentionally generous so the pet reads as calm rather than fidgety.
const AMBIENT_PLAY_MIN_MS = 1400;
const AMBIENT_PLAY_VARIANCE_MS = 900;
const AMBIENT_REST_MIN_MS = 9000;
const AMBIENT_REST_VARIANCE_MS = 9000;
const AMBIENT_INITIAL_DELAY_MIN_MS = 4000;
const AMBIENT_INITIAL_DELAY_VARIANCE_MS = 3000;
// Filters pointer jitter and accidental nudges before the overlay
// commits to a directional running animation. Picked to feel
// responsive without flickering on small mouse wiggles.
const DRAG_GESTURE_MIN_PX = 14;
// Require one axis to clearly dominate before swapping running-* for
// jumping/waving so diagonal drags don't strobe between rows.
const DRAG_AXIS_BIAS = 1.18;
const IDLE_QUOTE_COUNT = 6;
function recentTaskKey(task) {
    return `${task.projectId}:${task.updatedAt}`;
}
function loadPosition() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return DEFAULT_POSITION;
        const parsed = JSON.parse(raw);
        return {
            right: typeof parsed.right === 'number' ? parsed.right : DEFAULT_POSITION.right,
            bottom: typeof parsed.bottom === 'number' ? parsed.bottom : DEFAULT_POSITION.bottom
        };
    } catch  {
        return DEFAULT_POSITION;
    }
}
function savePosition(p) {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch  {
    /* ignore */ }
}
function PetOverlay({ pet, taskCenter = EMPTY_TASK_CENTER, onOpenProject, persistentBubble = false }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PetOverlay.useMemo[active]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveActivePet"])(pet)
    }["PetOverlay.useMemo[active]"], [
        pet
    ]);
    const [bubbleOpen, setBubbleOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(persistentBubble);
    const [acknowledgedRecentKeys, setAcknowledgedRecentKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PetOverlay.useState": ()=>new Set()
    }["PetOverlay.useState"]);
    const [viewingRecentKeys, setViewingRecentKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PetOverlay.useState": ()=>new Set()
    }["PetOverlay.useState"]);
    const [ambientIdx, setAmbientIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PetOverlay.useState": ()=>loadPosition()
    }["PetOverlay.useState"]);
    // Interaction state drives which atlas row plays. Only meaningful
    // for atlas-backed custom pets — the renderer ignores it for emoji
    // / single-strip pets.
    const [interaction, setInteraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    // Ambient row id that temporarily overrides the `idle` row. Null
    // whenever the pet is resting on its baseline row so the user-facing
    // interaction state wins as soon as a gesture fires.
    const [ambientRowId, setAmbientRowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Idle timer that flips the pet to the `waiting` row after a few
    // seconds without hover or drag. Reset by every interaction.
    const waitingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Show the greeting briefly the first time the overlay mounts after a
    // wake. Auto-tuck the bubble after 4s so it does not linger forever.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetOverlay.useEffect": ()=>{
            if (!active) return;
            setBubbleOpen(true);
            if (persistentBubble) return;
            const id = window.setTimeout({
                "PetOverlay.useEffect.id": ()=>setBubbleOpen(false)
            }["PetOverlay.useEffect.id"], 4000);
            return ({
                "PetOverlay.useEffect": ()=>window.clearTimeout(id)
            })["PetOverlay.useEffect"];
        }
    }["PetOverlay.useEffect"], [
        active?.id,
        persistentBubble
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetOverlay.useEffect": ()=>{
            savePosition(position);
        }
    }["PetOverlay.useEffect"], [
        position
    ]);
    const idleQuotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PetOverlay.useMemo[idleQuotes]": ()=>[
                {
                    text: t('pet.idleQuote.leonardo.text'),
                    author: t('pet.idleQuote.leonardo.author')
                },
                {
                    text: t('pet.idleQuote.michelangelo.text'),
                    author: t('pet.idleQuote.michelangelo.author')
                },
                {
                    text: t('pet.idleQuote.bernini.text'),
                    author: t('pet.idleQuote.bernini.author')
                },
                {
                    text: t('pet.idleQuote.raphael.text'),
                    author: t('pet.idleQuote.raphael.author')
                },
                {
                    text: t('pet.idleQuote.caravaggio.text'),
                    author: t('pet.idleQuote.caravaggio.author')
                },
                {
                    text: t('pet.idleQuote.rodin.text'),
                    author: t('pet.idleQuote.rodin.author')
                }
            ]
    }["PetOverlay.useMemo[idleQuotes]"], [
        t
    ]);
    const visibleQuote = idleQuotes[ambientIdx % IDLE_QUOTE_COUNT] ?? idleQuotes[0];
    const activeTasks = [
        ...taskCenter.running,
        ...taskCenter.queued
    ];
    const unacknowledgedRecentTasks = taskCenter.recent.filter((task)=>!acknowledgedRecentKeys.has(recentTaskKey(task)));
    const visibleRecentTasks = bubbleOpen ? persistentBubble && viewingRecentKeys.size === 0 ? unacknowledgedRecentTasks : taskCenter.recent.filter((task)=>viewingRecentKeys.has(recentTaskKey(task))) : unacknowledgedRecentTasks;
    const activeTaskCount = activeTasks.reduce((sum, task)=>sum + task.count, 0);
    const recentTaskCount = visibleRecentTasks.length;
    const taskTotal = activeTaskCount + recentTaskCount;
    const badgeTotal = activeTaskCount + unacknowledgedRecentTasks.length;
    const taskSummaryLine = activeTaskCount > 0 ? t(activeTaskCount === 1 ? 'pet.taskSummarySingle' : 'pet.taskSummaryMultiple', {
        count: activeTaskCount,
        projects: new Set(activeTasks.map((task)=>task.projectId)).size
    }) : recentTaskCount > 0 ? t(recentTaskCount === 1 ? 'pet.taskSummaryRecentSingle' : 'pet.taskSummaryRecentMultiple', {
        count: recentTaskCount
    }) : '';
    const visibleLine = taskSummaryLine || visibleQuote?.text || active?.greeting || '';
    const taskRowId = taskTotal > 0 && interaction === 'idle' ? 'waiting' : undefined;
    const acknowledgeRecentTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PetOverlay.useCallback[acknowledgeRecentTasks]": (tasks)=>{
            if (tasks.length === 0) {
                setViewingRecentKeys(new Set());
                return;
            }
            const keys = tasks.map(recentTaskKey);
            setViewingRecentKeys(new Set(keys));
            setAcknowledgedRecentKeys({
                "PetOverlay.useCallback[acknowledgeRecentTasks]": (prev)=>{
                    const next = new Set(prev);
                    for (const key of keys)next.add(key);
                    return next;
                }
            }["PetOverlay.useCallback[acknowledgeRecentTasks]"]);
        }
    }["PetOverlay.useCallback[acknowledgeRecentTasks]"], []);
    // (Re)arms the long-idle waiting timer. Called every time the user
    // interacts so an active session never falls into "waiting" mid-drag.
    const armWaitingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PetOverlay.useCallback[armWaitingTimer]": ()=>{
            if (waitingTimerRef.current != null) {
                window.clearTimeout(waitingTimerRef.current);
            }
            waitingTimerRef.current = window.setTimeout({
                "PetOverlay.useCallback[armWaitingTimer]": ()=>{
                    // Only escalate to `waiting` from a calm `idle` baseline; an
                    // active hover / drag should keep their own animation.
                    setInteraction({
                        "PetOverlay.useCallback[armWaitingTimer]": (prev)=>prev === 'idle' ? 'waiting' : prev
                    }["PetOverlay.useCallback[armWaitingTimer]"]);
                    waitingTimerRef.current = null;
                }
            }["PetOverlay.useCallback[armWaitingTimer]"], WAITING_AFTER_MS);
        }
    }["PetOverlay.useCallback[armWaitingTimer]"], []);
    // Start the idle clock when the pet becomes visible / changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetOverlay.useEffect": ()=>{
            if (!active) return;
            armWaitingTimer();
            return ({
                "PetOverlay.useEffect": ()=>{
                    if (waitingTimerRef.current != null) {
                        window.clearTimeout(waitingTimerRef.current);
                        waitingTimerRef.current = null;
                    }
                }
            })["PetOverlay.useEffect"];
        }
    }["PetOverlay.useEffect"], [
        active?.id,
        armWaitingTimer
    ]);
    // Ambient idle choreography scheduler. Only runs while the pet is in
    // `idle` and has an atlas with ambient-eligible rows; otherwise we
    // bail out and leave the base row alone. The effect is deliberately
    // scoped to `interaction === 'idle'` so any user gesture
    // (hover / drag / pointerdown) cancels the currently playing beat via
    // cleanup and the user-facing state takes over instantly.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PetOverlay.useEffect": ()=>{
            if (interaction !== 'idle') {
                setAmbientRowId(null);
                return;
            }
            const atlas = active?.atlas;
            if (!atlas || atlas.rowsDef.length === 0) return;
            let playTimer;
            let restTimer;
            let lastPlayedId;
            const playBeat = {
                "PetOverlay.useEffect.playBeat": ()=>{
                    const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickAmbientRow"])(atlas, lastPlayedId);
                    if (!def) return;
                    lastPlayedId = def.id;
                    setAmbientRowId(def.id);
                    const playMs = AMBIENT_PLAY_MIN_MS + Math.floor(Math.random() * AMBIENT_PLAY_VARIANCE_MS);
                    playTimer = window.setTimeout({
                        "PetOverlay.useEffect.playBeat": ()=>{
                            setAmbientRowId(null);
                            const restMs = AMBIENT_REST_MIN_MS + Math.floor(Math.random() * AMBIENT_REST_VARIANCE_MS);
                            restTimer = window.setTimeout(playBeat, restMs);
                        }
                    }["PetOverlay.useEffect.playBeat"], playMs);
                }
            }["PetOverlay.useEffect.playBeat"];
            // Let the pet breathe for a moment before the first beat so a
            // freshly-woken overlay doesn't snap straight into a flourish.
            const initialDelay = AMBIENT_INITIAL_DELAY_MIN_MS + Math.floor(Math.random() * AMBIENT_INITIAL_DELAY_VARIANCE_MS);
            restTimer = window.setTimeout(playBeat, initialDelay);
            return ({
                "PetOverlay.useEffect": ()=>{
                    if (playTimer != null) window.clearTimeout(playTimer);
                    if (restTimer != null) window.clearTimeout(restTimer);
                    setAmbientRowId(null);
                }
            })["PetOverlay.useEffect"];
        }
    }["PetOverlay.useEffect"], [
        interaction,
        active?.id,
        active?.atlas
    ]);
    if (!active) return null;
    const onPointerDown = (event)=>{
        if (event.button !== 0) return;
        const target = event.currentTarget;
        target.setPointerCapture(event.pointerId);
        dragRef.current = {
            startX: event.clientX,
            startY: event.clientY,
            startRight: position.right,
            startBottom: position.bottom,
            moved: false,
            direction: null
        };
        armWaitingTimer();
    };
    const onPointerMove = (event)=>{
        const drag = dragRef.current;
        if (!drag) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
        drag.moved = true;
        // Convert pointer movement into right/bottom offsets so the sprite
        // tracks the cursor while staying anchored to the corner system.
        // The clamp budget (~120px) keeps the 96px sprite plus its drop
        // shadow on-screen even when dragged toward the opposite edge.
        const nextRight = Math.max(8, Math.min(window.innerWidth - 120, drag.startRight - dx));
        const nextBottom = Math.max(8, Math.min(window.innerHeight - 120, drag.startBottom - dy));
        setPosition({
            right: nextRight,
            bottom: nextBottom
        });
        // Classify the gesture direction once it clears the jitter floor
        // and one axis clearly dominates the other. The animation then
        // sticks until the user reverses past the threshold again.
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);
        if (absX < DRAG_GESTURE_MIN_PX && absY < DRAG_GESTURE_MIN_PX) return;
        let dir = null;
        if (absX >= absY * DRAG_AXIS_BIAS) {
            dir = dx > 0 ? 'right' : 'left';
        } else if (absY >= absX * DRAG_AXIS_BIAS) {
            dir = dy < 0 ? 'up' : 'down';
        }
        if (dir && dir !== drag.direction) {
            drag.direction = dir;
            setInteraction(dir === 'right' ? 'drag-right' : dir === 'left' ? 'drag-left' : dir === 'up' ? 'drag-up' : 'drag-down');
        }
        armWaitingTimer();
    };
    const onPointerUp = (event)=>{
        const drag = dragRef.current;
        dragRef.current = null;
        try {
            event.currentTarget.releasePointerCapture(event.pointerId);
        } catch  {
        /* ignore */ }
        // A tap (no drag) toggles the speech bubble and rotates the line.
        if (drag && !drag.moved) {
            if (unacknowledgedRecentTasks.length > 0) {
                setBubbleOpen(true);
                setAmbientIdx((i)=>i + 1);
                acknowledgeRecentTasks(unacknowledgedRecentTasks);
            } else {
                setBubbleOpen((open)=>{
                    const next = !open;
                    if (next) {
                        setAmbientIdx((i)=>i + 1);
                    } else {
                        setViewingRecentKeys(new Set());
                    }
                    return next;
                });
            }
        }
        // After the drag ends, fall back to the resting animation so the
        // pet stops "running" the moment the user lets go. Hovered state
        // wins so a release-into-hover keeps the wave going.
        setInteraction(hovered ? 'hover' : 'idle');
        armWaitingTimer();
    };
    const onPointerEnter = ()=>{
        setHovered(true);
        // Don't override an active drag direction with the hover wave —
        // the user is mid-gesture and they expect the running cycle to
        // keep playing until they let go.
        if (!dragRef.current) setInteraction('hover');
        armWaitingTimer();
    };
    const onPointerLeave = ()=>{
        setHovered(false);
        if (!dragRef.current) setInteraction('idle');
        armWaitingTimer();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pet-overlay",
        role: "complementary",
        "aria-label": t('pet.overlayAria'),
        style: {
            right: position.right,
            bottom: position.bottom,
            // The accent drives the halo, the bubble border, and the focus
            // ring on the action buttons via CSS custom property cascade.
            ['--pet-accent']: active.accent
        },
        children: [
            bubbleOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-bubble",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-bubble-name",
                        children: active.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this),
                    taskTotal > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-bubble-line",
                        children: visibleLine
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 444,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "pet-idle-quote",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                children: visibleLine
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                                lineNumber: 447,
                                columnNumber: 15
                            }, this),
                            visibleQuote?.author ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                children: visibleQuote.author
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                                lineNumber: 448,
                                columnNumber: 39
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 446,
                        columnNumber: 13
                    }, this),
                    taskTotal > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pet-task-list",
                        "aria-label": t('pet.taskListAria'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskGroup, {
                                title: t('pet.taskGroup.running'),
                                tasks: taskCenter.running,
                                onOpenProject: onOpenProject,
                                openTitle: (project)=>t('pet.taskOpenProject', {
                                        project
                                    })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                                lineNumber: 453,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskGroup, {
                                title: t('pet.taskGroup.queued'),
                                tasks: taskCenter.queued,
                                onOpenProject: onOpenProject,
                                openTitle: (project)=>t('pet.taskOpenProject', {
                                        project
                                    })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecentTaskGroup, {
                                title: t('pet.taskGroup.recent'),
                                tasks: visibleRecentTasks,
                                onOpenProject: onOpenProject,
                                openTitle: (project)=>t('pet.taskOpenProject', {
                                        project
                                    })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                                lineNumber: 465,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 452,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                lineNumber: 441,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-sprite",
                onPointerDown: onPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: onPointerUp,
                onPointerEnter: onPointerEnter,
                onPointerLeave: onPointerLeave,
                title: t('pet.spriteTitle', {
                    name: active.name
                }),
                "aria-label": t('pet.spriteAria', {
                    name: active.name
                }),
                "data-pet-state": interaction,
                "data-pet-ambient": ambientRowId ?? undefined,
                style: {
                    // For atlas-backed pets the row swap *is* the animation, so
                    // we let the sprite element sit still and animate frames
                    // inside it. Built-ins / single-strip uploads keep their
                    // gentle CSS-named bob via --pet-anim.
                    ['--pet-anim']: active.atlas ? 'none' : `pet-${active.animation}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$PetSpriteFace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PetSpriteFace"], {
                        active: active,
                        className: "pet-sprite-glyph",
                        rowId: ambientRowId ?? taskRowId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pet$2f$pets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preferredRowId"])(interaction)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    badgeTotal > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pet-sprite-status",
                        "aria-label": visibleLine,
                        children: badgeTotal
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 502,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pet-sprite-shadow",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, this);
}
_s(PetOverlay, "9g/9uumAehwTjF+AbiZIaOHy3uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c = PetOverlay;
function TaskItem({ children, clickable, onClick, title }) {
    if (clickable) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "pet-task-item",
            onClick: onClick,
            title: title,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
            lineNumber: 525,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pet-task-item pet-task-item--static",
        title: title,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
        lineNumber: 536,
        columnNumber: 5
    }, this);
}
_c1 = TaskItem;
function TaskGroup({ title, tasks, onOpenProject, openTitle }) {
    if (tasks.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pet-task-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-task-group-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            tasks.slice(0, 3).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskItem, {
                    clickable: Boolean(onOpenProject),
                    onClick: onOpenProject ? ()=>onOpenProject(task.projectId) : undefined,
                    title: openTitle(task.projectName),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-task-dot",
                            "data-pet-task-status": task.status,
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-task-name",
                            children: task.projectName
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this),
                        task.count > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-task-count",
                            children: task.count
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, task.projectId, true, {
                    fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                    lineNumber: 558,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
        lineNumber: 555,
        columnNumber: 5
    }, this);
}
_c2 = TaskGroup;
function RecentTaskGroup({ title, tasks, onOpenProject, openTitle }) {
    if (tasks.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pet-task-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pet-task-group-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            tasks.slice(0, 3).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskItem, {
                    clickable: Boolean(onOpenProject),
                    onClick: onOpenProject ? ()=>onOpenProject(task.projectId) : undefined,
                    title: openTitle(task.projectName),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-task-dot",
                            "data-pet-task-status": task.status,
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pet-task-name",
                            children: task.projectName
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this)
                    ]
                }, `${task.projectId}:${task.updatedAt}`, true, {
                    fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
                    lineNumber: 595,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/pet/PetOverlay.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
}
_c3 = RecentTaskGroup;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PetOverlay");
__turbopack_context__.k.register(_c1, "TaskItem");
__turbopack_context__.k.register(_c2, "TaskGroup");
__turbopack_context__.k.register(_c3, "RecentTaskGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/pet/taskCenter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPetTaskCenter",
    ()=>buildPetTaskCenter
]);
const TERMINAL_STATUSES = new Set([
    'succeeded',
    'failed',
    'canceled'
]);
function buildPetTaskCenter(projects, runs) {
    const projectsById = new Map(projects.map((project)=>[
            project.id,
            project
        ]));
    const running = new Map();
    const queued = new Map();
    const recentByProject = new Map();
    for (const run of runs){
        if (!run.projectId) continue;
        const project = projectsById.get(run.projectId);
        if (!project) continue;
        if (run.status === 'running') {
            addActiveSummary(running, run.projectId, project.name, 'running');
            continue;
        }
        if (run.status === 'queued') {
            addActiveSummary(queued, run.projectId, project.name, 'queued');
            continue;
        }
        if (TERMINAL_STATUSES.has(run.status)) {
            const prev = recentByProject.get(run.projectId);
            if (prev && prev.updatedAt >= run.updatedAt) continue;
            recentByProject.set(run.projectId, {
                projectId: run.projectId,
                projectName: project.name,
                status: run.status,
                updatedAt: run.updatedAt
            });
        }
    }
    return {
        running: sortActiveSummaries([
            ...running.values()
        ]),
        queued: sortActiveSummaries([
            ...queued.values()
        ]),
        recent: [
            ...recentByProject.values()
        ].filter((task)=>!running.has(task.projectId) && !queued.has(task.projectId)).sort((a, b)=>b.updatedAt - a.updatedAt).slice(0, 3)
    };
}
function addActiveSummary(summaries, projectId, projectName, status) {
    const prev = summaries.get(projectId);
    summaries.set(projectId, {
        projectId,
        projectName,
        status,
        count: (prev?.count ?? 0) + 1
    });
}
function sortActiveSummaries(summaries) {
    return summaries.sort((a, b)=>{
        if (b.count !== a.count) return b.count - a.count;
        return a.projectName.localeCompare(b.projectName);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_pet_0mnw.uf._.js.map