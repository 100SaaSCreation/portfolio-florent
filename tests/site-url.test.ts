import { describe, expect, it } from "vitest";
import { siteUrl } from "@/lib/site";

describe("siteUrl", () => {
  it("n'embarque ni CR/LF ni slash final", () => {
    expect(siteUrl).not.toMatch(/[\r\n\t]/);
    expect(siteUrl.endsWith("/")).toBe(false);
    expect(siteUrl).toMatch(/^https?:\/\//i);
  });
});
