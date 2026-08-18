import { motion } from "motion/react";
import {
  ArrowRight,
  MessageCircle,
  Target,
  Crown,
  Star,
  Building2,
  HardHat,
  Landmark,
  Hammer,
  Ruler,
  Wrench,
} from "lucide-react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import { WHATSAPP } from "@/lib/site-data";

const CLIENTS = [
  { name: "Mairie de Calavi", icon: Landmark },
  { name: "Promoteurs privés", icon: Building2 },
  { name: "BTP Cotonou", icon: HardHat },
  { name: "AtlantiqueBât", icon: Hammer },
  { name: "Cabinet Kora", icon: Ruler },
  { name: "GénieCivil BJ", icon: Wrench },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="grid-blueprint absolute inset-0 opacity-30" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-glow/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-amber-glow/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-amber-glow uppercase backdrop-blur-xl"
            >
              <Crown className="h-3.5 w-3.5" />
              Construction & Ingénierie · Godomey, Bénin

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl"
            >
              Nous bâtissons.
              <br />
              Vous recevez <span className="text-gold-gradient">les clés</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Du plan à la finition, sans stress.{" "}
              <strong className="text-foreground">Avec ou sans terrain.</strong>
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide uppercase hover:shadow-[0_20px_50px_-12px_oklch(0.76_0.14_80/0.8)] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Discuter de votre projet
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#realisations"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-wide text-foreground uppercase backdrop-blur-xl hover:border-amber-glow/50 sm:w-auto"
              >
                Voir nos réalisations
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — trust badge card (conservé) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative min-w-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-glow/30 via-amber-glow/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-2xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-glow/30 bg-amber-glow/10 text-amber-glow">
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-glow text-amber-glow" />
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground">4,9 · 87 avis</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-5xl font-black tracking-tight sm:text-6xl">120+</div>
                  <div className="text-sm tracking-wider text-muted-foreground uppercase">
                    Chantiers livrés au Bénin
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Taux de satisfaction client</span>
                    <span className="font-bold text-amber-glow">98%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-glow to-primary"
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "12", l: "Ans" },
                    { v: "45", l: "Compagnons" },
                    { v: "24/7", l: "Support" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-xl"
                    >
                      <div className="text-lg font-black text-amber-glow">{s.v}</div>
                      <div className="text-[10px] tracking-wider text-muted-foreground uppercase">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-emerald-300 uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    En chantier
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-brand-red uppercase">
                    Devis gratuit
                  </span>
                </div>
              </div>
            </div>

            {/* Marquee */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
              <div className="mb-3 text-[10px] font-bold tracking-[0.25em] text-muted-foreground uppercase">
                Ils nous font confiance
              </div>
              <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
                <div className="flex w-max animate-marquee items-center gap-8">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
                    <div key={i} className="flex shrink-0 items-center gap-2 text-muted-foreground">
                      <c.icon className="h-4 w-4 text-amber-glow/70" />
                      <span className="text-xs font-semibold tracking-wide">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
