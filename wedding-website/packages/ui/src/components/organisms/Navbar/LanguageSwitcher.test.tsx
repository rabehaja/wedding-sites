import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock next-intl
vi.mock("next-intl", () => ({
  useLocale: vi.fn(() => "en"),
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/en/some-page"),
}));

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    vi.mocked(useLocale).mockReturnValue("en");
    vi.mocked(usePathname).mockReturnValue("/en/some-page");
  });

  it("renders current language", () => {
    render(<LanguageSwitcher />);

    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("shows dropdown on click", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const trigger = screen.getByRole("button", { expanded: false });
    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    // All three language options should be visible
    expect(screen.getByText("DE")).toBeInTheDocument();
    expect(screen.getByText("FR")).toBeInTheDocument();
  });

  it("highlights current locale in dropdown", async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    await user.click(screen.getByRole("button"));

    // The EN button inside dropdown should have active styling class
    const enButtons = screen.getAllByText("EN");
    // The dropdown EN option (second one) should have coral text color
    const dropdownEnButton = enButtons[enButtons.length - 1]!.closest("button");
    expect(dropdownEnButton).toHaveClass("text-wedding-coral-500");
  });

  it("navigates to new locale on selection", async () => {
    const user = userEvent.setup();

    // Mock window.location
    const originalLocation = window.location;
    Object.defineProperty(window, "location", {
      writable: true,
      value: { ...originalLocation, href: "" },
    });

    render(<LanguageSwitcher />);

    await user.click(screen.getByRole("button"));

    // Click "DE" option
    const deButtons = screen.getAllByText("DE");
    const deOption = deButtons[deButtons.length - 1]!.closest("button")!;
    await user.click(deOption);

    expect(window.location.href).toBe("/de/some-page");

    // Restore
    Object.defineProperty(window, "location", {
      writable: true,
      value: originalLocation,
    });
  });

  it("strips locale prefix from path when switching", async () => {
    vi.mocked(usePathname).mockReturnValue("/en/accommodation");
    const user = userEvent.setup();

    const originalLocation = window.location;
    Object.defineProperty(window, "location", {
      writable: true,
      value: { ...originalLocation, href: "" },
    });

    render(<LanguageSwitcher />);
    await user.click(screen.getByRole("button"));

    const frButtons = screen.getAllByText("FR");
    const frOption = frButtons[frButtons.length - 1]!.closest("button")!;
    await user.click(frOption);

    expect(window.location.href).toBe("/fr/accommodation");

    Object.defineProperty(window, "location", {
      writable: true,
      value: originalLocation,
    });
  });

  it("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <LanguageSwitcher />
        <button>Outside</button>
      </div>
    );

    // Open dropdown
    await user.click(screen.getByRole("button", { expanded: false }));
    expect(screen.getByText("DE")).toBeInTheDocument();

    // Click outside
    await user.click(screen.getByText("Outside"));

    // Dropdown should be closed — the trigger should show collapsed
    expect(screen.getByRole("button", { expanded: false })).toBeInTheDocument();
  });

  it("renders different locale when set to DE", () => {
    vi.mocked(useLocale).mockReturnValue("de");

    render(<LanguageSwitcher />);

    // The trigger button should show DE
    const trigger = screen.getByRole("button");
    expect(trigger).toHaveTextContent("DE");
  });
});
