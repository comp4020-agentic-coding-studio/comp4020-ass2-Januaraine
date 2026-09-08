# Course planning: Digital Archaeology: Recovering Lost Games

Status: **planning draft, pre-implementation**. This document captures course-design
decisions discussed so far. No website content, config, or architecture has been
changed to implement any of this yet. Sections 1–2 record decisions; section 3
records the consistency check run against the curriculum after those decisions
were made.

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
  format investigation → save-file analysis → console-era preservation)
  before students apply them to their own chosen artifact.
- Later weeks shift from *doing* recovery to *documenting and presenting* it —
  treating the write-up/exhibit as part of the craft, not an afterthought.

### 12-week curriculum arc (revised — see §3 for what changed and why)

| Week | Topic |
| --- | --- |
| 1 | What counts as "lost" or "abandoned"? Defining the course's object of study — no longer obtainable through its original distribution channel/platform, not just old, obscure, or still-available. Server-dependent games surface here as a preservation problem, not a hands-on target. |
| 2 | Emulation fundamentals across the course's core platforms — PC (DOSBox), console emulators, and browser/Flash (e.g. Ruffle) — plus the legal grey zones around each |
| 3 | Reading a dead file format — hex dumps and basic file-format investigation (not full reverse engineering) |
| 4 | Case study: excavating one PC game start to finish (deck lecture; the course's recurring reference case study) |
| 5 | Save files as archaeological evidence |
| 6 | Abandonware ethics & copyright — digital preservation, responsible archival access, and the ethical/legal ambiguity around emulation — **Assessment 1 ("Field Report") due, 40%** |
| 7 | Console-era preservation — how cartridge dumping and BIOS emulation work, read from existing dumps and archives rather than requiring hands-on hardware access |
| 8 | Studio: recover an artifact of your own choosing (PC, console, or browser/Flash) |
| 9 | Documentation as craft — writing the archaeological report |
| 10 | Community archives as evidence — how abandonware/preservation-community records and oral histories feed into recovery, as an archival-research method rather than general games history |
| 11 | Exhibit prep — presenting a recovered artifact to a non-expert audience |
| 12 | What we couldn't recover, and why — a well-documented failed recovery counts as a valid outcome — **Final project ("Recovery Exhibit") due, 60%** |

### Current assessment idea

- **Assessment 1 — "Field Report"**, landing week 6, **40%**.
- **Final project — "Recovery Exhibit"**, landing week 12, **60%** (100% total).
- Final project deliverable: students choose one qualifying lost/abandoned
  game or artifact and produce (a) a recovery attempt, (b) an archaeological
  report documenting evidence, process and findings, and (c) a public-facing
  exhibition/presentation of the result. A well-documented failed recovery,
  with evidence explaining why recovery was impossible, is a valid outcome —
  not every artifact needs to be successfully recovered.
- Named to match the practicum framing (real deliverable names from the
  field) rather than generic "Assignment 1" / "Final Project" labels.

### Relationship between the course concept and the website

The website *is* the course, per the assignment brief — there's no separate
curriculum document. Once any remaining open decisions are resolved, this
plan translates into:

- `src/course-config.ts` — title, SLOP code/level, description, tags, dates.
- `src/content/sessions/`, `src/content/lectures/`, `src/content/assessments/`,
  `src/content/people/` — the 12-week arc and assessments as real content
  entries.
- `src/decks/` — at least one real lecture deck (per the assignment spec).
- `CLAUDE.md` — course-design decisions worth encoding as agent rules (e.g. the
  "no server-dependent games as hands-on targets" boundary, or "no advanced
  reverse engineering" scope limit).
- `spec/` — tests protecting the promises this specific course makes.

None of this has been implemented yet.

## 2. Course-design decisions

All ten items previously marked TBD are now **confirmed** (decided by the
instructor, recorded here, not yet implemented).

| # | Decision | Status | Resolution |
| --- | --- | --- | --- |
| 1 | What counts as a "lost" / "abandoned" game | **Confirmed** | A commercially released game no longer normally obtainable/playable through its original distribution channel or intended platform. Merely old, obscure, or still-commercially-available games don't automatically qualify. |
| 2 | Time period / historical scope | **Confirmed** | Primarily 1990s–2010s. Not an absolute requirement for every case study, but the course stays centered on this period. |
| 3 | Supported platforms | **Confirmed** | PC, console, browser/Flash. No expansion to mobile, VR, arcade, etc. without a strong curriculum reason. |
| 4 | Online / server-dependent games | **Confirmed** | May be discussed as a preservation problem; not the main hands-on recovery objects. Practical work focuses on artifacts recoverable from surviving files, media, archives, or emulation. |
| 5 | Recovery methods in scope | **Confirmed** | Emulation, archival research, file/save-file analysis, basic reverse engineering / file-format investigation. Not an advanced reverse-engineering course — technical methods serve the recovery process. |
| 6 | Technical depth | **Confirmed** | Intermediate. Basic programming/computing literacy assumed; no advanced reverse engineering, exploit development, or specialist hardware skills required. |
| 7 | Legal/ethical boundaries | **Confirmed** | Covers digital preservation, copyright, abandonware, emulation, responsible archival access, and the ethical/legal ambiguity around preservation. Not framed as encouraging illegal ROM distribution or copyright infringement. |
| 8 | Final recovery project | **Confirmed** | Students choose one qualifying lost/abandoned game or artifact; produce a recovery attempt, an archaeological report (evidence, process, findings), and a public-facing exhibition/presentation. A well-documented failed recovery is a valid outcome. |
| 9 | Assessment weighting | **Confirmed** | Field Report 40%, Recovery Exhibit 60% (100% total). |
| 10 | Other curriculum decisions | **Confirmed** | One recurring case-study game where useful; students choose their own artifact for the recovery studio/final project; hardware access is NOT a mandatory prerequisite (emulation + accessible archival materials suffice); course tone stays a distinctive practicum, not generic video-game history or generic digital-preservation survey. |

No decision above was invented beyond what was specified; nothing in this
section extends past the instructor's stated decisions.

## 3. Curriculum consistency check

Reviewed the previous 12-week arc against all ten decisions in §2. Three
inconsistencies were found and fixed; everything else already fit and was left
alone.

### What was changed, and why

- **Week 3** — was "Reading a dead file format — hex dumps, reverse
  engineering by hand." "Reverse engineering by hand" read as more advanced
  than decision 5/6 allow (basic file-format investigation, not an advanced
  reverse-engineering course). Reworded to "hex dumps and basic file-format
  investigation (not full reverse engineering)" — same topic, scoped to the
  confirmed technical depth.
- **Week 7** — was "Console-era preservation — cartridge dumping, BIOS,
  hardware quirks," which reads as requiring students to physically dump
  cartridges themselves. Decision 10 makes hardware access explicitly
  non-mandatory. Reworded to frame the same topic (how cartridge
  dumping/BIOS emulation work) as taught from existing dumps and archives,
  not as a hands-on hardware requirement.
- **Week 2 and Week 8** — neither previously mentioned browser/Flash, even
  though decision 3 names it as one of three primary platforms alongside PC
  and console. Added browser/Flash emulation to week 2's fundamentals and to
  week 8's studio options, so all three confirmed platforms are actually
  represented rather than the course defaulting to PC/console only.

Two further clarifications were folded into existing weeks rather than
changing their topics, since the original spirit already fit once made
explicit:

- **Week 1** now explicitly states the confirmed lost/abandoned definition
  and notes server-dependent games as a discussion point, not a hands-on
  target (decisions 1 and 4) — same topic, sharpened wording.
- **Week 10** ("Oral history of abandonware/preservation communities") was
  reworded to "Community archives as evidence," framing it explicitly as an
  archival-research recovery method rather than a general-interest history
  segment — guarding against the "generic history of video games" drift
  decision 10 warns against. The week's place in the arc didn't change.

No week was found to violate decisions 2, 5 (methods list otherwise), 6, 7, 8,
or 9 as originally written; no week focused primarily on mobile or
server-dependent games, or on assessment activities inconsistent with the
40/60 split. Weeks 4, 5, 6, 9, 11, and 12 were left unchanged — they already
matched the confirmed decisions.

### Remaining decisions still genuinely open

These weren't part of the ten decisions above and still need confirmation
before implementation:

- The recurring reference case-study game (week 4) — a specific title hasn't
  been chosen yet.
- Exact SLOP course code level (undergrad 1000–4000 vs. postgrad 6000/8000)
  and course title/tags for `course-config.ts`.
- Whether any named platforms/tools (e.g. specific emulators) should be
  called out by name in content, or left generic.
- The people/teaching-team fiction (who "teaches" this course, if the site's
  `people` collection is populated beyond placeholders).

## 4. Next step

The ten course-design decisions are now confirmed and the curriculum has been
checked against them. Implementation (`course-config.ts`, content collections,
decks, `CLAUDE.md` rules, `spec/` tests) can begin once the remaining open
items in §3 are resolved, or alongside them if you'd rather decide those as
you build.
