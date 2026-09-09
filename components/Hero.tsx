import { StarIcon } from "lucide-react";

import { Badge } from "@/components/Badge";
import { CtaButton } from "@/components/CtaButton";
import { Button } from "@/components/ui/button";
import { EMAIL_HREF, PHONE_HREF } from "./site";

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dmwulp3dl/image/upload/v1788896789/file_0000000061a4824395adc94187373809_ezrs3n.png";

export function Hero() {
  return (
    <section
      data-hero
      className="relative isolate -mt-16 flex min-h-[624px] items-center overflow-hidden pt-16 sm:min-h-[704px]"
    >
      <img
        src={HERO_IMAGE_URL}
        alt="Vezetéstanulás a Moszat Autósiskolánál"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/55" />

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-wrap gap-2">
          <Badge variant="overlay">
            <StarIcon className="text-yellow-500" />
            17 év tapasztalat
          </Badge>
          <Badge variant="overlay">Rengeteg sikeres vizsga</Badge>
          <Badge variant="overlay">Sopron és környéke</Badge>
        </div>

        <h1 className="font-heading mt-6 max-w-2xl text-4xl font-bold text-green-900 sm:text-5xl">
          Tanulj meg vezetni magabiztosan
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          A Moszat Autósiskola Sopronban és környékén segít eljutni a jogosítványig – türelmes
          oktatással, rugalmas időpontokkal.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
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
