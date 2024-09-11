"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as I18Link } from "./../../navigation";
import menuData from "./menuData";
import { useTranslations } from "next-intl";

const Header = () => {
  // const t = useTranslations("links");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const usePathName = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  return (
    <header
      dir={dir}
      className={`flex h-[128px] w-full items-center bg-[#000C1D] `}
      //   ${
      //   sticky
      //     ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
      //     : "bg-[#000C1D]"
      // }
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:me-12">
            <I18Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              } `}
            >
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
            </I18Link>
          </div>
          <div className="flex w-full items-center justify-between px-2">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute end-2 top-1/2 block translate-y-[-50%] rounded-lg px-1 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={` absolute end-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="flex items-center justify-center gap-6  ">
                  {menuData.map((menuItem, index) => (
                    <li
                      key={index}
                      className="px-[32px] py-2 text-base font-semibold text-[#B8E2F6] "
                    >
                      {menuItem.path ? (
                        <I18Link
                          href={menuItem.path}
                          // className={`flex  lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          //   usePathName === menuItem.path
                          //     ? " "
                          //     : " hover:text-primary"
                          // }`}
                        >
                          {menuItem.title}
                        </I18Link>
                      ) : (
                        <>
                          <p className="text-[#FFFFFF]group-hover:text-primary flex cursor-pointer items-center justify-between py-2  text-base">
                            {menuItem.title}
                          </p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end gap-4 pe-12 lg:pr-0">
              <I18Link href="/" locale={locale === "ar" ? "en" : "ar"}>
                <button className="border-gray-3 dark:border-dark-3 inline-block rounded-full border px-2 py-1 text-xs font-normal text-white transition hover:border-[#B8E2F6] hover:bg-[#B8E2F6] hover:text-dark  md:px-3 md:text-base">
                  {locale === "en" ? "العربيه" : "English"}
                </button>
              </I18Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className="flex h-[128px] w-full items-center bg-[#000C1D]">
//       <div className="container">
//         <p className="text-[25px] font-black text-white">Logo</p>
//       </div>
//     </header>
//   );
// };
// export default Header;
