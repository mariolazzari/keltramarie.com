"use client";
import { useEffect, useState } from "react";
import { useSidebar } from "../ui/sidebar";
import { FaCopyright } from "react-icons/fa";

function Copyrights() {
  const [text, setText] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const { open } = useSidebar();
  const year = new Date().getFullYear();

  useEffect(() => {
    const text = open ? `Keltra Marie ${year} - All rights reserved` : "";
    setTimeout(() => {
      setText(text);
      setShowIcon(open);
    }, 300);
  }, [open, setText]);

  if (!open) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 justify-center text-xs">
      {showIcon && <FaCopyright />}
      <p>{text}</p>
    </div>
  );
}

export default Copyrights;
