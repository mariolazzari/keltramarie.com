import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProvidersProps } from "./ProvidersProps";
import { NextIntlClientProvider } from "next-intl";

export function Providers({ children }: ProvidersProps) {
  return (
    <NextIntlClientProvider>
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
