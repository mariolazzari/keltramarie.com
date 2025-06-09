import { SocialMedia } from "@/components/SocialMedia";
import { Title } from "@/components/Typography";
import { getTranslations } from "next-intl/server";

async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");

  const projets = [
    {
      href: "/p/DKkLWgGJrm3",
      title: "ADC Skincare",
    },
    {
      href: "/real/DIVyLSFIFaA/",
      title: "Bluest Frame",
    },
    {
      href: "/p/DIb34pXo3t_/",
      title: "Keltra Marie",
    },
    {
      href: "/p/DJRGVSNIjZJ/",
      title: "Surf Skate",
    },
    {
      href: "/reel/DKUNExGoJM9/",
      title: "Boom Boom",
    },
    {
      href: "/reel/DKfRKbmosW5/",
      title: "Idea 5 (Speed Up)",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4">
      <Title>{t("title")}</Title>
      <div className="flex justify-center gap-16 flex-wrap">
        {projets.map(p => (
          <SocialMedia key={p.href} {...p} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
