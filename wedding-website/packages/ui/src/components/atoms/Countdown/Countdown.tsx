"use client";

import React, { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

interface CountdownProps {
  readonly targetDate: Date;
  readonly className?: string;
}

export function Countdown({
  targetDate,
  className,
}: CountdownProps): React.ReactElement {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className={cn("flex justify-center gap-2 md:gap-4", className)}>
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-sm border border-wedding-neutral-100 px-3 py-3 md:px-5 md:py-4 min-w-[60px] md:min-w-[85px]">
              <div className="text-2xl md:text-4xl font-serif text-wedding-coral-500 tabular-nums">
                {String(item.value).padStart(2, "0")}
              </div>
            </div>
            <div className="text-[10px] md:text-xs text-wedding-neutral-500 mt-2 font-medium uppercase tracking-wider">
              {item.label}
            </div>
          </div>
          {index < 3 && (
            <div className="text-xl md:text-3xl text-wedding-coral-300 font-light self-start mt-3 md:mt-4">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
