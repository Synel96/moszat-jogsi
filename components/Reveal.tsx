import * as React from "react";
import { useEffect, useRef } from "react";

// Fades and lifts its children into place as they scroll into view. Only
// opacity and transform are animated — transforms are excluded from layout
// shift scoring, so the effect cannot add to CLS.
//
// One observer is shared by every Reveal on the page. The visual state lives
// in Layout.css ([data-reveal]); this component only flips data-revealed.
let observer: IntersectionObserver | undefined;

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.revealed = "true";
        observer?.unobserve(entry.target);
      }
    },
    // threshold 0 rather than a ratio: a section taller than the viewport can
    // never reach a ratio-based threshold. The bottom inset makes elements
    // reveal a little after they cross the fold instead of exactly on it.
    { rootMargin: "0px 0px -10% 0px", threshold: 0 }
  );
  return observer;
}

export function Reveal({
  className,
  delay = 0,
  ...props
}: React.ComponentProps<"div"> & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      el.dataset.revealed = "true";
      return;
    }

    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
      {...props}
    />
  );
}
