import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Star,
  ShieldCheck,
  Ruler,
  FileText,
  Building2,
  Quote,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Handshake,
  Wallet,
  Sparkles,
  HardHat,
} from "lucide-react";
import {
  services,
  projects,
  stats,
  WHATSAPP,
  PHONE_DISPLAY,
  PHONE_TEL,
  MAPS_EMBED,
  MAPS_URL,
} from "@/lib/site-data";
import { CountUp } from "@/components/CountUp";
import { BeforeAfter } from "@/components/BeforeAfter";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function TrustBar() {
  const items = [
    { icon: Building2, label: "120+ projets réalisés" },
    { icon: Ruler, label: "Plans & construction" },
    { icon: FileText, label: "Devis gratuit" },
    { icon: MapPin, label: "Basé à Godomey" },
  ];
  return (
    <section className="border-y border-white/10 bg-charcoal/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-6 sm:px-8 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            {...reveal}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
          >
            <it.icon className="h-5 w-5 shrink-0 text-amber-glow" />
            <span className="truncate text-xs font-semibold sm:text-sm">{it.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ServicesPillars() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div {...reveal} className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
            Nos 3 piliers
          </div>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Du <span className="text-gold-gradient">plan</span> à la remise des clés.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un seul interlocuteur pour concevoir, bâtir et livrer votre projet — sans
            sous-traitance hasardeuse.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-amber-glow/40 hover:shadow-[0_25px_60px_-25px_oklch(0.76_0.14_80/0.55)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-glow/15 text-amber-glow ring-1 ring-amber-glow/40 backdrop-blur-xl">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="absolute top-4 right-4 text-[11px] font-bold tracking-[0.25em] text-amber-glow/90 uppercase">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7 pt-5">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-amber-glow/5 blur-2xl transition group-hover:bg-amber-glow/20" />
            </motion.article>

          ))}
        </div>

        <motion.div
          {...reveal}
          className="mt-6 flex flex-col gap-4 rounded-3xl border border-brand-blue/30 bg-brand-blue/5 p-6 sm:flex-row sm:items-center"
        >
          <Handshake className="h-7 w-7 shrink-0 text-brand-blue" />
          <p className="text-sm leading-relaxed text-foreground/90">
            <strong>Pas encore de terrain ?</strong> Aucun problème. Nous accompagnons aussi les
            clients qui n'ont pas encore acquis leur parcelle : recherche, vérification des titres
            et conseil d'implantation. Vous avancez à votre rythme, nous sécurisons chaque étape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="border-y border-white/10 bg-charcoal/50 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-black text-amber-glow sm:text-5xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Portfolio({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <section id="realisations" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div
          {...reveal}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
              Chantiers réels au Bénin
            </div>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Nos réalisations</h2>
          </div>
          <Link
            to="/realisations"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-amber-glow/50"
          >
            Portfolio complet <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div {...reveal} className="mb-6">
          <BeforeAfter />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              {...reveal}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 transition group-hover:opacity-95" />
                <span className="absolute top-4 left-4 rounded-full bg-amber-glow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {p.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-foreground/90">{p.desc}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold">{p.title}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { icon: MessageCircle, title: "Consultation", desc: "Écoute de votre besoin, budget et terrain." },
    { icon: Ruler, title: "Plans", desc: "Dessins techniques et devis détaillé gratuit." },
    { icon: HardHat, title: "Construction", desc: "Chantier suivi par un ingénieur dédié." },
    { icon: Sparkles, title: "Remise des clés", desc: "Livraison finie, nettoyée et contrôlée." },
  ];
  return (
    <section className="border-y border-white/10 bg-charcoal/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div {...reveal} className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
            Notre méthode
          </div>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">4 étapes, zéro mauvaise surprise.</h2>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-amber-glow/40 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                {...reveal}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-amber-glow/40 bg-background text-amber-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-blue">
                  Étape {i + 1}
                </div>
                <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    {
      icon: Wallet,
      title: "Des prix justes",
      desc: "Devis transparent, ligne par ligne. Nous optimisons le budget sans jamais sacrifier la structure.",
    },
    {
      icon: Handshake,
      title: "Avec ou sans terrain",
      desc: "Vous n'avez pas encore de parcelle ? Nous vous guidons dans la recherche et la sécurisation du terrain.",
    },
    {
      icon: Sparkles,
      title: "Finitions soignées",
      desc: "Marbre, menuiserie, éclairage : le détail fait la différence entre une maison et votre maison.",
    },
    {
      icon: ShieldCheck,
      title: "Expertise d'ingénieur",
      desc: "Contrôles béton, ferraillage vérifié, normes respectées — la solidité avant l'esthétique.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div {...reveal} className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
            Pourquoi MCS BTP
          </div>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Accessible. <span className="text-gold-gradient">Flexible.</span> Rigoureux.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-amber-glow/40"
            >
              <it.icon className="h-6 w-6 text-amber-glow" />
              <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    {
      text: "Du plan à la remise des clés, tout a été clair. Le chantier a été livré dans les délais annoncés.",
      name: "Client — Villa R+1",
      role: "Godomey",
    },
    {
      text: "Je n'avais pas encore de terrain. L'équipe m'a accompagné jusqu'à l'achat puis a construit.",
      name: "Client — Maison 3 chambres",
      role: "Atlantique",
    },
    {
      text: "Le suivi technique est sérieux : contrôle du béton, ferraillage vérifié. On se sent en confiance.",
      name: "Client — Complexe hôtelier",
      role: "Calavi",
    },
  ];
  return (
    <section className="border-y border-white/10 bg-charcoal/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div {...reveal} className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
            Témoignages
          </div>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Ils nous ont fait confiance</h2>
        </motion.div>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              {...reveal}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-[85%] shrink-0 snap-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:w-[45%] lg:w-[31%]"
            >
              <Quote className="h-6 w-6 text-amber-glow" />
              <div className="mt-3 flex gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-amber-glow text-amber-glow" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-4 text-xs">
                <div className="font-semibold">{q.name}</div>
                <div className="text-muted-foreground">{q.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground">Faites glisser pour voir plus →</p>
      </div>
    </section>
  );
}

export function Partners() {
  const partners = ["CIMBENIN", "SOBEMAP", "BÉTON PLUS", "ACIER BJ", "QUINCAILLERIE ATL", "SOGEMA"];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Partenaires & fournisseurs
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-center text-[11px] font-bold tracking-wider text-muted-foreground transition hover:border-amber-glow/40 hover:text-amber-glow"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationBlock() {
  return (
    <section className="border-y border-white/10 bg-charcoal/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
              Nous trouver
            </div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Quartier Tankpè, Godomey</h2>
            <p className="mt-3 text-muted-foreground">
              Notre bureau vous accueille pour étudier vos plans et votre budget. Passez nous voir
              ou appelez-nous.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-glow/40 bg-amber-glow/10 px-5 py-3 text-sm font-bold text-amber-glow transition hover:bg-amber-glow/20"
            >
              <MapPin className="h-4 w-4" /> Ouvrir dans Google Maps
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* ===== PLACEHOLDER GOOGLE MAPS — remplacez l'URL MAPS_EMBED dans src/lib/site-data.ts ===== */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <iframe
              src={MAPS_EMBED}
              title="Localisation MCS BTP"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full sm:h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-glow/15 via-background to-background" />
      <div className="grid-blueprint absolute inset-0 -z-10 opacity-20" />
      <motion.div {...reveal} className="mx-auto max-w-4xl px-4 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
          Devis gratuit · Réponse rapide
        </div>
        <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
          Parlons de votre projet <span className="text-gold-gradient">dès aujourd'hui</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Un message WhatsApp suffit pour obtenir un premier avis technique et une estimation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wide sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" /> Discuter sur WhatsApp
          </motion.a>
          <a
            href={PHONE_TEL}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wide transition hover:border-amber-glow/50 sm:w-auto"
          >
            <Phone className="h-4 w-4" /> Appeler maintenant
          </a>
        </div>
      </motion.div>
    </section>
  );
}
