import { PartnerProps } from "@/types/partnerProps";
import Image from "next/image";

const Partner: React.FC<PartnerProps> = ({ logo, name, bgColor }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex w-[80px] h-[80px] md:h-[1000] md:w-[1000] items-center justify-center rounded-full ${bgColor} overflow-hidden shadow-lg`}
      >
        <Image src={logo} alt={name} width={200} height={200} />
      </div>
      <p className="mt-2 text-center text-sm font-medium md:font-bold text-[#000C1D]">
        {name}
      </p>
    </div>
  );
};
export default Partner;
