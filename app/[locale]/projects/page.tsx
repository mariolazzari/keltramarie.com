import { InstagramStories } from "@/components/InstagramStories";
import { SocialMedia } from "@/components/SocialMedia";
import { Title } from "@/components/Typography";
import { getTranslations } from "next-intl/server";

async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");

  const projects = [
    "/reel/DKUNExGoJM9",
    "/reel/DLkwIrMoDCl",
    //"/s/aGlnaGxpZ2h0OjE3OTYyNjg0NDYzNzgxNTMw",
    //"/s/aGlnaGxpZ2h0OjE3OTYyNjg0NDYzNzgxNTMw?story_media_id=3648981560576859750&igsh=Z3M4Mm55bmdqZ2hp",
    // "/reel/DKlsHCiI3qj",
    // "/reel/DIVyLSFIFaA",
    // "/p/DIb34pXo3t_/",
    // "/p/DJRGVSNIjZJ/",
    // "/reel/DKUNExGoJM9/",
    // "/reel/DKfRKbmosW5/",
    // "/reel/DKlsHCiI3qj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Title className="-mb-8 md:mb-8">{t("title")}</Title>

      {/* <InstagramStories /> */}

      <div className="flex justify-center items-center flex-wrap gap-10">
        {projects.reverse().map(p => (
          <SocialMedia
            className="scale-75 md:scale-100 mb-[-200px] md:mb-0"
            key={p}
            url={`https://www.instagram.com${p}`}
            width={400}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
