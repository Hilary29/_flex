"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const t = useTranslations();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your API
      console.log("Subscribing email:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000D85] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-bold mb-4">FLEX ACADEMY</h3>
            <p className="text-blue-100 mb-6">
              {t("Footer.description")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/flexakademy?mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/flexacademy21?igsh=dWl3Mno5OGU3MmJj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/flexibleacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Location section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2" size={20} /> {t("Footer.LOCATION")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-semibold mr-2">DOUALA:</span>
                <span className="text-blue-100">CAMPUS-II (ANGE RAPHAEL)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">YAOUNDE:</span>
                <span className="text-blue-100">BIYEM-ASSI LAC</span>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Phone className="mr-2" size={20} /> CONTACT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+237699557415"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  699 557 415
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+237675309658"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  675 309 658
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:flexacademy237@gmail.com"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  flexacademy237@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div>
            <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
            <p className="text-blue-100 mb-4">
              {t("Footer.newsletter_description")}
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-2"
            >
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-blue-900/50 border-blue-700 text-white placeholder:text-blue-300 rounded-r-none focus-visible:ring-blue-500"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 rounded-l-none px-3"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </Button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm"
                >
                  {t("Footer.Thank_you_for_subscribing")}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Quick links */}
        <div className="py-6 border-t border-blue-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              t("Footer.Home"),
              t("Footer.Courses"),
              t("Footer.About_us"),
              t("Footer.Contact"),
              t("Footer.FAQ"),
              t("Footer.Privacy"),
            ].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-blue-100 hover:text-white flex items-center group transition-colors"
              >
                <ArrowRight
                  size={14}
                  className="mr-1 transform group-hover:translate-x-1 transition-transform duration-200"
                />
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm text-center sm:text-left mb-4 sm:mb-0">
            © {currentYear} {t("Footer.All_rights_reserved")}
          </p>
          <div className="flex items-center space-x-2 text-sm text-blue-200">
            <Link href="#" className="hover:text-white transition-colors">
              {t("Footer.Terms_of_service")}
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              {t("Footer.Privacy_policy")}
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
