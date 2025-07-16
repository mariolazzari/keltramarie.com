"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { WhatsAppProps } from "./WhatsAppProps";
import { useTheme } from "next-themes";

export function WhatsApp({ locale, ...props }: WhatsAppProps) {
  const { theme } = useTheme();

  return (
    <FloatingWhatsApp
      avatar="/images/logo.png"
      phoneNumber={process.env.NEXT_PUBLIC_PHONE || ""}
      accountName="Keltra Marie"
      chatMessage={
        locale === "it"
          ? "Ciao! Come posso aiutarti?"
          : "Hi! How can I help you?"
      }
      statusMessage={
        locale === "it"
          ? "Rispondo in genere entro 24 ore"
          : "I usually reply within 24 hours"
      }
      placeholder={
        locale === "it" ? "Scrivi un messaggio..." : "Type a message..."
      }
      darkMode={theme === "dark"}
      notification
      notificationSound
      {...props}
    />
  );
}
