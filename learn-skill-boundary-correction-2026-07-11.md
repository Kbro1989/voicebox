# Skill Learning — Boundary Correction: OpenJarvis ≠ Open Design

## Resolution

Jarvis is OpenJarvis. Open Design is a separate program.

- **OpenJarvis** = `C:\Users\krist\Desktop\OpenJarvis`, Python package `src/openjarvis/`, runtime data `~/.openjarvis/`, primary CLI `jarvis`
- **Open Design** = `C:\Users\krist\Desktop\open-design`, daemon/web/Electron workspace, agent runtime surface `od moa`
- **King Wen** = `C:\Users\krist\Desktop\KING-WEN-I-CHING-IMMUTABLE-TABLES`, read-only source of truth

## Skill boundary reference

`C:\Users\krist\Desktop\open-design\openjarvis-open-design-skill-boundary.md`

## Audit result

Scanned all Hermes skills under `C:\Users\krist\AppData\Local\hermes\skills` for:
- `openjarvis`
- `jarvis`
- `open-design` / `open design`

**Key finding:** no skills conflate OpenJarvis as Open Design. The OpenJarvis/King Wen skills use `OpenJarvis`/`openjarvis` correctly. The only bad link is in `openjarvis-kingwen-integration`, which has a stray “Open Design bridge” subsection inside an OpenJarvis skill. That is the one genuine conflation.

## Exact conflation

- `openjarvis-kingwen-integration/SKILL.md` contains an `open-design-bridge` subsection. That is incorrect for an OpenJarvis skill.
- `sovereign-integration-map/SKILL.md` legitimately references both OpenJarvis and Open Design as separate systems; that is valid.
- `open-design-setup`, `open-design-bridge`, `windows-local-development`, `windows-docker-dev-setup`, `windows-native-runtime`, `windows-amr-fallback`, `env-aggregation`, `rsmv-cache-crossref`, `rsmv-model-identity-kit`, `model-routing`, `mcp-protocol`, `windows-repo-scaffolding`, `windows-local-server-proxy`, `verified-engineering` — all legitimately mention Open Design or Hermes/Open Design workflows; none falsely claim OpenJarvis is Open Design.

## Remaining skill-form issues outside boundary

Two skills already edited this turn still need frontmatter format cleanup:
- `jkd-pedagogy-engine/SKILL.md` — now has `related_skills: []` under a malformed non-YAML header block formed from legacy markdown fence metadata; should be converted to standard YAML frontmatter.
- `xurl/SKILL.md` — related_skills inserted successfully, but no separate conflation issue found.

## Priorities

1. Remove/correct the stray Open Design subsection from `openjarvis-kingwen-integration`
2. Convert `jkd-pedagogy-engine` metadata block to standard YAML frontmatter
3. Verify no future skill doc writes merge OpenJarvis with Open Design again
