import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProvidersProps } from "./ProvidersProps";
import { NextIntlClientProvider } from "next-intl";

export function Providers({ children, locale = "it" }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
