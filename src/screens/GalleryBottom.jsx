import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import '../styles/carousel.css';

const GalleryBottom = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 600px
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true
        },
        // when window width is >= 900px
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false
        },
        // when window width is >= 1500px
        1500: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false
        },
        // when window width is >= 1800px
        1800: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false
        }
      }
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="container">
      <p>Take a Look at some eyecatching Arts</p>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {[...Array(6)].map((_, index) => (
            <div className="swiper-slide" key={index}>
              <img className='slide-img' src={`images/gallerySlider/img${index + 1}.webp`} alt="images"/>
            </div>
          ))}
        </div>

        {/* Add Arrows */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div> 
    </div>
  );
}

export default GalleryBottom;
