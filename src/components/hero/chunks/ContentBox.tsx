import Image from "next/image";

const ContentBox: React.FC<{
  slide: any;
  fullScreen: boolean;
  isTowBoxes: boolean;
}> = ({ slide, fullScreen, isTowBoxes }) => (
  <div className="flex flex-col gap-10">
    <div
      className={`flex ${fullScreen ? "h-[465px] max-w-[1192px]" : "h-[465px] max-w-[850px]"} flex-col gap-3 rounded-2xl border border-[#FFFFFF4A] bg-[#000C1D99]  p-8`}
    >
      <h2 className="text-[48px] font-bold leading-[64px] text-[#FFFFFF] ">
        {slide.title}
      </h2>
      <h3 className=" text-base leading-[26px] text-[#89CFF0]">
        {slide.subtitle}
      </h3>
      <p className="mb-6 text-lg font-normal leading-[48px] text-[#FFFFFF]">
        {slide.description}
      </p>
      <p className="items-end text-xl font-black text-[#FFFFFF]">
        {slide.signature}
      </p>
    </div>
    {!isTowBoxes && (
      <div
        className={`${fullScreen ? "justify-center" : "justify-start"} flex gap-4`}
      >
        <button className="flex gap-2 rounded-lg bg-[#192BC2] px-8 py-2 text-white">
          <Image
            src="/images/booking-grid-card/arrow.svg"
            alt="book now"
            width={24}
            height={24}
          />
          <span>احجز كشف الآن</span>
        </button>
        <button className="rounded-lg border border-white bg-transparent px-4 py-2 text-white">
          عرض المزيد عن الدكتور
        </button>
      </div>
    )}
  </div>
);
export default ContentBox;
