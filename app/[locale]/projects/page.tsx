import { SocialMedia } from "@/components/SocialMedia";
import { Title } from "@/components/Typography";
import { getTranslations } from "next-intl/server";

async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");

  const projects = [
    {
      href: "/reel/DKlsHCiI3qj",
      title: "ADC Skincare",
    },
    {
      href: "/reel/DIVyLSFIFaA",
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
    <div className="flex flex-col items-center justify-center gap-10 py-4">
      <Title className="mb-[-100px] md:mb-4">{t("title")}</Title>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {projects.map(({ href, title }) => (
          <SocialMedia
            key={href}
            className="scale-75 md:scale-100 mb-[-200px] md:mb-0"
            title={title}
            url={`https://www.instagram.com${href}`}
            width={400}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
