import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Droplets, Ruler, ShieldCheck, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-badkamer.jpg";
import inspp1 from "@/assets/insp-1.jpg";
import inspp2 from "@/assets/insp-2.jpg";
import inspp3 from "@/assets/insp-3.jpg";
import { Reveal } from "@/components/Reveal";
import { DropIcon } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "badkamer365.nl — Maak ruimte voor elke dag" },
      {
        name: "description",
        content:
          "Complete badkamers van ontwerp tot oplevering. Rust, comfort en een badkamer die klopt — dichtbij, deskundig en dagelijks relevant.",
      },
      { property: "og:title", content: "badkamer365.nl — Maak ruimte voor elke dag" },
      {
        property: "og:description",
        content: "Van een frisse start tot een slimme keuze. Complete badkamers, één aanspreekpunt.",
      },
    ],
  }),
  component: Home,
});

const pijlers = [
  {
    icon: Ruler,
    title: "Ontwerp op maat",
    text: "Een 3D-ontwerp van jouw ruimte, tot de laatste centimeter doordacht.",
  },
  {
    icon: Wrench,
    title: "Eén aanspreekpunt",
    text: "Tegelzetter, loodgieter en elektricien — wij regelen de hele planning.",
  },
  {
    icon: ShieldCheck,
    title: "365 dagen zeker",
    text: "Vaste prijs vooraf, garantie achteraf en service die blijft.",
  },
];

const inspiratie = [
  { img: inspp1, title: "Kleine badkamer", tag: "Slim gebruik van elke meter" },
  { img: inspp2, title: "Gezinsbadkamer", tag: "Bad, douche en ruimte om te bewegen" },
  { img: inspp3, title: "Spa aan huis", tag: "Donkere tinten, warme materialen" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-soft/45">
        <div
          className="ripple-ring pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-signal/15"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="animate-drift text-sm font-semibold tracking-[0.2em] text-signal uppercase">
              Rust &amp; comfort
            </p>
            <h1 className="animate-rise mt-4 text-5xl leading-[1.02] text-navy md:text-6xl">
              Maak ruimte voor
              <br />
              <span className="text-signal">elke dag.</span>
            </h1>
            <p
              className="animate-rise mt-6 max-w-md text-lg text-navy/70"
              style={{ animationDelay: "120ms" }}
            >
              Van een frisse start tot een slimme keuze. Wij ontwerpen, leveren en plaatsen jouw
              complete badkamer — met eigen monteurs, één aanspreekpunt en een vaste prijs vooraf.
              Vraag vrijblijvend een offerte aan en weet binnen één werkdag waar je aan toe bent.
            </p>
            <div
              className="animate-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <Link
                to="/offerte"
                className="group inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                Vraag gratis offerte aan
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/inspiratie"
                className="inline-flex items-center rounded-full border border-navy/15 bg-background px-7 py-3.5 font-semibold text-navy transition-colors hover:bg-cloud"
              >
                Bekijk inspiratie
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="animate-float absolute -top-6 -left-6 z-10 hidden rounded-2xl bg-background px-5 py-4 shadow-lift sm:block">
              <div className="flex items-center gap-3">
                <DropIcon className="h-7 w-auto text-navy" />
                <div>
                  <p className="text-sm font-bold text-navy">365 dagen advies</p>
                  <p className="text-xs text-navy/60">Kies slim. Leef fijn.</p>
                </div>
              </div>
            </div>
            <img
              src={heroImg}
              alt="Rustige moderne badkamer met inloopdouche en eiken wastafelmeubel"
              width={1600}
              height={1200}
              className="animate-rise w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-background py-4">
        <div className="animate-marquee flex w-max gap-10 text-sm font-semibold tracking-[0.18em] text-navy/45 uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {[
                "Vaste prijs vooraf",
                "3D-ontwerp",
                "Eigen monteurs",
                "Showroom bij jou in de buurt",
                "Binnen 10 werkdagen geplaatst",
                "Kies slim. Leef fijn.",
              ].map((t) => (
                <span key={t} className="whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pijlers */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="max-w-xl text-4xl text-navy">Nuchter. Warm. Deskundig zonder afstand.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pijlers.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="lift-hover h-full rounded-3xl border border-border bg-card p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-signal">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl text-navy">{p.title}</h3>
                <p className="mt-3 text-navy/65">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inspiratie */}
      <section className="bg-cloud py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-signal uppercase">
                Inspiratie
              </p>
              <h2 className="mt-3 text-4xl text-navy">Drie badkamers, één gevoel.</h2>
            </div>
            <Link
              to="/inspiratie"
              className="group inline-flex items-center gap-2 font-semibold text-signal"
            >
              Alle stijlen
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {inspiratie.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="lift-hover group overflow-hidden rounded-3xl bg-card">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-80 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm text-navy/60">{item.tag}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verhaal */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.2em] text-signal uppercase">
              Over badkamer365.nl
            </p>
            <h2 className="mt-3 text-4xl text-navy">
              Een badkamer koop je niet elke dag. Wij maken ze wel elke dag.
            </h2>
            <p className="mt-5 text-navy/70">
              Een badkamerverbouwing voelt al snel groot: sloopwerk, leidingen, tegels, elektra,
              ventilatie en straks nog de planning van alle vaklui. Bij badkamer365.nl nemen we dat
              volledig uit handen. Je krijgt één adviseur die je van het eerste schetsontwerp tot de
              laatste kitrand begeleidt.
            </p>
            <p className="mt-4 text-navy/70">
              We werken met eigen monteurs en vaste leveranciers. Daardoor weten we precies wat
              waar past, wat het kost en hoe lang het duurt. Geen meerwerkbrieven achteraf, maar een
              prijs die vanaf de offerte staat. En na de oplevering blijven we bereikbaar voor
              onderhoud, garantie en storingen.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Gratis inmeten en een persoonlijk 3D-ontwerp",
                "Vaste prijs inclusief materiaal, arbeid en afvoer",
                "Gemiddeld binnen 8 tot 12 werkdagen klaar",
                "5 jaar garantie op installatie en montage",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-navy/80">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-navy">Wat kost een nieuwe badkamer?</h3>
              <p className="mt-3 text-navy/70">
                Dat hangt af van de maat van je ruimte, de staat van de leidingen en de materialen
                die je kiest. Ter indicatie werken de meeste van onze klanten met deze richtprijzen
                voor een complete badkamer inclusief montage:
              </p>
              <dl className="mt-6 divide-y divide-border">
                {[
                  ["Compacte badkamer (tot 4 m²)", "vanaf € 7.500"],
                  ["Gezinsbadkamer (4 – 8 m²)", "€ 10.000 – € 16.000"],
                  ["Ruime badkamer met bad & dubbele wastafel", "€ 16.000 – € 25.000"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                    <dt className="text-navy/75">{k}</dt>
                    <dd className="font-semibold whitespace-nowrap text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-navy/60">
                Wil je precies weten wat jouw badkamer kost? Vul het offerteformulier in — je krijgt
                een gespecificeerd voorstel, geen ruwe schatting.
              </p>
              <Link
                to="/offerte"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                Bereken mijn prijs
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offerte-uitleg */}
      <section className="bg-cloud py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.2em] text-signal uppercase">
              Zo werkt de offerte
            </p>
            <h2 className="mt-3 max-w-xl text-4xl text-navy">
              In vier stappen van aanvraag naar vaste prijs.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                t: "1. Formulier invullen",
                d: "Twee minuten werk. Vertel over je ruimte, wensen en gewenste startdatum.",
              },
              {
                t: "2. Persoonlijk contact",
                d: "Binnen één werkdag belt een adviseur uit jouw regio om de details scherp te krijgen.",
              },
              {
                t: "3. Inmeten & ontwerp",
                d: "We meten gratis in en maken een 3D-ontwerp waarin je je nieuwe badkamer al ziet staan.",
              },
              {
                t: "4. Offerte met vaste prijs",
                d: "Alles gespecificeerd op één pagina. Akkoord? Dan plannen we direct een startdatum in.",
              },
            ].map((s2, i) => (
              <Reveal key={s2.t} delay={i * 110}>
                <article className="lift-hover h-full rounded-3xl bg-card p-7">
                  <h3 className="text-lg text-navy">{s2.t}</h3>
                  <p className="mt-2 text-navy/65">{s2.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-soft/40 p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl text-navy">Klaar voor een frisse start?</h2>
            <p className="mt-2 max-w-xl text-navy/65">
              Vraag vrijblijvend je offerte aan. Je ontvangt binnen één werkdag reactie en daarna
              een compleet voorstel met vaste prijs — zonder verplichtingen.
            </p>
          </div>
          <Link
            to="/offerte"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Droplets className="h-4 w-4" />
            Gratis offerte aanvragen
          </Link>
        </Reveal>
      </section>
    </>
  );
}
