import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Facebook, Instagram } from "lucide-react";
import {
  LOGO_URL,
  MAPS_URL,
  WHATSAPP,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  FACEBOOK,
  INSTAGRAM,
  BRAND,
  BRAND_LONG,
  ADDRESS,
} from "@/lib/site-data";

export { MAPS_URL };

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

const zones = [
  "Godomey",
  "Tankpè",
  "Abomey-Calavi",
  "Cotonou",
  "Porto-Novo",
  "Ouidah",
  "Sèmè-Podji",
  "Allada",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-charcoal/60 pt-16 pb-8">
      <div className="grid-blueprint absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={LOGO_URL}
                alt={`Logo ${BRAND}`}
                className="h-12 w-12 shrink-0 rounded-xl bg-white object-contain p-1"
              />
              <div className="min-w-0 leading-tight">
                <div className="text-sm font-bold tracking-wide">{BRAND}</div>
                <div className="text-[9px] tracking-[0.14em] text-muted-foreground uppercase sm:text-[10px]">
                  {BRAND_LONG}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Entreprise béninoise de construction et de génie civil basée à Tankpè, Godomey. Plans
              d'ingénierie, construction complète et remise des clés — avec ou sans terrain déjà
              acquis.
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center gap-3 rounded-2xl border border-amber-glow/40 bg-amber-glow/10 p-4 transition hover:bg-amber-glow/15"
            >
              <MapPin className="h-5 w-5 shrink-0 text-amber-glow" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold tracking-wider text-amber-glow uppercase">
                  Siège · Ouvrir dans Google Maps
                </div>
                <div className="truncate text-sm font-semibold">{ADDRESS}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-amber-glow transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-amber-glow/40 hover:text-amber-glow"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-amber-glow/40 hover:text-amber-glow"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-glow uppercase">
              Navigation
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs font-bold tracking-[0.25em] text-amber-glow uppercase">
              Zones d'intervention
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {zones.map((z) => (
                <span
                  key={z}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {z}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold tracking-[0.25em] text-amber-glow uppercase">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-3 hover:text-amber-glow">
                  <Phone className="h-4 w-4 shrink-0 text-amber-glow" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 break-all hover:text-amber-glow"
                >
                  <Mail className="h-4 w-4 shrink-0 text-amber-glow" /> {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-amber-glow"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-whatsapp" /> WhatsApp direct
                </a>
              </li>
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:btn-primary-hover mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              Discuter de votre projet <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {BRAND} — Tous droits réservés.
          </div>
          <div>Quartier Tankpè · Godomey · Bénin</div>
        </div>
      </div>
    </footer>
  );
}
