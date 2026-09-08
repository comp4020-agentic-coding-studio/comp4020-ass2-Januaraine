## What I built

SLOP3406, "Digital Archaeology: Recovering Lost Games," is a hands-on recovery practicum: students learn emulation, file-format investigation and archival research on worked examples, then apply those methods to one lost or abandoned game of their choosing, producing a recovery attempt, a report, and a public exhibition. A well-documented failure to recover the artifact counts as a valid outcome, not a lesser one. The course treats obsolete games as digital archaeological artifacts, using their technical remains to investigate what can still be recovered, and what has genuinely been lost.

## The moments that mattered

### Moment 1: locking the mechanical contract before the course existed

1. **what happened**: Before the curriculum existed, `spec/assignment-2.test.ts` fixed the mechanical requirements: assigned course-code digits, all twelve teaching weeks, assessment weights summing to 100%, at least one lecture linking a deck that builds.
2. **what you did instead of the obvious thing**: The obvious order is course first, requirements after. I inverted it: constraints locked in first, so the curriculum was designed inside a contract instead of retrofitted to one.
3. **how you knew it was right**: A missing week or bad assessment split is caught by the build, not a final manual re-read.
4. **the citation**: [`e5213c0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Januaraine/commit/e5213c0e47d8df0a6a65aebdf02f97d4b5580444)

### Moment 2: narrowing from "digital preservation" to one artifact class

1. **what happened**: `docs/course-plan.md` records narrowing the course from broad digital preservation to *games* — a concrete artifact to recover, a technical throughline across emulation, file formats and save files, and a natural home for copyright/abandonment questions.
2. **what you did instead of the obvious thing**: A broad preservation survey would've been easier to justify but made the semester a bag of related topics, not a sustained practicum. I chose depth over breadth: one artifact class, the whole course.
3. **how you knew it was right**: The curriculum keeps returning to the same recovery problem — file formats, save files, emulation and archival research are different evidence about the same artifact, not unrelated topics.
4. **the citation**: [`fae9819`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Januaraine/commit/fae981948bf61d459b69a9c2da81db2df7516d1a)

### Moment 3: the consistency check changed only what broke a decision

1. **what happened**: The ten confirmed decisions were checked against the drafted twelve-week curriculum. Three inconsistencies turned up: week 3 implied deeper reverse engineering than decided, week 7 implied hands-on cartridge dumping despite hardware access being optional, and weeks 2/8 skipped the confirmed browser/Flash games.
2. **what you did instead of the obvious thing**: Instead of rewriting the curriculum to make it more polished, I changed only the weeks that contradicted a confirmed decision — a week consistent with the plan was left alone.
3. **how you knew it was right**: Each change traced back to a specific decision, making the pass a verification, not a second round of subjective editing.
4. **the citation**: [`325d348`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Januaraine/commit/325d3487c4857061e5045f2e667882bba5f060d8)

### Moment 4: turning decisions into rules the agent has to keep obeying

1. **what happened**: The site build commit added five course-design rules to `CLAUDE.md`: no server-dependent games as hands-on targets, no advanced reverse engineering or exploit development, fictional case-study games, a fixed exhibit presentation date, and ROM/emulation framed as preservation, not distribution.
2. **what you did instead of the obvious thing**: These already existed as prose in the course plan, but the load-bearing constraints were duplicated into `CLAUDE.md` so they'd stay visible to the agent during later editing.
3. **how you knew it was right**: The rules show up in real content: the fictional "Meridian Drift" case study avoids a real copyrighted game, and the ROM/emulation material keeps the preservation framing — they constrain content, not just documentation.
4. **the citation**: [`fd3cad4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Januaraine/commit/fd3cad4ceb6e0955718a14aa7e261e14efa8d279)

`docs/course-plan.md` and the site build are marked `Co-Authored-By: Claude Sonnet`: the agent drafted the consistency check and course content against decisions already confirmed in the plan, while I reviewed whether the flagged inconsistencies and resulting changes were genuine rather than accepting them unread.