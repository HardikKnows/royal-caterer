// app/page.tsx
import Hero from "./components/Hero";
import Services from "./services/page";
import ExperienceSection from "./components/ExperienceSection"
import MenuSection from "./menu/page";
import { DirectorsMessage } from "./components/DirectorsMessage";
import {ClientTestimonials } from "./components/ClientTestimonials"
import { OurClientsPreview  } from "./components/OurClientsPreview"
import GallerySection from "./components/GallerySection";




export default function Home() {
  return (
    <>

      <Services/>
      <ExperienceSection />
      <MenuSection/>
      <DirectorsMessage />
      <ClientTestimonials />
      <OurClientsPreview />
      <GallerySection />
      
    </>
  );
}
