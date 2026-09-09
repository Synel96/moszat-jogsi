import { CtaButton } from "@/components/CtaButton";
import { Button } from "@/components/ui/button";
import { EMAIL_HREF, PHONE_HREF } from "./site";

// f_auto serves AVIF/WebP where the browser supports it, q_auto picks the
// quality; without them Cloudinary ships the original full-size PNG.
const CLOUDINARY_UPLOAD = "https://res.cloudinary.com/dmwulp3dl/image/upload";
const HERO_IMAGE_ID = "v1788896789/file_0000000061a4824395adc94187373809_ezrs3n.png";
const HERO_WIDTHS = [640, 960, 1280, 1600, 2000];

const heroImage = (width: number) =>
  `${CLOUDINARY_UPLOAD}/f_auto,q_auto,w_${width}/${HERO_IMAGE_ID}`;

export function Hero() {
  return (
    <section
      data-hero
      className="relative isolate -mt-16 flex min-h-[624px] items-center overflow-hidden pt-16 sm:min-h-[704px]"
    >
      <img
        src={heroImage(1600)}
        srcSet={HERO_WIDTHS.map((width) => `${heroImage(width)} ${width}w`).join(", ")}
        sizes="100vw"
        alt="Vezetéstanulás a Moszat Autósiskolánál"
        // The hero photo is the LCP candidate: prioritise it, never lazy-load it.
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/55" />

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* CSS-only and un-delayed on the h1: it is the LCP element, so its
            paint must not wait for hydration or an animation-delay. */}
        <h1 className="animate-hero-in font-heading max-w-2xl text-4xl font-bold text-green-900 sm:text-5xl">
          Tanulj meg vezetni magabiztosan
        </h1>
        <p className="animate-hero-in mt-6 max-w-xl text-lg text-gray-900 [animation-delay:70ms]">
          A Moszat Autósiskola Sopronban és környékén segít eljutni a jogosítványig – türelmes
          oktatással, rugalmas időpontokkal.
        </p>
        <div className="animate-hero-in mt-8 flex flex-wrap gap-4 [animation-delay:140ms]">
          <CtaButton asChild>
            <a href={PHONE_HREF}>Jelentkezés</a>
          </CtaButton>
          <Button asChild variant="outline" size="lg" className="h-11 px-6 text-base">
            <a href={EMAIL_HREF}>Kapcsolat</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
