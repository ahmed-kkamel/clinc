import ScrollUp from "@/components/Common/ScrollUp";

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
      kskadkmk
    </>
  );
}
