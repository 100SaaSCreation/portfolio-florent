import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CopyEmailButton } from "@/components/copy-email-button";

const EMAIL = "contact@example.com";

function mockClipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("CopyEmailButton", () => {
  it("copie l'adresse puis revient à l'état initial", async () => {
    vi.useFakeTimers();
    const writeText = vi.fn().mockResolvedValue(undefined);
    mockClipboard(writeText);
    render(<CopyEmailButton email={EMAIL} />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(writeText).toHaveBeenCalledWith(EMAIL);
    expect(screen.getByRole("button").textContent).toContain("Adresse copiée");

    act(() => {
      vi.advanceTimersByTime(2600);
    });
    expect(screen.getByRole("button").textContent).toContain("Copier l'adresse");
  });

  it("signale l'échec si le presse-papiers est refusé", async () => {
    mockClipboard(vi.fn().mockRejectedValue(new Error("denied")));
    render(<CopyEmailButton email={EMAIL} />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(screen.getByRole("button").textContent).toContain("Copie impossible");
  });
});
