import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


const ImageCarousel = ({ images }) => {
  const parsedImages = images ? JSON.parse(images) : null;
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === parsedImages.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? parsedImages.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, [slide]); // Reset interval when slide changes

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {parsedImages.map((item, idx) => {
        return (
          <img
            src={`http://localhost:3000/${item}`}
            key={idx}
            className={slide === idx ? "slide" : ""}
            alt={`Slide ${idx}`}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {parsedImages.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ImageCarousel;