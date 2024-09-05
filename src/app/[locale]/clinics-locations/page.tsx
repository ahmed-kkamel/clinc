import ClinicsLocations from "@/components/ClinicsLocations";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Clinics locations",
  description: "NEXT js",
  // other metadata
};

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ClinicsLocations />
    </>
  );
}
