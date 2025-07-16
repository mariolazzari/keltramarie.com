"use client";
import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "../ui/sidebar";
import { useTranslations } from "next-intl";
import { ThemeToggleProps } from "./ThemeToggleProps";

export function ThemeToggle({ showLabel = true }: ThemeToggleProps) {
  const { setTheme } = useTheme();
  const { open } = useSidebar();
  const t = useTranslations("Sidebar");

  const items = [
    {
      title: t("lightMode"),
      icon: Sun,
      action: () => setTheme("light"),
    },
    {
      title: t("darkMode"),
      icon: Moon,
      action: () => setTheme("dark"),
    },
    {
      title: t("systemMode"),
      icon: Settings,
      action: () => setTheme("system"),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-0 cursor-pointer hover:bg-secondary hover:text-white">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary hover:text-white"
          >
            <div className="flex gap-2 text-left">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
          </Button>
          {open && showLabel && <span>{t("theme")}</span>}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {items.map(item => (
          <DropdownMenuItem key={item.title} onClick={item.action}>
            <item.icon className="mr-2" /> {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
