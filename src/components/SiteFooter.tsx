import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

export function SiteFooter() {
  return (
    <footer className="surface-navy mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-white/70">
              De plek voor rust, comfort en een badkamer die klopt. Van 3D-ontwerp tot oplevering —
              dichtbij, deskundig en met één vaste prijs vooraf.
            </p>
            <Link
              to="/offerte"
              className="mt-7 inline-flex items-center rounded-full bg-signal px-6 py-3 font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              Gratis offerte aanvragen
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-soft uppercase">
              Badkamer365.nl
            </p>
            <nav className="grid gap-2 text-white/70 sm:grid-cols-2">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <Link to="/inspiratie" className="transition-colors hover:text-white">
                Inspiratie
              </Link>
              <Link to="/aanpak" className="transition-colors hover:text-white">
                Aanpak
              </Link>
              <Link to="/service" className="transition-colors hover:text-white">
                Service &amp; garantie
              </Link>
              <Link to="/offerte" className="transition-colors hover:text-white">
                Offerte aanvragen
              </Link>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </nav>
            <p className="mt-8 text-sm text-white/55">
              085 - 365 36 50 · hallo@badkamer365.nl
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} badkamer365.nl — Kies slim. Leef fijn.</p>
          <Link to="/contact" className="transition-colors hover:text-white">
            Onze andere specialismen
          </Link>
        </div>
      </div>
    </footer>
  );
}
