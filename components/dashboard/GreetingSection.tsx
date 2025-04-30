"use client";

import { cn } from "@/lib/utils";

interface GreetingSectionProps {
  userName: string;
}

export default function GreetingSection({ userName }: GreetingSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-1">
        Hey, <span className="text-emerald-500">{userName}!</span>
      </h2>
      <p className="text-muted-foreground">
        Lets begin your real estate investment journey.
      </p>
    </div>
  );
}