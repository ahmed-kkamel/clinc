import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import "../../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className} flex min-h-screen flex-col  `}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}

            <Footer />
            {/* <ScrollToTop /> */}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
