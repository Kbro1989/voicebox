#!/usr/bin/env python3
"""Kimi Frontend Local Server + API Proxy + live asset mirror + Ollama fallback"""

import http.server
import json
import os
import socketserver
import urllib.error
import urllib.request
from pathlib import Path

PORT = int(os.environ.get("KIMI_LOCAL_PORT", "8080"))
STATIC_DIR = Path(os.environ.get("KIMI_STATIC_DIR", Path(__file__).parent)).resolve()
PROXY_PREFIX = os.environ.get("KIMI_PROXY_PREFIX", "/api/")
OPENCLAW_GATEWAY_URL = os.environ.get("OPENCLAW_GATEWAY_URL", "http://127.0.0.1:18789").rstrip("/")
OPENCLAW_GATEWAY_TOKEN = os.environ.get("OPENCLAW_GATEWAY_TOKEN", "")
_OPENCLAW_PREFIX = os.environ.get("OPENCLAW_PATH_PREFIX", "/v1/")

_LIVE_ASSETS_ORIGIN = "https://statics.moonshot.cn"
_KIMI_WEB_SEO_PATH = "/kimi-web-seo"
_OLLAMA_URL = os.environ.get("KIMI_OLLAMA_URL", "http://localhost:11434").rstrip("/")
_OLLAMA_MODEL = os.environ.get("KIMI_OLLAMA_MODEL", "")
TRAIN_LOG_PATH = os.environ.get(
    "JARVIS_TRAIN_LOG",
    r"C:\Users\krist\Desktop\Megatron-LM-review\kingwen_train_data\model\jarvis-native-kingwen-life\checkpoints\train.log",
)
_OLLAMA_FALLBACK_MODELS = [
    os.environ.get("KIMI_OLLAMA_FALLBACK_MODEL", "").strip(),
    "qwen2.5-coder:7b-instruct-q4_K_M",
    "qwen3.6:27b",
    "gemma4:latest",
]
_OLLAMA_FALLBACK_MODELS = [m for m in _OLLAMA_FALLBACK_MODELS if m]


def _proxy_path(path: str) -> str:
    target = path[len(PROXY_PREFIX):] if path.startswith(PROXY_PREFIX) else path
    target = target.lstrip("/")
    if target and not target.startswith(_OPENCLAW_PREFIX.lstrip("/")):
        return f"{_OPENCLAW_PREFIX}{target}"
    return target


def _http_get_json(url: str):
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.status, json.loads(resp.read().decode("utf-8", errors="ignore")), resp.headers.get("Content-Type", "application/json")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="ignore")
        try:
            body = json.loads(body)
        except Exception:
            pass
        return e.code, body, e.headers.get("Content-Type", "application/json")
    except Exception as e:
        return 502, {"error": str(e)}, "application/json"


def _ollama_chat(model: str, messages):
    payload = json.dumps({"model": model, "messages": messages, "stream": False}).encode()
    req = urllib.request.Request(
        f"{_OLLAMA_URL}/api/chat",
        data=payload,
        method="POST",
        headers={"Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode("utf-8", errors="ignore"))
            return data.get("message", {}).get("content", "")
    except Exception as e:
        raise RuntimeError(f"ollama chat failed: {e}") from e


def _select_ollama_model() -> str:
    if _OLLAMA_MODEL:
        return _OLLAMA_MODEL
    status, data, _ = _http_get_json(f"{_OLLAMA_URL}/api/tags")
    if status != 200 or not isinstance(data, dict):
        raise RuntimeError(f"ollama tags failed: HTTP {status}")
    models = [m.get("name", "") for m in data.get("models", []) if isinstance(m, dict) and m.get("name")]
    if not models:
        raise RuntimeError("ollama has no models")
    for preferred in _OLLAMA_FALLBACK_MODELS:
        if preferred in models:
            return preferred
    return models[0]


def _live_asset_bytes(path: str):
    if path.startswith(_KIMI_WEB_SEO_PATH + "/"):
        candidate = _LIVE_ASSETS_ORIGIN + path
    else:
        candidate = _LIVE_ASSETS_ORIGIN + _KIMI_WEB_SEO_PATH + path
    req = urllib.request.Request(candidate, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status, resp.read(), resp.headers.get("Content-Type", "")
    except urllib.error.HTTPError as e:
        return e.code, e.read(), e.headers.get("Content-Type", "")
    except Exception as e:
        return 502, json.dumps({"error": str(e)}).encode(), "application/json"


def _bundle_telemetry_xhr(html_bytes: bytes) -> bytes:
    if b"<head>" not in html_bytes or b"gator.volces.com" not in html_bytes:
        return html_bytes
    try:
        html = html_bytes.decode("utf-8", errors="ignore")
    except Exception:
        return html_bytes
    override = """<script>(() => {
      const ORIGIN = 'https://gator.volces.com';
      const PATH = '/list';
      if (!window.sendObjectBeacon) return;
      const ORIGINAL = window.sendObjectBeacon;
      let grouped = false;
      window.sendObjectBeacon = function(url, payload, callback, keepalive, fallbackUrl) {
        try {
          const u = typeof url === 'string' ? url : '';
          if (u && u.includes(ORIGIN) && u.includes(PATH)) {
            if (!grouped) {
              grouped = true;
              Promise.resolve().then(() => {
                if (typeof console !== 'undefined' && console.log) {
                  console.log('[kimi-local-bundle] grouped telemetry POST to', ORIGIN + PATH);
                }
              });
            }
            if (typeof callback === 'function') {
              try { callback(); } catch {}
            }
            return;
          }
        } catch {}
        try { return ORIGINAL(url, payload, callback, keepalive, fallbackUrl); } catch { return; }
      };
    })();</script>"""
    if override in html:
        return html_bytes
    head_idx = html.find("<head>")
    if head_idx == -1:
        return html_bytes
    insert_at = head_idx + len("<head>")
    html = html[:insert_at] + override + html[insert_at:]
    return html.encode("utf-8", errors="ignore")


def load_dotenv(path: Path) -> None:
    if not path.exists():
        return
    for raw in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip("\"'")
        if key and key not in os.environ:
            os.environ[key] = value


load_dotenv(STATIC_DIR / ".env")
load_dotenv(STATIC_DIR / "kimi.env")
PORT = int(os.environ.get("KIMI_LOCAL_PORT", str(PORT)))
STATIC_DIR = Path(os.environ.get("KIMI_STATIC_DIR", STATIC_DIR)).resolve()
PROXY_PREFIX = os.environ.get("KIMI_PROXY_PREFIX", PROXY_PREFIX)
OPENCLAW_GATEWAY_URL = os.environ.get("KIMI_OPENCLAW_GATEWAY_URL", os.environ.get("OPENCLAW_GATEWAY_URL", OPENCLAW_GATEWAY_URL)).rstrip("/")
OPENCLAW_GATEWAY_TOKEN = os.environ.get("KIMI_OPENCLAW_GATEWAY_TOKEN", os.environ.get("OPENCLAW_GATEWAY_TOKEN", OPENCLAW_GATEWAY_TOKEN))
_OPENCLAW_PREFIX = os.environ.get("OPENCLAW_PATH_PREFIX", _OPENCLAW_PREFIX)
_OLLAMA_URL = os.environ.get("KIMI_OLLAMA_URL", _OLLAMA_URL)
_OLLAMA_MODEL = os.environ.get("KIMI_OLLAMA_MODEL", _OLLAMA_MODEL)


class KimiHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(STATIC_DIR), **kwargs)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        if self.path.startswith(PROXY_PREFIX):
            return self._proxy_request("GET")
        if self.path == "/api/train-log":
            return self._serve_train_log()
        if "collect-rangers-v5.1.12.js" in self.path:
            return self._serve_collect_rangers()
        if self.path.startswith("/assets/") or self.path.startswith("/favicon.ico"):
            return self._live_asset_request()
        if self.path == "/KIMI-modified.html":
            return self._serve_live_html()
        return super().do_GET()

    def do_POST(self):
        if self.path.startswith(PROXY_PREFIX):
            return self._proxy_request("POST")
        return self._proxy_request("POST")

    def _send_cors(self, status=200, ctype="text/html; charset=utf-8"):
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def _serve_train_log(self):
        try:
            log_path = Path(TRAIN_LOG_PATH)
            if log_path.exists():
                body = log_path.read_bytes()
            else:
                body = b"# train.log not found yet\n"
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Cache-Control", "no-cache")
            self.end_headers()
            self.wfile.write(body)
        except Exception as e:
            self._send_cors(500, "text/plain")
            self.wfile.write(str(e).encode())

    def _serve_collect_rangers(self):
        url = "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/collect-rangers-v5.1.12.js"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                body = resp.read()
                ctype = resp.headers.get("Content-Type", "application/javascript; charset=utf-8")
            
            # Grouped telemetry XHR interception block matching window.sendObjectBeacon
            override = b"""(() => {
              const ORIGIN = 'https://gator.volces.com';
              const PATH = '/list';
              const ORIGINAL = window.sendObjectBeacon;
              window.sendObjectBeacon = function(url, payload, callback, keepalive, fallbackUrl) {
                try {
                  const u = typeof url === 'string' ? url : '';
                  if (u && u.includes(ORIGIN) && u.includes(PATH)) {
                    if (typeof console !== 'undefined' && console.log) {
                      console.log('[kimi-local-bundle] intercepted collect-rangers beacon telemetry POST to', url, payload);
                    }
                    if (typeof callback === 'function') {
                      try { callback(); } catch {}
                    }
                    return;
                  }
                } catch {}
                try { if (ORIGINAL) return ORIGINAL(url, payload, callback, keepalive, fallbackUrl); } catch { return; }
              };
            })();\n"""
            body = override + body
            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(body)
            self.log_message("served patched collect-rangers-v5.1.12.js from local redirect")
        except Exception as e:
            self._send_cors(502, "text/plain")
            self.wfile.write(str(e).encode())

    def _serve_live_html(self):
        url = "https://www.kimi.com/"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                body = resp.read()
                ctype = resp.headers.get("Content-Type", "text/html; charset=utf-8")
            body = _bundle_telemetry_xhr(body)
            self._send_cors(200, ctype)
            self.wfile.write(body)
            self.log_message("served live kimi html from %s", url)
        except Exception as e:
            self._send_cors(502, "application/json")
            self.wfile.write(json.dumps({"error": str(e)}).encode())

    def _live_asset_request(self):
        path = self.path
        
        # Check local file overrides in STATIC_DIR
        local_file = STATIC_DIR / path.lstrip("/")
        if not (local_file.exists() and local_file.is_file()):
            local_file = STATIC_DIR / Path(path).name

        if local_file.exists() and local_file.is_file():
            body = local_file.read_bytes()
            ctype = "application/javascript" if path.endswith(".js") else ("text/css" if path.endswith(".css") else "application/octet-stream")
            status = 200
            self.log_message("asset %s served from local disk", path)
        else:
            status, body, ctype = _live_asset_bytes(path)
            self.log_message("asset %s from live origin", path)

        # Rewrite telemetry script URL in JS assets
        if status == 200 and path.endswith(".js"):
            body = body.replace(
                b"https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/collect-rangers-v5.1.12.js",
                b"/collect-rangers-v5.1.12.js"
            )
            body = body.replace(
                b"http://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/collect-rangers-v5.1.12.js",
                b"/collect-rangers-v5.1.12.js"
            )

        self.send_response(status)
        if status == 200:
            self.send_header("Content-Type", ctype or "application/octet-stream")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_header("Content-Type", ctype or "text/plain")
            self.end_headers()
            self.wfile.write(body)

    def _proxy_request(self, method):
        target_path = _proxy_path(self.path)
        target_url = f"{OPENCLAW_GATEWAY_URL}/{target_path}"
        body = None
        content_len = int(self.headers.get("Content-Length", "0") or "0")
        if content_len:
            body = self.rfile.read(content_len)

        req = urllib.request.Request(
            target_url,
            data=body,
            method=method,
            headers={
                "Content-Type": self.headers.get("Content-Type", "application/json"),
                "Authorization": f"Bearer {OPENCLAW_GATEWAY_TOKEN}",
            },
        )
        try:
            with urllib.request.urlopen(req) as resp:
                status = resp.status
                resp_body = resp.read()
                ctype = resp.headers.get("Content-Type", "application/json")
        except urllib.error.HTTPError as e:
            status = e.code
            resp_body = e.read()
            ctype = e.headers.get("Content-Type", "application/json")
        except Exception as e:
            status = 502
            resp_body = json.dumps({"error": str(e)}).encode()
            ctype = "application/json"

        provider_fallback_used = False
        fallback_model = ""
        if self.path.strip("/").endswith("/chat") and status >= 500:
            messages = []
            try:
                payload = json.loads(body or b"{}")
                messages = payload.get("messages", [])
            except Exception:
                pass
            fallback_error = resp_body.decode("utf-8", errors="ignore")
            try:
                fallback_model = _select_ollama_model()
                content = _ollama_chat(fallback_model, messages)
                fallback_payload = json.dumps(
                    {
                        "provider": "ollama-fallback",
                        "model": fallback_model,
                        "content": content,
                        "provider_error": fallback_error,
                    }
                ).encode()
                status = 200
                resp_body = fallback_payload
                ctype = "application/json"
                provider_fallback_used = True
            except Exception as e:
                status = 502
                resp_body = json.dumps({"error": fallback_error, "provider_fallback_error": str(e)}).encode()

        self.send_response(status)
        self.send_header("Content-type", ctype)
        if provider_fallback_used:
            self.send_header("X-Kimi-Provider", "ollama-fallback")
            self.send_header("X-Kimi-Model", fallback_model)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()
        self.wfile.write(resp_body)


if __name__ == "__main__":
    print(f"Serving Kimi frontend at http://localhost:{PORT}")
    print(f"Static directory: {STATIC_DIR}")
    with socketserver.TCPServer(("", PORT), KimiHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server")
            httpd.shutdown()
