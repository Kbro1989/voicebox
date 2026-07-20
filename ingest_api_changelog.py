import json
from pathlib import Path
import hashlib

raw = '''[
    {
        "date": "2025-01-07",
        "version": "2.2.12",
        "urgency": "medium",
        "changes": [
            "Update RuneScape Logo"
        ]
    },
    {
        "date": "2022-05-27",
        "version": "2.2.11",
        "urgency": "medium",
        "changes": [
            "Fetch jav_config via https (changed from http)"
        ]
    },
    {
        "date": "2020-10-28",
        "version": "2.2.10",
        "urgency": "low",
        "changes": [
            "Launcher params handling update"
        ]
    },
    {
        "date": "2020-10-28",
        "version": "2.2.9",
        "urgency": "high",
        "changes": [
            "Replaced GLX with EGL on Linux (dependency update required)"
        ]
     },
     {
        "date": "2020-6-09",
        "version": "2.2.8",
        "urgency": "high",
        "changes": [
            "Fixed ping display on world select on Linux"
        ]
     },
     {
        "date": "2020-3-13",
        "version": "2.2.7",
        "urgency": "high",
        "changes": [
            "Improved Linux compatibility"
        ]
     },
     {
        "date": "2019-11-11",
        "version": "2.2.6",
        "urgency": "high",
        "changes": [
            "Improved Linux compatibility"
        ]
     },
     {
        "date": "2019-02-18",
        "version": "2.2.5",
        "urgency": "high",
        "changes": [
            "Improved Linux compatibility"
        ]
     },
     {
        "date": "2017-04-03",
        "version": "2.2.4",
        "urgency": "high",
        "changes": [
            "Modernise Launcher appearance"
        ]
     },
     {
        "date": "2017-1-30",
        "version": "2.2.3",
        "urgency": "high",
        "changes": [
            "Add auto-update ability to NXT Launcher",
            "Allow macOS to run multiple instances of RuneScape"
        ]
     },
     {
        "date": "2016-04-14",
        "version": "2.2.2",
        "urgency": "medium",
        "changes": [
            "Remove old registry keys correctly in installer",
            "Don't display 'old graphics drivers' warning if we can't tell how old they are"
        ]
     },
     {
        "date": "2016-04-13",
        "version": "2.2.1",
        "urgency": "medium",
        "changes": [
            "Install for all users on Windows, to avoid issues with icons not appearing if installed by elevated user (and other similar problems)",
            "Improve behaviour when closed before the client has started up properly"
        ]
    },
    {
        "date": "2016-04-12",
        "version": "2.2.0",
        "urgency": "medium",
        "changes": [
            "Fix crash on startup when graphics drivers are out of date"
        ]
    },
    {
        "date": "2016-04-11",
        "version": "2.1.9",
        "urgency": "medium",
        "changes": [
            "Make Cmd-Q and Quit menu/dock options close the launcher correctly on OSX (and Alt-F4 on linux)"
        ]
    },
    {
        "date": "2016-04-08",
        "version": "2.1.8",
        "urgency": "medium",
        "changes": [
            "Display prompt to update GPU drivers when they are old",
            "Allow users to hold down 's' to select default graphics options on startup",
            "Allow users to switch between ANGLE and OpenGL manually",
            "Improve error reporting a bit on Windows",
            "Fix some shutdown bugs on OSX"
        ]
    },
    {
        "date": "2016-04-08",
        "version": "2.1.7",
        "urgency": "medium",
        "changes": [
            "Fix keys being stuck down when switching focus on OSX"
        ]
    },
    {
        "date": "2016-04-07",
        "version": "2.1.6",
        "urgency": "medium",
        "changes": [
            "Intel Westmere chipsets auto-detect to run under ANGLE.",
            "Install Visual Studio Redistributable 2015 Update 2 in installer, rather than Update 0 (and require it to be installed)"
        ]
    },
    {
        "date": "2016-03-31",
        "version": "2.1.5",
        "urgency": "medium",
        "changes": [
            "Launcher now remembers Window positions per instance."
        ]
    },
    {
        "date": "2016-03-23",
        "version": "2.1.4",
        "urgency": "medium",
        "changes": [
            "Remove UAC checking in favour of better validation of permissions.",
            "Improve timeouts when downloading the client (fixes error (13,28)).",
            "Make the installer reject Windows XP < SP3.",
            "Install DirectX 9 in more cases when it is needed.",
            "Fix various linux graphics problems."
        ]
    },
    {
        "date": "2016-03-17",
        "version": "2.1.3",
        "urgency": "medium",
        "changes": [
            "Improve error reporting slightly."
        ]
    },
    {
        "date": "2016-03-16",
        "version": "2.1.2",
        "urgency": "medium",
        "changes": [
            "Some tweaks to the Ubuntu package."
        ]
    },
    {
        "date": "2016-03-08",
        "version": "2.1.1",
        "urgency": "medium",
        "changes": [
            "Detect Skylake Intel HD GPUs, and force the use of ANGLE, due to various artefacts exhibited in OpenGL mode.",
            "Allow the Windows installer to remove the cache on uninstall."
        ]
    },
    {
        "date": "2016-03-02",
        "version": "2.1.0",
        "urgency": "medium",
        "changes": [
            "Fix issues with paths and filenames with non-latin characters.",
            "Fix issues with creating cache folders in root of a drive.",
            "Fix problems with fullscreen blocking Start Menu and Alt-Tab.",
            "Fix some UAC problems on older versions of Windows.",
            "Give more informative error messages when there are Launcher problems."
        ]
    },
    {
        "date": "2016-03-02",
        "version": "2.0.9",
        "urgency": "medium",
        "changes": [
            "Add an x64 ANGLE build for Windows."
        ]
    },
    {
        "date": "2016-03-01",
        "version": "2.0.8",
        "urgency": "medium",
        "changes": [
            "Fix crash on Mac.",
            "Don't allow startup if the process is in an elevated UAC state on Windows."
        ]
    },
    {
        "date": "2016-02-19",
        "version": "2.0.7",
        "urgency": "medium",
        "changes": [
            "Fix language selection for Dutch and Spanish computers."
        ]
    },
    {
        "date": "2016-02-16",
        "version": "2.0.6",
        "urgency": "medium",
        "changes": [
            "Fix issue with going back to fullscreen the next time you load the client.",
            "Fix issue where first visit to fullscreen would leave client in odd size."
        ]
    },
    {
        "date": "2016-02-05",
        "version": "2.0.5",
        "urgency": "medium",
        "changes": [
            "Improve backwards compatibility.",
            "Fix language and cache/settings folder configuration.",
            "Improve progress bars."
        ]
    },
    {
        "date": "2016-01-20",
        "version": "2.0.4",
        "urgency": "medium",
        "changes": [
            "Allow configuration of cache and settings folders.",
            "Improve speed of Launcher initialization.",
            "Added quit confirmation when logged into game."
        ]
    },
    {
        "date": "2016-01-19",
        "version": "2.0.3",
        "urgency": "medium",
        "changes": [
            "Auto-detect whether ANGLE build is required, and run accordingly.",
            "Fix detection of C++ runtime in Windows installer."
        ]
    },
    {
        "date": "2016-01-06",
        "version": "2.0.2",
        "urgency": "medium",
        "changes": [
            "Make Linux version work.",
            "Better loading progress.",
            "Fix some focus issues."
        ]
    },
    {
        "date": "2015-11-13",
        "version": "2.0.1",
        "urgency": "medium",
        "changes": [
            "Initial release."
        ]
    }
]'''
entries = json.loads(raw)
corpus_lines = []
seen = set()
for entry in entries:
    title = f"RuneScape API {entry['version']}"
    change_text = " ".join(entry['changes'])
    text = f"Version {entry['version']} released on {entry['date']}. " + change_text
    
    # Deterministic dedup key
    key = hashlib.md5(f"{entry['version']}:{entry['date']}:{change_text[:80]}".encode()).hexdigest()[:16]
    if key in seen:
        continue
    seen.add(key)
    
    # Minimal but accurate parser tags
    parser_tags = ["changelog"]
    lowered = change_text.lower()
    if any(k in lowered for k in ["linux", "ubuntu", "glx", "egl"]):
        parser_tags.append("linux")
    if any(k in lowered for k in ["windows", "directx", "uac", "registry"]):
        parser_tags.append("windows")
    if any(k in lowered for k in ["macos", "mac", "osx"]):
        parser_tags.append("macos")
    if any(k in lowered for k in ["graphics", "gpu", "opengl", "angle", "shader"]):
        parser_tags.append("graphics")
    if any(k in lowered for k in ["launcher", "installer", "cache"]):
        parser_tags.append("launcher")
    if any(k in lowered for k in ["fix", "crash", "error", "bug"]):
        parser_tags.append("bugfix")
    if any(k in lowered for k in ["improve", "better", "modernise"]):
        parser_tags.append("enhancement")
    if len(parser_tags) == 1:
        parser_tags.append("general")

    version_hash = hashlib.md5(entry['version'].encode()).hexdigest()
    hexagram_id = (int(version_hash[:8], 16) % 64) + 1

    line = {
        "title": title,
        "version": entry['version'],
        "date": entry['date'],
        "urgency": entry['urgency'],
        "changes": entry['changes'],
        "parser_tags": parser_tags,
        "source": "runescape_wiki_api_docs",
        "hexagram_id": hexagram_id,
        "source_chars": len(text)
    }
    corpus_lines.append(line)

# Write to a separate file to avoid polluting existing corpus
out_path = Path(r'C:\Users\krist\Desktop\KING-WEN-I-CHING-IMMUTABLE-TABLES\kingwen_train_data\wiki_math_corpus_api_changelog.jsonl')
with open(out_path, 'w', encoding='utf-8') as f:
    for line in corpus_lines:
        f.write(json.dumps(line, ensure_ascii=False) + '\n')

print(f"Wrote {len(corpus_lines)} deduplicated API changelog entries to {out_path}")
