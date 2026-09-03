import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Clock, FileText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/offerte")({
  head: () => ({
    meta: [
      { title: "Gratis offerte aanvragen — badkamer365.nl" },
      {
        name: "description",
        content:
          "Vraag vrijblijvend een offerte aan voor je nieuwe badkamer. Vul het formulier in en ontvang binnen één werkdag een persoonlijk voorstel met vaste prijs.",
      },
      { property: "og:title", content: "Gratis offerte aanvragen — badkamer365.nl" },
      {
        property: "og:description",
        content: "Vul het offerteformulier in en ontvang binnen één werkdag een vaste prijs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Offerte,
});

const usps = [
  { icon: FileText, title: "Vaste prijs vooraf", text: "Alles gespecificeerd: materiaal, arbeid en afvoer. Geen verrassingen achteraf." },
  { icon: Clock, title: "Binnen 1 werkdag reactie", text: "Een badkameradviseur uit jouw regio neemt persoonlijk contact op." },
  { icon: ShieldCheck, title: "Volledig vrijblijvend", text: "Je zit nergens aan vast. Bevalt het voorstel niet, dan stopt het daar." },
];

const budgetten = ["Tot € 7.500", "€ 7.500 – € 12.500", "€ 12.500 – € 20.000", "Meer dan € 20.000", "Weet ik nog niet"];
const termijnen = ["Zo snel mogelijk", "Binnen 3 maanden", "Binnen 6 maanden", "Ik oriënteer me nog"];
const werkzaamheden = [
  "Complete badkamer",
  "Alleen douche",
  "Alleen bad",
  "Wastafel & meubel",
  "Tegelwerk",
  "Toilet",
  "Vloerverwarming",
  "Ontwerp / 3D-tekening",
];

function Offerte() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-navy transition-shadow duration-300 outline-none focus:border-signal focus:ring-3 focus:ring-signal/20";

  return (
    <>
      <section className="relative overflow-hidden bg-soft/45">
        <div
          className="ripple-ring pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-signal/15"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="animate-drift text-sm font-semibold tracking-[0.2em] text-signal uppercase">
            Offerte aanvragen
          </p>
          <h1 className="animate-rise mt-4 max-w-2xl text-5xl leading-[1.05] text-navy">
            Ontvang binnen één werkdag <span className="text-signal">jouw badkamerprijs.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-navy/70">
            Vul het formulier hieronder in en vertel ons kort over je ruimte en wensen. Wij rekenen
            je badkamer door en sturen een compleet voorstel: van sloopwerk en leidingen tot tegels,
            sanitair en oplevering. Alles in één vaste prijs, zonder kleine lettertjes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 110}>
              <article className="lift-hover h-full rounded-3xl border border-border bg-card p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-soft text-signal">
                  <u.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg text-navy">{u.title}</h2>
                <p className="mt-2 text-navy/65">{u.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="animate-drop py-10 text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white">
                  <Check className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-2xl text-navy">Bedankt voor je aanvraag!</h2>
                <p className="mx-auto mt-3 max-w-md text-navy/65">
                  We hebben je gegevens goed ontvangen. Een badkameradviseur uit jouw regio neemt
                  binnen één werkdag contact met je op om de details door te nemen. Daarna ontvang je
                  een compleet voorstel met vaste prijs.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <h2 className="text-2xl text-navy">Offerteformulier</h2>
                <p className="-mt-3 text-sm text-navy/60">
                  Hoe meer je invult, hoe scherper we de prijs kunnen maken. Velden met * zijn
                  verplicht.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="naam" className="mb-1.5 block text-sm font-semibold text-navy">
                      Naam *
                    </label>
                    <input id="naam" name="naam" type="text" required maxLength={100} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                      E-mailadres *
                    </label>
                    <input id="email" name="email" type="email" required maxLength={255} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="mb-1.5 block text-sm font-semibold text-navy">
                      Telefoonnummer *
                    </label>
                    <input id="telefoon" name="telefoon" type="tel" required maxLength={30} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="postcode" className="mb-1.5 block text-sm font-semibold text-navy">
                      Postcode *
                    </label>
                    <input id="postcode" name="postcode" type="text" required maxLength={10} className={fieldClass} />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-navy">
                    Wat mogen we voor je doen?
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {werkzaamheden.map((w) => (
                      <label
                        key={w}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-navy transition-colors hover:bg-cloud"
                      >
                        <input
                          type="checkbox"
                          name="werkzaamheden"
                          value={w}
                          className="h-4 w-4 accent-current text-signal"
                        />
                        {w}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="oppervlakte" className="mb-1.5 block text-sm font-semibold text-navy">
                      Oppervlakte badkamer (m²)
                    </label>
                    <input id="oppervlakte" name="oppervlakte" type="number" min={1} max={200} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-navy">
                      Indicatie budget
                    </label>
                    <select id="budget" name="budget" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Maak een keuze
                      </option>
                      {budgetten.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="termijn" className="mb-1.5 block text-sm font-semibold text-navy">
                      Wanneer wil je starten?
                    </label>
                    <select id="termijn" name="termijn" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Maak een keuze
                      </option>
                      {termijnen.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="toelichting" className="mb-1.5 block text-sm font-semibold text-navy">
                    Vertel over je badkamer
                  </label>
                  <textarea
                    id="toelichting"
                    name="toelichting"
                    rows={5}
                    maxLength={1000}
                    placeholder="Bijvoorbeeld: jaren '70 woning, badkamer van 6 m², graag inloopdouche en dubbele wastafel."
                    className={fieldClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-signal px-7 py-4 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Verstuur mijn offerteaanvraag
                </button>
                <p className="text-center text-xs text-navy/55">
                  Vrijblijvend en gratis. We gebruiken je gegevens alleen om je aanvraag te
                  behandelen.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
