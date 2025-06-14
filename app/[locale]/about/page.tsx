import { WorkWithMe } from "@/components/Buttons";
import { Logo } from "@/components/Logo";
import { Title } from "@/components/Typography";
import { Paragraph } from "@/components/Typography/Paragraph";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const ps = ["p1", "p2", "p3", "p4", "p5", "p6", "p7"];

  return (
    <div className="flex justify-center min-h-screen p-8 md:p-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-primary text-2xl">
            <Logo width={100} height={100} className="mx-auto mb-4" />
            {t("title")}
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="max-w-screen">
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
        </CardContent>
        <CardFooter className="flex justify-center">
          <WorkWithMe />
        </CardFooter>
      </Card>
    </div>
  );
}

export default AboutPage;
