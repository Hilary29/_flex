import type React from "react";
import { getTranslations } from "next-intl/server";
import { Link as LocaleLink } from "@/i18n/routing";
import {
  ChevronRight,
} from "lucide-react";
import Footer from "../home/components/Footer";
import Header from "../home/components/Header";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Trainings",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function TrainingsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Trainings",
  });
  const headerT = await getTranslations({
    locale: params.locale,
    namespace: "Header",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Title Banner */}
      <div className="bg-[#1b3d74] text-white pb-8 pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("trainings_title")}
          </h1>
          <div className="flex items-center mt-4 text-sm">
            <LocaleLink href="/" className="hover:underline">
              {headerT("home")}
            </LocaleLink>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{t("trainings_breadcrumb")}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">{children}</main>

      <Footer />
    </div>
  );
}
