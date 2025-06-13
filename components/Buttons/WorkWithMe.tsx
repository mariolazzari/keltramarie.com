import Link from "next/link";
import { Button } from "../ui/button";
import { getTranslations } from "next-intl/server";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"button">;

export async function WorkWithMe({ className, ...props }: Props) {
  const t = await getTranslations("HomePage");

  return (
    <Link href="mailto:keltramarketing@gmail.com" target="_blank">
      <Button
        className={cn("mt-4 rounded-lg cursor-pointer", className)}
        {...props}
      >
        {t("work")}
      </Button>
    </Link>
  );
}
