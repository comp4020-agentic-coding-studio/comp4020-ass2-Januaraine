---
title: Reading a dead file format
description:
  Hex dumps and basic file-format investigation — reading what a game left
  behind, not reverse-engineering its code
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
related:
  - sessions/03-reading-dead-formats
---

A recovered install often comes with files nobody wrote a spec for: a
proprietary archive, a level format, a save file with no documentation
anywhere. This week is about reading one of those cold, with a hex editor
and a lot of pattern-spotting — spotting a repeated header, a length field,
a block of text sitting in plain sight next to binary data. It is
**not** an introduction to reverse-engineering a game's executable, and
nothing here asks you to disassemble code.

The worked example is *Meridian Drift*, a 2004 PC exploration game whose
publisher folded before a planned re-release — one of this course's
recurring reference points. Surviving beta builds ship a `.mdpak` archive
format with no public documentation, which turns out to yield to about
twenty minutes of careful hex-dump reading.

## Outline

- hex editors, and what to look for first (headers, magic bytes, lengths)
- worked example: cracking `Meridian Drift`'s `.mdpak` archive by hand
- when to stop: the line between "read the format" and "reverse the code"
- tools that make this faster once you've done it once by hand
