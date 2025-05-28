"use client";

import { useSidebar } from "../ui/sidebar";
import { FaCopyright } from "react-icons/fa";

function Copyrights() {
  const { open } = useSidebar();
  if (!open) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 ">
      <FaCopyright />
      <p className="text-sm">Ketra Marie {new Date().getFullYear()}</p>
    </div>
  );
}

export default Copyrights;
