const ContentBox: React.FC<{ slide: any; fullScreen: boolean }> = ({
  slide,
  fullScreen,
}) => (
  <div className="flex flex-col gap-10">
    <div
      className={`flex ${fullScreen ? "max-w-[1192px]" : "max-w-[850px]"} flex-col gap-2 rounded-2xl border border-[#FFFFFF4A] bg-[#000C1D99]  p-8 text-start`}
    >
      <h2 className="text-4xl font-bold text-[#FFFFFF] ">{slide.title}</h2>
      <h3 className=" text-base text-[#89CFF0]">{slide.subtitle}</h3>
      <p className="text-lg font-normal leading-10 text-[#FFFFFF]">
        {slide.description}
      </p>
      <p className="text-xl font-black text-[#FFFFFF]">{slide.signature}</p>
    </div>
    <div className="flex justify-center space-x-4">
      <button className="rounded-full bg-blue-600 px-4 py-2 text-white">
        احجز كشف الآن
      </button>
      <button className="rounded-full border border-white bg-transparent px-4 py-2 text-white">
        عرض المزيد عن الدكتور
      </button>
    </div>
  </div>
);
export default ContentBox;
