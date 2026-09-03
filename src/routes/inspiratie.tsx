import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import insp1 from "@/assets/insp-1.jpg";
import insp2 from "@/assets/insp-2.jpg";
import insp3 from "@/assets/insp-3.jpg";
import hero from "@/assets/hero-badkamer.jpg";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/inspiratie")({
  head: () => ({
    meta: [
      { title: "Inspiratie badkamers — badkamer365.nl" },
      {
        name: "description",
        content:
          "Badkamerinspiratie per stijl en formaat: klein, gezin, spa en licht. Ontdek welke badkamer bij jouw dagelijks leven past.",
      },
      { property: "og:title", content: "Inspiratie badkamers — badkamer365.nl" },
      {
        property: "og:description",
        content: "Badkamerinspiratie per stijl en formaat, met concrete keuzes en materialen.",
      },
    ],
  }),
  component: Inspiratie,
});

const filters = ["Alles", "Klein", "Gezin", "Spa"] as const;

const items = [
  {
    img: insp1,
    title: "Compact & warm",
    cat: "Klein",
    text: "Microcement, zwevend toilet en een ronde spiegel: rust in weinig meters.",
  },
  {
    img: insp2,
    title: "Licht gezinsbad",
    cat: "Gezin",
    text: "Vrijstaand bad, witte tegels en een diepblauw accent voor karakter.",
  },
  {
    img: insp3,
    title: "Donkere spa",
    cat: "Spa",
    text: "Antracietsteen, regendouche en een houten bank voor sfeer en grip.",
  },
  {
    img: hero,
    title: "Helder en open",
    cat: "Gezin",
    text: "Inloopdouche met zwart frame, eiken meubel en veel daglicht.",
  },
];

function Inspiratie() {
  const [active, setActive] = useState<(typeof filters)[number]>("Alles");
  const shown = items.filter((i) => active === "Alles" || i.cat === active);

  return (
    <>
      <section className="bg-soft/45 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="animate-drift text-sm font-semibold tracking-[0.2em] text-signal uppercase">
            Inspiratie
          </p>
          <h1 className="animate-rise mt-4 max-w-2xl text-5xl text-navy">
            Zie het eerst. <span className="text-signal">Kies daarna slim.</span>
          </h1>
          <p
            className="animate-rise mt-5 max-w-lg text-lg text-navy/70"
            style={{ animationDelay: "120ms" }}
          >
            Elke badkamer begint bij een gevoel. Filter op formaat of sfeer en ontdek wat past.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
                active === f
                  ? "border-signal bg-signal text-white shadow-soft"
                  : "border-border bg-background text-navy/70 hover:border-signal/40 hover:text-navy",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="lift-hover group overflow-hidden rounded-3xl border border-border bg-card">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-96 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold tracking-[0.18em] text-signal uppercase">
                    {item.cat}
                  </span>
                  <h2 className="mt-2 text-2xl text-navy">{item.title}</h2>
                  <p className="mt-2 text-navy/65">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
