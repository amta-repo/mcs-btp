import { Ruler, Building2, KeyRound } from "lucide-react";

// Images servies depuis /public/media — fonctionnent sur tout hébergement (Netlify, etc.)
const plansCasque = { url: "/media/plans-casque.jpg" };
const genieCivil = { url: "/media/genie-civil.jpg" };
const fondation = { url: "/media/fondation.jpg" };
const dalle = { url: "/media/dalle.jpg" };
const coulage = { url: "/media/coulage-beton.jpg" };
const realisationR2 = { url: "/media/realisation-r2.jpg" };
const ferraillage = { url: "/media/ferraillage.jpg" };
const semelle = { url: "/media/semelle-chainage.jpg" };
const fauxPlafond = { url: "/media/faux-plafond.jpg" };
const immeubleChantier = { url: "/media/immeuble-chantier.jpg" };
const villaModerne = { url: "/media/villa-moderne.jpg" };
const villaContemporaine = { url: "/media/villa-contemporaine.jpg" };
const interieurStaff = { url: "/media/interieur-staff.jpg" };
const grosOeuvreR1 = { url: "/media/gros-oeuvre-r1.jpg" };
const fauxPlafondPose = { url: "/media/faux-plafond-pose.jpg" };
const logo = { url: "/media/logo-mcs.jpg" };

export const BRAND = "MCS BTP";
export const BRAND_LONG = "MATHAPHIL CONSTRUCTION SERVICES";
export const AI_NAME = "Mataphill AI";
export const PHONE_DISPLAY = "+229 61 21 05 89";
export const PHONE_TEL = "tel:+22961210589";
export const WHATSAPP = "https://wa.me/22961210589";
export const WHATSAPP_NUMBER = "22961210589";
export const EMAIL = "contact@mcsbtp.com";
export const FACEBOOK = "https://www.facebook.com/MataphilConstructionServices/";
export const INSTAGRAM = "https://www.instagram.com/mataphilconstructionservices/";
export const ADDRESS = "Quartier Tankpè, Godomey";
export const LOGO_URL = logo.url;

export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=C8HG%2BQH2%20Godomey";

export const MAPS_EMBED = "https://www.google.com/maps?q=C8HG%2BQH2+Godomey&z=17&hl=fr&output=embed";

export const IMAGES = {
  plansCasque: plansCasque.url,
  genieCivil: genieCivil.url,
  fondation: fondation.url,
  dalle: dalle.url,
  coulage: coulage.url,
  realisationR2: realisationR2.url,
  ferraillage: ferraillage.url,
  semelle: semelle.url,
  fauxPlafond: fauxPlafond.url,
  immeubleChantier: immeubleChantier.url,
  villaModerne: villaModerne.url,
  villaContemporaine: villaContemporaine.url,
  interieurStaff: interieurStaff.url,
  grosOeuvreR1: grosOeuvreR1.url,
  fauxPlafondPose: fauxPlafondPose.url,
};

export const BEFORE_AFTER = {
  before: { url: grosOeuvreR1.url, label: "Avant — Gros œuvre R+1" },
  after: { url: villaModerne.url, label: "Après — Villa livrée clé en main" },
};

export const services = [
  {
    icon: Ruler,
    title: "Plans & Ingénierie",
    desc: "Dessins techniques, plans d'exécution et notes de calcul réalisés par nos ingénieurs avant le premier coup de pioche.",
    img: genieCivil.url,
  },
  {
    icon: Building2,
    title: "Construction complète",
    desc: "De la fondation à la finition : gros œuvre, second œuvre et suivi de chantier rigoureux, de zéro à la clé en main.",
    img: coulage.url,
  },
  {
    icon: KeyRound,
    title: "Remise des clés",
    desc: "Finitions, contrôles finaux et livraison : vous entrez dans un bâtiment terminé, prêt à vivre ou à exploiter.",
    img: interieurStaff.url,
  },
];

export const projects = [
  {
    img: villaModerne.url,
    tag: "Clé en main",
    title: "Villa R+1 moderne avec garage",
    location: "Godomey, Atlantique",
    progress: 100,
    desc: "Conception et réalisation d'une villa contemporaine : façades épurées, balcons vitrés et garage couvert.",
  },
  {
    img: grosOeuvreR1.url,
    tag: "Gros œuvre",
    title: "Structure béton R+1 en élévation",
    location: "Quartier Tankpè, Godomey",
    progress: 60,
    desc: "Poteaux, poutres et planchers coulés sur place — chantier suivi au quotidien par notre ingénieur.",
  },
  {
    img: villaContemporaine.url,
    tag: "Clé en main",
    title: "Résidence contemporaine plain-pied",
    location: "Abomey-Calavi, Bénin",
    progress: 100,
    desc: "Volumes blancs, terrasse pavée et éclairage extérieur intégré : livrée entièrement finie.",
  },
  {
    img: immeubleChantier.url,
    tag: "Grands projets",
    title: "Immeuble tertiaire de grande envergure",
    location: "Cotonou, Bénin",
    progress: 85,
    desc: "Coordination de moyens lourds et de corps d'état multiples sur un bâtiment à façades techniques.",
  },
  {
    img: fauxPlafondPose.url,
    tag: "Second œuvre",
    title: "Pose de faux plafond modulaire",
    location: "Cotonou, Bénin",
    progress: 90,
    desc: "Ossature métallique et dalles alignées au millimètre, intégrant l'électricité et la climatisation.",
  },
  {
    img: interieurStaff.url,
    tag: "Finitions",
    title: "Staff, corniches & éclairage",
    location: "Godomey, Bénin",
    progress: 100,
    desc: "Corniches en staff, peinture lissée et éclairage encastré — les détails qui font la différence.",
  },
  {
    img: coulage.url,
    tag: "Structure",
    title: "Coulage de dalle béton armé",
    location: "Quartier Tankpè, Godomey",
    progress: 80,
    desc: "Mise en œuvre du béton à la pompe sur plancher ferraillé, avec contrôle de consistance avant coulage.",
  },
  {
    img: dalle.url,
    tag: "Structure",
    title: "Ferraillage de plancher haut",
    location: "Godomey, Bénin",
    progress: 70,
    desc: "Nappe d'armatures et coffrage d'un plancher haut vérifiés par notre ingénieur avant coulage.",
  },
  {
    img: fondation.url,
    tag: "Fondations",
    title: "Coffrage de semelles filantes",
    location: "Abomey-Calavi, Bénin",
    progress: 35,
    desc: "Implantation et coffrage bois des fondations — la solidité commence sous le niveau du sol.",
  },
  {
    img: semelle.url,
    tag: "Chaînage",
    title: "Chaînage bas & attentes verticales",
    location: "Atlantique, Bénin",
    progress: 45,
    desc: "Chaînage béton armé avec attentes de poteaux, prêt pour l'élévation de la maçonnerie.",
  },
  {
    img: fauxPlafond.url,
    tag: "Finitions",
    title: "Faux plafond & décoration murale",
    location: "Cotonou, Bénin",
    progress: 100,
    desc: "Staff, éclairage indirect et niches décoratives — les finitions qui donnent le caractère à la pièce.",
  },
  {
    img: ferraillage.url,
    tag: "Contrôle qualité",
    title: "Ligature des armatures",
    location: "Chantier, Godomey",
    progress: 60,
    desc: "Espacement et recouvrement des aciers contrôlés barre par barre avant la mise en œuvre du béton.",
  },
  {
    img: genieCivil.url,
    tag: "Études",
    title: "Plans d'exécution & métrés",
    location: "Bureau d'études, Tankpè",
    progress: 100,
    desc: "Plans techniques, devis quantitatif et estimatif détaillé remis avant le démarrage du chantier.",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projets réalisés" },
  { value: 12, suffix: " ans", label: "D'expérience" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 45, suffix: "", label: "Compagnons & ingénieurs" },
];
