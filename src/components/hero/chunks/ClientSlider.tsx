// "use client";
// import React, { useEffect, useState, useCallback } from "react";

// import { slides } from "./../const/slides";
// import Slider from "./Slider";
// import SlideButtons from "./SlideButtons";

// const ClientSlider: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Memoized function to handle slide changes
//   const changeSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   }, []);

//   useEffect(() => {
//     const slideInterval = setInterval(changeSlide, 4000);
//     return () => clearInterval(slideInterval);
//   }, [changeSlide]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Render the server-side component */}
//       <Slider currentSlide={currentSlide} />

//       {/* Render the client-side buttons for interactivity */}
//       <SlideButtons
//         currentSlide={currentSlide}
//         setCurrentSlide={setCurrentSlide}
//       />
//     </div>
//   );
// };

// export default ClientSlider;
