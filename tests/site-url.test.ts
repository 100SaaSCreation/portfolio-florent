import { describe, expect, it } from "vitest";
import { siteUrl } from "@/lib/site";

describe("siteUrl", () => {
  it("est https sans slash final ni whitespace", () => {
    expect(siteUrl).toMatch(/^https:\/\/[a-z0-9.-]+$/i);
    expect(siteUrl).not.toMatch(/[\r\n\t]/);
    expect(siteUrl.endsWith("/")).toBe(false);
  });
});
