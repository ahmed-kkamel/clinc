"use client";
import { useState, useRef, useEffect } from "react";
import { reviews } from "../const/reviews";
import Image from "next/image";

const ClientReviewsSlider: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const startDrag = (
    e: React.MouseEvent<Element> | React.TouchEvent<Element>,
  ) => {
    setIsDragging(true);

    if (e instanceof MouseEvent) {
      setStartX(e.pageX);
    } else if ("touches" in e && e.touches.length > 0) {
      setStartX(e.touches[0].pageX);
    }

    if (sliderRef.current) {
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const onDragging = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    let x: number;
    if (e instanceof MouseEvent) {
      x = e.pageX;
    } else if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].pageX;
    } else {
      return;
    }

    const walk = (x - startX) * 1.5; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("mousemove", onDragging);
      slider.addEventListener("touchmove", onDragging, { passive: false });

      return () => {
        slider.removeEventListener("mousemove", onDragging);
        slider.removeEventListener("touchmove", onDragging);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="scrollbar-hide flex cursor-grab gap-4 overflow-x-scroll"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {reviews.map((review) => (
        <div
          key={review.id}
          className="flex min-w-[500px] max-w-[500px] justify-between gap-4 rounded-lg bg-white p-4 shadow-lg"
        >
          <Image
            src={review.imageSrc}
            alt={review.name}
            className="rounded-lg"
            width={160}
            height={160}
          />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-lg font-semibold text-[#5691AD]">
              {review.name}
            </h3>
            <div className="flex items-center">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-[#093448]">
              {review.reviewText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientReviewsSlider;
