import { WorkWithMe } from "@/components/Buttons";
import { Logo } from "@/components/Logo";
import { Paragraph } from "@/components/Typography/Paragraph";
import { getTranslations } from "next-intl/server";

async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex flex-col items-center p-4">
      <Logo />

      <h1 className="text-5xl text-primary mb-4 font-bold text-center">
        {t("title")}
      </h1>
      <Paragraph className="font-semibold text-center">{t("intro")}</Paragraph>

      <WorkWithMe />
    </div>
  );
}

export default Home;
