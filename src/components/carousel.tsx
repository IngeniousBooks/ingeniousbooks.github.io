import LeftDirection from "./left-button";
import RightDirection from "./right-button";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="direction-container-left">
        <LeftDirection />
      </div>

      <img
        className="carousel-image"
        src="/src/assets/carousel-covers.png"
        alt="three vivid books set against a bright bokke background"
      />
      <div className="direction-container-right">
        <RightDirection />
      </div>
    </div>
  );
}
