import { MapPinIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/Badge";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { COMPANY_PHONE, EMAIL_HREF, PHONE_HREF } from "./site";

export function About() {
  return (
    <Section id="rolam" className="bg-white">
      <Reveal>
        <SectionHeading
          title="Rólam"
          lead="Több mint 17 éve tanítok vezetni Sopronban és környékén."
        />
      </Reveal>

      <Reveal delay={80}>
        {/* TODO: cseréld a saját bemutatkozó szövegedre. */}
        <div className="mt-6 max-w-2xl space-y-4 text-gray-600">
          <p>
            Az évek alatt rengeteg tanuló szerezte meg nálam a jogosítványát – kezdőként éppúgy,
            mint azok, akik hosszabb kihagyás után ültek újra volán mögé.
          </p>
          <p>
            Nálam nincs kapkodás: mindenki a saját tempójában halad, addig gyakoroljuk az egyes
            feladatokat, amíg tényleg magabiztosan mennek. A cél nem csak a sikeres vizsga, hanem
            hogy utána egyedül is nyugodtan vezess.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Badge variant="accent">
            <StarIcon />
            17 év tapasztalat
          </Badge>
          <Badge>Rengeteg sikeres vizsga</Badge>
          <Badge>
            <MapPinIcon />
            Sopron és környéke
          </Badge>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <CtaButton asChild>
            <a href={PHONE_HREF}>Hívj: {COMPANY_PHONE}</a>
          </CtaButton>
          <Button asChild variant="outline" size="lg" className="h-11 px-6 text-base">
            <a href={EMAIL_HREF}>Írj e-mailt</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
