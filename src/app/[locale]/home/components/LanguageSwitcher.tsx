"use client";

import { useLocale } from "next-intl";
import { usePathname } from "../../../../i18n/routing";
import { useRouter } from "../../../../i18n/routing";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import US from 'country-flag-icons/react/3x2/US'
import FR from 'country-flag-icons/react/3x2/FR'

interface Language {
  code: string;
  name: string;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const languages: Language[] = [
    { code: "fr", name: "Français"},
    { code: "en", name: "English" },
  ];

  // Find current language
  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const switchLanguage = (language: Language) => {
    router.replace(pathname, { locale: language.code });
    setOpen(false);
  };

    const getFlag = (code: string) =>
    code === "fr" ? <FR className="h-4 w-6" /> : <US className="h-4 w-6" />;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span className="mr-1">{getFlag(currentLanguage.code)}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language)}
            className="flex items-center gap-2"
          >
            <span className="mr-1">{getFlag(language.code)}</span>
            {language.name}
            {language.code === locale && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
