import HeroCarousel from "./hero-carousel";
import { HashLink as Link } from "react-router-hash-link";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <HeroCarousel />
      <h1>Book publishing services</h1>
      <Link smooth to="/#contact">
        <button className="hero-button">Contact us</button>
      </Link>
    </section>
  );
}
