import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Newsletter } from "./Newsletter";

const defaultProps = {
  title: "Stay Updated",
  subtitle: "Subscribe for news",
  placeholder: "your@email.com",
  buttonText: "Subscribe",
  successMessage: "Thank you!",
  errorMessage: "Please enter a valid email.",
};

describe("Newsletter", () => {
  it("renders title and subtitle", () => {
    render(<Newsletter {...defaultProps} />);

    expect(screen.getByText("Stay Updated")).toBeInTheDocument();
    expect(screen.getByText("Subscribe for news")).toBeInTheDocument();
  });

  it("renders without subtitle when not provided", () => {
    render(<Newsletter {...defaultProps} subtitle={undefined} />);

    expect(screen.getByText("Stay Updated")).toBeInTheDocument();
    expect(screen.queryByText("Subscribe for news")).not.toBeInTheDocument();
  });

  it("renders email input with correct attributes", () => {
    render(<Newsletter {...defaultProps} />);

    const input = screen.getByLabelText("Email address");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("placeholder", "your@email.com");
    expect(input).toBeRequired();
  });

  it("renders submit button with correct text", () => {
    render(<Newsletter {...defaultProps} />);

    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });

  it("shows error for invalid email submission", async () => {
    const user = userEvent.setup();
    render(<Newsletter {...defaultProps} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "invalidemail");

    // Use fireEvent.submit to bypass HTML5 native email validation
    const form = input.closest("form")!;
    fireEvent.submit(form);

    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email.");
  });

  it("marks input as aria-invalid on error", async () => {
    const user = userEvent.setup();
    render(<Newsletter {...defaultProps} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "nope");

    // Use fireEvent.submit to bypass HTML5 native email validation
    const form = input.closest("form")!;
    fireEvent.submit(form);

    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("clears error state when user types after error", async () => {
    const user = userEvent.setup();
    render(<Newsletter {...defaultProps} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "nope");

    // Use fireEvent.submit to bypass HTML5 native email validation
    const form = input.closest("form")!;
    fireEvent.submit(form);

    expect(screen.getByRole("alert")).toBeInTheDocument();

    await user.type(input, "@test.com");

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("calls onSubmit with email on valid submission", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();

    render(<Newsletter {...defaultProps} onSubmit={onSubmit} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");
    await user.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(onSubmit).toHaveBeenCalledWith("test@example.com");
  });

  it("shows success message after successful submission", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();

    render(<Newsletter {...defaultProps} onSubmit={onSubmit} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");
    await user.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(screen.getByText("Thank you!")).toBeInTheDocument();
    // Form should be replaced with success state
    expect(screen.queryByLabelText("Email address")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Newsletter {...defaultProps} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
