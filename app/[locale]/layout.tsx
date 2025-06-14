import "../globals.css";
import type { Metadata } from "next";
import { SideBar } from "@/components/SideBar";
import { Providers } from "@/components/Providers";
import { Layout } from "@/types/Layout";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { montserrat } from "@/app/fonts";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Keltra Marie | Living Positively",
  description: "Keltra Marie's personal website, digital creator",
};

async function RootLayout({ children, params }: Layout) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <Providers locale={locale}>
          <SideBar />
          <SidebarTrigger className="xs:absolute xs:left-0 xs:top-0" />
          <main className="w-full h-screen overflow-y-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
