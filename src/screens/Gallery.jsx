import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import "../styles/gallery.css";
import Carousel from "../components/Carousel";

const images = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallerySlider/image${i + 1}.webp`,
  alt: `image${i + 1}`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => setSelectedImage(null);

  const prevImage = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextImage = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

  return (
    <div className="gallery-wrapper">
      <Navbar />
      <h1 className="gallery-title">Gallery</h1>
      <Carousel />

      {/* Grid */}
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openImage(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="dialog-container" onClick={closeImage}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <div className="image-wrapper">
              <button onClick={closeImage} className="close-btn" aria-label="Close">
                <X size={20} />
              </button>
              <button onClick={prevImage} className="prev-btn" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="selected-image"
              />
              <button onClick={nextImage} className="next-btn" aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
