import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export function Logo({
  src = "/images/logo.png",
  alt = "Logo",
  width = 200,
  height = 200,
  className,
  ...props
}: Partial<ImageProps>) {
  return (
    <Image
      className={cn(
        "rounded-full mt-4 mb-10 border-primary border-2",
        className
      )}
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      {...props}
    />
  );
}
