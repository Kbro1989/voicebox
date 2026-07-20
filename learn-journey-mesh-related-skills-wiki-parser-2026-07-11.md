# /learn — Journey Mesh + Related Skills + Wiki Parser + Corpus Update

**Date:** 2026-07-11  
**Sources:** hermes-journey-mesh audit, related-skills lineage graph, wiki-math-parser verification, RS API changelog ingestion

---

## 1. Mesh Audit (`hermes-journey-mesh`)

### Stats
| Metric | Value |
|--------|-------|
| Skills scanned | 136 |
| Memory cards | 196 |
| Declared edges | 92 |
| Edges per node | 0.676 |
| Linked nodes | 58 |
| Isolated % | 57.4% |
| Orphaned skills | 122 |
| Unlinked memories | 196 |
| Weak edges | 66 |
| Stale skills | 68 |

### Target thresholds
- `edges_per_node >= 1.0`
- `isolated_pct < 40%`
- `linked_nodes / nodes` ratio trending upward

**Status:** below target on all three metrics.

### Repair priority
1. Add `related_skills` to the 84 skills with empty frontmatter.
2. Reconnect weak edges where domain overlap is high but not declared.
3. Archive or delete true duplicates.
4. Review 68 stale skills: prune or pin.

---

## 2. Related-Skills Graph Summary

### High-confidence inferred edges: 268
### Medium-confidence inferred edges: 526
### Low-confidence inferred edges: 0
### Duplicate/conflicting relationships: 0

### Core bundles by domain

| Bundle | Skills |
|--------|--------|
| King Wen / Jarvis | `king-wen`, `kingwen-jarvis-megatron-learn`, `kingwen-oracle-advisory`, `kingwen-truth-reconciliation`, `openjarvis-kingwen-integration`, `jarvis-original`, `jarvis-sovereign`, `megatron-king-wen` |
| POG2 / POG3 / rsmv | `pog2-cache-forensics`, `pog2-codebasemap`, `pog2-local-build`, `pog2-deploy-worker`, `pog3-coordinate-calculator`, `rsmv-cache-crossref`, `rsmv-model-identity-kit`, `source-truthed-audit` |
| Hermes agent core | `hermes-agent`, `hermes-runtime`, `hermes-desktop-personality`, `hermes-provider-config`, `model-routing`, `agent-env-bridge`, `agent-subconscious-injection`, `sovereign-state-agents` |
| Open Design / sovereign dev | `open-design-setup`, `open-design-bridge`, `sovereign-dev`, `sovereign-integration-map`, `windows-amr-fallback`, `windows-native-runtime`, `windows-local-development`, `openclaw-local-bridge` |
| GitHub / code review | `github-auth`, `github-issues`, `github-pr-workflow`, `github-code-review`, `github-repo-management`, `requesting-code-review`, `codebase-inspection` |
| Research / wiki / corpus | `wiki-math-parser`, `llm-wiki`, `arxiv`, `verifiable-research`, `blogwatcher`, `polymarket`, `ocr-and-documents`, `nano-pdf` |
| Visual / creative | `claude-design`, `design-md`, `excalidraw`, `pretext`, `p5js`, `ascii-art`, `ascii-video`, `manim-video`, `popular-web-designs` |

### Orphan skills needing `related_skills` additions
84 skills have no `related_skills` frontmatter. Top candidates by domain:
- King Wen: `kingwen-emotion-voice`, `avalokiteshvara-kingwen`
- POG2/POG3: `dg-cartridge`, `quantum-gate-verification`
- Research: `wiki-math-parser`, `jagex-cache-wiki-correlation` note: this was consolidated into `pog3-coordinate-calculator`
- Hermes: `hermes-journey-mesh`, `hermes-self-upgrader`

---

## 3. Wiki-Math-Parser Verification

### Verified artifacts
- Local parser: `C:\Users\krist\Desktop\mwparserfromhell_local\mwparserfromhell` v0.7.2
- Standalone server: `C:\Users\krist\Desktop\open-design\standalone_wiki_math.py`
- CLI wrapper: `C:\Users\krist\Desktop\alt1-ai\third_party\parse_wiki.py`
- Corpus target: `C:\Users\krist\Desktop\KING-WEN-I-CHING-IMMUTABLE-TABLES\kingwen_train_data\wiki_math_corpus.jsonl`

### Entry points
- Python API: `extract_math_wiki_page(title, wikitext)` → headings, links, comments, math nodes
- FastAPI: `POST /research/wiki-math/parse`
- CLI: stdin → `parse_wiki.py` → JSON templates/wikilinks

### Current corpus
- `wiki_math_corpus.jsonl`: 64 King Wen hexagram entries with `parser_tags`
- `wiki_math_corpus_api_changelog.jsonl`: 32 RS API changelog entries

---

## 4. Corpus Update

### RS API changelog ingestion
- Source: RuneScape Wiki `Application_programming_interface` changelog
- 32 entries ingested into `wiki_math_corpus_api_changelog.jsonl`
- Each entry has: `title`, `version`, `date`, `urgency`, `changes`, `parser_tags`, `source`, `hexagram_id`, `source_chars`
- `parser_tags`: `changelog` + one of `linux|windows|macos|graphics|launcher|bugfix|enhancement|general`
- Zero duplicates
- All lines valid JSON

---

## 5. Next Actions

1. **Bulk add `related_skills`** to the 84 orphan skills, starting with the core bundles above.
2. **Re-run `audit_journey_mesh.py`** after each batch to measure edge density improvement.
3. **Fetch live RS Wiki wikitext** from `https://runescape.wiki/w/Application_programming_interface` and run through `wiki-math-parser` to validate math/heading extraction against real content.
4. **Correlate API changelog corpus** with existing King Wen 64-hex corpus for training-pipeline compatibility.

---

## 6. Verification Status

| Artifact | Status |
|----------|--------|
| `ingest_api_changelog.py` | Verified — exits 0, valid JSON, deduped |
| `wiki_math_corpus_api_changelog.jsonl` | Verified — 32 entries, 0 dupes |
| `wiki-math-parser` SKILL.md | Updated to match actual local artifacts |
| `hermes-journey-mesh` audit | Complete — 136 skills, 196 memories, 0.676 edges/node |
| `related_skills` graph | Complete — 268 high, 526 medium, 0 low, 0 duplicates |

**Unverified:** bulk `related_skills` frontmatter edits not yet applied to all 84 orphans.
