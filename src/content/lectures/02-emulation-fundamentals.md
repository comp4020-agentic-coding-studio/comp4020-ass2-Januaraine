---
title: Emulation fundamentals
description:
  How emulation actually works across the course's three platforms, and the
  legal grey zone around each
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
related:
  - sessions/02-emulation-fundamentals
---

Emulation is the course's main recovery tool, so week 2 covers what an
emulator is actually doing across the three platforms you'll work with:
DOSBox reconstructing a DOS-era PC, a console emulator reconstructing fixed
hardware down to timing quirks, and a browser emulator like Ruffle
reinterpreting a Flash file the browser itself no longer runs.

Each platform carries a different legal shape. Console emulation is
generally legal; the BIOS and ROM you feed it often aren't yours to
distribute. PC abandonware sits in a grey zone most publishers ignore but
few explicitly permit. Flash emulation is unusually clean, since Ruffle
reimplements the player rather than running Adobe's original code. None of
this is a loophole to exploit — it's the boundary you'll need to state
plainly in week 6's field report.

## Outline

- what an emulator reconstructs, and what it can't
- DOSBox, console emulators, and Ruffle: one demo each
- legality by platform: ROMs, abandonware, and reimplementation
- picking a platform for your own studio work later in the semester
