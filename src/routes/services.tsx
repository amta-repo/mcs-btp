import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { services, WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — MCS BTP | Plans, Construction, Clé en main" },
      {
        name: "description",
        content:
          "Plans & ingénierie, construction complète et remise des clés. MCS BTP accompagne aussi les clients qui n'ont pas encore de terrain.",
      },
      { property: "og:title", content: "Services — MCS BTP" },
      {
        property: "og:description",
        content: "Trois piliers : plans d'ingénierie, construction de zéro à la clé en main, remise des clés.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const details: Record<string, string[]> = {
  "Plans & Ingénierie": [
    "Esquisses, plans d'exécution et plans de coffrage",
    "Notes de calcul béton armé par ingénieur",
    "Dossiers de permis de construire",
    "Modélisation 3D et rendus sur demande",
  ],
  "Construction complète": [
    "Fondations, structure béton armé et maçonnerie",
    "Second œuvre : électricité, plomberie, menuiseries",
    "Contrôle qualité systématique (essais béton)",
    "Chef de chantier dédié et reporting régulier",
  ],
  "Remise des clés": [
    "Finitions haut de gamme et nettoyage complet",
    "Contrôles finaux et levée des réserves",
    "Aménagement extérieur et paysager",
    "Livraison documentée, prêt à habiter ou exploiter",
  ],
};

function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="grid-blueprint absolute inset-0 -z-10 opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-xs font-bold tracking-[0.3em] text-amber-glow uppercase">Nos 3 piliers</div>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            De vos plans à vos <span className="text-gold-gradient">clés en main</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            MCS BTP maîtrise toute la chaîne : conception technique, exécution du chantier et
            livraison finale. Un seul interlocuteur, du premier croquis à la remise des clés.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[300px]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/10 lg:to-background/80" />
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-glow/10 text-amber-glow ring-1 ring-amber-glow/30">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-5 text-xs font-bold tracking-[0.25em] text-amber-glow/80 uppercase">
                  Étape {i + 1}
                </div>
                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {details[s.title]?.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

          ))}

          <div className="rounded-3xl border border-amber-glow/30 bg-amber-glow/5 p-6 sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">Pas encore de terrain ? Ce n'est pas un obstacle.</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Nous accompagnons aussi les clients qui ne possèdent pas encore de terrain :
              recherche de parcelle, vérification des documents, conseils sur la viabilité du site
              et estimation du budget global. Vous avancez avec nous dès la première idée.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:btn-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide uppercase"
            >
              <MessageCircle className="h-4 w-4" /> Discuter de votre projet
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
