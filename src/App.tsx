import "./App.css";
import HeroSection from "./components/hero-section/hero-section";
import Header from "./components/header-section/header";
import TestimonialsCarousel from "./components/testimonials-section/testimonials-carousel";
import PartnersSection from "./components/partners-section/partners-section";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TestimonialsCarousel />
      <PartnersSection />
    </>
  );
}

export default App;
