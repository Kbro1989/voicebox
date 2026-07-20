"""Wiki math parsing router."""
from __future__ import annotations

from fastapi import APIRouter

from ..services.wiki_math import extract_math_wiki_page

router = APIRouter()


@router.post("/research/wiki-math/parse")
async def parse_wiki_math(payload: dict) -> dict:
    title = str(payload.get("title") or "").strip() or "Untitled"
    wikitext = str(payload.get("wikitext") or "")
    return extract_math_wiki_page(title, wikitext)
