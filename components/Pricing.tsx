import { CtaButton } from "@/components/CtaButton";
import { Section, SectionHeading } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { COMPANY_PHONE, PHONE_HREF } from "./site";

// TODO: töltsd ki a valós árakkal. Szándékosan üresen hagyva, hogy ne
// kerüljön ki kitalált ár az oldalra.
const PRICES = [
  { label: "Elméleti tanfolyam", value: "—" },
  { label: "Gyakorlati óra", value: "—" },
  { label: "Pótóra", value: "—" },
  { label: "Elméleti vizsgadíj", value: "—" },
  { label: "Forgalmi vizsgadíj", value: "—" },
];

export function Pricing() {
  return (
    <Section id="arak" className="bg-green-50">
      <SectionHeading
        title="Árak"
        lead="Átlátható árazás, rejtett költségek nélkül – pontosan tudod, mire számíthatsz."
      />

      <Card className="mt-10 max-w-2xl gap-0 divide-y divide-gray-100 p-0">
        {PRICES.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-heading font-semibold text-green-900">{item.value}</span>
          </div>
        ))}
      </Card>

      <p className="mt-6 max-w-2xl text-sm text-gray-600">
        Az árlista feltöltése folyamatban – az aktuális, pontos árakért hívj a {COMPANY_PHONE}{" "}
        számon.
      </p>

      <div className="mt-8">
        <CtaButton asChild>
          <a href={PHONE_HREF}>Kérdezz az árakról</a>
        </CtaButton>
      </div>
    </Section>
  );
}
