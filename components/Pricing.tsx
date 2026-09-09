import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { COMPANY_PHONE, PHONE_HREF } from "./site";

const PRICES = [
  { label: "Regisztrációs díj", value: "5 000 Ft" },
  { label: "Rutinpálya használat", value: "10 000 Ft" },
  { label: "E-learning KRESZ tanfolyam", value: "45 000 Ft" },
  { label: "KRESZ tananyag idegen nyelven (német, angol)", value: "70 000 Ft" },
  { label: "Elsősegély tananyag e-learning oktatás", value: "15 000 Ft" },
  { label: "Elméleti vizsga", value: "5 100 Ft" },
  { label: "Gyakorlati órák (29 kötelező + vizsga)", value: "11 000 Ft/óra" },
  { label: "Pótóra", value: "11 000 Ft/óra" },
  { label: "Gyakorlati vizsga", value: "12 200 Ft" },
  { label: "Orvosi alkalmassági vizsgálat (háziorvos által)", value: "7 200 Ft" },
];

export function Pricing() {
  return (
    <Section id="arak" className="bg-green-50">
      <Reveal>
        <SectionHeading
          title="Árak"
          lead="Átlátható árazás, rejtett költségek nélkül – pontosan tudod, mire számíthatsz."
        />
      </Reveal>

      <Reveal delay={80}>
        <Card className="mt-10 max-w-2xl gap-0 divide-y divide-gray-100 p-0">
          {PRICES.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-heading font-semibold whitespace-nowrap text-green-900">
                {item.value}
              </span>
            </div>
          ))}
        </Card>

        <p className="mt-6 max-w-2xl text-sm text-gray-600">
          Az árak forintban értendők, a változtatás jogát fenntartjuk. Kérdésed van a részletekkel
          kapcsolatban? Hívj a {COMPANY_PHONE} számon.
        </p>

        <div className="mt-8">
          <CtaButton asChild>
            <a href={PHONE_HREF}>Kérdezz az árakról</a>
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
