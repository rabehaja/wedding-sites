import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Fix "now" to a known point: 2026-11-10T12:00:00Z (4 days before target)
    vi.setSystemTime(new Date("2026-11-10T12:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const targetDate = new Date("2026-11-14T15:00:00+03:00");

  it("renders all four countdown units", () => {
    render(<Countdown targetDate={targetDate} />);

    expect(screen.getByText("Days")).toBeInTheDocument();
    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Seconds")).toBeInTheDocument();
  });

  it("displays correct initial countdown values", () => {
    render(<Countdown targetDate={targetDate} />);

    // Target: 2026-11-14T12:00:00Z, Now: 2026-11-10T12:00:00Z = exactly 4 days
    expect(screen.getByText("04")).toBeInTheDocument(); // days
  });

  it("zero-pads single-digit values", () => {
    render(<Countdown targetDate={targetDate} />);

    // Hours, minutes, seconds should be zero-padded
    const allValues = screen.getAllByText("00");
    expect(allValues.length).toBeGreaterThan(0);
  });

  it("updates every second", () => {
    render(<Countdown targetDate={targetDate} />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    // After 1 second from 04d 00h 00m 00s, seconds should show 59
    // Both minutes and seconds can be 59, so just verify the value exists
    const fiftyNines = screen.getAllByText("59");
    expect(fiftyNines.length).toBeGreaterThanOrEqual(1);
  });

  it("applies custom className", () => {
    const { container } = render(
      <Countdown targetDate={targetDate} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("shows zeros when target date is in the past", () => {
    const pastDate = new Date("2020-01-01T00:00:00Z");
    render(<Countdown targetDate={pastDate} />);

    const allZeros = screen.getAllByText("00");
    expect(allZeros).toHaveLength(4);
  });

  it("cleans up interval on unmount", () => {
    const clearIntervalSpy = vi.spyOn(global, "clearInterval");

    const { unmount } = render(<Countdown targetDate={targetDate} />);
    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
