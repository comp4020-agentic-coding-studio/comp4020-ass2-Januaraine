# Course planning: Digital Archaeology: Recovering Lost Games

Status: **planning draft, pre-implementation**. This document captures course-design
decisions discussed so far. No website content, config, or architecture has been
changed to implement any of this yet. Nothing here should be treated as final
until the "Unresolved decisions" section below is resolved.

## 1. Confirmed decisions

### Course title

**Digital Archaeology: Recovering Lost Games**

### Core concept / course spine

A hands-on **recovery practicum**: students don't just study the history or
theory of game preservation, they actually excavate, emulate, or reconstruct
real abandoned/obsolete games as artifacts. Depth comes from narrowing to one
artifact class (games) and treating recovery as a real technical skill, rather
than surveying "digital preservation" broadly.

### Why the course is specifically about recovering lost games

- Games give a **playable, tangible result** — a recovered artifact can
  actually be run and experienced, not just described.
- There's a **clear technical throughline**: emulation, file-format reverse
  engineering, save-file forensics, ROM/cartridge dumping.
- There's real **citable texture** to draw on: DOSBox, MAME, ROM-dumping and
  abandonware preservation communities.
- The domain has **built-in ethical/legal ambiguity** (copyright, abandonware,
  emulation legality) that gives the course critical material beyond pure
  technique.
- Narrowing from "abandoned software & games" (broader) to **games
  specifically** sharpens the course further, per the brief's push for
  narrowness over a broad, committee-passable topic.

### Intended hands-on recovery-practicum structure

- Students work with **real examples** from the chosen artifact class
  (obsolete/abandoned games), not hypothetical or purely historical case
  studies.
- The course builds technical skills incrementally (emulation basics → file
  format reverse engineering → save-file analysis → hardware-level
  preservation) before students apply them to their own chosen artifact.
- Later weeks shift from *doing* recovery to *documenting and presenting* it —
  treating the write-up/exhibit as part of the craft, not an afterthought.

### Current rough 12-week curriculum arc

This is a **draft**, not yet finalized — several unresolved decisions below
(scope, platforms, legal boundaries, technical depth) will likely reshape it.

| Week | Topic |
| --- | --- |
| 1 | What counts as "dead"? — obsolescence, bit rot, corporate death |
| 2 | Emulation fundamentals (DOSBox/console emulators, legal grey zones) |
| 3 | Reading a dead file format — hex dumps, reverse engineering by hand |
| 4 | Case study: excavating one DOS game start to finish (deck lecture) |
| 5 | Save files as archaeological evidence |
| 6 | Abandonware ethics & copyright — **Assessment 1 ("Field Report") due** |
| 7 | Console-era preservation — cartridge dumping, BIOS, hardware quirks |
| 8 | Studio: recover an artifact of your own choosing |
| 9 | Documentation as craft — writing the archaeological report |
| 10 | Oral history of abandonware/preservation communities |
| 11 | Exhibit prep — presenting a recovered artifact to a non-expert audience |
| 12 | What we couldn't recover, and why — **Final project ("Recovery Exhibit") due** |

### Current assessment idea

- **Assessment 1 — "Field Report"**, landing week 6.
- **Final project — "Recovery Exhibit"**, landing week 12.
- Named to match the practicum framing (real deliverable names from the field)
  rather than generic "Assignment 1" / "Final Project" labels.
- Weighting between the two: **not yet decided** (see below).

### Relationship between the course concept and the website

The website *is* the course, per the assignment brief — there's no separate
curriculum document. Once the decisions below are resolved, this plan
translates into:

- `src/course-config.ts` — title, SLOP code/level, description, tags, dates.
- `src/content/sessions/`, `src/content/lectures/`, `src/content/assessments/`,
  `src/content/people/` — the 12-week arc and assessments as real content
  entries.
- `src/decks/` — at least one real lecture deck (per the assignment spec).
- `CLAUDE.md` — course-design decisions worth encoding as agent rules (e.g. a
  scope boundary the agent shouldn't drift past).
- `spec/` — tests protecting the promises this specific course makes (e.g. "no
  online-only game is treated as recoverable," if that's the scope we land
  on).

None of this has been implemented yet.

## 2. Unresolved decisions (TBD)

None of the items below have been decided. They are listed as open questions,
not assumptions — nothing should be built against a specific answer to any of
these until it's actually chosen.

| # | Decision | Status | Why it matters |
| --- | --- | --- | --- |
| 1 | What counts as a "lost" / "abandoned" game | **TBD** | Defines the course's core object of study; affects nearly every week and every recovery case study. |
| 2 | Time period / historical scope | **TBD** | Determines which platforms/eras are even in scope (e.g. 1980s–90s PC vs. also 2000s–2010s web/mobile). |
| 3 | Supported platforms (PC, console, browser/Flash, mobile, etc.) | **TBD** | Drives which recovery techniques get taught (emulator choice, ROM dumping vs. Flash archival, etc.) and what hardware/tooling access is assumed. |
| 4 | Whether online/server-dependent games are included | **TBD** | Server-dependent games often can't be "recovered" the same way as offline games — this could exclude a whole category or require a different practicum track. |
| 5 | What recovery methods are in scope | **TBD** | E.g. emulation only, vs. also ROM/cartridge dumping, save-file forensics, source-code archaeology, community/oral-history methods. |
| 6 | How much technical depth the course should require | **TBD** | Affects prerequisite assumptions, week 2–3 content, and how achievable the week 8 studio project is for students. |
| 7 | Legal/ethical boundaries around emulation, ROMs, abandonware | **TBD** | Directly shapes week 2 and week 6 content, and what the course can responsibly ask students to actually do hands-on. |
| 8 | What students produce for the final recovery project | **TBD** | The "Recovery Exhibit" is currently just a name — deliverable format (write-up, working emulated build, video, live demo, etc.) isn't defined. |
| 9 | Assessment weighting | **TBD** | Needs to sum to 100% per the site's schema; currently no split decided between "Field Report" and "Recovery Exhibit." |
| 10 | Anything else materially affecting the 12-week arc | **TBD** | E.g.: course tone (sincere/deadpan/satirical), whether the same case-study game recurs across weeks or each week uses a new one, whether hardware access is required or emulation-only, individual vs. instructor-assigned artifact for the studio week. |

## 3. Next step

Resolve the table in section 2 — ideally together, decision by decision — before
any implementation (`course-config.ts`, content collections, decks, `CLAUDE.md`
rules, or `spec/` tests) begins.
