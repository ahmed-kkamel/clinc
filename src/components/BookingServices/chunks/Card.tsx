import Image from "next/image";
import { CardProps } from "@/types/cardProps";

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center gap-2 rounded-[20px] bg-[#000C1D] p-8 shadow-lg">
      <Image src={icon} alt={title} width={56} height={56} />
      <h3 className=" text-2xl font-bold text-[#FFFFFF]">{title}</h3>
      <p className="text-center text-sm text-[#B8E2F6]">{description}</p>
      <button className="mt-6 flex items-center gap-2 rounded-md bg-[#192BC2] px-10 py-4 font-bold transition duration-300 hover:bg-[#89CFF0]">
        <Image
          src="/images/booking-grid-card/arrow.svg"
          width={45}
          height={45}
          alt="Book now"
        />
        <span className="text-[#FFFFFF] ">{buttonText}</span>
      </button>
    </div>
  );
};

export default Card;
