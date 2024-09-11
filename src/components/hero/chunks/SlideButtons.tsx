// "use client";
// import React from "react";
// import { slides } from "./../const/slides";

// interface SlideButtonsProps {
//   currentSlide: number;
//   setCurrentSlide: (index: number) => void;
// }

// const SlideButtons: React.FC<SlideButtonsProps> = ({
//   currentSlide,
//   setCurrentSlide,
// }) => {
//   return (
//     <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-3">
//       {slides.map((_, index) => (
//         <button
//           key={index}
//           type="button"
//           aria-label={`Go to slide ${index + 1}`}
//           className={`h-3 w-3 rounded-full ${
//             index === currentSlide ? "w-[24px] bg-white" : "bg-[#5691AD]"
//           }`}
//           onClick={() => setCurrentSlide(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default SlideButtons;
