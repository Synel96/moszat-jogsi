import { MapPinIcon } from "lucide-react";

import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { COMPANY_ADDRESS, PHONE_HREF } from "./site";

export function ServiceArea() {
  return (
    <Section className="bg-green-500">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <Badge variant="accent">
            <MapPinIcon />
            {COMPANY_ADDRESS}
          </Badge>
          <h2 className="font-heading mt-6 text-3xl font-bold text-green-950 sm:text-4xl">
            Sopron és környékén
          </h2>
          <p className="mt-4 text-lg text-green-950/80">
            {/* TODO: pontosítsd, mely településekről fogadsz tanulókat. */}
            Sopronban és a környező településeken vállalok oktatást, a gyakorlati órákat pedig a
            valódi vizsgaútvonalakon gyakoroljuk.
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="h-11 shrink-0 bg-white px-6 text-base text-green-900 hover:bg-green-50"
        >
          <a href={PHONE_HREF}>Érdeklődöm</a>
        </Button>
      </div>
    </Section>
  );
}
