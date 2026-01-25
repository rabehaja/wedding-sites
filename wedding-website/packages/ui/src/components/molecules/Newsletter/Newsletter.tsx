"use client";

import { useState } from "react";
import { Typography } from "../../atoms/Typography";
import { WeddingButton } from "../../atoms/WeddingButton";
import { cn } from "../../../lib/utils";

interface NewsletterProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly placeholder?: string;
  readonly buttonText: string;
  readonly successMessage: string;
  readonly errorMessage: string;
  readonly className?: string;
  readonly onSubmit?: (email: string) => Promise<void>;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function Newsletter({
  title,
  subtitle,
  placeholder = "your@email.com",
  buttonText,
  successMessage,
  errorMessage,
  className,
  onSubmit,
}: NewsletterProps): React.ReactElement {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        const googleSheetsUrl = process.env.NEXT_PUBLIC_NEWSLETTER_URL;
        if (googleSheetsUrl) {
          // Use URL parameters instead of JSON body (works with no-cors)
          const params = new URLSearchParams({
            email,
            source: "madagascar",
            timestamp: new Date().toISOString(),
          });
          await fetch(`${googleSheetsUrl}?${params.toString()}`, {
            method: "POST",
            mode: "no-cors",
          });
        }
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={cn("text-center", className)}>
        <div className="p-8 bg-wedding-purple-100/50 rounded-xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wedding-coral-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-wedding-coral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <Typography variant="h4" className="font-serif">
            {successMessage}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("text-center", className)}>
      <Typography variant="h3" className="font-serif mb-3">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body" color="muted" className="mb-6">
          {subtitle}
        </Typography>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder={placeholder}
            required
            className={cn(
              "flex-1 px-4 py-3 border rounded-lg",
              "focus:outline-none focus:ring-2 focus:ring-wedding-purple-500 focus:border-transparent",
              "transition-all",
              status === "error"
                ? "border-red-300 bg-red-50"
                : "border-wedding-neutral-300"
            )}
            aria-label="Email address"
            aria-invalid={status === "error"}
          />
          <WeddingButton
            type="submit"
            variant="primary"
            disabled={status === "loading"}
            className="sm:w-auto w-full"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                ...
              </span>
            ) : (
              buttonText
            )}
          </WeddingButton>
        </div>

        {status === "error" && (
          <p className="text-red-600 text-sm" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
