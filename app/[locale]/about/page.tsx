import { WorkWithMe } from "@/components/Buttons";
import { Title } from "@/components/Typography";
import { Paragraph } from "@/components/Typography/Paragraph";
import { getTranslations } from "next-intl/server";

async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const ps = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"];

  return (
    <div className="flex flex-col items-center h-screen p-8 md:p-16">
      <div className="p-2 md:p-8 border border-primary rounded-lg shadow-lg max-w-screen">
        <Title>{t("title")}</Title>

        {ps.map(p => (
          <Paragraph
            key={p}
            className={
              p === "p3" || p === "p6" ? "my-4 italic text-primary" : ""
            }
          >
            {t(p)}
          </Paragraph>
        ))}

        <div className="text-center">
          <WorkWithMe />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
