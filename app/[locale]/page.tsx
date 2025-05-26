import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex flex-col items-center p-4">
      <Image
        className="rounded-full mb-10"
        src="/logo.png"
        width={200}
        height={200}
        alt="logo"
        priority
      />

      <h1 className="text-5xl text-primary mb-4 font-bold text-center">
        {t("title")}
      </h1>
      <p className="text-lg max-w-lg font-semibold text-justify mb-6">
        {t("intro")}
      </p>

      <Link href="mailto:keltramarketing@gmail.com" target="_blank">
        <Button>Work with me</Button>
      </Link>
    </div>
  );
}

export default Home;
