"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/utils/locale";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const languages = [
      { value: 'en', label: t('en') },
      { value: 'es', label: t('es') }
  ];

  function onChange(value: string) {
      startTransition(() => {
          setUserLocale(value as Locale);
      });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.value} onClick={() => onChange(lang.value)}>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}