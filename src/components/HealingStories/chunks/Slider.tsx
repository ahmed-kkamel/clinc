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
    <div className="relative mx-auto flex min-h-[348px] w-full max-w-[1184px] items-center">
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-0 -translate-x-[50px] transform rounded-full bg-[#89CFF0] p-2 text-[#FFFFFF]"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="flex w-full items-center  overflow-hidden rounded-lg bg-[#000C1D]">
        <div className="flex w-1/2 grow flex-col gap-2 p-4 text-white">
          <h2 className="text-[40px] font-semibold text-[#FFFFFF]">
            {slides[currentSlide].title}
          </h2>
          <p>{slides[currentSlide].subTitle}</p>
          <p>{slides[currentSlide].description}</p>
        </div>
        <div>
          <Image
            src={slides[currentSlide].imageSrc}
            alt="Slide Image"
            className="max-h-[316px] object-cover"
            width={482}
            height={316}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-0 z-10 translate-x-[50px] transform rounded-full bg-[#89CFF0] p-2 text-[#FFFFFF]"
        aria-label="Next slide"
        title="Next slide"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
