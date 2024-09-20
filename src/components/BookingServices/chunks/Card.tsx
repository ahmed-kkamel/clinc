import Image from "next/image";
import { CardProps } from "@/types/cardProps";

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-2 rounded-[20px] bg-[#000C1D] p-4 md:p-8 shadow-lg">
      <Image src={icon} alt={title} className="w-12 h-12 md:w-14 md:h-14" width={56} height={56} />
      <h3 className="text-xl md:text-2xl font-semibold md:font-bold text-[#FFFFFF]">{title}</h3>
      <p className="text-center md:text-sm text-[#B8E2F6]">{description}</p>
      <button className="text-white  mt-2 md:mt-6 flex items-center gap-2 rounded-md bg-[#192BC2] px-5 md:px-10 py-2 md:py-4 font-medium md:font-bold transition duration-300 hover:bg-[#89CFF0]">
        <Image
          src="/images/booking-grid-card/arrow.svg"
          width={45}
          height={45}
          className="w-6 h-6 md:w-10 md:h-10"
          alt="Book now"
        />
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
