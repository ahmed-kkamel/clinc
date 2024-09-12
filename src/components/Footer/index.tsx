import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000C1D] pb-[24px] pt-[88px] text-white">
      <div className="container flex flex-col items-center justify-between md:flex-row md:items-start">
        {/* Logo Section */}
        <div className="text-center md:text-right">
          <div className="text-2xl font-bold text-[#FFFFFF]">LOGO</div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">الخدمات</h3>
          <ul className="flex flex-col gap-4 text-[#E5E7EB]">
            <li>جراحات اورام المخ</li>
            <li>جراحات العمود الفقري</li>
            <li>جراحات العمود الفقري بالتدخل المحدود</li>
            <li>جراحات الفقرات العنقية الميكروسكوبية</li>
          </ul>
        </div>

        {/* Clinics Locations */}
        {/* KKKKKKKKKKKA */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">أماكن العيادات</h3>
          <ul className="flex flex-col gap-4 text-[#E5E7EB]">
            <li>الدقي</li>
            <li>التجمع الخامس</li>
            <li>كفرالشيخ</li>
            <li>بورسعيد</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">التواصل</h3>
          <p className="text-[#E5E7EB]">0111111111</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container flex justify-center mx-auto mt-8 space-x-4 rtl:space-x-reverse">
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className="container mx-auto mt-4 text-center">
        <p className="text-sm text-white">
          © 2024 Ahmed Gouda. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
