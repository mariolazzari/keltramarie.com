"use client";
import { useEffect, useState } from "react";
import { InstagramEmbed, InstagramEmbedProps } from "react-social-media-embed";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  title: string;
  text?: string;
} & InstagramEmbedProps;

export function SocialMedia({ title, text, ...props }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary text-center text-2xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
      <CardContent className="w-[350px] md:w-[400px]">
        <InstagramEmbed {...props} />
      </CardContent>
    </Card>
  );
}
