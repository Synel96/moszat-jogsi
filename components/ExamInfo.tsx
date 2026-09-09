import { CtaButton } from "@/components/CtaButton";
import { Section, SectionHeading } from "@/components/Section";
import { Card, CardTitle } from "@/components/ui/card";
import { EMAIL_HREF } from "./site";

// TODO: egészítsd ki a konkrét feltételekkel (kötelező óraszám, vizsgadíjak,
// életkor) — ezek jogszabályváltozáskor módosulnak, ezért itt szándékosan
// csak az általános menet szerepel.
const STEPS = [
  {
    title: "1. Jelentkezés",
    text: "Felveszed velem a kapcsolatot, egyeztetjük a részleteket és a tanfolyam indulását.",
  },
  {
    title: "2. Elméleti tanfolyam",
    text: "Elvégzed az elméleti képzést, majd felkészülsz a KRESZ-vizsgára.",
  },
  {
    title: "3. Elméleti vizsga",
    text: "Sikeres KRESZ-vizsga után kezdődhetnek a gyakorlati órák.",
  },
  {
    title: "4. Gyakorlati órák",
    text: "Alapoktatás, majd forgalmi vezetés – a valódi vizsgaútvonalakon gyakorolva.",
  },
  {
    title: "5. Forgalmi vizsga",
    text: "Amikor magabiztosan mennek a feladatok, jelentkezünk a forgalmi vizsgára.",
  },
];

export function ExamInfo() {
  return (
    <Section id="vizsga" className="bg-white">
      <SectionHeading
        title="Vizsga információk"
        lead="Így néz ki az út a jelentkezéstől a jogosítványig."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step) => (
          <Card key={step.title} className="border border-gray-100">
            <CardTitle className="text-lg text-green-900">{step.title}</CardTitle>
            <p className="text-sm text-gray-600">{step.text}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <CtaButton asChild>
          <a href={EMAIL_HREF}>Kérdésed van? Írj!</a>
        </CtaButton>
      </div>
    </Section>
  );
}
