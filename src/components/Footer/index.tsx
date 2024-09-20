import Image from "next/image";
import React, { ReactNode } from "react";

/* Main Footer Component */
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000C1D] pb-6 pt-10 md:pt-20 text-white">
      <div className="container flex flex-col justify-between gap-6 md:flex-row md:gap-0">
        {/* Logo Section */}
        <div className="text-right">
          <h1 className="text-2xl font-bold">LOGO</h1>
        </div>

        {/* Services Section */}
        <FooterSection title="الخدمات">
          <FooterList
            items={[
              "جراحات اورام المخ",
              "جراحات العمود الفقري",
              "جراحات العمود الفقري بالتدخل المحدود",
              "جراحات الفقرات العنقية الميكروسكوبية",
            ]}
          />
        </FooterSection>

        {/* Clinics Locations */}
        <FooterSection title="أماكن العيادات">
          <FooterList items={["الدقي", "التجمع الخامس", "كفرالشيخ", "بورسعيد"]} />
        </FooterSection>

        {/* Contact Section */}
        <FooterSection title="التواصل">
          <p className="text-[#E5E7EB]">0111111111</p>
        </FooterSection>
      </div>

      {/* Social Media Icons */}
      <div className="container flex flex-col items-center gap-6 mt-6 md:mt-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-4 md:justify-end">
          <SocialMediaIcon href="#" src="/images/footer/facebook-icon.svg" alt="Facebook" />
          <SocialMediaIcon href="#" src="/images/footer/twitter-icon.svg" alt="Twitter" />
          <SocialMediaIcon href="#" src="/images/footer/instgram-icon.svg" alt="Instagram" />
          <SocialMediaIcon href="#" src="/images/footer/youtube-icon.svg" alt="YouTube" />
          <p className="text-sm font-medium md:text-lg md:font-semibold ms-2">
            تابعنا
          </p>
        </div>
        <p className="text-xs md:text-sm text-[#E5E7EB]">
          © 2024 Ahmed Gouda. All rights reserved
        </p>
      </div>
    </footer>
  );
};

/* Section Wrapper Component */
const FooterSection: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-xl font-semibold md:text-2xl text-[#EDE9FE]">{title}</h3>
    {children}
  </div>
);

/* List Component */
const FooterList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-col gap-3 md:gap-4 text-[#E5E7EB]">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

/* Social Media Icon Component */
const SocialMediaIcon: React.FC<{ href: string; src: string; alt: string }> = ({ href, src, alt }) => (
  <a href={href} className="transition-transform transform hover:scale-105 hover:opacity-75">
    <Image src={src} alt={alt} width={43} height={43} className="h-8 md:h-11" />
  </a>
);

export default Footer;
