import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Title({ children, className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold text-center text-primary mb-2",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
