import Image from "next/image";
import { ClinicsCard } from "@/types/clinicsCard";

const Card: React.FC<ClinicsCard> = ({
  ClinicTitle,
  ClinicLocation,
  buttonReservationText,
  buttonLocationText,
}) => {
  return (
    <div className="flex min-h-[252px] flex-col gap-2 rounded-[20px] bg-[#000C1D] p-8 shadow-lg">
      <h2 className=" text-[32px] font-semibold text-[#FFFFFF]">
        {ClinicTitle}
      </h2>
      <p className="text-sm text-[#B8E2F6]">{ClinicLocation}</p>
      <div className="flex gap-4">
        <button className="mt-6 flex w-1/2 items-center gap-2 rounded-md bg-[#192BC2] px-10 py-4 font-bold transition duration-300 hover:bg-[#89CFF0]">
          <Image
            src="/images/booking-grid-card/arrow.svg"
            width={45}
            height={45}
            alt="Book now"
          />
          <span className="grow text-[20px] text-[#FFFFFF]">
            {buttonReservationText}
          </span>
        </button>
        <button className="mt-6 flex w-1/2 items-center gap-2 rounded-md border border-[#FFF] px-10 py-4 font-bold ">
          <Image
            src="/images/clinics-locations/location-mark.svg"
            width={24}
            height={24}
            alt="Book now"
          />
          <span className="grow text-[20px] text-[#FFFFFF]">
            {buttonLocationText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
