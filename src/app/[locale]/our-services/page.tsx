import CardGrid from "@/components/BookingServices/chunks/CardGrid";
import LongPressSlider from "@/components/TherapeuticServices/chunks/LongPressSlider";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Our Services",
  description: "NEXT js",
  // other metadata
};

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <main className="container flex flex-col pb-10 md:pb-[180px]">
      <h1 className="text-4xl md:text-[64px] leading-[120px] text-[#000C1D]">
        الخدمات العلاجيه
      </h1>
      <p className="mb-7 md:mb-[48px] max-w-[700px] text-lg md:text-xl font-medium text-[#23536A] ">
        نلتزم بتوفير رعاية متميزة للمرضى الذين يعانون من أمراض المخ والأعصاب
        المتعددة، وتبدأ تلك الرعاية بالتشخيص الدقيق ثم وضع خطط علاج متعددة
        ومتابعة نتائجها
      </p>
      <LongPressSlider />
      <h2 className="mt-5 md:mt-[80px] text-4xl md:text-[64px] font-medium leading-[120px] text-[#000C1D]">
        خدامات الحجز
      </h2>
      <CardGrid />
    </main>
  );
}
