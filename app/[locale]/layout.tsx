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
import { WhatsApp } from "@/components/WhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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

          <div className="flex h-dvh flex-col justify-between items-center w-full">
            <Header />

            <main className="h-[calc(100dvh-96px)] overflow-y-auto w-full">
              {children}
            </main>

            <Footer locale={locale} />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
