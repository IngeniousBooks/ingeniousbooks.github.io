import "./App.css";
import HeroSection from "./components/hero-section/hero-section";
import Header from "./components/header-section/header";
import TestimonialsCarousel from "./components/testimonials-section/testimonials-carousel";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TestimonialsCarousel />
    </>
  );
}

export default App;
