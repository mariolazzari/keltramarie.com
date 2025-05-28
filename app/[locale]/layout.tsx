import type { Metadata } from "next";
import "../globals.css";
import { Montserrat } from "next/font/google";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "@/components/SideBar";
import { Providers } from "@/components/Providers";
import { Layout } from "@/types/Layout";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Keltra Marie | Living Positively",
  description: "Keltra Marie's personal website, digital creator",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
