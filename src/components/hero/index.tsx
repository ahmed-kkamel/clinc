import Slider from "./chunks/Slider";

export default function Hero() {
  // const slides = [
  //   { image: "/images/logo/logo.svg", content: "Slide 1 Content" },
  //   { image: "/images/logo/logo.svg", content: "Slide 2 Content" },
  //   { image: "/images/logo/logo.svg", content: "Slide 3 Content" },
  // ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Slider />
    </main>
  );
}
