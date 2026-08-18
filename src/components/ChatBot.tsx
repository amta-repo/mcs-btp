import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, Check, ExternalLink } from "lucide-react";

const WHATSAPP_NUMBER = "2290167284672";
const WORK_TYPES = [
  "Plans & Ingénierie",
  "Construction complète",
  "Remise des clés",
  "Je n'ai pas encore de terrain",
];

type Step = "intro" | "name" | "company" | "work" | "phone" | "done";

interface FormData {
  name: string;
  company: string;
  work: string[];
  phone: string;
}

const STEP_QUESTIONS: Record<Exclude<Step, "intro" | "done">, string> = {
  name: "Parfait 👷. Pour commencer, quel est votre **nom et fonction** ?",
  company: "Merci ! Quel est le **nom de votre entreprise ou de votre projet** ?",
  work: "Quel **type de travaux** souhaitez-vous entreprendre ? (Sélectionnez tout ce qui s'applique)",
  phone: "Excellent. Votre **numéro WhatsApp (+229)** pour que nous puissions vous rappeler ?",
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    {
      from: "bot",
      text:
        "Bonjour 👋 Je suis l'**Assistant Virtuel THECLE BTP**. Je peux vous établir un pré-diagnostic pour votre projet en moins d'une minute. On commence ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [form, setForm] = useState<FormData>({ name: "", company: "", work: [], phone: "" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollCount = useRef(0);

  // Auto-open after user scrolls down twice
  useEffect(() => {
    if (autoOpened) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y - lastY > 120) {
        scrollCount.current += 1;
        lastY = y;
        if (scrollCount.current >= 2 && !autoOpened) {
          setAutoOpened(true);
          setOpen(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [autoOpened]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step]);

  const addBot = (text: string) =>
    setMessages((m) => [...m, { from: "bot", text }]);
  const addUser = (text: string) =>
    setMessages((m) => [...m, { from: "user", text }]);

  const advance = (next: Step) => {
    setStep(next);
    if (next in STEP_QUESTIONS) {
      setTimeout(() => addBot(STEP_QUESTIONS[next as keyof typeof STEP_QUESTIONS]), 500);
    }
  };

  const handleStart = () => {
    addUser("Oui, allons-y !");
    advance("name");
  };

  const submitText = () => {
    const value = input.trim();
    if (!value) return;
    addUser(value);
    setInput("");
    if (step === "name") {
      setForm((f) => ({ ...f, name: value }));
      advance("company");
    } else if (step === "company") {
      setForm((f) => ({ ...f, company: value }));
      advance("work");
    } else if (step === "phone") {
      setForm((f) => ({ ...f, phone: value }));
      setStep("done");
      setTimeout(
        () =>
          addBot(
            "✅ **Diagnostic validé !** Monsieur le Fondateur ou un ingénieur de permanence vous recontactera sous peu.",
          ),
        500,
      );
    }
  };

  const toggleWork = (w: string) => {
    setForm((f) => ({
      ...f,
      work: f.work.includes(w) ? f.work.filter((x) => x !== w) : [...f.work, w],
    }));
  };

  const submitWork = () => {
    if (form.work.length === 0) return;
    addUser(form.work.join(", "));
    advance("phone");
  };

  const whatsappHandoff = () => {
    const msg = encodeURIComponent(
      `Bonjour THECLE BTP, je viens du site web.\nNom: ${form.name || "-"}\nProjet: ${form.company || "-"}\nTravaux: ${form.work.join(", ") || "-"}\nJe souhaite parler à un représentant humain.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const renderText = (t: string) =>
    t.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
      p.startsWith("**") ? (
        <strong key={i} className="text-amber-glow">
          {p.slice(2, -2)}
        </strong>
      ) : (
        <span key={i}>{p}</span>
      ),
    );

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp shadow-2xl shadow-whatsapp/40 ring-4 ring-whatsapp/20"
            aria-label="Ouvrir l'assistant"
          >
            <MessageCircle className="h-8 w-8 text-white" strokeWidth={2.4} />
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-whatsapp/50"
            />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-glow text-[10px] font-bold text-navy">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", damping: 22, stiffness: 240 }}
            className="fixed bottom-4 right-4 z-50 flex h-[min(600px,calc(100dvh-2rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-whatsapp px-4 py-3 text-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate font-semibold">Assistant Virtuel THECLE BTP</div>
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  En ligne · répond en quelques secondes
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/15"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-navy/40 px-4 py-4"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 10%, oklch(0.78 0.17 78 / 0.06), transparent 40%)",
              }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm bg-charcoal text-foreground"
                    }`}
                  >
                    {renderText(m.text)}
                  </div>
                </motion.div>
              ))}

              {/* Step-specific interactive UI */}
              {step === "intro" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-start pt-1"
                >
                  <button
                    onClick={handleStart}
                    className="btn-primary hover:btn-primary-hover rounded-full px-4 py-2 text-sm font-semibold"
                  >
                    ✨ Démarrer le diagnostic
                  </button>
                </motion.div>
              )}

              {step === "work" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 pt-1"
                >
                  {WORK_TYPES.map((w) => {
                    const checked = form.work.includes(w);
                    return (
                      <motion.button
                        key={w}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => toggleWork(w)}
                        className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                          checked
                            ? "border-amber-glow bg-amber-glow/10 text-amber-glow"
                            : "border-border bg-charcoal text-foreground hover:border-amber-glow/50"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${checked ? "border-amber-glow bg-amber-glow" : "border-muted-foreground"}`}
                        >
                          {checked && <Check className="h-3.5 w-3.5 text-navy" strokeWidth={3} />}
                        </span>
                        {w}
                      </motion.button>
                    );
                  })}
                  <button
                    onClick={submitWork}
                    disabled={form.work.length === 0}
                    className="btn-primary hover:btn-primary-hover mt-1 w-full rounded-xl py-2.5 text-sm font-semibold disabled:opacity-50"
                  >
                    Valider ({form.work.length})
                  </button>
                </motion.div>
              )}

              {step === "done" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="mt-3 rounded-2xl border border-amber-glow/40 bg-amber-glow/10 p-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, type: "spring", stiffness: 260 }}
                    className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-glow"
                  >
                    <Check className="h-7 w-7 text-navy" strokeWidth={3} />
                  </motion.div>
                  <div className="text-sm font-semibold text-amber-glow">Diagnostic complet</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Réf: TBTP-{Date.now().toString().slice(-6)}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Composer */}
            <div className="border-t border-border bg-card p-3">
              {(step === "name" || step === "company" || step === "phone") && (
                <div className="flex items-center gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitText()}
                    placeholder={
                      step === "phone" ? "+229 01 XX XX XX XX" : "Votre réponse…"
                    }
                    className="min-w-0 flex-1 rounded-full border border-border bg-navy px-4 py-2.5 text-sm outline-none focus:border-amber-glow"
                    autoFocus
                  />
                  <button
                    onClick={submitText}
                    className="btn-primary hover:btn-primary-hover flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    aria-label="Envoyer"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
              <button
                onClick={whatsappHandoff}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-3 py-2 text-xs font-medium text-whatsapp transition hover:bg-whatsapp/20"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Parler à un humain sur WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
