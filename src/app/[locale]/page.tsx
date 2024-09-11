import BookingServices from "@/components/BookingServices";
import ClientReview from "@/components/ClientReview";
import ScrollUp from "@/components/Common/ScrollUp";
import Footer from "@/components/Footer";
import HealingStories from "@/components/HealingStories";
import Hero from "@/components/hero";
import Partners from "@/components/Partners";
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
      <Partners />
      <ClientReview />
    </>
  );
}
