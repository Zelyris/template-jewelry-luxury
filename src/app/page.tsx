import { Appointment } from "@/components/sections/Appointment";
import { Collections } from "@/components/sections/Collections";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { MaisonStory } from "@/components/sections/MaisonStory";
import { Services } from "@/components/sections/Services";
import { SignaturePieces } from "@/components/sections/SignaturePieces";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/content";

export default function Home() {
  return (
    <>
      <Header site={siteConfig} />
      <main>
        <Hero content={homeContent.hero} />
        <Introduction content={homeContent.introduction} />
        <Collections content={homeContent.collections} />
        <SignaturePieces content={homeContent.signatures} />
        <MaisonStory content={homeContent.story} founded={siteConfig.founded} />
        <Craftsmanship content={homeContent.craftsmanship} />
        <Gallery content={homeContent.gallery} />
        <Services content={homeContent.services} />
        <Appointment content={homeContent.appointment} site={siteConfig} />
      </main>
      <Footer site={siteConfig} />
    </>
  );
}
