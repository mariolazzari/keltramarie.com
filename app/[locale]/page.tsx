import { WorkWithMe } from "@/components/Buttons";
import { Logo } from "@/components/Logo";
import { Title } from "@/components/Typography";
import { Paragraph } from "@/components/Typography/Paragraph";
import { getTranslations } from "next-intl/server";

async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex flex-col mt-10 items-center">
      <Logo />
      <Title>{t("title")}</Title>
      <Paragraph className="font-semibold text-center">{t("intro")}</Paragraph>
      <WorkWithMe />
    </div>
  );
}

export default Home;
