import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Button } from "@/components/ui/button";
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
import { BRAND_NAME, NAV_LINKS } from "./site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  const isActive = (href: string) =>
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "font-medium text-green-900"
      : "text-gray-600 transition-colors hover:text-green-600";

  return (
    <header className="border-b border-gray-100 bg-white">
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
          <Button className="hidden md:inline-flex">Jelentkezés</Button>
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

                  <div className="mt-4 px-4 pb-6">
                    <SheetClose asChild>
                      <Button className="w-full" onClick={() => setOpen(false)}>
                        Jelentkezés
                      </Button>
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
