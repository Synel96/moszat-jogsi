import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // The design brief pairs a yellow badge with an amber-100 ground. Text
        // is yellow-800 rather than the brief's yellow-500: yellow-500 on
        // amber-100 lands around 1.9:1 contrast, far under the 4.5:1 minimum.
        // The star icon keeps the brief's yellow-500 (see [&_svg]:text-*).
        accent: "bg-amber-100 text-yellow-800 [&_svg]:text-yellow-500",
        green: "bg-green-50 text-green-900",
        onGreen: "bg-green-950/10 text-green-950",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  }
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
