import Image from "next/image";

const ContentBox: React.FC<{
  slide: any;
  fullScreen: boolean;
  isTowBoxes: boolean;
}> = ({ slide, fullScreen, isTowBoxes }) => (
  <div className="container flex flex-col gap-4 md:gap-10">
    <div
      className={`flex ${fullScreen ? " max-w-[1192px]" : " max-w-[850px]"} h-full flex-col gap-2 md:gap-3 rounded-xl md:rounded-2xl border border-[#FFFFFF4A] bg-[#000C1D99] p-4 md:p-8`}
    >
      <h2 className="text-2xl md:text-[48px] font-semibold md:font-bold md:leading-[64px] text-[#FFFFFF] ">
        {slide.title}
      </h2>
      <h3 className="text-xs md:text-base leading-5  md:leading-[26px] text-[#89CFF0]">
        {slide.subtitle}
      </h3>
      <p className="mb-2 md:mb-6 text-sm leading-8 md:text-lg md:leading-[48px] text-[#FFFFFF]">
        {slide.description}
      </p>
      <p className="items-end text-xl font-bold md:font-black text-[#FFFFFF]">
        {slide.signature}
      </p>
    </div>
    {!isTowBoxes && (
      <div
        className={`${fullScreen ? "justify-center" : "justify-start"} flex gap-2 md:gap-4`}
      >
        <button className="flex gap-2 rounded-lg bg-[#192BC2] px-4 md:px-8 py-2 text-white items-center">
          <Image
            src="/images/booking-grid-card/arrow.svg"
            alt="book now"
            width={24}
            height={24}
            className="w-4 h-4 md:w-6 md:h-6"
          />
          <span className="text-base md:text-lg">احجز كشف الآن</span>
        </button>
        <button className="px-2 py-2 text-base text-white bg-transparent border border-white rounded-lg md:text-lg md:px-4">
          عرض المزيد عن الدكتور
        </button>
      </div>
    )}
  </div>
);
export default ContentBox;
