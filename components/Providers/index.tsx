import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProvidersProps } from "./ProvidersProps";
import { NextIntlClientProvider } from "next-intl";

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
