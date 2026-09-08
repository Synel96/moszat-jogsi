import { Button } from "@/components/ui/button";

const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dmwulp3dl/image/upload/v1788896789/file_0000000061a4824395adc94187373809_ezrs3n.png";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden sm:min-h-[640px]">
      <img
        src={HERO_IMAGE_URL}
        alt="Vezetéstanulás a Moszat Autósiskolánál"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/55" />

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="font-heading max-w-2xl text-4xl font-bold text-green-900 sm:text-5xl">
          Tanulj meg vezetni magabiztosan
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          A Moszat Autósiskola Sopronban és környékén segít eljutni a jogosítványig – türelmes
          oktatókkal, rugalmas időpontokkal.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">Jelentkezés</Button>
          <Button variant="outline" size="lg">
            Kapcsolat
          </Button>
        </div>
      </div>
    </section>
  );
}
