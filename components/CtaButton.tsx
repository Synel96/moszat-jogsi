import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "animate-cta-glow h-11 bg-green-400 px-6 text-base font-semibold text-green-950",
        "hover:animate-none hover:bg-green-300 hover:shadow-[0_0_36px_-2px_var(--color-green-300)]",
        "focus-visible:border-green-600 focus-visible:ring-green-400/50",
        className
      )}
      {...props}
    />
  );
}
