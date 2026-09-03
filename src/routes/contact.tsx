import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CategorySwitch } from "@/components/CategorySwitch";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & adviesgesprek — badkamer365.nl" },
      {
        name: "description",
        content:
          "Plan een gratis adviesgesprek voor je nieuwe badkamer. Bel, mail of laat je gegevens achter — we reageren binnen één werkdag.",
      },
      { property: "og:title", content: "Contact & adviesgesprek — badkamer365.nl" },
      {
        property: "og:description",
        content: "Plan een gratis adviesgesprek. We reageren binnen één werkdag.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="animate-drift text-sm font-semibold tracking-[0.2em] text-signal uppercase">
          Contact
        </p>
        <h1 className="animate-rise mt-4 text-5xl text-navy">
          Kies slim. <span className="text-signal">Leef fijn.</span>
        </h1>
        <p className="animate-rise mt-5 max-w-md text-lg text-navy/70">
          Laat je gegevens achter voor een gratis adviesgesprek. We bellen binnen één werkdag terug.
        </p>

        <div className="mt-10 space-y-4">
          {[
            { icon: Phone, label: "085 - 365 36 50" },
            { icon: Mail, label: "hallo@badkamer365.nl" },
            { icon: MapPin, label: "Showroom Amersfoort · di t/m za" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-signal">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-navy">{c.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={100}>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          {sent ? (
            <div className="animate-drop py-10 text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white">
                <Check className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl text-navy">Dank je wel!</h2>
              <p className="mt-2 text-navy/65">
                We nemen binnen één werkdag contact met je op over je badkamer.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="text-2xl text-navy">Plan je adviesgesprek</h2>
              {[
                { id: "naam", label: "Naam", type: "text" },
                { id: "email", label: "E-mailadres", type: "email" },
                { id: "telefoon", label: "Telefoonnummer", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-1.5 block text-sm font-semibold text-navy">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.id !== "telefoon"}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-navy transition-shadow duration-300 outline-none focus:border-signal focus:ring-3 focus:ring-signal/20"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="bericht" className="mb-1.5 block text-sm font-semibold text-navy">
                  Waar droom je van?
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-navy transition-shadow duration-300 outline-none focus:border-signal focus:ring-3 focus:ring-signal/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-signal px-7 py-3.5 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                Verstuur aanvraag
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>

    <section className="mx-auto max-w-6xl px-5 pb-20">
      <Reveal className="surface-navy rounded-[2rem] px-8 py-12 md:px-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-soft uppercase">365-familie</p>
        <h2 className="mt-3 text-3xl text-white">Ook voor sanitair, keuken en vloeren.</h2>
        <p className="mt-4 max-w-xl text-white/70">
          Badkamer365.nl maakt deel uit van de 365-familie. Zoek je iets buiten de badkamer? Dan
          helpen onze collega-specialisten je verder.
        </p>
        <CategorySwitch className="mt-8" />
      </Reveal>
    </section>

    <section className="mx-auto max-w-6xl px-5 pb-8">
      <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-soft/40 p-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl text-navy">Liever direct een prijs?</h2>
          <p className="mt-2 text-navy/65">
            Vul het offerteformulier in en ontvang binnen één werkdag een voorstel met vaste prijs.
          </p>
        </div>
        <Link
          to="/offerte"
          className="inline-flex items-center rounded-full bg-signal px-7 py-3.5 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          Offerte aanvragen
        </Link>
      </Reveal>
    </section>
    </>
  );
}
