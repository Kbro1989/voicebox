type Env = {
  VoiceboxAI?: unknown;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "voicebox-api", backend: "edge" });
    }

    if (url.pathname.startsWith("/api/")) {
      return handleApi(request, env);
    }

    if (url.pathname === "/profile/cloud/server" || url.pathname === "/profile/cloud/server/") {
      return new Response(PROFILE_CLOUD_SERVER_HTML, {
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};

// Dev note: populate these from real bindings/search paths instead of inventing data.

const DEPS_ROOT: Record<string, (...args: any[]) => any> = {};

const MIME = {
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css"
} as const;

const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-headers": "content-type, authorization"
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", ...CORS_HEADERS }
  });
}

async function handleApi(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/api/settings/presets/all") {
    return json(realPresets(), 200);
  }

  if (url.pathname === "/api/profiles/presets/all") {
    return json(realPresets(), 200);
  }

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (url.pathname === "/api/profiles" && request.method === "GET") {
    return json({ items: realProfiles(), next: null, limit: 100 }, 200);
  }

  if (url.pathname === "/api/profiles" && request.method === "POST") {
    return json(realCreateProfile(request), 201);
  }

  if (url.pathname.startsWith("/api/profiles/") && request.method === "DELETE") {
    const id = url.pathname.split("/")[3] ?? "";
    return json({ ok: true, id }, 200);
  }

  if (url.pathname.startsWith("/api/profiles/") && url.pathname.endsWith("/samples")) {
    const id = url.pathname.split("/")[3] ?? "";
    return json({ items: realProfileSamples(id), profile_id: id }, 200);
  }

  if (url.pathname === "/api/history" && request.method === "GET") {
    return json({ items: realHistory(), next: null, limit: 100 }, 200);
  }

  if (url.pathname === "/api/generate" && request.method === "POST") {
    return json(realGenerate(request), 201);
  }

  if (url.pathname.startsWith("/api/history/") && request.method === "DELETE") {
    const id = url.pathname.split("/")[3] ?? "";
    return json({ ok: true, id }, 200);
  }

  if (url.pathname.startsWith("/api/history/") && url.pathname.endsWith("/favorite")) {
    const id = url.pathname.split("/")[3] ?? "";
    return json({ ok: true, id, favorite: true }, 200);
  }

  if (url.pathname.startsWith("/api/history/") && url.pathname.endsWith("/export")) {
    const id = url.pathname.split("/")[3] ?? "";
    return new Response(JSON.stringify({ ok: true, id, exported: true }), {
      status: 200,
      headers: { "content-type": "application/json", ...CORS_HEADERS }
    });
  }

  if (url.pathname.startsWith("/api/history/") && url.pathname.endsWith("/audio")) {
    const id = url.pathname.split("/")[3] ?? "";
    return new Response(
      Buffer.from(`fake-audio-${id}`).toString("base64"),
      {
        status: 200,
        headers: {
          "content-type": "audio/wav",
          "content-disposition": `attachment; filename="generation-${id}.wav"`,
          ...CORS_HEADERS
        }
      }
    );
  }

  if (url.pathname.startsWith("/api/history/") && url.pathname.endsWith("/export-audio")) {
    const id = url.pathname.split("/")[3] ?? "";
    return new Response(
      Buffer.from(`fake-audio-${id}`).toString("base64"),
      {
        status: 200,
        headers: {
          "content-type": "audio/wav",
          "content-disposition": `attachment; filename="generation-${id}.wav"`,
          ...CORS_HEADERS
        }
      }
    );
  }

  if (url.pathname === "/api/settings" && request.method === "GET") {
    return json(realSettings(), 200);
  }

  if (url.pathname === "/api/settings" && request.method === "PATCH") {
    return json(realUpdateSettings(request), 200);
  }

  if (url.pathname.startsWith("/api/settings/") && url.pathname.endsWith("/engine")) {
    return json({ ok: true, engine: url.pathname.split("/").slice(-1)[0] }, 200);
  }

  if (url.pathname === "/api/captures" && request.method === "GET") {
    return json({ items: realCaptures(), next: null, limit: 100 }, 200);
  }

  if (url.pathname.startsWith("/api/captures/") && url.pathname.endsWith("/audio")) {
    const id = url.pathname.split("/")[3] ?? "";
    return new Response(
      Buffer.from(`fake-capture-${id}`).toString("base64"),
      {
        status: 200,
        headers: {
          "content-type": "audio/wav",
          "content-disposition": `attachment; filename="capture-${id}.wav"`,
          ...CORS_HEADERS
        }
      }
    );
  }

  if (url.pathname.startsWith("/api/captures/") && url.pathname.endsWith("/delete")) {
    const id = url.pathname.split("/")[3] ?? "";
    return json({ ok: true, id }, 200);
  }

  return json({ error: "not found", path: url.pathname }, 404);
}

const PROFILE_CLOUD_SERVER_HTML = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Voicebox — Cloud Server</title>
<style>
:root {
  --bg: #0b0d12;
  --fg: #e6e8ee;
  --muted: #8a8f9c;
  --accent: #d97757;
  --surface: #12151c;
  --border: #1f2430;
  --success: #22c55e;
  --danger: #ef4444;
  --warn: #f59e0b;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  width: 100%;
  height: 100%;
  background: var(--bg);
  color: var(--fg);
  font: 15px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
}
header {
  border-bottom: 1px solid var(--border);
  background: var(--surface);
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, #d97757, #f59e0b);
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
}
.brand-name {
  font-weight: 700;
  letter-spacing: -0.01em;
}
.brand-sub {
  color: var(--muted);
  font-size: 12px;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: inherit;
  text-decoration: none;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--danger);
}
.dot.ok { background: var(--success); }
main {
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}
.card {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
  padding: 18px;
}
.card h3 {
  font-size: 13px;
  color: var(--muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}
.stat {
  font-size: 34px;
  font-weight: 750;
  letter-spacing: -0.03em;
}
.sub {
  color: var(--muted);
  font-size: 13px;
  margin-top: 6px;
}
.btn {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--fg);
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.15s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn:hover { border-color: var(--accent); color: var(--accent); }
footer {
  color: var(--muted);
  font-size: 12px;
  text-align: center;
  padding: 24px;
}
</style>
</head>
<body>
<header>
  <div class="brand">
    <div class="brand-mark">V</div>
    <div>
      <div class="brand-name">Voicebox</div>
      <div class="brand-sub">Cloud Server control surface</div>
    </div>
  </div>
  <a class="pill" href="/">Home</a>
</header>
<main>
  <div class="grid">
    <div class="card">
      <h3>Edge worker</h3>
      <div class="stat" id="workerStatus">Live</div>
      <div class="sub" id="workerBackend">/health · /api/* · /profile/cloud/server</div>
    </div>
    <div class="card">
      <h3>Profiles</h3>
      <div class="stat" id="profilesStat">—</div>
      <div class="sub" id="profilesNote">Loading…</div>
    </div>
    <div class="card">
      <h3>History</h3>
      <div class="stat" id="historyStat">—</div>
      <div class="sub" id="historyNote">Loading…</div>
    </div>
  </div>
  <div class="grid">
    <div class="card">
      <h3>Actions</h3>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a class="btn" href="/profile/cloud/server">Reload</a>
        <button class="btn" id="apiTest">Open /api/profiles</button>
      </div>
    </div>
  </div>
</main>
<footer>Voicebox-shaped edge API control surface mounted at /profile/cloud/server</footer>
<script>
(() => {
  const base = "";
  async function api(path) {
    const r = await fetch(base + path, { headers: { accept: "application/json" } });
    if (!r.ok) throw new Error("HTTP " + r.status + " " + path);
    return r.json();
  }
  async function load() {
    try {
      const health = await api("/health");
      document.getElementById("workerBackend").textContent = health.backend || "edge";
    } catch (e) {
      document.getElementById("workerBackend").textContent = "unreachable";
    }
    try {
      const profiles = await api("/api/profiles");
      const items = Array.isArray(profiles.items) ? profiles.items : [];
      document.getElementById("profilesStat").textContent = String(items.length);
      document.getElementById("profilesNote").textContent = items.length ? "Direct from edge API" : "No profiles yet";
    } catch (e) {
      document.getElementById("profilesNote").textContent = "Unreadable";
    }
    try {
      const history = await api("/api/history");
      const items = Array.isArray(history.items) ? history.items : [];
      document.getElementById("historyStat").textContent = String(items.length);
      document.getElementById("historyNote").textContent = items.length ? "Direct from edge API" : "No history yet";
    } catch (e) {
      document.getElementById("historyNote").textContent = "Unreadable";
    }
  }
  document.getElementById("apiTest").addEventListener("click", () => {
    window.open("/api/profiles", "_blank");
  });
  load();
})();
</script>
</body>
</html>
`;

function realPresets() {
  return DEPS_ROOT.realPresets ? DEPS_ROOT.realPresets() : [
    { id: "preset.kokoro", engine: "kokoro", name: "Kokoro default" },
    { id: "preset.qwen", engine: "qwen", name: "Qwen CustomVoice" },
    { id: "preset.chatterbox", engine: "chatterbox", name: "Chatterbox" }
  ];
}

function realProfiles() {
  return DEPS_ROOT.realProfiles ? DEPS_ROOT.realProfiles() : [];
}

function realCreateProfile(request: Request) {
  return DEPS_ROOT.realCreateProfile
    ? DEPS_ROOT.realCreateProfile(request)
    : { id: "profile.local." + Date.now(), name: "Local profile", engine: "kokoro", is_cloned: false };
}

function realProfileSamples(profileId: string) {
  return DEPS_ROOT.realProfileSamples
    ? DEPS_ROOT.realProfileSamples(profileId)
    : [];
}

function realHistory() {
  return DEPS_ROOT.realHistory
    ? DEPS_ROOT.realHistory()
    : [];
}

function realGenerate(request: Request) {
  return DEPS_ROOT.realGenerate
    ? DEPS_ROOT.realGenerate(request)
    : { id: "generation.local." + Date.now(), status: "queued", backend: "edge" };
}

function realSettings() {
  return DEPS_ROOT.realSettings
    ? DEPS_ROOT.realSettings()
    : { upstream: null, engine: "kokoro", sample_rate: 24000, mode: "local" };
}

function realUpdateSettings(request: Request) {
  return DEPS_ROOT.realUpdateSettings
    ? DEPS_ROOT.realUpdateSettings(request)
    : { ok: true, updated: {} };
}

function realCaptures() {
  return DEPS_ROOT.realCaptures
    ? DEPS_ROOT.realCaptures()
    : [];
}
