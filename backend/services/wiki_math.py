"""Wiki math parsing service using mwparserfromhell.

Source of truth: C:/Users/krist/Desktop/mwparserfromhell_local/mwparserfromhell
"""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(Path(r"C:/Users/krist/Desktop/mwparserfromhell_local")))

from mwparserfromhell import parse as mw_parse
from mwparserfromhell.wikicode import Wikicode


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
