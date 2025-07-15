import Copyrights from "../Copyrights";
import { WhatsApp } from "../WhatsApp";
import { FooterProps } from "./FooterProps";

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="h-12 w-full flex items-center justify-center">
      <Copyrights />
      <div>
        <WhatsApp locale={locale} />
      </div>
    </footer>
  );
}
