import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Service & garantie — badkamer365.nl" },
      {
        name: "description",
        content:
          "Onderhoud, garantie en storingen: hoe badkamer365.nl je ook na de oplevering blijft helpen. Antwoord op de meest gestelde vragen.",
      },
      { property: "og:title", content: "Service & garantie — badkamer365.nl" },
      {
        property: "og:description",
        content: "Onderhoud, garantie en storingshulp — 365 dagen per jaar bereikbaar.",
      },
    ],
  }),
  component: Service,
});

const faq = [
  {
    q: "Hoe lang duurt een complete badkamerrenovatie?",
    a: "Gemiddeld 8 tot 12 werkdagen. Je krijgt vooraf een dagplanning zodat je weet wanneer welke vakman langskomt.",
  },
  {
    q: "Kan ik de badkamer blijven gebruiken tijdens de verbouwing?",
    a: "Meestal niet. We plaatsen op verzoek een tijdelijke wastafel en overleggen over douchemogelijkheden in de buurt.",
  },
  {
    q: "Welke garantie krijg ik?",
    a: "Vijf jaar garantie op installatie en montage, plus de fabrieksgarantie op sanitair en kranen.",
  },
  {
    q: "Wat als er later iets kapot gaat?",
    a: "Bel of mail ons servicepunt. Bij een lekkage staan we binnen 24 uur bij je op de stoep.",
  },
];

function Service() {
  return (
    <>
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="animate-drift text-sm font-semibold tracking-[0.2em] text-signal uppercase">
            Service
          </p>
          <h1 className="animate-rise mt-4 max-w-2xl text-5xl text-navy">
            365 dagen bereikbaar. Ook na de oplevering.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-lg font-semibold text-navy">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-navy/65">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={120} className="mt-12 rounded-3xl border border-border bg-soft/40 p-8">
          <h2 className="text-2xl text-navy">Storing of lekkage?</h2>
          <p className="mt-2 text-navy/65">
            Bel de servicelijn op <span className="font-semibold text-navy">085 - 365 36 50</span>{" "}
            of mail naar{" "}
            <span className="font-semibold text-navy">service@badkamer365.nl</span>.
          </p>
        </Reveal>
      </section>
    </>
  );
}
