import Image from "next/image";
import { ClinicsCard } from "@/types/clinicsCard";

const Card: React.FC<ClinicsCard> = ({
  ClinicTitle,
  ClinicLocation,
  buttonReservationText,
  buttonLocationText,
}) => {
  return (
    <div className="flex min-h-[150px] md:min-h-[252px] justify-between flex-col gap-2 rounded-lg md:rounded-[20px] bg-[#000C1D] p-4 md:p-8 shadow-lg">
      <h2 className="text-2xl md:text-[32px] font-medium md:font-semibold text-[#FFFFFF]">
        {ClinicTitle}
      </h2>
      <p className="text-xs md:text-sm text-[#B8E2F6]">{ClinicLocation}</p>
      <div className="flex gap-2 md:gap-4">
        <button className="mt-1 md:mt-6 flex w-1/2 items-center gap-2 rounded-md bg-[#192BC2] px-4 md:px-10 py-2 md:py-4 font-bold transition duration-300 hover:bg-[#89CFF0]">
          <Image
            src="/images/booking-grid-card/arrow.svg"
            width={45}
            height={45}
            alt="Book now"
            className="w-[24px] h-[24px] md:w-11 md:h-11"
          />
          <span className="grow text-base md:text-[20px] text-[#FFFFFF]">
            {buttonReservationText}
          </span>
        </button>
        <button className="mt-1 md:mt-6 flex w-1/2 items-center gap-2 rounded-md border border-[#FFF] px-4 md:px-10 py-2 md:py-4 font-bold ">
          <Image
            src="/images/clinics-locations/location-mark.svg"
            width={24}
            height={24}
            alt="Book now"
            className="w-[24px] h-[24px] md:w-11 md:h-11"
          />
          <span className="grow text-base md:text-[20px] text-[#FFFFFF]">
            {buttonLocationText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
