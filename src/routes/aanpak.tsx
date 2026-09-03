import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/aanpak")({
  head: () => ({
    meta: [
      { title: "Onze aanpak — badkamer365.nl" },
      {
        name: "description",
        content:
          "In vier stappen van eerste idee naar opgeleverde badkamer: adviesgesprek, 3D-ontwerp, vaste prijs en plaatsing door eigen monteurs.",
      },
      { property: "og:title", content: "Onze aanpak — badkamer365.nl" },
      {
        property: "og:description",
        content: "Van adviesgesprek tot oplevering: vier heldere stappen, één aanspreekpunt.",
      },
    ],
  }),
  component: Aanpak,
});

const stappen = [
  {
    n: "01",
    title: "Adviesgesprek",
    text: "We luisteren naar je dagelijkse routine en meten de ruimte in. Gratis en vrijblijvend.",
  },
  {
    n: "02",
    title: "3D-ontwerp",
    text: "Je ziet je badkamer voordat er iets gesloopt is, inclusief materiaalstalen.",
  },
  {
    n: "03",
    title: "Vaste prijs",
    text: "Eén offerte met alles erin: sanitair, tegels, installatie en afvoer van puin.",
  },
  {
    n: "04",
    title: "Plaatsing",
    text: "Eigen monteurs, strakke planning en dagelijks een schoon achtergelaten huis.",
  },
];

function Aanpak() {
  return (
    <>
      <section className="surface-navy relative overflow-hidden py-20">
        <div
          className="ripple-ring pointer-events-none absolute -top-16 right-10 h-64 w-64 rounded-full bg-signal/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="animate-drift text-sm font-semibold tracking-[0.2em] text-soft uppercase">
            Aanpak
          </p>
          <h1 className="animate-rise mt-4 max-w-2xl text-5xl text-white">
            Rust + richting, van eerste schets tot laatste kit.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <ol className="relative border-l border-border pl-8">
          {stappen.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} as="li" className="pb-12 last:pb-0">
              <span className="absolute -left-[9px] mt-2 block h-4 w-4 rounded-full border-4 border-background bg-signal" />
              <span className="text-sm font-bold tracking-[0.2em] text-signal">{s.n}</span>
              <h2 className="mt-2 text-2xl text-navy">{s.title}</h2>
              <p className="mt-2 max-w-xl text-navy/65">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-signal px-7 py-3.5 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start met stap 01
          </Link>
        </Reveal>
      </section>
    </>
  );
}
