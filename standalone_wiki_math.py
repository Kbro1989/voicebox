"""Standalone wiki-math parser server.

Bypasses full Voicebox app import. Uses mwparserfromhell directly.
"""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(Path(r"C:/Users/krist/Desktop/mwparserfromhell_local")))

from mwparserfromhell import parse as mw_parse
from mwparserfromhell.wikicode import Wikicode
from fastapi import FastAPI
from fastapi.testclient import TestClient


def extract_math_wiki_page(title: str, wikitext: str) -> dict:
    code: Wikicode = mw_parse(wikitext)
    headings = [str(node).strip() for node in code.ifilter_headings(recursive=True)]
    links = [str(node).strip() for node in code.ifilter_external_links(recursive=True)]
    comments = [str(node).strip() for node in code.ifilter_comments(recursive=True)]
    math_nodes = [
        str(node)
        for node in code.ifilter(
            matches=lambda n: hasattr(n, "tag")
            and str(getattr(n, "tag", "")).lower() in {"math", "ce", "chem", "sub", "sup"}
        )
    ]
    return {
        "title": title,
        "heading_count": len(headings),
        "headings": headings[:20],
        "link_count": len(links),
        "links": links[:20],
        "comment_count": len(comments),
        "math_node_count": len(math_nodes),
        "math_nodes": math_nodes[:20],
        "source_chars": len(wikitext),
    }


def _build_app() -> FastAPI:
    app = FastAPI(title="wiki-math parser")

    @app.get("/health")
    async def health():
        return {"status": "ok"}

    @app.post("/research/wiki-math/parse")
    async def parse_wiki_math(payload: dict):
        title = str(payload.get("title") or "").strip() or "Untitled"
        wikitext = str(payload.get("wikitext") or "")
        return extract_math_wiki_page(title, wikitext)

    return app


app = _build_app()
client = TestClient(app)

if __name__ == "__main__":
    import argparse
    import uvicorn

    parser = argparse.ArgumentParser(description="Standalone wiki-math parser server")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    uvicorn.run("standalone_wiki_math:app", host=args.host, port=args.port, reload=False)
