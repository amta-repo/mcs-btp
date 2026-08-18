import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Users, Award, Target, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "À propos — MCS BTP" },
      { name: "description", content: "MCS BTP (Mathaphil Construction Services) : histoire, valeurs et équipe. Entreprise de construction à Godomey, Bénin." },
      { property: "og:title", content: "À propos — MCS BTP" },
      { property: "og:description", content: "Notre histoire, nos valeurs, notre équipe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Rigueur", desc: "Conformité stricte aux normes techniques et aux CCTP." },
  { icon: Users, title: "Écoute", desc: "Interlocuteur unique du devis à la livraison." },
  { icon: Award, title: "Excellence", desc: "Finitions irréprochables et matériaux sélectionnés." },
  { icon: Target, title: "Ponctualité", desc: "Planning maîtrisé et livraison dans les délais." },
];

function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="grid-blueprint absolute inset-0 -z-10 opacity-20" />
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">À propos</div>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            Une <span className="text-gold-gradient">maison</span> béninoise du bâtiment.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Basée au Quartier Tankpè à Godomey (Atlantique), MCS BTP — Mathaphil Construction Services — est une entreprise indépendante de
            construction et de génie civil. Nos équipes — ingénieurs, chefs de chantier, ouvriers
            qualifiés — accompagnent particuliers, PME et institutions publiques dans la réalisation
            d'ouvrages durables sur l'ensemble du territoire béninois.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nous croyons que chaque projet mérite la même exigence : la rigueur d'un ingénieur, la
            précision d'un artisan, la parole d'un partenaire.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-navy/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Nos valeurs</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-glow ring-1 ring-amber-glow/30">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Prêt à collaborer ?</h2>
          <p className="mt-3 text-muted-foreground">Parlons de votre projet — réponse d'un ingénieur sous 24h ouvrées.</p>
          <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide">
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
