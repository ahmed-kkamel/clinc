"use client";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { slides } from "./../const/slides";
import ContentBox from "./ContentBox";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoized function to handle slide changes
  const changeSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(changeSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [changeSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => {
        // Calculate the styles outside of the utility function
        const slideStyles = {
          backgroundImage: `url(${slide.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        };

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } flex items-center justify-center`}
          >
            {/* Render different slide styles */}
            {slide.style === "half-image-right-content" && (
              <div className="flex w-full" style={slideStyles}>
                <div className="ms-[86px] flex w-1/2 items-center justify-center">
                  <ContentBox
                    slide={slide}
                    fullScreen={false}
                    isTowBoxes={false}
                  />
                </div>
                <div className="h-full w-1/2 self-end bg-cover">
                  <Image
                    alt="Right side image for half-image-right-content slide"
                    src={`/images/hero/dr-image.svg`}
                    width={760}
                    height={600}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            )}

            {slide.style === "full-width-content" && (
              <div
                className="flex h-full w-full items-center justify-center"
                style={slideStyles}
              >
                <ContentBox
                  slide={slide}
                  fullScreen={true}
                  isTowBoxes={false}
                />
              </div>
            )}

            {slide.style === "two-boxes" && (
              <div
                className="flex h-full w-full gap-4 px-[50px]"
                style={slideStyles}
              >
                <div className="flex w-1/2 items-center justify-center">
                  <ContentBox
                    slide={slide}
                    fullScreen={false}
                    isTowBoxes={true}
                  />
                </div>
                <div className="flex w-1/2 items-center justify-center">
                  <ContentBox
                    slide={slide}
                    fullScreen={false}
                    isTowBoxes={true}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "w-[24px] bg-white" : "bg-[#5691AD]"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
