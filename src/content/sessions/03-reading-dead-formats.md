---
title: Cracking an archive format by hand
description:
  A guided hex-dump exercise on an undocumented archive format, worked
  alongside a tutor rather than solo
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
spec:
  - you can identify a file's magic bytes and explain what they're for
  - you have located at least one length or offset field in a supplied file
  - you have extracted one file from inside a supplied archive by hand
---

## Before the studio

Bring a hex editor you're comfortable navigating. If you haven't used one
before, work through the short tutorial linked on this page before
studio — the session assumes you can already move around a hex view.

## In the studio

You'll work through a `.mdpak`-style archive supplied for the exercise
(structurally close to, but not identical to, the format from the week 4
case study) — finding its header, its file table, and pulling one embedded
file out by hand.

## Afterwards

This exact skill is what week 8's studio work will ask of you the first time
your own artifact's files don't open in anything.
