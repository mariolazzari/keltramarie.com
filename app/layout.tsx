import type { Metadata } from "next";
import "./globals.css";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "@/components/SideBar";
import { Providers } from "@/components/Providers";
import { Layout } from "@/types/Layout";
import { geistMono, geistSans } from "./fonts";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Keltra Marie | Living Positively",
  description: "Keltra Marie's personal website, digital creator",
};

async function RootLayout({ children, params }: Layout) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SideBar />
          <main className="w-full h-screen overflow-y-auto">
            <SidebarTrigger />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
