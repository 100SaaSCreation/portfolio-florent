import { afterEach, describe, expect, it } from "vitest";
import { assertLoginAllowed, clearLoginFailures } from "@/lib/login-rate-limit";

afterEach(() => {
  clearLoginFailures("test-ip");
});

describe("login rate limit", () => {
  it("autorise les premières tentatives puis bloque", () => {
    for (let i = 0; i < 8; i += 1) {
      expect(assertLoginAllowed("test-ip").ok).toBe(true);
    }
    const blocked = assertLoginAllowed("test-ip");
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.retryAfterSec).toBeGreaterThan(0);
  });

  it("réinitialise après clear", () => {
    assertLoginAllowed("test-ip");
    clearLoginFailures("test-ip");
    expect(assertLoginAllowed("test-ip").ok).toBe(true);
  });
});
