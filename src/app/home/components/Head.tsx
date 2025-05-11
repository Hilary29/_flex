"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import TopNavbar from "./TopNavbar";

const Head = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tabs = [
    { id: 0, label: "Professional training" },
    { id: 1, label: "Language courses" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <TopNavbar />
      <div className="container mx-auto mt-8 px-4 flex flex-col items-center justify-between">
        <div className="w-full flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/flexacademyLogo.png"
                alt="FlexAcademy Logo"
                width={128}
                height={87}
                className="h-[70px] w-[96px] object-contain"
              />
            </Link>
          </div>

          {/* Tab Bar - Only visible on desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative p-1 bg-gray-300 rounded-full w-482px md:w-[264px] xl:w-[482px] h-[40.5px]">
              <div className="flex w-full h-full">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 h-full rounded-full flex items-center justify-center transition-all ${
                      activeTab === tab.id
                        ? "bg-white border-2 border-[#0084FF] text-[#007AFF] shadow-sm"
                        : "text-[#090909]"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        activeTab === tab.id ? "text-xs xl:text-[17px]" : "text-xs xl:text-[15px]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
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
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-base hover:text-gray-700"
              >
                About us
              </Link>
              <Link
                href="/programs"
                className="font-medium text-base hover:text-gray-700"
              >
                Programs
              </Link>
              <Link
                href="/features"
                className="font-medium text-base hover:text-gray-700"
              >
                Features
              </Link>
              <Link
                href="/contact"
                className="font-medium text-base hover:text-gray-700"
              >
                Contact
              </Link>
            </nav>

            <button className="px-6 py-4 bg-[#000D85] text-white rounded-full shadow-lg font-medium text-sm">
              Login
            </button>

            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-medium text-base">EN</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Mobile Tab Bar - Only visible on mobile */}
        <div className="md:hidden w-full pb-3">
          <div className="relative p-1 bg-gray-100 rounded-full w-[300px] mx-auto md:w-[300px] h-[40.5px]">
            <div className="flex w-full h-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 h-full rounded-full flex items-center justify-center transition-all ${
                    activeTab === tab.id
                      ? "bg-white border-2 border-[#0084FF] text-[#007AFF] shadow-sm"
                      : "text-[#090909]"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      activeTab === tab.id ? "text-xs md:text-[17px]" : "text-xs md:text-[15px]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              href="/"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/programs"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/features"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="block py-2 font-medium text-base hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-4 pt-2">
              <button className="px-6 py-3 bg-[#000D85] text-white rounded-full shadow-lg font-medium text-sm w-full md:w-auto">
                Login
              </button>

              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-medium text-base">EN</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Head;
