"use client";
import { useEffect, useState } from "react";
import { InstagramEmbed, InstagramEmbedProps } from "react-social-media-embed";

export function SocialMedia(props: InstagramEmbedProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <InstagramEmbed {...props} />;
}
