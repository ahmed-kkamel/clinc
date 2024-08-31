"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { slides } from "./../const/slides";
import ContentBox from "./ContentBox";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 7000);

  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } flex items-center justify-center`}
        >
          {/* Different styles for each slide */}
          {slide.style === "half-image-right-content" && (
            <div
              className="flex h-full w-full bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="flex w-1/2 items-center justify-center bg-black bg-opacity-50">
                <ContentBox slide={slide} fullScreen={true} />
              </div>
              <div className="h-full w-1/2 self-end bg-cover">
                <Image
                  alt="Slide Image"
                  objectFit="fit"
                  src={`/images/hero/dr-image.svg`}
                  width={800}
                  height={100}
                />
              </div>
            </div>
          )}
          {slide.style === "full-width-content" && (
            <div
              className="flex h-full w-full items-center justify-center bg-black bg-opacity-50 bg-center "
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <ContentBox slide={slide} fullScreen={true} />
            </div>
          )}
          {slide.style === "two-boxes" && (
            <div
              className="flex h-full w-full bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="flex w-1/2 items-center justify-center bg-black bg-opacity-50">
                <ContentBox slide={slide} fullScreen={false} />
              </div>
              <div className="flex w-1/2 items-center justify-center bg-black bg-opacity-50">
                <ContentBox slide={slide} />
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
