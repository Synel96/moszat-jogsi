import * as React from "react";

import { cn } from "@/lib/utils";

// scroll-mt-16 keeps anchor targets clear of the sticky header.
export function Section({
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & { containerClassName?: string }) {
  return (
    <section className={cn("scroll-mt-16 py-16 sm:py-24", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  lead,
  className,
}: {
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="font-heading text-3xl font-bold text-green-900 sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-lg text-gray-600">{lead}</p> : null}
    </div>
  );
}
