# Kimi Local Frontend — Telemetry Bundle Evidence

## Current verified evidence
- Local server live-html path now injects a bundling override for `https://gator.volces.com/list` BEFORE any page scripts run.
- Verified live origin `https://www.kimi.com/` HTML does **not** contain `gator.volces.com`, so current frontend console reports must come from a loaded JS bundle, not the served HTML alone.

## Why this shifts the bundling target
- `collect-rangers-v5.1.12.js` is responsible for repeated tracked XHRs to `https://gator.volces.com/list`.
- The function `sendObjectBeacon` inside that bundle is the outbound sender.
- Bundling should therefore override `window.sendObjectBeacon` in addition to HTML injection, because the call can originate from late-loaded scripts.

## Next action
- Extend `kimi_local_server.py` to also rewrite requests for `collect-rangers-v5.1.12.js` by injecting a bundling override so grouped telem POSTs are intercepted regardless of which script initiated them.
