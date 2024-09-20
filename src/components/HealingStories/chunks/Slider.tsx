"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slides } from "../const/slides";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto flex  md:min-h-[348px] w-full max-w-[1184px] items-center">
      <button
        type="button"
        onClick={handlePrev}
        className="absolute end-[40px] md:end-0 -translate-x-[50px] transform rounded-full bg-[#89CFF0] p-2 text-[#FFFFFF]"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="flex w-full items-center flex-col-reverse md:flex-row overflow-hidden rounded-lg bg-[#000C1D] gap-4">
        <div className="flex flex-col h-56 gap-2 text-white px-7 md:w-1/2 md:p-4 md:grow text-start">
          <h2 className="text-xl md:text-[40px] font-semibold text-[#FFFFFF]">
            {slides[currentSlide].title}
          </h2>
          <p className="text-base">{slides[currentSlide].subTitle}</p>
          <p className="text-sm">{slides[currentSlide].description}</p>
        </div>
        <div>
          <Image
            src={slides[currentSlide].imageSrc}
            alt="Slide Image"
            className="max-h-[200px] object-cover"
            width={482}
            height={316}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="absolute start-[40px] md:start-0 z-10 translate-x-[50px] transform rounded-full bg-[#89CFF0] p-2 text-[#FFFFFF]"
        aria-label="Next slide"
        title="Next slide"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
