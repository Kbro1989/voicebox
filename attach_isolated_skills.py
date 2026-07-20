#!/usr/bin/env python3
"""
Bulk attach orphan skills to major skills via related_skills frontmatter.
Scan real skill directories for SKILL.md files missing related_skills,
then attach inferred neighbors from the graph report.
"""

import re
from pathlib import Path
from collections import defaultdict

ORPHAN_REPORT = Path(r'C:\Users\krist\Desktop\openjarvis_related_skills_graph.md')
APPDATA_DIR = Path(r'C:\Users\krist\AppData\Local\hermes\skills')
HERMES_DIR = Path.home() / '.hermes' / 'skills'


def parse_graph_report(path: Path) -> dict[str, list[tuple[str, str]]]:
    """Parse the markdown graph report and return skill -> [(neighbor, confidence), ...]"""
    text = path.read_text(encoding='utf-8', errors='replace')
    edges: dict[str, list[tuple[str, str]]] = defaultdict(list)
    edge_pattern = re.compile(
        r'`?([^`\s]+)`?\s*<->\s*`?([^`\s]+)`?\s*—\s*([^\n-]+)'
    )
    for match in edge_pattern.finditer(text):
        a, b, conf = match.group(1).strip(), match.group(2).strip(), match.group(3).strip()
        if not a or not b or a == b:
            continue
        if conf.startswith('alias-confirmed') or conf.startswith('explicit-frontmatter'):
            conf = 'high'
        elif conf.startswith('same-category') or conf.startswith('desktop-mention'):
            conf = 'medium'
        else:
            conf = 'low'
        edges[a].append((b, conf))
        edges[b].append((a, conf))
    result: dict[str, list[tuple[str, str]]] = defaultdict(list)
    for skill, neighbors in edges.items():
        seen = {}
        for neighbor, conf in neighbors:
            if neighbor not in seen or conf == 'high':
                seen[neighbor] = conf
            elif conf == 'medium' and seen[neighbor] == 'low':
                seen[neighbor] = conf
        result[skill] = sorted(seen.items(), key=lambda x: (-{'high': 2, 'medium': 1, 'low': 0}.get(x[1], 0), x[0]))
    return result


def find_orphan_skill_dirs() -> list[Path]:
    """Scan real skill directories for SKILL.md files missing related_skills frontmatter."""
    orphan_dirs = []
    for base in [APPDATA_DIR, HERMES_DIR]:
        if not base.exists():
            continue
        for skill_md in base.rglob('SKILL.md'):
            if any(x in skill_md.parts for x in ['.archive', '.hub', 'node_modules', '.git']):
                continue
            text = skill_md.read_text(encoding='utf-8', errors='replace')
            if 'related_skills:' not in text:
                orphan_dirs.append(skill_md.parent)
    return orphan_dirs


def add_related_skills(skill_dir: Path, neighbors: list[tuple[str, str]], max_edges: int = 8, dry_run: bool = False) -> bool:
    """Add related_skills to SKILL.md frontmatter. Returns True if modified."""
    skill_md = skill_dir / 'SKILL.md'
    if not skill_md.exists():
        return False

    text = skill_md.read_text(encoding='utf-8', errors='replace')
    if 'related_skills:' in text:
        return False

    parts = text.split('---', 2)
    if len(parts) < 3:
        return False

    fm = parts[1].strip()
    body = parts[2].lstrip('\n')

    # Filter neighbors to only include skills that actually exist in our skill dirs
    valid_neighbors = []
    all_skill_names = set()
    for base in [APPDATA_DIR, HERMES_DIR]:
        if base.exists():
            for d in base.rglob('SKILL.md'):
                if any(x in d.parts for x in ['.archive', '.hub', 'node_modules', '.git']):
                    continue
                all_skill_names.add(d.parent.name)

    skill_dir_name_lower = skill_dir.name.lower()
    valid_neighbor_names_lower = {n.lower() for n in all_skill_names}
    for neighbor, conf in neighbors:
        if len(valid_neighbors) >= max_edges:
            break
        if neighbor.lower() in valid_neighbor_names_lower and neighbor.lower() != skill_dir_name_lower:
            valid_neighbors.append(neighbor)

    if not valid_neighbors:
        return False

    # Build related_skills YAML block
    related_block = 'related_skills:\n'
    for n in valid_neighbors:
        related_block += f'  - {n}\n'

    if dry_run:
        print(f"  [DRY RUN] {skill_dir.name} -> {', '.join(valid_neighbors[:5])}")
        return False

    # Insert before the closing ---
    new_fm = fm + '\n' + related_block
    new_text = f'---\n{new_fm}---\n{body}'

    skill_md.write_text(new_text, encoding='utf-8')
    return True


def main():
    import sys
    dry_run = '--dry-run' in sys.argv or '-n' in sys.argv
    graph = parse_graph_report(ORPHAN_REPORT)
    orphan_dirs = find_orphan_skill_dirs()

    print(f"Orphan skill dirs found: {len(orphan_dirs)}")
    print(f"Skills with inferred edges: {len(graph)}")
    if dry_run:
        print("[DRY RUN] No files will be modified")

    modified = 0
    skipped = 0
    no_edges = []

    for skill_dir in orphan_dirs:
        skill_name = skill_dir.name
        neighbors = graph.get(skill_name, [])
        if not neighbors:
            no_edges.append(skill_name)
            skipped += 1
            continue

        top_neighbors = neighbors[:8]
        if add_related_skills(skill_dir, top_neighbors, dry_run=dry_run):
            modified += 1
            print(f"  + {skill_name} -> {', '.join(n for n, _ in top_neighbors[:5])}")
        else:
            skipped += 1

    print(f"\nModified: {modified}")
    print(f"Skipped: {skipped}")
    if no_edges:
        print(f"No inferred edges for: {len(no_edges)} skills: {', '.join(no_edges[:10])}")
    if dry_run:
        print("\nRe-run without --dry-run to apply changes")


if __name__ == "__main__":
    main()
