# OpenJarvis vs Open Design — Skill Boundary Reference

## Canonical definitions

- OpenJarvis = `C:\Users\krist\Desktop\OpenJarvis`
  - Python package: `src/openjarvis/`
  - Runtime data: `~/.openjarvis/`
  - Primary CLI entry: `jarvis`
- Open Design = `C:\Users\krist\Desktop\open-design`
  - Daemon/web/Electron workspace
  - Primary agent/runtime surface: Open Design daemon + `od moa`
- King Wen = `C:\Users\krist\Desktop\KING-WEN-I-CHING-IMMUTABLE-TABLES`
  - Read-only source of truth for 64-hex + 512-state emotional engine

## Naming rule

Use full repo/program names in skill docs:

- Write `OpenJarvis`, not bare `Jarvis`
- Write `Open Design`, not `open-design` unless referring to a literal path/folder name
- Do not imply OpenJarvis belongs to Open Design
- Do not imply Open Design ships the OpenJarvis King Wen consumer

## Cross-system allowed edges only

- OpenJarvis ↔ King Wen: direct consumer/producer boundary
- OpenJarvis ↔ Hermes: env/auth injection, skill/memory surfaces
- OpenJarvis ↔ Open Design: only via explicit bridge/runtime path, not by ownership

## Forbidden collapses

- Do not write “the OpenJarvis/open-design stack” as one stack
- Do not place `open-design-bridge` inside OpenJarvis `related_skills` unless the skill explicitly depends on Open Design programmatic control
- Do not use `jarvis` as shorthand for OpenJarvis in cross-system docs when the audience could misread it as another agent surface
