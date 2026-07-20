(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/apps/web/src/artifacts/markdown-context.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared Markdown-context helpers used by both the streaming artifact parser
 * and the post-stream `<artifact>` stripper. The single source of truth for
 * what counts as a fenced code block or an inline code span — kept in lock
 * step with apps/web/src/runtime/markdown.tsx so the parser/stripper view of
 * a buffer matches what the chat UI will actually render.
 *
 * Anything that "looks like" an artifact tag inside one of these regions is
 * literal Markdown and must not be treated as a real protocol tag.
 */ // Line-anchored fence delimiters, mirror runtime/markdown.tsx:44 (open) and
// runtime/markdown.tsx:49 (close). The renderer is asymmetric on purpose:
// an opening fence may carry an info string (e.g. ```html), a closing fence
// must be a bare triple-backtick line. Neither permits leading indentation —
// an indented "   ```" line is rendered as a paragraph, not a fence.
__turbopack_context__.s([
    "FENCE_CLOSE_RE",
    ()=>FENCE_CLOSE_RE,
    "FENCE_OPEN_RE",
    ()=>FENCE_OPEN_RE,
    "INLINE_CODE_RE",
    ()=>INLINE_CODE_RE,
    "computeSkipRanges",
    ()=>computeSkipRanges,
    "isRealArtifactOpenAt",
    ()=>isRealArtifactOpenAt,
    "rangeContains",
    ()=>rangeContains
]);
const FENCE_OPEN_RE = /^```(\w[\w+-]*)?\s*$/;
const FENCE_CLOSE_RE = /^```\s*$/;
const INLINE_CODE_RE = /`[^`]+`/g;
// Paragraph-break recognizers — these mirror the inner paragraph-accumulation
// loop in `parseBlocks()` (runtime/markdown.tsx:95-104), which is what
// actually decides where a paragraph ends. The outer loop in `parseBlocks`
// has additional block-starters (HR, fenced-code with `^```` prefix, etc.)
// but those only take effect when no paragraph is currently being built;
// mid-paragraph they are paragraph content. The renderer therefore treats
// `intro \`` / `---` / `<artifact …>` / `---` / `closing \`` as ONE paragraph
// whose backticks pair across the recitation — so this walker must too.
//
// Notable omission: HR — see comment above. HR-shaped lines (`---` / `***`
// / `___`) carry no backticks of their own, so leaving them inside the
// surrounding paragraph region is benign for inline-code scanning either way.
const HEADING_RE = /^#{1,4}\s+/;
const UL_ITEM_RE = /^\s*[-*+]\s+/;
const OL_ITEM_RE = /^\s*\d+\.\s+/;
function isRealArtifactOpenAt(content, idx) {
    const next = content.charAt(idx + '<artifact'.length);
    return next !== '' && /\s/.test(next);
}
function computeSkipRanges(buffer) {
    const ranges = [];
    // Paragraph-block regions are contiguous spans of paragraph lines outside
    // any fenced code block. `renderInline` runs once per block, so inline-code
    // scanning is restricted to one block at a time — backticks never pair
    // across a block boundary in the rendered output.
    const blockRegions = [];
    let pos = 0;
    let inFence = false;
    let fenceStart = -1;
    let blockStart = -1;
    const closeBlockBefore = (idx)=>{
        if (blockStart !== -1 && idx > blockStart) blockRegions.push([
            blockStart,
            idx
        ]);
        blockStart = -1;
    };
    while(pos < buffer.length){
        const eol = buffer.indexOf('\n', pos);
        const lineEnd = eol === -1 ? buffer.length : eol;
        const line = buffer.slice(pos, lineEnd);
        const lineHasNewline = eol !== -1;
        if (!inFence) {
            if (lineHasNewline && FENCE_OPEN_RE.test(line)) {
                closeBlockBefore(pos);
                inFence = true;
                fenceStart = pos;
            } else if (line.trim() === '') {
                // Blank lines separate blocks.
                closeBlockBefore(pos);
            } else if (HEADING_RE.test(line) || UL_ITEM_RE.test(line) || OL_ITEM_RE.test(line)) {
                // Heading and list-item lines are each their own block in the
                // renderer (`renderInline` runs per item / per heading), so they get
                // a one-line inline-scan region rather than joining adjacent
                // paragraphs. The marker chars themselves are not backticks, so we
                // can scan the whole line without stripping the marker first.
                closeBlockBefore(pos);
                blockRegions.push([
                    pos,
                    lineEnd
                ]);
            } else {
                if (blockStart === -1) blockStart = pos;
            }
        } else if (lineHasNewline && FENCE_CLOSE_RE.test(line)) {
            inFence = false;
            ranges.push([
                fenceStart,
                eol + 1
            ]);
            fenceStart = -1;
        }
        if (!lineHasNewline) {
            break;
        }
        pos = eol + 1;
    }
    // Flush any open paragraph region at end-of-buffer (no trailing newline).
    if (!inFence) closeBlockBefore(buffer.length);
    for (const [s, e] of blockRegions){
        INLINE_CODE_RE.lastIndex = 0;
        const segment = buffer.slice(s, e);
        let m = INLINE_CODE_RE.exec(segment);
        while(m !== null){
            ranges.push([
                s + m.index,
                s + m.index + m[0].length
            ]);
            m = INLINE_CODE_RE.exec(segment);
        }
    }
    return {
        ranges,
        unclosedFenceStart: inFence ? fenceStart : null
    };
}
function rangeContains(ranges, p) {
    for (const [s, e] of ranges){
        if (p >= s && p < e) return true;
    }
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/artifacts/validate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateHtmlArtifact",
    ()=>validateHtmlArtifact
]);
/**
 * Pre-write structural sniff for AI-emitted HTML artifacts.
 *
 * Defends the project-file persistence path (`persistArtifact` →
 * `writeProjectTextFile`) against the failure mode in #50 / #1143 where the
 * model emits an `<artifact type="text/html">…</artifact>` block whose body is
 * a prose summary instead of a complete document. Without this gate, such
 * content lands on disk as a real `.html` file with `kind: html` manifest and
 * pollutes the project file panel as a phantom artifact tab.
 *
 * Policy (intentionally narrow — false positives here block real saves):
 * - non-empty after trimming BOM and leading whitespace
 * - meets a minimum length threshold
 * - the *first* non-whitespace token is `<!doctype html>` or `<html`
 *   (anchored at the start; mid-string mentions of these tags do NOT count —
 *   AI prose like "Updated the <html lang> attribute…" must be rejected)
 * - URL-bearing attributes or CSS `url(...)` / `@import` values do not point at
 *   internal project storage paths such as `.live-artifacts/`, `.od/`, or `.tmp/`
 *
 * What this gate is NOT:
 * - It is **not** an HTML linter or validator. Malformed but recognizably
 *   document-shaped HTML passes; only content that obviously isn't a document
 *   fails. The guarantee is "blocks obvious prose-as-HTML", not "validates
 *   well-formed HTML."
 * - It does **not** cover `.jsx` / `.tsx` artifacts or any other type — the
 *   `persistArtifact` caller only invokes this for `ext === '.html'`. This is
 *   not a generalized artifact-validation framework.
 * - It does **not** apply to user-driven saves via `FileViewer` /
 *   `FileWorkspace`; those go through a different code path and may
 *   legitimately save partial drafts.
 *
 * Threshold note: 64 chars rejects minimal empty-body documents like
 * `<!doctype html><html><body></body></html>` (49 chars). That is intentional
 * — AI-emitted artifacts in this product are expected to be non-trivial
 * deliverables, not test fixtures, so the lower bound favors fewer phantom
 * files over preserving fixture-grade empties.
 */ const MIN_HTML_LENGTH = 64;
const STARTS_WITH_DOCUMENT_RE = /^(?:<!doctype\s+html\b|<html\b)/i;
const RESERVED_PROJECT_PATH_RE = /(?:^|\/|\.\/)(?:\.live-artifacts|\.od|\.tmp)(?=$|[/?#"'`\s>)])/i;
const URL_SCHEME_RE = /^[a-z][a-z0-9+.-]*:/i;
const URL_ATTRIBUTE_RE = /\b(href|src|srcset|poster|action|formaction|data|xlink:href)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+))/gi;
const STYLE_ATTRIBUTE_RE = /\bstyle\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+))/gi;
const HTML_TAG_RE = /<[a-z][^>]*>/gi;
const STYLE_BLOCK_RE = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
const CSS_URL_RE = /\burl\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)/gi;
const CSS_IMPORT_RE = /@import\s+(?:url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)|"([^"]*)"|'([^']*)')/gi;
function validateHtmlArtifact(content) {
    const trimmed = content.replace(/^﻿/, '').trim();
    if (trimmed.length === 0) {
        return {
            ok: false,
            reason: 'empty content'
        };
    }
    if (trimmed.length < MIN_HTML_LENGTH) {
        return {
            ok: false,
            reason: `content too short to be HTML (got ${trimmed.length} chars, need ≥${MIN_HTML_LENGTH})`
        };
    }
    if (!STARTS_WITH_DOCUMENT_RE.test(trimmed)) {
        return {
            ok: false,
            reason: 'content does not start with <!doctype html> or <html — looks like prose, not a complete HTML document'
        };
    }
    if (referencesReservedProjectPath(trimmed)) {
        return {
            ok: false,
            reason: 'content references an internal project storage path such as .live-artifacts, .od, or .tmp'
        };
    }
    return {
        ok: true
    };
}
function referencesReservedProjectPath(content) {
    return hasReservedProjectPathInTags(content) || hasReservedProjectPathInStyleBlocks(content);
}
function hasReservedProjectPathInTags(content) {
    HTML_TAG_RE.lastIndex = 0;
    let match;
    while((match = HTML_TAG_RE.exec(content)) !== null){
        const tag = match[0] ?? '';
        if (hasReservedProjectPathAttribute(tag) || hasReservedProjectPathInStyleAttributes(tag)) {
            return true;
        }
    }
    return false;
}
function hasReservedProjectPathAttribute(tag) {
    URL_ATTRIBUTE_RE.lastIndex = 0;
    let match;
    while((match = URL_ATTRIBUTE_RE.exec(tag)) !== null){
        const attributeName = match[1]?.toLowerCase();
        const candidate = match[2] ?? match[3] ?? match[4] ?? '';
        if (candidateReferencesReservedProjectPath(candidate, attributeName === 'srcset')) {
            return true;
        }
    }
    return false;
}
function hasReservedProjectPathInStyleAttributes(tag) {
    STYLE_ATTRIBUTE_RE.lastIndex = 0;
    let match;
    while((match = STYLE_ATTRIBUTE_RE.exec(tag)) !== null){
        const cssText = match[1] ?? match[2] ?? match[3] ?? '';
        if (cssTextReferencesReservedProjectPath(cssText)) {
            return true;
        }
    }
    return false;
}
function hasReservedProjectPathInStyleBlocks(content) {
    STYLE_BLOCK_RE.lastIndex = 0;
    let match;
    while((match = STYLE_BLOCK_RE.exec(content)) !== null){
        const cssText = match[1] ?? '';
        if (cssTextReferencesReservedProjectPath(cssText)) {
            return true;
        }
    }
    return false;
}
function cssTextReferencesReservedProjectPath(cssText) {
    for (const pattern of [
        CSS_URL_RE,
        CSS_IMPORT_RE
    ]){
        pattern.lastIndex = 0;
        let match;
        while((match = pattern.exec(cssText)) !== null){
            const candidate = match.slice(1).find((value)=>value !== undefined) ?? '';
            if (candidateReferencesReservedProjectPath(candidate, false)) {
                return true;
            }
        }
    }
    return false;
}
function candidateReferencesReservedProjectPath(candidate, splitCandidates) {
    const paths = splitCandidates ? srcsetCandidateUrls(candidate) : [
        firstUrlToken(candidate)
    ];
    return paths.some((path)=>{
        if (!isLocalPathLike(path)) {
            return false;
        }
        return RESERVED_PROJECT_PATH_RE.test(pathnameOnly(path));
    });
}
function pathnameOnly(path) {
    const separator = path.search(/[?#]/);
    if (separator === -1) {
        return path;
    }
    return path.slice(0, separator);
}
function srcsetCandidateUrls(srcset) {
    const candidates = [];
    let start = 0;
    let sawCandidate = false;
    let dataUrlCandidate = false;
    let sawWhitespaceAfterUrl = false;
    for(let index = 0; index < srcset.length; index += 1){
        const char = srcset[index];
        if (!sawCandidate) {
            if (char === ',' || /\s/.test(char)) {
                start = index + 1;
                continue;
            }
            sawCandidate = true;
            dataUrlCandidate = /^data:/i.test(srcset.slice(index));
        }
        if (/\s/.test(char)) {
            sawWhitespaceAfterUrl = true;
            continue;
        }
        if (char === ',' && (!dataUrlCandidate || sawWhitespaceAfterUrl)) {
            candidates.push(srcset.slice(start, index));
            start = index + 1;
            sawCandidate = false;
            dataUrlCandidate = false;
            sawWhitespaceAfterUrl = false;
        }
    }
    candidates.push(srcset.slice(start));
    return candidates.map(firstUrlToken).filter(Boolean);
}
function firstUrlToken(value) {
    return value.trim().split(/\s+/)[0] ?? '';
}
function isLocalPathLike(path) {
    return path.length > 0 && !path.startsWith('#') && !path.startsWith('//') && !URL_SCHEME_RE.test(path);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/artifacts/recover.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recoverHtmlArtifactFromPrecedingDocument",
    ()=>recoverHtmlArtifactFromPrecedingDocument,
    "recoverHtmlDocumentFromMarkdownFence",
    ()=>recoverHtmlDocumentFromMarkdownFence,
    "recoverStandaloneHtmlDocument",
    ()=>recoverStandaloneHtmlDocument,
    "resolvePersistedArtifactHtml",
    ()=>resolvePersistedArtifactHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/validate.ts [app-client] (ecmascript)");
;
const HTML_OPEN_RE = /<html\b/gi;
const HTML_CLOSE_RE = /<\/html\s*>/gi;
const ADJACENT_DOCTYPE_RE = /<!doctype\s+html\b[^>]*>\s*$/i;
const HTML_FENCE_RE = /```(?:html|HTML)\s*\n([\s\S]*?)\n```/g;
function findLastArtifactOpen(sourceText, identifier) {
    if (!identifier) return sourceText.lastIndexOf('<artifact');
    const escapedIdentifier = identifier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const taggedOpenRe = new RegExp(`<artifact\\b(?=[^>]*\\bidentifier\\s*=\\s*(?:"${escapedIdentifier}"|'${escapedIdentifier}'))[^>]*>`, 'gi');
    let last = -1;
    let match;
    while((match = taggedOpenRe.exec(sourceText)) !== null){
        last = match.index;
    }
    return last !== -1 ? last : sourceText.lastIndexOf('<artifact');
}
function lastIndexOfRegex(re, text) {
    re.lastIndex = 0;
    let last = -1;
    let match;
    while((match = re.exec(text)) !== null){
        last = match.index;
    }
    return last;
}
function recoverHtmlArtifactFromPrecedingDocument({ artifactHtml, identifier, sourceText }) {
    if (!sourceText) return null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHtmlArtifact"])(artifactHtml).ok) return null;
    const artifactOpen = findLastArtifactOpen(sourceText, identifier);
    if (artifactOpen === -1) return null;
    const beforeArtifact = sourceText.slice(0, artifactOpen);
    if (!/<\/html\s*>\s*$/i.test(beforeArtifact)) return null;
    const htmlOpenStart = lastIndexOfRegex(HTML_OPEN_RE, beforeArtifact);
    const htmlClose = lastIndexOfRegex(HTML_CLOSE_RE, beforeArtifact);
    if (htmlOpenStart === -1 || htmlClose === -1 || htmlClose < htmlOpenStart) return null;
    const closeMatch = beforeArtifact.slice(htmlClose).match(/^<\/html\s*>/i);
    if (!closeMatch) return null;
    const beforeHtmlOpen = beforeArtifact.slice(0, htmlOpenStart);
    const adjacentDoctype = beforeHtmlOpen.match(ADJACENT_DOCTYPE_RE);
    const htmlStart = adjacentDoctype ? htmlOpenStart - adjacentDoctype[0].length : htmlOpenStart;
    const candidate = beforeArtifact.slice(htmlStart, htmlClose + closeMatch[0].length).trim();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHtmlArtifact"])(candidate).ok ? candidate : null;
}
function resolvePersistedArtifactHtml(input) {
    return recoverHtmlArtifactFromPrecedingDocument(input) ?? input.artifactHtml;
}
function recoverStandaloneHtmlDocument(sourceText) {
    const candidate = String(sourceText || '').replace(/^﻿/, '').trim();
    if (!/<\/html\s*>$/i.test(candidate)) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHtmlArtifact"])(candidate).ok ? candidate : null;
}
function recoverHtmlDocumentFromMarkdownFence(sourceText) {
    const text = String(sourceText || '');
    HTML_FENCE_RE.lastIndex = 0;
    let recovered = null;
    let count = 0;
    let match;
    while((match = HTML_FENCE_RE.exec(text)) !== null){
        const candidate = (match[1] || '').replace(/^﻿/, '').trim();
        if (!/<\/html\s*>$/i.test(candidate)) continue;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateHtmlArtifact"])(candidate).ok) continue;
        recovered = candidate;
        count += 1;
    }
    return count === 1 ? recovered : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/artifacts/strip.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchPersistedArtifactFile",
    ()=>matchPersistedArtifactFile,
    "splitStreamingArtifact",
    ()=>splitStreamingArtifact,
    "stripArtifact",
    ()=>stripArtifact,
    "stripRecoveredHtmlFallbackForDisplay",
    ()=>stripRecoveredHtmlFallbackForDisplay,
    "summarizeArtifactsForTranscript",
    ()=>summarizeArtifactsForTranscript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/markdown-context.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/artifacts/recover.ts [app-client] (ecmascript)");
;
;
const OPEN = '<artifact';
const CLOSE = '</artifact>';
const HTML_FENCE_RE = /```(?:html|HTML)\s*\n([\s\S]*?)\n```/g;
function findUnskipped(content, needle, fromIndex, ranges) {
    let from = fromIndex;
    while(from <= content.length){
        const idx = content.indexOf(needle, from);
        if (idx === -1) return -1;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeContains"])(ranges, idx)) return idx;
        from = idx + needle.length;
    }
    return -1;
}
// Like `findUnskipped(OPEN, …)` but also rejects prefix-shared literals like
// `<artifactual` — only `<artifact` followed by whitespace counts as a real
// protocol open. Matches the parser's `findOpenTag` real-open guard so the
// two paths agree on what the renderer will treat as a tag.
function findRealOpen(content, fromIndex, ranges) {
    let from = fromIndex;
    while(from <= content.length){
        const idx = content.indexOf(OPEN, from);
        if (idx === -1) return -1;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeContains"])(ranges, idx) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealArtifactOpenAt"])(content, idx)) {
            from = idx + OPEN.length;
            continue;
        }
        return idx;
    }
    return -1;
}
function stripArtifact(content) {
    const { ranges: baseRanges, unclosedFenceStart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSkipRanges"])(content);
    // For complete (non-streaming) content, an unclosed fence is rendered by
    // the chat Markdown renderer as a code block extending to end of input
    // (see runtime/markdown.tsx:49 — the close-loop runs until lines exhaust).
    // The stripper has to mirror that, otherwise a literal `<artifact …>`
    // tucked into a code example at the bottom of a chat reply (no trailing
    // newline) gets treated as a real protocol tag and eaten.
    const ranges = unclosedFenceStart !== null ? [
        ...baseRanges,
        [
            unclosedFenceStart,
            content.length
        ]
    ] : baseRanges;
    const open = findRealOpen(content, 0, ranges);
    if (open === -1) return content;
    const closeTag = content.indexOf('>', open);
    if (closeTag === -1) return content;
    const end = findUnskipped(content, CLOSE, closeTag, ranges);
    if (end === -1) return content;
    return (content.slice(0, open) + content.slice(end + CLOSE.length)).trim();
}
function findSingleRecoverableHtmlFence(content) {
    HTML_FENCE_RE.lastIndex = 0;
    let recovered = null;
    let count = 0;
    let match = HTML_FENCE_RE.exec(content);
    while(match !== null){
        const html = (match[1] || '').replace(/^﻿/, '').trim();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverHtmlDocumentFromMarkdownFence"])(match[0]) === html) {
            recovered = {
                start: match.index,
                end: match.index + match[0].length,
                html
            };
            count += 1;
        }
        match = HTML_FENCE_RE.exec(content);
    }
    return count === 1 ? recovered : null;
}
function findRecoverablePrecedingHtmlArtifact(sourceText) {
    const { ranges: baseRanges, unclosedFenceStart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSkipRanges"])(sourceText);
    const ranges = unclosedFenceStart !== null ? [
        ...baseRanges,
        [
            unclosedFenceStart,
            sourceText.length
        ]
    ] : baseRanges;
    let from = 0;
    while(from <= sourceText.length){
        const open = findRealOpen(sourceText, from, ranges);
        if (open === -1) return null;
        const closeTag = sourceText.indexOf('>', open);
        if (closeTag === -1) return null;
        const end = findUnskipped(sourceText, CLOSE, closeTag, ranges);
        if (end === -1) return null;
        const attrs = parseArtifactAttrs(sourceText.slice(open, closeTag));
        const recovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverHtmlArtifactFromPrecedingDocument"])({
            artifactHtml: sourceText.slice(closeTag + 1, end),
            identifier: attrs['identifier'],
            sourceText
        });
        if (recovered) return recovered;
        from = end + CLOSE.length;
    }
    return null;
}
function stripRecoverablePrecedingHtml(content, sourceText) {
    const recovered = findRecoverablePrecedingHtmlArtifact(sourceText);
    if (!recovered) return null;
    const start = content.lastIndexOf(recovered);
    if (start === -1) return null;
    return `${content.slice(0, start)}${content.slice(start + recovered.length)}`.trim();
}
function stripRecoveredHtmlFallbackForDisplay(content, sourceText = content) {
    const withoutPrecedingDocument = stripRecoverablePrecedingHtml(content, sourceText);
    if (withoutPrecedingDocument !== null) return withoutPrecedingDocument;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$recover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverStandaloneHtmlDocument"])(content)) return '';
    const fence = findSingleRecoverableHtmlFence(content);
    if (!fence) return content;
    return `${content.slice(0, fence.start)}${content.slice(fence.end)}`.trim();
}
function parseArtifactAttrs(raw) {
    const re = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
    const out = {};
    let m = re.exec(raw);
    while(m !== null){
        out[m[1]] = m[2] ?? m[3] ?? '';
        m = re.exec(raw);
    }
    return out;
}
// Mirrors ProjectView's artifactExtensionFor: the on-disk extension the
// persist path picks from the artifact's type/identifier.
function artifactExtensionForAttrs(attrs) {
    const type = (attrs['type'] || '').toLowerCase();
    const identifier = (attrs['identifier'] || '').toLowerCase();
    if (type.includes('tsx') || identifier.endsWith('.tsx')) return '.tsx';
    if (type.includes('jsx') || type.includes('react') || identifier.endsWith('.jsx')) return '.jsx';
    return '.html';
}
// Mirrors ProjectView's artifactBaseNameFor: the slug the persist path derives
// the file name from.
function artifactBaseNameForAttrs(attrs) {
    return (attrs['identifier'] || attrs['title'] || 'artifact').toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'artifact';
}
function matchPersistedArtifactFile(attrs, persistedFiles) {
    const identifier = attrs['identifier'] ?? '';
    if (identifier) {
        const byManifest = persistedFiles.find((f)=>f.identifier === identifier);
        if (byManifest) return byManifest;
    }
    const ext = artifactExtensionForAttrs(attrs);
    const base = artifactBaseNameForAttrs(attrs);
    const namePattern = new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:-\\d+)?${ext.replace('.', '\\.')}$`);
    return persistedFiles.find((f)=>namePattern.test(f.name)) ?? null;
}
function summarizeArtifactsForTranscript(content, persistedFiles) {
    if (persistedFiles.length === 0) return content;
    let result = '';
    let cursor = 0;
    // Recompute skip ranges per iteration against the remaining tail so indices
    // stay valid as we consume the string left to right.
    while(cursor <= content.length){
        const tail = content.slice(cursor);
        const { ranges: baseRanges, unclosedFenceStart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSkipRanges"])(tail);
        const ranges = unclosedFenceStart !== null ? [
            ...baseRanges,
            [
                unclosedFenceStart,
                tail.length
            ]
        ] : baseRanges;
        const open = findRealOpen(tail, 0, ranges);
        if (open === -1) {
            result += tail;
            break;
        }
        const gt = tail.indexOf('>', open);
        if (gt === -1) {
            result += tail;
            break;
        }
        const end = findUnskipped(tail, CLOSE, gt, ranges);
        if (end === -1) {
            // Real open but no real close — refuse to summarize (safer than eating
            // to end-of-string on a malformed/streaming tag). Keep the rest as-is.
            result += tail;
            break;
        }
        const attrs = parseArtifactAttrs(tail.slice(open, gt));
        const persisted = matchPersistedArtifactFile(attrs, persistedFiles);
        result += persisted ? tail.slice(0, open) + artifactTranscriptSummary(attrs, persisted) : tail.slice(0, end + CLOSE.length);
        cursor += end + CLOSE.length;
    }
    return result;
}
function artifactTranscriptSummary(attrs, persisted) {
    const id = attrs['identifier'] ?? '';
    const title = attrs['title'] ?? '';
    const type = attrs['type'] ?? 'text/html';
    const meta = [
        id ? `identifier="${id}"` : '',
        title ? `title="${title}"` : '',
        `type="${type}"`
    ].filter(Boolean).join(', ');
    return `[artifact emitted on a prior turn — ${meta}. Its full content was saved to the project file "${persisted.name}" and is NOT repeated here. Read or modify that file on disk (list/grep the project directory if it was since renamed); do not rely on this transcript for its contents.]`;
}
function splitStreamingArtifact(content) {
    const { ranges: baseRanges, unclosedFenceStart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$artifacts$2f$markdown$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeSkipRanges"])(content);
    const ranges = unclosedFenceStart !== null ? [
        ...baseRanges,
        [
            unclosedFenceStart,
            content.length
        ]
    ] : baseRanges;
    const open = findRealOpen(content, 0, ranges);
    if (open === -1) return {
        head: content,
        live: null
    };
    const gt = content.indexOf('>', open);
    if (gt === -1) {
        // The open tag's attributes are still streaming — we can't read the type
        // or title yet, but we already know an artifact is starting, so show the
        // box (empty body) and hide the partial `<artifact …` tail from Markdown.
        return {
            head: content.slice(0, open).replace(/\s+$/, ''),
            live: {
                artifactType: '',
                title: '',
                identifier: '',
                content: ''
            }
        };
    }
    // A matching close means the block is complete; defer to stripArtifact.
    if (findUnskipped(content, CLOSE, gt, ranges) !== -1) return {
        head: content,
        live: null
    };
    const attrs = parseArtifactAttrs(content.slice(open, gt));
    const artifactType = attrs['type'] ?? '';
    // Only HTML/text artifacts read as code. An unknown type (attrs not fully
    // parsed, or omitted) is treated as code-eligible since the dominant case is
    // text/html; media/binary types fall through and render as raw text.
    if (artifactType && !/html|text\//i.test(artifactType)) return {
        head: content,
        live: null
    };
    return {
        head: content.slice(0, open).replace(/\s+$/, ''),
        live: {
            artifactType,
            title: attrs['title'] ?? '',
            identifier: attrs['identifier'] ?? '',
            content: content.slice(gt + 1)
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/observability/stuck-run.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__resetStuckRunWatchdog",
    ()=>__resetStuckRunWatchdog,
    "trackRunProgress",
    ()=>trackRunProgress,
    "trackRunStart",
    ()=>trackRunStart,
    "trackRunTerminal",
    ()=>trackRunTerminal
]);
// Stuck-run watchdog.
//
// Emits `client_run_stuck` when a run that we've seen `run_created` for
// has not progressed within `STUCK_AFTER_MS` (no SSE events, no terminal
// state, no cancellation). This is the web-side proxy for SSE health —
// we don't yet instrument the full stream lifecycle (start / heartbeat /
// disconnect) but the user-visible symptom is invariably "I started a run
// and nothing's happening", so a coarse stuck-after-timeout watchdog
// catches the most common bad outcome.
//
// The watchdog is fired-and-forgotten: callers tell us a run started,
// poke us every time they see progress, and tell us when it terminates.
// Anything else and we emit the stuck event exactly once per run.
//
// Tied directly to issues #2464 / #2405 / #1451 — all reported as "run
// stuck in working state forever". After this lands those reports become
// data instead of GitHub anecdotes.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/analytics/error-tracking.ts [app-client] (ecmascript) <locals>");
;
const STUCK_AFTER_MS = 5 * 60 * 1000; // 5 minutes with no progress
const runs = new Map();
function trackRunStart(runId, context = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Replace any prior entry — a fresh start invalidates the previous
    // watchdog (rare but possible during reconnect storms).
    cancelRun(runId);
    const now = Date.now();
    const entry = {
        runId,
        startedAt: now,
        lastProgressAt: now,
        timer: scheduleEmit(runId),
        emitted: false,
        context
    };
    runs.set(runId, entry);
}
function trackRunProgress(runId) {
    const entry = runs.get(runId);
    if (!entry) return;
    if (entry.emitted) return;
    entry.lastProgressAt = Date.now();
    clearTimeout(entry.timer);
    entry.timer = scheduleEmit(runId);
}
function trackRunTerminal(runId, terminalState) {
    const entry = runs.get(runId);
    if (!entry) return;
    clearTimeout(entry.timer);
    runs.delete(runId);
    // Don't double-emit if we already declared it stuck — the late
    // terminal arrival is still useful to know about, though, so emit a
    // recovery event so the dashboard can pair the two.
    if (entry.emitted) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_run_unstuck', {
            run_id: runId,
            terminal_state: terminalState,
            total_duration_ms: Date.now() - entry.startedAt,
            ...entry.context
        });
    }
}
function cancelRun(runId) {
    const existing = runs.get(runId);
    if (!existing) return;
    clearTimeout(existing.timer);
    runs.delete(runId);
}
function scheduleEmit(runId) {
    return setTimeout(()=>emitStuck(runId), STUCK_AFTER_MS);
}
function emitStuck(runId) {
    const entry = runs.get(runId);
    if (!entry) return;
    if (entry.emitted) return;
    entry.emitted = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$analytics$2f$error$2d$tracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reportSafetyEvent"])('client_run_stuck', {
        run_id: runId,
        duration_since_last_progress_ms: Date.now() - entry.lastProgressAt,
        duration_since_start_ms: Date.now() - entry.startedAt,
        ...entry.context
    });
}
function __resetStuckRunWatchdog() {
    for (const entry of runs.values()){
        clearTimeout(entry.timer);
    }
    runs.clear();
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
]);

//# sourceMappingURL=apps_web_src_0kd_8pa._.js.map