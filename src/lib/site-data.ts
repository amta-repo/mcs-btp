import { Ruler, Building2, KeyRound } from "lucide-react";
import maison from "@/assets/maison-3-chambres.jpg.asset.json";
import exterieur from "@/assets/amenagement-exterieur.jpg.asset.json";
import chantierR2 from "@/assets/chantier-r2-hotel.jpg.asset.json";
import salon from "@/assets/salon-moderne.jpg.asset.json";
import beton from "@/assets/controle-beton.jpg.asset.json";
import chantier from "@/assets/sur-le-chantier.jpg.asset.json";
import avant from "@/assets/avant.jpg.asset.json";
import apres from "@/assets/apres.jpg.asset.json";
import logo from "@/assets/logo-thecle.png.asset.json";

export const BRAND = "THECLE BTP";
export const PHONE_DISPLAY = "+229 01 67 28 46 72";
export const PHONE_TEL = "tel:+2290167284672";
export const WHATSAPP = "https://wa.me/2290167284672";
export const EMAIL = "contact@theclebtp.com";
export const TIKTOK = "https://www.tiktok.com/@theclebtp";
export const LOGO_URL = logo.url;

export const MAPS_URL =
  "https://www.google.com/maps/place/THECLE+BTP/@6.4169129,2.3073736,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a90019e7669d:0x3015ded640339bbc!8m2!3d6.4169129!4d2.3099539!16s%2Fg%2F11n430126s";

/* PLACEHOLDER — remplacez ce lien par votre propre code d'intégration Google Maps */
export const MAPS_EMBED =
  "https://www.google.com/maps?q=6.4169129,2.3099539&z=17&hl=fr&output=embed";

export const BEFORE_AFTER = {
  before: { url: avant.url, label: "Avant — Gros œuvre RDC" },
  after: { url: apres.url, label: "Après — Livraison clé en main" },
};

export const services = [
  {
    icon: Ruler,
    title: "Plans & Ingénierie",
    desc: "Dessins techniques, plans d'exécution et notes de calcul réalisés par nos ingénieurs avant le premier coup de pioche.",
  },
  {
    icon: Building2,
    title: "Construction complète",
    desc: "De la fondation à la finition : gros œuvre, second œuvre et suivi de chantier rigoureux, de zéro à la clé en main.",
  },
  {
    icon: KeyRound,
    title: "Remise des clés",
    desc: "Nettoyage, contrôles finaux et livraison : vous entrez dans un bâtiment terminé, prêt à vivre ou à exploiter.",
  },
];

export const projects = [
  {
    img: chantierR2.url,
    tag: "Gros Œuvre",
    title: "R+2 — Hôtel, résidence & bar VIP",
    location: "Abomey-Calavi, Atlantique",
    progress: 65,
    desc: "Coulage de dalle et structure béton armé pour un complexe hôtelier avec résidence et bar VIP.",
  },
  {
    img: salon.url,
    tag: "Finitions",
    title: "Salon moderne — Villa livrée",
    location: "Calavi, Bénin",
    progress: 100,
    desc: "Finitions haut de gamme : marbre, escalier suspendu et grande verrière sur un plan optimisé.",
  },
  {
    img: maison.url,
    tag: "Clé en main",
    title: "Maison moderne 3 chambres",
    location: "Atlantique, Bénin",
    progress: 100,
    desc: "Conception et construction d'une maison basse contemporaine avec carport et aménagement paysager.",
  },
  {
    img: exterieur.url,
    tag: "Aménagement",
    title: "Aménagement extérieur & pergola",
    location: "Cotonou, Bénin",
    progress: 100,
    desc: "Jardin, dallage et éclairage d'ambiance — conseil sur ce qu'il faut construire… et ne pas construire.",
  },
  {
    img: beton.url,
    tag: "Contrôle qualité",
    title: "Vérification de la consistance du béton",
    location: "Chantier, Calavi",
    progress: 100,
    desc: "Essai d'affaissement (slump test) systématique avant chaque mise en œuvre du béton.",
  },
  {
    img: chantier.url,
    tag: "Suivi de chantier",
    title: "Supervision d'un plancher R+1",
    location: "Abomey-Calavi",
    progress: 80,
    desc: "Contrôle du ferraillage et du coffrage avant coulage, avec notre ingénieur sur site.",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projets réalisés" },
  { value: 12, suffix: " ans", label: "D'expérience" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 45, suffix: "", label: "Compagnons & ingénieurs" },
];
