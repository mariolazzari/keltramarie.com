import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Paragraph({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("text-lg text-justify max-w-lg", className)} {...props}>
      {children}
    </p>
  );
}
