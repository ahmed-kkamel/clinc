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
    <div className="relative w-full min-h-screen overflow-hidden">
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
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              } flex items-center justify-center`}
          >
            {/* Render different slide styles */}
            {slide.style === "half-image-right-content" && (
              <div className="flex w-full h-full" style={slideStyles}>
                <div className="lg:ms-[86px] flex w-full lg:w-1/2 items-center justify-center">
                  <ContentBox
                    slide={slide}
                    fullScreen={false}
                    isTowBoxes={false}
                  />
                </div>
                <div className="self-end hidden h-full bg-cover lg:block lg:w-1/2">
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
                className="flex items-center justify-center w-full h-full"
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
              <>
                {/* Display full-width-content on small screens */}
                <div
                  className="flex items-center justify-center w-full h-full lg:hidden"
                  style={slideStyles}
                >
                  <ContentBox
                    slide={slide}
                    fullScreen={true}
                    isTowBoxes={false}
                  />
                </div>

                {/* Display two-boxes only on larger screens */}
                <div
                  className="hidden lg:flex h-full w-full gap-4 px-[50px]"
                  style={slideStyles}
                >
                  <div className="flex items-center justify-center w-full lg:w-1/2">
                    <ContentBox
                      slide={slide}
                      fullScreen={false}
                      isTowBoxes={true}
                    />
                  </div>
                  <div className="flex items-center justify-center w-full lg:w-1/2">
                    <ContentBox
                      slide={slide}
                      fullScreen={false}
                      isTowBoxes={true}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}

      <div className="absolute flex gap-2 transform -translate-x-1/2 md:gap-3 bottom-4 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 md:h-3 md:w-3 rounded-full ${index === currentSlide ? "md:w-[24px] w-4 bg-white" : "bg-[#5691AD]"
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
