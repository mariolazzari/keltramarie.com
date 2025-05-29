"use client";
import { useSidebar } from "../ui/sidebar";
import { cn } from "@/lib/utils";

function Copyrights() {
  const { open } = useSidebar();
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center gap-1">
      <p
        className={cn(
          "text-xs transition-opacity duration-100",
          open ? "opacity-100" : "opacity-0"
        )}
      >
        &copy; Keltra Marie {year} - All rights reserved
      </p>
    </div>
  );
}

export default Copyrights;
