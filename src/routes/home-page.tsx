import HeroSection from "../components/hero-section/hero-section";
import TestimonialsCarousel from "../components/testimonials-section/testimonials-carousel";
import PartnersSection from "../components/partners-section/partners-section";
import BenefitsSection from "../components/benefits-section/benefits-section";
import ContactSection from "../components/contact-section/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialsCarousel />
      <PartnersSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
}
