"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link as I18Link } from "./../../navigation";
import menuData from "./menuData";

const Header = () => {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle language dropdown click
  const handleLanguageClick = (e) => {
    e.stopPropagation(); // Prevent propagation to the document
    setDropdownOpen(!dropdownOpen); // Toggle language dropdown
    setHamburgerOpen(false); // Close hamburger if open
  };

  // Handle hamburger menu click
  const handleHamburgerClick = (e) => {
    e.stopPropagation(); // Prevent propagation to the document
    setHamburgerOpen(!hamburgerOpen); // Toggle hamburger menu
    setDropdownOpen(false); // Close language dropdown if open
  };

  return (
    <header dir={dir} className="flex h-[100px] w-full items-center bg-[#000C1D]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="max-w-full px-4 w-60 xl:me-12">
            <I18Link href="/" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
              <Image src="/images/logo/logo.svg" alt="logo" width={140} height={30} className="w-full dark:hidden" />
            </I18Link>
          </div>
          <div className="flex items-center justify-between w-full px-2">
            {/* Desktop Navbar */}
            <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-6 lg:bg-transparent lg:p-0">
              <ul className="flex items-center gap-6">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="relative px-[32px] py-2 text-base font-semibold text-[#B8E2F6] group">
                    {menuItem.path ? (
                      <I18Link href={menuItem.path}>{menuItem.title}</I18Link>
                    ) : (
                      <p className="text-[#FFFFFF] cursor-pointer">{menuItem.title}</p>
                    )}
                    {/* Smooth dash underline on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8E2F6] transition-all duration-300 ease-in-out group-hover:w-full group-hover:border-b-dashed"></span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Language Dropdown */}
          <div className="relative flex items-center justify-between gap-4 pe-12 lg:pe-0">
            <button
              className={`flex items-center ${dropdownOpen ? "flex-row" : "flex-col"} gap-3 text-white`}
              onClick={handleLanguageClick}
            >
              <Image src="/images/logo/language-icon.svg" width={30} height={30} alt="language access icon" />
              <span className="text-sm transition-opacity duration-300">{locale === "en" ? "Language" : "اللغة"}</span>
            </button>

            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="flex flex-col gap-2 absolute top-10 start-[-70px] w-[200px] rounded-md bg-[#000C1D] text-white shadow-lg z-10 p-4"
              >
                {(["ar", "en"] as const).map((lang) => (
                  <I18Link key={lang} href="/" locale={lang}>
                    <label className="flex items-center justify-between w-full gap-2 p-2 rounded-md bg-[#5691AD80] cursor-pointer">
                      <div className="flex gap-2">
                        <Image
                          src={`/images/logo/${lang === "ar" ? "eg" : "us"}-flag.svg`}
                          width={24}
                          height={24}
                          alt={`choose ${lang === "ar" ? "Arabic" : "English"} language`}
                        />
                        <span>{lang === "ar" ? "العربية (AR)" : "English (US)"}</span>
                      </div>
                      <input
                        type="radio"
                        name="language"
                        checked={locale === lang}
                        readOnly
                        className="text-white bg-transparent border-white form-radio focus:ring-0"
                      />
                    </label>
                  </I18Link>
                ))}
              </div>
            )}
          </div>
          {/* Hamburger Menu Button */}
          <div className="relative lg:hidden">
            <button ref={hamburgerRef} className="flex items-center text-white" onClick={handleHamburgerClick}>
              <Image src="/images/logo/burger-menu-mobile.svg" width={72} height={72} alt="menu icon" />
            </button>
            {hamburgerOpen && (
              <div className="absolute top-12 end-0 w-52 bg-[#000C1D] text-white z-20">
                <ul className="flex flex-col items-center justify-center py-4">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="py-2 text-base font-semibold text-[#B8E2F6] w-full flex justify-center border-b border-white">
                      {menuItem.path ? (
                        <I18Link href={menuItem.path}>{menuItem.title}</I18Link>
                      ) : (
                        <p className="text-[#FFFFFF] cursor-pointer">{menuItem.title}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
