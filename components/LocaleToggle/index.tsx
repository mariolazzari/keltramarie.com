"use client";
import { FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect, usePathname } from "next/navigation";
import { useSidebar } from "../ui/sidebar";
import { useTranslations } from "next-intl";

export function LocaleToggle() {
  const { open } = useSidebar();
  const t = useTranslations("Sidebar");
  const path = usePathname();

  const onClick = (locale: string) => {
    const goto =
      locale === "it" ? path.replace("en", "it") : path.replace("it", "en");

    console.log(locale, goto);

    redirect(goto);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-0 cursor-pointer hover:bg-secondary hover:text-white">
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <div className="flex gap-2 text-left">
              <FaGlobe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <FaGlobe className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
          </Button>
          {open && <span>{t("locale")}</span>}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => onClick("en")}>
          {t("en")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onClick("it")}>
          {t("it")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
