import { CarIcon } from "lucide-react";

import { Badge } from "@/components/Badge";
import { CtaButton } from "@/components/CtaButton";
import { Section, SectionHeading } from "@/components/Section";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PHONE_HREF } from "./site";

// TODO: cseréld a valós oktatóautókra (típus, évjárat, felszereltség) — a
// lenti kártyák és badge-ek helykitöltők, amíg meg nem adod az adatokat.
const VEHICLES = [
  {
    name: "1. oktatóautó",
    description: "Típus és felszereltség megadása következik.",
    badges: ["Duplapedál", "Klíma", "Tolatókamera"],
  },
  {
    name: "2. oktatóautó",
    description: "Típus és felszereltség megadása következik.",
    badges: ["Duplapedál", "Klíma"],
  },
  {
    name: "3. oktatóautó",
    description: "Típus és felszereltség megadása következik.",
    badges: ["Duplapedál", "Parkolóradar"],
  },
];

export function Vehicles() {
  return (
    <Section id="jarmuvek" className="bg-white">
      <SectionHeading
        title="Járműveink"
        lead="Jól karbantartott, duplapedálos oktatóautók, amelyekkel biztonságosan tanulhatsz."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VEHICLES.map((vehicle) => (
          <Card key={vehicle.name} className="border border-gray-100">
            <CarIcon className="size-6 text-green-600" />
            <CardTitle className="text-lg text-green-900">{vehicle.name}</CardTitle>
            <CardContent className="text-sm text-gray-600">{vehicle.description}</CardContent>
            <div className="flex flex-wrap gap-2">
              {vehicle.badges.map((badge) => (
                <Badge key={badge} variant="accent" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <CtaButton asChild>
          <a href={PHONE_HREF}>Foglalj időpontot</a>
        </CtaButton>
      </div>
    </Section>
  );
}
