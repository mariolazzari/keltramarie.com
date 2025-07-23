import { SocialMedia } from "@/components/SocialMedia";
import { Title } from "@/components/Typography";
import { getTranslations } from "next-intl/server";

async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");

  const projects = [
    "/reel/DKlsHCiI3qj",
    "/reel/DIVyLSFIFaA",
    "/p/DIb34pXo3t_/",
    "/p/DJRGVSNIjZJ/",
    "/reel/DKUNExGoJM9/",
    "/reel/DKfRKbmosW5/",
    "/reel/DKlsHCiI3qj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Title className="-mb-8 md:mb-8">{t("title")}</Title>

      <div className="flex justify-center items-center flex-wrap gap-10">
        {projects.map(p => (
          <SocialMedia
            key={p}
            className="scale-75 md:scale-100 mb-[-200px] md:mb-0"
            url={`https://www.instagram.com${p}`}
            width={400}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
