"use client";
import { useEffect, useState } from "react";
import { SocialMediaProps } from "./SocialMediaProps";
import { InstagramEmbed } from "react-social-media-embed";

export function SocialMedia({ href, title }: SocialMediaProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <InstagramEmbed
        url={`https://www.instagram.com${href}`}
        width={300}
        captioned
        suppressHydrationWarning
      />
    </div>
  );
}
