(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/runtime/srcdoc.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLazySrcdocTransport",
    ()=>buildLazySrcdocTransport,
    "buildSrcdoc",
    ()=>buildSrcdoc,
    "canActivateSrcDocTransport",
    ()=>canActivateSrcDocTransport,
    "sanitizePreviewTitle",
    ()=>sanitizePreviewTitle,
    "sanitizeTitleInDoc",
    ()=>sanitizeTitleInDoc
]);
/**
 * Wrap an artifact's HTML for a sandboxed iframe. Corresponds to
 * buildSrcdoc in packages/runtime/src/index.ts — the reference version also
 * injects an edit-mode overlay and tweak bridge, which this starter omits.
 *
 * If the model returned a full document, pass it through unchanged; otherwise
 * wrap the fragment in a minimal doctype shell.
 *
 * When `options.deck` is set we also inject a `postMessage` listener that
 * lets the host advance / rewind slides without relying on the iframe
 * having keyboard focus. The host posts:
 *   { type: 'od:slide', action: 'next' | 'prev' | 'first' | 'last' | 'go', index?: number }
 * and the iframe responds with:
 *   { type: 'od:slide-state', active: number, count: number }
 * after every navigation so the host can render its own counter / dots.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/edit-mode/bridge.ts [app-client] (ecmascript)");
;
function sanitizePreviewTitle(text) {
    // Trim first so that leading whitespace cannot hide a ~$ prefix from the
    // anchor-based check below (e.g. "  ~$Invoice" would otherwise survive).
    let result = text.trim();
    // Remove every leading ~$ prefix. A single replace(/^~\$/, '') is not
    // enough when the prefix is doubled ("~$~$Doc"). Loop until stable, then
    // re-trim in case a space followed the prefix ("~$ Invoice" → " Invoice").
    let prev;
    do {
        prev = result;
        result = result.replace(/^~\$/, '').trim();
    }while (result !== prev)
    // Replace each disallowed character (or run of them) with a single hyphen.
    // Character class: : # % & * { } \ < > ? / + | "
    // eslint-disable-next-line no-useless-escape
    result = result.replace(/[:#%&*{}\\<>?/+|"]+/g, '-');
    // Final trim to remove any spaces exposed by the substitution.
    return result.trim();
}
/**
 * A small set of common named non-ASCII entities that appear in real-world
 * titles (e.g. &ccedil; → ç, &eacute; → é). Keeping this narrow avoids
 * shipping a full HTML entity table while still preventing the "orphaned
 * name;" garbage that results when & is stripped before entity detection.
 * Characters produced here that are Teams-disallowed get cleaned up by the
 * subsequent sanitizePreviewTitle pass.
 */ const NAMED_ENTITY_MAP = {
    // Latin-1 letters most likely to appear in design/business titles
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    // Common punctuation / symbols that can appear in business document titles
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    hellip: '…',
    trade: '™',
    reg: '®',
    copy: '©',
    deg: '°',
    euro: '€',
    pound: '£',
    yen: '¥'
};
/**
 * Safe wrapper around String.fromCodePoint that returns U+FFFD for
 * out-of-range values instead of throwing RangeError.
 */ function safeFromCodePoint(cp) {
    if (cp < 0 || cp > 0x10ffff) return '�';
    return String.fromCodePoint(cp);
}
/**
 * Decode the minimal HTML entities that browsers render in <title> text:
 * &amp; → & , &lt; → < , &gt; → > , &quot; → " , &apos; → ' , &#N; / &#xN;
 * Also decodes a small set of common named non-ASCII entities (e.g. &ccedil;)
 * so they do not leave orphaned "name;" fragments after the & is sanitized.
 * Numeric entities with out-of-range code points fall back to U+FFFD instead
 * of throwing RangeError.
 */ function decodeHtmlEntitiesForTitle(encoded) {
    return encoded// Named non-ASCII entities first — before the standard 5 named entities
    // below, so &amp; still converts to & (not left as a lookup miss).
    .replace(/&([A-Za-z]+);/g, (match, name)=>NAMED_ENTITY_MAP[name] ?? match)// Standard 5 named entities.
    .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&apos;/gi, "'")// Numeric entities — range-checked to avoid RangeError on huge code points.
    .replace(/&#(\d+);/g, (_, n)=>safeFromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, h)=>safeFromCodePoint(parseInt(h, 16)));
}
/**
 * Find the character offset of the first real `<title>` tag in an HTML string
 * that is not inside an HTML comment (`<!-- … -->`), a `<script>` block, or a
 * `<style>` block. Returns -1 when no real title is found.
 *
 * The scan is O(n) over the head region. It keeps track of whether the current
 * cursor is inside a comment / script / style and skips any `<title>` found
 * within those contexts.
 */ function findRealTitleOffset(html, searchLimit) {
    let i = 0;
    const limit = Math.min(html.length, searchLimit);
    while(i < limit){
        // Check for HTML comment start
        if (html.charCodeAt(i) === 60 /* < */  && html.slice(i, i + 4) === '<!--') {
            const end = html.indexOf('-->', i + 4);
            if (end < 0) return -1; // unclosed comment — no title after this
            i = end + 3;
            continue;
        }
        // Check for <script or <style (case-insensitive)
        if (html.charCodeAt(i) === 60 /* < */ ) {
            const tagMatch = /^<(script|style)\b/i.exec(html.slice(i, i + 20));
            if (tagMatch) {
                const closingTag = `</${tagMatch[1]}`;
                const end = html.toLowerCase().indexOf(closingTag.toLowerCase(), i + tagMatch[0].length);
                if (end < 0) return -1; // unclosed script/style — no title after this
                const closeEnd = html.indexOf('>', end);
                i = closeEnd >= 0 ? closeEnd + 1 : end + closingTag.length;
                continue;
            }
        }
        // Check for <title (case-insensitive)
        if (html.charCodeAt(i) === 60 /* < */ ) {
            if (/^<title[\s>]/i.test(html.slice(i, i + 8))) {
                return i;
            }
        }
        i++;
    }
    return -1;
}
function sanitizeTitleInDoc(html) {
    const lower = html.toLowerCase();
    // Find the end of the <head> region. Use the last </head> before <body>
    // (mirrors injectBeforeHeadEnd logic) so we don't pick up </head> literals
    // inside <script>/<style>.
    const bodyStart = lower.indexOf('<body');
    const headEnd = lower.lastIndexOf('</head>', bodyStart >= 0 ? bodyStart - 1 : lower.length - 1);
    // The region to search: up to (and including) </head> if found, otherwise
    // up to <body> if found, otherwise the entire document.
    const searchLimit = headEnd >= 0 ? headEnd + 7 // include the </head> tag itself
     : bodyStart >= 0 ? bodyStart : html.length;
    // Find the real <title> start offset, skipping comments and script/style.
    const titleStart = findRealTitleOffset(html, searchLimit);
    if (titleStart < 0) return html;
    // Locate the end of the <title> open tag.
    const openTagEnd = html.indexOf('>', titleStart);
    if (openTagEnd < 0) return html;
    // Locate the matching </title>.
    const closingTagStart = html.toLowerCase().indexOf('</title>', openTagEnd + 1);
    if (closingTagStart < 0) return html;
    const closingTagEnd = html.indexOf('>', closingTagStart);
    if (closingTagEnd < 0) return html;
    const openTag = html.slice(titleStart, openTagEnd + 1);
    const rawContent = html.slice(openTagEnd + 1, closingTagStart);
    const closeTag = html.slice(closingTagStart, closingTagEnd + 1);
    const decoded = decodeHtmlEntitiesForTitle(rawContent);
    const safe = sanitizePreviewTitle(decoded);
    return html.slice(0, titleStart) + openTag + safe + closeTag + html.slice(closingTagEnd + 1);
}
function buildSrcdoc(html, options = {}) {
    const head = html.trimStart().slice(0, 64).toLowerCase();
    const isFullDoc = head.startsWith("<!doctype") || head.startsWith("<html");
    const wrapped = isFullDoc ? html : `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>${html}</body>
</html>`;
    // Sanitize <title> text before any other transformation so that when the
    // user prints the preview iframe (Cmd+P → Save as PDF), Chromium uses the
    // sanitized title as the default filename — one that Microsoft Teams will
    // accept. Only the title text changes; visible page content is untouched.
    const withSafeTitle = sanitizeTitleInDoc(wrapped);
    const withOdIds = annotateMissingOdIds(withSafeTitle);
    const withSourcePaths = options.editBridge ? annotateManualEditSourcePaths(withOdIds) : withOdIds;
    const withBase = options.baseHref ? injectBaseHref(withSourcePaths, options.baseHref) : withSourcePaths;
    const withShim = injectSandboxShim(withBase);
    const withFocusGuard = options.previewFocusGuard ? injectPreviewFocusGuard(withShim) : withShim;
    const withDeck = options.deck ? injectDeckBridge(withFocusGuard, options.initialSlideIndex) : withFocusGuard;
    // Comment + Inspect share an element-selection bridge: both pick a
    // [data-od-id] / [data-screen-label] node and route the host's reply
    // to either the comment popover (annotate) or the inspect panel
    // (live-style overrides). Inject once when either mode is on. Pass the
    // requested modes through so the bridge boots with picking already
    // active — without that initial seed there is a window after each
    // srcdoc rebuild where the host's `od:*-mode` postMessage races the
    // bridge's own listener install and the iframe ignores clicks.
    const withSelection = options.selectionBridge || options.commentBridge || options.inspectBridge ? injectSelectionBridge(withDeck, {
        initialCommentMode: !!options.commentBridge,
        initialInspectMode: !!options.inspectBridge
    }) : withDeck;
    const withPalette = options.paletteBridge ? injectPaletteBridge(withSelection, {
        initialPalette: options.initialPalette ?? null
    }) : withSelection;
    const withEdit = options.editBridge ? injectManualEditBridge(withPalette) : withPalette;
    // The tweaks bridge is always injected — it's a passive listener that
    // toggles a `.tw-panel`'s visibility in response to host postMessage. Tying
    // it to a per-call option would force iframe srcdoc regeneration (and a
    // visible flash) every time the host toggle flips.
    const withTweaks = injectTweaksBridge(withEdit);
    return injectSrcdocTransportActivationBridge(injectSnapshotBridge(withTweaks));
}
function buildLazySrcdocTransport() {
    return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script data-od-lazy-srcdoc-transport>(function(){
      window.addEventListener('message', function(ev){
        var data = ev && ev.data;
        if (!data || data.type !== 'od:srcdoc-transport-activate' || typeof data.html !== 'string') return;
        document.open();
        document.write(data.html);
        document.close();
      });
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'od:srcdoc-transport-ready' }, '*');
        }
      } catch (_) { /* sandboxed parent — host falls back to onLoad */ }
    })();</script>
  </head>
  <body></body>
</html>`;
}
function canActivateSrcDocTransport(state) {
    if (!state.srcDoc) return false;
    if (state.useUrlLoadPreview) return false;
    if (!state.useLazySrcDocTransport) return false;
    if (!state.shellReady) return false;
    if (state.activatedHtml === state.srcDoc) return false;
    return true;
}
function injectSrcdocTransportActivationBridge(doc) {
    const script = `<script data-od-srcdoc-transport-activation>(function(){
  window.addEventListener('message', function(ev){
    var data = ev && ev.data;
    if (!data || data.type !== 'od:srcdoc-transport-activate' || typeof data.html !== 'string') return;
    document.open();
    document.write(data.html);
    document.close();
  });
})();</script>`;
    return injectBeforeBodyEnd(doc, script);
}
function injectSnapshotBridge(doc) {
    const script = `<script data-od-snapshot-bridge>(function(){
  var SNAPSHOT_STYLE_PROPS = [
    'display','position','box-sizing','width','height','min-width','max-width','min-height','max-height',
    'margin','margin-top','margin-right','margin-bottom','margin-left',
    'padding','padding-top','padding-right','padding-bottom','padding-left',
    'border','border-top','border-right','border-bottom','border-left','border-radius',
    'font','font-family','font-size','font-weight','font-style','line-height','letter-spacing',
    'color','background-color','opacity','transform','transform-origin','overflow','overflow-x','overflow-y',
    'white-space','text-align','vertical-align','object-fit','object-position',
    'flex','flex-direction','flex-wrap','flex-grow','flex-shrink','flex-basis',
    'grid','grid-template-columns','grid-template-rows','grid-column','grid-row',
    'gap','row-gap','column-gap','align-items','align-content','align-self',
    'justify-items','justify-content','justify-self','inset','top','right','bottom','left',
    'z-index','box-shadow','text-shadow'
  ];
  function copyComputedStyle(source, target){
    if (!source || !target || source.nodeType !== 1 || target.nodeType !== 1) return;
    var computed = window.getComputedStyle(source);
    var style = target.getAttribute('style') || '';
    for (var i = 0; i < SNAPSHOT_STYLE_PROPS.length; i++){
      var prop = SNAPSHOT_STYLE_PROPS[i];
      var value = computed.getPropertyValue(prop);
      if (value) style += prop + ':' + value + ';';
    }
    target.setAttribute('style', style);
  }
  function syncElementState(source, target){
    var tag = source.tagName ? source.tagName.toLowerCase() : '';
    if (tag === 'img' && source.currentSrc) target.setAttribute('src', source.currentSrc);
    if (tag === 'input' || tag === 'textarea') target.setAttribute('value', source.value || '');
    if (tag === 'canvas') {
      try {
        var img = document.createElement('img');
        img.setAttribute('src', source.toDataURL('image/png'));
        img.setAttribute('style', target.getAttribute('style') || '');
        target.parentNode && target.parentNode.replaceChild(img, target);
      } catch (_) {}
    }
  }
  function inlineSnapshotStyles(originalRoot, cloneRoot){
    copyComputedStyle(originalRoot, cloneRoot);
    syncElementState(originalRoot, cloneRoot);
    var originals = originalRoot.querySelectorAll('*');
    var clones = cloneRoot.querySelectorAll('*');
    var count = Math.min(originals.length, clones.length, 3500);
    for (var i = 0; i < count; i++){
      copyComputedStyle(originals[i], clones[i]);
      syncElementState(originals[i], clones[i]);
    }
    var scripts = cloneRoot.querySelectorAll('script');
    for (var s = scripts.length - 1; s >= 0; s--) scripts[s].remove();
    var links = cloneRoot.querySelectorAll('link[rel~="stylesheet"], link[rel~="preload"], link[rel~="preconnect"]');
    for (var l = links.length - 1; l >= 0; l--) links[l].remove();
    var styles = cloneRoot.querySelectorAll('style');
    for (var st = 0; st < styles.length; st++) {
      styles[st].textContent = (styles[st].textContent || '')
        .replace(/@import[^;]+;/gi, '')
        .replace(/@font-face\\s*\\{[^}]*\\}/gi, '');
    }
  }
  function pruneHiddenSnapshotNodes(originalRoot, cloneRoot){
    var originals = originalRoot.querySelectorAll('*');
    var clones = cloneRoot.querySelectorAll('*');
    var count = Math.min(originals.length, clones.length);
    var removals = [];
    for (var i = 0; i < count; i++){
      var original = originals[i];
      var clone = clones[i];
      if (!original || !clone || !clone.parentNode) continue;
      var computed = window.getComputedStyle(original);
      if (computed && (computed.display === 'none' || computed.visibility === 'hidden')) {
        removals.push(clone);
      }
    }
    for (var r = removals.length - 1; r >= 0; r--){
      if (removals[r].parentNode) removals[r].parentNode.removeChild(removals[r]);
    }
  }
  function waitForImages(){
    var imgs = Array.prototype.slice.call(document.images || []);
    return Promise.all(imgs.map(function(img){
      if (img.complete) return Promise.resolve();
      return new Promise(function(resolve){
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      });
    }));
  }
  function scrollOffset(){
    var doc = document.documentElement;
    var body = document.body;
    return {
      x: Math.max(window.scrollX || 0, doc ? doc.scrollLeft || 0 : 0, body ? body.scrollLeft || 0 : 0),
      y: Math.max(window.scrollY || 0, doc ? doc.scrollTop || 0 : 0, body ? body.scrollTop || 0 : 0)
    };
  }
  function escapeAttribute(value){
    return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }
  function snapshotBackgroundColor(){
    try {
      var probe = window.getComputedStyle(document.body || document.documentElement);
      var bg = probe && probe.backgroundColor || '';
      if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') return '#ffffff';
      return bg;
    } catch (_) { return '#ffffff'; }
  }
  // After painting, sample the canvas: a uniform (single-color) bitmap means
  // the foreignObject rasterizer painted nothing — Chromium frequently refuses
  // to paint <foreignObject> HTML loaded via <img>. Treating that as an honest
  // 'empty-render' error (instead of shipping the background-only frame) lets
  // the host fall back / surface a real failure rather than a silent black PNG.
  function canvasLooksBlank(ctx, cw, ch){
    try {
      var data = ctx.getImageData(0, 0, cw, ch).data;
      var step = Math.max(4, Math.floor((cw * ch) / 4096)) * 4;
      var first = null, samples = 0;
      for (var i = 0; i + 3 < data.length; i += step){
        samples++;
        if (!first){ first = [data[i], data[i+1], data[i+2], data[i+3]]; continue; }
        if (Math.abs(data[i]-first[0]) > 6 || Math.abs(data[i+1]-first[1]) > 6 ||
            Math.abs(data[i+2]-first[2]) > 6 || Math.abs(data[i+3]-first[3]) > 6) return false;
      }
      return samples > 8;
    } catch (_) { return false; }
  }
  function renderSnapshot(id){
    var w = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
    var h = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
    var dpr = window.devicePixelRatio || 1;
    var bgColor = snapshotBackgroundColor();
    var docW = Math.max(w, document.documentElement.scrollWidth || 0, document.body ? document.body.scrollWidth : 0);
    var docH = Math.max(h, document.documentElement.scrollHeight || 0, document.body ? document.body.scrollHeight : 0);
    var clone = document.documentElement.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    inlineSnapshotStyles(document.documentElement, clone);
    pruneHiddenSnapshotNodes(document.documentElement, clone);
    var scroll = scrollOffset();
    var cloneBody = clone.querySelector('body');
    var rootStyle = clone.getAttribute('style') || '';
    var bodyStyle = cloneBody ? cloneBody.getAttribute('style') || '' : '';
    var bodyContent = cloneBody ? cloneBody.innerHTML : clone.innerHTML;
    var wrapperStyle = rootStyle + bodyStyle +
      'margin:0;position:relative;left:' + (-scroll.x) + 'px;top:' + (-scroll.y) + 'px;' +
      'width:' + docW + 'px;height:' + docH + 'px;overflow:visible;';
    var html = '<div xmlns="http://www.w3.org/1999/xhtml" style="' + escapeAttribute(wrapperStyle) + '">' + bodyContent + '</div>';
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
      '<foreignObject x="0" y="0" width="' + docW + '" height="' + docH + '">' +
      html +
      '</foreignObject></svg>';
    var img = new Image();
    img.onload = function(){
      try {
        var canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.floor(w * dpr));
        canvas.height = Math.max(1, Math.floor(h * dpr));
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('no 2d context');
        ctx.scale(dpr, dpr);
        // Opaque base so a transparent (un-painted) raster never flattens to
        // pure black in clipboards / PNG viewers.
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        if (canvasLooksBlank(ctx, canvas.width, canvas.height)) {
          window.parent.postMessage({ type: 'od:snapshot:result', id: id, error: 'empty-render' }, '*');
          return;
        }
        window.parent.postMessage({ type: 'od:snapshot:result', id: id, dataUrl: canvas.toDataURL('image/png'), w: canvas.width, h: canvas.height }, '*');
      } catch (err) {
        window.parent.postMessage({ type: 'od:snapshot:result', id: id, error: String(err && err.message || err) }, '*');
      }
    };
    function encodedSvgDataUrl(){
      var encoded = encodeURIComponent(svg);
      return 'data:image/svg+xml;charset=utf-8,' + encoded;
    }
    img.onerror = function(){
      window.parent.postMessage({ type: 'od:snapshot:result', id: id, error: 'snapshot image failed' }, '*');
    };
    img.src = encodedSvgDataUrl();
  }
  window.addEventListener('message', function(ev){
    var data = ev && ev.data;
    if (!data || data.type !== 'od:snapshot' || !data.id) return;
    waitForImages().then(function(){ renderSnapshot(String(data.id)); });
  });
})();</script>`;
    return injectBeforeBodyEnd(doc, script);
}
// Palette bridge: re-skin the page on host postMessage. Generated pages
// hard-code multiple shades of one accent and a CSS-variable swap will
// not catch them. We walk the DOM and shift any chromatic paint to the
// target palette's hue while keeping each color's saturation and
// lightness — pale tints stay pale, bold CTAs stay bold, just in the
// new color family. Mono-noir desaturates instead of shifting.
function injectPaletteBridge(doc, options = {
    initialPalette: null
}) {
    const initial = options.initialPalette ? JSON.stringify(String(options.initialPalette)) : 'null';
    const script = `<script data-od-palette-bridge>(function(){
  var PALETTES = {
    'coral':       { hue: 10,  satFloor: 0.55, mono: false },
    'electric':    { hue: 262, satFloor: 0.55, mono: false },
    'acid-forest': { hue: 142, satFloor: 0.55, mono: false },
    'risograph':   { hue: 349, satFloor: 0.60, mono: false },
    'mono-noir':   { hue: 0,   satFloor: 0,    mono: true  }
  };
  var current = ${initial};
  var ATTR = 'data-od-palette-fix';
  var SAVED = '__odPaletteSaved__';
  var MIN_SAT = 0.08;
  var WALK_LIMIT = 12000;
  var STYLE_RULE_LIMIT = 5000;
  var ROOT_SELECTOR = /(^|,)\\s*(:root|html|body|:host)\\s*($|,)/;
  var varApplied = Object.create(null);
  var probeEl = null;
  function parseRgb(s){
    var str = String(s||'').trim();
    if (!str || str === 'transparent' || str === 'none') return null;
    var m = str.match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    var p = m[1].split(/[\\s,/]+/).filter(Boolean).map(function(x){ return parseFloat(x); });
    if (p.length < 3) return null;
    return { r: p[0]||0, g: p[1]||0, b: p[2]||0, a: p[3] == null ? 1 : p[3] };
  }
  function rgbToHsl(r,g,b){
    r/=255; g/=255; b/=255;
    var max=Math.max(r,g,b), min=Math.min(r,g,b);
    var h=0, s=0, l=(max+min)/2;
    if (max!==min){
      var d=max-min;
      s = l>0.5 ? d/(2-max-min) : d/(max+min);
      if (max===r) h=(g-b)/d + (g<b?6:0);
      else if (max===g) h=(b-r)/d + 2;
      else h=(r-g)/d + 4;
      h *= 60;
    }
    return {h:h, s:s, l:l};
  }
  function h2rgb(p,q,t){
    if (t<0) t+=1;
    if (t>1) t-=1;
    if (t<1/6) return p+(q-p)*6*t;
    if (t<1/2) return q;
    if (t<2/3) return p+(q-p)*(2/3-t)*6;
    return p;
  }
  function hslStr(h,s,l){
    h = ((h%360)+360)%360/360;
    var r,g,b;
    if (s===0){ r=g=b=l; }
    else {
      var q = l<0.5 ? l*(1+s) : l+s-l*s;
      var p = 2*l-q;
      r=h2rgb(p,q,h+1/3); g=h2rgb(p,q,h); b=h2rgb(p,q,h-1/3);
    }
    return 'rgb('+Math.round(r*255)+','+Math.round(g*255)+','+Math.round(b*255)+')';
  }
  function chromatic(c){
    if (!c || c.a < 0.3) return null;
    var hsl = rgbToHsl(c.r,c.g,c.b);
    if (hsl.s < MIN_SAT) return null;
    if (hsl.l < 0.04 || hsl.l > 0.98) return null;
    return hsl;
  }
  function shift(hsl, palette){
    if (palette.mono) return hslStr(0, 0, hsl.l);
    var sat = Math.max(hsl.s, palette.satFloor * 0.7);
    return hslStr(palette.hue, sat, hsl.l);
  }
  function normalizeColor(value){
    var raw = String(value||'').trim();
    if (!raw) return null;
    var direct = parseRgb(raw);
    if (direct) return direct;
    if (raw.indexOf('var(') === 0 || raw.indexOf('--') === 0) return null;
    if (!probeEl){
      probeEl = document.createElement('div');
      probeEl.style.display = 'none';
      (document.body || document.documentElement).appendChild(probeEl);
    }
    probeEl.style.color = '';
    try { probeEl.style.color = raw; } catch (_){ return null; }
    if (!probeEl.style.color) return null;
    return parseRgb(probeEl.style.color);
  }
  function isRootSelector(selector){
    return !!selector && ROOT_SELECTOR.test(String(selector));
  }
  function forEachStyleRule(rules, visit, budget){
    if (!rules || !budget.left) return;
    for (var i=0; i<rules.length && budget.left>0; i++){
      var rule = rules[i];
      budget.left--;
      if (rule.selectorText && rule.style && isRootSelector(rule.selectorText)) visit(rule);
      if (rule.cssRules && rule.cssRules.length) forEachStyleRule(rule.cssRules, visit, budget);
    }
  }
  function applyVarTint(palette){
    var sheets = document.styleSheets;
    if (!sheets || !sheets.length) return;
    var budget = { left: STYLE_RULE_LIMIT };
    for (var i=0; i<sheets.length; i++){
      var sheet = sheets[i];
      var rules = null;
      try { rules = sheet.cssRules; } catch (_){ continue; }
      forEachStyleRule(rules, function(rule){
        var decl = rule.style;
        for (var j=0; j<decl.length; j++){
          var name = decl[j];
          if (name.indexOf('--') !== 0) continue;
          var raw = decl.getPropertyValue(name);
          var color = normalizeColor(raw);
          var hsl = chromatic(color);
          if (!hsl) continue;
          document.documentElement.style.setProperty(name, shift(hsl, palette));
          varApplied[name] = true;
        }
      }, budget);
    }
  }
  function restoreVars(){
    for (var name in varApplied){
      document.documentElement.style.setProperty(name, '');
    }
    varApplied = Object.create(null);
  }
  function restoreAll(){
    restoreVars();
    var nodes = document.querySelectorAll('['+ATTR+']');
    for (var i=0;i<nodes.length;i++){
      var el = nodes[i], saved = el[SAVED];
      if (saved){
        if ('bg' in saved) el.style.backgroundColor = saved.bg;
        if ('color' in saved) el.style.color = saved.color;
        if ('border' in saved) el.style.borderColor = saved.border;
        if ('fill' in saved){ if (saved.fill) el.setAttribute('fill', saved.fill); else el.removeAttribute('fill'); }
        if ('stroke' in saved){ if (saved.stroke) el.setAttribute('stroke', saved.stroke); else el.removeAttribute('stroke'); }
      }
      el.removeAttribute(ATTR);
      delete el[SAVED];
    }
  }
  function applyTint(id){
    var palette = PALETTES[id];
    if (!palette) return;
    applyVarTint(palette);
    var all = document.body ? document.body.querySelectorAll('*') : [];
    for (var i=0; i<all.length && i<WALK_LIMIT; i++){
      var el = all[i], cs = getComputedStyle(el), saved = {}, changed = false;
      var bg = chromatic(parseRgb(cs.backgroundColor));
      if (bg){ saved.bg = el.style.backgroundColor; el.style.setProperty('background-color', shift(bg, palette), 'important'); changed = true; }
      var fg = chromatic(parseRgb(cs.color));
      if (fg){ saved.color = el.style.color; el.style.setProperty('color', shift(fg, palette), 'important'); changed = true; }
      var bd = chromatic(parseRgb(cs.borderTopColor));
      if (bd){ saved.border = el.style.borderColor; el.style.setProperty('border-color', shift(bd, palette), 'important'); changed = true; }
      var fillAttr = el.getAttribute && el.getAttribute('fill');
      if (fillAttr){
        var f = chromatic(parseRgb(cs.fill));
        if (f){ saved.fill = fillAttr; el.setAttribute('fill', shift(f, palette)); changed = true; }
      }
      var strokeAttr = el.getAttribute && el.getAttribute('stroke');
      if (strokeAttr){
        var sk = chromatic(parseRgb(cs.stroke));
        if (sk){ saved.stroke = strokeAttr; el.setAttribute('stroke', shift(sk, palette)); changed = true; }
      }
      if (changed){ el[SAVED] = saved; el.setAttribute(ATTR, '1'); }
    }
  }
  function apply(id){
    restoreAll();
    if (!id || !PALETTES[id]){ current = null; return; }
    current = id;
    applyTint(id);
  }
  window.addEventListener('message', function(ev){
    var data = ev && ev.data;
    if (!data || data.type !== 'od:palette') return;
    apply(data.palette ? String(data.palette) : null);
  });
  function boot(){ if (current) apply(current); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();</script>`;
    return injectBeforeBodyEnd(doc, script);
}
function annotateManualEditSourcePaths(doc) {
    if (typeof DOMParser === 'undefined') return doc;
    try {
        const parsed = new DOMParser().parseFromString(doc, 'text/html');
        parsed.body.querySelectorAll(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_EDIT_DISCOVERY_SELECTOR"]).forEach((el)=>{
            if (el.hasAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_EDIT_SOURCE_PATH_ATTR"])) return;
            const path = sourcePathForElement(el);
            if (path) el.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANUAL_EDIT_SOURCE_PATH_ATTR"], path);
        });
        return serializeHtmlDocument(parsed);
    } catch  {
        return doc;
    }
}
function sourcePathForElement(el) {
    const parts = [];
    let node = el;
    while(node && node !== node.ownerDocument.body){
        const parent = node.parentElement;
        if (!parent) break;
        parts.unshift(Array.prototype.indexOf.call(parent.children, node));
        node = parent;
    }
    return parts.length ? `path-${parts.join('-')}` : '';
}
function serializeHtmlDocument(doc) {
    const doctype = doc.doctype ? '<!doctype html>\n' : '';
    return `${doctype}${doc.documentElement.outerHTML}`;
}
/**
 * Auto-annotate structural HTML elements that lack `data-od-id` or
 * `data-screen-label` so that the selection bridge (Picker / Pods /
 * Tweaks) can target them. This fixes imported designs whose HTML was
 * generated outside of Open Design and therefore carries no OD-specific
 * annotations.
 */ function annotateMissingOdIds(doc) {
    if (typeof DOMParser === 'undefined') return doc;
    try {
        const parsed = new DOMParser().parseFromString(doc, 'text/html');
        // Only target divs that are direct children of semantic containers or body;
        // deeply nested layout divs (e.g. flex/grid wrappers) create noise in the
        // selection bridge without adding meaningful pickable targets.
        const selector = [
            'section',
            'article',
            'header',
            'footer',
            'nav',
            'main',
            'aside',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'button',
            'a',
            '[id]',
            'body > div[class]',
            'body > div[id]',
            'section > div[class]',
            'section > div[id]',
            'article > div[class]',
            'article > div[id]',
            'main > div[class]',
            'main > div[id]',
            'header > div[class]',
            'header > div[id]',
            'footer > div[class]',
            'footer > div[id]',
            'nav > div[class]',
            'nav > div[id]',
            'aside > div[class]',
            'aside > div[id]',
            '[id] > div[class]',
            '[id] > div[id]'
        ].join(', ');
        const skipTags = new Set([
            'script',
            'style',
            'template',
            'noscript',
            'iframe',
            'object',
            'embed'
        ]);
        let fallbackIndex = 0;
        parsed.body.querySelectorAll(selector).forEach((el)=>{
            if (el.hasAttribute('data-od-id') || el.hasAttribute('data-screen-label')) return;
            const tag = el.tagName.toLowerCase();
            if (skipTags.has(tag)) return;
            const path = sourcePathForElement(el);
            el.setAttribute('data-od-id', path || `od-${tag}-${fallbackIndex++}`);
        });
        return serializeHtmlDocument(parsed);
    } catch  {
        return doc;
    }
}
function injectManualEditBridge(doc) {
    const withGuard = injectAfterHeadOpen(doc, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildManualEditKeyboardGuard"])());
    const withStyle = injectBeforeHeadEnd(withGuard, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildManualEditBridgeStyle"])());
    return injectBeforeBodyEnd(withStyle, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$edit$2d$mode$2f$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildManualEditBridge"])(false));
}
function injectAfterHeadOpen(doc, payload) {
    if (/<head[^>]*>/i.test(doc)) return doc.replace(/<head[^>]*>/i, (m)=>`${m}${payload}`);
    return payload + doc;
}
function injectBeforeHeadEnd(doc, payload) {
    // String-first: a plain splice before the real </head> (or after <head…>) is
    // correct for well-formed documents and avoids a full DOMParser parse +
    // re-serialize. Every bridge calls this, so the parse path was the dominant
    // srcdoc-build cost; DOMParser is now only the fallback for head-less
    // fragments where we can't locate an insertion point textually. Find the real
    // </head> (last one before <body>) to skip </head> literals in <script>/<style>.
    const lower = doc.toLowerCase();
    const bodyStart = lower.indexOf('<body');
    const limit = bodyStart >= 0 ? bodyStart : lower.length;
    const idx = lower.lastIndexOf('</head>', limit - 1);
    if (idx >= 0) return doc.slice(0, idx) + payload + doc.slice(idx);
    if (/<head[^>]*>/i.test(doc)) return doc.replace(/<head[^>]*>/i, (m)=>`${m}${payload}`);
    // No recognizable <head>: let DOMParser normalize (it synthesizes a head).
    if (typeof DOMParser !== 'undefined') {
        try {
            const parsed = new DOMParser().parseFromString(doc, 'text/html');
            if (parsed.head) parsed.head.insertAdjacentHTML('beforeend', payload);
            return serializeHtmlDocument(parsed);
        } catch  {}
    }
    return payload + doc;
}
function injectBeforeBodyEnd(doc, payload) {
    // String-first (see injectBeforeHeadEnd). Find the real </body> (last one
    // before </html>) to skip </body> literals inside <script>/<style>.
    const lower = doc.toLowerCase();
    const htmlEnd = lower.lastIndexOf('</html>');
    const limit = htmlEnd >= 0 ? htmlEnd : lower.length;
    const idx = lower.lastIndexOf('</body>', limit - 1);
    if (idx >= 0) return doc.slice(0, idx) + payload + doc.slice(idx);
    // No recognizable </body>: let DOMParser normalize (it synthesizes a body).
    if (typeof DOMParser !== 'undefined') {
        try {
            const parsed = new DOMParser().parseFromString(doc, 'text/html');
            if (parsed.body) parsed.body.insertAdjacentHTML('beforeend', payload);
            return serializeHtmlDocument(parsed);
        } catch  {}
    }
    return doc + payload;
}
function injectBaseHref(doc, baseHref) {
    const safeHref = escapeAttr(baseHref);
    const tag = `<base href="${safeHref}">`;
    if (/<head[^>]*>/i.test(doc)) {
        return doc.replace(/<head[^>]*>/i, (m)=>`${m}${tag}`);
    }
    if (/<html[^>]*>/i.test(doc)) {
        return doc.replace(/<html[^>]*>/i, (m)=>`${m}<head>${tag}</head>`);
    }
    return tag + doc;
}
function escapeAttr(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
// Sandboxed iframes (we use `sandbox="allow-scripts"`) without
// `allow-same-origin` raise a SecurityError on first `localStorage` /
// `sessionStorage` access. Many freeform-generated decks call
// `localStorage.getItem(...)` at the top of their IIFE without a
// try/catch — when it throws, the whole script aborts and the deck
// becomes a static, unnavigable preview. We install a same-origin
// in-memory shim BEFORE any user script runs so those decks degrade
// gracefully (position just doesn't persist across reloads).
// allow-popups and allow-popups-to-escape-sandbox are needed for 
// links with target="_blank" to work in the sandboxed preview.
// Empty hrefs and hash only hrefs will be intercepted and ignored.
// hrefs leading to an id on the page will be scrolled into view.
function injectSandboxShim(doc) {
    const shim = `<script data-od-sandbox-shim>(function(){
  function makeStore(){
    var data = {};
    var api = {
      getItem: function(k){ return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null; },
      setItem: function(k, v){ data[k] = String(v); },
      removeItem: function(k){ delete data[k]; },
      clear: function(){ data = {}; },
      key: function(i){ return Object.keys(data)[i] || null; }
    };
    Object.defineProperty(api, 'length', { get: function(){ return Object.keys(data).length; } });
    return api;
  }
  function tryShim(name){
    var works = false;
    try { works = !!window[name] && typeof window[name].getItem === 'function'; void window[name].length; }
    catch (_) { works = false; }
    if (works) return;
    try { Object.defineProperty(window, name, { configurable: true, value: makeStore() }); }
    catch (_) { try { window[name] = makeStore(); } catch (__) {} }
  }
  tryShim('localStorage');
  tryShim('sessionStorage');
  document.addEventListener('click', (e) => {
    if (!e.target || !(e.target instanceof Element)) return;
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (href === null) return;
    var isAnchor = href.startsWith('#') || href === '';
    if (isAnchor) {
      e.preventDefault();
      if (href === '' || href === '#') {
        window.scrollTo({ top: 0 });
        history.replaceState(null, '', ' ');
      } else {
        var targetId = href.slice(1);
        var target = targetId ? document.getElementById(targetId) : null;
        if (target) {
          target.scrollIntoView();
          location.hash === href && history.replaceState(null, '', ' ');
          location.hash = href;
        }
      }
    } else if (link.getAttribute('target') === '_blank') {
      e.preventDefault();
      let safe = false;
      try {
        var url = new URL(href, location.href);
        safe =
          url.protocol === 'http:' ||
          url.protocol === 'https:' ||
          url.protocol === 'mailto:';
      } catch (_) {}
      safe && window.open(href, '_blank', 'noopener,noreferrer');
    }
  });
})();</script>`;
    if (/<head[^>]*>/i.test(doc)) return doc.replace(/<head[^>]*>/i, (m)=>`${m}${shim}`);
    if (/<body[^>]*>/i.test(doc)) return doc.replace(/<body[^>]*>/i, (m)=>`${m}${shim}`);
    return shim + doc;
}
function injectPreviewFocusGuard(doc) {
    const script = `<script data-od-preview-focus-guard>(function(){
  var lastTrustedInputAt = 0;
  function userActivated(){
    return Date.now() - lastTrustedInputAt < 1000;
  }
  function markTrustedInput(event){
    if (event && event.isTrusted) lastTrustedInputAt = Date.now();
  }
  document.addEventListener('pointerdown', function(event){
    markTrustedInput(event);
  }, true);
  document.addEventListener('keydown', function(event){
    markTrustedInput(event);
  }, true);
  try {
    var nativeWindowFocus = window.focus && window.focus.bind(window);
    Object.defineProperty(window, 'focus', {
      configurable: true,
      writable: true,
      value: function(){
        if (userActivated() && nativeWindowFocus) return nativeWindowFocus();
      }
    });
  } catch (_) {}
  try {
    var nativeElementFocus = HTMLElement.prototype.focus;
    Object.defineProperty(HTMLElement.prototype, 'focus', {
      configurable: true,
      writable: true,
      value: function(options){
        if (userActivated()) return nativeElementFocus.call(this, options);
      }
    });
  } catch (_) {}
})();</script>`;
    if (/<head[^>]*>/i.test(doc)) return doc.replace(/<head[^>]*>/i, (m)=>`${m}${script}`);
    if (/<body[^>]*>/i.test(doc)) return doc.replace(/<body[^>]*>/i, (m)=>`${m}${script}`);
    return script + doc;
}
// Selection bridge: shared substrate for Comment mode and Inspect mode.
// Both modes pick a [data-od-id] / [data-screen-label] element on click;
// the difference is what the host does with the selection — annotate
// (Comment) or live-tune basic styles (Inspect).
//
// Inspect adds four messages on top of the comment protocol:
//   in:  { type: 'od:inspect-set', elementId, selector, prop, value }
//        Apply (or unset, when value === '') a per-element CSS override.
//   in:  { type: 'od:inspect-reset', elementId? } Clear overrides for one
//        element, or all if elementId is omitted.
//   in:  { type: 'od:inspect-extract' } Reply with the cumulative
//        override map so the host can persist to source.
//   in:  { type: 'od:inspect-replay', overrides } Replace the in-memory
//        override map with the host's authoritative set so the iframe
//        preview matches host state after every srcdoc rebuild. Without
//        this the bridge re-hydrates only the persisted <style> block on
//        load, so any unsaved edit the host still holds disappears from
//        the preview while saveInspectToSource() can later commit CSS the
//        user is no longer seeing. Re-validates every entry under the
//        same allow-list / value sanitizer applied to od:inspect-set.
//   out: { type: 'od:inspect-overrides', overrides } The current snapshot,
//        sent in reply to extract and after every set/reset/replay. The
//        host re-derives the persisted CSS body from the structured map
//        under its own allow-list — the bridge's own stylesheet text is
//        NOT included in this message because artifact JS can forge a
//        same-source od:inspect-overrides containing a hostile `css`.
//
// Overrides are written into a single <style data-od-inspect-overrides>
// block in <head>, with `!important` on every property so the bridge
// can defeat author inline styles (common in agent-generated HTML).
//
// Security: this bridge runs inside a sandboxed iframe but still shares the
// host page context for the override <style> element. The message listener
// does NOT validate ev.origin — the web app runs on configurable ports and
// preview domains, so the host origin is not stable. The bridge therefore
// trusts any parent that can postMessage to it and relies on iframe
// sandboxing + the prop allow-list / value sanitization below to contain
// damage. Any parent able to postMessage here can already mount the iframe.
function injectSelectionBridge(doc, options = {}) {
    const initialComment = options.initialCommentMode ? 'true' : 'false';
    const initialInspect = options.initialInspectMode ? 'true' : 'false';
    const script = `<script data-od-selection-bridge>(function(){
  var commentEnabled = ${initialComment};
  var inspectEnabled = ${initialInspect};
  // Comment mode has two sub-tools (kept on the host side as boardTool):
  //   'picker' — click-to-select an element for annotation.
  //   'pod'    — pointer-drag a freeform stroke that the host turns into a
  //              pod selection covering whatever the stroke encloses.
  // Inspect mode always uses 'picker'-style click selection regardless of
  // this value.
  var mode = 'picker';
  var hoveredId = null;
  var drawing = false;
  var stroke = [];
  var strokeFrame = null;
  var postTargetsTimer = null;
  // overrides[elementId] = { selector: '[data-od-id="x"]', props: { color: '#fff', ... } }
  var overrides = Object.create(null);
  var styleEl = null;
  // Allow-list of CSS properties the host may override. A malicious parent
  // could otherwise smuggle arbitrary CSS (or, with </style>, raw HTML)
  // through od:inspect-set. Keep this in sync with the InspectPanel UI.
  var ALLOWED_PROPS = {
    'color': true,
    'background-color': true,
    'font-size': true,
    'font-weight': true,
    'font-family': true,
    'line-height': true,
    'text-align': true,
    'padding': true,
    'padding-top': true,
    'padding-right': true,
    'padding-bottom': true,
    'padding-left': true,
    'border-radius': true
  };
  // Reject any value that could break out of a 'prop: value' declaration:
  // semicolons (extra declarations), braces (close the rule), angle
  // brackets (close the <style> tag), and newlines (defense in depth).
  var UNSAFE_VALUE = /[;{}<>\\n\\r]/;
  function active(){ return commentEnabled || inspectEnabled; }
  function deckSlideIndexForPayload(){
    try {
      var state = window.__odDeckSlideState && window.__odDeckSlideState();
      if (state && typeof state.active === 'number' && state.count > 1) return state.active;
    } catch (_) {}
    return null;
  }
  function elementVisibleForComment(el, rect){
    if (!el || !rect || rect.width <= 0 || rect.height <= 0) return false;
    try {
      var cs = window.getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return false;
    } catch (_) {}
    return true;
  }
  function esc(value){ try { return window.CSS && CSS.escape ? CSS.escape(value) : String(value).replace(/"/g, '\\\\"'); } catch (_) { return String(value); } }
  // Recompute the selector from elementId rather than trusting the one in
  // the inbound message — a forged selector like
  // '} </style><script>...' would otherwise be concatenated into the
  // override <style> sheet verbatim. The hint string is only inspected to
  // decide which attribute kind (data-od-id vs data-screen-label) was the
  // user's pick at click time, so we tune the same node the host
  // serializer keys off; the hint itself is never written into CSS.
  function safeSelectorFor(elementId, hint){
    var id = String(elementId);
    var kind = null;
    if (typeof hint === 'string') {
      if (hint.indexOf('[data-od-id=') === 0) kind = 'data-od-id';
      else if (hint.indexOf('[data-screen-label=') === 0) kind = 'data-screen-label';
    }
    if (kind === 'data-screen-label' && document.querySelector('[data-screen-label="' + esc(id) + '"]')) {
      return '[data-screen-label="' + esc(id) + '"]';
    }
    if (kind === 'data-od-id' && document.querySelector('[data-od-id="' + esc(id) + '"]')) {
      return '[data-od-id="' + esc(id) + '"]';
    }
    if (document.querySelector('[data-od-id="' + esc(id) + '"]')) {
      return '[data-od-id="' + esc(id) + '"]';
    }
    if (document.querySelector('[data-screen-label="' + esc(id) + '"]')) {
      return '[data-screen-label="' + esc(id) + '"]';
    }
    return null;
  }
  function ensureStyleEl(){
    if (styleEl && styleEl.isConnected) return styleEl;
    styleEl = document.querySelector('style[data-od-inspect-overrides]');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.setAttribute('data-od-inspect-overrides', '');
      (document.head || document.documentElement).appendChild(styleEl);
    }
    return styleEl;
  }
  // Hydrate the in-memory override map from any persisted
  // <style data-od-inspect-overrides> block already in the document.
  // Without this, the first od:inspect-set rebuilds the sheet from an
  // empty map and silently drops every previously saved rule for other
  // elements — a subsequent Save-to-source would then erase them from
  // the artifact too.
  function hydrateOverridesFromDom(){
    var existing = document.querySelector('style[data-od-inspect-overrides]');
    if (!existing) return;
    var text = existing.textContent || '';
    var ruleRe = /(\\[data-(?:od-id|screen-label)="[^"]*"\\])\\s*\\{\\s*([^}]*)\\}/g;
    var match;
    while ((match = ruleRe.exec(text)) !== null) {
      var selector = match[1];
      var declBody = match[2];
      var idMatch = selector.match(/="([^"]*)"/);
      if (!idMatch) continue;
      var elementId = idMatch[1];
      var props = Object.create(null);
      var decls = declBody.split(';');
      for (var d = 0; d < decls.length; d++) {
        var raw = decls[d];
        if (!raw) continue;
        var colon = raw.indexOf(':');
        if (colon <= 0) continue;
        var name = raw.slice(0, colon).trim().toLowerCase();
        if (!Object.prototype.hasOwnProperty.call(ALLOWED_PROPS, name)) continue;
        var value = raw.slice(colon + 1).replace(/!important/i, '').trim();
        if (!value || UNSAFE_VALUE.test(value)) continue;
        props[name] = value;
      }
      if (Object.keys(props).length) {
        overrides[elementId] = { selector: selector, props: props };
      }
    }
    styleEl = existing;
  }
  function rebuildStyleSheet(){
    var el = ensureStyleEl();
    var lines = [];
    Object.keys(overrides).forEach(function(id){
      var entry = overrides[id];
      if (!entry) return;
      var props = entry.props || {};
      var keys = Object.keys(props);
      if (!keys.length) return;
      var body = keys.map(function(k){ return k + ': ' + props[k] + ' !important'; }).join('; ');
      lines.push(entry.selector + ' { ' + body + ' }');
    });
    el.textContent = lines.join('\\n');
  }
  function postOverrides(){
    var clean = {};
    Object.keys(overrides).forEach(function(id){
      var entry = overrides[id];
      if (entry && entry.props && Object.keys(entry.props).length) {
        clean[id] = { selector: entry.selector, props: Object.assign({}, entry.props) };
      }
    });
    // Intentionally do NOT include a css string here. Artifact code
    // running inside this iframe shares window.parent and could forge
    // od:inspect-overrides with a hostile css (e.g. </style><script>...).
    // The host re-derives CSS from the structured overrides map under
    // its own allow-list, so any stray css field on the wire would only
    // be a false-trust trap.
    try { window.parent.postMessage({ type: 'od:inspect-overrides', overrides: clean }, '*'); } catch (_) {}
  }
  function styleSnapshot(el){
    try {
      var cs = window.getComputedStyle(el);
      return {
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        paddingTop: cs.paddingTop,
        paddingRight: cs.paddingRight,
        paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft,
        borderRadius: cs.borderTopLeftRadius,
        textAlign: cs.textAlign,
        fontFamily: cs.fontFamily
      };
    } catch (_) { return null; }
  }
  function annotatedSelectorFor(el){
    var id = el.getAttribute('data-od-id') || el.getAttribute('data-screen-label');
    if (!id) return null;
    return el.hasAttribute('data-od-id') ? '[data-od-id="' + esc(id) + '"]' : '[data-screen-label="' + esc(id) + '"]';
  }
  function domSelectorFor(el){
    if (!el || !el.tagName || el === document.documentElement || el === document.body) return null;
    var parts = [];
    var node = el;
    while (node && node !== document.documentElement && node !== document.body) {
      var tag = node.tagName ? node.tagName.toLowerCase() : '';
      if (!tag || /^(script|style|template|meta|link|title|noscript)$/.test(tag)) return null;
      var parent = node.parentElement;
      if (!parent) return null;
      var index = 1;
      var sibling = node.previousElementSibling;
      while (sibling) {
        if (sibling.tagName && sibling.tagName.toLowerCase() === tag) index++;
        sibling = sibling.previousElementSibling;
      }
      parts.unshift(tag + ':nth-of-type(' + index + ')');
      node = parent;
    }
    if (!parts.length) return null;
    return 'body > ' + parts.join(' > ');
  }
  function visibleTarget(el){
    if (!el || !el.getBoundingClientRect) return false;
    if (el === document.documentElement || el === document.body) return false;
    if (/^(script|style|template|meta|link|title|noscript)$/.test(el.tagName ? el.tagName.toLowerCase() : '')) return false;
    try {
      var rect = el.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return false;
      var cs = window.getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.pointerEvents === 'none') return false;
    } catch (_) {
      return false;
    }
    return true;
  }
function meaningfulDomFallbackTarget(el) {
  if (!visibleTarget(el)) return false;

  var tag = el.tagName ? el.tagName.toLowerCase() : '';

  if (/^(a|button|input|textarea|select|label|img|video|canvas|h1|h2|h3|h4|h5|h6|p|li|td|th)$/.test(tag)) {
    return true;
  }

  if (
    el.getAttribute &&
    (
      el.getAttribute('role') ||
      el.getAttribute('aria-label') ||
      el.getAttribute('title')
    )
  ) {
    return true;
  }

  if (tag === 'svg') {
    return !!(
      el.getAttribute &&
      (
        el.getAttribute('role') ||
        el.getAttribute('aria-label') ||
        el.getAttribute('title')
      )
    );
  }

  var text = (el.textContent || '').replace(/\s+/g, ' ').trim();
  if (!text) return false;

  if (/^(span|strong|em|b|i|small|code|mark)$/.test(tag)) return true;

  var meaningfulChildren = 0;
  for (var child = el.firstElementChild;child;child = child.nextElementSibling) {
    var childTag = child.tagName ? child.tagName.toLowerCase() : '';
    if (/^(script|style|template|meta|link|title|noscript)$/.test(childTag)) continue;
    if ((child.textContent || '').replace(/\s+/g, ' ').trim() || /^(img|video|canvas|svg|input|textarea|select)$/.test(childTag)) {
      meaningfulChildren++;
      if (meaningfulChildren > 1) return false;
    }
  }

  return true;
}
  function generatedRootAnnotation(el, id){
    return id === 'path-0' && el && el.parentElement === document.body && el.id === 'root';
  }
  function targetFrom(el, allowDomFallback, clickedEl, clickPoint){
    var id = el.getAttribute('data-od-id') || el.getAttribute('data-screen-label');
    if (allowDomFallback && id && generatedRootAnnotation(el, id)) return null;
    var selector = annotatedSelectorFor(el);
    if (!id && allowDomFallback && meaningfulDomFallbackTarget(el)) {
      selector = domSelectorFor(el);
      if (selector) id = 'dom:' + selector;
    }
    if (!id || !selector) return null;
    var rect = el.getBoundingClientRect();
    var tag = el.tagName ? el.tagName.toLowerCase() : 'element';
    var cls = typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\\s+/).slice(0,2).join('.') : '';
    var html = '';
    try { html = (el.outerHTML || '').replace(/\\s+/g, ' ').match(/^<[^>]+>/)?.[0] || ''; } catch (_) {}
    var position = { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) };
    if (!elementVisibleForComment(el, position)) return null;
    var payload = {
      type: 'od:comment-target',
      elementId: id,
      selector: selector,
      label: tag + cls,
      text: (el.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 160),
      position: position,
      htmlHint: html.slice(0, 180),
      style: styleSnapshot(el)
    };
    var slideIndex = deckSlideIndexForPayload();
    if (typeof slideIndex === 'number') payload.slideIndex = slideIndex;
    if (clickPoint) {
      payload.hoverPoint = { x: Math.round(clickPoint.x), y: Math.round(clickPoint.y) };
    }
    if (clickedEl && clickedEl !== el) {
      var clickedTag = clickedEl.tagName ? clickedEl.tagName.toLowerCase() : 'element';
      var clickedCls = typeof clickedEl.className === 'string' && clickedEl.className.trim() ? '.' + clickedEl.className.trim().split(/\\s+/).slice(0,2).join('.') : '';
      payload.clickedDescendant = {
        label: clickedTag + clickedCls,
        text: (clickedEl.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 80)
      };
    }
    return payload;
  }
  function allTargets(){
    var annotatedNodes = document.querySelectorAll('[data-od-id], [data-screen-label]');
    var includeDomFallback = canUseDomFallback();
    var nodes = includeDomFallback
      ? document.querySelectorAll('body *')
      : annotatedNodes;
    var items = [];
    var seen = Object.create(null);
    for (var i = 0; i < nodes.length; i++) {
      var item = targetFrom(nodes[i], includeDomFallback);
      if (item && !seen[item.elementId]) {
        seen[item.elementId] = true;
        items.push(item);
      }
    }
    return items;
  }
  var postTargetsPending = false;
  var postPreviewScrollPending = false;
  var postActiveTargetPending = false;
  var activeCommentElementId = null;
  var activeCommentSelector = null;
  function previewScrollElement(){
    return document.querySelector('.design-canvas') || document.scrollingElement || document.documentElement;
  }
  function previewScrollBy(left, top){
    var dx = Number(left || 0);
    var dy = Number(top || 0);
    if (!Number.isFinite(dx)) dx = 0;
    if (!Number.isFinite(dy)) dy = 0;
    if (!dx && !dy) return;
    var el = previewScrollElement();
    if (!el) return;
    try {
      if (typeof el.scrollBy === 'function') el.scrollBy({ left: dx, top: dy, behavior: 'auto' });
      else {
        el.scrollLeft = (el.scrollLeft || 0) + dx;
        el.scrollTop = (el.scrollTop || 0) + dy;
      }
    } catch (_) {
      try {
        el.scrollLeft = (el.scrollLeft || 0) + dx;
        el.scrollTop = (el.scrollTop || 0) + dy;
      } catch (__) {}
    }
    schedulePostTargets();
    schedulePostPreviewScroll();
  }
  function postPreviewScroll(){
    var el = previewScrollElement();
    if (!el) return;
    var frame = document.scrollingElement || document.documentElement;
    window.parent.postMessage({
      type: 'od:preview-scroll',
      canvasLeft: Math.round(el.scrollLeft || 0),
      canvasTop: Math.round(el.scrollTop || 0),
      frameLeft: Math.round(frame.scrollLeft || 0),
      frameTop: Math.round(frame.scrollTop || 0)
    }, '*');
  }
  function schedulePostPreviewScroll(){
    if (postPreviewScrollPending) return;
    postPreviewScrollPending = true;
    window.requestAnimationFrame(function(){
      postPreviewScrollPending = false;
      postPreviewScroll();
    });
  }
  function requestPreviewScrollRestore(){
    window.parent.postMessage({ type: 'od:preview-scroll-request' }, '*');
  }
  function findCommentTargetByIdentity(elementId, selector){
    var el = null;
    if (selector) {
      try { el = document.querySelector(String(selector)); } catch (_) { el = null; }
    }
    if (!el && elementId) {
      try {
        var id = String(elementId).replace(/"/g, '\\"');
        el = document.querySelector('[data-od-id="' + id + '"], [data-screen-label="' + id + '"]');
      } catch (_) { el = null; }
    }
    return el;
  }
  function postActiveCommentTarget(){
    if (!active() || !activeCommentElementId) return;
    var el = findCommentTargetByIdentity(activeCommentElementId, activeCommentSelector);
    if (!el) return;
    var payload = targetFrom(el, commentEnabled && mode === 'picker' && !inspectEnabled);
    if (payload) window.parent.postMessage(Object.assign({}, payload, { type: 'od:comment-active-target-update' }), '*');
  }
  function schedulePostActiveCommentTarget(){
    if (!active() || !activeCommentElementId || postActiveTargetPending) return;
    postActiveTargetPending = true;
    window.requestAnimationFrame(function(){
      postActiveTargetPending = false;
      postActiveCommentTarget();
    });
  }
  function postTargets(){
    if (!active()) return;
    window.parent.postMessage({ type: 'od:comment-targets', targets: allTargets() }, '*');
  }
  function schedulePostTargets(){
    if (!active() || postTargetsPending) return;
    postTargetsPending = true;
    if (postTargetsTimer) window.clearTimeout(postTargetsTimer);
    postTargetsTimer = window.setTimeout(function(){
      window.requestAnimationFrame(function(){
        postTargetsPending = false;
        postTargetsTimer = null;
        postTargets();
      });
    }, 120);
  }
  function relativePoint(ev){
    return { x: Math.round(ev.clientX), y: Math.round(ev.clientY) };
  }
  function postStroke(type){
    window.parent.postMessage({ type: type, points: stroke.slice() }, '*');
  }
  // Coalesce live stroke updates to one post per frame. The stroke array still
  // grows synchronously on every pointermove, but the host (which re-renders
  // the comment overlay on each od:pod-stroke) only sees ~60 updates/sec
  // instead of one per raw pointer event.
  function schedulePostStroke(){
    if (strokeFrame !== null) return;
    strokeFrame = requestAnimationFrame(function(){
      strokeFrame = null;
      postStroke('od:pod-stroke');
    });
  }
  function canUseDomFallback(){
    return commentEnabled && !inspectEnabled;
  }
  function eventCandidateElements(event){
    var items = [];
    function push(node){
      if (!node || node.nodeType !== 1) return;
      if (items.indexOf(node) >= 0) return;
      items.push(node);
    }
    try {
      if (event && typeof event.composedPath === 'function') {
        var path = event.composedPath();
        for (var i = 0; i < path.length; i++) push(path[i]);
      }
    } catch (_) {}
    push(event && event.target);
    try {
      if (
        event &&
        typeof event.clientX === 'number' &&
        typeof event.clientY === 'number' &&
        document.elementsFromPoint
      ) {
        var stack = document.elementsFromPoint(event.clientX, event.clientY);
        for (var s = 0; s < stack.length; s++) push(stack[s]);
      } else if (
        event &&
        typeof event.clientX === 'number' &&
        typeof event.clientY === 'number' &&
        document.elementFromPoint
      ) {
        push(document.elementFromPoint(event.clientX, event.clientY));
      }
    } catch (_) {}
    return items;
  }
  function closestTarget(event){
    var candidates = eventCandidateElements(event);
    var allowDomFallback = mode === 'picker' && canUseDomFallback();
    var annotatedFallback = null;
    for (var i = 0; i < candidates.length; i++) {
      var clicked = candidates[i];
      var el = clicked;
      while (el && el !== document.documentElement) {
        if (allowDomFallback && meaningfulDomFallbackTarget(el)) {
          return { target: el, clicked: clicked };
        }
        if (el.getAttribute && (el.hasAttribute('data-od-id') || el.hasAttribute('data-screen-label'))) {
          var id = el.getAttribute('data-od-id') || el.getAttribute('data-screen-label');
          if (allowDomFallback && generatedRootAnnotation(el, id)) {
            el = el.parentElement;
            continue;
          }
          if (allowDomFallback && !annotatedFallback) annotatedFallback = { target: el, clicked: clicked };
          if (allowDomFallback) break;
          return { target: el, clicked: clicked };
        }
        el = el.parentElement;
      }
    }
    return annotatedFallback;
  }
  function applyOverride(elementId, selector, prop, value){
    if (!elementId || !prop) return;
    if (!Object.prototype.hasOwnProperty.call(ALLOWED_PROPS, prop)) return;
    var safeSelector = safeSelectorFor(elementId, selector);
    if (!safeSelector) return;
    var v = (value == null) ? '' : String(value).trim();
    if (v && UNSAFE_VALUE.test(v)) return;
    var entry = overrides[elementId];
    if (!entry) {
      entry = { selector: safeSelector, props: Object.create(null) };
      overrides[elementId] = entry;
    } else {
      entry.selector = safeSelector;
    }
    if (!v) delete entry.props[prop];
    else entry.props[prop] = v;
    if (Object.keys(entry.props).length === 0) delete overrides[elementId];
    rebuildStyleSheet();
    postOverrides();
  }
  function resetOverrides(elementId){
    if (elementId) delete overrides[elementId];
    else overrides = Object.create(null);
    rebuildStyleSheet();
    postOverrides();
  }
  window.addEventListener('message', function(ev){
    var data = ev && ev.data;
    if (!data || !data.type) return;
    if (data.type === 'od:comment-mode') {
      commentEnabled = !!data.enabled;
      mode = data.mode === 'pod' ? 'pod' : 'picker';
      document.documentElement.toggleAttribute('data-od-comment-mode', commentEnabled);
      document.documentElement.setAttribute('data-od-comment-mode-kind', mode);
      if (active()) setTimeout(postTargets, 0);
      else {
        hoveredId = null;
        activeCommentElementId = null;
        activeCommentSelector = null;
      }
      if (!commentEnabled || mode !== 'pod') {
        drawing = false;
        stroke = [];
        try { window.parent.postMessage({ type: 'od:pod-clear' }, '*'); } catch (_) {}
      }
      return;
    }
    if (data.type === 'od:preview-scroll-restore') {
      var frame = document.scrollingElement || document.documentElement;
      var el = previewScrollElement();
      if (frame) frame.scrollTo(Number(data.frameLeft || 0), Number(data.frameTop || 0));
      if (el) el.scrollTo(Number(data.canvasLeft || 0), Number(data.canvasTop || 0));
      setTimeout(postPreviewScroll, 0);
      return;
    }
    if (data.type === 'od:comment-active-target') {
      activeCommentElementId = data.elementId ? String(data.elementId) : null;
      activeCommentSelector = data.selector ? String(data.selector) : null;
      schedulePostActiveCommentTarget();
      return;
    }
    if (data.type === 'od:preview-scroll-by') {
      previewScrollBy(data.left, data.top);
      return;
    }

    if (data.type === 'od:inspect-mode') {
      inspectEnabled = !!data.enabled;
      document.documentElement.toggleAttribute('data-od-inspect-mode', inspectEnabled);
      if (active()) setTimeout(postTargets, 0);
      else hoveredId = null;
      return;
    }
    if (data.type === 'od:inspect-set') {
      applyOverride(data.elementId, data.selector, data.prop, data.value);
      return;
    }
    if (data.type === 'od:inspect-reset') {
      resetOverrides(data.elementId);
      return;
    }
    if (data.type === 'od:inspect-extract') {
      postOverrides();
      return;
    }
    if (data.type === 'od:inspect-replay') {
      // Replace the in-memory map with the host's authoritative set so
      // unsaved edits survive a srcdoc rebuild (toggling inspect off/on,
      // switching to comment, any other reload reloads the iframe from
      // previewSource without the unsaved style block). Re-validate every
      // entry: a parent able to postMessage to this bridge is otherwise
      // trusted, but applying its payload through the same allow-list /
      // value sanitizer keeps the override sheet under the bridge's own
      // contract instead of whatever the parent sent.
      var raw = (data && typeof data.overrides === 'object' && data.overrides) ? data.overrides : {};
      overrides = Object.create(null);
      var ids = Object.keys(raw);
      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var entry = raw[id];
        if (!entry || typeof entry.props !== 'object' || !entry.props) continue;
        var safeSelector = safeSelectorFor(id, entry.selector);
        if (!safeSelector) continue;
        var clean = Object.create(null);
        var pkeys = Object.keys(entry.props);
        for (var p = 0; p < pkeys.length; p++) {
          var name = String(pkeys[p]).toLowerCase();
          if (!Object.prototype.hasOwnProperty.call(ALLOWED_PROPS, name)) continue;
          var rawValue = entry.props[pkeys[p]];
          if (rawValue == null) continue;
          var v = String(rawValue).trim();
          if (!v || UNSAFE_VALUE.test(v)) continue;
          clean[name] = v;
        }
        if (Object.keys(clean).length) overrides[id] = { selector: safeSelector, props: clean };
      }
      rebuildStyleSheet();
      postOverrides();
      return;
    }
  });
  function pickerActive(){ return inspectEnabled || (commentEnabled && mode === 'picker'); }
  document.addEventListener('mouseover', function(ev){
    if (!pickerActive()) return;
    var result = closestTarget(ev);
    if (!result) return;
    var payload = targetFrom(result.target, commentEnabled && mode === 'picker' && !inspectEnabled);
    if (!payload || payload.elementId === hoveredId) return;
    hoveredId = payload.elementId;
    window.parent.postMessage(Object.assign({}, payload, { type: 'od:comment-hover' }), '*');
  }, true);
  document.addEventListener('mouseout', function(ev){
    if (!pickerActive()) return;
    var result = closestTarget(ev);
    if (!result) return;
    var next = ev.relatedTarget;
    while (next && next !== document.documentElement) {
      if (next === result.target) return;
      next = next.parentElement;
    }
    hoveredId = null;
    window.parent.postMessage({ type: 'od:comment-leave' }, '*');
  }, true);
  document.addEventListener('click', function(ev){
    if (!pickerActive()) return;
    var result = closestTarget(ev);
    if (result) {
      ev.preventDefault();
      ev.stopPropagation();
      var commentPickerClick = commentEnabled && mode === 'picker' && !inspectEnabled;
      var clickPoint = commentPickerClick ? { x: ev.clientX, y: ev.clientY } : null;
      var payload = targetFrom(result.target, commentPickerClick, result.clicked, clickPoint);
      if (payload) {
        activeCommentElementId = payload.elementId || activeCommentElementId;
        activeCommentSelector = payload.selector || activeCommentSelector;
        window.parent.postMessage(payload, '*');
      }
      return;
    }
    // Free-pin fallback (comment mode only). Lets users drop a comment
    // at a click location even when the artifact has no data-od-id
    // annotations. Skipped for pod mode (drawing) and inspect mode
    // (needs a real selector for live overrides).
    if (!canUseDomFallback() || mode === 'pod') return;
    // Skip clicks on interactive elements so links / buttons / inputs
    // keep their native behavior; pin only on inert surfaces.
    var t = ev.target;
    var walk = t && t.nodeType === 1 ? t : null;
    while (walk && walk !== document.documentElement) {
      var tag = walk.tagName;
      if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'LABEL') return;
      if (walk.isContentEditable) return;
      walk = walk.parentElement;
    }
    ev.preventDefault();
    ev.stopPropagation();
    // Store viewport coordinates to match regular getBoundingClientRect()
    // element targets; the host overlay renders this position directly.
    var pinX = Math.round(ev.clientX);
    var pinY = Math.round(ev.clientY);
    var pinId = 'pin-' + Date.now().toString(36) + '-' + Math.floor(Math.random() * 1e6).toString(36);
    var pinSlideIndex = deckSlideIndexForPayload();
    var pinPayload = {
      type: 'od:comment-target',
      // Synthetic selector / label so daemon upsert validation (which
      // requires both to be non-empty) accepts the saved free-pin.
      selector: '[data-od-pin="' + pinId + '"]',
      label: 'pin',
      text: '',
      position: { x: pinX - 12, y: pinY - 12, width: 24, height: 24 },
      hoverPoint: { x: pinX, y: pinY },
      htmlHint: '',
      style: null,
      freePin: true
    };
    pinPayload.elementId = pinId;
    if (typeof pinSlideIndex === 'number') pinPayload.slideIndex = pinSlideIndex;
    window.parent.postMessage(pinPayload, '*');
  }, true);
  // Pod drawing — only active in comment mode with the 'pod' tool.
  document.addEventListener('pointerdown', function(ev){
    if (!commentEnabled || mode !== 'pod' || ev.button !== 0) return;
    drawing = true;
    stroke = [relativePoint(ev)];
    ev.preventDefault();
    ev.stopPropagation();
    postStroke('od:pod-stroke');
  }, true);
  document.addEventListener('pointermove', function(ev){
    if (!drawing || mode !== 'pod') return;
    var point = relativePoint(ev);
    var last = stroke[stroke.length - 1];
    if (last && Math.hypot(last.x - point.x, last.y - point.y) < 4) return;
    stroke.push(point);
    ev.preventDefault();
    ev.stopPropagation();
    schedulePostStroke();
  }, true);
  function finishStroke(ev){
    if (!drawing || mode !== 'pod') return;
    drawing = false;
    if (strokeFrame !== null) { cancelAnimationFrame(strokeFrame); strokeFrame = null; }
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    postStroke('od:pod-select');
  }
  document.addEventListener('pointerup', finishStroke, true);
  document.addEventListener('pointercancel', finishStroke, true);
  window.addEventListener('resize', schedulePostTargets);
  document.addEventListener('scroll', function(){
    schedulePostActiveCommentTarget();
    schedulePostTargets();
    schedulePostPreviewScroll();
  }, true);
  var mo = new MutationObserver(schedulePostTargets);
  // childList only — NOT attributes/characterData. Re-walking every annotated
  // target on every attribute/text mutation made an animated artifact (inline
  // style/text changes per frame) churn schedulePostTargets continuously while
  // in comment/inspect mode. Structural changes (childList) still re-walk, and
  // scroll/resize already re-post geometry for layout shifts.
  mo.observe(document.documentElement, { subtree: true, childList: true });
  // The active comment marker still has to follow its own element's text and
  // attribute edits, but schedulePostActiveCommentTarget re-posts exactly ONE
  // element (the active comment), so it stays cheap even on animated artifacts —
  // unlike the full allTargets() re-walk above. This is why attributes/
  // characterData live on this targeted observer instead of the main observer.
  var textMo = new MutationObserver(schedulePostActiveCommentTarget);
  textMo.observe(document.documentElement, { subtree: true, characterData: true, attributes: true });
  // Reflect the host-requested initial modes on the documentElement so
  // the cursor/hover styles match what the bridge picks up on click.
  if (commentEnabled) document.documentElement.toggleAttribute('data-od-comment-mode', true);
  if (inspectEnabled) document.documentElement.toggleAttribute('data-od-inspect-mode', true);
  document.documentElement.setAttribute('data-od-comment-mode-kind', mode);
  hydrateOverridesFromDom();
  // Acknowledge the hydrated overrides to the host as a preview signal so
  // diagnostic listeners (and tests) can observe that the bridge is in sync
  // with the persisted style sheet. The host no longer treats this message
  // as save input — it parses the artifact source itself — but emitting it
  // keeps the iframe → host channel symmetric across set/reset/extract.
  if (Object.keys(overrides).length) setTimeout(postOverrides, 0);
  setTimeout(requestPreviewScrollRestore, 0);
  setTimeout(requestPreviewScrollRestore, 80);
  setTimeout(requestPreviewScrollRestore, 240);
  window.__odScheduleCommentTargets = schedulePostTargets;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', postTargets);
  else setTimeout(postTargets, 0);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', postPreviewScroll);
  else setTimeout(postPreviewScroll, 0);
})();</script>`;
    const style = `<style data-od-selection-bridge-style>
html[data-od-comment-mode] body * { cursor: crosshair !important; }
html[data-od-inspect-mode] body * { cursor: crosshair !important; }
html[data-od-comment-mode][data-od-comment-mode-kind="pod"] body * { cursor: cell !important; }
/* Nested iframes (e.g. shared device frames) consume clicks in their own browsing context.
   While picker modes are on, disable pointer events on outer-document iframes so the
   hit target resolves to an annotated ancestor (card, shell) in this document. */
html[data-od-comment-mode] body iframe,
html[data-od-inspect-mode] body iframe { pointer-events: none !important; }
</style>`;
    return injectBeforeBodyEnd(injectBeforeHeadEnd(doc, style), script);
}
// The deck bridge supports three deck conventions found across our skills
// and freeform-generated artifacts:
//   1. Horizontal scroll decks (simple-deck, guizang-ppt) — slides laid out
//      side-by-side, navigation = scrollTo({ left }).
//   2. Class-toggle decks (deck-framework, freeform pitches) — one slide
//      carries `.active` or `.is-active`; siblings are display:none. Their
//      own JS listens for ArrowRight/Left, so we drive them by dispatching
//      synthetic KeyboardEvents.
//   3. Visibility-only decks — no class toggle, slides hidden via inline
//      style. We fall back to keyboard dispatch + visibility detection.
//
// All three report `{ active, count }` back to the host so the toolbar can
// render a unified counter. A MutationObserver on each `.slide` lets us
// catch class changes from the deck's own keyboard handler.
//
// We also inject a small CSS override that fixes a common authoring
// mistake in fixed-canvas decks: a `.stage { display: grid; place-items:
// center }` only centers items within their grid cells, but the track
// itself stays `start`-aligned, so the 1920x1080 canvas top-lefts at
// (0,0) of the stage. Combined with `transform-origin: center center`,
// the scaled canvas ends up offset toward the bottom-right of any
// preview that's smaller than 1920x1080 — exactly what users see in the
// sandbox iframe. `place-content: center` centers the track itself.
//
// Framework decks (apps/daemon/src/prompts/deck-framework.ts) opt out:
// their `fit()` already centers a `transform-origin: top left` stage with
// an explicit `translate(tx, ty)` that assumes the stage's natural layout
// position is (0, 0). If we force `place-content: center` on their
// `.deck-shell` grid, the implicit track gets re-centered to
// ((sw-1920)/2, (sh-1080)/2) and `fit()`'s translate stacks on top, so
// the scaled stage lands ~1000px off-screen and the user sees a mostly-
// black preview with a sliver of slide content in the top-left. Skip the
// override whenever the framework's marker id is present.
function injectDeckBridge(doc, initialSlideIndex = 0) {
    const safeInitialSlideIndex = Number.isFinite(initialSlideIndex) ? Math.max(0, Math.floor(initialSlideIndex)) : 0;
    const isFrameworkDeck = /\bid\s*=\s*["']deck-stage["']/i.test(doc);
    const styleFix = isFrameworkDeck ? '' : `<style data-od-deck-fix>
.stage, .deck-stage, .deck-shell { place-content: center !important; }
</style>`;
    const script = `<script data-od-deck-bridge>(function(){
  var initialSlideIndex = ${safeInitialSlideIndex};
  var didRestoreInitialSlide = initialSlideIndex <= 0;
  function slides(){
    // Structured selectors first so decorative .slide markup in non-deck
    // pages (icons, badges, code samples) is not counted as deck slides;
    // fall back to all .slide only when nothing structured matched, so
    // freeform decks that nest slides under an extra wrapper still report
    // the real count instead of leaving the host counter at 1 / 0.
    var structured = document.querySelectorAll('.deck > .slide, .deck-stage > .slide, .deck-shell > .slide, body > .slide');
    if (structured.length) return structured;
    return document.querySelectorAll('.slide');
  }
  function scrollOverflow(el){
    if (!el) return 0;
    return Math.max(0, (el.scrollWidth || 0) - (el.clientWidth || 0));
  }
  function overflowMode(el){
    if (!el || !window.getComputedStyle) return '';
    try {
      return String(window.getComputedStyle(el).overflowX || '').toLowerCase();
    } catch (_) {
      return '';
    }
  }
  function isScrollableOverflowMode(mode){
    return mode === 'auto' || mode === 'scroll' || mode === 'overlay';
  }
  function isClippedOverflowMode(mode){
    return mode === 'hidden' || mode === 'clip';
  }
  function isRootScrollContainer(el){
    return !!el && (
      el === document.scrollingElement ||
      el === document.documentElement ||
      el === document.body
    );
  }
  function rootScrollerClipped(){
    return isClippedOverflowMode(overflowMode(document.documentElement)) ||
      isClippedOverflowMode(overflowMode(document.body));
  }
  function scrollLeftOf(el){
    if (!el) return 0;
    try {
      return Number(el.scrollLeft) || 0;
    } catch (_) {
      return 0;
    }
  }
  function scrollTargets(){
    var targets = [];
    function add(node){
      if (!node) return;
      for (var i=0; i<targets.length; i++) if (targets[i] === node) return;
      targets.push(node);
    }
    add(document.scrollingElement);
    add(document.documentElement);
    add(document.body);
    return targets;
  }
  function maxScrollLeft(){
    var targets = scrollTargets();
    var value = 0;
    for (var i=0; i<targets.length; i++) {
      value = Math.max(value, Number(targets[i].scrollLeft || 0));
    }
    return value;
  }
  function hasHorizontalScroll(){
    var targets = scrollTargets();
    for (var i=0; i<targets.length; i++) {
      if (targets[i].scrollWidth > targets[i].clientWidth + 1) return true;
    }
    return false;
  }
  function isScrollDeck(){
    var targets = scrollTargets();
    for (var i=0; i<targets.length; i++) {
      var candidate = targets[i];
      if (scrollOverflow(candidate) <= 1) continue;
      var mode = overflowMode(candidate);
      if (isScrollableOverflowMode(mode)) return true;
      if (isRootScrollContainer(candidate) && !isClippedOverflowMode(mode) && !rootScrollerClipped()) return true;
    }
    return false;
  }
  function findActiveByClass(list){
    for (var i=0; i<list.length; i++) {
      var cl = list[i].classList;
      if (cl && (cl.contains('is-active') || cl.contains('active') || cl.contains('current'))) return i;
    }
    return -1;
  }
  function findActiveByVisibility(list){
    for (var i=0; i<list.length; i++) {
      try {
        var cs = window.getComputedStyle(list[i]);
        if (cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0') return i;
      } catch (_) {}
    }
    return -1;
  }
  function activeIndex(list){
    if (!list || !list.length) return 0;
    if (isScrollDeck()) {
      var w = Math.max(1, window.innerWidth);
      return Math.max(0, Math.min(list.length - 1, Math.round(maxScrollLeft() / w)));
    }
    var byTransform = activeIndexFromTransform(list);
    if (byTransform >= 0) return byTransform;
    var byClass = findActiveByClass(list);
    if (byClass >= 0) return byClass;
    var byVis = findActiveByVisibility(list);
    if (byVis >= 0) return byVis;
    return 0;
  }
  function dispatchKey(key){
    // Try window first: many deck frameworks listen on both window and
    // document in capture phase for iframe focus resilience. Dispatching a
    // bubbling event at document hits the document listener and then the
    // window listener, turning one host "next" request into two slide moves.
    var init = { key: key, code: key, bubbles: true, cancelable: true, composed: true };
    var before = activeIndex(slides());
    try {
      window.dispatchEvent(new KeyboardEvent('keydown', init));
      window.dispatchEvent(new KeyboardEvent('keyup', init));
    } catch (_) {}
    if (activeIndex(slides()) !== before) return;
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', init));
      document.dispatchEvent(new KeyboardEvent('keyup', init));
    } catch (_) {}
  }
  function pad2(n){ return (n < 10 ? '0' : '') + n; }
  function activeClassName(list){
    var names = ['active', 'is-active', 'current'];
    for (var n=0; n<names.length; n++) {
      for (var i=0; i<list.length; i++) {
        if (list[i].classList && list[i].classList.contains(names[n])) return names[n];
      }
    }
    return 'active';
  }
  function hasComputedHiddenSibling(list, active){
    if (active < 0) return false;
    for (var i=0; i<list.length; i++) {
      if (i === active) continue;
      try {
        var cs = window.getComputedStyle(list[i]);
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return true;
      } catch (_) {}
    }
    return false;
  }
  function canSetActive(list){
    // A bare active-class marker is not enough to prove the host can drive the
    // deck by class mutation alone. Many generated decks keep that marker in
    // sync for counters / dots but move the visible slide via a translated
    // stage or track, so flipping classes in the host bridge updates the
    // reported slide index while leaving the canvas on the old page. Only
    // treat class-driven decks as directly mutable when inactive siblings are
    // actually hidden by computed visibility rules.
    var active = findActiveByClass(list);
    if (active >= 0 && hasComputedHiddenSibling(list, active)) return true;
    for (var i=0; i<list.length; i++) {
      if (list[i].style.display === 'none') return true;
      if (list[i].style.visibility === 'hidden') return true;
      if (list[i].hasAttribute('hidden')) return true;
    }
    return false;
  }
  function transformTrack(list){
    if (!list || !list.length) return null;
    var first = list[0];
    var node = first && first.parentElement;
    while (node && node !== document.body && node !== document.documentElement) {
      try {
        var directSlides = 0;
        for (var i=0; i<node.children.length; i++) {
          if (node.children[i].classList && node.children[i].classList.contains('slide')) directSlides += 1;
        }
        var style = window.getComputedStyle(node);
        if (
          directSlides >= list.length &&
          (
            node.style.transform ||
            style.transform !== 'none' ||
            /\\b(?:flex|grid)\\b/i.test(style.display)
          )
        ) {
          return node;
        }
      } catch (_) {}
      node = node.parentElement;
    }
    return null;
  }
  function activeIndexFromTransform(list){
    var track = transformTrack(list);
    if (!track) return -1;
    var raw = track.style.transform || '';
    var match = raw.match(/translateX\\(\\s*(-?[0-9.]+)\\s*(vw|%)\\s*\\)/i);
    if (!match) return -1;
    var value = parseFloat(match[1]);
    if (!Number.isFinite(value)) return -1;
    return Math.max(0, Math.min(list.length - 1, Math.round(Math.abs(value) / 100)));
  }
  function transformGo(i){
    var list = slides();
    var track = transformTrack(list);
    if (!track) return false;
    var target = Math.max(0, Math.min(list.length - 1, i));
    var unit = /translateX\\(\\s*-?[0-9.]+\\s*%\\s*\\)/i.test(track.style.transform || '') ? '%' : 'vw';
    track.style.transform = 'translateX(' + (-target * 100) + unit + ')';
    updateDeckChrome(target, list.length);
    report();
    return true;
  }
  function updateDeckChrome(i, count){
    var cur = document.getElementById('deck-cur');
    var total = document.getElementById('deck-total');
    var prev = document.getElementById('deck-prev');
    var next = document.getElementById('deck-next');
    if (cur) cur.textContent = pad2(i + 1);
    if (total) total.textContent = pad2(count);
    if (prev) prev.toggleAttribute('disabled', i <= 0);
    if (next) next.toggleAttribute('disabled', i >= count - 1);
  }
  function setActive(i){
    var list = slides();
    if (!list.length) return false;
    var target = Math.max(0, Math.min(list.length - 1, i));
    var activeClass = activeClassName(list);
    var usesInlineDisplay = false;
    var usesInlineVisibility = false;
    var usesHidden = false;
    // Many reveal-animation decks (the frontend-slides family) gate their
    // staggered entrances on a SEPARATE \`.visible\` class — \`.slide.visible
    // .reveal { opacity: 1 }\` — that the deck's own show() adds alongside
    // \`.active\`. Driving navigation by flipping only the active class shows
    // the slide chrome but leaves every .reveal child stuck at opacity:0, so
    // the body renders blank. Mirror \`.visible\` in lock-step with the active
    // slide (only for decks that actually use it, so it is a no-op elsewhere).
    var usesVisibleClass = false;
    for (var j=0; j<list.length; j++) {
      usesInlineDisplay = usesInlineDisplay || list[j].style.display === 'none';
      usesInlineVisibility = usesInlineVisibility || list[j].style.visibility === 'hidden';
      usesHidden = usesHidden || list[j].hasAttribute('hidden');
      usesVisibleClass = usesVisibleClass || (list[j].classList && list[j].classList.contains('visible'));
    }
    for (var k=0; k<list.length; k++) {
      if (list[k].classList) {
        list[k].classList.remove('active', 'is-active', 'current');
        if (k === target) list[k].classList.add(activeClass);
        if (usesVisibleClass) list[k].classList.toggle('visible', k === target);
      }
      if (usesHidden) {
        if (k === target) list[k].removeAttribute('hidden');
        else list[k].setAttribute('hidden', '');
      }
      if (usesInlineDisplay && list[k].style) {
        list[k].style.display = k === target ? '' : 'none';
      }
      if (usesInlineVisibility && list[k].style) {
        list[k].style.visibility = k === target ? '' : 'hidden';
      }
    }
    updateDeckChrome(target, list.length);
    report();
    return true;
  }
  function scrollGo(i){
    var list = slides();
    var next = Math.max(0, Math.min(list.length - 1, i));
    var left = next * window.innerWidth;
    var targets = scrollTargets();
    for (var t=0; t<targets.length; t++) {
      try {
        targets[t].scrollTo({ left: left, behavior: 'smooth' });
      } catch (_) {
        try { targets[t].scrollLeft = left; } catch (__) {}
      }
    }
    setTimeout(report, 380);
  }
  function targetFor(action, list){
    var i = activeIndex(list);
    if (action === 'next') return i + 1;
    if (action === 'prev') return i - 1;
    if (action === 'first') return 0;
    if (action === 'last') return list.length - 1;
    return i;
  }
  function go(action){
    var list = slides();
    if (!list.length) return;
    var target = Math.max(0, Math.min(list.length - 1, targetFor(action, list)));
    if (isScrollDeck()) {
      scrollGo(target);
      return;
    }
    if (canSetActive(list) && setActive(target)) return;
    if (transformGo(target)) return;
    if (action === 'next') dispatchKey('ArrowRight');
    else if (action === 'prev') dispatchKey('ArrowLeft');
    else if (action === 'first') dispatchKey('Home');
    else if (action === 'last') dispatchKey('End');
    setTimeout(report, 280);
  }
  function gotoIndex(i){
    var list = slides();
    if (!list.length) return;
    var target = Math.max(0, Math.min(list.length - 1, i));
    if (isScrollDeck()) { scrollGo(target); return; }
    if (canSetActive(list) && setActive(target)) return;
    if (transformGo(target)) return;
    var current = activeIndex(list);
    var diff = target - current;
    if (!diff) { report(); return; }
    var key = diff > 0 ? 'ArrowRight' : 'ArrowLeft';
    var n = Math.abs(diff);
    for (var k = 0; k < n; k++) dispatchKey(key);
    setTimeout(report, 320);
  }
  var lastCommentTargetSlideIndex = -1;
  function report(){
    try {
      var list = slides();
      var i = activeIndex(list);
      var count = list.length;
      var progressWidth = count ? ((i + 1) / count * 100) + '%' : '0';
      window.parent.postMessage({
        type: 'od:slide-state',
        active: i,
        count: count,
      }, '*');
      document.querySelectorAll('.slide-number').forEach(function(el){
        el.setAttribute('data-current',i+1); el.setAttribute('data-total',count);
      });
      document.querySelectorAll('.progress-bar>span,.deck-progress>span,.deck-progress .bar').forEach(function(el){
        el.style.width=progressWidth;
      });
      document.querySelectorAll('.deck-progress').forEach(function(el){
        if (el.querySelector('span,.bar')) return;
        el.style.width=progressWidth;
      });
      if (i !== lastCommentTargetSlideIndex) {
        lastCommentTargetSlideIndex = i;
        try {
          if (typeof window.__odScheduleCommentTargets === 'function') window.__odScheduleCommentTargets();
        } catch (_) {}
      }
    } catch (e) {}
  }
  window.__odDeckSlideState = function(){
    var list = slides();
    return { active: activeIndex(list), count: list.length };
  };
  function restoreInitialSlide(){
    if (didRestoreInitialSlide) { report(); return; }
    var list = slides();
    if (!list.length) return;
    didRestoreInitialSlide = true;
    gotoIndex(initialSlideIndex);
  }
  window.addEventListener('message', function(ev){
    var data = ev && ev.data;
    if (!data || data.type !== 'od:slide') return;
    if (data.action === 'go' && typeof data.index === 'number') gotoIndex(data.index);
    else go(data.action);
  });
  function ownDeckButton(id, action){
    var btn = document.getElementById(id);
    if (!btn || btn.__odDeckOwned) return;
    btn.__odDeckOwned = true;
    btn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      go(action);
    }, true);
  }
  ownDeckButton('deck-prev', 'prev');
  ownDeckButton('deck-next', 'next');
  // Report once on load and on every scroll-end so the host stays in sync.
  window.addEventListener('load', function(){ setTimeout(restoreInitialSlide, 200); });
  document.addEventListener('scroll', function(){
    clearTimeout(window.__odReportT);
    window.__odReportT = setTimeout(report, 120);
  }, { passive: true, capture: true });
  // Nudge the deck's own fit/resize listener after layout settles. Fixed-canvas
  // decks (e.g. ".canvas { width: 1920px }" + "transform: scale(...)") compute
  // their scale on first run, which fires when the iframe is still 0x0 in
  // sandboxed previews — the deck's fit() then resolves to scale(0) / scale(1)
  // and never recovers. Re-firing 'resize' lets the deck recompute, and a
  // ResizeObserver picks up later layout settles (zoom toggle, sidebar drag).
  function nudgeResize(){
    try { window.dispatchEvent(new Event('resize')); }
    catch (_) {}
  }
  // Aggressively nudge during the first second so the deck catches the
  // iframe's first non-zero size; bail out early once the iframe reports a
  // real width. Without this loop, fixed-canvas decks render at scale(0).
  function chaseFirstLayout(){
    var attempts = 0;
    function tick(){
      attempts += 1;
      var w = window.innerWidth;
      nudgeResize();
      if (w > 0 && attempts >= 2) return; // one extra nudge after first non-zero
      if (attempts < 30) setTimeout(tick, 50);
    }
    tick();
  }
  if (document.readyState === 'complete') chaseFirstLayout();
  else window.addEventListener('load', chaseFirstLayout);
  // Re-nudge whenever the iframe itself is resized by the host (e.g.
  // user toggles zoom, resizes the chat sidebar, exits Present).
  if (typeof ResizeObserver !== 'undefined') {
    try {
      var ro = new ResizeObserver(function(){ nudgeResize(); });
      ro.observe(document.documentElement);
    } catch (_) {}
  }
  // For class-toggle decks the deck's own keyboard handler updates classes
  // on the slide elements; an attribute observer translates that into the
  // host counter without depending on scroll events.
  function observeSlides(){
    var list = slides();
    if (!list.length) { setTimeout(observeSlides, 150); return; }
    try {
      var mo = new MutationObserver(function(){
        clearTimeout(window.__odReportT2);
        window.__odReportT2 = setTimeout(report, 60);
      });
      for (var i = 0; i < list.length; i++) {
        mo.observe(list[i], { attributes: true, attributeFilter: ['class', 'style', 'hidden', 'aria-hidden'] });
      }
    } catch (e) {}
    setTimeout(restoreInitialSlide, 100);
  }
  observeSlides();
})();</script>`;
    return injectBeforeBodyEnd(injectBeforeHeadEnd(doc, styleFix), script);
}
// The tweaks bridge lets the host toolbar toggle the visibility of the artifact's
// native tweaks panel. Bidirectional: host posts `od:tweaks-panel-visible` to
// drive panel visibility; bridge posts `od:tweaks-panel-state` back whenever the
// artifact's own `× close` button or `T` shortcut flips the `.tw-hidden` class,
// so the toolbar toggle stays in sync. Also reports `od:tweaks-available` so the
// host can disable the toggle on artifacts without a `.tw-panel`.
function injectTweaksBridge(doc) {
    // Hide-state styling mirrors the artifact's own `.tw-hidden` (transform +
    // opacity) so the CSS transition plays in both directions. `.tw-restore` is
    // kept permanently hidden — the host toolbar is the only entry point.
    const style = `<style data-od-tweaks-bridge-style>
[data-od-tweaks-hidden] .tw-panel {
  transform: translateX(calc(100% + 32px)) !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
.tw-restore { display: none !important; }
</style>`;
    const script = `<script data-od-tweaks-bridge>(function(){
  // Synchronously hide BEFORE the artifact body parses so the panel never
  // flashes on initial paint. The host removes the attribute via postMessage
  // once it knows the desired state.
  document.documentElement.setAttribute('data-od-tweaks-hidden', '');

  var suppressEcho = false;
  var observer = null;

  function panelEl(){ return document.querySelector('.tw-panel'); }

  function applyClassesToPanel(visible){
    var panel = panelEl();
    if (panel) panel.classList.toggle('tw-hidden', !visible);
  }

  function setPanelVisible(visible){
    suppressEcho = true;
    document.documentElement.toggleAttribute('data-od-tweaks-hidden', !visible);
    applyClassesToPanel(visible);
    // Clear flag after the MutationObserver has had a chance to fire for this
    // change so we don't echo our own host-driven toggles back to the host.
    Promise.resolve().then(function(){ suppressEcho = false; });
  }

  function postState(){
    var panel = panelEl();
    if (!panel) return;
    try {
      parent.postMessage({
        type: 'od:tweaks-panel-state',
        visible: !panel.classList.contains('tw-hidden'),
      }, '*');
    } catch (e) {}
  }

  function postAvailability(){
    try {
      parent.postMessage({
        type: 'od:tweaks-available',
        available: !!panelEl(),
      }, '*');
    } catch (e) {}
  }

  function attachObserver(){
    var panel = panelEl();
    if (!panel || observer) return;
    observer = new MutationObserver(function(){
      if (suppressEcho) return;
      postState();
    });
    observer.observe(panel, { attributes: true, attributeFilter: ['class'] });
  }

  function onReady(){
    // Capture the panel authored visibility BEFORE we apply the host hidden
    // attribute. The bridge sets data-od-tweaks-hidden synchronously in head
    // (before the body parses), so on entry to onReady the attribute is
    // always present even though the artifact may have authored the panel
    // as default-visible. Reading the panel class first is the only place
    // we can still observe the author intent. Then drive the attribute,
    // classes, and posted state from that captured value so a default
    // visible tw-panel reports visible:true and the toolbar toggle starts
    // ON. Issue surfaced in PR #1643 review.
    var panel = panelEl();
    var initialVisible = !!panel && !panel.classList.contains('tw-hidden');
    document.documentElement.toggleAttribute('data-od-tweaks-hidden', !initialVisible);
    applyClassesToPanel(initialVisible);
    attachObserver();
    postAvailability();
    // Post the captured initial visibility so the toolbar toggle reflects
    // the default state on mount. Without this the toggle reads OFF while
    // a default-visible tw-panel artifact clearly shows its panel and the
    // user would have to click toggle-on then toggle-off to actually hide.
    postState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  window.addEventListener('message', function(ev){
    if (!ev.data || ev.data.type !== 'od:tweaks-panel-visible') return;
    setPanelVisible(!!ev.data.visible);
  });
})();</script>`;
    const withStyle = /<\/head>/i.test(doc) ? doc.replace(/<\/head>/i, style + '</head>') : /<head[^>]*>/i.test(doc) ? doc.replace(/<head[^>]*>/i, (m)=>m + style) : style + doc;
    // Inject the bridge as early as possible (inside <head>) so the synchronous
    // attribute set runs before the artifact body parses.
    if (/<\/head>/i.test(withStyle)) return withStyle.replace(/<\/head>/i, script + '</head>');
    if (/<head[^>]*>/i.test(withStyle)) return withStyle.replace(/<head[^>]*>/i, (m)=>m + script);
    return script + withStyle;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/react-component.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildReactComponentSrcdoc",
    ()=>buildReactComponentSrcdoc,
    "prepareReactComponentSource",
    ()=>prepareReactComponentSource
]);
const REACT_DEV_URL = 'https://unpkg.com/react@18/umd/react.development.js';
const REACT_DOM_DEV_URL = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
const BABEL_STANDALONE_URL = 'https://unpkg.com/@babel/standalone/babel.min.js';
function buildReactComponentSrcdoc(source, { title }) {
    const prepared = prepareReactComponentSource(source);
    const safeTitle = escapeHtml(title || 'React component');
    const sourceJson = JSON.stringify(prepared);
    return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      html, body, #root { min-height: 100%; margin: 0; }
      body {
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #fff;
        color: #111827;
      }
      #root { min-height: 100vh; }
      .od-react-error {
        margin: 16px;
        padding: 14px 16px;
        border: 1px solid #fecaca;
        border-radius: 8px;
        background: #fff1f2;
        color: #991b1b;
        font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="${REACT_DEV_URL}"></script>
    <script src="${REACT_DOM_DEV_URL}"></script>
    <script src="${BABEL_STANDALONE_URL}"></script>
    <script>
      (function(){
        var root = document.getElementById('root');
        function showError(err) {
          root.innerHTML = '';
          var el = document.createElement('pre');
          el.className = 'od-react-error';
          el.textContent = err && (err.stack || err.message) ? (err.stack || err.message) : String(err);
          root.appendChild(el);
        }
        if (!window.React || !window.ReactDOM || !window.Babel) {
          showError(new Error('React preview runtime failed to load.'));
          return;
        }
        var compiled;
        try {
          compiled = window.Babel.transform(${sourceJson}, {
            filename: 'artifact.tsx',
            presets: ['typescript', 'react'],
          }).code;
        } catch (err) {
          showError(err);
          return;
        }
        try {
          // User-authored JSX runs only inside this sandboxed iframe. The parent omits
          // allow-same-origin, so runtime effects are confined to the preview document.
          (0, eval)(compiled);
          var Component = window.__OpenDesignComponent ||
            (typeof App !== 'undefined' ? App : null) ||
            (typeof Component !== 'undefined' ? Component : null) ||
            (typeof Preview !== 'undefined' ? Preview : null);
          if (!Component) {
            throw new Error('No React component export found. Export a default component or define App, Component, or Preview.');
          }
          window.ReactDOM.createRoot(root).render(window.React.createElement(Component));
        } catch (err) {
          showError(err);
        }
      })();
    </script>
  </body>
</html>`;
}
function prepareReactComponentSource(source) {
    const withoutImports = transformImportDeclarations(source);
    const transformed = transformExports(withoutImports);
    return `${transformed.code}
window.__OpenDesignComponent = window.__OpenDesignComponent || (${componentFallbackExpression(transformed.defaultName)});`;
}
function transformImportDeclarations(source) {
    return source.replace(/^\s*import\s+type\s+[\s\S]*?\s+from\s+['"][^'"]+['"];?\s*$/gm, '').replace(/^\s*import\s+([\s\S]*?)\s+from\s+['"]react['"];?\s*$/gm, (_match, specifier)=>reactImportReplacement(specifier)).replace(/^\s*import\s+[\s\S]*?\s+from\s+['"][^'"]+['"];?\s*$/gm, '').replace(/^\s*import\s+['"][^'"]+['"];?\s*$/gm, '');
}
function reactImportReplacement(specifier) {
    const bindings = [];
    const trimmed = specifier.trim();
    const namespaceMatch = trimmed.match(/^\*\s+as\s+([A-Za-z_$][\w$]*)$/);
    const namespaceName = namespaceMatch?.[1];
    if (namespaceName) {
        bindings.push(`const ${namespaceName} = window.React;`);
        return bindings.join('\n');
    }
    const namedMatch = trimmed.match(/\{([\s\S]*)\}/);
    const namedPart = namedMatch?.[1]?.trim() ?? '';
    const defaultPart = trimmed.replace(/\{[\s\S]*\}/, '').replace(/,\s*$/, '').trim();
    if (defaultPart) bindings.push(`const ${defaultPart} = window.React;`);
    if (namedPart) {
        const namedBindings = namedPart.split(',').map((part)=>part.trim()).filter(Boolean).filter((part)=>!part.startsWith('type ')).map((part)=>part.replace(/\s+as\s+/g, ': ')).join(', ');
        if (namedBindings) bindings.push(`const { ${namedBindings} } = window.React;`);
    }
    return bindings.join('\n');
}
function transformExports(source) {
    let defaultName = null;
    let firstNamedExport = null;
    let code = source;
    code = code.replace(/export\s+default\s+function\s+([A-Za-z_$][\w$]*)?\s*\(/g, (_match, name)=>{
        defaultName = name || 'OpenDesignComponent';
        return `function ${defaultName}(`;
    });
    code = code.replace(/export\s+default\s+class\s+([A-Za-z_$][\w$]*)?\s*/g, (_match, name)=>{
        defaultName = name || 'OpenDesignComponent';
        return `class ${defaultName} `;
    });
    code = code.replace(/export\s+default\s+([A-Za-z_$][\w$]*)\s*;?/g, (_match, name)=>{
        defaultName = name;
        return '';
    });
    code = code.replace(/export\s+default\s+/g, ()=>{
        defaultName = 'OpenDesignComponent';
        return 'const OpenDesignComponent = ';
    });
    code = code.replace(/export\s+(const|let|var)\s+([A-Za-z_$][\w$]*)/g, (_match, kind, name)=>{
        firstNamedExport ||= name;
        return `${kind} ${name}`;
    });
    code = code.replace(/export\s+function\s+([A-Za-z_$][\w$]*)/g, (_match, name)=>{
        firstNamedExport ||= name;
        return `function ${name}`;
    });
    code = code.replace(/export\s+class\s+([A-Za-z_$][\w$]*)/g, (_match, name)=>{
        firstNamedExport ||= name;
        return `class ${name}`;
    });
    code = code.replace(/export\s*\{([^}]*)\};?/g, (_match, specifiers)=>{
        for (const rawSpecifier of specifiers.split(',')){
            const specifier = rawSpecifier.trim();
            const defaultMatch = specifier.match(/^([A-Za-z_$][\w$]*)\s+as\s+default$/);
            const reexportedDefaultName = defaultMatch?.[1];
            if (reexportedDefaultName) {
                defaultName = reexportedDefaultName;
                continue;
            }
            const namedMatch = specifier.match(/^([A-Za-z_$][\w$]*)(?:\s+as\s+[A-Za-z_$][\w$]*)?$/);
            const exportedName = namedMatch?.[1];
            if (exportedName) firstNamedExport ||= exportedName;
        }
        return '';
    });
    code = code.replace(/export\s*\{[^}]*\};?/g, '');
    return {
        code,
        defaultName: defaultName || firstNamedExport
    };
}
function componentFallbackExpression(defaultName) {
    const names = [
        defaultName,
        'App',
        'Component',
        'Preview'
    ].filter((value, index, list)=>Boolean(value) && list.indexOf(value) === index);
    return names.map((name)=>`(typeof ${name} !== 'undefined' ? ${name} : null)`).concat('null').join(' || ');
}
function escapeHtml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/zip.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Minimal ZIP encoder, stored mode (no compression). Big enough for the
// "Download as ZIP" button — we only ever pack a handful of UTF-8 text files
// (HTML/CSS/JS/Markdown) totalling well under a few MB, so skipping deflate
// keeps the implementation small and dependency-free.
__turbopack_context__.s([
    "buildZip",
    ()=>buildZip
]);
const CRC_TABLE = (()=>{
    const t = new Array(256);
    for(let n = 0; n < 256; n++){
        let c = n;
        for(let k = 0; k < 8; k++){
            c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
        }
        t[n] = c >>> 0;
    }
    return t;
})();
function crc32(bytes) {
    let c = 0xffffffff;
    for(let i = 0; i < bytes.length; i++){
        c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ c >>> 8;
    }
    return (c ^ 0xffffffff) >>> 0;
}
function dosTime(d) {
    const time = (d.getHours() & 0x1f) << 11 | (d.getMinutes() & 0x3f) << 5 | Math.floor(d.getSeconds() / 2) & 0x1f;
    const date = (d.getFullYear() - 1980 & 0x7f) << 9 | (d.getMonth() + 1 & 0xf) << 5 | d.getDate() & 0x1f;
    return {
        time,
        date
    };
}
function buildZip(entries) {
    const enc = new TextEncoder();
    const now = dosTime(new Date());
    const localChunks = [];
    const centralChunks = [];
    let offset = 0;
    let centralSize = 0;
    for (const entry of entries){
        const nameBytes = enc.encode(entry.path);
        const dataBytes = enc.encode(entry.content);
        const crc = crc32(dataBytes);
        const size = dataBytes.length;
        // Local file header (30 bytes + name).
        const local = new Uint8Array(30 + nameBytes.length);
        const lv = new DataView(local.buffer);
        lv.setUint32(0, 0x04034b50, true); // signature
        lv.setUint16(4, 20, true); // version needed
        lv.setUint16(6, 0, true); // flags
        lv.setUint16(8, 0, true); // method: stored
        lv.setUint16(10, now.time, true); // mod time
        lv.setUint16(12, now.date, true); // mod date
        lv.setUint32(14, crc, true); // crc-32
        lv.setUint32(18, size, true); // compressed size
        lv.setUint32(22, size, true); // uncompressed size
        lv.setUint16(26, nameBytes.length, true);
        lv.setUint16(28, 0, true);
        local.set(nameBytes, 30);
        localChunks.push(local, dataBytes);
        // Central directory header (46 bytes + name).
        const central = new Uint8Array(46 + nameBytes.length);
        const cv = new DataView(central.buffer);
        cv.setUint32(0, 0x02014b50, true); // signature
        cv.setUint16(4, 20, true); // version made by
        cv.setUint16(6, 20, true); // version needed
        cv.setUint16(8, 0, true); // flags
        cv.setUint16(10, 0, true); // method
        cv.setUint16(12, now.time, true);
        cv.setUint16(14, now.date, true);
        cv.setUint32(16, crc, true);
        cv.setUint32(20, size, true);
        cv.setUint32(24, size, true);
        cv.setUint16(28, nameBytes.length, true);
        cv.setUint16(30, 0, true); // extra len
        cv.setUint16(32, 0, true); // comment len
        cv.setUint16(34, 0, true); // disk number
        cv.setUint16(36, 0, true); // internal attrs
        cv.setUint32(38, 0, true); // external attrs
        cv.setUint32(42, offset, true); // relative offset of local header
        central.set(nameBytes, 46);
        centralChunks.push(central);
        offset += local.length + dataBytes.length;
        centralSize += central.length;
    }
    // End of central directory record.
    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);
    // Concatenate into one buffer rather than passing Uint8Arrays straight to
    // the Blob constructor — the Blob lib types now reject Uint8Array<...>
    // in some TS configurations.
    const totalSize = localChunks.reduce((n, c)=>n + c.length, 0) + centralChunks.reduce((n, c)=>n + c.length, 0) + eocd.length;
    const out = new Uint8Array(totalSize);
    let p = 0;
    for (const c of localChunks){
        out.set(c, p);
        p += c.length;
    }
    for (const c of centralChunks){
        out.set(c, p);
        p += c.length;
    }
    out.set(eocd, p);
    return new Blob([
        out.buffer
    ], {
        type: 'application/zip'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/exports.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "archiveFilenameFrom",
    ()=>archiveFilenameFrom,
    "archiveRootFromFilePath",
    ()=>archiveRootFromFilePath,
    "buildDesignHandoffContent",
    ()=>buildDesignHandoffContent,
    "buildDesignManifestContent",
    ()=>buildDesignManifestContent,
    "buildSandboxedPreviewDocument",
    ()=>buildSandboxedPreviewDocument,
    "captureHostIframeSnapshot",
    ()=>captureHostIframeSnapshot,
    "captureHostRegionSnapshot",
    ()=>captureHostRegionSnapshot,
    "copyImageDataUrlToClipboard",
    ()=>copyImageDataUrlToClipboard,
    "downloadImageDataUrl",
    ()=>downloadImageDataUrl,
    "exportAsHtml",
    ()=>exportAsHtml,
    "exportAsImage",
    ()=>exportAsImage,
    "exportAsJsx",
    ()=>exportAsJsx,
    "exportAsMd",
    ()=>exportAsMd,
    "exportAsPdf",
    ()=>exportAsPdf,
    "exportAsZip",
    ()=>exportAsZip,
    "exportProjectAsHtml",
    ()=>exportProjectAsHtml,
    "exportProjectAsPdf",
    ()=>exportProjectAsPdf,
    "exportProjectAsZip",
    ()=>exportProjectAsZip,
    "exportReactComponentAsHtml",
    ()=>exportReactComponentAsHtml,
    "exportReactComponentAsZip",
    ()=>exportReactComponentAsZip,
    "imageDataUrlToBlob",
    ()=>imageDataUrlToBlob,
    "isUsablePrintSize",
    ()=>isUsablePrintSize,
    "openSandboxedPreviewInNewTab",
    ()=>openSandboxedPreviewInNewTab,
    "prepareImageExportTarget",
    ()=>prepareImageExportTarget,
    "reportPrintSizeWhenStable",
    ()=>reportPrintSizeWhenStable,
    "requestPreviewSnapshot",
    ()=>requestPreviewSnapshot,
    "requestPreviewSnapshotResult",
    ()=>requestPreviewSnapshotResult
]);
// Client-side export helpers used by the Share menu in the HTML viewer.
// Four of the five formats run entirely in the browser:
//   - PDF  : open the artifact in a popup window and trigger window.print().
//            The user picks "Save as PDF" from the system print dialog.
//   - HTML : download the artifact as a single .html file via a Blob URL.
//   - ZIP  : pack the artifact with a coding handoff guide (see ./zip.ts).
//   - MD   : download the artifact's source verbatim with a `.md` extension
//            so it can be ingested by markdown-aware tooling (LLM context
//            windows, vault apps, etc.). No conversion is performed — the
//            file content is the same source the Source view shows. See
//            issue #279.
// PPTX export is fundamentally different — it asks the agent to convert the
// artifact server-side, so it lives in ProjectView.tsx (not here).
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/srcdoc.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$react$2d$component$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/react-component.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$zip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/zip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/utils/uuid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/host/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const DESIGN_HANDOFF_FILENAME = 'DESIGN-HANDOFF.md';
const DESIGN_MANIFEST_FILENAME = 'DESIGN-MANIFEST.json';
function safeFilename(name, fallback) {
    const slug = (name || fallback).replace(/[^\w.\-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
    return slug || fallback;
}
function triggerHrefDownload(href, filename) {
    const a = document.createElement('a');
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    triggerHrefDownload(url, filename);
    // Revoke later — Safari sometimes hasn't finished reading the blob yet
    // when the click handler returns.
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
}
function exportAsHtml(html, title) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrcdoc"])(html);
    const blob = new Blob([
        doc
    ], {
        type: 'text/html;charset=utf-8'
    });
    triggerDownload(blob, `${safeFilename(title, 'artifact')}.html`);
}
async function exportProjectAsHtml(opts) {
    const segments = opts.filePath.split('/').filter(Boolean).map((segment)=>encodeURIComponent(segment)).join('/');
    const url = `/api/projects/${encodeURIComponent(opts.projectId)}/export/${segments}?inline=1`;
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`html export request failed (${resp.status})`);
        const blob = await resp.blob();
        triggerDownload(blob, `${safeFilename(opts.fallbackTitle, 'artifact')}.html`);
    } catch (err) {
        console.warn('[exportProjectAsHtml] falling back to source HTML export:', err);
        exportAsHtml(opts.fallbackHtml, opts.fallbackTitle);
    }
}
// A file is treated as a preview-chrome wrapper only when it lives inside
// a frames/ or device-frames/ directory, or its filename is an unambiguous
// wrapper template (browser-chrome.html, device-frame.html).  Filenames
// like phone.html or iphone-upgrade.html are legitimate product-screen
// deliverables and must not be dropped from manifest screens.
const FRAME_WRAPPER_FILE_RE = /(^|\/)(frames?\/|device-frames?\/)|(^|\/)(browser-chrome|device-frame)\.html?$/i;
function isFrameWrapperHtmlFile(file) {
    return FRAME_WRAPPER_FILE_RE.test(file);
}
function designFileMap(entryFile, files) {
    const all = Array.from(new Set([
        entryFile,
        ...files ?? []
    ])).sort((a, b)=>a.localeCompare(b));
    const htmlFiles = all.filter((name)=>/\.html?$/i.test(name));
    const screenHtmlFiles = htmlFiles.filter((name)=>!isFrameWrapperHtmlFile(name));
    const cssFiles = all.filter((name)=>/\.css$/i.test(name));
    const jsFiles = all.filter((name)=>/\.[cm]?[jt]sx?$/i.test(name));
    const assetFiles = all.filter((name)=>!htmlFiles.includes(name) && !cssFiles.includes(name) && !jsFiles.includes(name));
    const preferredEntryFile = !isFrameWrapperHtmlFile(entryFile) ? entryFile : screenHtmlFiles.find((name)=>/(^|\/)index\.html$/i.test(name)) || screenHtmlFiles[0] || entryFile;
    return {
        files: all,
        htmlFiles,
        screenHtmlFiles,
        cssFiles,
        jsFiles,
        assetFiles,
        entryFile: preferredEntryFile
    };
}
function buildDesignManifestContent(opts) {
    const title = opts.title || 'Open Design artifact';
    const requestedEntryFile = opts.entryFile || 'index.html';
    const { files, htmlFiles, screenHtmlFiles, cssFiles, jsFiles, assetFiles, entryFile } = designFileMap(requestedEntryFile, opts.files);
    const screenFiles = screenHtmlFiles.length > 0 ? screenHtmlFiles : [
        entryFile
    ];
    return JSON.stringify({
        schema: 'open-design.design-manifest.v1',
        title,
        kind: opts.kind ?? 'html',
        entryFile,
        sourceFiles: {
            all: files,
            html: htmlFiles,
            css: cssFiles,
            scriptsAndComponents: jsFiles,
            assets: assetFiles
        },
        screens: screenFiles.map((file)=>{
            const isIndex = /(^|\/)index\.html?$/i.test(file);
            const isLanding = /(^|\/)(landing|marketing)\.html?$/i.test(file) || /landing|marketing/i.test(file);
            const isOsWidget = /widget|live-activity|lock-screen|home-screen/i.test(file);
            const isApp = /app|dashboard|workspace|generator|translator|editor|screen/i.test(file);
            return {
                file,
                role: isIndex && screenFiles.length > 1 ? 'launcher-overview' : isLanding ? 'landing-page' : isOsWidget ? 'os-widget-surface' : isApp ? 'product-screen' : 'screen',
                implementationNote: isIndex && screenFiles.length > 1 ? 'Use this as the navigation/overview entry only; implement each linked screen file as its own route/surface.' : 'Preserve visual hierarchy, responsive behavior, and interactive states from this screen.'
            };
        }),
        screenFilePolicy: {
            mode: 'screen-file-first',
            entryFileRole: screenFiles.length > 1 && /(^|\/)index\.html?$/i.test(entryFile) ? 'launcher-overview' : 'primary-screen',
            rules: [
                'Each distinct user-facing screen or surface must be delivered and implemented as its own file/route.',
                'If a landing page is present or requested, keep it in landing.html and do not merge it into the product app screen.',
                'When multiple HTML screens exist, index.html is a launcher/overview only; it must not be treated as the combined final UI.',
                'Keep product app screens, landing pages, platform screens, and OS widget surfaces separate in production code.'
            ]
        },
        appModules: [
            'Identify domain-specific in-app modules from the exported UI; do not reduce them to generic cards.',
            'For each major module, implement purpose, default/loading/empty/error/success states, and responsive behavior.',
            'Keep app modules separate from OS home-screen widgets in the production component model.'
        ],
        osWidgets: [
            'If the export includes home-screen, lock-screen, Live Activity, tablet glance, or Android widget surfaces, implement them as platform quick-access surfaces outside the app UI.',
            'If none are present, do not invent OS widgets unless the product requirements request them.'
        ],
        landingPage: {
            detection: 'Inspect files and screen names for a marketing/landing page surface. If present, keep it separate from product app screens.',
            requiredSections: [
                'hero',
                'value props',
                'product proof/screenshots',
                'feature proof',
                'CTA'
            ]
        },
        tokens: {
            source: cssFiles.length > 0 ? cssFiles : [
                entryFile
            ],
            required: [
                'background',
                'surface',
                'foreground',
                'muted text',
                'border',
                'accent',
                'radius',
                'shadow',
                'spacing',
                'type scale',
                'motion'
            ],
            note: 'Extract/freeze tokens before framework implementation so coding tools do not substitute default theme colors or typography.'
        },
        interactions: {
            source: jsFiles.length > 0 ? jsFiles : [
                entryFile
            ],
            requiredStates: [
                'default',
                'hover',
                'focus',
                'active',
                'disabled',
                'loading',
                'empty',
                'error',
                'success'
            ],
            requiredBehaviors: [
                'forms/validation where present',
                'tabs/filters where present',
                'dialogs/sheets/drawers where present',
                'copy/generate/share actions where present',
                'player or quick controls where present'
            ],
            note: 'If the prototype is static, derive missing behavior from visible controls and document it before coding.'
        },
        responsiveViewports: [
            {
                name: 'mobile-compact',
                width: 360,
                height: 800,
                category: 'mobile',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'mobile-standard',
                width: 390,
                height: 844,
                category: 'mobile',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'mobile-large',
                width: 430,
                height: 932,
                category: 'mobile',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'foldable-small-tablet',
                width: 600,
                height: 960,
                category: 'foldable-tablet',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'tablet-portrait',
                width: 820,
                height: 1180,
                category: 'tablet',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'tablet-landscape',
                width: 1024,
                height: 768,
                category: 'tablet',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'laptop',
                width: 1366,
                height: 768,
                category: 'desktop',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'desktop',
                width: 1440,
                height: 900,
                category: 'desktop',
                mustAvoidHorizontalScroll: true
            },
            {
                name: 'wide',
                width: 1920,
                height: 1080,
                category: 'wide',
                mustAvoidHorizontalScroll: true
            }
        ],
        implementationChecklist: [
            'Open entryFile first and map screens, modules, tokens, and interactions.',
            'Extract tokens before writing framework components.',
            'Implement app-specific modules with real states instead of generic card grids.',
            'Preserve or rebuild JS interactions for meaningful UX actions.',
            'Validate screenshots at desktop/tablet/mobile viewports with no horizontal overflow.',
            'Keep landing pages, in-app modules, and OS widgets as separate implementation surfaces.'
        ]
    }, null, 2);
}
function buildDesignHandoffContent(opts) {
    const title = opts.title || 'Open Design artifact';
    const requestedEntryFile = opts.entryFile || 'index.html';
    const { files, htmlFiles, cssFiles, jsFiles, assetFiles, entryFile } = designFileMap(requestedEntryFile, opts.files);
    const accentLikelyBrandLed = files.some((name)=>/(design|brand|tokens?|theme|style|tailwind|variables)\.(css|scss|sass|less|json|ts|tsx|js|jsx|md)$/i.test(name)) || cssFiles.length > 0;
    const hasResponsiveClues = htmlFiles.length > 0 || cssFiles.length > 0 || files.some((name)=>/(screens?|pages?|components?|app|src)\//i.test(name));
    const list = (items)=>items.length > 0 ? items.map((name)=>`- \`${name}\``).join('\n') : '- None detected';
    const sourceNote = opts.kind === 'react' ? 'Use the exported React source as the component contract, then preserve the rendered visual behavior in the target app.' : `Start from \`${entryFile}\`, then preserve the visual system, responsive behavior, and interactions found in the exported files.`;
    return `# ${title} implementation handoff

This archive is the source of truth for turning the design into production code. ${sourceNote}

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of Open Design chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: \`${entryFile}\`
- HTML screens detected: ${htmlFiles.length}
- Stylesheets detected: ${cssFiles.length}
- Script/component files detected: ${jsFiles.length}
- Supporting assets detected: ${assetFiles.length}

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid \`clamp()\` type/spacing, and container queries where component width matters more than viewport width. ${hasResponsiveClues ? 'Preserve any CSS media queries, container queries, fluid \`clamp()\` scales, and layout changes already present in the exported files.' : 'If responsive rules are not present in the export, add them in the target implementation before shipping.'}

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or Open Design chrome in the production UI.

## CJX-ready UX contract
- Use \`${DESIGN_MANIFEST_FILENAME}\` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat \`index.html\` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If \`landing.html\`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained \`${entryFile}\` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate \`css/\` or \`js/\` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- ${accentLikelyBrandLed ? 'A stylesheet or design/token file was detected; inspect it for canonical color variables before choosing framework theme tokens.' : 'No obvious token stylesheet was detected; sample colors from the entry file and convert them into named tokens before coding.'}

## Implementation sequence for AI coding tools
1. Open \`${entryFile}\` and \`${DESIGN_MANIFEST_FILENAME}\`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge \`landing.html\`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
${list(htmlFiles.length > 0 ? htmlFiles : [
        entryFile
    ])}

## Styles
${list(cssFiles)}

## Scripts/components
${list(jsFiles)}

## Assets and supporting files
${list(assetFiles)}

## Coding checklist for AI tools
1. Inspect \`${entryFile}\` and \`${DESIGN_MANIFEST_FILENAME}\` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
`;
}
function exportAsZip(html, title) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrcdoc"])(html);
    const slug = safeFilename(title, 'artifact');
    const blob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$zip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildZip"])([
        {
            path: `${slug}/index.html`,
            content: doc
        },
        {
            path: `${slug}/${DESIGN_HANDOFF_FILENAME}`,
            content: buildDesignHandoffContent({
                title: title || slug,
                entryFile: 'index.html',
                files: [
                    'index.html'
                ]
            })
        },
        {
            path: `${slug}/${DESIGN_MANIFEST_FILENAME}`,
            content: buildDesignManifestContent({
                title: title || slug,
                entryFile: 'index.html',
                files: [
                    'index.html'
                ]
            })
        }
    ]);
    triggerDownload(blob, `${slug}.zip`);
}
function exportAsMd(source, title) {
    // Pass-through download: the file body is the artifact source verbatim,
    // only the extension and Content-Type are flipped to markdown. No
    // HTML→markdown conversion happens here — users who pipe the file into
    // markdown-aware tooling (LLM context windows, vault apps) get the same
    // bytes the Source view displays.
    const blob = new Blob([
        source
    ], {
        type: 'text/markdown;charset=utf-8'
    });
    triggerDownload(blob, `${safeFilename(title, 'artifact')}.md`);
}
function requestPreviewSnapshotResult(iframe, timeout = 8000) {
    const win = iframe.contentWindow;
    if (!win) return Promise.resolve({
        ok: false,
        reason: 'loading'
    });
    const id = `snap-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    return new Promise((resolve)=>{
        let done = false;
        function onMsg(ev) {
            if (ev.source !== win) return;
            const d = ev.data;
            if (!d || d.type !== 'od:snapshot:result' || d.id !== id) return;
            if (done) return;
            done = true;
            window.removeEventListener('message', onMsg);
            if (d.dataUrl && d.w && d.h) resolve({
                ok: true,
                snapshot: {
                    dataUrl: d.dataUrl,
                    w: d.w,
                    h: d.h
                }
            });
            else resolve({
                ok: false,
                reason: 'render-error',
                error: d.error
            });
        }
        window.addEventListener('message', onMsg);
        try {
            win.postMessage({
                type: 'od:snapshot',
                id
            }, '*');
        } catch  {
            done = true;
            window.removeEventListener('message', onMsg);
            resolve({
                ok: false,
                reason: 'post-message-error'
            });
        }
        setTimeout(()=>{
            if (!done) {
                done = true;
                window.removeEventListener('message', onMsg);
                resolve({
                    ok: false,
                    reason: 'timeout'
                });
            }
        }, timeout);
    });
}
async function requestPreviewSnapshot(iframe, timeout = 8000) {
    const result = await requestPreviewSnapshotResult(iframe, timeout);
    return result.ok ? result.snapshot : null;
}
async function captureHostRegionSnapshot(clipRect) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])()) return null;
    const clip = clipRect && clipRect.width >= 1 && clipRect.height >= 1 ? {
        x: Math.max(0, Math.round(clipRect.left)),
        y: Math.max(0, Math.round(clipRect.top)),
        width: Math.max(1, Math.round(clipRect.width)),
        height: Math.max(1, Math.round(clipRect.height))
    } : undefined;
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureHostPage"])(clip ? {
            clip
        } : undefined);
        if (result.ok && result.dataUrl && result.w >= 1 && result.h >= 1) {
            return {
                dataUrl: result.dataUrl,
                w: result.w,
                h: result.h
            };
        }
    } catch  {
    /* fall through to null so the caller can use the bridge */ }
    return null;
}
async function captureHostIframeSnapshot(iframe) {
    if (!iframe) return null;
    const rect = iframe.getBoundingClientRect();
    return captureHostRegionSnapshot({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
    });
}
/** Convert a data-URL to a Blob without re-encoding through canvas. */ function dataUrlToBlob(dataUrl) {
    if (!dataUrl.startsWith('data:')) {
        throw new Error('Invalid data URL');
    }
    const [header, base64] = dataUrl.split(',');
    const mime = header?.match(/:(.*?);/)?.[1] ?? 'image/png';
    const bytes = atob(base64 ?? '');
    if (bytes.length <= 0) {
        throw new Error('Image snapshot is empty');
    }
    const arr = new Uint8Array(bytes.length);
    for(let i = 0; i < bytes.length; i++)arr[i] = bytes.charCodeAt(i);
    return new Blob([
        arr
    ], {
        type: mime
    });
}
async function copyImageDataUrlToClipboard(dataUrl) {
    const clipboard = navigator.clipboard;
    const ClipboardItemRef = globalThis.ClipboardItem;
    if (!clipboard || typeof clipboard.write !== 'function' || !ClipboardItemRef) {
        return 'denied';
    }
    try {
        const blob = dataUrlToBlob(dataUrl);
        // Safari only honours clipboard.write() inside the original user gesture,
        // so prefer the Promise<Blob> ClipboardItem form when supported — it lets
        // the browser resolve the blob lazily without losing the gesture context.
        let item;
        try {
            item = new ClipboardItemRef({
                [blob.type]: Promise.resolve(blob)
            });
        } catch  {
            item = new ClipboardItemRef({
                [blob.type]: blob
            });
        }
        await clipboard.write([
            item
        ]);
        return 'copied';
    } catch (err) {
        const name = err?.name;
        if (name === 'NotAllowedError' || name === 'SecurityError') {
            return 'denied';
        }
        return 'failed';
    }
}
const IMAGE_EXPORT_SPECS = {
    png: {
        extension: 'png',
        mime: 'image/png',
        pickerLabel: 'PNG image'
    },
    jpeg: {
        extension: 'jpg',
        mime: 'image/jpeg',
        pickerLabel: 'JPEG image'
    },
    webp: {
        extension: 'webp',
        mime: 'image/webp',
        pickerLabel: 'WebP image'
    }
};
function imageExportFilename(title, format) {
    const spec = IMAGE_EXPORT_SPECS[format];
    return `${safeFilename(title, 'artifact')}.${spec.extension}`;
}
function downloadImageExportTarget(filename) {
    return {
        filename,
        method: 'download',
        save: (blob)=>{
            triggerDownload(blob, filename);
        }
    };
}
function downloadImageDataUrl(dataUrl, filename) {
    // Validate the snapshot without converting the actual download path to a blob URL.
    dataUrlToBlob(dataUrl);
    triggerHrefDownload(dataUrl, filename);
}
function isDomExceptionNamed(err, names) {
    if (typeof DOMException !== 'undefined' && err instanceof DOMException) {
        return names.has(err.name);
    }
    if (!err || typeof err !== 'object' || !('name' in err)) return false;
    return typeof err.name === 'string' && names.has(err.name);
}
function loadImageFromDataUrl(dataUrl) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new Error('Could not decode image snapshot'));
        img.src = dataUrl;
    });
}
function canvasToBlob(canvas, mime, quality) {
    return new Promise((resolve, reject)=>{
        canvas.toBlob((blob)=>{
            if (!blob) {
                reject(new Error(`Could not encode snapshot as ${mime}`));
                return;
            }
            if (blob.type && blob.type !== mime) {
                reject(new Error(`Browser encoded ${blob.type} instead of ${mime}`));
                return;
            }
            resolve(blob);
        }, mime, quality);
    });
}
async function imageDataUrlToBlob(dataUrl, format) {
    const spec = IMAGE_EXPORT_SPECS[format];
    if (format === 'png') {
        const blob = dataUrlToBlob(dataUrl);
        if (blob.type === spec.mime) return blob;
    }
    const img = await loadImageFromDataUrl(dataUrl);
    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    if (width <= 0 || height <= 0) {
        throw new Error('Image snapshot is empty');
    }
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not available');
    if (format === 'jpeg') {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, width, height);
    }
    ctx.drawImage(img, 0, 0, width, height);
    return canvasToBlob(canvas, spec.mime, format === 'jpeg' ? 0.92 : undefined);
}
async function prepareImageExportTarget(title, format, options = {}) {
    const spec = IMAGE_EXPORT_SPECS[format];
    const filename = imageExportFilename(title, format);
    const picker = window.showSaveFilePicker;
    if (options.useNativePicker !== false && typeof picker === 'function') {
        try {
            const handle = await picker.call(window, {
                suggestedName: filename,
                types: [
                    {
                        description: spec.pickerLabel,
                        accept: {
                            [spec.mime]: [
                                `.${spec.extension}`
                            ]
                        }
                    }
                ]
            });
            return {
                filename,
                method: 'picker',
                save: async (blob)=>{
                    const writable = await handle.createWritable();
                    try {
                        await writable.write(blob);
                    } finally{
                        await writable.close();
                    }
                }
            };
        } catch (err) {
            if (isDomExceptionNamed(err, new Set([
                'AbortError'
            ]))) return null;
            if (isDomExceptionNamed(err, new Set([
                'NotAllowedError',
                'SecurityError'
            ]))) {
                return downloadImageExportTarget(filename);
            }
            throw err;
        }
    }
    return downloadImageExportTarget(filename);
}
function exportAsImage(dataUrl, title) {
    try {
        const blob = dataUrlToBlob(dataUrl);
        triggerDownload(blob, `${safeFilename(title, 'artifact')}.png`);
    } catch (err) {
        console.warn('[exportAsImage] failed to convert snapshot:', err);
        // Re-throw the error to allow the caller to handle UI feedback
        throw err;
    }
}
async function exportProjectAsPdf(opts) {
    try {
        const resp = await fetch(`/api/projects/${encodeURIComponent(opts.projectId)}/export/pdf`, {
            body: JSON.stringify({
                deck: opts.deck,
                fileName: opts.filePath,
                title: opts.title
            }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });
        if (!resp.ok) throw new Error(`desktop PDF export unavailable (${resp.status})`);
        const body = await resp.json().catch(()=>({}));
        if (body?.canceled === true) return 'cancelled';
        if (body && body.ok === false) throw new Error(body.error || 'desktop PDF export failed');
        return 'desktop';
    } catch (err) {
        console.warn('[exportProjectAsPdf] falling back to browser print:', err);
        opts.fallbackPdf();
        return 'fallback';
    }
}
function exportAsJsx(source, title, extension = '.jsx') {
    const blob = new Blob([
        source
    ], {
        type: 'text/jsx;charset=utf-8'
    });
    triggerDownload(blob, `${safeFilename(title, 'component')}${extension}`);
}
function exportReactComponentAsHtml(source, title) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$react$2d$component$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildReactComponentSrcdoc"])(source, {
        title
    });
    const blob = new Blob([
        doc
    ], {
        type: 'text/html;charset=utf-8'
    });
    triggerDownload(blob, `${safeFilename(title, 'component')}.html`);
}
function exportReactComponentAsZip(source, title, extension = '.jsx') {
    const slug = safeFilename(title, 'component');
    const componentFile = `${slug}${extension}`;
    const blob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$zip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildZip"])([
        {
            path: `${slug}/${componentFile}`,
            content: source
        },
        {
            path: `${slug}/${DESIGN_HANDOFF_FILENAME}`,
            content: buildDesignHandoffContent({
                title: title || slug,
                entryFile: componentFile,
                files: [
                    componentFile
                ],
                kind: 'react'
            })
        },
        {
            path: `${slug}/${DESIGN_MANIFEST_FILENAME}`,
            content: buildDesignManifestContent({
                title: title || slug,
                entryFile: componentFile,
                files: [
                    componentFile
                ],
                kind: 'react'
            })
        }
    ]);
    triggerDownload(blob, `${slug}.zip`);
}
async function exportProjectAsZip(opts) {
    const root = archiveRootFromFilePath(opts.filePath);
    const url = `/api/projects/${encodeURIComponent(opts.projectId)}/archive${root ? `?root=${encodeURIComponent(root)}` : ''}`;
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`archive request failed (${resp.status})`);
        const blob = await resp.blob();
        triggerDownload(blob, archiveFilenameFrom(resp, opts.fallbackTitle, root));
    } catch (err) {
        console.warn('[exportProjectAsZip] falling back to single-file ZIP:', err);
        exportAsZip(opts.fallbackHtml, opts.fallbackTitle);
    }
}
function archiveRootFromFilePath(filePath) {
    const trimmed = (filePath || '').replace(/^\/+/, '');
    const slash = trimmed.indexOf('/');
    if (slash <= 0) return '';
    return trimmed.slice(0, slash);
}
function archiveFilenameFrom(resp, fallbackTitle, root) {
    // Honor the daemon's Content-Disposition (it knows the project name and
    // handles RFC 5987 UTF-8 encoding). Fall back to the active directory
    // name, then to the active file title.
    const header = resp.headers.get('content-disposition') || '';
    const star = /filename\*=UTF-8''([^;]+)/i.exec(header);
    if (star && star[1]) {
        try {
            return decodeURIComponent(star[1]);
        } catch  {
        // fall through to the legacy filename= or local fallback
        }
    }
    const plain = /filename="([^"]+)"/i.exec(header);
    if (plain && plain[1]) return plain[1];
    const slug = safeFilename(root || fallbackTitle, 'project');
    return `${slug}.zip`;
}
function escapeHtmlAttribute(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function buildSandboxedPreviewDocument(doc, title, opts) {
    const safeTitle = escapeHtmlAttribute(title || 'Preview');
    const sandbox = opts?.allowModals ? 'allow-scripts allow-modals' : 'allow-scripts';
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle}</title>
  <style>html,body,iframe{margin:0;width:100%;height:100%;border:0}body{overflow:hidden;background:#fff}</style>
</head>
<body>
  <iframe title="${safeTitle}" sandbox="${sandbox}" srcdoc="${escapeHtmlAttribute(doc)}"></iframe>
</body>
</html>`;
}
function currentOriginBaseHref() {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.location?.origin === 'string') {
        return `${window.location.origin.replace(/\/+$/, '')}/`;
    }
    const base = typeof document !== 'undefined' && typeof document.baseURI === 'string' ? document.baseURI : ("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.location?.href === 'string' ? window.location.href : undefined;
    if (!base) return undefined;
    try {
        return new URL('/', base).href;
    } catch  {
        return undefined;
    }
}
function buildBlobSafeSrcdoc(html, options) {
    const baseHref = typeof options?.baseHref === 'string' ? options.baseHref : currentOriginBaseHref();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$srcdoc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSrcdoc"])(html, {
        ...options,
        ...baseHref ? {
            baseHref
        } : {}
    });
}
function openSandboxedPreviewInNewTab(html, title, srcdocOptions) {
    const doc = buildSandboxedPreviewDocument(buildBlobSafeSrcdoc(html, srcdocOptions), title);
    const blob = new Blob([
        doc
    ], {
        type: 'text/html;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
}
async function exportAsPdf(html, title, opts) {
    const sandboxedPreview = opts?.sandboxedPreview ?? true;
    // Generate a per-export nonce so the print-ready handshake is resistant to
    // spoofing by untrusted scripts inside the exported artifact.
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$utils$2f$uuid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUUID"])();
    let doc = buildBlobSafeSrcdoc(html, opts);
    if (opts?.deck) doc = injectDeckPrintStylesheet(doc);
    doc = injectPrintReadyHandshake(doc, nonce);
    // Desktop native PDF bridge — the main process runs a direct
    // Save-as-PDF flow: a native Save dialog, then Electron's
    // webContents.printToPDF() straight to the chosen file (issue #1774;
    // see apps/desktop/src/main/pdf-export.ts). The sandboxed wrapper
    // omits allow-modals here because the native flow never calls
    // window.print(); granting it would let untrusted artifact code call
    // alert()/confirm() and stall the hidden Electron window indefinitely.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpenDesignHostAvailable"])()) {
        if (sandboxedPreview) {
            doc = buildSandboxedPreviewDocument(doc, title);
        }
        doc = injectParentPrintReadyCache(doc, nonce);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$host$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printHostPdf"])(doc, nonce, opts?.deck ? {
                deck: true
            } : undefined);
            if (result.ok) return;
            if (typeof alert !== 'undefined') {
                alert('Print failed. Please try Export PDF again or use the browser version.');
            }
        } catch  {
            if (typeof alert !== 'undefined') {
                alert('Print failed. Please try Export PDF again or use the browser version.');
            }
        }
        return;
    }
    // Browser fallback: wrap with allow-modals so the injected script can
    // call window.print(), then inject the self-printing script and open a
    // popup.
    if (sandboxedPreview) {
        doc = buildSandboxedPreviewDocument(doc, title, {
            allowModals: true
        });
    }
    // Even in the non-sandboxed browser fallback we keep the same readiness
    // cache contract as the desktop bridge so the popup can wait for actual
    // rendered content instead of printing after a blind fixed delay.
    doc = injectParentPrintReadyCache(doc, nonce);
    doc = injectPrintScript(doc, title);
    const blob = new Blob([
        doc
    ], {
        type: 'text/html;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    // Open an empty tab synchronously (without noopener) to reliably detect popup blocking.
    // Since window.open with 'noopener' returns null on success by specification,
    // this approach allows us to distinguish between a successful export and a blocked popup.
    const win = window.open('', '_blank');
    if (!win) {
        if (typeof alert !== 'undefined') {
            alert('Popup blocked! Click the popup-blocked icon in your browser address bar (or browser menu), choose "Always allow pop-ups" for this site, then retry Export PDF.');
        }
        URL.revokeObjectURL(url);
        return;
    }
    if (sandboxedPreview) {
        try {
            win.opener = null;
        } catch (e) {
        // Guard against potential context environment restrictions
        }
    }
    // Navigate the verified window to the generated Blob URL then release
    // the Blob URL after the tab has had time to start loading it.
    win.location.href = url;
    setTimeout(()=>URL.revokeObjectURL(url), 60_000);
}
function isUsablePrintSize(width, height) {
    return typeof width === 'number' && typeof height === 'number' && Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0;
}
function reportPrintSizeWhenStable(measure, report, maxFrames, raf = (cb)=>requestAnimationFrame(()=>cb())) {
    const usable = (w, h)=>typeof w === 'number' && typeof h === 'number' && Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0;
    const step = (remaining)=>{
        const size = measure();
        if (usable(size.width, size.height) || remaining <= 0) {
            report(size);
            return;
        }
        raf(()=>step(remaining - 1));
    };
    step(maxFrames);
}
function injectPrintScript(doc, title) {
    const safeTitle = JSON.stringify(title || 'artifact');
    // Browser fallback PDF export shares the same print-readiness signal as the
    // desktop native path. When the cache is present, wait for it so the popup
    // prints only after fonts, images, CSS image URLs, and final layout have
    // settled. If the handshake script is blocked entirely (for example by a
    // CSP that forbids inline scripts), fall back to the historical load+delay
    // behavior instead of waiting for the full ready deadline.
    const script = `<script>(function(){try{document.title=${safeTitle}}catch(e){}function doPrint(){try{window.focus();window.print()}catch(e){}}function afterStableFrames(fn){requestAnimationFrame(function(){requestAnimationFrame(fn)})}window.addEventListener('load',function(){if(typeof window.__odPrintReady!=='boolean'){setTimeout(doPrint,300);return}var deadline=Date.now()+30000;var handshakeStartDeadline=Date.now()+1000;(function waitForReady(){if(window.__odPrintReady===true){afterStableFrames(doPrint);return}if(window.__odPrintReadyStarted===false&&Date.now()>=handshakeStartDeadline){setTimeout(doPrint,300);return}if(Date.now()>=deadline){afterStableFrames(doPrint);return}setTimeout(waitForReady,50)})()})})();</script>`;
    if (/<\/head>/i.test(doc)) return doc.replace(/<\/head>/i, `${script}</head>`);
    if (/<\/body>/i.test(doc)) return doc.replace(/<\/body>/i, `${script}</body>`);
    return doc + script;
}
function injectPrintReadyHandshake(doc, nonce) {
    // Wait for fonts, the window load event (which covers initial images), and
    // any images that are still loading after load fires (dynamically added or
    // slow images that weren't complete by the time this script ran). Also wait
    // for CSS image URLs and two animation frames so background/list/border
    // images and final layout are settled before the desktop bridge prints.
    // This mirrors the safety of the legacy waitForPrintableContent() helper and
    // prevents image-heavy exports from printing with blank images.
    //
    // Once settled, the message also carries the artifact's own content
    // dimensions (scroll/offset size of its documentElement). This script runs
    // inside the sandboxed preview iframe, which the parent wrapper cannot
    // measure directly (sandbox="allow-scripts" has no allow-same-origin, so
    // iframe.contentDocument is null). Reporting the size from here lets the
    // desktop bridge size the PDF page to the real content instead of the
    // wrapper's viewport, which otherwise clips — or blanks — taller artifacts
    // (issue #4067). The parent caches it via injectParentPrintReadyCache and
    // inferPageSize() in apps/desktop/src/main/pdf-export.ts consumes it.
    //
    // The nonce is a per-export random UUID that verifies the readiness signal
    // came from our injected handshake, not a spoofed message from untrusted
    // artifact code.
    const script = `<script data-od-print-ready>(function(){window.parent.postMessage({type:'OD_PRINT_READY_STARTED',nonce:'${nonce}'},'*');function waitForImages(){var imgs=Array.from(document.images).filter(function(img){if(img.loading==='lazy')img.loading='eager';return !img.complete});return Promise.all(imgs.map(function(img){return new Promise(function(r){img.addEventListener('load',r,{once:true});img.addEventListener('error',r,{once:true});if(img.complete)r()})}))}function cssUrlValues(value){var urls=[];if(!value||value==='none')return urls;value.replace(/url\\((['"]?)(.*?)\\1\\)/g,function(_,q,rawUrl){if(rawUrl&&!/^data:/i.test(rawUrl))urls.push(rawUrl);return''});return urls}function waitForCssBackgroundImages(){var urls=new Set();Array.from(document.querySelectorAll('*')).forEach(function(el){var style=window.getComputedStyle(el);cssUrlValues(style.backgroundImage).forEach(function(url){urls.add(url)});cssUrlValues(style.borderImageSource).forEach(function(url){urls.add(url)});cssUrlValues(style.listStyleImage).forEach(function(url){urls.add(url)})});return Promise.all(Array.from(urls).map(function(url){return new Promise(function(r){var img=new Image();img.onload=r;img.onerror=r;img.src=url})}))}function nextFrame(){return new Promise(function(r){requestAnimationFrame(function(){r(true)})})}Promise.all([document.fonts&&document.fonts.ready?document.fonts.ready.catch(function(){}):Promise.resolve(),new Promise(function(r){if(document.readyState==='complete')r();else window.addEventListener('load',r,{once:true})})]).then(function(){return Promise.all([waitForImages(),waitForCssBackgroundImages()])}).then(nextFrame).then(nextFrame).then(function(){var __odReport=${reportPrintSizeWhenStable.toString()};function measure(){var de=document.documentElement;var b=document.body||de;return {width:Math.max(de.scrollWidth,b.scrollWidth,de.offsetWidth,b.offsetWidth),height:Math.max(de.scrollHeight,b.scrollHeight,de.offsetHeight,b.offsetHeight)}}__odReport(measure,function(size){window.parent.postMessage({type:'OD_PRINT_READY',nonce:'${nonce}',width:size.width,height:size.height},'*')},30)})})();<\/script>`;
    if (/<\/head>/i.test(doc)) return doc.replace(/<\/head>/i, `${script}</head>`);
    if (/<\/body>/i.test(doc)) return doc.replace(/<\/body>/i, `${script}</body>`);
    return doc + script;
}
function injectParentPrintReadyCache(doc, nonce) {
    // Cache the readiness flag and the content size the artifact reports through
    // the handshake. window.__odPrintSize is read by inferPageSize() in
    // apps/desktop/src/main/pdf-export.ts to size the PDF page to the real
    // artifact rather than the wrapper viewport (issue #4067). Width/height are
    // validated as positive finite numbers so a malformed message cannot poison
    // the page size; the nonce + source check keep untrusted frames from spoofing
    // either signal. window.__odPrintReadyStarted distinguishes a live handshake
    // from a CSP-blocked one so the browser fallback can preserve the historical
    // quick print path when the inner script never runs.
    const script = `<script>window.__odPrintReady=false;window.__odPrintReadyStarted=false;window.__odPrintSize=null;var __odUsable=${isUsablePrintSize.toString()};window.addEventListener('message',function(e){if(e.data&&e.data.nonce==='${nonce}'&&(e.source===window||(window.frames&&e.source===window.frames[0]))){if(e.data.type==='OD_PRINT_READY_STARTED'){window.__odPrintReadyStarted=true;return}if(e.data.type==='OD_PRINT_READY'){window.__odPrintReady=true;if(__odUsable(e.data.width,e.data.height))window.__odPrintSize={width:e.data.width,height:e.data.height}}}});<\/script>`;
    if (/<head>/i.test(doc)) return doc.replace(/<head>/i, `<head>${script}`);
    return script + doc;
}
// Stitches every .slide into a vertical multi-page PDF: 1920×1080 per page,
// no margins, scroll-snap and horizontal flex disabled. `!important` guards
// override skill-specific styles that pin the deck to `display: flex` /
// `overflow: hidden` for on-screen swiping.
const DECK_PRINT_CSS = `
@media print {
  @page { size: 1920px 1080px; margin: 0; }
  html, body {
    width: 1920px !important;
    height: auto !important;
    overflow: visible !important;
    background: #fff !important;
  }
  body {
    display: block !important;
    scroll-snap-type: none !important;
    transform: none !important;
  }
  .slide, [data-screen-label], section.slide, .deck-slide, .ppt-slide {
    flex: none !important;
    width: 1920px !important;
    height: 1080px !important;
    min-height: 1080px !important;
    max-height: 1080px !important;
    page-break-after: always;
    break-after: page;
    scroll-snap-align: none !important;
    transform: none !important;
    position: relative !important;
    overflow: hidden !important;
  }
  .slide:last-child, [data-screen-label]:last-child { page-break-after: auto; break-after: auto; }
  .deck-counter, .deck-hint, .deck-nav,
  [aria-label="Previous slide"], [aria-label="Next slide"] {
    display: none !important;
  }
}
`;
function injectDeckPrintStylesheet(doc) {
    const tag = `<style data-deck-print="injected">${DECK_PRINT_CSS}</style>`;
    if (/<\/head>/i.test(doc)) return doc.replace(/<\/head>/i, `${tag}</head>`);
    if (/<head[^>]*>/i.test(doc)) return doc.replace(/<head[^>]*>/i, (m)=>`${m}${tag}`);
    return tag + doc;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/brand-intent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Transient cross-component intent for the Brand Kit tab.
//
// The entry shell keeps every sub-view (home / brands / plugins / …) mounted
// at once and only toggles visibility, so a surface like the Home chip rail
// cannot rely on BrandsTab re-mounting to pick up a one-shot instruction. The
// router is path-only and intentionally carries no transient state, so we use a
// tiny module-level latch plus a DOM event — the same pattern as
// `home-intent.ts`: the producer (the "Create Brand Kit" home chip) sets a
// pending flag and fires the event; the mounted BrandsTab opens its New Brand
// Kit modal in response, and a fresh mount drains the latch as a fallback.
__turbopack_context__.s([
    "NEW_BRAND_KIT_INTENT_EVENT",
    ()=>NEW_BRAND_KIT_INTENT_EVENT,
    "consumePendingNewBrandKit",
    ()=>consumePendingNewBrandKit,
    "hasPendingNewBrandKit",
    ()=>hasPendingNewBrandKit,
    "requestNewBrandKit",
    ()=>requestNewBrandKit
]);
const NEW_BRAND_KIT_INTENT_EVENT = 'od:new-brand-kit-intent';
let pending = false;
function requestNewBrandKit() {
    pending = true;
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent(NEW_BRAND_KIT_INTENT_EVENT));
    }
}
function consumePendingNewBrandKit() {
    const wasPending = pending;
    pending = false;
    return wasPending;
}
function hasPendingNewBrandKit() {
    return pending;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/brands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBrandsByDesignSystemId",
    ()=>buildBrandsByDesignSystemId,
    "fetchBrands",
    ()=>fetchBrands,
    "useBrandsByDesignSystemId",
    ()=>useBrandsByDesignSystemId
]);
// Brand lookup shared by every design-system picker.
//
// A finalized brand registers a `user:<id>` design system (BrandMeta
// .designSystemId), so the pickers — which list `DesignSystemSummary` — can
// upgrade their thin preview to the rich Brand Kit card whenever the selected
// system is actually a brand. This module owns the `/api/brands` fetch and the
// `designSystemId -> BrandSummary` lookup so the wiring stays out of the
// design-system registry provider (whose module is mocked wholesale by some
// picker tests).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
async function fetchBrands() {
    try {
        const resp = await fetch('/api/brands', {
            cache: 'no-store'
        });
        if (!resp.ok) return [];
        const data = await resp.json();
        return Array.isArray(data?.brands) ? data.brands : [];
    } catch  {
        return [];
    }
}
function buildBrandsByDesignSystemId(brands) {
    const map = new Map();
    for (const summary of brands){
        const designSystemId = summary.meta.designSystemId;
        if (designSystemId && summary.brand) map.set(designSystemId, summary);
    }
    return map;
}
function useBrandsByDesignSystemId(enabled = true) {
    _s();
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useBrandsByDesignSystemId.useState": ()=>new Map()
    }["useBrandsByDesignSystemId.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBrandsByDesignSystemId.useEffect": ()=>{
            if (!enabled) return undefined;
            let cancelled = false;
            void fetchBrands().then({
                "useBrandsByDesignSystemId.useEffect": (brands)=>{
                    if (cancelled) return;
                    setMap(buildBrandsByDesignSystemId(brands));
                }
            }["useBrandsByDesignSystemId.useEffect"]);
            return ({
                "useBrandsByDesignSystemId.useEffect": ()=>{
                    cancelled = true;
                }
            })["useBrandsByDesignSystemId.useEffect"];
        }
    }["useBrandsByDesignSystemId.useEffect"], [
        enabled
    ]);
    return map;
}
_s(useBrandsByDesignSystemId, "PPBgZQLXppFp0cr0k6ybbwq9ziw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/useBrandExtract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBrandExtract",
    ()=>useBrandExtract
]);
// `useBrandExtract` — kick off an agent-driven brand extraction.
//
// Extraction is no longer an in-place SSE pipeline. `POST /api/brands { url }`
// reserves a brand record and stands up a backing `brand` project with the
// target site open in an in-app browser tab plus a seeded prompt. The caller
// navigates into that project and auto-sends the first prompt, so the agent
// runs the extraction live — measuring the page, synthesizing the kit, and
// registering the design system, pausing for the user when an anti-bot wall
// needs a human. This hook just drives the kickoff request and exposes a
// coarse status the New Brand modal / onboarding step render.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const INITIAL_STATE = {
    phase: 'idle',
    brandId: null,
    projectId: null,
    conversationId: null,
    error: null
};
function useBrandExtract() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE);
    const inFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBrandExtract.useCallback[reset]": ()=>{
            inFlightRef.current = false;
            setState(INITIAL_STATE);
        }
    }["useBrandExtract.useCallback[reset]"], []);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBrandExtract.useCallback[run]": async (url)=>{
            if (inFlightRef.current) return null;
            inFlightRef.current = true;
            setState({
                ...INITIAL_STATE,
                phase: 'starting'
            });
            let resp;
            try {
                resp = await fetch('/api/brands', {
                    method: 'POST',
                    cache: 'no-store',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        url
                    })
                });
            } catch (err) {
                inFlightRef.current = false;
                setState({
                    ...INITIAL_STATE,
                    phase: 'error',
                    error: err instanceof Error ? err.message : 'Could not reach the daemon'
                });
                return null;
            }
            if (!resp.ok) {
                let message = `Extraction request failed (${resp.status})`;
                try {
                    const body = await resp.json();
                    if (body?.error) message = body.error;
                } catch  {
                // Non-JSON error body; keep the status-based message.
                }
                inFlightRef.current = false;
                setState({
                    ...INITIAL_STATE,
                    phase: 'error',
                    error: message
                });
                return null;
            }
            let result;
            try {
                result = await resp.json();
            } catch (err) {
                inFlightRef.current = false;
                setState({
                    ...INITIAL_STATE,
                    phase: 'error',
                    error: err instanceof Error ? err.message : 'Malformed extraction response'
                });
                return null;
            }
            inFlightRef.current = false;
            setState({
                phase: 'done',
                brandId: result.id,
                projectId: result.projectId,
                conversationId: result.conversationId,
                error: null
            });
            return result;
        }
    }["useBrandExtract.useCallback[run]"], []);
    return {
        state,
        run,
        reset
    };
}
_s(useBrandExtract, "kKJfGN3/D4UVC3oUvUBcOLKIifk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/home-intent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Transient cross-component intent for the Home composer.
//
// The entry shell keeps every sub-view (home / brands / plugins / …) mounted
// at once and only toggles visibility, so a surface like the Brands tab cannot
// rely on HomeView re-mounting to pick up a one-shot instruction. The router is
// path-only and intentionally carries no transient state, so we use a tiny
// module-level latch plus a DOM event: the producer sets a pending chip id and
// fires the event; HomeView consumes it once, guarded on its plugin catalog
// being loaded so chip dispatch (which resolves a bundled plugin) cannot race
// an empty list.
__turbopack_context__.s([
    "HOME_CHIP_INTENT_EVENT",
    ()=>HOME_CHIP_INTENT_EVENT,
    "consumePendingHomeChip",
    ()=>consumePendingHomeChip,
    "consumePendingHomeNotice",
    ()=>consumePendingHomeNotice,
    "hasPendingHomeChip",
    ()=>hasPendingHomeChip,
    "requestHomeChip",
    ()=>requestHomeChip
]);
const HOME_CHIP_INTENT_EVENT = 'od:home-chip-intent';
let pendingChipId = null;
let pendingNotice = null;
function requestHomeChip(chipId, options) {
    pendingChipId = chipId;
    pendingNotice = options?.notice ?? null;
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent(HOME_CHIP_INTENT_EVENT, {
            detail: {
                chipId
            }
        }));
    }
}
function consumePendingHomeChip() {
    const chipId = pendingChipId;
    pendingChipId = null;
    return chipId;
}
function consumePendingHomeNotice() {
    const notice = pendingNotice;
    pendingNotice = null;
    return notice;
}
function hasPendingHomeChip() {
    return pendingChipId !== null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/brand-references.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "categories": [
        "software",
        "finance",
        "fashion",
        "activewear",
        "beauty",
        "wellness",
        "food",
        "beverage",
        "media",
        "education",
        "electronics",
        "automotive",
        "healthcare",
        "travel",
        "construction"
    ],
    "brands": [
        {
            "name": "HubSpot",
            "domain": "hubspot.com",
            "category": "software"
        },
        {
            "name": "Canva",
            "domain": "canva.com",
            "category": "software"
        },
        {
            "name": "Shopify",
            "domain": "shopify.com",
            "category": "software"
        },
        {
            "name": "monday.com",
            "domain": "monday.com",
            "category": "software"
        },
        {
            "name": "Asana",
            "domain": "asana.com",
            "category": "software"
        },
        {
            "name": "Webflow",
            "domain": "webflow.com",
            "category": "software"
        },
        {
            "name": "Slack",
            "domain": "slack.com",
            "category": "software"
        },
        {
            "name": "Brex",
            "domain": "brex.com",
            "category": "finance"
        },
        {
            "name": "Wise",
            "domain": "wise.com",
            "category": "finance"
        },
        {
            "name": "Wealthsimple",
            "domain": "wealthsimple.com",
            "category": "finance"
        },
        {
            "name": "Chime",
            "domain": "chime.com",
            "category": "finance"
        },
        {
            "name": "Ramp",
            "domain": "ramp.com",
            "category": "finance"
        },
        {
            "name": "Cash App",
            "domain": "cash.app",
            "category": "finance"
        },
        {
            "name": "Stripe",
            "domain": "stripe.com",
            "category": "finance"
        },
        {
            "name": "Revolut",
            "domain": "revolut.com",
            "category": "finance"
        },
        {
            "name": "Everlane",
            "domain": "everlane.com",
            "category": "fashion"
        },
        {
            "name": "ASOS",
            "domain": "asos.com",
            "category": "fashion"
        },
        {
            "name": "H&M",
            "domain": "hm.com",
            "category": "fashion"
        },
        {
            "name": "COS",
            "domain": "cos.com",
            "category": "fashion"
        },
        {
            "name": "Sézane",
            "domain": "sezane.com",
            "category": "fashion"
        },
        {
            "name": "Nike",
            "domain": "nike.com",
            "category": "fashion"
        },
        {
            "name": "New Balance",
            "domain": "newbalance.com",
            "category": "activewear"
        },
        {
            "name": "Sweaty Betty",
            "domain": "sweatybetty.com",
            "category": "activewear"
        },
        {
            "name": "Under Armour",
            "domain": "underarmour.com",
            "category": "activewear"
        },
        {
            "name": "Tracksmith",
            "domain": "tracksmith.com",
            "category": "activewear"
        },
        {
            "name": "Outdoor Voices",
            "domain": "outdoorvoices.com",
            "category": "activewear"
        },
        {
            "name": "Vuori",
            "domain": "vuoriclothing.com",
            "category": "activewear"
        },
        {
            "name": "Lululemon",
            "domain": "lululemon.com",
            "category": "activewear"
        },
        {
            "name": "Alo Yoga",
            "domain": "aloyoga.com",
            "category": "activewear"
        },
        {
            "name": "Allbirds",
            "domain": "allbirds.com",
            "category": "activewear"
        },
        {
            "name": "Glossier",
            "domain": "glossier.com",
            "category": "beauty"
        },
        {
            "name": "Aesop",
            "domain": "aesop.com",
            "category": "beauty"
        },
        {
            "name": "Tatcha",
            "domain": "tatcha.com",
            "category": "beauty"
        },
        {
            "name": "Summer Fridays",
            "domain": "summerfridays.com",
            "category": "beauty"
        },
        {
            "name": "Charlotte Tilbury",
            "domain": "charlottetilbury.com",
            "category": "beauty"
        },
        {
            "name": "Milk Makeup",
            "domain": "milkmakeup.com",
            "category": "beauty"
        },
        {
            "name": "Supergoop",
            "domain": "supergoop.com",
            "category": "beauty"
        },
        {
            "name": "La Roche-Posay",
            "domain": "laroche-posay.us",
            "category": "beauty"
        },
        {
            "name": "AG1",
            "domain": "drinkag1.com",
            "category": "wellness"
        },
        {
            "name": "Calm",
            "domain": "calm.com",
            "category": "wellness"
        },
        {
            "name": "Huel",
            "domain": "huel.com",
            "category": "wellness"
        },
        {
            "name": "Oura",
            "domain": "ouraring.com",
            "category": "wellness"
        },
        {
            "name": "HelloFresh",
            "domain": "hellofresh.com",
            "category": "food"
        },
        {
            "name": "Graza",
            "domain": "graza.co",
            "category": "food"
        },
        {
            "name": "Kind Snacks",
            "domain": "kindsnacks.com",
            "category": "food"
        },
        {
            "name": "Catalina Crunch",
            "domain": "catalinacrunch.com",
            "category": "food"
        },
        {
            "name": "Just Salad",
            "domain": "justsalad.com",
            "category": "food"
        },
        {
            "name": "Cava",
            "domain": "cava.com",
            "category": "food"
        },
        {
            "name": "Whole Foods",
            "domain": "wholefoodsmarket.com",
            "category": "food"
        },
        {
            "name": "Clif Bar",
            "domain": "clifbar.com",
            "category": "food"
        },
        {
            "name": "Cadence",
            "domain": "keepyourcadence.com",
            "category": "beverage"
        },
        {
            "name": "Liquid Death",
            "domain": "liquiddeath.com",
            "category": "beverage"
        },
        {
            "name": "Nespresso",
            "domain": "nespresso.com",
            "category": "beverage"
        },
        {
            "name": "Athletic Brewing",
            "domain": "athleticbrewing.com",
            "category": "beverage"
        },
        {
            "name": "Spotify",
            "domain": "spotify.com",
            "category": "media"
        },
        {
            "name": "Vogue",
            "domain": "vogue.com",
            "category": "media"
        },
        {
            "name": "The Economist",
            "domain": "economist.com",
            "category": "media"
        },
        {
            "name": "Hulu",
            "domain": "hulu.com",
            "category": "media"
        },
        {
            "name": "Wired",
            "domain": "wired.com",
            "category": "media"
        },
        {
            "name": "The New York Times",
            "domain": "nytimes.com",
            "category": "media"
        },
        {
            "name": "MasterClass",
            "domain": "masterclass.com",
            "category": "education"
        },
        {
            "name": "Udemy",
            "domain": "udemy.com",
            "category": "education"
        },
        {
            "name": "Babbel",
            "domain": "babbel.com",
            "category": "education"
        },
        {
            "name": "Quizlet",
            "domain": "quizlet.com",
            "category": "education"
        },
        {
            "name": "Codecademy",
            "domain": "codecademy.com",
            "category": "education"
        },
        {
            "name": "Samsung",
            "domain": "samsung.com",
            "category": "electronics"
        },
        {
            "name": "Marshall",
            "domain": "marshallheadphones.com",
            "category": "electronics"
        },
        {
            "name": "Anker",
            "domain": "anker.com",
            "category": "electronics"
        },
        {
            "name": "DJI",
            "domain": "dji.com",
            "category": "electronics"
        },
        {
            "name": "Sonos",
            "domain": "sonos.com",
            "category": "electronics"
        },
        {
            "name": "Philips",
            "domain": "philips.com",
            "category": "electronics"
        },
        {
            "name": "Apple",
            "domain": "apple.com",
            "category": "electronics"
        },
        {
            "name": "Lucid Motors",
            "domain": "lucidmotors.com",
            "category": "automotive"
        },
        {
            "name": "Hyundai",
            "domain": "hyundai.com",
            "category": "automotive"
        },
        {
            "name": "Honda",
            "domain": "honda.com",
            "category": "automotive"
        },
        {
            "name": "Porsche",
            "domain": "porsche.com",
            "category": "automotive"
        },
        {
            "name": "Ford",
            "domain": "ford.com",
            "category": "automotive"
        },
        {
            "name": "Range Rover",
            "domain": "landrover.com",
            "category": "automotive"
        },
        {
            "name": "Rivian",
            "domain": "rivian.com",
            "category": "automotive"
        },
        {
            "name": "BetterHelp",
            "domain": "betterhelp.com",
            "category": "healthcare"
        },
        {
            "name": "CVS Health",
            "domain": "cvshealth.com",
            "category": "healthcare"
        },
        {
            "name": "Talkiatry",
            "domain": "talkiatry.com",
            "category": "healthcare"
        },
        {
            "name": "UnitedHealth",
            "domain": "unitedhealthgroup.com",
            "category": "healthcare"
        },
        {
            "name": "Walgreens",
            "domain": "walgreens.com",
            "category": "healthcare"
        },
        {
            "name": "Kaiser Permanente",
            "domain": "kaiserpermanente.org",
            "category": "healthcare"
        },
        {
            "name": "Tripadvisor",
            "domain": "tripadvisor.com",
            "category": "travel"
        },
        {
            "name": "Airbnb",
            "domain": "airbnb.com",
            "category": "travel"
        },
        {
            "name": "Lonely Planet",
            "domain": "lonelyplanet.com",
            "category": "travel"
        },
        {
            "name": "Architectural Digest",
            "domain": "architecturaldigest.com",
            "category": "construction"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/brand-references.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND_CATEGORIES",
    ()=>BRAND_CATEGORIES,
    "BRAND_REFERENCES",
    ()=>BRAND_REFERENCES,
    "QUICK_PICK_BRANDS",
    ()=>QUICK_PICK_BRANDS,
    "brandFaviconUrl",
    ()=>brandFaviconUrl
]);
// Curated, desensitized reference brands for the "pick a brand to extract
// from" experience. Only public facts ship here: brand display name, the
// website domain extraction targets, and an industry category. Visuals come
// from the public favicon service keyed on the domain, so this module carries
// no dependency on any private ad-library storage.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brand$2d$references$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/brand-references.json.[json].cjs [app-client] (ecmascript)");
;
const BRAND_CATEGORIES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brand$2d$references$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].categories;
// Household names lead the wall; the default tier sits in the middle; smaller
// DTC / niche brands close it. Mirrors the reference demo's fame ordering so
// the most recognizable logos greet the user first.
const TIER_1 = new Set([
    'Apple',
    'Nike',
    'Spotify',
    'Samsung',
    'Airbnb',
    'Stripe',
    'Slack',
    'Shopify',
    'Canva',
    'Porsche',
    'Ford',
    'Honda',
    'Hyundai',
    'Range Rover',
    'H&M',
    'Lululemon',
    'New Balance',
    'Under Armour',
    'Nespresso',
    'Hulu',
    'Vogue',
    'The New York Times',
    'The Economist',
    'Philips',
    'Whole Foods',
    'MasterClass'
]);
const TIER_3 = new Set([
    'Sweaty Betty',
    'Tracksmith',
    'Outdoor Voices',
    'Sézane',
    'Summer Fridays',
    'Milk Makeup',
    'Graza',
    'Catalina Crunch',
    'Just Salad',
    'Cava',
    'Cadence',
    'Athletic Brewing',
    'Talkiatry',
    'Architectural Digest',
    'Wealthsimple'
]);
const fameTier = (name)=>TIER_1.has(name) ? 1 : TIER_3.has(name) ? 3 : 2;
const BRAND_REFERENCES = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$brand$2d$references$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].brands
].sort(_c = (a, b)=>fameTier(a.name) - fameTier(b.name));
_c1 = BRAND_REFERENCES;
// Brands pinned to the front of the quick-pick row, in this order, ahead of
// the fame-tier ordering — same tasteful curation as the reference demo.
const PINNED_QUICK_PICKS = [
    'The New York Times',
    'The Economist'
];
const QUICK_PICK_COUNT = 8;
const QUICK_PICK_BRANDS = (()=>{
    const seen = new Set();
    const picks = [];
    const add = (brand)=>{
        if (!brand || seen.has(brand.name)) return;
        seen.add(brand.name);
        picks.push(brand);
    };
    for (const name of PINNED_QUICK_PICKS){
        add(BRAND_REFERENCES.find((b)=>b.name === name));
    }
    for (const brand of BRAND_REFERENCES){
        if (picks.length >= QUICK_PICK_COUNT) break;
        add(brand);
    }
    return picks;
})();
function brandFaviconUrl(domain, size = 64) {
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "BRAND_REFERENCES$[...data.brands].sort");
__turbopack_context__.k.register(_c1, "BRAND_REFERENCES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/plugin-source.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Plugin source / author / contribute link derivation.
 *
 * Turns the raw `InstalledPluginRecord.source` install string + the
 * manifest's `author` / `homepage` fields into a small bag of
 * renderable URLs and labels. Used by the Home plugin grid (small
 * "by <author>" byline) and by the PluginDetailsModal (rich author
 * + source + contribute block).
 *
 * Why a separate module:
 *  - the parsing rules (`github:owner/repo[@ref][/sub]`, https URL,
 *    local path, bundled relpath) are non-trivial enough to warrant
 *    isolated unit tests,
 *  - the modal and the card both need the same shape, so deriving
 *    twice would invite drift,
 *  - the host React surface needs a single safe-URL gate (only
 *    http(s) URLs become clickable) to keep `javascript:` /
 *    `data:` payloads in a manifest from rendering as live links.
 */ __turbopack_context__.s([
    "authorInitials",
    ()=>authorInitials,
    "derivePluginSourceLinks",
    ()=>derivePluginSourceLinks
]);
const OPEN_DESIGN_REPO_URL = 'https://github.com/nexu-io/open-design';
const OPEN_DESIGN_REPO_LABEL = 'nexu-io/open-design';
const GITHUB_SOURCE_RE = /^github:([A-Za-z0-9._-]+)\/([A-Za-z0-9._-]+)(?:@([A-Za-z0-9._/-]+))?(?:\/(.+))?$/;
const GITHUB_PROFILE_RE = /^https?:\/\/(?:www\.)?github\.com\/([A-Za-z0-9](?:[A-Za-z0-9-]{0,38}[A-Za-z0-9])?)(?:[\/?#].*)?$/;
const GITHUB_REPO_RE = /^https?:\/\/(?:www\.)?github\.com\/([A-Za-z0-9](?:[A-Za-z0-9-]{0,38}[A-Za-z0-9])?)\/([A-Za-z0-9._-]+?)(?:\.git)?(?:[\/?#].*)?$/;
/** Only http(s) URLs are safe to render as clickable links. */ function safeHttpUrl(value) {
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    if (!/^https?:\/\//i.test(trimmed)) return null;
    try {
        const url = new URL(trimmed);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
        return url.toString();
    } catch  {
        return null;
    }
}
/** github.com/owner/repo[/...] → "owner/repo" or null. */ function githubRepoSlug(url) {
    const match = GITHUB_REPO_RE.exec(url);
    if (!match) return null;
    return {
        owner: match[1],
        repo: match[2]
    };
}
/** github.com/<user> → "<user>" or null. Distinguishes single-segment
 *  profile/org URLs from multi-segment repo URLs. */ function githubUsername(url) {
    const match = GITHUB_PROFILE_RE.exec(url);
    if (!match) return null;
    // Reject multi-segment paths: a profile URL has nothing after the
    // username (other than query/hash). Repo URLs go through the repo
    // matcher instead.
    try {
        const parsed = new URL(url);
        const segments = parsed.pathname.split('/').filter(Boolean);
        if (segments.length !== 1) return null;
    } catch  {
        return null;
    }
    return match[1];
}
function basename(filesystemPath) {
    const parts = filesystemPath.split(/[\\/]/).filter(Boolean);
    return parts[parts.length - 1] ?? filesystemPath;
}
const SOURCE_KIND_LABELS = {
    bundled: 'Official',
    user: 'User',
    project: 'Project',
    marketplace: 'Marketplace',
    github: 'GitHub',
    url: 'URL',
    local: 'Local'
};
function derivePluginSourceLinks(record) {
    const manifest = record.manifest ?? {};
    const author = manifest.author ?? {};
    const homepageRaw = manifest.homepage;
    const officialBundled = record.sourceKind === 'bundled';
    const authorName = typeof author.name === 'string' && author.name.trim().length > 0 ? author.name.trim() : null;
    const authorProfileUrl = officialBundled ? OPEN_DESIGN_REPO_URL : safeHttpUrl(author.url);
    const homepageUrl = officialBundled ? OPEN_DESIGN_REPO_URL : safeHttpUrl(homepageRaw);
    // Source URL + label resolution. The github:owner/repo case wins
    // because we can produce a deep `tree/<ref>/<sub>` URL when the
    // source string carries a ref; the https case just uses the URL
    // verbatim so users can click through to their tarball mirror.
    let sourceUrl = null;
    let sourceLabel;
    let sourceContributeUrl = null;
    if (record.sourceKind === 'github') {
        const match = GITHUB_SOURCE_RE.exec(record.source);
        if (match) {
            const [, owner, repo, ref, subpath] = match;
            const ref0 = ref || record.pinnedRef;
            // Refs can contain `/` (branches like `release/1.0`, or
            // installer refs that absorbed a subpath) — encode each
            // segment so spaces/special chars are escaped but the
            // separators stay.
            const refSegment = ref0 && ref0 !== 'HEAD' ? `/tree/${ref0.split('/').map(encodeURIComponent).join('/')}` : '';
            const subSegment = subpath ? `/${subpath.split('/').map(encodeURIComponent).join('/')}` : '';
            sourceUrl = `https://github.com/${owner}/${repo}${refSegment}${subSegment}`;
            sourceLabel = `${owner}/${repo}${ref0 ? ` @${ref0}` : ''}${subpath ? `/${subpath}` : ''}`;
            sourceContributeUrl = `https://github.com/${owner}/${repo}/issues/new`;
        } else {
            sourceLabel = record.source;
        }
    } else if (record.sourceKind === 'url') {
        const safe = safeHttpUrl(record.source);
        if (safe) {
            sourceUrl = safe;
            try {
                sourceLabel = new URL(safe).hostname + new URL(safe).pathname.replace(/\/$/, '');
            } catch  {
                sourceLabel = safe;
            }
        } else {
            sourceLabel = record.source;
        }
    } else if (record.sourceKind === 'marketplace') {
        sourceLabel = record.source;
    } else if (officialBundled) {
        sourceUrl = OPEN_DESIGN_REPO_URL;
        sourceLabel = OPEN_DESIGN_REPO_LABEL;
    } else {
        // user / project / local — the source string is a filesystem
        // path. Show just the basename for compactness; the
        // full path stays available via the existing fsPath dt/dd.
        sourceLabel = basename(record.source) || record.source;
    }
    // Contribute link: prefer the source's github repo, fall back to
    // the homepage when it points at github (covers bundled plugins
    // whose `source` is a local relpath but `homepage` is the upstream
    // repo URL).
    let contributeUrl = sourceContributeUrl;
    let contributeOnGithub = sourceContributeUrl !== null;
    if (!contributeUrl && homepageUrl) {
        const repo = githubRepoSlug(homepageUrl);
        if (repo) {
            contributeUrl = `https://github.com/${repo.owner}/${repo.repo}/issues/new`;
            contributeOnGithub = true;
        }
    }
    // Avatar derivation: github.com/<user>.png returns the avatar for
    // both user and organisation accounts without authentication. The
    // fallback also works when author.url is a repo URL — we extract
    // the owner segment for the avatar.
    let authorAvatarUrl = null;
    if (authorProfileUrl) {
        const username = githubUsername(authorProfileUrl);
        if (username) {
            authorAvatarUrl = `https://github.com/${username}.png?size=80`;
        } else {
            const repo = githubRepoSlug(authorProfileUrl);
            if (repo) authorAvatarUrl = `https://github.com/${repo.owner}.png?size=80`;
        }
    }
    return {
        sourceUrl,
        sourceLabel,
        sourceKindLabel: SOURCE_KIND_LABELS[record.sourceKind] ?? record.sourceKind,
        authorName,
        authorProfileUrl,
        authorAvatarUrl,
        homepageUrl,
        contributeUrl,
        contributeOnGithub
    };
}
function authorInitials(name) {
    if (!name) return '??';
    const parts = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);
    if (parts.length === 0) return '??';
    return parts.map((p)=>p[0].toUpperCase()).join('');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/amr-guidance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared logic that maps a failed run's error code + agent into the failure
// UI: which contextual button the gray error card shows, whether to override
// the error text, and whether to show the AMR promotion card below. Kept in
// its own module so ChatPane / ProjectView / AssistantMessage can import it
// without a circular dependency.
// AMR model-gateway console wallet (account, balance, recharge).
// `source=open_design` tags the landing page_view so vela analytics can
// attribute the visit to Open Design (per-product revenue/traffic attribution).
__turbopack_context__.s([
    "AMR_CONSOLE_URL",
    ()=>AMR_CONSOLE_URL,
    "AMR_RECHARGE_URL",
    ()=>AMR_RECHARGE_URL,
    "amrConsoleUrlForProfile",
    ()=>amrConsoleUrlForProfile,
    "amrProfileBadgeLabel",
    ()=>amrProfileBadgeLabel,
    "amrRechargeUrlForProfile",
    ()=>amrRechargeUrlForProfile,
    "resolveRunFailureUi",
    ()=>resolveRunFailureUi
]);
const AMR_CONSOLE_URL = 'https://open-design.ai/amr/wallet?source=open_design';
const AMR_RECHARGE_URL = AMR_CONSOLE_URL;
const AMR_CONSOLE_URL_BY_PROFILE = {
    prod: AMR_CONSOLE_URL,
    test: 'https://vela.powerformer.net/wallet?source=open_design',
    local: 'http://localhost:5173/wallet?source=open_design'
};
function amrConsoleUrlForProfile(profile) {
    const normalized = profile?.trim() || 'prod';
    return AMR_CONSOLE_URL_BY_PROFILE[normalized] ?? AMR_CONSOLE_URL;
}
function amrRechargeUrlForProfile(profile) {
    return amrConsoleUrlForProfile(profile);
}
function amrProfileBadgeLabel(profile) {
    if (profile === 'test') return 'TEST';
    if (profile === 'local') return 'LOCAL';
    return null;
}
// Codes that mean a non-AMR agent hit "the model service rejected or could not
// serve the run" — auth missing/invalid, quota/rate exhausted, or the upstream
// model endpoint was unavailable. These are the failures worth promoting AMR
// for. Generic process failures (AGENT_EXECUTION_FAILED) and missing binaries
// (AGENT_UNAVAILABLE) are excluded.
const PROMOTE_AMR_CODES = new Set([
    'AGENT_AUTH_REQUIRED',
    'UNAUTHORIZED',
    'RATE_LIMITED',
    'UPSTREAM_UNAVAILABLE'
]);
function resolveRunFailureUi(code, agentId) {
    if (agentId === 'amr') {
        if (code === 'AMR_AUTH_REQUIRED') {
            return {
                primaryAction: 'authorize',
                // PRD「需要登录」type — shared title with the non-AMR sign-in case.
                titleKey: 'chat.runError.title.signInRequired',
                // "Open Design 智能体尚未登录，前往登录即可正常使用" — single CTA, no
                // AMR promotion (the agent already IS AMR). The authorize action reuses
                // the inline AmrLoginPill (sign-in + auto-retry on success).
                messageKey: 'chat.runError.signInMessage.amr',
                secondaryRetry: false,
                showSwitchCard: false
            };
        }
        if (code === 'AMR_INSUFFICIENT_BALANCE') {
            return {
                primaryAction: 'recharge',
                titleKey: 'chat.runError.title.balance',
                messageKey: 'chat.amrError.balanceMessage',
                secondaryRetry: true,
                showSwitchCard: false
            };
        }
        return {
            primaryAction: 'retry',
            titleKey: 'chat.runError.title.generic',
            messageKey: null,
            secondaryRetry: false,
            showSwitchCard: false
        };
    }
    // Antigravity's auth flow is terminal-only — see the
    // `launch-terminal-auth` action comment for why. Without this branch
    // the user sees the daemon-emitted guidance text and would have to
    // open a terminal themselves; with it they get a one-click button
    // that opens Terminal.app / x-terminal-emulator / cmd with `agy`
    // running, and a Retry button to redo the chat after OAuth completes.
    if (agentId === 'antigravity') {
        if (code === 'AGENT_AUTH_REQUIRED') {
            return {
                primaryAction: 'launch-terminal-auth',
                titleKey: 'chat.runError.title.signInRequired',
                messageKey: null,
                secondaryRetry: true,
                showSwitchCard: false
            };
        }
        // Quota: each Antigravity model has its own quota, so the action
        // is "open agy, switch model" rather than "sign in." Same handler
        // spawns the same terminal; only the label changes.
        if (code === 'RATE_LIMITED') {
            return {
                primaryAction: 'launch-terminal-switch-model',
                titleKey: 'chat.runError.title.rateLimited',
                messageKey: null,
                secondaryRetry: true,
                showSwitchCard: false
            };
        }
    }
    // Agent-neutral: a mid-response connection drop (any agent) gets a clear,
    // localized "lost connection — retry" message instead of the raw SDK string.
    // Not an AMR-promotable case: the break is the user's own network path, which
    // switching model service wouldn't fix.
    if (code === 'AGENT_CONNECTION_DROPPED') {
        return {
            primaryAction: 'retry',
            titleKey: 'chat.runError.title.connectionDropped',
            messageKey: 'chat.connectionDropped',
            secondaryRetry: false,
            showSwitchCard: false
        };
    }
    // Non-AMR sign-in required (any non-amr, non-antigravity agent — those two are
    // handled above). The agent's login lives in the user's own terminal, so Open
    // Design can't sign in for them: surface a "{agent} 尚未登录，请本地检查登录状态"
    // message, offer Retry as the primary action (re-run after they log in
    // locally), and promote AMR as the steadier alternative via the switch card.
    if (code === 'AGENT_AUTH_REQUIRED' || code === 'UNAUTHORIZED') {
        return {
            primaryAction: 'retry',
            titleKey: 'chat.runError.title.signInRequired',
            messageKey: 'chat.runError.signInMessage.other',
            secondaryRetry: false,
            showSwitchCard: true
        };
    }
    const promote = typeof code === 'string' && PROMOTE_AMR_CODES.has(code);
    return {
        primaryAction: 'retry',
        titleKey: 'chat.runError.title.generic',
        messageKey: null,
        secondaryRetry: false,
        showSwitchCard: promote
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/markdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderMarkdown",
    ()=>renderMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * A pocket-sized markdown renderer for assistant chat messages.
 *
 * We deliberately avoid a full parser library — chat output rarely uses
 * the long tail of markdown features and a hand-rolled walker keeps the
 * bundle slim. Block-level: ATX headings (# … ###), fenced code (```),
 * ordered (1.) and unordered (- / *) lists, GFM pipe tables, paragraphs,
 * blank-line separation. Inline: backtick code spans, **bold**,
 * *italic* / _italic_, and bare links (autolinked URLs).
 *
 * Output is a React fragment of typed elements — no dangerouslySetInnerHTML,
 * so untrusted text can't smuggle markup through.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/i18n/index.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/copy-to-clipboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function renderMarkdown(input, options) {
    const blocks = parseBlocks(input);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: blocks.map((b, i)=>renderBlock(b, i, options))
    }, void 0, false);
}
function splitTableCells(line) {
    // Walk char-by-char so we can respect three GFM cell-content rules without
    // any placeholder substitution:
    //   - `\|` resolves to a literal `|` inside the current cell.
    //   - A `|` inside a backtick code span is cell content, not a column
    //     boundary (handles cells like `` | status | `a | b` | ``).
    //   - A single optional leading `|` and unescaped trailing `|` are row
    //     terminators, not empty cells.
    // Placeholder-based escaping was rejected in review for two reasons: a
    // string sentinel can collide with real cell text, and an earlier draft
    // used NUL bytes which made the file render as binary on GitHub.
    const cells = [];
    let cur = '';
    let inCode = false;
    let i = 0;
    while(i < line.length && line[i] === ' ')i++;
    if (line[i] === '|') i++;
    for(; i < line.length; i++){
        const ch = line[i];
        if (ch === '\\' && line[i + 1] === '|') {
            cur += '|';
            i++;
            continue;
        }
        if (ch === '`') {
            inCode = !inCode;
            cur += ch;
            continue;
        }
        if (ch === '|' && !inCode) {
            cells.push(cur.trim());
            cur = '';
            continue;
        }
        cur += ch;
    }
    // A trailing unescaped `|` leaves `cur` empty — that's a row terminator,
    // not a final empty cell. Anything else (content after the last `|`, or a
    // row with no pipes at all) gets pushed.
    const tail = cur.trim();
    if (cells.length === 0 || tail !== '') cells.push(tail);
    return cells;
}
function parseTableAlignRow(line) {
    if (!line.includes('|')) return null;
    const cells = splitTableCells(line);
    if (cells.length === 0) return null;
    const aligns = [];
    for (const cell of cells){
        if (!/^:?-{1,}:?$/.test(cell)) return null;
        const left = cell.startsWith(':');
        const right = cell.endsWith(':');
        aligns.push(left && right ? 'center' : right ? 'right' : left ? 'left' : null);
    }
    return aligns;
}
function isTableStartAt(lines, i) {
    const header = lines[i];
    const sep = lines[i + 1];
    if (header === undefined || sep === undefined) return false;
    if (!header.includes('|')) return false;
    return parseTableAlignRow(sep) !== null;
}
function parseBlocks(input) {
    const lines = input.replace(/\r\n/g, '\n').split('\n');
    const out = [];
    let i = 0;
    while(i < lines.length){
        const line = lines[i] ?? '';
        if (line.trim() === '') {
            i++;
            continue;
        }
        const codeComment = parseCodeCommentDirective(line);
        if (codeComment) {
            out.push({
                kind: 'codeComment',
                comment: codeComment
            });
            i++;
            continue;
        }
        // Fenced code block.
        const fence = /^```(\w[\w+-]*)?\s*$/.exec(line);
        if (fence) {
            const lang = fence[1] ?? null;
            const buf = [];
            i++;
            while(i < lines.length && !/^```\s*$/.test(lines[i] ?? '')){
                buf.push(lines[i] ?? '');
                i++;
            }
            // Skip the closing fence (if present).
            if (i < lines.length) i++;
            out.push({
                kind: 'code',
                lang,
                body: buf.join('\n')
            });
            continue;
        }
        // ATX heading.
        const heading = /^(#{1,4})\s+(.*\S)\s*$/.exec(line);
        if (heading) {
            const level = heading[1].length;
            out.push({
                kind: 'h',
                level,
                text: heading[2]
            });
            i++;
            continue;
        }
        // Horizontal rule.
        if (/^\s*(-{3,}|_{3,}|\*{3,})\s*$/.test(line)) {
            out.push({
                kind: 'hr'
            });
            i++;
            continue;
        }
        // Blockquote. Group consecutive `>`-prefixed lines.
        if (/^\s*>\s?/.test(line)) {
            const buf = [];
            while(i < lines.length && /^\s*>\s?/.test(lines[i] ?? '')){
                buf.push((lines[i] ?? '').replace(/^\s*>\s?/, ''));
                i++;
            }
            out.push({
                kind: 'bq',
                text: buf.join('\n')
            });
            continue;
        }
        // Unordered list. Group consecutive items.
        if (/^\s*[-*+]\s+/.test(line)) {
            const items = [];
            while(i < lines.length && /^\s*[-*+]\s+/.test(lines[i] ?? '')){
                items.push((lines[i] ?? '').replace(/^\s*[-*+]\s+/, ''));
                i++;
            }
            out.push({
                kind: 'ul',
                items
            });
            continue;
        }
        // GFM pipe table: header row + alignment row + body rows.
        if (isTableStartAt(lines, i)) {
            const header = lines[i];
            const sep = lines[i + 1];
            const aligns = parseTableAlignRow(sep);
            const headers = splitTableCells(header);
            i += 2;
            const rows = [];
            while(i < lines.length){
                const row = lines[i];
                if (row === undefined || row.trim() === '' || !row.includes('|')) break;
                rows.push(splitTableCells(row));
                i++;
            }
            out.push({
                kind: 'table',
                aligns,
                headers,
                rows
            });
            continue;
        }
        // Ordered list.
        if (/^\s*\d+\.\s+/.test(line)) {
            const items = [];
            while(i < lines.length && /^\s*\d+\.\s+/.test(lines[i] ?? '')){
                items.push((lines[i] ?? '').replace(/^\s*\d+\.\s+/, ''));
                i++;
            }
            out.push({
                kind: 'ol',
                items
            });
            continue;
        }
        // Paragraph: greedy until a blank line or another block-starter.
        const buf = [
            line
        ];
        i++;
        while(i < lines.length){
            const next = lines[i] ?? '';
            if (next.trim() === '') break;
            if (/^```/.test(next)) break;
            if (/^#{1,4}\s+/.test(next)) break;
            if (/^\s*[-*+]\s+/.test(next)) break;
            if (/^\s*\d+\.\s+/.test(next)) break;
            if (/^\s*>\s?/.test(next)) break;
            if (parseCodeCommentDirective(next)) break;
            if (isTableStartAt(lines, i)) break;
            buf.push(next);
            i++;
        }
        out.push({
            kind: 'p',
            text: buf.join('\n')
        });
    }
    return out;
}
function renderBlock(block, key, options) {
    if (block.kind === 'p') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "md-p",
            children: renderInline(block.text, options)
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 248,
            columnNumber: 12
        }, this);
    }
    if (block.kind === 'h') {
        const Tag = `h${block.level}`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            className: `md-h md-h${block.level}`,
            children: renderInline(block.text, options)
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 252,
            columnNumber: 12
        }, this);
    }
    if (block.kind === 'ul') {
        const hasTask = block.items.some((it)=>/^\[[ xX]\]\s+/.test(it));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: `md-ul${hasTask ? ' md-task-list' : ''}`,
            children: block.items.map((item, i)=>{
                const task = /^\[([ xX])\]\s+(.*)$/.exec(item);
                if (task) {
                    const checked = task[1] !== ' ';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "md-task-item",
                        "data-checked": checked ? 'true' : 'false',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "md-task-check",
                                "aria-hidden": true,
                                children: checked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                    lineNumber: 265,
                                    columnNumber: 30
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: renderInline(task[2] ?? '', options)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                lineNumber: 267,
                                columnNumber: 17
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 263,
                        columnNumber: 15
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: renderInline(item, options)
                }, i, false, {
                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                    lineNumber: 271,
                    columnNumber: 18
                }, this);
            })
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 257,
            columnNumber: 7
        }, this);
    }
    if (block.kind === 'ol') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "md-ol",
            children: block.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: renderInline(item, options)
                }, i, false, {
                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, this))
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this);
    }
    if (block.kind === 'bq') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            className: "md-quote",
            children: renderInline(block.text, options)
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 287,
            columnNumber: 7
        }, this);
    }
    if (block.kind === 'code') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownCodeBlock, {
            body: block.body,
            lang: block.lang
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 294,
            columnNumber: 7
        }, this);
    }
    if (block.kind === 'codeComment') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeCommentBlock, {
            comment: block.comment
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 302,
            columnNumber: 12
        }, this);
    }
    if (block.kind === 'table') {
        const { aligns, headers, rows } = block;
        const cellStyle = (idx)=>{
            const a = aligns[idx];
            return a ? {
                textAlign: a
            } : undefined;
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md-table-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "md-table",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: headers.map((cell, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: cellStyle(idx),
                                    children: renderInline(cell, options)
                                }, idx, false, {
                                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rows.map((row, rIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: headers.map((_, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: cellStyle(cIdx),
                                        children: renderInline(row[cIdx] ?? '', options)
                                    }, cIdx, false, {
                                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                        lineNumber: 324,
                                        columnNumber: 19
                                    }, this))
                            }, rIdx, false, {
                                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this)
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 311,
            columnNumber: 7
        }, this);
    }
    if (block.kind === 'hr') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "md-hr"
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 334,
            columnNumber: 12
        }, this);
    }
    return null;
}
function parseCodeCommentDirective(line) {
    const match = /^\s*::code-comment\{([\s\S]*)\}\s*$/.exec(line);
    if (!match) return null;
    const attrs = parseDirectiveAttributes(match[1] ?? '');
    const body = attrs.get('body')?.trim() ?? '';
    const file = attrs.get('file')?.trim() ?? '';
    if (!body || !file) return null;
    const title = attrs.get('title')?.trim() || 'Code comment';
    const start = parsePositiveInt(attrs.get('start'));
    const end = parsePositiveInt(attrs.get('end'));
    const priority = parsePositiveInt(attrs.get('priority'));
    return {
        title,
        body,
        file,
        ...start === undefined ? {} : {
            start
        },
        ...end === undefined ? {} : {
            end
        },
        ...priority === undefined ? {} : {
            priority
        }
    };
}
function parseDirectiveAttributes(raw) {
    const attrs = new Map();
    const attrRe = /([A-Za-z_][\w-]*)\s*=\s*("([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|[^\s}]+)/g;
    let match;
    while(match = attrRe.exec(raw)){
        const key = match[1];
        const quoted = match[3] ?? match[4];
        const value = quoted ?? match[2] ?? '';
        attrs.set(key, unescapeDirectiveValue(value.replace(/^['"]|['"]$/g, '')));
    }
    return attrs;
}
function unescapeDirectiveValue(value) {
    return value.replace(/\\(["'\\])/g, '$1');
}
function parsePositiveInt(value) {
    if (!value) return undefined;
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}
function CodeCommentBlock({ comment }) {
    const location = codeCommentLocation(comment);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "md-code-comment",
        "data-priority": comment.priority ?? undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md-code-comment-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "md-code-comment-icon",
                        "aria-hidden": true,
                        children: "!"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: renderInline(comment.title)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    comment.priority ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "md-code-comment-priority",
                        children: [
                            "P",
                            comment.priority
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "md-code-comment-body",
                children: renderInline(comment.body)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "md-code-comment-file",
                children: location
            }, void 0, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 386,
        columnNumber: 5
    }, this);
}
_c = CodeCommentBlock;
function codeCommentLocation(comment) {
    if (!comment.start) return comment.file;
    if (comment.end && comment.end !== comment.start) {
        return `${comment.file}:${comment.start}-${comment.end}`;
    }
    return `${comment.file}:${comment.start}`;
}
// Long blocks past this many lines start collapsed, matching Lobe's
// "fold tall code" affordance so a single dump can't swallow the viewport.
const CODE_COLLAPSE_LINE_THRESHOLD = 16;
function MarkdownCodeBlock({ body, lang }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedHtml, setHighlightedHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const resetTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const copyLabel = copied ? t('fileViewer.copied') : t('fileViewer.copy');
    const lineCount = body.split('\n').length;
    const collapsible = lineCount > CODE_COLLAPSE_LINE_THRESHOLD;
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(collapsible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarkdownCodeBlock.useEffect": ()=>({
                "MarkdownCodeBlock.useEffect": ()=>{
                    if (resetTimerRef.current != null) window.clearTimeout(resetTimerRef.current);
                }
            })["MarkdownCodeBlock.useEffect"]
    }["MarkdownCodeBlock.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarkdownCodeBlock.useEffect": ()=>{
            if (!lang) return;
            let cancelled = false;
            __turbopack_context__.A("[project]/apps/web/src/runtime/shiki.ts [app-client] (ecmascript, async loader)").then({
                "MarkdownCodeBlock.useEffect": ({ highlightCode })=>highlightCode(body, lang).then({
                        "MarkdownCodeBlock.useEffect": (html)=>{
                            if (!cancelled && html) setHighlightedHtml(html);
                        }
                    }["MarkdownCodeBlock.useEffect"])
            }["MarkdownCodeBlock.useEffect"]).catch({
                "MarkdownCodeBlock.useEffect": ()=>{}
            }["MarkdownCodeBlock.useEffect"]);
            return ({
                "MarkdownCodeBlock.useEffect": ()=>{
                    cancelled = true;
                }
            })["MarkdownCodeBlock.useEffect"];
        }
    }["MarkdownCodeBlock.useEffect"], [
        body,
        lang
    ]);
    async function handleCopy() {
        const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$copy$2d$to$2d$clipboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(body);
        if (!ok) return;
        setCopied(true);
        if (resetTimerRef.current != null) window.clearTimeout(resetTimerRef.current);
        resetTimerRef.current = window.setTimeout(()=>{
            setCopied(false);
            resetTimerRef.current = null;
        }, 1600);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md-code-block",
        "data-collapsed": collapsed ? 'true' : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md-code-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "md-code-lang",
                        children: lang || 'text'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md-code-actions",
                        children: [
                            collapsible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "md-code-action md-code-action-icon",
                                onClick: ()=>setCollapsed((c)=>!c),
                                "aria-expanded": !collapsed,
                                "aria-label": collapsed ? t('designFiles.expandGroup') : t('designFiles.collapseGroup'),
                                title: collapsed ? t('designFiles.expandGroup') : t('designFiles.collapseGroup'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: collapsed ? 'chevron-right' : 'chevron-down',
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "md-code-action",
                                onClick: ()=>{
                                    void handleCopy();
                                },
                                "aria-label": copyLabel,
                                title: copyLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: copied ? 'check' : 'copy',
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: copyLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md-code-body",
                children: highlightedHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md-code md-code-highlighted",
                    dangerouslySetInnerHTML: {
                        __html: highlightedHtml
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                    lineNumber: 480,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "md-code",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        "data-lang": lang ?? undefined,
                        children: body
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                        lineNumber: 486,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                    lineNumber: 485,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
_s(MarkdownCodeBlock, "+agVB6B7iOkG7ekFh5T7KL6VRlA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$i18n$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
    ];
});
_c1 = MarkdownCodeBlock;
// Allowed schemes / forms for image `src` attributes. The BYOK chat
// tool loop emits relative URLs like `/api/byok-image/<id>.png` which
// the web's Next.js rewrites proxy to the daemon — that's the common
// case. data: + blob: cover inline / generated images. http(s):// is
// allowed so a model can reference public images. Anything else
// (javascript:, file:, vbscript:, …) is rejected so a hallucinated
// or adversarial URL cannot exfiltrate or execute.
function isSafeMarkdownImageSrc(src) {
    if (!src) return false;
    if (src.startsWith('/') && !src.startsWith('//')) return true;
    return src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:image/') || src.startsWith('blob:');
}
const INLINE_CODE_HEX_COLOR_RE = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const PROSE_HEX_COLOR_RE = /(^|[^\w#])(#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}))(?![\w-])/g;
function isInlineCodeHexColor(value) {
    return INLINE_CODE_HEX_COLOR_RE.test(value);
}
function ColorSwatch({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "md-color-swatch",
        "aria-hidden": "true",
        style: {
            backgroundColor: color
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 521,
        columnNumber: 5
    }, this);
}
_c2 = ColorSwatch;
function renderInlineCodeSpan(value, key) {
    if (!isInlineCodeHexColor(value)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "md-inline-code",
            children: value
        }, key, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 532,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
        className: "md-inline-code md-color-token",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorSwatch, {
                color: value
            }, void 0, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            value
        ]
    }, key, true, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 538,
        columnNumber: 5
    }, this);
}
function renderColorToken(value, key) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "md-color-token",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorSwatch, {
                color: value
            }, void 0, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            value
        ]
    }, key, true, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 547,
        columnNumber: 5
    }, this);
}
// Inline pass: tokenize into runs of `code`, **bold**, *italic*, links,
// and plain text. We walk the string with a regex that matches whichever
// delimiter shows up next; everything between delimiters becomes a text
// span (which itself still gets autolink scanning).
function renderInline(text, options) {
    const out = [];
    const onLinkClick = options?.onLinkClick;
    const linkClickHandler = onLinkClick ? (href)=>(event)=>onLinkClick(href, event) : undefined;
    // Order matters:
    //  1. inline code first so its contents are not re-tokenized as bold/italic.
    //  2. image syntax `![alt](url)` BEFORE the link branch. Both share
    //     `[…](…)` and the image is only distinguished by the leading `!`;
    //     letting the link branch win would render `[alt](url)` as a text
    //     link with `!` stranded as a sibling text node and the user would
    //     see the link copy but never the image.
    //  3. explicit `[text](url)` markdown links before bare URL autolink so the
    //     autolink does not greedily swallow the closing paren.
    //  4. bare http(s) URL autolink BEFORE italic markers — chat output often
    //     contains OAuth-style links with `_type=` / `_id=` query params, and
    //     leaving italic to win turns the URL into an italic-fragmented mess.
    //  5. bold (**a** / __a__) before italic (*a* / _a_).
    const re = /(`[^`]+`)|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)|(https?:\/\/[^\s)<>]+)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*\n]+\*)|(_[^_\n]+_)/g;
    let lastIndex = 0;
    let m;
    let key = 0;
    while(m = re.exec(text)){
        if (m.index > lastIndex) {
            pushText(out, text.slice(lastIndex, m.index), key++, options);
        }
        if (m[1]) {
            out.push(renderInlineCodeSpan(m[1].slice(1, -1), key++));
        } else if (m[3] !== undefined) {
            // Image: m[2] = alt (may be empty), m[3] = src
            const src = m[3];
            const alt = m[2] || '';
            if (isSafeMarkdownImageSrc(src)) {
                out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "md-image",
                    src: src,
                    alt: alt,
                    loading: "lazy",
                    referrerPolicy: "no-referrer",
                    style: {
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 6
                    }
                }, key++, false, {
                    fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                    lineNumber: 594,
                    columnNumber: 11
                }, this));
            } else {
                // Unsafe scheme — drop the image tag but keep the alt text so
                // the user sees what the model meant to show.
                pushText(out, alt, key++, options);
            }
        } else if (m[4] && m[5]) {
            const href = m[5];
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "md-link",
                href: href,
                target: "_blank",
                rel: "noreferrer noopener",
                onClick: linkClickHandler?.(href),
                children: m[4]
            }, key++, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 612,
                columnNumber: 9
            }, this));
        } else if (m[6]) {
            // Bare URL — autolink with the URL as both href and visible text,
            // matching the Markdown `<https://…>` autolink convention.
            const [href, suffix] = splitTrailingAutolinkPunctuation(m[6]);
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "md-link md-link-bare",
                href: href,
                target: "_blank",
                rel: "noreferrer noopener",
                onClick: linkClickHandler?.(href),
                children: href
            }, key++, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 628,
                columnNumber: 9
            }, this));
            if (suffix) pushText(out, suffix, key++);
        } else if (m[7]) {
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: m[7].slice(2, -2)
            }, key++, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 641,
                columnNumber: 16
            }, this));
        } else if (m[8]) {
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: m[8].slice(2, -2)
            }, key++, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 643,
                columnNumber: 16
            }, this));
        } else if (m[9]) {
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                children: m[9].slice(1, -1)
            }, key++, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 645,
                columnNumber: 16
            }, this));
        } else if (m[10]) {
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                children: m[10].slice(1, -1)
            }, key++, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 647,
                columnNumber: 16
            }, this));
        }
        lastIndex = re.lastIndex;
    }
    if (lastIndex < text.length) {
        pushText(out, text.slice(lastIndex), key++, options);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: out
    }, void 0, false, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 654,
        columnNumber: 10
    }, this);
}
// Walk a plain text run, autolinking bare URLs and preserving the rest as
// text nodes. Newlines inside a paragraph become explicit <br />s — the
// upstream parser has already left them in place because chat output
// often relies on hard line breaks rather than blank-line separation.
function pushText(out, text, baseKey, options) {
    if (!text) return;
    const onLinkClick = options?.onLinkClick;
    const urlRe = /(https?:\/\/[^\s)]+)/g;
    const segments = [];
    let lastIndex = 0;
    let m;
    let k = 0;
    while(m = urlRe.exec(text)){
        if (m.index > lastIndex) {
            segments.push(...withBreaksAndColorSwatches(text.slice(lastIndex, m.index), `${baseKey}-${k++}`));
        }
        const [href, suffix] = splitTrailingAutolinkPunctuation(m[1]);
        segments.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: "md-link",
            href: href,
            target: "_blank",
            rel: "noreferrer noopener",
            onClick: onLinkClick ? (event)=>onLinkClick(href, event) : undefined,
            children: href
        }, `${baseKey}-${k++}`, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 675,
            columnNumber: 7
        }, this));
        if (suffix) {
            segments.push(...withBreaksAndColorSwatches(suffix, `${baseKey}-${k++}`));
        }
        lastIndex = urlRe.lastIndex;
    }
    if (lastIndex < text.length) {
        segments.push(...withBreaksAndColorSwatches(text.slice(lastIndex), `${baseKey}-${k++}`));
    }
    out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: segments
    }, baseKey, false, {
        fileName: "[project]/apps/web/src/runtime/markdown.tsx",
        lineNumber: 694,
        columnNumber: 12
    }, this));
}
function splitTrailingAutolinkPunctuation(url) {
    const match = /([.,!?;:，。！？；：、'"」』】》〉）]+)$/.exec(url);
    if (!match || !match[1]) return [
        url,
        ''
    ];
    const trimmed = url.slice(0, -match[1].length);
    return trimmed ? [
        trimmed,
        match[1]
    ] : [
        url,
        ''
    ];
}
function withBreaksAndColorSwatches(text, baseKey) {
    const parts = text.split('\n');
    const out = [];
    parts.forEach((part, i)=>{
        if (i > 0) out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, `${baseKey}-br-${i}`, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 708,
            columnNumber: 25
        }, this));
        if (part) out.push(...withProseColorSwatches(part, `${baseKey}-t-${i}`));
    });
    return out;
}
function withProseColorSwatches(text, baseKey) {
    const out = [];
    let lastIndex = 0;
    let match;
    let key = 0;
    PROSE_HEX_COLOR_RE.lastIndex = 0;
    while(match = PROSE_HEX_COLOR_RE.exec(text)){
        const prefix = match[1] ?? '';
        const color = match[2] ?? '';
        const colorIndex = match.index + prefix.length;
        if (colorIndex > lastIndex) {
            out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: text.slice(lastIndex, colorIndex)
            }, `${baseKey}-${key++}`, false, {
                fileName: "[project]/apps/web/src/runtime/markdown.tsx",
                lineNumber: 725,
                columnNumber: 16
            }, this));
        }
        out.push(renderColorToken(color, `${baseKey}-${key++}`));
        lastIndex = colorIndex + color.length;
    }
    if (lastIndex < text.length) {
        out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: text.slice(lastIndex)
        }, `${baseKey}-${key++}`, false, {
            fileName: "[project]/apps/web/src/runtime/markdown.tsx",
            lineNumber: 731,
            columnNumber: 14
        }, this));
    }
    return out;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CodeCommentBlock");
__turbopack_context__.k.register(_c1, "MarkdownCodeBlock");
__turbopack_context__.k.register(_c2, "ColorSwatch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/partial-json.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Truncation-tolerant JSON parsing for streamed LLM output. The
 * `<question-form>` discovery / clarification form needs to render a JSON
 * *prefix* that grows one token at a time, so it relies on this repair pass.
 *
 * It deliberately handles only the shapes a streaming model emits — balanced
 * structure that simply hasn't finished — not arbitrary corruption. Callers
 * still wrap the `JSON.parse` in try/catch and keep their last good result.
 */ /**
 * Repair a truncated JSON prefix into the largest valid JSON text we can
 * parse, by walking the buffer once to track string/escape state and the
 * open-container stack, then closing whatever is still open.
 */ __turbopack_context__.s([
    "parsePartialJson",
    ()=>parsePartialJson,
    "repairJsonPrefix",
    ()=>repairJsonPrefix
]);
function repairJsonPrefix(buf) {
    const stack = []; // closers owed, e.g. ['}', ']']
    let inStr = false;
    let esc = false;
    for(let i = 0; i < buf.length; i++){
        const c = buf[i];
        if (inStr) {
            if (esc) esc = false;
            else if (c === '\\') esc = true;
            else if (c === '"') inStr = false;
            continue;
        }
        if (c === '"') inStr = true;
        else if (c === '{') stack.push('}');
        else if (c === '[') stack.push(']');
        else if (c === '}' || c === ']') stack.pop();
    }
    let out = buf;
    // 1. Close a string cut off mid-value (or mid-key). First neutralize a
    //    dangling escape at the cut point, otherwise the closing quote would be
    //    swallowed (`...x\` + `"` → escaped quote) or a partial `\uXXXX` would
    //    be an invalid escape — either makes JSON.parse fail and collapses the
    //    live preview. Common in prompts that mention Windows paths, regexes,
    //    or escaped quotes.
    if (inStr) {
        out = out.replace(/\\u[0-9a-fA-F]{0,3}$/, ''); // incomplete \uXXXX
        if (/(?:^|[^\\])(?:\\\\)*\\$/.test(out)) out = out.slice(0, -1); // lone trailing backslash
        out += '"';
    }
    // 2. Trim trailing structural noise that can't be completed into a value:
    //    a dangling comma, a `"key":` with no value yet, and an unfinished
    //    *scalar* value cut mid-token (a partial `true`/`false`/`null`, or a
    //    number ending on `.`/`e`/sign). Leaving those makes `{… :f}` etc.
    //    unparseable, collapsing the live preview whenever a literal splits
    //    across deltas. Each trim leaves a `"key":` / `,` / `[` boundary that
    //    the next loop iteration cleans up. Complete literals (`true`, `12`,
    //    `1.5`, `1e3`) are not prefixes of these patterns, so they survive.
    const valueStart = '([:[,]\\s*)';
    let prev;
    do {
        prev = out;
        out = out.replace(/[,\s]+$/, '');
        out = out.replace(/"(?:[^"\\]|\\.)*"\s*:\s*$/, ''); // key + colon, no value
        out = out.replace(new RegExp(`${valueStart}(?:tru|tr|t|fals|fal|fa|f|nul|nu|n)$`), '$1'); // partial bool/null
        out = out.replace(new RegExp(`${valueStart}-?(?:\\d+\\.?\\d*|\\d*\\.\\d+)?[eE][+-]?$`), '$1'); // dangling exponent
        out = out.replace(new RegExp(`${valueStart}-?\\d*\\.$`), '$1'); // number ending in '.'
        out = out.replace(new RegExp(`${valueStart}-$`), '$1'); // lone minus
        out = out.replace(/"(?:[^"\\]|\\.)*"\s*:\s*$/, ''); // key + colon exposed by the trims above
        out = out.replace(/[,\s]+$/, '');
    }while (out !== prev)
    // A bare trailing key (string with no following colon) only happens when
    // the *innermost* open container is an object. Drop it so we don't emit
    // `{"hea"}` which is invalid (key without value).
    if (stack[stack.length - 1] === '}' && /"(?:[^"\\]|\\.)*"\s*$/.test(out)) {
        const trimmed = out.replace(/"(?:[^"\\]|\\.)*"\s*$/, '');
        // Only drop it if what precedes is a container/comma boundary (i.e. the
        // string really is a pending key, not a completed value like `:"x"`).
        if (/[{,]\s*$/.test(trimmed)) {
            out = trimmed.replace(/[,\s]+$/, '');
        }
    }
    // 3. Close every still-open container, innermost first.
    for(let i = stack.length - 1; i >= 0; i--)out += stack[i];
    return out;
}
function parsePartialJson(buf) {
    const trimmed = buf.trim();
    if (!trimmed) return null;
    try {
        return JSON.parse(repairJsonPrefix(trimmed));
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/chat-events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendErrorStatusEvent",
    ()=>appendErrorStatusEvent
]);
function appendErrorStatusEvent(message, detail, code) {
    if (!detail) return message;
    const events = message.events ?? [];
    const last = events[events.length - 1];
    if (last?.kind === 'status' && last.label === 'error' && last.detail === detail) {
        return message;
    }
    if (!detail?.trim()) {
        return message;
    }
    return {
        ...message,
        events: [
            ...events,
            {
                kind: 'status',
                label: 'error',
                detail,
                ...code ? {
                    code
                } : {}
            }
        ]
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/resume.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Canonical prompt sent by the "Continue the run" affordance on a resumable
// failed run. The daemon resumes the persisted CLI session for this
// (conversation, agent) and seeds only this turn (skipTranscript), so the agent
// continues from its committed work. Worded to be correct whether or not a
// committed boundary exists, and deliberately NOT a re-send of the original
// user turn — a resume must not duplicate the original request the way the
// from-scratch Retry path (retryOfAssistantId) does.
__turbopack_context__.s([
    "RESUME_CONTINUE_PROMPT",
    ()=>RESUME_CONTINUE_PROMPT
]);
const RESUME_CONTINUE_PROMPT = 'The previous turn was interrupted by a transient failure. ' + 'If your last response was cut off, continue it from where you left off ' + 'and keep any work already completed; otherwise complete the original ' + 'request. Inspect the current project files as needed before making ' + 'further changes.';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/design-system-package-audit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildDesignSystemPackageAuditRepairPrompt",
    ()=>buildDesignSystemPackageAuditRepairPrompt,
    "designSystemPackageAuditHasFindings",
    ()=>designSystemPackageAuditHasFindings,
    "summarizeDesignSystemPackageAudit",
    ()=>summarizeDesignSystemPackageAudit
]);
function issueCountLabel(count, singular) {
    return `${count} ${singular}${count === 1 ? '' : 's'}`;
}
function auditIssueSummary(issue) {
    return issue.path ? `${issue.code} (${issue.path})` : issue.code;
}
function targetedAuditRepairActions(issues) {
    const codes = new Set(issues.map((issue)=>issue.code));
    const actions = [];
    const hasAny = (...values)=>values.some((value)=>codes.has(value));
    if (hasAny('ui_kit_index_missing_component_references', 'ui_kit_index_missing_runtime_bootstrap', 'ui_kit_index_missing_component_composition', 'ui_kit_index_missing_jsx_runtime', 'ui_kit_component_missing_browser_global')) {
        actions.push('- Rebuild `ui_kits/app/index.html` as a runnable UI-kit entry: load React, ReactDOM, Babel, and `../../colors_and_type.css`; create `#root`; load at least three `components/*.jsx` scripts; expose loaded components on `window.ComponentName`; then render `<App />` with `ReactDOM.createRoot(...).render(...)`.');
    }
    if (hasAny('missing_modular_ui_kit', 'thin_modular_ui_kit', 'missing_ui_kit_component_roles', 'ui_kit_app_missing_role_composition')) {
        actions.push('- Make `ui_kits/app/components/` substantive and role-based: include an app shell plus navigation/sidebar, list or rail, main workspace, composer/input, and message/card components when source evidence contains those product surfaces.');
    }
    if (hasAny('missing_skill_frontmatter', 'skill_missing_reuse_sections')) {
        actions.push('- Rewrite `SKILL.md` as a discoverable skill package with YAML frontmatter (`name`, `description`, `user-invocable`) and sections for What is inside, Source context, When to use this skill, How to use, and Design system highlights.');
    }
    if (hasAny('readme_missing_product_overview', 'readme_missing_package_reuse_guide', 'readme_missing_preview_manifest')) {
        actions.push('- Rewrite `README.md` as a Claude Design package guide with Product Overview/Product Context, source/context references, Package Contents, preview-card manifest, preserved assets/fonts/build/source examples, `ui_kits/app/`, and a concrete reuse or review workflow.');
    }
    if (hasAny('readme_missing_preview_manifest')) {
        actions.push('- Add a `## Preview Manifest` section to `README.md` that lists every generated `preview/*.html` card with the exact path, review purpose, and source-backed components or assets it demonstrates.');
    }
    if (hasAny('missing_source_component_examples', 'thin_source_component_examples')) {
        actions.push('- Copy real high-signal source snapshots into `source_examples/` or equivalent package source files; keep original component code substantial enough to inspect, not tiny generated stubs.');
    }
    if (hasAny('missing_build_assets', 'build_assets_not_source_backed', 'brand_assets_preview_not_using_preserved_assets')) {
        actions.push('- Preserve runtime/build assets by copying originals from `context/.../files/build/...` into root `build/` byte-for-byte, keep original filenames such as `icon.png` or `tray_icon.png`, and update `preview/brand-assets.html` to visibly reference those files.');
    }
    if (hasAny('preview_cards_missing_source_component_context', 'generic_visual_artifacts')) {
        actions.push('- Update focused preview cards to name or model actual source components from the evidence, such as Sidebar, Navbar, Chat, Inputbar, Message, Topic, Settings, or selector components, instead of abstract token-only swatches.');
    }
    return actions;
}
function designSystemPackageAuditHasFindings(audit) {
    return audit.errors.length + audit.warnings.length > 0;
}
function summarizeDesignSystemPackageAudit(audit) {
    if (!designSystemPackageAuditHasFindings(audit)) {
        return `Package audit passed (${issueCountLabel(audit.filesInspected, 'file')} inspected).`;
    }
    const countLabel = [
        audit.errors.length ? issueCountLabel(audit.errors.length, 'error') : '',
        audit.warnings.length ? issueCountLabel(audit.warnings.length, 'warning') : ''
    ].filter(Boolean).join(' and ');
    const findings = [
        ...audit.errors,
        ...audit.warnings
    ];
    const listed = findings.slice(0, 5).map(auditIssueSummary).join(', ');
    const extra = findings.length > 5 ? `, +${findings.length - 5} more` : '';
    return `Package audit found ${countLabel}: ${listed}${extra}.`;
}
function buildDesignSystemPackageAuditRepairPrompt(audit) {
    if (!designSystemPackageAuditHasFindings(audit)) return null;
    const findings = [
        ...audit.errors,
        ...audit.warnings
    ].slice(0, 16).map((issue)=>{
        const pathLabel = issue.path ? ` ${issue.path}` : '';
        return `- [${issue.severity}] ${issue.code}${pathLabel}: ${issue.message}`;
    });
    const hiddenCount = audit.errors.length + audit.warnings.length - findings.length;
    if (hiddenCount > 0) findings.push(`- ...and ${hiddenCount} more audit finding(s).`);
    const targetedActions = targetedAuditRepairActions([
        ...audit.errors,
        ...audit.warnings
    ]);
    return [
        'Fix the design-system package audit findings below.',
        '',
        'Treat every error and warning as blocking. Do not suppress the audit, delete evidence, or satisfy findings by only rewriting prose; update the real package artifacts and preserve source-backed files outside `context/` when the audit asks for them.',
        '',
        'Claude-style repair checklist:',
        '- If runtime/build assets are reported, preserve representative originals under root `build/` with their original filenames, copy them byte-for-byte from captured context snapshots, and make `preview/brand-assets.html` visibly reference the preserved files.',
        '- If source examples are reported, copy substantive original component snapshots into `source_examples/` or equivalent package source files; do not create tiny stubs that only share component names.',
        '- If UI-kit findings are reported, make `ui_kits/app/index.html` load `../../colors_and_type.css`, load/import modular files from `ui_kits/app/components/`, and mount a composed interface.',
        '- If README or SKILL findings are reported, keep them in sync with the final file structure and include Claude Design-style reusable package guidance.',
        '',
        ...targetedActions.length > 0 ? [
            'Targeted repair actions:',
            ...targetedActions,
            ''
        ] : [],
        'Update the package files directly, then rerun `"$OD_NODE_BIN" "$OD_BIN" tools connectors design-system-package-audit --path . --fail-on-warnings` until it passes.',
        '',
        'Audit findings:',
        ...findings
    ].join('\n');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/design-toolbox.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Design-toolbox action catalogue + pure helpers shared between the composer
// (which owns the apply/staging engine) and the assistant "next step" card
// (which surfaces a curated couple of these actions as primary follow-up rows).
// Keep this module free of React and composer-internal state so both surfaces
// can import the same source of truth.
__turbopack_context__.s([
    "DESIGN_TOOLBOX_ACTIONS",
    ()=>DESIGN_TOOLBOX_ACTIONS,
    "FEATURED_DESIGN_TOOLBOX_ACTION_IDS",
    ()=>FEATURED_DESIGN_TOOLBOX_ACTION_IDS,
    "designToolboxActionBadge",
    ()=>designToolboxActionBadge,
    "designToolboxActionDescription",
    ()=>designToolboxActionDescription,
    "designToolboxActionMatchesQuery",
    ()=>designToolboxActionMatchesQuery,
    "designToolboxActionTitle",
    ()=>designToolboxActionTitle,
    "findDesignToolboxSkill",
    ()=>findDesignToolboxSkill,
    "getDesignToolboxAction",
    ()=>getDesignToolboxAction,
    "skillMatchesQuery",
    ()=>skillMatchesQuery
]);
const DESIGN_TOOLBOX_ACTIONS = [
    {
        id: 'auto-match',
        icon: 'sparkles',
        preferredSkillIds: [
            'creative-director',
            'frontend-design',
            'design-taste-frontend'
        ],
        categoryHints: [
            'creative-direction',
            'web-artifacts'
        ],
        searchTerms: [
            'match',
            'recommend',
            'next step',
            'workflow',
            'skills',
            'mcp',
            'plugins',
            'connector',
            'files',
            '匹配',
            '下一步',
            '推荐',
            '流程',
            '审美'
        ]
    },
    {
        id: 'motion',
        icon: 'play',
        preferredSkillIds: [
            'emilkowalski-motion',
            'gsap-react',
            'gsap-scrolltrigger',
            'gsap-timeline',
            'gsap-core'
        ],
        categoryHints: [
            'animation-motion'
        ],
        searchTerms: [
            'animation',
            'motion',
            'gsap',
            'micro interaction',
            'scrolltrigger',
            '动效',
            '动画',
            '微交互'
        ]
    },
    {
        id: 'motion-polish',
        icon: 'sliders',
        preferredSkillIds: [
            'gsap-performance',
            'emilkowalski-motion',
            'gsap-timeline',
            'gsap-core'
        ],
        categoryHints: [
            'animation-motion'
        ],
        searchTerms: [
            'motion polish',
            'easing',
            'performance',
            'reduced motion',
            'timeline',
            '动效润色',
            '缓动',
            '性能'
        ]
    },
    {
        id: 'anti-ai-polish',
        icon: 'paint-bucket',
        preferredSkillIds: [
            'design-taste-frontend',
            'gpt-taste',
            'frontend-design',
            'impeccable-design-polish'
        ],
        categoryHints: [
            'creative-direction',
            'web-artifacts'
        ],
        searchTerms: [
            'anti ai',
            'anti slop',
            'taste',
            'generic',
            'beautify',
            '反 ai',
            '去 ai 味',
            '美化',
            '润色'
        ]
    },
    {
        id: 'visual-polish',
        icon: 'palette',
        preferredSkillIds: [
            'impeccable-design-polish',
            'frontend-design',
            'creative-director',
            'design-taste-frontend'
        ],
        categoryHints: [
            'creative-direction',
            'web-artifacts'
        ],
        searchTerms: [
            'polish',
            'critique',
            'audit',
            'harden',
            'responsive',
            'accessibility',
            '润色',
            '审稿',
            '交付'
        ]
    },
    {
        id: 'image-gen',
        icon: 'image',
        preferredSkillIds: [
            'imagegen-frontend-web',
            'fal-generate',
            'imagen',
            'venice-image-generate',
            'image-enhancer'
        ],
        categoryHints: [
            'image-generation'
        ],
        searchTerms: [
            'image',
            'generate image',
            'visual reference',
            'moodboard',
            'section image',
            '生图',
            '配图',
            '视觉参考'
        ]
    },
    {
        id: 'video-gen',
        icon: 'play',
        preferredSkillIds: [
            'video-hyperframes',
            'sora',
            'fal-video-edit',
            'venice-video',
            'replicate'
        ],
        categoryHints: [
            'video-generation'
        ],
        searchTerms: [
            'video',
            'sora',
            'remotion',
            'hyperframes',
            'storyboard',
            '生视频',
            '视频',
            '分镜'
        ]
    }
];
const FEATURED_DESIGN_TOOLBOX_ACTION_IDS = [
    'auto-match',
    'visual-polish'
];
function getDesignToolboxAction(id) {
    return DESIGN_TOOLBOX_ACTIONS.find((action)=>action.id === id) ?? null;
}
function designToolboxActionTitle(action, t) {
    return t(`chat.designToolbox.action.${action.id}.title`);
}
function designToolboxActionBadge(action, t) {
    return t(`chat.designToolbox.action.${action.id}.badge`);
}
function designToolboxActionDescription(action, t) {
    return t(`chat.designToolbox.action.${action.id}.description`);
}
function designToolboxActionMatchesQuery(action, query, skill, t, extra = []) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
        designToolboxActionTitle(action, t),
        designToolboxActionBadge(action, t),
        designToolboxActionDescription(action, t),
        ...action.searchTerms,
        skill?.id ?? '',
        skill?.name ?? '',
        skill?.description ?? '',
        skill?.category ?? '',
        ...extra
    ].join(' ').toLowerCase().includes(q);
}
function skillMatchesQuery(skill, query, extra = []) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
        skill.id,
        skill.name,
        skill.description,
        skill.mode,
        skill.surface ?? '',
        ...skill.triggers,
        ...extra
    ].join(' ').toLowerCase().includes(q);
}
function findDesignToolboxSkill(action, skills) {
    for (const id of action.preferredSkillIds){
        const exact = skills.find((skill)=>skill.id === id || skill.name === id);
        if (exact) return exact;
    }
    const categoryHintSet = new Set(action.categoryHints);
    const categoryMatch = skills.find((skill)=>skill.category ? categoryHintSet.has(skill.category) : false);
    if (categoryMatch) return categoryMatch;
    return skills.find((skill)=>action.searchTerms.some((term)=>skillMatchesQuery(skill, term))) ?? null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/todos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTodoWriteToolName",
    ()=>isTodoWriteToolName,
    "latestTodoWriteInputForPinnedCard",
    ()=>latestTodoWriteInputForPinnedCard,
    "latestTodoWriteInputFromMessages",
    ()=>latestTodoWriteInputFromMessages,
    "latestTodosFromEvents",
    ()=>latestTodosFromEvents,
    "parseTodoWriteInput",
    ()=>parseTodoWriteInput,
    "unfinishedTodosFromEvents",
    ()=>unfinishedTodosFromEvents
]);
function parseTodoWriteInput(input) {
    if (!input || typeof input !== 'object') return [];
    const obj = input;
    const rawItems = Array.isArray(obj.todos) ? obj.todos : Array.isArray(obj.plan) ? obj.plan : [];
    return rawItems.map((todo)=>{
        if (!todo || typeof todo !== 'object') return null;
        const record = todo;
        const content = typeof record.content === 'string' ? record.content : typeof record.step === 'string' ? record.step : '';
        if (!content) return null;
        const status = normalizeTodoStatus(record.status);
        return {
            content,
            status,
            activeForm: typeof record.activeForm === 'string' ? record.activeForm : typeof record.active_form === 'string' ? record.active_form : undefined
        };
    }).filter((todo)=>todo !== null);
}
function normalizeTodoStatus(status) {
    if (status === 'completed' || status === 'in_progress' || status === 'stopped') {
        return status;
    }
    if (status === 'cancelled' || status === 'canceled' || status === 'failed') {
        return 'stopped';
    }
    return 'pending';
}
function latestTodosFromEvents(events) {
    if (!events) return [];
    for(let i = events.length - 1; i >= 0; i -= 1){
        const event = events[i];
        if (event?.kind !== 'tool_use' || !isTodoWriteToolName(event.name)) continue;
        return parseTodoWriteInput(event.input);
    }
    return [];
}
function unfinishedTodosFromEvents(events) {
    return latestTodosFromEvents(events).filter((todo)=>todo.status !== 'completed');
}
function latestTodoWriteInputFromMessages(messages) {
    if (!messages || messages.length === 0) return null;
    for(let mi = messages.length - 1; mi >= 0; mi -= 1){
        const events = messages[mi]?.events;
        if (!events || events.length === 0) continue;
        for(let ei = events.length - 1; ei >= 0; ei -= 1){
            const event = events[ei];
            if (event?.kind !== 'tool_use') continue;
            if (!isTodoWriteToolName(event.name)) continue;
            return event.input;
        }
    }
    return null;
}
function latestTodoWriteInputForPinnedCard(messages) {
    if (!messages || messages.length === 0) return null;
    for(let mi = messages.length - 1; mi >= 0; mi -= 1){
        const message = messages[mi];
        const events = message?.events;
        if (!events || events.length === 0) continue;
        for(let ei = events.length - 1; ei >= 0; ei -= 1){
            const event = events[ei];
            if (event?.kind !== 'tool_use') continue;
            if (!isTodoWriteToolName(event.name)) continue;
            if (!hasTerminalRunEnded(message.runStatus, message.endedAt)) {
                return event.input;
            }
            return stoppedTodoWriteInput(event.input);
        }
    }
    return null;
}
function isTodoWriteToolName(name) {
    return name === 'TodoWrite' || name === 'todowrite' || name === 'todo_write' || name === 'update_plan';
}
function hasTerminalRunEnded(runStatus, endedAt) {
    return runStatus === 'succeeded' || runStatus === 'failed' || runStatus === 'canceled' || runStatus === undefined && endedAt !== undefined;
}
function stoppedTodoWriteInput(input) {
    if (!input || typeof input !== 'object') return input;
    const obj = input;
    const key = Array.isArray(obj.todos) ? 'todos' : Array.isArray(obj.plan) ? 'plan' : null;
    if (!key) return input;
    const items = obj[key];
    return {
        ...input,
        [key]: items.map((todo)=>{
            if (!todo || typeof todo !== 'object') return todo;
            const record = todo;
            if (record.status !== 'in_progress') return todo;
            return {
                ...record,
                status: 'stopped'
            };
        })
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/tool-renderers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Per-tool renderer registry — the open-design analogue of CopilotKit's
 * `useCopilotAction({ render })` and AG-UI's tool render-prop contract.
 *
 * Built-in tools (Read/Write/Edit/Bash/...) keep their hand-tuned cards in
 * `ToolCard.tsx`. The registry is the extension point for everything else:
 * skill-emitted tools, MCP-style external tools, future plugins. Anything
 * registered here is consulted *before* the hardcoded family ladder, so a
 * third party can override a built-in if they really want to.
 *
 * The render-prop shape mirrors AG-UI:
 *   ({ status, name, args, result, isError }) => ReactNode
 * where `status` is the four-state lifecycle agreed across LangGraph,
 * CrewAI, and OpenAI tool calls.
 */ __turbopack_context__.s([
    "clearToolRenderers",
    ()=>clearToolRenderers,
    "deriveToolStatus",
    ()=>deriveToolStatus,
    "getToolRenderer",
    ()=>getToolRenderer,
    "registerToolRenderer",
    ()=>registerToolRenderer,
    "toRenderProps",
    ()=>toRenderProps
]);
const renderers = new Map();
function registerToolRenderer(name, renderer) {
    renderers.set(name, renderer);
    return ()=>{
        if (renderers.get(name) === renderer) renderers.delete(name);
    };
}
function getToolRenderer(name) {
    return renderers.get(name);
}
function clearToolRenderers() {
    renderers.clear();
}
function deriveToolStatus(result, runStreaming, runSucceeded = false) {
    if (result) return result.isError ? 'error' : 'complete';
    if (runStreaming) return 'executing';
    return runSucceeded ? 'complete' : 'error';
}
function toRenderProps(use, result, runStreaming, runSucceeded = false) {
    return {
        status: deriveToolStatus(result, runStreaming, runSucceeded),
        name: use.name,
        args: use.input,
        result: result?.content,
        isError: result?.isError ?? false
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/tool-events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dedupeToolUsesById",
    ()=>dedupeToolUsesById
]);
function dedupeToolUsesById(events) {
    if (!events || events.length === 0) return [];
    const seen = new Set();
    let deduped = null;
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        if (event.kind === 'tool_use') {
            if (seen.has(event.id)) {
                if (!deduped) deduped = events.slice(0, i);
                continue;
            }
            seen.add(event.id);
        }
        if (deduped) deduped.push(event);
    }
    return deduped ?? events;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/file-ops.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Aggregates Read/Write/Edit tool_use events into one row per file path.
 *
 * The chat surface renders individual `FileReadCard` / `FileWriteCard` /
 * `FileEditCard` cards inline (and collapses runs of the same family
 * behind a `Editing ×3, Done` disclosure). This module powers the
 * complementary "files this turn" summary that lives at the top of the
 * assistant message — visible while the run streams and persisting once
 * it finishes — so users can scan every file the agent touched without
 * expanding tool-group disclosures.
 */ __turbopack_context__.s([
    "countFileOps",
    ()=>countFileOps,
    "deriveFileOps",
    ()=>deriveFileOps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$tool$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/runtime/tool-events.ts [app-client] (ecmascript)");
;
const READ_NAMES = new Set([
    'Read',
    'read_file'
]);
const WRITE_NAMES = new Set([
    'Write',
    'create_file'
]);
const EDIT_NAMES = new Set([
    'Edit',
    'str_replace_edit',
    'MultiEdit',
    'multi_edit'
]);
function classify(name) {
    if (READ_NAMES.has(name)) return 'read';
    if (WRITE_NAMES.has(name)) return 'write';
    if (EDIT_NAMES.has(name)) return 'edit';
    return null;
}
function extractPath(input) {
    if (!input || typeof input !== 'object') return null;
    const obj = input;
    if (typeof obj.file_path === 'string' && obj.file_path) return obj.file_path;
    if (typeof obj.path === 'string' && obj.path) return obj.path;
    return null;
}
function basename(input) {
    const segments = input.split(/[\\/]/).filter((segment)=>segment.length > 0);
    return segments[segments.length - 1] ?? input;
}
function mergeStatus(a, b) {
    if (a === 'error' || b === 'error') return 'error';
    if (a === 'running' || b === 'running') return 'running';
    return 'done';
}
function deriveFileOps(events) {
    if (!events || events.length === 0) return [];
    const dedupedEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$runtime$2f$tool$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dedupeToolUsesById"])(events);
    const resultByToolId = new Map();
    for (const ev of dedupedEvents){
        if (ev.kind === 'tool_result') resultByToolId.set(ev.toolUseId, ev);
    }
    const byPath = new Map();
    for (const ev of dedupedEvents){
        if (ev.kind !== 'tool_use') continue;
        const kind = classify(ev.name);
        if (!kind) continue;
        const fullPath = extractPath(ev.input);
        if (!fullPath || fullPath === '(unnamed)') continue;
        const result = resultByToolId.get(ev.id);
        const status = result == null ? 'running' : result.isError ? 'error' : 'done';
        const existing = byPath.get(fullPath);
        if (existing) {
            if (!existing.ops.includes(kind)) existing.ops.push(kind);
            existing.opCounts[kind] += 1;
            existing.total += 1;
            existing.status = mergeStatus(existing.status, status);
        } else {
            const opCounts = {
                read: 0,
                write: 0,
                edit: 0
            };
            opCounts[kind] = 1;
            byPath.set(fullPath, {
                path: basename(fullPath),
                fullPath,
                ops: [
                    kind
                ],
                opCounts,
                total: 1,
                status
            });
        }
    }
    return Array.from(byPath.values());
}
function countFileOps(entries) {
    const counts = {
        read: 0,
        write: 0,
        edit: 0
    };
    for (const entry of entries){
        counts.read += entry.opCounts.read;
        counts.write += entry.opCounts.write;
        counts.edit += entry.opCounts.edit;
    }
    return counts;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/in-project-link.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Decide whether a markdown link href in chat output should resolve to
 * an in-project file (opened in the right-pane workspace) or fall
 * through to the default browser link behavior (Electron
 * `setWindowOpenHandler` → new window).
 *
 * Chat output frequently contains references like
 * `[template.html](template.html)` or `[hero](subdir/hero.html)`. Those
 * are relative paths into the current project's file workspace; with
 * default `target="_blank"` they open a new Electron window with no
 * project context and land on the home screen. Routing them through
 * the existing `requestOpenFile` callback keeps the user in the same
 * project view and previews the file in the right pane.
 *
 * Returns the normalized file path when the href looks like an
 * in-project link, or `null` to let the default link behavior win.
 */ __turbopack_context__.s([
    "asInProjectFilePath",
    ()=>asInProjectFilePath
]);
function asInProjectFilePath(href, projectFileNames, projectId) {
    if (typeof href !== 'string') return null;
    const trimmed = href.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('#')) return null;
    const normalizedHref = normalizeSameOriginHref(trimmed);
    const appRoute = extractAppProjectFileRoute(normalizedHref);
    if (appRoute) {
        if (projectId && appRoute.projectId !== projectId) return null;
        return normalizeProjectFilePath(appRoute.filePath);
    }
    const knownProjectFilePath = matchKnownProjectFilePath(normalizedHref, projectFileNames);
    if (knownProjectFilePath) return knownProjectFilePath;
    // RFC 3986 scheme: ALPHA *( ALPHA / DIGIT / "+" / "-" / "." ) followed by `:`.
    // Catches http:, https:, mailto:, file:, od:, blob:, javascript:, etc.
    if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return null;
    if (trimmed.startsWith('/')) return null;
    const stripped = trimmed.startsWith('./') ? trimmed.slice(2) : trimmed;
    // Refuse any `..` segment so a relative path can't climb out of the
    // project root. Cheaper and safer than full path normalization, and
    // assistant chat output never emits `..` for legitimate file refs.
    if (stripped.split('/').some((segment)=>segment === '..')) return null;
    return normalizeProjectFilePath(stripped);
}
function normalizeSameOriginHref(href) {
    if (!/^[a-z][a-z0-9+.-]*:/i.test(href)) return href;
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.location?.origin) return href;
    try {
        const url = new URL(href);
        if (url.origin !== window.location.origin) return href;
        return `${url.pathname}${url.search}${url.hash}`;
    } catch  {
        return href;
    }
}
function extractAppProjectFileRoute(href) {
    const withoutHash = href.split('#')[0] ?? href;
    const withoutQuery = withoutHash.split('?')[0] ?? withoutHash;
    const patterns = [
        /^\/api\/projects\/([^/]+)\/raw\/(.+)$/i,
        /^\/api\/projects\/([^/]+)\/files\/(.+)$/i,
        /^\/projects\/([^/]+)\/files\/(.+)$/i,
        /^\/projects\/([^/]+)\/conversations\/[^/]+\/files\/(.+)$/i
    ];
    for (const pattern of patterns){
        const match = pattern.exec(withoutQuery);
        if (!match?.[1] || !match[2]) continue;
        return {
            projectId: decodeRouteSegment(match[1]),
            filePath: match[2]
        };
    }
    return null;
}
function decodeRouteSegment(segment) {
    try {
        return decodeURIComponent(segment);
    } catch  {
        return segment;
    }
}
function matchKnownProjectFilePath(href, projectFileNames) {
    if (!projectFileNames || projectFileNames.size === 0) return null;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return null;
    const normalized = normalizeProjectFilePath(href);
    if (!normalized) return null;
    if (projectFileNames.has(normalized)) return normalized;
    const matches = Array.from(projectFileNames).filter((name)=>normalized === name || normalized.endsWith(`/${name}`)).sort((a, b)=>b.length - a.length);
    return matches[0] ?? null;
}
function normalizeProjectFilePath(path) {
    // Strip query and fragment — the workspace tab opener takes a file
    // path, not a URL.
    const withoutHash = path.split('#')[0] ?? path;
    const withoutQuery = withoutHash.split('?')[0] ?? withoutHash;
    if (!withoutQuery) return null;
    // Chat markdown emits links as URL-encoded text (`Mock%20Page.html`
    // for a file named `Mock Page.html`, multi-byte sequences for
    // non-ASCII names). The workspace tab opener
    // (`requestOpenFile` → `FileWorkspace`) matches by literal on-disk
    // file name, so passing the encoded form silently misses the tab.
    // Decode after the literal `..` check so a `%2E%2E` smuggling
    // attempt cannot bypass the traversal guard, and re-check `..` on
    // the decoded form. Treat malformed encodings as "not a real
    // in-project link" rather than letting the URIError crash the
    // renderer.
    let decoded;
    try {
        decoded = decodeURIComponent(withoutQuery);
    } catch  {
        return null;
    }
    if (decoded.split('/').some((segment)=>segment === '..')) return null;
    return decoded;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/jsx-module-refs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectReferencedJsxNames",
    ()=>collectReferencedJsxNames,
    "extractBabelScriptSrcs",
    ()=>extractBabelScriptSrcs,
    "findHtmlEntriesReferencing",
    ()=>findHtmlEntriesReferencing,
    "htmlLoadsJsxModule",
    ()=>htmlLoadsJsxModule,
    "isJsxModule",
    ()=>isJsxModule
]);
// Map a React module file back to the HTML entry files that load it.
//
// Multi-file React prototypes (the documented `Object.assign(window, {...})`
// pattern) split components across several `.jsx` / `.tsx` files that are
// loaded TOGETHER by one HTML entry via `<script type="text/babel" src=...>`
// tags sharing a single `window`. A module on its own has no standalone
// component to render, so previewing it in isolation dead-ends in the React
// runtime ("No React component export found"). These pure helpers let the UI
// recognise such a module and point the user at the HTML entry that actually
// renders it.
//
// Everything here is a pure string scan so it stays trivially unit-testable
// without a DOM or network.
function basenameOf(path) {
    return path.split('/').pop() ?? path;
}
/**
 * Normalise a `<script src>` reference for comparison: drop any query string
 * or hash, and strip a leading `./` so `./icons.jsx` and `icons.jsx` compare
 * equal. Leaves deeper relative paths (`parts/icons.jsx`) intact.
 */ function normalizeScriptRef(src) {
    return (src.split(/[?#]/)[0] ?? '').replace(/^\.\//, '').trim();
}
function extractBabelScriptSrcs(html) {
    if (!html) return [];
    const scannable = html.replace(/<!--[\s\S]*?-->/g, '');
    const srcs = [];
    const scriptOpenTag = /<script\b([^>]*)>/gi;
    let match;
    while((match = scriptOpenTag.exec(scannable)) !== null){
        const attrs = match[1] ?? '';
        if (!/\btype\s*=\s*["']?text\/babel\b/i.test(attrs)) continue;
        const srcMatch = attrs.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
        const ref = srcMatch?.[1] ? normalizeScriptRef(srcMatch[1]) : '';
        if (ref) srcs.push(ref);
    }
    return srcs;
}
function htmlLoadsJsxModule(html, jsxName) {
    if (!jsxName) return false;
    const target = normalizeScriptRef(jsxName);
    const targetBase = basenameOf(target);
    return extractBabelScriptSrcs(html).some((ref)=>{
        if (ref === target) return true;
        return basenameOf(ref) === targetBase;
    });
}
function findHtmlEntriesReferencing(jsxName, htmlSources) {
    if (!jsxName) return [];
    const entries = [];
    for (const [htmlName, html] of htmlSources){
        if (htmlLoadsJsxModule(html, jsxName)) entries.push(htmlName);
    }
    return entries;
}
function isJsxModule(jsxName, htmlSources) {
    return findHtmlEntriesReferencing(jsxName, htmlSources).length > 0;
}
function isHtmlName(name) {
    return /\.html?$/i.test(name);
}
async function collectReferencedJsxNames(files, readHtml) {
    const referencedSrcs = new Set();
    await Promise.all(files.filter((file)=>isHtmlName(file.name)).map(async (file)=>{
        const html = await readHtml(file.name);
        for (const src of extractBabelScriptSrcs(html))referencedSrcs.add(src);
    }));
    if (referencedSrcs.size === 0) return new Set();
    const result = new Set();
    for (const file of files){
        const base = basenameOf(file.name);
        for (const src of referencedSrcs){
            if (src === file.name || basenameOf(src) === base) {
                result.add(file.name);
                break;
            }
        }
    }
    return result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/runtime/slide-nav.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deliverableSlideNavForActiveFile",
    ()=>deliverableSlideNavForActiveFile,
    "isSlideNavDeliverableNow",
    ()=>isSlideNavDeliverableNow,
    "resetConsumedSlideNavForTests",
    ()=>resetConsumedSlideNavForTests,
    "shouldConsumeSlideNav",
    ()=>shouldConsumeSlideNav
]);
// Dedupe deck slide-navigation requests across HtmlViewer remounts.
//
// A queued chat send arms a `slideNavRequest` that lives in parent (ProjectView)
// state and stays set after the viewer handles it. A per-mount ref would only
// suppress replays for the current mount: leaving the deck tab and coming back
// remounts HtmlViewer, the ref resets, and the stale nonce reads as fresh — so
// the preview yanks back to the queued slide and clobbers wherever the user had
// navigated manually. Keying consumed nonces by preview-state key *outside* the
// component makes "consume once" survive remounts.
//
// The map is keyed by `${projectId}:${fileName}`, so a fresh queued send (new
// nonce, via Date.now()) for the same deck still navigates, and each file is
// tracked independently. One entry per opened deck — bounded and tiny.
const consumedSlideNavNonces = new Map();
function shouldConsumeSlideNav(key, nonce) {
    if (consumedSlideNavNonces.get(key) === nonce) return false;
    consumedSlideNavNonces.set(key, nonce);
    return true;
}
function resetConsumedSlideNavForTests() {
    consumedSlideNavNonces.clear();
}
function isSlideNavDeliverableNow(request, openTabs) {
    return !!request && !!request.name && openTabs.includes(request.name);
}
function deliverableSlideNavForActiveFile(request, activeFileName, deliverableNonce) {
    if (!request) return null;
    if (!activeFileName || request.name !== activeFileName) return null;
    if (request.nonce !== deliverableNonce) return null;
    return {
        slideIndex: request.slideIndex,
        nonce: request.nonce
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_runtime_03s0xq4._.js.map