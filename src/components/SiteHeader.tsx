import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { LOGO_URL, WHATSAPP, FACEBOOK, INSTAGRAM, BRAND, BRAND_LONG } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-background/90 py-1 shadow-lg shadow-black/30" : "bg-background/50 py-2"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 sm:px-8 md:flex md:justify-between md:gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={LOGO_URL}
            alt={`Logo ${BRAND}`}
            className={`shrink-0 rounded-xl bg-white object-contain p-1 transition-all duration-300 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`}
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-bold tracking-wide">{BRAND}</div>
            <div className="truncate text-[8px] tracking-[0.12em] text-muted-foreground uppercase sm:text-[9px]">
              {BRAND_LONG}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-amber-glow" }}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:text-foreground hover:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-amber-glow/40 hover:text-amber-glow sm:inline-flex"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-amber-glow/40 hover:text-amber-glow sm:inline-flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover:btn-primary-hover inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-bold tracking-wider uppercase sm:px-4 sm:text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Contactez-nous</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-amber-glow" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:text-amber-glow"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:text-amber-glow"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
