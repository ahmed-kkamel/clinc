"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { items } from "../const/items";

const LongPressSlider: React.FC = () => {
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
      className="flex cursor-grab gap-4 overflow-x-scroll scrollbar-hide"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex h-[213px] min-w-[213px] max-w-[213px] flex-col items-center justify-center gap-10 rounded-[20px] bg-[#DCF1FA] py-10"
        >
          <Image
            src={item.imageSrc}
            alt={item.title}
            width={66}
            height={66}
            className="!h-16"
          />
          <p className="text-center text-[20px] font-medium text-[#000C1D]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LongPressSlider;
