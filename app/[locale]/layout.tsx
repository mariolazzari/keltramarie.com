import type { Metadata } from "next";
import "../globals.css";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "@/components/SideBar";
import { Providers } from "@/components/Providers";
import { Layout } from "@/types/Layout";
import { geistMono, geistSans } from "../fonts";

export const metadata: Metadata = {
  title: "Keltra Marie | Living Positively",
  description: "Keltra Marie's personal website, digital creator",
};

async function RootLayout({ children, params }: Layout) {
  const { locale } = await params;

  console.log("\n\n\n\nlocale", locale);

  return (
    <html lang={locale || "en"} suppressHydrationWarning>
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
