import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string; startDate: string; endDate: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// The three digits this repo was assigned when it was provisioned — the spec
// requires keeping them no matter which level/title/topic replaces the rest
// of the code.
const ASSIGNED_DIGITS = "406";

describe("assignment 2 spec", () => {
  it("keeps a valid SLOPxxxx code with this repo's assigned digits", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]\d{3}$/);
    expect(api.course.code.slice(-3)).toBe(ASSIGNED_DIGITS);
  });

  it("runs across all twelve dated teaching weeks", () => {
    const dated = api.nodes.filter((n) => n.type === "sessions" || n.type === "lectures");
    const weeks = new Set(dated.map((n) => n.meta?.week));
    const missing = Array.from({ length: 12 }, (_, i) => i + 1).filter((w) => !weeks.has(w));
    expect(missing, `no session or lecture scheduled for week(s): ${missing.join(", ")}`).toEqual([]);
  });

  it("has assessment weights that add up to 100%", () => {
    const assessments = api.nodes.filter((n) => n.type === "assessments");
    const total = assessments.reduce((sum, n) => sum + Number(n.meta?.weight ?? 0), 0);
    expect(total, `assessment weights sum to ${total}, not 100`).toBe(100);
  });

  it("has at least one lecture linking to a deck that actually builds", () => {
    const lectures = api.nodes.filter((n) => n.type === "lectures");
    const withSlides = lectures.filter((n) => typeof n.meta?.slides === "string");
    expect(withSlides.length, "no lecture has a slides: link to a deck").toBeGreaterThan(0);

    for (const lecture of withSlides) {
      const slides = lecture.meta!.slides as string;
      const deckIndex = resolve("dist", `.${slides}`, "index.html");
      expect(existsSync(deckIndex), `${lecture.id} links ${slides}, but ${deckIndex} wasn't built`).toBe(true);
    }
  });
});
