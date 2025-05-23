"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled past hero section (approx 760px height)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full ${
        isScrolled ? "bg-white" : "bg-transparent"
      } shadow-sm z-50 transition-colors duration-300  `}
    >
      <div className=" mx-auto mt-0 px-4 md:px-8 flex flex-col items-center justify-between">
        <div className="w-full flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="sm:flex hidden">
              <Image
                src="/flexacademyLogo.png"
                alt="FlexAcademy Logo"
                width={128}
                height={87}
                className="h-[70px] w-[96px] object-contain"
              />
            </Link>
            <Link href="/" className="flex sm:hidden">
              <Image
                src="/flexacademyLogo.png"
                alt="FlexAcademy Logo"
                width={128}
                height={87}
                className="h-[50px] w-[76px] object-contain"
              />
            </Link>
          </div>

          {/* Tab Bar - Only visible on desktop */}
          <div className="hidden sm:flex items-center">
            <div className="relative p-1 bg-gray-200 rounded-full w-482px md:w-[264px] xl:w-[482px] h-[40.5px]">
              <div className="flex w-full h-full">
                <Link
                  href="/"
                  className="flex-1 h-full rounded-full flex items-center justify-center transition-all text-[#090909]"
                >
                  <span className="font-medium text-xs xl:text-[15px]">
                    {t("Header.Professional_training")}
                  </span>
                </Link>
                <Link
                  href="/language"
                  className="flex-1 h-full rounded-full flex items-center justify-center transition-all bg-white border-2 border-[#0084FF] text-[#007AFF] shadow-sm"
                >
                  <span className="font-medium text-xs xl:text-[17px]">
                    {t("Header.Language_courses")}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <nav className="flex items-center gap-7">
              <Link
                href="/"
                className="font-medium text-base hover:text-gray-700"
              >
                {t("Header.Home")}
              </Link>
              <Link
                href="/about"
                className="font-medium text-base hover:text-gray-700"
              >
                {t("Header.About")}
              </Link>
              <Link
                href="/Trainings"
                className="font-medium text-base hover:text-gray-700"
              >
                {t("Header.Trainings")}
              </Link>
              <Link
                href="/Shop"
                className="font-medium text-base hover:text-gray-700"
              >
                {t("Header.Shop")}
              </Link>
              <Link
                href="/Contact"
                className="font-medium text-base hover:text-gray-700"
              >
                {t("Header.Contact")}
              </Link>
            </nav>

            <Link
              href="/Register"
              className="px-6 py-2 bg-[#000D85] hover:bg-[#000D85] text-white rounded-full shadow-lg font-medium text-base"
            >
              {t("Header.Register")}
            </Link>

            {/*             <div className="flex items-center gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <span className="font-medium text-base">EN</span>
              <ChevronDown className="h-4 w-4" />
            </div> */}
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Tab Bar - Only visible on mobile */}
        <div className="sm:hidden w-full pb-3">
          <div className="relative p-1 bg-gray-300 rounded-full w-[300px] mx-auto md:w-[300px] h-[40.5px]">
            <div className="flex w-full h-full">
              <Link
                href="/"
                className="flex-1 h-full rounded-full flex items-center justify-center transition-all text-[#090909]"
              >
                <span className="font-medium text-xs xl:text-[15px]">
                  {t("Header.Professional_training")}
                </span>
              </Link>
              <Link
                href="/language"
                className="flex-1 h-full rounded-full flex items-center justify-center transition-all bg-white border-2 border-[#0084FF] text-[#007AFF] shadow-sm"
              >
                <span className="font-medium text-xs xl:text-[17px]">
                  {t("Header.Language_courses")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white max-w-sm mx-auto ">
          <div className=" text-center pt-2 pb-4 space-y-1 ">
            <Link
              href="/"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Header.Home")}
            </Link>
            <Link
              href="/about"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Header.About")}
            </Link>
            <Link
              href="/Trainings"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Header.Trainings")}
            </Link>
            <Link
              href="/Shop"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Header.Shop")}
            </Link>
            <Link
              href="/contact"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Header.Contact")}
            </Link>

            <div className="flex flex-col gap-4 pt-2 items-center">
              <Link
                href="/Register"
                className="px-6 py-3 bg-[#000D85] text-white rounded-full shadow-lg font-medium text-sm w-full md:w-auto"
              >
                {t("Header.Register")}
              </Link>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;
