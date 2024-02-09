import { useState } from "react";
import LeftDirection from "./left-button";
import RightDirection from "./right-button";
import carouselImages from "../data/carousel-images";

export default function HeroCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section className="carousel-container">
      <button
        className="carousel-left-button"
        onClick={() => {
          setImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
          );
        }}
      >
        <LeftDirection />
      </button>
      <img
        className="carousel-image"
        src={carouselImages[imageIndex].src}
        alt={carouselImages[imageIndex].alt}
      />
      <button
        className="carousel-right-button"
        onClick={() => {
          setImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
          );
        }}
      >
        <RightDirection />
      </button>
      <ul className="indicator-panel">
        {carouselImages.map((image, index) => (
          <li
            key={image.src}
            className={`selector ${index === imageIndex ? "active" : ""}`}
            onClick={() => setImageIndex(index)}
          >
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              style={{ verticalAlign: "top" }}
            >
              <circle
                cx="10"
                cy="10"
                r="10"
                fill={index === imageIndex ? "#d54b1a" : "none"}
                strokeWidth={0.4}
                stroke="#484848"
              />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
}
