import { MailIcon, MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/CtaButton";
import { useMounted } from "@/src/hooks/use-mounted";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BRAND_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  EMAIL_HREF,
  NAV_LINKS,
  PHONE_HREF,
} from "./site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const headerRef = useRef<HTMLElement>(null);

  // The header sits transparently over the hero and fills in with its
  // background as the hero scrolls past it, reaching full color exactly when
  // the hero's bottom edge meets the header. Pages without a hero start solid.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!hero) {
      header.style.setProperty("--nav-progress", "100%");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const { bottom, height } = hero.getBoundingClientRect();
      const travel = Math.max(height - header.offsetHeight, 1);
      const progress = 1 - (bottom - header.offsetHeight) / travel;
      const clamped = Math.min(Math.max(progress, 0), 1);
      header.style.setProperty("--nav-progress", `${Math.round(clamped * 100)}%`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [urlPathname]);

  const isActive = (href: string) =>
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "font-medium text-green-900"
      : "text-gray-600 transition-colors hover:text-green-600";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-gray-100/(--nav-progress) bg-white/(--nav-progress) [--nav-progress:0%]"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-base font-semibold tracking-tight text-green-900">
          {BRAND_NAME}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton asChild className="hidden h-9 px-4 text-sm md:inline-flex">
            <a href={PHONE_HREF}>Jelentkezés</a>
          </CtaButton>
          <div className="md:hidden">
            {mounted ? (
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    onClick={() => setOpen(true)}
                    className="text-gray-600 hover:bg-gray-100 hover:text-green-600"
                  >
                    <span className="relative size-5">
                      <MenuIcon
                        className={`absolute inset-0 size-5 transition-all duration-300 ${
                          open ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                        }`}
                      />
                      <XIcon
                        className={`absolute inset-0 size-5 transition-all duration-300 ${
                          open ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
                        }`}
                      />
                    </span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 border-r-gray-100 bg-white">
                  {/* Kept for screen readers (Radix requires an accessible dialog title/description) but not shown visually — BRAND_NAME is already visible in the navbar behind the drawer. */}
                  <SheetHeader className="sr-only">
                    <SheetTitle>{BRAND_NAME}</SheetTitle>
                    <SheetDescription>Navigation menu</SheetDescription>
                  </SheetHeader>

                  <nav className="mt-12 flex flex-col gap-1 px-4">
                    {NAV_LINKS.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-md px-3 py-2 text-sm ${
                            isActive(item.href)
                              ? "bg-green-50 font-medium text-green-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                          }`}
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-6 flex flex-col gap-1 border-t border-gray-100 px-4 pt-6">
                    <a
                      href={PHONE_HREF}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <PhoneIcon className="size-4 shrink-0" />
                      {COMPANY_PHONE}
                    </a>
                    <a
                      href={EMAIL_HREF}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm break-all text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    >
                      <MailIcon className="size-4 shrink-0" />
                      {COMPANY_EMAIL}
                    </a>
                  </div>

                  <div className="mt-4 px-4 pb-6">
                    <SheetClose asChild>
                      <CtaButton asChild className="w-full">
                        <a href={PHONE_HREF}>Jelentkezés</a>
                      </CtaButton>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                disabled
                className="text-gray-600 hover:bg-gray-100 hover:text-green-600"
              >
                <MenuIcon className="size-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
