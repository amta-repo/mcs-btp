import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { projects, WHATSAPP } from "@/lib/site-data";
import { BeforeAfter } from "@/components/BeforeAfter";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/realisations")({
  component: RealisationsPage,
  head: () => ({
    meta: [
      { title: "Réalisations — THECLE BTP | Chantiers au Bénin" },
      {
        name: "description",
        content:
          "Portfolio THECLE BTP : villas, complexes hôteliers, finitions et suivi de chantier à Abomey-Calavi et dans tout le Bénin.",
      },
      { property: "og:title", content: "Réalisations — THECLE BTP" },
      {
        property: "og:description",
        content: "Avant / après, villas clé en main et chantiers suivis par nos ingénieurs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function RealisationsPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-xs font-bold tracking-[0.3em] text-amber-glow uppercase">
          Chantiers réels au Bénin
        </div>
        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
          Notre <span className="text-gold-gradient">portfolio</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Du gros œuvre à la remise des clés — une sélection de projets livrés et en cours.
        </p>

        <div className="mt-10">
          <BeforeAfter />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 transition group-hover:opacity-95" />
                <span className="absolute top-4 left-4 rounded-full bg-amber-glow px-3 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
                  {p.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-foreground/90">{p.desc}</p>
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-base font-bold">{p.title}</h2>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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
  );
}
