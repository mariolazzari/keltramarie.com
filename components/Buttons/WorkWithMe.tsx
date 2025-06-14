import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { getTranslations } from "next-intl/server";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export async function WorkWithMe({
  className,
  ...props
}: ComponentProps<"button">) {
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
