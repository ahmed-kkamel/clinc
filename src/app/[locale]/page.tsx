import BookingServices from "@/components/BookingServices";
import ScrollUp from "@/components/Common/ScrollUp";
import HealingStories from "@/components/HealingStories";
import Hero from "@/components/hero";
import TherapeuticServices from "@/components/TherapeuticServices";

import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "hello",
  description: "NEXT js",
  // other metadata
};

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ScrollUp />
      <Hero />
      <TherapeuticServices />
      <HealingStories />
      <BookingServices />
    </>
  );
}
