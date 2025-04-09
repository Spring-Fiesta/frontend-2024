import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/carousel.css";

// Internal Image Array
const images = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallerySlider/image${i + 1}.webp`,
  alt: `image${i + 1}`,
}));

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDirection("next");
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const manualPrev = () => {
    setDirection("prev");
    setCarouselIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const manualNext = () => {
    setDirection("next");
    setCarouselIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="fullscreen-carousel">
      <img
        src={images[carouselIndex].src}
        alt={images[carouselIndex].alt}
        className="carousel-background"
      />
      <div className="carousel-foreground">
        <div className="carousel-gradient" />
        <div
          className={`carousel-image-wrapper ${
            direction === "next" ? "slide-in-right" : "slide-in-left"
          }`}
          key={carouselIndex}
        >
          <img
            src={images[carouselIndex].src}
            alt={images[carouselIndex].alt}
            className="carousel-image"
          />
        </div>
        <div className="carousel-overlay">
          <button className="carousel-btn left" onClick={manualPrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-btn right" onClick={manualNext}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}