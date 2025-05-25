"use client";
import { FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";
import { useSidebar } from "../ui/sidebar";

export function LocaleToggle() {
  const { open } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-0">
          <Button variant="ghost" size="icon">
            <div className="flex gap-2 text-left">
              <FaGlobe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <FaGlobe className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
          </Button>
          {open && <span>Locale</span>}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => redirect("/en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => redirect("/it")}>
          Itaiano
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
