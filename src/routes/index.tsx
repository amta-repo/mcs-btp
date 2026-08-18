import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import {
  TrustBar,
  ServicesPillars,
  StatsBand,
  Portfolio,
  Process,
  WhyUs,
  Testimonials,
  Partners,
  LocationBlock,
  FinalCTA,
} from "@/components/HomeSections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "THECLE BTP — De vos plans à vos clés en main | Abomey-Calavi" },
      {
        name: "description",
        content:
          "THECLE BTP : plans d'ingénierie, construction complète et remise des clés à Abomey-Calavi, Bénin. Devis gratuit sur WhatsApp.",
      },
      { property: "og:title", content: "THECLE BTP — De vos plans à vos clés en main" },
      {
        property: "og:description",
        content:
          "Construction et génie civil au Bénin : plans, construction de zéro à la clé en main, avec ou sans terrain.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPillars />
      <StatsBand />
      <Portfolio limit={6} />
      <Process />
      <WhyUs />
      <Testimonials />
      <Partners />
      <LocationBlock />
      <FinalCTA />
    </>
  );
}
