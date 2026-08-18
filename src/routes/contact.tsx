import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import {
  MAPS_URL,
  MAPS_EMBED,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  WHATSAPP,
} from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Devis gratuit — THECLE BTP" },
      {
        name: "description",
        content:
          "Contactez THECLE BTP à Abomey-Calavi : devis gratuit, WhatsApp +229 01 67 28 46 72, contact@theclebtp.com.",
      },
      { property: "og:title", content: "Contact & Devis gratuit — THECLE BTP" },
      {
        property: "og:description",
        content: "Parlons de votre projet de construction au Bénin — réponse rapide sur WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="grid-blueprint absolute inset-0 -z-10 opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-amber-glow uppercase">Contact</div>
            <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
              Prêt à bâtir <span className="text-gold-gradient">votre projet</span> ?
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Devis gratuit et sans engagement. Écrivez-nous sur WhatsApp : nous répondons
              généralement dans la journée.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-amber-glow/40 bg-amber-glow/10 p-5 transition hover:bg-amber-glow/15"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-glow text-primary-foreground">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold tracking-wider text-amber-glow uppercase">
                    Discuter sur WhatsApp
                  </div>
                  <div className="mt-0.5 truncate text-sm font-semibold">{PHONE_DISPLAY}</div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-amber-glow transition group-hover:translate-x-1" />
              </a>

              <a
                href={PHONE_TEL}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-amber-glow/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-white/10">
                  <Phone className="h-5 w-5 text-amber-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">Téléphone</div>
                  <div className="truncate text-sm font-semibold">{PHONE_DISPLAY}</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-amber-glow/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-white/10">
                  <Mail className="h-5 w-5 text-amber-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">Email</div>
                  <div className="truncate text-sm font-semibold">{EMAIL}</div>
                </div>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-amber-glow/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-white/10">
                  <MapPin className="h-5 w-5 text-amber-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">Adresse</div>
                  <div className="truncate text-sm font-semibold">Abomey-Calavi, Atlantique, Bénin</div>
                </div>
              </a>
            </div>
          </div>

          {/* PLACEHOLDER GOOGLE MAPS — remplacez MAPS_EMBED dans src/lib/site-data.ts */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal">
            <iframe
              title="THECLE BTP sur Google Maps"
              src={MAPS_EMBED}
              className="h-full min-h-[440px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Besoin d'un devis rapidement ?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Notre Assistant Virtuel THECLE BTP (en bas à droite) réalise un pré-diagnostic en moins
            d'une minute.
          </p>
        </div>
      </div>
    </section>
  );
}
